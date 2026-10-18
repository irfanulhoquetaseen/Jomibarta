'use client';

import Link from 'next/link';
import { useRef, type MouseEvent } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { useGuideMotion } from './useGuideMotion';
import { BuyerHero } from './BuyerHero';
import { BuyerPortal } from './BuyerPortal';

export function BuyerGuide({ motionPaused, onToggleMotion }: {
  onTryDemo: () => void;
  motionPaused: boolean;
  onToggleMotion: () => void;
}) {
  const { t, language } = useLanguage();
  const guideRef = useRef<HTMLDivElement>(null);
  useGuideMotion(guideRef, motionPaused);
  const number = (value: number) => value.toLocaleString(language === 'bn' ? 'bn-BD' : 'en-US');
  const goToSection = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const destination = new URL(event.currentTarget.href, window.location.href);
    if (destination.pathname !== window.location.pathname || destination.search !== window.location.search || !destination.hash) return;
    const target = document.getElementById(destination.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: 'start', behavior: motionPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };

  return <div ref={guideRef} className="buyer-guide">
    <BuyerHero motionPaused={motionPaused} onToggleMotion={onToggleMotion} onNavigate={goToSection} />
    <div className="guide-content space-y-6">
      <section className="rounded-2xl border border-emerald-900/15 bg-white p-5 sm:p-6 shadow-sm space-y-4" data-scroll-reveal aria-labelledby="guide-mission-title">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h2 id="guide-mission-title" className="text-lg sm:text-xl font-extrabold text-emerald-950">
              {t('জমিবার্তা: সাধারণ মানুষের জন্য জমি যাচাই সহায়িকা', 'Jomibarta: Plain-Language Land Verification Guide')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              {t('জমি কেনার আগে কী জানবেন, কী খুঁজবেন এবং কোন কোন দফতরে যাবেন—তার নিরপেক্ষ পথপ্রদর্শক।', 'An independent guide to what to ask, what to compare, and which offices to visit before buying land.')}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link href="/check/papers" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 font-bold transition-colors">
              <span>{t('প্রয়োজনীয় কাগজ দেখি', 'See papers to gather')}</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/check/preparation" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-bold transition-colors">
              <span>{t('আমার প্রস্তুতি', 'My preparation')}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm">
          <div className="rounded-xl bg-[#f4f8f3] border border-[#d2e4cf] p-4 space-y-2">
            <h3 className="font-bold text-[#12633e] flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#12633e] text-white text-[11px]" aria-hidden="true">✓</span>
              <span>{t('জমিবার্তা যা করে', 'What Jomibarta does')}</span>
            </h3>
            <ul className="space-y-1.5 pl-6 list-disc text-slate-700 leading-relaxed">
              <li>{t('জমি কেনার আগে বিক্রেতার কাছে কোন কোন কাগজ চাইতে হবে তা স্পষ্টভাবে জানায়।', 'Explains which documents you must ask the seller for before buying.')}</li>
              <li>{t('মালিকের পরিচয়, নামজারি, মামলা, খাস ও অধিগ্রহণ—এই ৫টি বিষয় কীভাবে মিলাবেন শেখায়।', 'Teaches how to compare owner identity, mutation, cases, khas, and acquisition.')}</li>
              <li>{t('কোন তথ্য কোথায় যাচাই করতে হবে (সাব-রেজিস্ট্রি, এসিল্যান্ড অফিস ইত্যাদি) তার পথ দেখায়।', 'Directs you to the correct physical office (Sub-Registry, AC Land) for official searches.')}</li>
            </ul>
          </div>
          <div className="rounded-xl bg-[#fff9f6] border border-[#f0d8cd] p-4 space-y-2">
            <h3 className="font-bold text-[#975b35] flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#975b35] text-white text-[11px]" aria-hidden="true">✕</span>
              <span>{t('জমিবার্তা যা করে না', 'What Jomibarta does not do')}</span>
            </h3>
            <ul className="space-y-1.5 pl-6 list-disc text-slate-700 leading-relaxed">
              <li>{t('সরকারি সার্ভার থেকে সরাসরি আসল জমির রেকর্ড এনে দেয় না বা চেক করে না।', 'Does not query or retrieve live government records from official databases.')}</li>
              <li>{t('জমির মালিকানা বা কোনো দলিলকে শতভাগ খাঁটি বলে সার্টিফাই বা প্রত্যয়ন করে না।', 'Does not certify genuine legal title or declare any deed legally authentic.')}</li>
              <li>{t('অভিজ্ঞ ভূমি আইনজীবী বা সরকারি অফিসের আনুষ্ঠানিক রেকর্ড যাচাইয়ের বিকল্প নয়।', 'Does not replace an experienced land lawyer or certified office record searches.')}</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="guide-how" tabIndex={-1} className="guide-how guide-destination" data-scroll-reveal aria-labelledby="guide-how-title">
        <h2 id="guide-how-title">{t('যেভাবে ব্যবহার করবেন', 'How to use this guide')}</h2>
        <ol>{[
          { title: t('কাগজ হাতে নিন', 'Gather your papers'), body: t('বিক্রেতার কাছে কোন কাগজ চাইবেন, তালিকা দেখুন।', 'See which papers to ask the seller for.'), href: '/check/papers' },
          { title: t('পাঁচটি বিষয় দেখুন', 'Explore the five checks'), body: t('একটি বিষয় বেছে আলাদা পাতায় ধাপগুলো দেখুন।', 'Choose a topic to read its steps on a separate page.'), href: '#guide-topics' },
          { title: t('নিজের প্রস্তুতি চিহ্ন দিন', 'Mark your preparation'), body: t('কাগজ পেয়েছেন, নাকি অমিল আছে—বেছে রাখুন।', 'Mark whether you have the papers or found a difference.'), href: '/check/preparation' },
        ].map((step, index) => <li key={step.href}><span className="guide-how-number" aria-hidden="true">{number(index + 1)}</span><div>
          <h3><Link href={step.href} onClick={goToSection} className="inline-flex min-h-11 items-center underline underline-offset-4">{step.title}</Link></h3><p>{step.body}</p>
        </div></li>)}</ol>
      </section>
      <BuyerPortal onNavigate={goToSection} />
    </div>
  </div>;
}
