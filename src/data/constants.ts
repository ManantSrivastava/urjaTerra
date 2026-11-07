import { WasteCategoryInfo, RewardItem, MaintenanceServiceType } from '@/types';

export const WASTE_CATEGORIES: WasteCategoryInfo[] = [
  {
    id: 'paper',
    name: 'Paper',
    icon: 'FileText',
    pointsPerKg: 4,
    co2SavedPerKg: 1.3,
    description: 'Dry notebooks, newspapers, office stationary, exam booklets, shredded paper.',
    examples: 'Newspapers, office paper, notebooks, exam sheets',
    color: 'emerald',
  },
  {
    id: 'cardboard',
    name: 'Cardboard',
    icon: 'Package',
    pointsPerKg: 5,
    co2SavedPerKg: 1.5,
    description: 'Corrugated cartons, e-commerce delivery boxes, cereal boxes, paperboard.',
    examples: 'Shipping boxes, delivery cartons, packaging board',
    color: 'amber',
  },
  {
    id: 'plastic',
    name: 'Plastic',
    icon: 'Package',
    pointsPerKg: 6,
    co2SavedPerKg: 1.8,
    description: 'PET bottles, HDPE containers, cleaned packaging, wrappers & hard plastics.',
    examples: 'Water bottles, milk jugs, shampoo bottles, clean food containers',
    color: 'emerald',
  },
  {
    id: 'metal',
    name: 'Metal',
    icon: 'Shield',
    pointsPerKg: 10,
    co2SavedPerKg: 4.5,
    description: 'Beverage cans, scrap metal, copper wiring, tin food cans, aluminum trays.',
    examples: 'Soda cans, aerosol cans (empty), metal lids, aluminum trays',
    color: 'slate',
  },
  {
    id: 'ewaste',
    name: 'E-waste',
    icon: 'Cpu',
    pointsPerKg: 18,
    co2SavedPerKg: 9.2,
    description: 'Old mobile phones, chargers, laptops, circuit boards, batteries, electronic cords.',
    examples: 'Dead batteries, earphones, old routers, broken motherboards, cables',
    color: 'indigo',
  },
  {
    id: 'glass',
    name: 'Glass',
    icon: 'Wine',
    pointsPerKg: 3,
    co2SavedPerKg: 0.8,
    description: 'Whole or crushed beverage bottles, laboratory glassware, glass jars.',
    examples: 'Beverage bottles, cosmetic jars, sauce containers (clean)',
    color: 'teal',
  },
  {
    id: 'organic',
    name: 'Organic',
    icon: 'Leaf',
    pointsPerKg: 2,
    co2SavedPerKg: 0.6,
    description: 'Cafeteria vegetable scraps, coffee grounds, garden clippings for composting.',
    examples: 'Fruit peelings, vegetable trim, tea leaves, dry clippings',
    color: 'green',
  },
];

export const SOLAR_REGIONS: { state: string; peakSunHours: number; averageTariff: number }[] = [
  { state: 'Delhi NCR', peakSunHours: 4.8, averageTariff: 7.5 },
  { state: 'Maharashtra', peakSunHours: 5.1, averageTariff: 9.2 },
  { state: 'Karnataka', peakSunHours: 5.2, averageTariff: 8.4 },
  { state: 'Gujarat', peakSunHours: 5.5, averageTariff: 7.8 },
  { state: 'Rajasthan', peakSunHours: 5.8, averageTariff: 8.0 },
  { state: 'Tamil Nadu', peakSunHours: 5.0, averageTariff: 7.2 },
  { state: 'Telangana', peakSunHours: 5.2, averageTariff: 8.5 },
  { state: 'Uttar Pradesh', peakSunHours: 4.7, averageTariff: 7.0 },
  { state: 'West Bengal', peakSunHours: 4.5, averageTariff: 7.6 },
  { state: 'Kerala', peakSunHours: 4.6, averageTariff: 7.4 },
];

export const SOLAR_BENCHMARK_ASSUMPTIONS = {
  systemEfficiency: 0.78, // 78% Performance Ratio after thermal & inverter losses
  spacePerKwSqFt: 90,     // 90 sq ft required per 1 kWp panel capacity
  costPerKwInr: 54000,    // Industry benchmark capital cost per kW in INR
  tariffEscalationRatePercent: 3.5, // Expected annual tariff increase %
  co2FactorPerKwh: 0.82,  // kg of CO2e avoided per kWh of solar generation vs Indian grid
  treeAbsorptionKgPerYr: 21, // ~21 kg CO2 absorbed by one mature tree annually
};

