'use client';

import React from 'react';
import { useEarthSync } from '@/context/EarthSyncContext';
import { SolarMaintenanceBooking, MaintenanceStatus } from '@/types';
import { 
  Wrench, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  User, 
  Zap, 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  Truck, 
  Trash2, 
  Plus, 
  ShieldCheck 
} from 'lucide-react';

interface Props {
  onBookNew?: () => void;
}

export const SolarMaintenanceList: React.FC<Props> = ({ onBookNew }) => {
  const { 
    maintenanceBookings, 
    cancelMaintenanceBooking, 
    updateMaintenanceStatus, 
    deleteMaintenanceBooking, 
    t, 
    language 
  } = useEarthSync();
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
  const bookings = maintenanceBookings || [];

  if (bookings.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-[#E2E9E3] p-12 text-center text-[#65736B] flex flex-col items-center justify-center">
        <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-200 text-[#063D2E] flex items-center justify-center mb-3.5">
          <Wrench className="w-7 h-7" />
        </div>
        <h4 className="font-bold text-[#17231E] text-lg">
          {mLabels.emptyBookingsTitle}
        </h4>
        <p className="text-xs sm:text-sm text-[#65736B] max-w-md mt-1.5 leading-relaxed">
          {mLabels.emptyBookingsDesc}
        </p>

        {onBookNew && (
          <button
            onClick={onBookNew}
            className="mt-6 px-5 py-2.5 rounded-lg bg-[#063D2E] text-white text-xs sm:text-sm font-semibold hover:bg-[#042E24] transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>{mLabels.bookService}</span>
          </button>
        )}
      </div>
    );
  }

  // Summary counts
  const totalCount = bookings.length;
  const activeCount = bookings.filter((b) => b.status === 'Booked' || b.status === 'Technician Assigned').length;
  const completedCount = bookings.filter((b) => b.status === 'Completed').length;

  return (
    <div className="space-y-6">
      {/* Top Stats Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="bg-white p-4 rounded-xl border border-[#E2E9E3] flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-[#65736B] uppercase tracking-wide">
              {language === 'Hi' ? 'कुल रखरखाव बुकिंग' : 'Total Service Bookings'}
            </div>
            <div className="text-xl font-bold text-[#17231E] mt-0.5">{totalCount}</div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-[#063D2E]/10 text-[#063D2E] flex items-center justify-center">
            <Wrench className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-[#E2E9E3] flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-[#65736B] uppercase tracking-wide">
              {language === 'Hi' ? 'सक्रिय / आगमन शेड्यूल्ड' : 'Active / In Progress'}
            </div>
            <div className="text-xl font-bold text-amber-700 mt-0.5">{activeCount}</div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
            <Truck className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-[#E2E9E3] flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-[#65736B] uppercase tracking-wide">
              {language === 'Hi' ? 'सर्विसिंग पूर्ण' : 'Servicing Completed'}
            </div>
            <div className="text-xl font-bold text-emerald-700 mt-0.5">{completedCount}</div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Bookings List Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-[#17231E] flex items-center gap-2">
            <Wrench className="w-4 h-4 text-[#063D2E]" />
            <span>{mLabels.viewBookings} ({totalCount})</span>
          </h3>
          <p className="text-xs text-[#65736B]">
            {language === 'Hi' 
              ? 'सोलर पैनल तकनीकी रखरखाव एवं सर्विसिंग रिकॉर्ड्स' 
              : 'Tracking certified solar technician visits and scheduled preventative audits'}
          </p>
        </div>

        {onBookNew && (
          <button
            onClick={onBookNew}
            className="px-4 py-2 rounded-lg bg-[#063D2E] text-white text-xs font-semibold hover:bg-[#042E24] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{mLabels.bookService}</span>
          </button>
        )}
      </div>

      {/* Booking Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bookings.map((booking: SolarMaintenanceBooking) => {
          let statusBadge = (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
              <Clock className="w-3 h-3 text-amber-700" />
              {mLabels.statusBooked}
            </span>
          );

          if (booking.status === 'Technician Assigned') {
            statusBadge = (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                <Truck className="w-3 h-3 text-blue-700" />
                {mLabels.statusAssigned}
              </span>
            );
          } else if (booking.status === 'Completed') {
            statusBadge = (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                {mLabels.statusCompleted}
              </span>
            );
          } else if (booking.status === 'Cancelled') {
            statusBadge = (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md border border-stone-200">
                <XCircle className="w-3 h-3 text-stone-500" />
                {mLabels.statusCancelled}
              </span>
            );
          }

          return (
            <div
              key={booking.id}
              className="bg-white rounded-xl border border-[#E2E9E3] p-5 shadow-xs flex flex-col justify-between hover:border-[#CBD6CD] transition-all space-y-4"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-2 pb-3 border-b border-[#E2E9E3]">
                  <div>
                    <span className="text-[10px] font-mono font-medium text-[#65736B] uppercase">
                      REF: {booking.id}
                    </span>
                    <h4 className="text-sm font-bold text-[#17231E] mt-0.5">
                      {booking.serviceType}
                    </h4>
                  </div>
                  <div>{statusBadge}</div>
                </div>

                {/* Grid details */}
                <div className="grid grid-cols-2 gap-2.5 text-xs text-[#17231E] py-3 border-b border-[#E2E9E3]/70">
                  <div className="flex items-center gap-1.5 text-[#65736B]">
                    <Calendar className="w-3.5 h-3.5 text-[#063D2E] shrink-0" />
                    <span>{booking.preferredDate}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#65736B]">
                    <Clock className="w-3.5 h-3.5 text-[#063D2E] shrink-0" />
                    <span className="truncate">{booking.timeSlot}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#65736B]">
                    <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{booking.systemCapacityKw} kW Rooftop</span>
                  </div>

                  <div className="flex items-center gap-1.5 font-bold text-[#063D2E]">
                    <span>Fee: ₹{booking.estimatedFeeInr.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Customer and Location */}
                <div className="space-y-1.5 pt-3 text-xs text-[#65736B]">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#063D2E] shrink-0" />
                    <span className="font-semibold text-[#17231E]">{booking.fullName}</span>
                    {booking.phone && <span>• {booking.phone}</span>}
                  </div>

                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#063D2E] shrink-0 mt-0.5" />
                    <span className="leading-snug">{booking.serviceAddress}, {booking.city}</span>
                  </div>

                  {booking.notes && (
                    <div className="mt-2 p-2 rounded-md bg-[#F8FAF7] border border-[#E2E9E3] text-[11px] text-[#17231E] italic">
                      &quot;{booking.notes}&quot;
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons & Simulation Bar */}
              <div className="pt-2 border-t border-[#E2E9E3] flex flex-wrap items-center justify-between gap-2">
                {/* Simulation Pills */}
                <div className="flex items-center gap-1 text-[10px]">
                  {booking.status === 'Booked' && (
                    <button
                      type="button"
                      onClick={() => updateMaintenanceStatus(booking.id, 'Technician Assigned')}
                      className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
                    >
                      Assign Tech
                    </button>
                  )}
                  {booking.status === 'Technician Assigned' && (
                    <button
                      type="button"
                      onClick={() => updateMaintenanceStatus(booking.id, 'Completed')}
                      className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors cursor-pointer"
                    >
                      Complete
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {booking.status !== 'Completed' && booking.status !== 'Cancelled' && (
                    <button
                      type="button"
                      onClick={() => cancelMaintenanceBooking(booking.id)}
                      className="text-xs text-stone-500 hover:text-red-600 transition-colors cursor-pointer font-medium"
                    >
                      {mLabels.cancelBooking}
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => deleteMaintenanceBooking(booking.id)}
                    title="Delete record"
                    className="p-1 rounded-md text-stone-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
