'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Laptop, Check } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!mounted) {
    return (
      <div 
        className={`w-8 h-8 rounded-lg border border-border bg-surface/40 flex items-center justify-center opacity-60 ${className}`}
        aria-hidden="true"
      >
        <Sun className="w-4 h-4 text-muted" />
      </div>
    );
  }

  const currentTheme = theme || 'system';

  const options = [
    { key: 'light', label: 'Light', icon: Sun },
    { key: 'dark', label: 'Dark', icon: Moon },
    { key: 'system', label: 'System', icon: Laptop },
  ] as const;

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme"
        className="w-8 h-8 rounded-lg border border-border bg-surface/80 hover:bg-surface text-foreground flex items-center justify-center transition-colors shadow-xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-accent/50"
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="w-4 h-4 text-[#00B884] transition-transform duration-200" />
        ) : (
          <Sun className="w-4 h-4 text-[#FFB800] transition-transform duration-200" />
        )}
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-1.5 w-36 rounded-xl border border-border bg-surface py-1 shadow-lg z-50 animate-in fade-in-50 zoom-in-95 duration-150"
          role="menu"
          aria-orientation="vertical"
        >
          {options.map((opt) => {
            const Icon = opt.icon;
            const isSelected = currentTheme === opt.key;
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => {
                  setTheme(opt.key);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? 'text-accent-text font-semibold bg-accent/10'
                    : 'text-foreground hover:bg-foreground/5'
                }`}
                role="menuitem"
              >
                <div className="flex items-center gap-2">
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-accent' : 'text-muted'}`} />
                  <span>{opt.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-accent" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

