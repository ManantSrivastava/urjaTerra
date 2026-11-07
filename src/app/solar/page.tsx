'use client';

import React, { useState } from 'react';
import { useEarthSync } from '@/context/EarthSyncContext';
import { SolarCalculator } from '@/components/SolarCalculator';
import { SolarEnquiryForm } from '@/components/SolarEnquiryForm';
import { SolarEnquiryList } from '@/components/SolarEnquiryList';
import { SolarSubsidyGuide } from '@/components/SolarSubsidyGuide';
import { SolarMaintenanceForm } from '@/components/SolarMaintenanceForm';
import { SolarMaintenanceList } from '@/components/SolarMaintenanceList';
import { 
  Sun, 
  Calculator, 
  ShieldCheck, 
  Compass, 
  Info,
  Wrench,
  Plus
} from 'lucide-react';

export default function SolarSaathiPage() {
  const { solarEnquiries, maintenanceBookings, t, language } = useEarthSync();
  const safeEnquiries = solarEnquiries || [];
  const safeMaintenance = maintenanceBookings || [];
  const [activeTab, setActiveTab] = useState<'calculator' | 'subsidies' | 'enquiries' | 'maintenance'>('calculator');
  const [maintenanceView, setMaintenanceView] = useState<'form' | 'list'>('form');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState({
    capacityKw: 3.5,
    estimatedCost: 189000,
    monthlySavings: 4200,
    locationState: 'Maharashtra',
    monthlyBill: 4500,
    roofAreaSqFt: 450,
  });

  const handleOpenEnquiry = (details: {
    capacityKw: number;
    estimatedCost: number;
    monthlySavings: number;
    locationState: string;
    monthlyBill: number;
    roofAreaSqFt: number;
  }) => {
    setModalInitialData(details);
    setEnquiryModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8 animate-in fade-in duration-200">
      
      {/* Academic Disclaimer Banner */}
      <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-[#E2E9E3] text-xs text-[#65736B]">
        <Info className="w-4 h-4 text-[#063D2E] shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong className="text-[#17231E]">
            {language === 'Hi' ? 'क्लीनटेक अकादमिक व्यवहार्यता इंजन: ' : 'CleanTech Academic Feasibility Engine: '}
          </strong>
          {t.solar.academicNotice}
        </div>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 sm:p-8 rounded-lg border border-[#E2E9E3]">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-[#FFB800]/15 text-[#17231E] border border-[#FFB800]/40">
            <Sun className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>{t.solar.service}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#17231E] tracking-tight">
            {t.solar.title}
          </h1>
          <p className="text-sm text-[#65736B] max-w-2xl leading-relaxed">
            {t.solar.subtitle}
          </p>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#E2E9E3] pb-2">
        <button
          onClick={() => setActiveTab('calculator')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
            activeTab === 'calculator'
              ? 'bg-[#063D2E] text-white'
              : 'text-[#65736B] hover:bg-white hover:text-[#17231E]'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>{t.solar.tabCalc}</span>
        </button>

        <button
          onClick={() => setActiveTab('subsidies')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
            activeTab === 'subsidies'
              ? 'bg-[#063D2E] text-white'
              : 'text-[#65736B] hover:bg-white hover:text-[#17231E]'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>{t.solar.tabSubsidies}</span>
        </button>

        <button
          onClick={() => setActiveTab('enquiries')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
            activeTab === 'enquiries'
              ? 'bg-[#063D2E] text-white'
              : 'text-[#65736B] hover:bg-white hover:text-[#17231E]'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>{t.solar.tabEnquiries} ({safeEnquiries.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('maintenance')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
            activeTab === 'maintenance'
              ? 'bg-[#063D2E] text-white'
              : 'text-[#65736B] hover:bg-white hover:text-[#17231E]'
          }`}
        >
          <Wrench className="w-4 h-4" />
          <span>{t.solar.tabMaintenance}</span>
          {safeMaintenance.length > 0 && (
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
              activeTab === 'maintenance' ? 'bg-white text-[#063D2E]' : 'bg-[#063D2E] text-white'
            }`}>
              {safeMaintenance.length}
            </span>
          )}
        </button>
      </div>

      {/* Active Tab View */}
      {activeTab === 'calculator' && <SolarCalculator onOpenEnquiry={handleOpenEnquiry} />}
      {activeTab === 'subsidies' && <SolarSubsidyGuide />}
      {activeTab === 'enquiries' && <SolarEnquiryList onCalculateSolar={() => setActiveTab('calculator')} />}
      
      {activeTab === 'maintenance' && (
        <div className="space-y-6">
          {/* Sub-view switcher between Booking Form & Bookings List */}
          <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-[#E2E9E3]">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMaintenanceView('form')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                  maintenanceView === 'form'
                    ? 'bg-[#063D2E] text-white'
                    : 'text-[#65736B] hover:bg-stone-100 hover:text-[#17231E]'
                }`}
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{t.solarMaintenance.bookService}</span>
              </button>

              <button
                onClick={() => setMaintenanceView('list')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                  maintenanceView === 'list'
                    ? 'bg-[#063D2E] text-white'
                    : 'text-[#65736B] hover:bg-stone-100 hover:text-[#17231E]'
                }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>{t.solarMaintenance.viewBookings} ({safeMaintenance.length})</span>
              </button>
            </div>

            <span className="text-[11px] text-[#65736B] hidden sm:inline-block">
              {language === 'Hi' ? 'सोलर साथी ऑन-साइट सर्विसिंग' : 'SolarSaathi On-Site Field Service'}
            </span>
          </div>

          {/* Render selected view */}
          {maintenanceView === 'form' ? (
            <SolarMaintenanceForm onSuccess={() => setMaintenanceView('list')} />
          ) : (
            <SolarMaintenanceList onBookNew={() => setMaintenanceView('form')} />
          )}
        </div>
      )}

      {/* Modal for Enquiry Form */}
      {enquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto">
          <div className="my-8 max-w-2xl w-full">
            <SolarEnquiryForm
              initialCapacityKw={modalInitialData.capacityKw}
              initialEstimatedCost={modalInitialData.estimatedCost}
              initialMonthlySavings={modalInitialData.monthlySavings}
              initialLocationState={modalInitialData.locationState}
              initialMonthlyBill={modalInitialData.monthlyBill}
              initialRoofAreaSqFt={modalInitialData.roofAreaSqFt}
              onClose={() => setEnquiryModalOpen(false)}
              onSuccess={() => {
                setEnquiryModalOpen(false);
                setActiveTab('enquiries');
              }}
            />
          </div>
        </div>
      )}

    </div>
  );
}
