'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { BuyerHelp } from './BuyerHelp';
import { checks, guideTopicTitles, type CheckId, type GuideTopic, type PaperStatus } from './guideTopics';
import { topicGuideDetails } from './guideTopicDetails';
import { usePaperPreparation } from './usePaperPreparation';
import { useGuideMotion } from './useGuideMotion';
import './buyer-portal.css';

function SupportingDocuments() {
  const { t } = useLanguage();
  return (
    <details className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7">
      <summary className="min-h-11 cursor-pointer font-bold text-slate-900">{t('আরও কিছু কাগজ মিলিয়ে নিন', 'Check supporting documents')}</summary>
      <div className="pt-4 grid gap-5 sm:grid-cols-2">
        <section className="space-y-3">
          <h2 className="text-base font-bold text-emerald-950">{t('ব্যাংকের ঋণ বা বন্ধক', 'Bank loans or mortgages')}</h2>
          <p className="text-slate-700">{t('বন্ধকের তথ্য খুঁজুন। ঋণ বা বন্ধকমুক্তির কাগজ সংশ্লিষ্ট ব্যাংকে মিলিয়ে নিন। অনলাইনে কিছু না পাওয়া মানে ঋণ নেই নয়।', 'Look for mortgage information. Confirm loan or release papers with the lender. No online result does not establish that a property is debt-free.')}</p>
          <a className="guide-official-link" href="https://mutation.land.gov.bd/search-mortgage-info" target="_blank" rel="noopener noreferrer">
            {t('সরকারি বন্ধক অনুসন্ধান ↗', 'Official mortgage search ↗')}
            <span className="text-xs font-normal">mutation.land.gov.bd</span>
            <span className="sr-only">{t('(নতুন ট্যাবে খুলবে)', '(opens in a new tab)')}</span>
          </a>
        </section>
        <section className="space-y-3">
          <h2 className="text-base font-bold text-emerald-950">{t('ভূমি করের দাখিলা', 'Land tax receipts')}</h2>
          <p className="text-slate-700">{t('হালনাগাদ দাখিলা ও হোল্ডিংয়ের তথ্য মিলিয়ে নিন। শুধু করের রসিদ দেখে মালিকানা নিশ্চিত করবেন না। সরকারি সাইটে নিজে লগইন করুন; জমিবার্তায় পাসওয়ার্ড বা OTP দেবেন না।', 'Compare current tax receipts and holding details. A tax receipt alone does not establish ownership. Sign in on the official site; do not give Jomibarta your password or OTP.')}</p>
          <a className="guide-official-link" href="https://portal.ldtax.gov.bd/" target="_blank" rel="noopener noreferrer">
            {t('সরকারি ভূমি উন্নয়ন কর সেবা ↗', 'Official land development tax service ↗')}
            <span className="text-xs font-normal">portal.ldtax.gov.bd</span>
            <span className="sr-only">{t('(নতুন ট্যাবে খুলবে)', '(opens in a new tab)')}</span>
          </a>
        </section>
        <section className="space-y-3">
          <h2 className="text-base font-bold text-emerald-950">{t('নকশা, সীমানা ও সরেজমিন', 'Maps, boundaries and site visit')}</h2>
          <p className="text-slate-700">{t('একই মৌজা ও জরিপের ম্যাপ দেখুন। জমির সীমানা, বাস্তব অবস্থান, দখল ও যাতায়াতের পথ আলাদা করে মিলিয়ে নিন। প্রয়োজনে অভিজ্ঞ জরিপকারীর সাহায্য নিন; ম্যাপ একাই মালিকানা প্রমাণ নয়।', 'Use the map for the same mouza and survey. Independently check boundaries, physical location, possession and access. Use an experienced surveyor when needed; a map alone does not prove ownership.')}</p>
          <a className="guide-official-link" href="https://dlrms.land.gov.bd/" target="_blank" rel="noopener noreferrer">
            {t('সরকারি মৌজা ম্যাপের সেবা ↗', 'Official mouza map service ↗')}
            <span className="text-xs font-normal">dlrms.land.gov.bd</span>
            <span className="sr-only">{t('(নতুন ট্যাবে খুলবে)', '(opens in a new tab)')}</span>
          </a>
        </section>
        <section className="space-y-3">
          <h2 className="text-base font-bold text-emerald-950">{t('কাগজে QR থাকলেই আসল নয়', 'A QR code alone does not prove authenticity')}</h2>
          <p className="text-slate-700">{t('সরকারি দাখিলা, খতিয়ান ও DCR-এর QR যাচাইয়ে সরকারি ভূমি (Bhumi) অ্যাপের নির্দেশনা অনুসরণ করুন। সন্দেহ হলে ১৬১২২-এ যোগাযোগ করুন। জমিবার্তা-র QR টুল শুধু নমুনা রেকর্ড খোঁজে; সরকারি কাগজের সত্যতা যাচাই করে না।', 'Follow official Bhumi app guidance for government tax receipt, khatian and DCR QR checks. Contact 16122 if suspicious. Jomibarta’s QR tool only looks up sample records; it does not authenticate government documents.')}</p>
          <a className="guide-official-link" href="https://bhumipedia.land.gov.bd/" target="_blank" rel="noopener noreferrer">
            {t('ভূমি মন্ত্রণালয়ের নির্দেশনা ↗', 'Ministry of Land guidance ↗')}
            <span className="text-xs font-normal">bhumipedia.land.gov.bd</span>
            <span className="sr-only">{t('(নতুন ট্যাবে খুলবে)', '(opens in a new tab)')}</span>
          </a>
        </section>
      </div>
    </details>
  );
}

