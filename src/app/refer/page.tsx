'use client';

import React, { useState, useEffect } from 'react';
import { useEarthSync } from '@/context/EarthSyncContext';
import { REFERRAL_CONFIG } from '@/data/constants';
import { 
  Users, 
  UserCheck, 
  Clock, 
  Award, 
  Copy, 
  Check, 
  Share2, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Gift, 
  Recycle, 
  HelpCircle,
  PlusCircle,
  PlayCircle
} from 'lucide-react';

export default function ReferAndEarnPage() {
  const { 
    userProfile, 
    referrals, 
    simulateFriendReferral, 
    simulateCompleteFirstCollection, 
    t, 
    language
  } = useEarthSync();

  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin);
    }
  }, []);

  const referralCode = userProfile.referralCode || 'UT-URJA2026';
  const referralLink = origin ? `${origin}/register?ref=${referralCode}` : `https://urjaterra.org/register?ref=${referralCode}`;

  // Metrics
  const totalInvited = referrals.length;
  const successfulReferrals = referrals.filter((r) => r.rewardStatus === 'Rewarded').length;
  const pendingReferrals = referrals.filter((r) => r.rewardStatus === 'Pending').length;
  const totalPointsEarned = referrals.reduce((acc, curr) => acc + (curr.referrerPointsAwarded || 0), 0);

  // Copy Handlers
  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    } catch (e) {
      console.error('Failed to copy code:', e);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch (e) {
      console.error('Failed to copy link:', e);
    }
  };

  // WhatsApp Share
  const handleShareWhatsapp = () => {
    const rawTemplate = t.refer.whatsappMessage || 
      'Join urjaTerra with my referral code {code} to recycle dry waste and earn 50 welcome GreenPoints on your first collection! Register here: {link}';
    const message = rawTemplate
      .replace('{code}', referralCode)
      .replace('{link}', referralLink);
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-10 animate-in fade-in duration-300">
      
      {/* Top Banner / Hero Header */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#063D2E] via-[#094736] to-[#0D5542] text-white p-6 sm:p-10 shadow-sm border border-[#063D2E]">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B884]/20 border border-[#00B884]/40 text-[#00B884] text-xs font-semibold tracking-wide">
            <Gift className="w-3.5 h-3.5" />
            <span>{t.refer.badge}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {t.refer.title}
          </h1>
          <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-2xl">
            {t.refer.subtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-emerald-100">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FFB800]"></span>
              <span>{language === 'Hi' ? 'रेफरर को मिलते हैं:' : 'You receive:'} <strong>{REFERRAL_CONFIG.referrerRewardPoints} GreenPoints</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00B884]"></span>
              <span>{language === 'Hi' ? 'मित्र को मिलते हैं:' : 'Friend receives:'} <strong>{REFERRAL_CONFIG.referredRewardPoints} GreenPoints</strong></span>
            </div>
          </div>
        </div>

        {/* Subtle decorative background glow */}
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 rounded-full bg-[#00B884]/10 blur-3xl pointer-events-none" />
        <div className="absolute right-1/4 bottom-0 translate-y-1/3 w-64 h-64 rounded-full bg-[#FFB800]/10 blur-2xl pointer-events-none" />
      </section>

      {/* Main Action Hub: Referral Code Box & Sharing */}
      <section className="bg-white rounded-xl border border-[#E2E9E3] p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-[#17231E] flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#00B884]" />
            <span>{t.refer.codeCardTitle}</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#65736B] mt-1">
            {t.refer.codeCardDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Unique Referral Code Display */}
          <div className="lg:col-span-5 bg-[#F8FAF7] border border-[#E2E9E3] rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#65736B] block mb-1">
                {language === 'Hi' ? 'आपका रेफरल कोड' : 'Your Referral Code'}
              </span>
              <div className="flex items-center justify-between gap-3 bg-white border border-[#D5E0D7] rounded-lg px-4 py-3 shadow-2xs">
                <span className="font-mono text-xl sm:text-2xl font-bold tracking-wider text-[#063D2E]">
                  {referralCode}
                </span>
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1.5 rounded-md bg-[#063D2E] hover:bg-[#094736] text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs shrink-0"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00B884]" />
                      <span>{t.refer.copiedCode}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.refer.copyCode}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="text-[11px] text-[#65736B] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00B884] shrink-0" />
              <span>
                {language === 'Hi'
                  ? 'अंक केवल मित्र के पहले कचरा पिकअप सत्यापन पर जमा होंगे।'
                  : 'Points credit only upon first verified waste collection.'}
              </span>
            </div>
          </div>

          {/* Referral Link & Social Sharing */}
          <div className="lg:col-span-7 bg-[#F8FAF7] border border-[#E2E9E3] rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#65736B] block mb-1">
                {language === 'Hi' ? 'सीधा आमंत्रण वेब लिंक' : 'Direct Invitation Web Link'}
              </span>
              <div className="flex items-center gap-2 bg-white border border-[#D5E0D7] rounded-lg px-3 py-2 text-xs text-[#17231E] overflow-hidden">
                <span className="truncate font-mono select-all flex-1 text-stone-700">
                  {referralLink}
                </span>
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 rounded-md bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-800 text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer shrink-0"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{t.refer.copiedLink}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.refer.copyLink}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Share CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleShareWhatsapp}
                className="flex-1 min-w-[200px] py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs tracking-wide transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t.refer.shareWhatsapp}</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="py-2.5 px-4 rounded-lg bg-white hover:bg-stone-50 border border-[#D5E0D7] text-[#063D2E] font-semibold text-xs tracking-wide transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <Share2 className="w-3.5 h-3.5 text-[#00B884]" />
                <span>{language === 'Hi' ? 'अन्य माध्यम से शेयर' : 'Share Link'}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Referral Statistics - 4 Modern Clean Cards */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#65736B]">
          {language === 'Hi' ? 'रेफरल सांख्यिकी' : 'Referral Performance Overview'}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Total Invited */}
          <div className="bg-white rounded-xl border border-[#E2E9E3] p-5 shadow-xs">
            <div className="flex items-center justify-between text-[#65736B] mb-2">
              <span className="text-xs font-semibold">{t.refer.statInvited}</span>
              <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-700">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#17231E]">
              {totalInvited}
            </div>
            <p className="text-[11px] text-[#65736B] mt-1">
              {language === 'Hi' ? 'आपके कोड से जुड़े कुल सदस्य' : 'Total referees joined via your code'}
            </p>
          </div>

          {/* Successful Referrals */}
          <div className="bg-white rounded-xl border border-[#E2E9E3] p-5 shadow-xs">
            <div className="flex items-center justify-between text-[#00B884] mb-2">
              <span className="text-xs font-semibold text-[#17231E]">{t.refer.statSuccessful}</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#00B884] flex items-center justify-center border border-emerald-100">
                <UserCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#063D2E]">
              {successfulReferrals}
            </div>
            <p className="text-[11px] text-emerald-700 mt-1 font-medium">
              {language === 'Hi' ? 'पहला कचरा पिकअप सत्यापित' : 'First dry waste pickup verified'}
            </p>
          </div>

          {/* Pending Referrals */}
          <div className="bg-white rounded-xl border border-[#E2E9E3] p-5 shadow-xs">
            <div className="flex items-center justify-between text-[#FFB800] mb-2">
              <span className="text-xs font-semibold text-[#17231E]">{t.refer.statPending}</span>
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-700">
              {pendingReferrals}
            </div>
            <p className="text-[11px] text-amber-800 mt-1">
              {language === 'Hi' ? 'पंजीकृत (पहला संग्रह शेष)' : 'Registered, awaiting 1st collection'}
            </p>
          </div>

          {/* GreenPoints Earned */}
          <div className="bg-white rounded-xl border border-[#E2E9E3] p-5 shadow-xs">
            <div className="flex items-center justify-between text-amber-600 mb-2">
              <span className="text-xs font-semibold text-[#17231E]">{t.refer.statPointsEarned}</span>
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#FFB800] flex items-center justify-center border border-amber-200">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-700">
              {totalPointsEarned.toLocaleString()}
            </div>
            <p className="text-[11px] text-[#65736B] mt-1">
              {language === 'Hi' ? '100 अंक प्रति सफल रेफरल' : '100 GreenPoints per verified peer'}
            </p>
          </div>

        </div>
      </section>

      {/* How it Works - 3 Step Visual Guide */}
      <section className="bg-white rounded-xl border border-[#E2E9E3] p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>{language === 'Hi' ? 'सरल एवं पारदर्शी प्रक्रिया' : 'Transparent 3-Step Process'}</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-[#17231E] mt-2">
            {t.refer.howTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#65736B] mt-0.5">
            {t.refer.howSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* Step 1 */}
          <div className="bg-[#F8FAF7] border border-[#E2E9E3] rounded-xl p-5 space-y-3 relative">
            <div className="w-9 h-9 rounded-lg bg-[#063D2E] text-white flex items-center justify-center font-bold text-sm shadow-xs">
              1
            </div>
            <h3 className="font-bold text-sm text-[#17231E]">
              {t.refer.step1Title}
            </h3>
            <p className="text-xs text-[#65736B] leading-relaxed">
              {t.refer.step1Desc}
            </p>
            <div className="pt-1 text-[11px] font-semibold text-[#00A86B] flex items-center gap-1">
              <Share2 className="w-3.5 h-3.5" />
              <span>{language === 'Hi' ? 'व्हाट्सएप या लिंक से भेजें' : 'Share code or direct link'}</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#F8FAF7] border border-[#E2E9E3] rounded-xl p-5 space-y-3 relative">
            <div className="w-9 h-9 rounded-lg bg-[#00B884] text-[#063D2E] flex items-center justify-center font-bold text-sm shadow-xs">
              2
            </div>
            <h3 className="font-bold text-sm text-[#17231E]">
              {t.refer.step2Title}
            </h3>
            <p className="text-xs text-[#65736B] leading-relaxed">
              {t.refer.step2Desc}
            </p>
            <div className="pt-1 text-[11px] font-semibold text-[#063D2E] flex items-center gap-1">
              <Recycle className="w-3.5 h-3.5 text-[#00B884]" />
              <span>{language === 'Hi' ? 'डिजिटल तराजू सत्यापन आवश्यक' : 'Verified digital scale collection'}</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#F8FAF7] border border-[#E2E9E3] rounded-xl p-5 space-y-3 relative">
            <div className="w-9 h-9 rounded-lg bg-[#FFB800] text-[#063D2E] flex items-center justify-center font-bold text-sm shadow-xs">
              3
            </div>
            <h3 className="font-bold text-sm text-[#17231E]">
              {t.refer.step3Title}
            </h3>
            <p className="text-xs text-[#65736B] leading-relaxed">
              {t.refer.step3Desc}
            </p>
            <div className="pt-1 text-[11px] font-semibold text-amber-700 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
              <span>{language === 'Hi' ? '+100 अंक आपको • +50 अंक मित्र को' : '+100 pts for you • +50 pts for friend'}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Referral History Table */}
      <section className="bg-white rounded-xl border border-[#E2E9E3] p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#17231E] flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#063D2E]" />
              <span>{t.refer.tableTitle}</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#65736B] mt-0.5">
              {t.refer.tableDesc}
            </p>
          </div>

          {/* Simulation testing tool button for demo evaluation */}
          <button
            onClick={() => simulateFriendReferral()}
            className="px-3.5 py-2 rounded-lg bg-[#F8FAF7] hover:bg-[#E2E9E3] border border-[#D5E0D7] text-[#063D2E] text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs self-start sm:self-auto"
            title="Simulate a new referee signing up with your referral code"
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#00B884]" />
            <span>{language === 'Hi' ? '+ टेस्ट मित्र आमंत्रित करें' : '+ Simulate Friend Registration'}</span>
          </button>
        </div>

        {/* Table / Empty State */}
        {referrals.length === 0 ? (
          <div className="border border-dashed border-[#D5E0D7] rounded-xl p-8 text-center bg-[#F8FAF7]/50 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#00B884] flex items-center justify-center mx-auto border border-emerald-100">
              <Users className="w-6 h-6 text-[#00B884]" />
            </div>
            <h3 className="text-sm font-bold text-[#17231E]">
              {language === 'Hi' ? 'कोई रेफरल रिकॉर्ड नहीं मिला' : 'No Referrals Logged Yet'}
            </h3>
            <p className="text-xs text-[#65736B] max-w-md mx-auto leading-relaxed">
              {t.refer.emptyHistory}
            </p>
            <div className="pt-2">
              <button
                onClick={() => simulateFriendReferral()}
                className="px-4 py-2 rounded-lg bg-[#063D2E] hover:bg-[#094736] text-white text-xs font-semibold transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>{language === 'Hi' ? 'पहला टेस्ट रेफरल जोड़ें' : 'Simulate First Referee'}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto border border-[#E2E9E3] rounded-lg">
            <table className="w-full text-left text-xs text-[#17231E] border-collapse">
              <thead className="bg-[#F8FAF7] text-[11px] font-semibold text-[#65736B] uppercase tracking-wider border-b border-[#E2E9E3]">
                <tr>
                  <th className="py-3 px-4">{t.refer.colDate}</th>
                  <th className="py-3 px-4">{t.refer.colFriend}</th>
                  <th className="py-3 px-4">{t.refer.colStatus}</th>
                  <th className="py-3 px-4">{t.refer.colReward}</th>
                  <th className="py-3 px-4 text-right">{t.refer.colPoints}</th>
                  <th className="py-3 px-4 text-center">{language === 'Hi' ? 'डेमो क्रिया' : 'Demo Action'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E9E3]">
                {referrals.map((item) => {
                  const isRewarded = item.rewardStatus === 'Rewarded';
                  const formattedDate = new Date(item.date).toLocaleDateString(
                    language === 'Hi' ? 'hi-IN' : 'en-US',
                    { year: 'numeric', month: 'short', day: 'numeric' }
                  );

                  return (
                    <tr key={item.id} className="hover:bg-[#F8FAF7]/60 transition-colors">
                      <td className="py-3 px-4 font-mono text-stone-600 whitespace-nowrap">
                        {formattedDate}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-[#17231E]">{item.referredUserName}</div>
                        <div className="text-[11px] text-[#65736B] font-mono">{item.referredUserEmail}</div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        {item.userStatus === 'First Collection Verified' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span>{t.refer.statusVerified}</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                            <Clock className="w-3 h-3 text-stone-500" />
                            <span>{t.refer.statusRegistered}</span>
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        {isRewarded ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#00B884]/15 text-[#063D2E] border border-[#00B884]/30">
                            <Sparkles className="w-3 h-3 text-[#00B884]" />
                            <span>{t.refer.rewardRewarded}</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                            <Clock className="w-3 h-3 text-amber-600" />
                            <span>{t.refer.rewardPending}</span>
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-bold whitespace-nowrap">
                        {isRewarded ? (
                          <span className="text-[#00B884]">+{item.referrerPointsAwarded} pts</span>
                        ) : (
                          <span className="text-stone-400">0 pts</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        {!isRewarded ? (
                          <button
                            onClick={() => simulateCompleteFirstCollection(item.id)}
                            className="px-2.5 py-1 rounded-md bg-[#00B884] hover:bg-[#009e70] text-white text-[11px] font-semibold transition-colors inline-flex items-center gap-1 cursor-pointer shadow-2xs"
                            title="Simulate this referee completing their 1st verified waste pickup"
                          >
                            <PlayCircle className="w-3 h-3" />
                            <span>{language === 'Hi' ? '1st पिकअप सत्यापित करें' : 'Verify 1st Pickup'}</span>
                          </button>
                        ) : (
                          <span className="text-[11px] text-emerald-700 font-medium flex items-center justify-center gap-1">
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{language === 'Hi' ? 'पूर्ण' : 'Completed'}</span>
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Security & Academic Demonstration Disclaimer */}
      <section className="p-4 sm:p-5 rounded-xl bg-amber-50/90 border border-amber-200 text-xs text-amber-950 flex items-start gap-3 leading-relaxed shadow-2xs">
        <ShieldCheck className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold text-amber-950 block">
            {t.refer.demoNoticeTitle}
          </span>
          <p className="text-amber-900">
            {t.refer.demoNoticeDesc}
          </p>
          <div className="pt-1 flex flex-wrap gap-4 text-[11px] text-amber-900/80">
            <span>• Self-referrals and duplicate emails are automatically rejected.</span>
            <span>• Points credit strictly upon verified dry waste recycling collection.</span>
            <span>• Initial values configurable in <code className="font-mono bg-amber-100/80 px-1 py-0.5 rounded text-amber-950">REFERRAL_CONFIG</code>.</span>
          </div>
        </div>
      </section>

    </div>
  );
}
