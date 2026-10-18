import { CompletePlotData, DeedRecord, KhatianRecord, PlotStatusRecord } from '../db/schema';
import { VerificationStatus } from '../verification/types';

export interface DemoScenario {
  code: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
  nameBn: string;
  taglineBn: string;
  dagNo: string;
  khatianNo: string;
  deedNo: string;
  mouza: string;
  expectedStatus: VerificationStatus;
  primaryRiskBn: string;
  disclosureBn: string;
  disclosureEn: string;
  reasonBn: string;
  reasonEn: string;
  suggestedStepsBn: string[];
  suggestedStepsEn: string[];
  khatian: KhatianRecord;
  plotStatus: PlotStatusRecord;
  deeds: DeedRecord[];
}

export const SYNTHETIC_RECORD_DISCLOSURE_BN = 'ডেমো ডেটা — কাল্পনিক রেকর্ড';
export const SYNTHETIC_RECORD_DISCLOSURE_EN = 'Demo Data — Synthetic Record';

export const DEMO_SCENARIOS: DemoScenario[] = [
  {
    code: 'A',
    nameBn: 'কেস A: শতভাগ ত্রুটিমুক্ত রেকর্ড',
    taglineBn: 'মালিক ও বিক্রেতা এক, এলাকা ঠিক, কোনো ঋণ বা মামলা নেই',
    dagNo: '0101',
    khatianNo: '0101',
    deedNo: 'DEED-2024-0001',
    mouza: 'কাল্পনিকপুর',
    expectedStatus: 'GREEN',
    primaryRiskBn: 'কোনো ঝুঁকি নেই (সব পরীক্ষা উত্তীর্ণ)',
    disclosureBn: SYNTHETIC_RECORD_DISCLOSURE_BN,
    disclosureEn: SYNTHETIC_RECORD_DISCLOSURE_EN,
    reasonBn: 'খতিয়ানের মূল মালিক ও দলিলের বিক্রেতা একই ব্যক্তি, প্রস্তাবিত জমি (৫ শতক) অবশিষ্ট পরিমাণের (১২ শতক) মধ্যে রয়েছে, হালনাগাদ নামজারি সম্পন্ন, কোনো ব্যাংক বন্ধক বা মামলা নেই এবং দলিলের ক্রিপ্টোগ্রাফিক হ্যাশ সম্পূর্ণ অক্ষত।',
    reasonEn: 'The recorded khatian owner matches the deed seller, proposed area (5 decimals) is within remaining balance (12 decimals), mutation is complete, there are no mortgages or lawsuits, and the SHA-256 cryptographic digest is authentic.',
    suggestedStepsBn: [
      'সহকারী কমিশনার (ভূমি) অফিস হতে মূল খতিয়ান ও হালনাগাদ দাখিলা যাচাই করুন।',
      'সাব-রেজিস্ট্রি অফিসে মূল দলিলের বালাম ও তল্লাশি সম্পন্ন করুন।',
      'জমিতে সরেজমিনে গিয়ে বাস্তব দখল ও সীমানা নিশ্চিত করুন।',
    ],
    suggestedStepsEn: [
      'Verify the certified khatian and updated rent receipts at the AC Land office.',
      'Conduct a volume search of the deed at the sub-registry office.',
      'Visit the physical land plot to verify actual boundary demarcations and possession.',
    ],
    khatian: {
      id: 'a0000000-0000-0000-0000-000000000001',
      mouza: 'কাল্পনিকপুর',
      dag_no: '0101',
      khatian_no: '0101',
      owner_name: 'কাল্পনিক আব্দুর রহমান',
      total_area: 12.0,
      remaining_area: 12.0,
      land_type: 'normal',
      mutation_status: 'done',
      mutation_history: [{ date: '2023-12-01', status: 'done', reference: 'DEMO-MUT-A' }],
    },
    plotStatus: { dag_no: '0101', mortgaged: false, court_case: false, acquisition_status: 'not_reported' },
    deeds: [
      {
        id: 'd0000000-0000-0000-0000-000000000001',
        deed_no: 'DEED-2024-0001',
        dag_no: '0101',
        seller: 'কাল্পনিক আব্দুর রহমান',
        buyer: 'কাল্পনিক রফিকুল ইসলাম',
        area: 5.0,
        date: '2024-01-15',
        hash: 'f5e09e09af91efb48fc6b19971d1489d492314b41a93e5af7b26cd0bf9389f2e',
        prev_hash: 'GENESIS-0000-0000-0000-000000000001',
        status: 'active',
      },
    ],
  },
  {
    code: 'B',
    nameBn: 'কেস B: দ্বিতীয় পরিচ্ছন্ন কেস',
    taglineBn: 'ভিন্ন নাম ও ভিন্ন মৌজায় আরেকটি পরিষ্কার রেকর্ড',
    dagNo: '0202',
    khatianNo: '0202',
    deedNo: 'DEED-2024-0002',
    mouza: 'রূপনগর',
    expectedStatus: 'GREEN',
    primaryRiskBn: 'কোনো ঝুঁকি নেই (সব পরীক্ষা উত্তীর্ণ)',
    disclosureBn: SYNTHETIC_RECORD_DISCLOSURE_BN,
    disclosureEn: SYNTHETIC_RECORD_DISCLOSURE_EN,
    reasonBn: 'ভিন্ন কাল্পনিক মালিক ও মৌজার আরেকটি সম্পূর্ণ পরিচ্ছন্ন রেকর্ড। খতিয়ান ও দলিলের তথ্য সামঞ্জস্যপূর্ণ, নামজারি সম্পন্ন এবং কোনো আর্থিক বা আইনি দায় নেই।',
    reasonEn: 'Another fully clean synthetic record demonstrating multi-mouza consistency. All eight risk verification checks pass with zero discrepancies.',
    suggestedStepsBn: [
      'ভূমি অফিসে মালিকের নামজারি খতিয়ান ও খাজনা পরিষদের রশিদ মিলিয়ে নিন।',
      'বিক্রেতার জাতীয় পরিচয়পত্র ও ছবি বায়োমেট্রিক রেকর্ডের সাথে যাচাই করুন।',
      'সাব-রেজিস্ট্রি অফিসে নির্ভেজাল মালিকানা সনদ নিশ্চিত করুন।',
    ],
    suggestedStepsEn: [
      'Confirm updated mutation records and tax payment receipts at the land revenue office.',
      'Verify seller identity documents and national ID records.',
      'Conduct due diligence search at the sub-registry office to ensure clear title.',
    ],
    khatian: {
      id: 'a0000000-0000-0000-0000-000000000002',
      mouza: 'রূপনগর',
      dag_no: '0202',
      khatian_no: '0202',
      owner_name: 'কাল্পনিক ফাতেমা বেগম',
      total_area: 20.0,
      remaining_area: 15.0,
      land_type: 'normal',
      mutation_status: 'done',
      mutation_history: [{ date: '2023-12-01', status: 'done', reference: 'DEMO-MUT-B' }],
    },
    plotStatus: { dag_no: '0202', mortgaged: false, court_case: false, acquisition_status: 'not_reported' },
    deeds: [
      {
        id: 'd0000000-0000-0000-0000-000000000002',
        deed_no: 'DEED-2024-0002',
        dag_no: '0202',
        seller: 'কাল্পনিক ফাতেমা বেগম',
        buyer: 'কাল্পনিক সুলতানা কামাল',
        area: 10.0,
        date: '2024-02-20',
        hash: 'dba6725910fc83aeb45689ac6ee70d0babb11db01cd8e23d00dffefc3e7c93ad',
        prev_hash: 'GENESIS-0000-0000-0000-000000000002',
        status: 'active',
      },
    ],
  },
  {
    code: 'C',
    nameBn: 'কেস C: নামের সামান্য তারতম্য',
    taglineBn: 'খতিয়ানে "মোহাম্মদ তারেক হাসান", দলিলে "মো: তারেক হাসান"',
    dagNo: '0303',
    khatianNo: '0303',
    deedNo: 'DEED-2024-0003',
    mouza: 'মায়াদ্বীপ',
    expectedStatus: 'YELLOW',
    primaryRiskBn: 'মালিক ও বিক্রেতার নামে পদবী বা বানানের সামান্য পার্থক্য',
    disclosureBn: SYNTHETIC_RECORD_DISCLOSURE_BN,
    disclosureEn: SYNTHETIC_RECORD_DISCLOSURE_EN,
    reasonBn: 'রেকর্ডীয় মালিক "কাল্পনিক মোহাম্মদ তারেক হাসান" এবং দলিলের বিক্রেতা "কাল্পনিক মো: তারেক হাসান"। নামে পদবী বা বানানের সংক্ষেপণ/তারতম্য থাকায় সতর্কবার্তা প্রদান করা হয়েছে।',
    reasonEn: 'Minor prefix/spelling variation detected: khatian owner is "Mohammad Tareq Hasan" while deed seller is written as "Md. Tareq Hasan". Identity verification required.',
    suggestedStepsBn: [
      'বিক্রেতার মূল জাতীয় পরিচয়পত্র (NID), জন্ম সনদ ও খতিয়ান একসাথে মিলিয়ে দেখুন।',
      '১ম শ্রেণির ম্যাজিস্ট্রেট কর্তৃক এফিডেভিট/হলফনামা গ্রহণ করে নামের অভিন্নতা নিশ্চিত করুন।',
      'ইউনিয়ন ভূমি অফিস থেকে মালিকের নামজারি পর্চা পুনর্যাচাই করুন।',
    ],
    suggestedStepsEn: [
      'Cross-examine original national ID (NID), birth certificate, and khatian papers.',
      'Obtain a first-class magistrate affidavit certifying that both name forms belong to the same person.',
      'Verify mutation records at the local union land office.',
    ],
    khatian: {
      id: 'a0000000-0000-0000-0000-000000000003',
      mouza: 'মায়াদ্বীপ',
      dag_no: '0303',
      khatian_no: '0303',
      owner_name: 'কাল্পনিক মোহাম্মদ তারেক হাসান',
      total_area: 15.0,
      remaining_area: 15.0,
      land_type: 'normal',
      mutation_status: 'done',
      mutation_history: [{ date: '2023-12-01', status: 'done', reference: 'DEMO-MUT-C' }],
    },
    plotStatus: { dag_no: '0303', mortgaged: false, court_case: false, acquisition_status: 'not_reported' },
    deeds: [
      {
        id: 'd0000000-0000-0000-0000-000000000003',
        deed_no: 'DEED-2024-0003',
        dag_no: '0303',
        seller: 'কাল্পনিক মো: তারেক হাসান',
        buyer: 'কাল্পনিক তানভীর আহমেদ',
        area: 6.0,
        date: '2024-03-10',
        hash: '745896bbdf7db0fc9e40b8b2419822258fcb7071045b3f333d37e3b2258bc861',
        prev_hash: 'GENESIS-0000-0000-0000-000000000003',
        status: 'active',
      },
    ],
  },
  {
    code: 'D',
    nameBn: 'কেস D: ব্যাংকে বন্ধকযুক্ত জমি',
    taglineBn: 'জমিটি আর্থিক প্রতিষ্ঠানে বন্ধক রাখা (Mortgaged)',
    dagNo: '0404',
    khatianNo: '0404',
    deedNo: 'DEED-2024-0004',
    mouza: 'মেঘনাগাঁও',
    expectedStatus: 'YELLOW',
    primaryRiskBn: 'জমিটি ব্যাংকে বন্ধকযুক্ত রয়েছে (দায়মুক্তি সনদ আবশ্যক)',
    disclosureBn: SYNTHETIC_RECORD_DISCLOSURE_BN,
    disclosureEn: SYNTHETIC_RECORD_DISCLOSURE_EN,
    reasonBn: 'উক্ত দাগের জমিটি ব্যাংক বা আর্থিক প্রতিষ্ঠানে বন্ধক (Mortgaged) রয়েছে। বন্ধক থাকা অবস্থায় জমি ক্রয় করলে ব্যাংক কর্তৃক জমি নিলামের ঝুঁকি থাকে।',
    reasonEn: 'Plot is currently mortgaged to a financial institution. Purchasing without an official bank release/redemption deed exposes the buyer to foreclosure risk.',
    suggestedStepsBn: [
      'ঋণ প্রদানকারী ব্যাংক হতে অনাপত্তি সনদ (NOC) ও বন্ধক অবমুক্তি দলিল সংগ্রহ করুন।',
      'সাব-রেজিস্ট্রি অফিসে বন্ধক অবমুক্তির নিবন্ধন যাচাই করুন।',
      'দায়মুক্তি আনুষ্ঠানিকভাবে সম্পন্ন না হওয়া পর্যন্ত কোনো বায়না বা মূল্য পরিশোধ করবেন না।',
    ],
    suggestedStepsEn: [
      'Demand an official No Objection Certificate (NOC) and Mortgage Redemption Deed from the lending bank.',
      'Verify mortgage redemption registration in the sub-registry office records.',
      'Withhold all financial transactions until the encumbrance is legally cleared.',
    ],
    khatian: {
      id: 'a0000000-0000-0000-0000-000000000004',
      mouza: 'মেঘনাগাঁও',
      dag_no: '0404',
      khatian_no: '0404',
      owner_name: 'কাল্পনিক কামাল উদ্দিন আহমেদ',
      total_area: 18.0,
      remaining_area: 18.0,
      land_type: 'normal',
      mutation_status: 'done',
      mutation_history: [{ date: '2023-12-01', status: 'done', reference: 'DEMO-MUT-D' }],
    },
    plotStatus: { dag_no: '0404', mortgaged: true, court_case: false, acquisition_status: 'not_reported' },
    deeds: [
      {
        id: 'd0000000-0000-0000-0000-000000000004',
        deed_no: 'DEED-2024-0004',
        dag_no: '0404',
        seller: 'কাল্পনিক কামাল উদ্দিন আহমেদ',
        buyer: 'কাল্পনিক নাসির হোসেন',
        area: 8.0,
        date: '2024-04-12',
        hash: 'dfbfb4301bebfcec5b9360e8a0bc463bcc8c27b23097e7fe1f189792320e5b31',
        prev_hash: 'GENESIS-0000-0000-0000-000000000004',
        status: 'active',
      },
    ],
  },
  {
    code: 'E',
    nameBn: 'কেস E: দ্বৈত বিক্রির ঝুঁকি (Double Sale)',
    taglineBn: 'একই দাগের জমি আগেই অন্য ক্রেতার নিকট বিক্রিত',
    dagNo: '0505',
    khatianNo: '0505',
    deedNo: 'DEED-2024-0005B',
    mouza: 'পদ্মাপাড়',
    expectedStatus: 'RED',
    primaryRiskBn: 'একই দাগের বিপরীতে একাধিক সক্রিয় হস্তান্তর দলিল বিদ্যমান',
    disclosureBn: SYNTHETIC_RECORD_DISCLOSURE_BN,
    disclosureEn: SYNTHETIC_RECORD_DISCLOSURE_EN,
    reasonBn: 'একই দাগের সম্পূর্ণ ১০ শতক জমি ইতিপূর্বে DEED-2024-0005A দলিলের মাধ্যমে বিক্রি করা হয়েছে, কিন্তু পুনরায় DEED-2024-0005B দ্বারা বিক্রির চুক্তি করা হয়েছে। এটি দ্বৈত বিক্রির প্রতারণা।',
    reasonEn: 'Double sale detected: The full 10-decimal plot was already transferred under active deed DEED-2024-0005A, yet a subsequent sale deed DEED-2024-0005B was attempted.',
    suggestedStepsBn: [
      'কোনো অবস্থাতেই টাকা দেবেন না — এটি দ্বৈত বিক্রির স্পষ্ট ঝুঁকি।',
      'সাব-রেজিস্ট্রি অফিসের বালাম ও সূচি বই (Index Book) পরীক্ষা করে পূর্বের হস্তান্তরের তথ্য নিশ্চিত করুন।',
      'প্রতারণা রোধে সংশ্লিষ্ট রেজিস্ট্রি অফিস ও বিজ্ঞ আইনজীবীর শরণাপন্ন হোন।',
    ],
    suggestedStepsEn: [
      'Do not make any payment — severe duplicate sale risk detected.',
      'Inspect the Sub-Registry Index Book and Balam registers to verify earlier deed executions.',
      'Consult legal counsel and notify registry authorities regarding the suspected fraud.',
    ],
    khatian: {
      id: 'a0000000-0000-0000-0000-000000000005',
      mouza: 'পদ্মাপাড়',
      dag_no: '0505',
      khatian_no: '0505',
      owner_name: 'কাল্পনিক সেলিম চৌধুরী',
      total_area: 10.0,
      remaining_area: 10.0,
      land_type: 'normal',
      mutation_status: 'done',
      mutation_history: [{ date: '2023-12-01', status: 'done', reference: 'DEMO-MUT-E' }],
    },
    plotStatus: { dag_no: '0505', mortgaged: false, court_case: false, acquisition_status: 'not_reported' },
    deeds: [
      {
        id: 'd0000000-0000-0000-0000-00000000005a',
        deed_no: 'DEED-2024-0005A',
        dag_no: '0505',
        seller: 'কাল্পনিক সেলিম চৌধুরী',
        buyer: 'কাল্পনিক আরিফুল হক',
        area: 10.0,
        date: '2024-05-01',
        hash: '5bf622d8b0e33a2ca4cd52ced5cab5a8b60fba84d94171f8b99b3aa1a7744cc5',
        prev_hash: 'GENESIS-0000-0000-0000-000000000005',
        status: 'active',
      },
      {
        id: 'd0000000-0000-0000-0000-00000000005b',
        deed_no: 'DEED-2024-0005B',
        dag_no: '0505',
        seller: 'কাল্পনিক সেলিম চৌধুরী',
        buyer: 'কাল্পনিক মাহবুবুর রহমান',
        area: 10.0,
        date: '2024-05-15',
        hash: '968c5dd51ed82b6d358fc457ebac9eba29d2af14f636496fb8a1f05021621443',
        prev_hash: 'GENESIS-0000-0000-0000-000000000005',
        status: 'active',
      },
    ],
  },
  {
    code: 'F',
    nameBn: 'কেস F: অননুমোদিত বিক্রেতা (মালিক অমিল)',
    taglineBn: 'খতিয়ানের মূল মালিকের সাথে দলিলের বিক্রেতার নামের মিল নেই',
    dagNo: '0606',
    khatianNo: '0606',
    deedNo: 'DEED-2024-0006',
    mouza: 'সোনারগাঁ-কল্পিত',
    expectedStatus: 'RED',
    primaryRiskBn: 'অননুমোদিত ব্যক্তি কর্তৃক জমি বিক্রির গুরুতর ঝুঁকি',
    disclosureBn: SYNTHETIC_RECORD_DISCLOSURE_BN,
    disclosureEn: SYNTHETIC_RECORD_DISCLOSURE_EN,
    reasonBn: 'খতিয়ানের রেকর্ডীয় মালিক "কাল্পনিক আবুল মনসুর ভূঁইয়া", কিন্তু বিক্রয়ের দলিল উপস্থাপন করেছেন সম্পূর্ণ ভিন্ন ব্যক্তি "কাল্পনিক জাকির হোসেন মজুমদার"। কোনো বৈধ আমমোক্তারনামা বা হস্তান্তরের ভিত্তি নেই।',
    reasonEn: 'Critical mismatch: Registered khatian owner is "Abul Mansur Bhuiyan" while deed seller is an unrelated third party "Zakir Hossain Mazumder" with no registered power of attorney.',
    suggestedStepsBn: [
      'লেনদেন তাৎক্ষণিকভাবে স্থগিত করুন।',
      'বিক্রেতার কোনো বৈধ আমমোক্তারনামা (Power of Attorney) বা ওয়ারিশান সনদ সাব-রেজিস্ট্রিতে নিবন্ধিত আছে কিনা পরীক্ষা করুন।',
      'মূল রেকর্ডীয় মালিকের সাথে সরাসরি যোগাযোগ করে বিক্রির সত্যতা নিশ্চিত করুন।',
    ],
    suggestedStepsEn: [
      'Halt all negotiations immediately.',
      'Verify whether the purported seller holds a legally registered Power of Attorney or succession certificate.',
      'Contact the registered khatian owner directly to verify whether sale authorization exists.',
    ],
    khatian: {
      id: 'a0000000-0000-0000-0000-000000000006',
      mouza: 'সোনারগাঁ-কল্পিত',
      dag_no: '0606',
      khatian_no: '0606',
      owner_name: 'কাল্পনিক আবুল মনসুর ভূঁইয়া',
      total_area: 14.0,
      remaining_area: 14.0,
      land_type: 'normal',
      mutation_status: 'done',
      mutation_history: [{ date: '2023-12-01', status: 'done', reference: 'DEMO-MUT-F' }],
    },
    plotStatus: { dag_no: '0606', mortgaged: false, court_case: false, acquisition_status: 'not_reported' },
    deeds: [
      {
        id: 'd0000000-0000-0000-0000-000000000006',
        deed_no: 'DEED-2024-0006',
        dag_no: '0606',
        seller: 'কাল্পনিক জাকির হোসেন মজুমদার',
        buyer: 'কাল্পনিক শাহেদ আলী',
        area: 6.0,
        date: '2024-06-18',
        hash: '432b6b037c726dc26272948c3f30337a4f71cf54be9a615acc599de471047099',
        prev_hash: 'GENESIS-0000-0000-0000-000000000006',
        status: 'active',
      },
    ],
  },
  {
    code: 'G',
    nameBn: 'কেস G: অতিরিক্ত জমি বিক্রির চেষ্টা',
    taglineBn: 'খতিয়ানে অবশিষ্ট ৩ শতক, কিন্তু বিক্রির চুক্তি ৮ শতকের',
    dagNo: '0707',
    khatianNo: '0707',
    deedNo: 'DEED-2024-0007',
    mouza: 'সবুজপল্লী',
    expectedStatus: 'RED',
    primaryRiskBn: 'অবশিষ্ট পরিমাণের চেয়ে বেশি জমি বিক্রির চেষ্টা',
    disclosureBn: SYNTHETIC_RECORD_DISCLOSURE_BN,
    disclosureEn: SYNTHETIC_RECORD_DISCLOSURE_EN,
    reasonBn: 'খতিয়ানে বিক্রেতার অবশিষ্ট জমি রয়েছে মাত্র ৩.০০০০ শতক, কিন্তু দলিলে বিক্রির প্রস্তাব করা হয়েছে ৮.০০০০ শতক। ৫.০০০০ শতক অতিরিক্ত জমি বিক্রির অপচেষ্টা শনাক্ত হয়েছে।',
    reasonEn: 'Excessive area attempt: The recorded khatian balance has only 3.0000 decimals available, but the deed proposes to transfer 8.0000 decimals (5.0000 decimals in excess).',
    suggestedStepsBn: [
      'পূর্বের সকল বিক্রয় দলিল ও বায়া দলিল সংগ্রহ করে বিক্রেতার প্রকৃত অবশিষ্ট মালিকানা গণনা করুন।',
      'সরকারি সার্টিফাইড সার্ভেয়ার দিয়ে সরেজমিনে পরিমাপ ও দখল মেপে নিন।',
      'খতিয়ানের অবশিষ্ট সীমার অতিরিক্ত জমির দলিল সম্পাদন থেকে বিরত থাকুন।',
    ],
    suggestedStepsEn: [
      'Audit all prior deeds and parent chain-of-title records to compute true remaining area.',
      'Commission an accredited land surveyor to physically measure the plot boundary and actual possession.',
      'Refuse deed execution for any decimal amount exceeding verified remaining balance.',
    ],
    khatian: {
      id: 'a0000000-0000-0000-0000-000000000007',
      mouza: 'সবুজপল্লী',
      dag_no: '0707',
      khatian_no: '0707',
      owner_name: 'কাল্পনিক ফারুক হোসেন',
      total_area: 10.0,
      remaining_area: 3.0,
      land_type: 'normal',
      mutation_status: 'done',
      mutation_history: [{ date: '2023-12-01', status: 'done', reference: 'DEMO-MUT-G' }],
    },
    plotStatus: { dag_no: '0707', mortgaged: false, court_case: false, acquisition_status: 'not_reported' },
    deeds: [
      {
        id: 'd0000000-0000-0000-0000-000000000007',
        deed_no: 'DEED-2024-0007',
        dag_no: '0707',
        seller: 'কাল্পনিক ফারুক হোসেন',
        buyer: 'কাল্পনিক আনোয়ার সাদাত',
        area: 8.0,
        date: '2024-07-22',
        hash: '9f5a5d192a9641e15f5512487a56d52c9c35767a1928d8ec2743f5ef791dd61a',
        prev_hash: 'GENESIS-0000-0000-0000-000000000007',
        status: 'active',
      },
    ],
  },
  {
    code: 'H',
    nameBn: 'কেস H: দলিল টেম্পারিং বা ডিজিটাল হ্যাশ অমিল',
    taglineBn: 'দলিলের ক্রিপ্টোগ্রাফিক SHA-256 হ্যাশ মেলেনি (বিকৃতির ঝুঁকি)',
    dagNo: '0808',
    khatianNo: '0808',
    deedNo: 'DEED-2024-0008',
    mouza: 'আনন্দপুর',
    expectedStatus: 'RED',
    primaryRiskBn: 'দলিল টেম্পারিং বা তথ্যের অননুমোদিত বিকৃতি শনাক্ত',
    disclosureBn: SYNTHETIC_RECORD_DISCLOSURE_BN,
    disclosureEn: SYNTHETIC_RECORD_DISCLOSURE_EN,
    reasonBn: 'দলিলের ডিজিটাল ফিঙ্গারপ্রিন্ট (SHA-256 ক্রিপ্টোগ্রাফিক হ্যাশ) মূল তথ্যের সাথে মেলেনি। দলিলের মূল পাঠ্য বা ক্ষেত্রসমূহে অননুমোদিত বিকৃতি বা টেম্পারিং শনাক্ত হয়েছে।',
    reasonEn: 'Cryptographic deed integrity failure: The stored SHA-256 hash does not match the canonical hash of the deed fields, proving unauthorized alteration or tampering.',
    suggestedStepsBn: [
      'টাকা দেবেন না — দলিলের ডিজিটাল রেকর্ড বিকৃত বা পরিবর্তন করা হয়েছে।',
      'সাব-রেজিস্ট্রি অফিস হতে দলিলের মূল বালাম বইয়ের প্রত্যায়িত অনুলিপি (Certified Copy) উত্তোলন করুন।',
      'মূল দলিলের হস্তাক্ষর, সই, রাজস্ব স্ট্যাম্প ও রেজিস্ট্রেশন সিল সংশ্লিষ্ট দপ্তরে যাচাই করুন।',
    ],
    suggestedStepsEn: [
      'Do not pay — digital record discrepancy indicates tampering or forged content.',
      'Procure an official Certified Copy directly from the Sub-Registry Office Balam book.',
      'Authenticate revenue stamps, registry seals, and signatures against the official registry volume.',
    ],
    khatian: {
      id: 'a0000000-0000-0000-0000-000000000008',
      mouza: 'আনন্দপুর',
      dag_no: '0808',
      khatian_no: '0808',
      owner_name: 'কাল্পনিক হারুন অর রশিদ',
      total_area: 16.0,
      remaining_area: 16.0,
      land_type: 'normal',
      mutation_status: 'done',
      mutation_history: [{ date: '2023-12-01', status: 'done', reference: 'DEMO-MUT-H' }],
    },
    plotStatus: { dag_no: '0808', mortgaged: false, court_case: false, acquisition_status: 'not_reported' },
    deeds: [
      {
        id: 'd0000000-0000-0000-0000-000000000008',
        deed_no: 'DEED-2024-0008',
        dag_no: '0808',
        seller: 'কাল্পনিক হারুন অর রশিদ',
        buyer: 'কাল্পনিক বেলাল চৌধুরী',
        area: 5.0,
        date: '2024-08-30',
        hash: 'TAMPERED-HASH-00000000000000000000000000000000000000000000000000000888',
        prev_hash: 'GENESIS-0000-0000-0000-000000000008',
        status: 'active',
      },
    ],
  },
];

