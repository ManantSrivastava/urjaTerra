'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEarthSync } from '@/context/EarthSyncContext';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { 
  Menu, 
  X, 
  Sun,
  Globe,
  ChevronDown,
  User,
  ShieldCheck,
  LogOut
} from 'lucide-react';

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const { userProfile, isHydrated, language, setLanguage, t } = useEarthSync();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const isAdminPage = pathname === '/admin' || pathname.startsWith('/admin/');

  const handleAdminLogout = () => {
    try {
      sessionStorage.removeItem('urjaterra_admin_auth_v2');
      sessionStorage.removeItem('earthsync_admin_auth_v2');
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event('urjaterra_admin_logout'));
    window.dispatchEvent(new Event('earthsync_admin_logout'));
    window.location.reload();
  };

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.waste, href: '/waste' },
    { name: t.nav.solar, href: '/solar' },
    { name: t.nav.refer, href: '/refer' },
    { name: t.nav.about, href: '/#about' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Sticky Horizontal Navbar matching design */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md text-foreground border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          
          {/* Left: urjaTerra Logo & Language selector & Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link href="/" className="flex items-center group shrink-0" aria-label="urjaTerra Home">
              <Logo variant="full" className="h-8 sm:h-9 w-auto transition-transform group-hover:scale-102" />
            </Link>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium text-muted hover:text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
                title="Select Language"
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-muted" />
                <span className="font-semibold text-xs">{language}</span>
                <ChevronDown className="w-3 h-3 text-muted" />
              </button>

              {langMenuOpen && (
                <div className="absolute left-0 mt-1 w-28 bg-surface border border-border rounded-lg shadow-md py-1 z-50 text-xs">
                  <button
                    onClick={() => { setLanguage('En'); setLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 hover:bg-foreground/5 flex items-center justify-between cursor-pointer ${language === 'En' ? 'font-bold text-accent-text' : 'text-foreground'}`}
                  >
                    <span>English</span>
                    {language === 'En' && <span className="text-accent">✓</span>}
                  </button>
                  <button
                    onClick={() => { setLanguage('Hi'); setLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 hover:bg-foreground/5 flex items-center justify-between cursor-pointer ${language === 'Hi' ? 'font-bold text-accent-text' : 'text-foreground'}`}
                  >
                    <span>हिंदी</span>
                    {language === 'Hi' && <span className="text-accent">✓</span>}
                  </button>
                </div>
              )}
            </div>

            {/* Theme Toggle in Navbar */}
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-sm transition-all ${
                    active
                      ? 'text-accent-text bg-accent/15 font-semibold rounded-full shadow-2xs'
                      : 'text-muted hover:text-foreground font-medium rounded-full hover:bg-foreground/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Admin Badge + Log Out (on /admin) OR Points Pill + Profile / Sign In */}
          <div className="hidden sm:flex items-center gap-2.5 lg:gap-3">
            {isAdminPage ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  <span>{t.nav.admin}</span>
                </div>
                <button
                  onClick={handleAdminLogout}
                  className="px-3 py-1.5 rounded-lg border border-border bg-surface hover:bg-rose-500/10 hover:border-rose-300 text-foreground hover:text-rose-600 text-xs font-semibold transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer group"
                  title="Log Out of Admin Portal"
                >
                  <LogOut className="w-3.5 h-3.5 text-muted group-hover:text-rose-600 transition-colors" />
                  <span>{t.nav.logOut}</span>
                </button>
              </div>
            ) : (
              <>
                {/* GreenPoints Indicator */}
                <Link
                  href="/waste"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface hover:bg-surface/90 border border-border text-xs font-semibold text-foreground shadow-2xs transition-all"
                  title="GreenPoints Balance"
                >
                  <Sun className="w-3.5 h-3.5 text-highlight fill-highlight" />
                  <span className="text-[12px]">{isHydrated ? userProfile.greenPointsBalance.toLocaleString() : '0'} {t.nav.pts}</span>
                </Link>

                {/* Profile or Sign In Link */}
                {isHydrated && userProfile.email ? (
                  <Link
                    href="/profile"
                    className="px-3 py-1.5 rounded-lg border border-border bg-surface hover:bg-surface/90 text-foreground text-xs font-medium transition-all flex items-center gap-1.5 shadow-2xs"
                    title="Account Profile"
                  >
                    <User className="w-3.5 h-3.5 text-accent" />
                    <span className="text-[12px]">{userProfile.name ? userProfile.name.split(' ')[0] : t.nav.profile}</span>
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="px-3 py-1.5 rounded-lg border border-border bg-surface hover:bg-surface/90 text-foreground text-xs font-medium transition-all flex items-center gap-1.5 shadow-2xs"
                    title="Sign In"
                  >
                    <User className="w-3.5 h-3.5 text-muted" />
                    <span className="text-[12px]">{t.nav.signIn}</span>
                  </Link>
                )}
              </>
            )}
          </div>

          {/* Mobile Right: Points/Admin & Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            {isAdminPage ? (
              <button
                onClick={handleAdminLogout}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-bold cursor-pointer"
                title="Admin Log Out"
              >
                <ShieldCheck className="w-3 h-3 text-accent" />
                <span>{t.nav.admin}</span>
                <LogOut className="w-3 h-3 ml-1 text-accent" />
              </button>
            ) : (
              <Link
                href="/waste"
                className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface border border-border text-xs font-semibold text-foreground"
              >
                <Sun className="w-3.5 h-3.5 text-highlight fill-highlight" />
                <span>{isHydrated ? userProfile.greenPointsBalance : '0'}</span>
              </Link>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md border border-border text-foreground hover:bg-surface cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Responsive Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background p-4 shadow-sm animate-in slide-in-from-top-1">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      active
                        ? 'text-accent-text bg-accent/15 font-bold'
                        : 'text-foreground hover:bg-surface'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2.5">
              {isAdminPage ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleAdminLogout();
                  }}
                  className="w-full text-center py-2 px-3 rounded-md bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-500 hover:bg-rose-500/20 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>{t.nav.logOut} ({t.nav.admin})</span>
                </button>
              ) : isHydrated && userProfile.email ? (
                <Link
                  href="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2 px-3 rounded-md border border-border text-xs font-medium text-foreground hover:bg-surface flex items-center justify-center gap-1.5"
                >
                  <User className="w-3.5 h-3.5 text-accent" />
                  <span>{t.nav.myProfile}</span>
                </Link>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2 px-3 rounded-md border border-border text-xs font-medium text-foreground hover:bg-surface flex items-center justify-center gap-1.5"
                >
                  <User className="w-3.5 h-3.5 text-muted" />
                  <span>{t.nav.signIn}</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