function SourcesAndPrivacy() {
  const { t } = useLanguage();
  return (
    <details className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7">
      <summary className="min-h-11 cursor-pointer font-bold text-slate-900">{t('তথ্যের উৎস, গোপনীয়তা ও সীমাবদ্ধতা', 'Sources, privacy and limitations')}</summary>
      <div className="pt-3 space-y-3 text-slate-700">
        <p>{t('এই নির্দেশনা আমাদের সংক্ষিপ্ত নাগরিক সহায়িকা। সরকারি পোর্টালের হুবহু বক্তব্য বা কোনো আইনি মতামত নয়। সেবার ঠিকানা পর্যালোচনার তারিখ: ১৮ অক্টোবর ২০২৬; কোনো নির্দিষ্ট জমির রেকর্ড যাচাইয়ের তারিখ নয়।', 'This is our concise guidance, not a verbatim government statement or a legal opinion. Service directory reviewed: 18 October 2026; this is not the verification date of any plot record.')}</p>
        <p>{t('প্রস্তুতির পাঁচটি চিহ্ন এই ব্রাউজার সেশনের (sessionStorage) জন্য রাখা হয়। ভাষার পছন্দ ও ডেমো দলিল এই ব্রাউজারে সংরক্ষিত হতে পারে। জমিবার্তা কোনো দূরবর্তী সার্ভারে ব্যক্তিগত তথ্য পাঠায় না। বাইরের সরকারি সাইটের নিজস্ব নিয়ম ও নিরাপত্তা নীতি প্রযোজ্য।', 'The five preparation marks are kept in session storage for this browser tab. Language preferences and demo deeds may be stored locally. Jomibarta does not transmit personal data to remote servers. External government websites apply their own terms.')}</p>
        <p>{t('ডেমো টুলে শুধু কাল্পনিক তথ্য দিন। কোনো আসল পরিচয়পত্র, ফোন নম্বর বা ব্যক্তিগত দলিল দেবেন না। ব্রাউজারের সাইট ডেটা মুছে স্থানীয় তথ্য পরিষ্কার করতে পারেন।', 'Use made-up information in demo tools. Do not provide real identity documents, phone numbers or private deeds. Clear browser site data to remove local information.')}</p>
        <p>{t('কিছু সরকারি সাইট নেটওয়ার্ক জটিলতায় সাময়িকভাবে বন্ধ থাকতে পারে। ঠিকানা সরকারি সূত্রে মিলিয়ে দেওয়া হয়েছে; সর্বক্ষণ চালু থাকার কোনো নিশ্চয়তা নেই।', 'Some official websites may occasionally be unavailable due to network issues. Addresses were verified against official sources; continuous availability is not guaranteed.')}</p>
        <a href="https://bhumipedia.land.gov.bd/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-emerald-800 underline underline-offset-4">
          <span>{t('ভূমি মন্ত্রণালয়ের প্রকাশনা ও নির্দেশনা ↗', 'Ministry of Land publications and guidance ↗')}</span>
          <span className="sr-only">{t('(নতুন ট্যাবে খুলবে)', '(opens in a new tab)')}</span>
        </a>
      </div>
    </details>
  );
}