/**
 * Retrieves a demo plot record by Dag number (preserving leading zeros).
 */
export function getDemoPlotData(dagNo: string): CompletePlotData | null {
  const cleanDag = dagNo.trim();
  const match = DEMO_SCENARIOS.find((s) => s.dagNo === cleanDag);
  if (!match) return null;

  return {
    dagNo: match.dagNo,
    khatian: match.khatian,
    plotStatus: match.plotStatus,
    deeds: match.deeds,
  };
}

/**
 * Retrieves a demo plot record by Deed registration number.
 */
export function getDemoPlotDataByDeed(deedNo: string): CompletePlotData | null {
  const cleanDeed = deedNo.trim().toUpperCase();
  const match = DEMO_SCENARIOS.find((s) =>
    s.deeds.some((d) => d.deed_no.toUpperCase() === cleanDeed)
  );
  if (!match) return null;

  return {
    dagNo: match.dagNo,
    khatian: match.khatian,
    plotStatus: match.plotStatus,
    deeds: match.deeds,
  };
}

/**
 * Retrieves a demo scenario by code (A-H), dag number, or deed number.
 */
export function getDemoScenario(identifier: string): DemoScenario | null {
  const clean = identifier.trim().toUpperCase();
  return (
    DEMO_SCENARIOS.find(
      (s) =>
        s.code === clean ||
        s.dagNo === clean ||
        s.khatianNo === clean ||
        s.deedNo.toUpperCase() === clean ||
        s.deeds.some((d) => d.deed_no.toUpperCase() === clean)
    ) || null
  );
}
