'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

export type ActiveNavTab = 'guide' | 'search' | 'register' | 'tamper';

interface NavbarProps {
  activeTab?: ActiveNavTab;
  onTabChange?: (tab: ActiveNavTab) => void;
}

interface DemoToolItem {
  id: ActiveNavTab;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  icon: (cls?: string) => React.ReactNode;
}

const DEMO_TOOLS: DemoToolItem[] = [
  {
    id: 'search',
    titleBn: 'নমুনা রেকর্ড যাচাই',
    titleEn: 'Check sample records',
    descBn: '৮টি কাল্পনিক পরিস্থিতি ও দলিলের ফলাফল পরীক্ষা',
    descEn: 'Inspect 8 synthetic scenarios and risk checks',
    badgeBg: 'bg-emerald-50',
    badgeBorder: 'border-emerald-200',
    badgeText: 'text-emerald-800',
    icon: (cls = 'w-4 h-4') => (
      <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="8.5" cy="8.5" r="5.5" />
        <path d="m13 13 4.5 4.5" />
      </svg>
    ),
  },
  {
    id: 'register',
    titleBn: 'নমুনা দলিল তৈরি',
    titleEn: 'Create a sample deed',
    descBn: 'ব্রাউজারে নতুন দলিল রেজিস্ট্রি ও QR কোড তৈরি',
    descEn: 'Register a demo deed and generate QR in-browser',
    badgeBg: 'bg-amber-50',
    badgeBorder: 'border-amber-200',
    badgeText: 'text-amber-800',
    icon: (cls = 'w-4 h-4') => (
      <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7Z" />
        <path d="M12 2v5h5" />
        <path d="M10 11v6m-3-3h6" />
      </svg>
    ),
  },
  {
    id: 'tamper',
    titleBn: 'তথ্য বদলালে কী হয় দেখুন',
    titleEn: 'See what happens when data changes',
    descBn: 'SHA-256 ক্রিপ্টোগ্রাফিক সুরক্ষা ও জালিয়াতি পরীক্ষা',
    descEn: 'Demonstrate SHA-256 cryptographic tamper detection',
    badgeBg: 'bg-rose-50',
    badgeBorder: 'border-rose-200',
    badgeText: 'text-rose-800',
    icon: (cls = 'w-4 h-4') => (
      <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 2s6 2.5 6 7c0 5-6 9-6 9s-6-4-6-9c0-4.5 6-7 6-7Z" />
        <path d="m8 9.5 2 2 4-4" />
      </svg>
    ),
  },
];

