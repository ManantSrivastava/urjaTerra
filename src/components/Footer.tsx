'use client';

import React from 'react';
import Link from 'next/link';
import { useEarthSync } from '@/context/EarthSyncContext';
import { Leaf, ShieldCheck, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useEarthSync();

  return (
    <footer className="border-t border-[#E2E9E3] bg-[#FFFFFF] text-[#65736B] text-xs mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E2E9E3]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-[#063D2E] flex items-center justify-center text-white">
              <Leaf className="w-4 h-4 text-[#00B884]" />
            </div>
            <div>
              <span className="font-bold text-base text-[#17231E] tracking-tight">
                urja<span className="text-[#00B884]">Terra</span>
              </span>
              <p className="text-[11px] text-[#65736B]">
                {t.footer.tagline}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <Link href="/" className="hover:text-[#063D2E] transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/waste" className="hover:text-[#063D2E] transition-colors">
              {t.nav.waste}
            </Link>
            <Link href="/solar" className="hover:text-[#063D2E] transition-colors">
              {t.nav.solar}
            </Link>
            <Link href="/refer" className="hover:text-[#063D2E] transition-colors">
              {t.nav.refer}
            </Link>
            <Link href="/#about" className="hover:text-[#063D2E] transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/privacy" className="hover:text-[#063D2E] transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="hover:text-[#063D2E] transition-colors">
              {t.footer.terms}
            </Link>
            <Link 
              href="/admin" 
              className="hover:text-[#063D2E] text-[#00A86B] font-semibold transition-colors flex items-center gap-1"
              title="Operations and Partner Console"
            >
              <Lock className="w-3 h-3 text-[#00A86B]" />
              <span>{t.footer.admin}</span>
            </Link>
          </nav>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#65736B]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00B884]" />
            <span>
              {t.footer.cleanTechBadge}
            </span>
          </div>
          <p>
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