export function GuideDetail({ topic, onTryDemo, motionPaused }: {
  topic: GuideTopic;
  onTryDemo: () => void;
  motionPaused: boolean;
}) {
  const { t, language } = useLanguage();
  const rootRef = useRef<HTMLDivElement>(null);
  useGuideMotion(rootRef, motionPaused);
  const { papers, setPaper, unmarkPaper, clearPapers } = usePaperPreparation();
  const check = checks.find(item => item.id === topic);
  const detail = check ? topicGuideDetails[check.id] : null;
  const index = checks.findIndex(item => item.id === topic);

  const collectedCount = checks.filter(item => papers[item.id] === 'collected').length;
  const mismatchCount = checks.filter(item => papers[item.id] === 'mismatch').length;
  const missingCount = checks.filter(item => papers[item.id] === 'missing').length;
  const markedCount = collectedCount + mismatchCount + missingCount;
  const unmarkedCount = checks.length - markedCount;
  const hasMismatch = mismatchCount > 0;

  const title = guideTopicTitles[topic];
  const pick = (copy: readonly [string, string]) => t(copy[0], copy[1]);
  const number = (value: number) => value.toLocaleString(language === 'bn' ? 'bn-BD' : 'en-US');

  const handleStatusChange = (id: CheckId, value: string) => {
    if (value === 'missing' || value === 'collected' || value === 'mismatch') {
      setPaper(id, value);
    } else {
      unmarkPaper(id);
    }
  };

  const marker = (id: CheckId) => {
    const item = checks.find(entry => entry.id === id)!;
    const currentStatus = papers[id];
    return (
      <div className="space-y-3 rounded-xl bg-slate-50 border border-slate-200 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <label htmlFor={`paper-${id}`} className="block text-sm font-bold text-slate-900">
            {t('আপনার প্রস্তুতি নির্বাচন করুন', 'Select your preparation status')}
          </label>
          <span className="text-xs text-slate-500 font-medium">
            {currentStatus === 'collected' && <span className="text-emerald-700 font-semibold">✓ {t('কাগজ আছে', 'Papers in hand')}</span>}
            {currentStatus === 'mismatch' && <span className="text-rose-700 font-semibold">⚠ {t('অমিল / সাহায্য দরকার', 'Difference / need help')}</span>}
            {currentStatus === 'missing' && <span className="text-amber-700 font-semibold">✕ {t('এখনো সংগ্রহ হয়নি', 'Not yet collected')}</span>}
            {!currentStatus && <span className="text-slate-500">{t('চিহ্নিত করা হয়নি', 'Not yet marked')}</span>}
          </span>
        </div>
        <select
          id={`paper-${id}`}
          aria-label={`${t('প্রস্তুতি', 'Preparation')}: ${pick(item.title)}`}
          value={currentStatus || ''}
          onChange={event => handleStatusChange(id, event.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white p-3 text-base text-slate-900 focus:outline-2 focus:outline-emerald-700"
        >
          <option value="">{t('— এখনও চিহ্নিত করা হয়নি (বাছাই করুন) —', '— Not yet marked (select) —')}</option>
          <option value="missing">{t('১. এখনো কাগজ জোগাড় হয়নি', '1. Papers not yet collected')}</option>
          <option value="collected">{t('২. কাগজ আছে, মিলিয়ে দেখব', '2. Papers collected, ready to compare')}</option>
          <option value="mismatch">{t('৩. অমিল আছে / সাহায্য দরকার', '3. Difference found / need help')}</option>
        </select>
        {!currentStatus && (
          <p className="text-xs text-slate-600 leading-relaxed">
            {t('আপনার কাছে এই কাগজগুলো আছে কি না তা ওপরের তালিকা থেকে বেছে নিন।', 'Select from the dropdown whether you have obtained these documents.')}
          </p>
        )}
        {currentStatus === 'missing' && (
          <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-2.5 leading-relaxed" role="status">
            {t('কাগজ জোগাড়ের চেষ্টা করুন। বিক্রেতার কাছে কপি চান অথবা সংশ্লিষ্ট সাব-রেজিস্ট্রি/ভূমি অফিসে আবেদনের নিয়ম জেনে নিন।', 'Work on obtaining the papers. Request copies from the seller or inquire at the relevant sub-registry or land office.')}
          </p>
        )}
        {currentStatus === 'collected' && (
          <p className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg p-2.5 leading-relaxed" role="status">
            {t('কাগজ সংগ্রহের চিহ্ন রাখা হয়েছে। মনে রাখবেন: কাগজ হাতে পাওয়া মানেই যাচাই সম্পন্ন বা জমি নিরাপদ হওয়া নয়; এবার প্রতিটি তথ্য অফিসে মিলিয়ে দেখুন।', 'Marked as collected. Remember: having documents in hand does NOT mean they are verified or clear; now compare each detail with official offices.')}
          </p>
        )}
        {currentStatus === 'mismatch' && (
          <p className="text-xs text-rose-800 bg-rose-50 border border-rose-200 rounded-lg p-2.5 leading-relaxed" role="status">
            {t('অমিল বা সংশয় চিহ্নিত। টাকা বা বায়না দেওয়ার আগে সংশ্লিষ্ট সরকারি অফিস বা অভিজ্ঞ আইনজীবীর মাধ্যমে বিষয়টি পরিষ্কার করুন।', 'Discrepancy or concern marked. Consult the relevant government office or an experienced lawyer before paying advance money.')}
          </p>
        )}
      </div>
    );
  };

  const storageNote = (
    <p className="text-xs leading-6 text-slate-500 pt-1">
      {t('তথ্য সংরক্ষণের স্থায়িত্ব: প্রস্তুতির চিহ্ন এই ব্রাউজার ট্যাবের সেশনে (sessionStorage) থাকে; ট্যাব বন্ধ করলে আপনাআপনি মুছে যায়। এটি আপনার ব্যক্তিগত প্রস্তুতির চিহ্ন, জমি নিরাপদ হওয়ার আইনি সনদ নয়।', 'Storage duration: Preparation marks are kept for this browser tab session (sessionStorage) and cleared when closed. These are your personal notes, not a title clearance certificate.')}
    </p>
  );

  const nextId = check && index < checks.length - 1 ? checks[index + 1].id : 'preparation';

  const handleResetChecklist = () => {
    const confirmed = window.confirm(
      language === 'bn'
        ? 'আপনি কি প্রস্তুতির সব চিহ্ন মুছে ফেলতে চান? এতে আপনার ব্যক্তিগত চেকলিস্টের চিহ্নগুলো রিসেট হবে; অন্য কোনো তথ্য মুছবে না।'
        : 'Do you want to reset all preparation marks? This will reset only your personal checklist marks; no other data will be deleted.'
    );
    if (confirmed) {
      clearPapers();
    }
  };

  const getStatusPrintLabel = (status: PaperStatus | undefined) => {
    if (status === 'collected') return language === 'bn' ? '[✓] কাগজ আছে, মিলিয়ে দেখব' : '[✓] Papers collected, ready to compare';
    if (status === 'mismatch') return language === 'bn' ? '[!] অমিল আছে / সাহায্য দরকার' : '[!] Difference found / need help';
    if (status === 'missing') return language === 'bn' ? '[✕] এখনো কাগজ জোগাড় হয়নি' : '[✕] Papers not yet collected';
    return language === 'bn' ? '[—] এখনও চিহ্নিত করা হয়নি' : '[—] Not yet marked';
  };

  return (
    <div ref={rootRef} className="buyer-guide guide-content space-y-6">
      {/* On-screen Breadcrumb Navigation */}
      <nav aria-label={t('পাতার অবস্থান', 'Breadcrumb')} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm print:hidden">
        <Link href="/" className="inline-flex min-h-11 items-center font-medium text-emerald-900 underline underline-offset-4">{t('হোম', 'Home')}</Link>
        <span aria-hidden="true" className="text-slate-400">/</span>
        <span aria-current="page" className="font-semibold text-slate-800">{pick(title)}</span>
      </nav>

      {/* On-screen Page Header */}
      <header className="space-y-3 print:hidden">
        {check && (
          <p className="guide-eyebrow">
            {t(`পাঁচটি প্রধান বিষয়ের ${number(index + 1)} নম্বর ধাপ`, `Step ${index + 1} of five primary checks`)}
          </p>
        )}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 leading-tight">{pick(title)}</h1>
        <p className="text-sm sm:text-base leading-7 text-slate-600">
          {t('জমি কেনার আগে প্রয়োজনীয় কাগজপত্র বোঝা, তথ্য মেলানো ও সঠিক সরকারি অফিসে যাচাইয়ের পূর্ণাঙ্গ সহায়িকা। সরকারি রেকর্ড সরাসরি এখানে যাচাই করা হয় না।', 'A complete guide to understanding documents, comparing details, and seeking verification at relevant land offices. Government records are not directly verified here.')}
        </p>
      </header>

      {/* 5 Topic Guides View (Sections A through F) */}
      {check && detail && (
        <article id={`check-${check.id}`} aria-label={pick(check.title)} className="space-y-6">
          {/* Section A: What to check & why it matters */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4 shadow-sm" aria-labelledby="section-a-heading">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-xs font-bold text-emerald-900" aria-hidden="true">ক</span>
              <h2 id="section-a-heading" className="text-lg sm:text-xl font-bold text-emerald-950">
                {t('কী যাচাই করবেন ও কেন জরুরি', 'What to check and why it matters')}
              </h2>
            </div>
            <p className="text-base leading-relaxed text-slate-800 font-medium">
              {t(detail.whatToCheck.summaryBn, detail.whatToCheck.summaryEn)}
            </p>
            <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-sm leading-relaxed text-amber-950 space-y-1.5">
              <span className="font-bold block text-amber-900">{t('কেন এটি জমি কেনার আগে জরুরি:', 'Why it matters before buying land:')}</span>
              <p>{t(detail.whatToCheck.whyItMattersBn, detail.whatToCheck.whyItMattersEn)}</p>
            </div>
          </section>

          {/* Section B: Required documents and their purpose */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4 shadow-sm" aria-labelledby="section-b-heading">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-xs font-bold text-emerald-900" aria-hidden="true">খ</span>
              <h2 id="section-b-heading" className="text-lg sm:text-xl font-bold text-emerald-950">
                {t('কোন কাগজ বা তথ্য লাগতে পারে', 'Which documents or details may be needed')}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-amber-900 bg-amber-50 p-3 rounded-xl border border-amber-200">
              {t(detail.requiredDocuments.disclaimerBn, detail.requiredDocuments.disclaimerEn)}
            </p>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 pt-1">
              {detail.requiredDocuments.items.map((doc, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-2">
                  <h3 className="text-sm font-bold text-emerald-950 flex items-start gap-2">
                    <span className="text-emerald-700 font-bold" aria-hidden="true">{idx + 1}.</span>
                    <span>{t(doc.nameBn, doc.nameEn)}</span>
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 pl-5">
                    {t(doc.purposeBn, doc.purposeEn)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section C: How to compare (Actionable numbered steps) */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-5 shadow-sm" aria-labelledby="section-c-heading">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-xs font-bold text-emerald-900" aria-hidden="true">গ</span>
              <h2 id="section-c-heading" className="text-lg sm:text-xl font-bold text-emerald-950">
                {t('কীভাবে মিলিয়ে দেখবেন (ধাপে ধাপে)', 'How to compare (step-by-step actionable guide)')}
              </h2>
            </div>
            <p className="text-sm text-slate-700">
              {t(detail.howToCompare.introBn, detail.howToCompare.introEn)}
            </p>
            <ol className="space-y-4">
              {detail.howToCompare.steps.map(step => (
                <li key={step.stepNumber} className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#12633e] text-xs font-bold text-white">
                      {number(step.stepNumber)}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      {t(step.titleBn, step.titleEn)}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700 pl-10">
                    {t(step.instructionBn, step.instructionEn)}
                  </p>
                  <div className="pl-10 flex flex-wrap gap-2 pt-1">
                    <span className="text-xs font-semibold text-slate-500 self-center">{t('মূল তুলনীয় বিষয়:', 'Key details to match:')}</span>
                    {step.keyItemsBn.map((item, idx) => (
                      <span key={idx} className="inline-block rounded-md bg-slate-100 border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-800">
                        {t(item, step.keyItemsEn[idx])}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Section D: Where to verify (Offices and Portals) */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-5 shadow-sm" aria-labelledby="section-d-heading">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-xs font-bold text-emerald-900" aria-hidden="true">ঘ</span>
              <h2 id="section-d-heading" className="text-lg sm:text-xl font-bold text-emerald-950">
                {t('কোথায় যাচাই করবেন', 'Where to verify')}
              </h2>
            </div>
            <p className="text-sm text-slate-700">
              {t(detail.whereToVerify.introBn, detail.whereToVerify.introEn)}
            </p>
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900">{t('প্রয়োজনীয় সরকারি অফিস ও আইনগত পরামর্শ:', 'Relevant physical offices and legal counsel:')}</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {detail.whereToVerify.offices.map((off, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1.5">
                    <h4 className="text-sm font-bold text-emerald-950">{t(off.nameBn, off.nameEn)}</h4>
                    <p className="text-xs leading-relaxed text-slate-700">{t(off.roleBn, off.roleEn)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-slate-900">{t('যাচাইকৃত সরকারি অনলাইন পোর্টাল:', 'Verified official online portals:')}</h3>
              <div className="flex flex-col gap-3">
                {detail.whereToVerify.portals.map((portal, idx) => (
                  <a
                    key={idx}
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="guide-official-link"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-bold text-emerald-950">{t(portal.nameBn, portal.nameEn)} <span aria-hidden="true">↗</span></span>
                      <span className="text-xs font-mono text-slate-500">{new URL(portal.url).hostname}</span>
                    </div>
                    <p className="text-xs font-normal text-slate-600 mt-1">{t(portal.noteBn, portal.noteEn)}</p>
                    <span className="sr-only">{t('(নতুন ট্যাবে খুলবে)', '(opens in a new tab)')}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Section E: What to do if discrepancies found */}
          <section className="rounded-2xl border border-rose-200 bg-rose-50/40 p-5 sm:p-6 space-y-4 shadow-sm" aria-labelledby="section-e-heading">
            <div className="flex items-center gap-2 border-b border-rose-200 pb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-200 text-xs font-bold text-rose-950" aria-hidden="true">ঙ</span>
              <h2 id="section-e-heading" className="text-lg sm:text-xl font-bold text-rose-950">
                {t('অমিল পেলে কী করবেন (নিরাপদ পরবর্তী পদক্ষেপ)', 'What to do if discrepancies are found (safe next steps)')}
              </h2>
            </div>
            <p className="text-sm font-semibold text-rose-900">
              {t(detail.ifDiscrepancyFound.warningBn, detail.ifDiscrepancyFound.warningEn)}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {detail.ifDiscrepancyFound.actions.map((act, idx) => (
                <div key={idx} className="rounded-xl border border-rose-200 bg-white p-4 space-y-1.5">
                  <h3 className="text-sm font-bold text-rose-950 flex items-center gap-2">
                    <span className="text-rose-700">⚠</span>
                    <span>{t(act.titleBn, act.titleEn)}</span>
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                    {t(act.guidanceBn, act.guidanceEn)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section F: Track your preparation */}
          <section className="rounded-2xl border border-emerald-200 bg-emerald-50/30 p-5 sm:p-6 space-y-4 shadow-sm" aria-labelledby="section-f-heading">
            <div className="flex items-center gap-2 border-b border-emerald-200 pb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-200 text-xs font-bold text-emerald-950" aria-hidden="true">চ</span>
              <h2 id="section-f-heading" className="text-lg sm:text-xl font-bold text-emerald-950">
                {t('নিজের প্রস্তুতি চিহ্নিত করুন', 'Track your preparation for this check')}
              </h2>
            </div>
            <p className="text-sm text-slate-700">
              {t(detail.preparationPrompt.leadBn, detail.preparationPrompt.leadEn)}
            </p>
            <p className="text-xs font-semibold text-emerald-900 bg-emerald-100/70 p-3 rounded-xl border border-emerald-300">
              {t(detail.preparationPrompt.disclaimerBn, detail.preparationPrompt.disclaimerEn)}
            </p>
            {marker(check.id)}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-emerald-200/60">
              <Link
                href="/check/preparation"
                className="inline-flex min-h-11 items-center font-bold text-emerald-900 underline underline-offset-4 text-sm"
              >
                {t('সম্পূর্ণ ৫টি বিষয়ের প্রস্তুতির চেকলিস্ট দেখুন', 'View the complete 5-check preparation checklist')} <span aria-hidden="true">→</span>
              </Link>
              {storageNote}
            </div>
          </section>
        </article>
      )}

      {/* Supporting Page: Papers to gather first (/check/papers) */}
      {topic === 'papers' && (
        <>
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4 shadow-sm" aria-labelledby="papers-heading">
            <h2 id="papers-heading" className="text-lg sm:text-xl font-bold text-emerald-950">
              {t('জমি কেনার আগে যে মৌলিক তথ্যগুলো হাতে রাখবেন', 'Essential details to gather before buying land')}
            </h2>
            <p className="text-base leading-8 text-slate-700">
              {t('জেলা → উপজেলা/থানা → মৌজা → জেএল (JL) নম্বর → জরিপের ধরন (সিএস/এসএ/আরএস/বিএস) → খতিয়ান নম্বর ও দাগ নম্বর (সাবেক ও হাল)। এর সাথে বিক্রেতার দলিলের নম্বর, রেজিস্ট্রির সাল ও সংশ্লিষ্ট সাব-রেজিস্ট্রি অফিসের নাম লিখে রাখুন।', 'District → upazila/thana → mouza → JL number → survey type (CS/SA/RS/BS) → khatian and plot number (former and current). Also note the deed number, year, and sub-registry office name.')}
            </p>
            <p className="text-sm leading-7 text-slate-600 bg-slate-50 border border-slate-200 p-4 rounded-xl">
              {t('এই ওয়েবসাইটে কোনো আসল দলিল, জাতীয় পরিচয়পত্র বা পাসওয়ার্ড আপলোড করতে হয় না। সব কাগজ তাৎক্ষণিকভাবে হাতে না থাকলেও যে তথ্য আছে তা নিয়ে পাঁচটি ধাপ পড়া শুরু করুন।', 'You do not need to enter real names or upload identity documents or deeds here. Start with the information you have, even when some papers are missing.')}
            </p>
          </section>
          <SupportingDocuments />
        </>
      )}

      {/* Preparation Checklist Page (/check/preparation) */}
      {topic === 'preparation' && (
        <>
          {/* On-screen Interactive Preparation Checklist */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-6 shadow-sm print:hidden" aria-label={pick(title)}>
            {/* Disclaimer Banner */}
            <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-xs sm:text-sm leading-relaxed text-amber-950 space-y-1">
              <strong className="block text-amber-900 font-bold">{t('সতর্কবার্তা ও সীমাবদ্ধতা:', 'Notice and scope:')}</strong>
              <p>{t('এই চেকলিস্টটি জমি কেনার প্রস্তুতিতে আপনার ব্যক্তিগত অনুসরণের জন্য। এটি সরকারি রেকর্ড যাচাই করে না, মালিকানা প্রমাণ করে না বা জমি কেনা নিরাপদ হওয়ার কোনো আইনি সনদ প্রদান করে না।', 'This checklist is for your personal guidance before buying land. It does not verify government records, prove ownership, or certify that a property is safe to buy.')}</p>
            </div>

            {/* Preparation Counter & Progress Track */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h2 className="text-base font-bold text-emerald-950">
                  {t('ব্যক্তিগত প্রস্তুতির অগ্রগতি', 'Personal Preparation Progress')}
                </h2>
                <span role="status" className="font-bold text-emerald-900 text-sm tabular-nums">
                  {t(`৫টির মধ্যে ${number(markedCount)}টি চিহ্নিত`, `${markedCount} of 5 marked`)}
                </span>
              </div>
              <div className="guide-preparation-track" aria-hidden="true">
                <span style={{ transform: `scaleX(${markedCount / checks.length})` }} />
              </div>

              {/* Multi-status breakdown badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
                <div className="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900">
                  <span className="block font-semibold">{t('কাগজ আছে', 'Collected')}</span>
                  <span className="text-base font-bold tabular-nums">{number(collectedCount)}</span>
                  <span className="block text-[11px] text-emerald-700">{t('(মিলিয়ে দেখার বাকি)', '(ready to compare)')}</span>
                </div>
                <div className="p-2.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-900">
                  <span className="block font-semibold">{t('অমিল / সাহায্য', 'Discrepancies')}</span>
                  <span className="text-base font-bold tabular-nums">{number(mismatchCount)}</span>
                  <span className="block text-[11px] text-rose-700">{t('(অফিসে পরামর্শ নিন)', '(consult office)')}</span>
                </div>
                <div className="p-2.5 rounded-xl border border-amber-200 bg-amber-50 text-amber-900">
                  <span className="block font-semibold">{t('জোগাড় হয়নি', 'Missing')}</span>
                  <span className="text-base font-bold tabular-nums">{number(missingCount)}</span>
                  <span className="block text-[11px] text-amber-700">{t('(বিক্রেতাকে বলুন)', '(ask seller)')}</span>
                </div>
                <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
                  <span className="block font-semibold">{t('চিহ্নিত বাকি', 'Unmarked')}</span>
                  <span className="text-base font-bold tabular-nums">{number(unmarkedCount)}</span>
                  <span className="block text-[11px] text-slate-500">{t('(নির্বাচন করুন)', '(select status)')}</span>
                </div>
              </div>
            </div>

            {/* Explanatory Guide Box on the 3 states */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-xs sm:text-sm leading-relaxed text-slate-700 space-y-2">
              <strong className="block font-bold text-slate-900">{t('চেকলিস্টের ৩টি অবস্থার অর্থ:', 'What the 3 preparation statuses mean:')}</strong>
              <ul className="space-y-1.5 pl-4 list-disc">
                <li><strong className="text-amber-900">{t('এখনো কাগজ জোগাড় হয়নি:', 'Papers not yet collected:')}</strong> {t('বিক্রেতার কাছ থেকে বা অফিস থেকে কাগজটি এখনো হাতে পাননি।', 'You have not yet received the document from the seller or relevant office.')}</li>
                <li><strong className="text-emerald-900">{t('কাগজ আছে, মিলিয়ে দেখব:', 'Papers collected, ready to compare:')}</strong> {t('কাগজটি হাতে এসেছে, কিন্তু তথ্যগুলো এখনো সাব-রেজিস্ট্রি, ভূমি অফিস বা আইনজীবীর মাধ্যমে সম্পূর্ণ যাচাই করা হয়নি (কাগজ জোগাড় মানেই স্বত্ব নিশ্চিত হওয়া নয়)।', 'You have the paper, but its details have not been verified with land registries or a lawyer. Collecting papers does not mean title is certified.')}</li>
                <li><strong className="text-rose-900">{t('অমিল আছে / সাহায্য দরকার:', 'Difference found / need help:')}</strong> {t('দলিলে, রেকর্ডে বা পরিচয়ে কোনো গরমিল পাওয়া গেছে অথবা সরকারি অফিসের সহযোগিতা বা আইনি পরামর্শ প্রয়োজন।', 'A discrepancy was found in records, names, or boundaries, or official clarification is needed.')}</li>
              </ul>
            </div>

            {/* Contextual feedback messages based on selections */}
            {hasMismatch && (
              <div role="alert" className="rounded-xl border border-rose-300 bg-rose-50 p-4 text-sm font-semibold text-rose-900 space-y-1">
                <p>⚠ {t('আপনি এক বা একাধিক বিষয়ে অমিল বা সাহায্য প্রয়োজন চিহ্নিত করেছেন। কোনো অবস্থাতেই বায়না বা অগ্রিম টাকা দেবেন না। সংশ্লিষ্ট ভূমি অফিস, সাব-রেজিস্ট্রি অফিস বা অভিজ্ঞ আইনজীবীর মাধ্যমে বিষয়টি পরিষ্কার করুন।', 'You marked one or more differences. Do not make advance payments under any circumstances. Clarify the issues with the land office, sub-registry, or a lawyer.')}</p>
              </div>
            )}
            {collectedCount === 5 && !hasMismatch && (
              <div role="status" className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-950 space-y-1">
                <strong className="block font-bold">✓ {t('৫টি বিষয়ই সংগৃহীত বলে চিহ্নিত করেছেন', 'All 5 items marked as collected')}</strong>
                <p>{t('কাগজ জোগাড় করা মানেই যাচাই শেষ নয়। এবার প্রতিটি কাগজের নাম, সাবেক ও হাল দাগ, খতিয়ান এবং হস্তান্তরের ভায়া ধারাবাহিকতা সংশ্লিষ্ট সাব-রেজিস্ট্রি ও ভূমি অফিসে মিলিয়ে নিন।', 'Collecting documents does not finish verification. Independently compare names, plot numbers, khatians, and title chains at the sub-registry and land offices.')}</p>
              </div>
            )}
            {markedCount === 0 && (
              <p className="text-sm text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                {t('এখনও কোনো বিষয় চিহ্নিত করা হয়নি। নিচের ৫টি বিষয় পড়ে আপনার বর্তমান সংগ্রহের অবস্থা নির্বাচন করুন।', 'No items marked yet. Review the five checks below and select your current preparation status.')}
              </p>
            )}

            {/* Checklist Items */}
            <ol className="space-y-5 pt-2">
              {checks.map((item, idx) => (
                <li key={item.id} className="space-y-3 border-t border-slate-200 pt-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <Link
                      href={`/check/${item.id}`}
                      className="inline-flex min-h-11 items-center font-bold text-emerald-950 hover:text-emerald-800 underline underline-offset-4 text-base"
                    >
                      <span>{number(idx + 1)}. {pick(item.title)}</span>
                      <span aria-hidden="true" className="ml-1">↗</span>
                    </Link>
                    <span className="text-xs text-slate-500">{t('সম্পূর্ণ নির্দেশিকা পড়ুন', 'Read full guide')}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pick(item.body)}
                  </p>
                  {marker(item.id)}
                </li>
              ))}
            </ol>

            {storageNote}

            {/* Action Buttons: Print & Safe Reset */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => window.print()}
                className="min-h-11 rounded-xl bg-[#12633e] hover:bg-[#0e4f32] text-white px-5 py-2.5 font-bold text-sm shadow-sm transition-colors flex items-center gap-2"
              >
                <span aria-hidden="true">🖨</span>
                <span>{t('তালিকা প্রিন্ট করুন', 'Print checklist')}</span>
              </button>
              <button
                type="button"
                onClick={handleResetChecklist}
                className="min-h-11 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 px-4 py-2.5 font-semibold text-sm text-slate-700 transition-colors"
              >
                {t('প্রস্তুতির চিহ্ন রিসেট করুন', 'Reset preparation marks')}
              </button>
            </div>
          </section>

          {/* Dedicated Print View (Only visible when printed, hidden on screen) */}
          <div className="hidden print:block print-checklist-container text-black bg-white p-4 space-y-4">
            <div className="border-b-2 border-slate-800 pb-3">
              <h1 className="text-2xl font-bold text-slate-900 leading-tight">
                {t('জমি কেনার আগে প্রস্তুতির তালিকা', 'Land Buying Preparation Checklist')}
              </h1>
              <div className="flex items-center justify-between text-xs text-slate-600 mt-1">
                <span>{t('জমিবার্তা (Jomibarta) — জমি কেনার আগে ব্যক্তিগত যাচাইয়ের সহায়িকা', 'Jomibarta — Personal verification guide before buying land')}</span>
                <span>{t('তারিখ: ___________________', 'Date: ___________________')}</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-300 rounded text-xs leading-relaxed text-slate-800 space-y-1">
              <strong>{t('গুরুত্বপূর্ণ সতর্কতা:', 'Important Notice:')}</strong>
              <p>
                {t('এই তালিকাটি জমি কেনার পূর্বে ব্যক্তিগত প্রস্তুতির একটি সহায়ক স্মারক। এটি কোনো সরকারি রেকর্ড নয়, স্বত্বের আইনি সনদ নয় এবং জমি কেনা নিরাপদ হওয়ার নিশ্চয়তা নয়। প্রতিটি কাগজের মূল কপি ও তথ্যের সত্যতা সংশ্লিষ্ট সাব-রেজিস্ট্রি অফিস, সহকারী কমিশনার (ভূমি) অফিস ও অভিজ্ঞ আইনজীবীর মাধ্যমে চূড়ান্তভাবে নিশ্চিত হতে হবে।', 'This checklist is a personal preparation guide before buying land. It is not an official government record, legal certificate of title, or guarantee of safe purchase. Every document and detail must be definitively confirmed with the sub-registry office, AC (Land) office, and a qualified lawyer.')}
              </p>
            </div>

            <div className="grid grid-cols-4 gap-2 text-xs p-2 border border-slate-300 rounded bg-slate-50 text-center">
              <div>{t('কাগজ আছে:', 'Collected:')} <strong>{number(collectedCount)}</strong></div>
              <div>{t('অমিল / সাহায্য:', 'Discrepancies:')} <strong>{number(mismatchCount)}</strong></div>
              <div>{t('জোগাড় হয়নি:', 'Missing:')} <strong>{number(missingCount)}</strong></div>
              <div>{t('চিহ্নিত বাকি:', 'Unmarked:')} <strong>{number(unmarkedCount)}</strong></div>
            </div>

            <div className="space-y-4 pt-2">
              {checks.map((item, idx) => (
                <div key={item.id} className="border border-slate-300 rounded-lg p-3 text-xs space-y-2 break-inside-avoid">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                    <span className="font-bold text-sm text-slate-900">{number(idx + 1)}. {pick(item.title)}</span>
                    <span className="font-semibold px-2 py-0.5 rounded border border-slate-400 bg-slate-50 text-[11px]">
                      {getStatusPrintLabel(papers[item.id])}
                    </span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>{t('কী মিলিয়ে দেখবেন:', 'What to compare:')}</strong> {pick(item.body)}
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    <strong>{t('কোথায় যাচাই করবেন:', 'Where to verify:')}</strong> {pick(item.office)}
                  </p>
                  <div className="mt-2 pt-2 border-t border-dashed border-slate-300 space-y-1">
                    <span className="font-semibold text-slate-700 text-[11px] block">{t('দাপ্তরিক তল্লাশ ও ব্যক্তিগত নোট (হাতে লিখুন):', 'Office verification notes & handwritten remarks:')}</span>
                    <div className="h-10 border border-dashed border-slate-300 rounded bg-white"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-3 border-t-2 border-slate-700 text-[10px] text-slate-600 space-y-1">
              <p>
                <strong>{t('সরকারি তথ্যের উৎস ও হেল্পলাইন:', 'Official Resources & Helpline:')}</strong>{' '}
                {t('ভূমি মন্ত্রণালয় (land.gov.bd) · ই-নামজারি (mutation.land.gov.bd) · খতিয়ান ও ম্যাপ (dlrms.land.gov.bd) · ভূমিসেবা হটলাইন: ১৬১২২', 'Ministry of Land (land.gov.bd) · e-Mutation (mutation.land.gov.bd) · Records & Maps (dlrms.land.gov.bd) · Land Helpline: 16122')}
              </p>
              <p>
                {t('জমি কেনার আগে সাব-রেজিস্ট্রি অফিসে বালাম বই তল্লাশি এবং কোনো আর্থিক লেনদেনের পূর্বে অভিজ্ঞ ভূমি আইনজীবীর পরামর্শ নেওয়া আবশ্যক।', 'Searching volume books at the sub-registry office and consulting an experienced land lawyer before any financial transaction is mandatory.')}
              </p>
            </div>
          </div>
        </>
      )}

      {/* Supporting Page: Questions and Help (/check/help) */}
      {topic === 'help' && (
        <>
          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 space-y-4 shadow-sm" aria-labelledby="help-heading">
            <h2 id="help-heading" className="text-lg sm:text-xl font-bold text-amber-950">
              {t('বুঝতে সমস্যা হলে সাহায্য নিন', 'Get help when something is unclear')}
            </h2>
            <p className="text-sm sm:text-base leading-7 text-amber-950">
              {t('সরকারি সাইট না খুললে বা কাগজে অমিল থাকলে সংশ্লিষ্ট ভূমি অফিসে যোগাযোগ করুন। ভূমি সেবার সাধারণ তথ্যের জন্য ১৬১২২ নম্বরে ফোন করতে পারেন। সাধারণ কলের চার্জ প্রযোজ্য হতে পারে।', 'If a government website is unavailable or papers differ, contact the land office. You can call 16122 for land service information. Regular call charges may apply.')}
            </p>
            <a href="tel:16122" className="inline-flex min-h-11 items-center rounded-xl bg-amber-900 hover:bg-amber-800 px-5 py-2 font-bold text-white transition-colors">
              <span aria-hidden="true" className="mr-2">☎</span>
              <span>{t('১৬১২২-এ ফোন করুন', 'Call 16122')}</span>
            </a>
            <p className="text-sm leading-7 text-amber-950">
              {t('টাকা দেওয়ার আগে মূল কাগজ, জমির বাস্তব অবস্থান ও দখল মিলিয়ে নিন। প্রয়োজনে ভূমি বিষয়ে অভিজ্ঞ আইনজীবীর সহায়তা নিন।', 'Before paying, compare original papers, physical plot boundaries, and possession. Seek help from an experienced land lawyer when needed.')}
            </p>
          </section>
          <BuyerHelp />
          <SourcesAndPrivacy />
          <div className="border-t border-slate-200 pt-5 print:hidden">
            <p className="text-sm text-slate-600 mb-3">{t('নমুনা দিয়ে বুঝে দেখতে চান? বানানো রেকর্ডে ঝুঁকি পরীক্ষার উদাহরণ আছে।', 'Want to explore an example? Try risk checks using made-up sample records.')}</p>
            <button type="button" onClick={onTryDemo} className="min-h-11 rounded-xl border border-emerald-300 bg-white hover:bg-emerald-50 px-4 py-2 font-semibold text-emerald-900 transition-colors">
              {t('নমুনা যাচাই দেখুন', 'Try the sample checker')}
            </button>
          </div>
        </>
      )}

      {/* Guide Step Navigation Footer (Print hidden) */}
      <nav className="guide-step-navigation print:hidden" aria-label={t('পরের পাতায় যান', 'Continue to another page')}>
        {check && (
          <Link href={`/check/${nextId}`} className="guide-next-link">
            {nextId === 'preparation' ? t('প্রস্তুতির তালিকা দেখুন', 'See your preparation checklist') : t(`পরের ধাপ: ${guideTopicTitles[nextId][0]}`, `Next: ${guideTopicTitles[nextId][1]}`)} <span aria-hidden="true">→</span>
          </Link>
        )}
        {topic === 'papers' && <Link href="/check/owner" className="guide-next-link">{t('প্রথম ধাপ: মালিকের পরিচয়', 'Step 1: Owner identity')} <span aria-hidden="true">→</span></Link>}
        {topic === 'preparation' && <Link href="/check/help" className="guide-next-link">{t('সাহায্য ও তথ্যের উৎস', 'Help and information sources')} <span aria-hidden="true">→</span></Link>}
        {topic === 'help' && <Link href="/check/papers" className="guide-next-link">{t('কাগজের তালিকা দেখুন', 'View the paper checklist')} <span aria-hidden="true">→</span></Link>}
        <Link href="/#guide-topics" className="guide-back-link">{t('সব বিষয় দেখুন', 'View all topics')}</Link>
      </nav>
      {topic !== 'help' && (
        <Link href="/check/help" className="inline-flex min-h-11 items-center text-sm font-medium text-emerald-900 underline underline-offset-4 print:hidden">
          {t('বুঝতে সমস্যা হলে সাহায্য নিন', 'Get help when something is unclear')}
        </Link>
      )}
    </div>
  );
}
