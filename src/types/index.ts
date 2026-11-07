export type WasteCategoryId = 
  | 'paper'
  | 'cardboard'
  | 'plastic' 
  | 'metal' 
  | 'ewaste'
  | 'glass' 
  | 'organic';

export interface WasteCategoryInfo {
  id: WasteCategoryId;
  name: string;
  icon: string;
  pointsPerKg: number;
  co2SavedPerKg: number; // in kg CO2e
  description: string;
  examples: string;
  color: string;
}

export type PickupStatus = 'Requested' | 'Scheduled' | 'Collected' | 'Cancelled';

export type TimeSlot = 
  | 'Morning (08:00 - 11:00)' 
  | 'Afternoon (12:00 - 15:00)' 
  | 'Evening (16:00 - 19:00)';

export interface PickupRequest {
  id: string;
  category: WasteCategoryId;
  categoryLabel: string;
  quantityKg: number;
  pickupAddress: string;
  preferredDate: string;
  timeSlot: TimeSlot;
  notes?: string;
  status: PickupStatus;
  pointsEarned: number;
  createdAt: string;
}

export interface SolarCalculationInput {
  monthlyBill: number;
  electricityTariff: number;
  availableRoofAreaSqFt: number;
  locationState: string;
}

export interface SolarEstimate {
  monthlyBill: number;
  electricityTariff: number;
  availableRoofAreaSqFt: number;
  locationState: string;
  monthlyConsumptionKwh: number;
  monthlyGenerationKwh: number;
  suggestedCapacityKw: number;
  rooftopAreaRequiredSqFt: number;
  areaSufficient: boolean;
  approximateCostInr: number;
  monthlySavingsInr: number;
  annualSavingsInr: number;
  paybackPeriodYears: number;
  lifetimeSavings25YrInr: number;
  annualCo2OffsetKg: number;
  equivalentTreesPlanted: number;
  assumptions: {
    peakSunHours: number;
    systemEfficiency: number;
    spacePerKwSqFt: number;
    costPerKwInr: number;
    tariffEscalationRatePercent: number;
  };
}

export type SolarSystemType = 'On-Grid (Net Metered)' | 'Off-Grid (Battery Backup)' | 'Hybrid Solar';
export type SolarFinancingPreference = 'Direct Outright Purchase' | 'Solar Loan / EMI' | 'Zero-Investment Rooftop Lease';

export interface SolarEnquiry {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  systemType: SolarSystemType;
  financingPreference: SolarFinancingPreference;
  suggestedCapacityKw?: number;
  estimatedCostInr?: number;
  monthlySavingsInr?: number;
  notes?: string;
  status: 'Enquiry Received' | 'Site Survey Scheduled' | 'Feasibility Ready';
  submittedAt: string;
}

export interface RewardItem {
  id: string;
  title: string;
  description: string;
  pointsCost: number;
  category: 'voucher' | 'carbon_offset' | 'solar_discount' | 'campus_perk';
  badge: string;
  partner: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: 'waste_pickup' | 'waste_collected' | 'solar_enquiry' | 'solar_maintenance' | 'reward_redeemed' | 'referral_bonus' | 'system';
}

export type MaintenanceServiceType = 
  | 'Panel Deep Cleaning & De-soiling'
  | 'Inverter & Electrical Health Check'
  | 'Full System Audit & Thermal Imaging'
  | 'Wiring & Earthing Safety Inspection'
  | 'Comprehensive Annual AMC';

export type MaintenanceStatus = 'Booked' | 'Technician Assigned' | 'Completed' | 'Cancelled';

export interface SolarMaintenanceBooking {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  serviceAddress: string;
  city: string;
  systemCapacityKw: number;
  serviceType: MaintenanceServiceType;
  preferredDate: string;
  timeSlot: TimeSlot;
  estimatedFeeInr: number;
  notes?: string;
  status: MaintenanceStatus;
  bookedAt: string;
}

export type ReferralUserStatus = 'Registered' | 'First Collection Verified';
export type ReferralRewardStatus = 'Pending' | 'Rewarded';

export interface ReferralRecord {
  id: string;
  referralCode: string;
  referredUserName: string;
  referredUserEmail: string;
  date: string;
  userStatus: ReferralUserStatus;
  rewardStatus: ReferralRewardStatus;
  referrerPointsAwarded: number;
  referredPointsAwarded: number;
  completedAt?: string;
}

export interface UserProfile {
  name: string;
  email: string;
  collegeId: string;
  department: string;
  campusLocation: string;
  greenPointsBalance: number;
  lifetimePointsEarned: number;
  referralCode?: string;
  referredBy?: string;
  referralRewardClaimed?: boolean;
}
