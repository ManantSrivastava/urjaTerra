'use client';

import React, { useState, useEffect } from 'react';
import { useEarthSync } from '@/context/EarthSyncContext';
import { SOLAR_MAINTENANCE_SERVICES } from '@/data/constants';
import { MaintenanceServiceType, TimeSlot } from '@/types';
import { 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';

interface Props {
  onSuccess?: () => void;
  onCancel?: () => void;
}

const TIME_SLOTS: TimeSlot[] = [
  'Morning (08:00 - 11:00)',
  'Afternoon (12:00 - 15:00)',
  'Evening (16:00 - 19:00)'
];

export const SolarMaintenanceForm: React.FC<Props> = ({ onSuccess, onCancel }) => {
  const { userProfile, bookSolarMaintenance, t, language } = useEarthSync();
  const mLabels = t?.solarMaintenance || {
    title: 'Solar Panel Maintenance & Servicing',
    subtitle: 'Certified technician visits for panel de-soiling, inverter inspection, and preventative health audits.',
    bookService: 'Book Maintenance Service',
    viewBookings: 'My Maintenance Bookings',
    serviceTypeLabel: 'Select Maintenance Service Package',
    systemCapacityLabel: 'Approximate Rooftop Solar Capacity (kW)',
    contactDetailsTitle: 'Service Location & Contact Details',
    nameLabel: 'Full Name',
    phoneLabel: 'Mobile Phone Number',
    emailLabel: 'Email Address',
    addressLabel: 'Rooftop Service Address',
    cityLabel: 'City / Region',
    dateLabel: 'Preferred Service Date',
    timeSlotLabel: 'Preferred Arrival Window',
    notesLabel: 'System Observations or Issues (Optional)',
    notesPlaceholder: 'e.g. Dust buildup from nearby construction, low generation alert on app...',
    submitBooking: 'Confirm & Schedule Maintenance',
    estimatedCost: 'Estimated Service Fee',
    bookingSuccessTitle: 'Maintenance Visit Scheduled!',
    bookingSuccessMsg: 'A certified SolarSaathi technician has been booked.',
    statusBooked: 'Service Booked',
    statusAssigned: 'Technician Dispatched',
    statusCompleted: 'Servicing Completed',
    statusCancelled: 'Booking Cancelled',
    emptyBookingsTitle: 'No Solar Maintenance Bookings Yet',
    emptyBookingsDesc: 'Keep your solar rooftop generating peak kilowatt-hours by scheduling an annual inspection or deep panel cleaning.',
    cancelBooking: 'Cancel Booking',
    technicianBadge: 'Certified SolarSaathi Field Engineer',
    bannerNotice: 'Regular semi-annual cleaning and terminal inspection recovers 15% to 25% of energy generation lost to dust and electrical degradation.',
  };

  const [selectedService, setSelectedService] = useState<MaintenanceServiceType>(
    SOLAR_MAINTENANCE_SERVICES[0].id
  );
  const [capacityKw, setCapacityKw] = useState<number>(3.5);
  const [fullName, setFullName] = useState(userProfile.name || '');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState(userProfile.email || '');
  const [serviceAddress, setServiceAddress] = useState('');
  const [city, setCity] = useState(userProfile.campusLocation || 'Pune / Maharashtra');
  
  const [minDate, setMinDate] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState<TimeSlot>('Morning (08:00 - 11:00)');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setMinDate(dateStr);
    setPreferredDate(dateStr);
  }, []);

  // Active package details
  const activePackage = SOLAR_MAINTENANCE_SERVICES.find((s) => s.id === selectedService) || SOLAR_MAINTENANCE_SERVICES[0];

  // Dynamic fee calculation:
  // Base fee covers up to 3 kW. Above 3 kW, add extra per kW depending on package.
  const extraKw = Math.max(0, capacityKw - 3);
  const perExtraKwRate = activePackage.id === 'Comprehensive Annual AMC' ? 120 : 60;
  const scalingFee = Math.round(extraKw * perExtraKwRate);
  const totalEstimatedFee = activePackage.baseFeeInr + scalingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim() || fullName.trim().length < 3) {
      setErrorMsg(language === 'Hi' ? 'कृपया अपना पूरा नाम दर्ज करें।' : 'Please enter your full name (at least 3 characters).');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMsg(language === 'Hi' ? 'कृपया मान्य फ़ोन नंबर प्रदान करें।' : 'Please enter a valid phone number (at least 8 digits).');
      return;
    }
    if (!serviceAddress.trim() || serviceAddress.trim().length < 5) {
      setErrorMsg(language === 'Hi' ? 'कृपया पूरा सेवा पता दर्ज करें।' : 'Please enter a complete rooftop service address.');
      return;
    }
    if (!preferredDate) {
      setErrorMsg(language === 'Hi' ? 'कृपया पसंदीदा सेवा दिनांक चुनें।' : 'Please select a preferred service date.');
      return;
    }

    setIsSubmitting(true);
    const result = bookSolarMaintenance({
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      serviceAddress: serviceAddress.trim(),
      city: city.trim() || 'Local Area',
      systemCapacityKw: capacityKw,
      serviceType: selectedService,
      preferredDate,
      timeSlot,
      estimatedFeeInr: totalEstimatedFee,
      notes: notes.trim() || undefined,
    });

    setIsSubmitting(false);
    if (result.success) {
      if (onSuccess) onSuccess();
    } else {
      setErrorMsg(result.error || 'Failed to submit booking. Please check details.');
    }
  };

  return (
    <div className="bg-white rounded-xl border border-[#E2E9E3] shadow-xs overflow-hidden">
      {/* Header Banner */}
      <div className="bg-linear-to-r from-[#063D2E] to-[#0D5C46] p-6 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/15 text-emerald-100 backdrop-blur-xs">
              <Wrench className="w-3.5 h-3.5 text-amber-300" />
              <span>{mLabels.title}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              {mLabels.bookService}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed">
              {mLabels.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-lg border border-white/15 text-xs text-emerald-100">
            <ShieldCheck className="w-5 h-5 text-amber-300 shrink-0" />
            <span>{mLabels.technicianBadge}</span>
          </div>
        </div>
      </div>

      {/* Advisory Note */}
      <div className="bg-[#F8FAF7] border-b border-[#E2E9E3] px-6 py-3 flex items-start gap-2.5 text-xs text-[#65736B]">
        <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
        <span>{mLabels.bannerNotice}</span>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
        {errorMsg && (
          <div className="flex items-center gap-2 p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* 1. Service Package Selection */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-[#17231E] uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-[#063D2E] text-white flex items-center justify-center text-[10px]">1</span>
              <span>{mLabels.serviceTypeLabel}</span>
            </label>
            <span className="text-[11px] text-[#65736B]">
              {language === 'Hi' ? '5 प्रमाणित विकल्प' : '5 Certified Packages'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {SOLAR_MAINTENANCE_SERVICES.map((pkg) => {
              const isSelected = selectedService === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedService(pkg.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#063D2E] bg-emerald-50/40 ring-2 ring-[#063D2E]/20 shadow-xs'
                      : 'border-[#E2E9E3] bg-white hover:border-[#CBD6CD] hover:bg-[#F8FAF7]'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#063D2E]/10 text-[#063D2E] border border-[#063D2E]/20">
                        {pkg.badge}
                      </span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected ? 'border-[#063D2E] bg-[#063D2E]' : 'border-gray-300'
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </div>

                    <h3 className="text-sm font-bold text-[#17231E] mb-1">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-[#65736B] leading-relaxed mb-3">
                      {pkg.description}
                    </p>

                    <div className="space-y-1 mb-3 pt-2 border-t border-[#E2E9E3]/60">
                      {pkg.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#17231E]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#E2E9E3] flex items-center justify-between text-xs">
                    <span className="text-[#65736B] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#063D2E]" />
                      {pkg.durationEst}
                    </span>
                    <span className="font-bold text-[#063D2E] text-sm">
                      ₹{pkg.baseFeeInr} <span className="text-[10px] font-normal text-[#65736B]">base</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. System Capacity Selection */}
        <div className="space-y-3 pt-2">
          <label className="text-xs font-bold text-[#17231E] uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-[#063D2E] text-white flex items-center justify-center text-[10px]">2</span>
            <span>{mLabels.systemCapacityLabel}</span>
          </label>

          <div className="bg-[#F8FAF7] p-4 rounded-xl border border-[#E2E9E3] space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-bold text-[#17231E]">
                  {capacityKw} kW
                </span>
                <span className="text-xs text-[#65736B]">
                  ({Math.round(capacityKw * 3)} - {Math.round(capacityKw * 4)} standard panels)
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {[1, 3, 5, 8, 10, 15].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setCapacityKw(preset)}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                      capacityKw === preset
                        ? 'bg-[#063D2E] text-white'
                        : 'bg-white text-[#17231E] border border-[#E2E9E3] hover:bg-stone-50'
                    }`}
                  >
                    {preset} kW
                  </button>
                ))}
              </div>
            </div>

            <input
              type="range"
              min="1"
              max="25"
              step="0.5"
              value={capacityKw}
              onChange={(e) => setCapacityKw(parseFloat(e.target.value))}
              className="w-full accent-[#063D2E] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#65736B]">
              <span>1 kW (Small Residential)</span>
              <span>5 kW (Standard Home)</span>
              <span>10 kW (Bungalow)</span>
              <span>25 kW (Commercial / Society)</span>
            </div>
          </div>
        </div>

        {/* 3. Address & Customer Information */}
        <div className="space-y-4 pt-2">
          <label className="text-xs font-bold text-[#17231E] uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-[#063D2E] text-white flex items-center justify-center text-[10px]">3</span>
            <span>{mLabels.contactDetailsTitle}</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#17231E] mb-1">
                {mLabels.nameLabel} *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#65736B] absolute left-3 top-2.5" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#E2E9E3] bg-white text-[#17231E] focus:outline-hidden focus:ring-1 focus:ring-[#063D2E]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#17231E] mb-1">
                {mLabels.phoneLabel} *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#65736B] absolute left-3 top-2.5" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#E2E9E3] bg-white text-[#17231E] focus:outline-hidden focus:ring-1 focus:ring-[#063D2E]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#17231E] mb-1">
                {mLabels.emailLabel}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#65736B] absolute left-3 top-2.5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. rahul@example.com"
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#E2E9E3] bg-white text-[#17231E] focus:outline-hidden focus:ring-1 focus:ring-[#063D2E]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#17231E] mb-1">
                {mLabels.cityLabel}
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-[#65736B] absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Pune, MH"
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#E2E9E3] bg-white text-[#17231E] focus:outline-hidden focus:ring-1 focus:ring-[#063D2E]"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-[#17231E] mb-1">
                {mLabels.addressLabel} *
              </label>
              <input
                type="text"
                required
                value={serviceAddress}
                onChange={(e) => setServiceAddress(e.target.value)}
                placeholder="e.g. Flat 402, Green Meadows Society, Baner Road"
                className="w-full px-3 py-2 text-xs rounded-lg border border-[#E2E9E3] bg-white text-[#17231E] focus:outline-hidden focus:ring-1 focus:ring-[#063D2E]"
              />
            </div>
          </div>
        </div>

        {/* 4. Scheduling: Date & Slot */}
        <div className="space-y-4 pt-2">
          <label className="text-xs font-bold text-[#17231E] uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-[#063D2E] text-white flex items-center justify-center text-[10px]">4</span>
            <span>{language === 'Hi' ? 'शेड्यूलिंग एवं आगमन समय' : 'Scheduling & Preferred Slot'}</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#17231E] mb-1">
                {mLabels.dateLabel} *
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-[#65736B] absolute left-3 top-2.5" />
                <input
                  type="date"
                  required
                  min={minDate}
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#E2E9E3] bg-white text-[#17231E] focus:outline-hidden focus:ring-1 focus:ring-[#063D2E]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#17231E] mb-1">
                {mLabels.timeSlotLabel} *
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value as TimeSlot)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-[#E2E9E3] bg-white text-[#17231E] focus:outline-hidden focus:ring-1 focus:ring-[#063D2E]"
              >
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-[#17231E] mb-1">
                {mLabels.notesLabel}
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={mLabels.notesPlaceholder}
                className="w-full px-3 py-2 text-xs rounded-lg border border-[#E2E9E3] bg-white text-[#17231E] focus:outline-hidden focus:ring-1 focus:ring-[#063D2E]"
              />
            </div>
          </div>
        </div>

        {/* 5. Summary & Price Breakdown */}
        <div className="pt-2 border-t border-[#E2E9E3]">
          <div className="bg-[#F8FAF7] rounded-xl p-4 sm:p-5 border border-[#E2E9E3] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[11px] font-bold text-[#65736B] uppercase tracking-wide">
                {mLabels.estimatedCost}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#063D2E]">
                  ₹{totalEstimatedFee.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-[#65736B]">
                  (Inclusive of tools, de-mineralized wash & technician report)
                </span>
              </div>
              <div className="text-[11px] text-[#65736B] flex items-center gap-2">
                <span>Base ({activePackage.title}): ₹{activePackage.baseFeeInr}</span>
                {scalingFee > 0 && <span>+ Capacity surcharge ({extraKw} kW @ ₹{perExtraKwRate}/kW): ₹{scalingFee}</span>}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {onCancel && (
                <button
                  type="button"
                  onClick={onCancel}
                  className="px-4 py-2.5 rounded-lg border border-[#CBD6CD] bg-white text-[#17231E] text-xs font-semibold hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  {language === 'Hi' ? 'रद्द करें' : 'Cancel'}
                </button>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-lg bg-[#063D2E] text-white text-xs sm:text-sm font-semibold hover:bg-[#042E24] transition-colors flex items-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
              >
                <span>{mLabels.submitBooking}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
