'use client';

import React, { useState } from 'react';
import { useEarthSync } from '@/context/EarthSyncContext';
import { WastePickupForm } from '@/components/WastePickupForm';
import { PickupList } from '@/components/PickupList';
import { WASTE_CATEGORIES } from '@/data/constants';
import { 
  Recycle, 
  CalendarPlus, 
  History, 
  Sparkles, 
  CheckCircle2,
  Package,
  FileText,
  Shield,
  Cpu,
  Box,
  Wine,
  Leaf
} from 'lucide-react';

export default function SmartWastePage() {
  const { pickups, userProfile, activities, isHydrated, t, language } = useEarthSync();
  const [activeTab, setActiveTab] = useState<'schedule' | 'history'>('schedule');

  const completedCount = pickups.filter((p) => p.status === 'Collected').length;
  const pendingCount = pickups.filter((p) => p.status === 'Requested' || p.status === 'Scheduled').length;

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'paper':
        return <FileText className="w-4 h-4 text-[#063D2E]" />;
      case 'cardboard':
        return <Box className="w-4 h-4 text-[#063D2E]" />;
      case 'plastic':
        return <Package className="w-4 h-4 text-[#063D2E]" />;
      case 'metal':
        return <Shield className="w-4 h-4 text-[#063D2E]" />;
      case 'ewaste':
        return <Cpu className="w-4 h-4 text-[#063D2E]" />;
      case 'glass':
        return <Wine className="w-4 h-4 text-[#063D2E]" />;
      case 'organic':
        return <Leaf className="w-4 h-4 text-[#063D2E]" />;
      default:
        return <Recycle className="w-4 h-4 text-[#063D2E]" />;
    }
  };

  // Filter activities related to waste or points
  const recentActivities = activities.slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8 animate-in fade-in duration-200">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 sm:p-8 rounded-lg border border-[#E2E9E3]">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-[#00B884]/10 text-[#063D2E] border border-[#00B884]/25">
            <Recycle className="w-3.5 h-3.5 text-[#00B884]" />
            <span>{t.waste.service}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#17231E] tracking-tight">
            {t.waste.title}
          </h1>
          <p className="text-sm text-[#65736B] max-w-2xl leading-relaxed">
            {t.waste.subtitle}
          </p>
        </div>

        {/* GreenPoints Card */}
        <div className="bg-[#063D2E] text-white p-5 rounded-lg border border-[#042E24] shrink-0 min-w-[200px]">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[10px] text-white/70 uppercase tracking-wider font-semibold">
              {language === 'Hi' ? 'ग्रीनपॉइंट्स बैलेंस' : 'GreenPoints Balance'}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
          </div>
          <div className="text-2xl font-bold text-[#FFB800]">
            {isHydrated ? userProfile.greenPointsBalance.toLocaleString() : '0'}{' '}
            <span className="text-xs font-normal text-white/70">{t.nav.pts}</span>
          </div>
          <p className="text-[11px] text-white/80 mt-1">
            {language === 'Hi' ? 'केवल सत्यापित पिकअप पर दिए जाते हैं।' : 'Awarded only upon completed, verified pickups.'}
          </p>
        </div>
      </div>

      {/* Accepted Waste Categories Overview */}
      <div className="bg-white rounded-lg border border-[#E2E9E3] p-6 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="font-bold text-[#17231E] text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00B884]" />
            <span>{language === 'Hi' ? 'स्वीकृत पुनर्चक्रण श्रेणियां और दरें' : 'Accepted Recyclable Streams & GreenPoints Rates'}</span>
          </h2>
          <span className="text-xs text-[#65736B]">
            {language === 'Hi' ? 'सत्यापित पिकअप पूर्ण होने पर तुरंत क्रेडिट' : 'Earning rates: Credited exclusively upon verified pickup completion'}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
          {WASTE_CATEGORIES.slice(0, 5).map((cat) => (
            <div
              key={cat.id}
              className="p-3.5 rounded-md bg-[#F8FAF7] border border-[#E2E9E3] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded bg-white border border-[#E2E9E3]">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <span className="font-semibold text-xs text-[#17231E] truncate">
                    {t.categories[cat.id as keyof typeof t.categories] || cat.name}
                  </span>
                </div>
                <p className="text-[11px] text-[#65736B] line-clamp-2">{cat.description}</p>
              </div>
              <div className="mt-3 pt-2 border-t border-[#E2E9E3] flex items-center justify-between">
                <span className="text-xs font-bold text-[#063D2E]">
                  +{cat.pointsPerKg} {t.nav.pts}/kg
                </span>
                <span className="text-[10px] text-[#65736B]">~{cat.co2SavedPerKg}kg CO₂</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs: Submit Request vs Request History */}
      <div className="flex items-center gap-2 border-b border-[#E2E9E3] pb-2">
        <button
          onClick={() => setActiveTab('schedule')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
            activeTab === 'schedule'
              ? 'bg-[#063D2E] text-white'
              : 'text-[#65736B] hover:bg-white hover:text-[#17231E]'
          }`}
        >
          <CalendarPlus className="w-4 h-4" />
          <span>{t.waste.tabBook}</span>
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
            activeTab === 'history'
              ? 'bg-[#063D2E] text-white'
              : 'text-[#65736B] hover:bg-white hover:text-[#17231E]'
          }`}
        >
          <History className="w-4 h-4" />
          <span>{t.waste.tabPickups}</span>
          <span
            className={`text-[11px] px-1.5 py-0.2 rounded font-bold ${
              activeTab === 'history' ? 'bg-[#042E24] text-white' : 'bg-[#E2E9E3] text-[#17231E]'
            }`}
          >
            {pickups.length}
          </span>
        </button>
      </div>

      {/* Tab 1: Form & Supporting Information */}
      {activeTab === 'schedule' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Form (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-lg border border-[#E2E9E3] p-6 sm:p-8">
            <div className="mb-6 pb-4 border-b border-[#E2E9E3]">
              <h2 className="text-base font-bold text-[#17231E]">{t.waste.bookHeading}</h2>
              <p className="text-xs text-[#65736B] mt-0.5">
                {t.waste.bookDesc}
              </p>
            </div>

            <WastePickupForm onSuccess={() => setActiveTab('history')} />
          </div>

          {/* Right Information & GreenPoints Panel (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* GreenPoints Reward Policy */}
            <div className="bg-white rounded-lg border border-[#E2E9E3] p-5 space-y-3">
              <div className="flex items-center gap-2 text-[#063D2E] font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#FFB800]" />
                <span>{t.wasteSidebar.rewardLogic}</span>
              </div>
              <h3 className="text-sm font-bold text-[#17231E]">
                {t.wasteSidebar.protocolTitle}
              </h3>
              <p className="text-xs text-[#65736B] leading-relaxed">
                {t.wasteSidebar.protocolDesc}
              </p>

              <div className="pt-3 border-t border-[#E2E9E3] space-y-2 text-xs">
                <div className="flex items-center justify-between text-[#65736B]">
                  <span>{t.wasteSidebar.activePending}</span>
                  <span className="font-semibold text-[#17231E]">{pendingCount}</span>
                </div>
                <div className="flex items-center justify-between text-[#65736B]">
                  <span>{t.wasteSidebar.completedRewarded}</span>
                  <span className="font-semibold text-[#063D2E]">{completedCount}</span>
                </div>
                <div className="flex items-center justify-between text-[#65736B]">
                  <span>{t.wasteSidebar.currentBalance}</span>
                  <span className="font-bold text-[#FFB800] bg-[#063D2E] px-2 py-0.5 rounded text-[11px]">
                    {isHydrated ? userProfile.greenPointsBalance : '...'} {t.nav.pts}
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Activity Stream */}
            <div className="bg-white rounded-lg border border-[#E2E9E3] p-5 space-y-3">
              <h3 className="font-bold text-[#17231E] text-xs uppercase tracking-wider">
                {t.wasteSidebar.recentActivity}
              </h3>
              {recentActivities.length === 0 ? (
                <p className="text-xs text-[#65736B]">{t.wasteSidebar.noActivity}</p>
              ) : (
                <div className="space-y-2.5 pt-1">
                  {recentActivities.map((act) => (
                    <div key={act.id} className="text-xs pb-2 border-b border-[#E2E9E3] last:border-none last:pb-0">
                      <div className="flex items-center justify-between font-semibold text-[#17231E]">
                        <span className="truncate max-w-[180px]">{act.title}</span>
                        <span className="text-[10px] text-[#65736B] font-mono">{act.timestamp}</span>
                      </div>
                      <p className="text-[11px] text-[#65736B] mt-0.5 leading-snug">{act.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Material Guidelines */}
            <div className="bg-[#F8FAF7] rounded-lg border border-[#E2E9E3] p-5 space-y-2 text-xs text-[#65736B]">
              <h4 className="font-bold text-[#17231E] text-xs">{t.wasteSidebar.sortingChecklist}</h4>
              <ul className="space-y-1.5 list-disc pl-4 leading-relaxed">
                <li>{t.wasteSidebar.check1}</li>
                <li>{t.wasteSidebar.check2}</li>
                <li>{t.wasteSidebar.check3}</li>
                <li>{t.wasteSidebar.check4}</li>
              </ul>
            </div>

          </div>
        </div>
      ) : (
        /* Tab 2: Request History */
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-[#E2E9E3]">
            <h2 className="text-base font-bold text-[#17231E] mb-1">{t.wasteSidebar.historyHeading}</h2>
            <p className="text-xs text-[#65736B] mb-4">
              {t.wasteSidebar.historyDesc}
            </p>
            <PickupList onOpenSchedule={() => setActiveTab('schedule')} />
          </div>
        </div>
      )}

    </div>
  );
}
