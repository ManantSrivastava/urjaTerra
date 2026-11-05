'use client';

import React from 'react';
import Link from 'next/link';
import { useEarthSync } from '@/context/EarthSyncContext';
import { Logo } from '@/components/Logo';
import { ShieldCheck, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useEarthSync();

  return (
    <footer className="border-t border-[#04281E] bg-[#063D2E] text-[#9FB0A6] text-xs mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#0B4F3D]">
          {/* Brand */}
          <div className="flex flex-col gap-1.5">
            <Link href="/" className="inline-block group" aria-label="urjaTerra Home">
              <Logo variant="full" theme="dark" className="h-7 w-auto transition-transform group-hover:scale-102" />
            </Link>
            <p className="text-[11px] text-[#9FB0A6]">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <Link href="/" className="text-[#DFE6E0] hover:text-[#00B884] transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/waste" className="text-[#DFE6E0] hover:text-[#00B884] transition-colors">
              {t.nav.waste}
            </Link>
            <Link href="/solar" className="text-[#DFE6E0] hover:text-[#00B884] transition-colors">
              {t.nav.solar}
            </Link>
            <Link href="/refer" className="text-[#DFE6E0] hover:text-[#00B884] transition-colors">
              {t.nav.refer}
            </Link>
            <Link href="/#about" className="text-[#DFE6E0] hover:text-[#00B884] transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/privacy" className="text-[#DFE6E0] hover:text-[#00B884] transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="text-[#DFE6E0] hover:text-[#00B884] transition-colors">
              {t.footer.terms}
            </Link>
            <Link 
              href="/admin" 
              className="text-[#00B884] hover:text-[#34D399] font-semibold transition-colors flex items-center gap-1"
              title="Operations and Partner Console"
            >
              <Lock className="w-3 h-3 text-[#00B884]" />
              <span>{t.footer.admin}</span>
            </Link>
          </nav>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#7E9689]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00B884]" />
            <span className="text-[#9FB0A6]">
              {t.footer.cleanTechBadge}
            </span>
          </div>
          <p className="text-[#7E9689]">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