export const REWARD_ITEMS: RewardItem[] = [
  {
    id: 'rw-1',
    title: '₹150 Campus Green Cafeteria Voucher',
    description: 'Valid for eco-friendly meals and organic beverages across campus cafes.',
    pointsCost: 150,
    category: 'campus_perk',
    badge: 'Popular',
    partner: 'University EcoDine',
  },
  {
    id: 'rw-2',
    title: 'Verified Tree Plantation Certificate',
    description: 'We sponsor and plant 1 native geo-tagged sapling in our urban micro-forest project.',
    pointsCost: 200,
    category: 'carbon_offset',
    badge: 'High Impact',
    partner: 'SankalpTaru Foundation Partner',
  },
  {
    id: 'rw-3',
    title: '₹1,500 Off Rooftop Solar Technical Audit',
    description: 'Comprehensive drone thermal shading analysis and structural feasibility report.',
    pointsCost: 350,
    category: 'solar_discount',
    badge: 'SolarSaathi Special',
    partner: 'SolarSaathi Certified Engineers',
  },
  {
    id: 'rw-4',
    title: 'urjaTerra Recycled Stainless Steel Bottle',
    description: 'Double-walled insulated 750ml flask made from 90% post-consumer recycled steel.',
    pointsCost: 280,
    category: 'voucher',
    badge: 'Zero-Waste Gear',
    partner: 'urjaTerra Merch',
  },
  {
    id: 'rw-5',
    title: 'Public Transit Metro Pass Recharge (₹200)',
    description: 'Clean commute incentive credited directly to your registered transit card.',
    pointsCost: 300,
    category: 'campus_perk',
    badge: 'Clean Mobility',
    partner: 'City SmartTransit',
  },
];

export const REFERRAL_CONFIG = {
  referrerRewardPoints: 100, // Referrer reward once referred user completes 1st verified collection
  referredRewardPoints: 50,  // New user welcome bonus after 1st verified collection
  codePrefix: 'UT',
};

export interface MaintenanceServiceInfo {
  id: MaintenanceServiceType;
  title: string;
  badge: string;
  description: string;
  baseFeeInr: number;
  durationEst: string;
  benefits: string[];
}

export const SOLAR_MAINTENANCE_SERVICES: MaintenanceServiceInfo[] = [
  {
    id: 'Panel Deep Cleaning & De-soiling',
    title: 'Panel Deep Cleaning & De-soiling',
    badge: 'High Yield Recovery',
    description: 'Demineralized water wash, soft microfiber brushing, bird dropping removal, and anti-static dust repelling treatment.',
    baseFeeInr: 499,
    durationEst: '1.5 - 2 Hours',
    benefits: ['Restores up to 25% lost energy yield', 'Scratch-free anti-static de-dusting', 'Drainage and runoff gutter clearance'],
  },
  {
    id: 'Inverter & Electrical Health Check',
    title: 'Inverter & Electrical Health Check',
    badge: 'Safety Certified',
    description: 'Full inspection of solar string inverters/micro-inverters, DC isolators, fuse ratings, AC/DC distribution boxes, and grid sync voltage.',
    baseFeeInr: 799,
    durationEst: '1 - 1.5 Hours',
    benefits: ['Error code diagnostic & firmware check', 'DC terminal tightening & heat scan', 'Grid synchronisation frequency calibration'],
  },
  {
    id: 'Full System Audit & Thermal Imaging',
    title: 'Full System Audit & Thermal Imaging',
    badge: 'Engineering Grade',
    description: 'Infrared thermal camera scan for hot spots, micro-cracks in cells, bypassed bypass diodes, and mounting structure rust check.',
    baseFeeInr: 1299,
    durationEst: '2 - 3 Hours',
    benefits: ['FLIR thermal hot spot detection', 'Digital health audit report with photos', 'Structural torque & tilt angle verification'],
  },
  {
    id: 'Wiring & Earthing Safety Inspection',
    title: 'Wiring & Earthing Safety Inspection',
    badge: 'Discom & Fire Safe',
    description: 'Earth resistance test (under 5 Ohms benchmark), lightning arrestor inspection, UV damaged cable replacement, and surge protection health check.',
    baseFeeInr: 699,
    durationEst: '1 - 2 Hours',
    benefits: ['Earth pit resistance measurement', 'Lightning arrestor spark gap check', 'Rodent damage protection assessment'],
  },
  {
    id: 'Comprehensive Annual AMC',
    title: 'Comprehensive Annual AMC (4 Visits)',
    badge: '365-Day Peace of Mind',
    description: 'Complete year-round package: 4 seasonal deep cleanings, 2 electrical inspections, 1 full thermal audit, and on-demand emergency callout within 24 hours.',
    baseFeeInr: 2499,
    durationEst: 'Full Year Coverage',
    benefits: ['4 scheduled quarterly visits', 'Free priority breakdown visit', '15% discount on replacement parts'],
  },
];