export function Navbar({ activeTab = 'guide', onTabChange }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileToolsExpanded, setIsMobileToolsExpanded] = useState(activeTab !== 'guide');
  const [scrolled, setScrolled] = useState(false);

  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Monitor scroll state for soft elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(target) &&
        triggerButtonRef.current &&
        !triggerButtonRef.current.contains(target)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        !(event.target as HTMLElement)?.closest('[data-mobile-menu-trigger="true"]')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isDropdownOpen) {
          event.preventDefault();
          setIsDropdownOpen(false);
          triggerButtonRef.current?.focus();
        }
        if (isMobileMenuOpen) {
          event.preventDefault();
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdownOpen, isMobileMenuOpen]);

  // Clean up mobile menu if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelectTab = (tab: ActiveNavTab) => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    onTabChange?.(tab);
  };

  const isDemoToolActive = activeTab !== 'guide';

  return (
    <header className="workspace-header" data-scrolled={scrolled ? 'true' : 'false'}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-[72px] flex items-center justify-between gap-3 sm:gap-4">
        {/* Left: Brand Identity (Leaf logo + জমিবার্তা / Jomibarta + Tagline) */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={() => handleSelectTab('guide')}
            className="flex items-center gap-3 text-left rounded-xl p-1 -m-1 focus-visible:outline-2 focus-visible:outline-[#975b35] group transition-opacity"
            aria-label={t('জমিবার্তা - মূল পাতায় যান', 'Jomibarta - Go to homepage')}
          >
            <span className="brand-mark shrink-0" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" className="w-[26px] h-[26px] text-[#e6edcf]">
                <path d="M16 26V15m0 5L9 16m7 1 7-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 14C7 7 16 5 25 5c0 10-4 16-11 16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M6 27h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <div className="flex flex-col min-w-0">
              <div className="flex items-baseline gap-0.5 leading-none">
                <span className="brand-name text-[#172d21] group-hover:text-[#234e38] transition-colors">
                  {language === 'bn' ? 'জমিবার্তা' : 'Jomibarta'}
                </span>
                <span className="text-[#975b35] font-black text-xl leading-none" aria-hidden="true">.</span>
              </div>
              <span className="brand-subtitle text-[12px] text-[#5e6e63] font-medium leading-tight truncate">
                {t('জমির তথ্য মিলিয়ে দেখুন', 'Check land records')}
              </span>
            </div>
          </button>
        </div>

        {/* Middle: Desktop Navigation (>= 1024px) */}
        {onTabChange && (
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3" aria-label={t('মূল নেভিগেশন', 'Main navigation')}>
            {/* Primary Action: জমি কেনার আগে যাচাই */}
            <button
              type="button"
              aria-current={activeTab === 'guide' ? 'page' : undefined}
              onClick={() => handleSelectTab('guide')}
              className={`inline-flex items-center justify-center min-h-[42px] px-4 py-2 rounded-xl text-sm font-bold transition-all duration-150 ${
                activeTab === 'guide'
                  ? 'bg-[#234e38] text-[#fffef9] shadow-sm'
                  : 'text-[#354b3c] hover:bg-[#edf2e7] hover:text-[#172d21] bg-transparent'
              }`}
            >
              {t('জমি কেনার আগে যাচাই', 'Check before you buy')}
            </button>

            {/* Dropdown: ডেমো টুল */}
            <div className="relative" ref={dropdownContainerRef}>
              <button
                ref={triggerButtonRef}
                id="demo-tools-trigger"
                type="button"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                aria-controls="demo-tools-menu"
                onClick={() => setIsDropdownOpen(prev => !prev)}
                className={`inline-flex items-center justify-between gap-2 min-h-[42px] px-3.5 py-2 rounded-xl text-sm font-bold border transition-all duration-150 ${
                  isDropdownOpen
                    ? 'border-[#234e38] bg-[#edf2e7] text-[#172d21] shadow-sm'
                    : isDemoToolActive
                      ? 'border-[#bacbb0] bg-[#edf2e7] text-[#234e38]'
                      : 'border-[#cbd1c3] hover:border-[#829b78] bg-[#fffef9] text-[#354b3c] hover:bg-[#edf2e7]/70'
                }`}
              >
                <svg className="w-4 h-4 text-[#234e38]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="6" height="6" rx="1.5" />
                  <rect x="11" y="3" width="6" height="6" rx="1.5" />
                  <rect x="3" y="11" width="6" height="6" rx="1.5" />
                  <rect x="11" y="11" width="6" height="6" rx="1.5" />
                </svg>
                <span>{t('ডেমো টুল', 'Demo Tools')}</span>
                <svg
                  className={`w-3.5 h-3.5 text-[#5e6e63] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 7.5 5 5 5-5" />
                </svg>
              </button>

              {/* Dropdown Panel */}
              {isDropdownOpen && (
                <div
                  id="demo-tools-menu"
                  role="region"
                  aria-label={t('ডেমো টুলস মেনু', 'Demo tools menu')}
                  className="absolute top-[calc(100%+8px)] left-0 xl:left-auto xl:right-0 w-[330px] sm:w-[360px] max-w-[calc(100vw-32px)] bg-[#fffef9] border border-[#cdd6c6] rounded-2xl shadow-xl shadow-slate-900/10 p-2.5 z-50 animate-fade-in"
                >
                  <div className="flex items-center justify-between px-3 py-2 border-b border-[#efeee6] mb-1.5">
                    <span className="text-xs font-bold text-[#5e6e63] uppercase tracking-wider">
                      {t('নমুনা টুলস', 'Interactive Demos')}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                      {t('কাল্পনিক রেকর্ড', 'Synthetic Demo')}
                    </span>
                  </div>
                  <div className="space-y-1">
                    {DEMO_TOOLS.map(tool => {
                      const isCurrent = activeTab === tool.id;
                      return (
                        <button
                          key={tool.id}
                          type="button"
                          aria-current={isCurrent ? 'page' : undefined}
                          onClick={() => handleSelectTab(tool.id)}
                          className={`w-full text-left p-2.5 rounded-xl transition-all duration-150 flex items-start gap-3 group focus-visible:outline-2 focus-visible:outline-[#975b35] ${
                            isCurrent
                              ? 'bg-[#eaf0e3] border border-[#b9d2b6]'
                              : 'hover:bg-[#f4f7f0] border border-transparent'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${tool.badgeBg} ${tool.badgeBorder} ${tool.badgeText}`}>
                            {tool.icon('w-4 h-4')}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className={`text-sm font-bold block truncate ${isCurrent ? 'text-[#172d21]' : 'text-[#233b2d] group-hover:text-[#172d21]'}`}>
                                {t(tool.titleBn, tool.titleEn)}
                              </span>
                              {isCurrent && (
                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#234e38] text-[#fffef9] shrink-0">
                                  {t('খোলা আছে', 'Active')}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[#5e6e63] leading-relaxed mt-0.5">
                              {t(tool.descBn, tool.descEn)}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>
        )}

        {/* Right: Language switch + Official services button + Mobile trigger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Segmented language switcher */}
          <div className="language-switch" role="group" aria-label={t('ভাষা নির্বাচন', 'Choose language')}>
            <button
              type="button"
              lang="bn"
              aria-pressed={language === 'bn'}
              onClick={() => setLanguage('bn')}
              className="px-2.5 sm:px-3 text-xs sm:text-sm font-bold transition-all"
            >
              বাংলা
            </button>
            <button
              type="button"
              lang="en"
              aria-pressed={language === 'en'}
              onClick={() => setLanguage('en')}
              className="px-2.5 sm:px-3 text-xs sm:text-sm font-bold transition-all"
            >
              English
            </button>
          </div>

          {/* Outlined government services button (Desktop) */}
          <a
            href="https://www.land.gov.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 min-h-[42px] px-3 sm:px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold border border-[#234e38]/30 hover:border-[#234e38] bg-transparent hover:bg-[#edf2e7] text-[#234e38] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#975b35]"
          >
            <span>{t('সরকারি সেবায় যাওয়ার পথ', 'Government Services')}</span>
            <span aria-hidden="true" className="text-xs font-bold text-[#975b35]">↗</span>
            <span className="sr-only">{t('(নতুন ট্যাবে খুলবে)', '(opens in a new tab)')}</span>
          </a>

          {/* Mobile hamburger menu toggle (< 1024px) */}
          {onTabChange && (
            <button
              type="button"
              data-mobile-menu-trigger="true"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={isMobileMenuOpen ? t('মেনু বন্ধ করুন', 'Close navigation menu') : t('মেনু খুলুন', 'Open navigation menu')}
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              className="lg:hidden min-h-[44px] min-w-[44px] rounded-xl border border-[#cbd1c3] bg-[#fffef9] hover:bg-[#edf2e7] flex items-center justify-center text-[#234e38] transition-colors focus-visible:outline-2 focus-visible:outline-[#975b35]"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                  <path d="M5 5l10 10M15 5L5 15" />
                </svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 6h12M4 10h12M4 14h12" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Drawer (< 1024px) */}
      {onTabChange && isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={mobileMenuRef}
          className="lg:hidden border-t border-[#efeee6] bg-[#fffef9] px-4 py-4 space-y-3 shadow-xl animate-fade-in"
        >
          {/* Primary Action Button */}
          <button
            type="button"
            aria-current={activeTab === 'guide' ? 'page' : undefined}
            onClick={() => handleSelectTab('guide')}
            className={`w-full min-h-[46px] px-4 py-3 rounded-xl text-left text-sm font-bold flex items-center justify-between transition-colors focus-visible:outline-2 focus-visible:outline-[#975b35] ${
              activeTab === 'guide'
                ? 'bg-[#234e38] text-[#fffef9]'
                : 'bg-[#edf2e7] text-[#234e38] hover:bg-[#e2ead9]'
            }`}
          >
            <span>{t('জমি কেনার আগে যাচাই', 'Check before you buy')}</span>
            {activeTab === 'guide' && (
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                {t('এখন খোলা', 'Active')}
              </span>
            )}
          </button>

          {/* Expandable Demo Tools Section */}
          <div className="border border-[#cdd6c6] rounded-xl overflow-hidden bg-white">
            <button
              type="button"
              onClick={() => setIsMobileToolsExpanded(prev => !prev)}
              aria-expanded={isMobileToolsExpanded}
              className="w-full min-h-[46px] px-4 py-3 text-left text-sm font-bold text-[#234e38] flex items-center justify-between bg-[#f8faf6] hover:bg-[#f1f6ed] transition-colors focus-visible:outline-2 focus-visible:outline-[#975b35]"
            >
              <div className="flex items-center gap-2">
                <span>{t('ডেমো টুল সমূহ', 'Demo Tools')}</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                  {t('কাল্পনিক', 'Synthetic')}
                </span>
              </div>
              <svg
                className={`w-4 h-4 text-[#5e6e63] transition-transform duration-200 ${isMobileToolsExpanded ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m5 7.5 5 5 5-5" />
              </svg>
            </button>

            {isMobileToolsExpanded && (
              <div className="p-2 space-y-1.5 border-t border-[#efeee6]">
                {DEMO_TOOLS.map(tool => {
                  const isCurrent = activeTab === tool.id;
                  return (
                    <button
                      key={tool.id}
                      type="button"
                      aria-current={isCurrent ? 'page' : undefined}
                      onClick={() => handleSelectTab(tool.id)}
                      className={`w-full p-2.5 rounded-lg text-left flex items-start gap-3 transition-colors focus-visible:outline-2 focus-visible:outline-[#975b35] ${
                        isCurrent
                          ? 'bg-[#eaf0e3] border border-[#b9d2b6]'
                          : 'hover:bg-[#f4f7f0] border border-transparent'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${tool.badgeBg} ${tool.badgeBorder} ${tool.badgeText}`}>
                        {tool.icon('w-4 h-4')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-sm font-bold text-[#233b2d] block truncate">
                            {t(tool.titleBn, tool.titleEn)}
                          </span>
                          {isCurrent && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#234e38] text-[#fffef9] shrink-0">
                              {t('খোলা আছে', 'Active')}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#5e6e63] leading-tight mt-0.5">
                          {t(tool.descBn, tool.descEn)}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Official Government Services link (Mobile) */}
          <a
            href="https://www.land.gov.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[46px] px-4 py-3 rounded-xl text-sm font-bold border border-[#234e38]/30 bg-transparent hover:bg-[#edf2e7] text-[#234e38] flex items-center justify-between transition-colors focus-visible:outline-2 focus-visible:outline-[#975b35]"
          >
            <span>{t('সরকারি সেবায় যাওয়ার পথ', 'Official Land Services')}</span>
            <span aria-hidden="true" className="text-xs font-bold text-[#975b35]">↗</span>
          </a>
        </div>
      )}
    </header>
  );
}
