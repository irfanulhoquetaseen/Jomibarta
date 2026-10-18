import type { CheckId } from './guideTopics';

export interface TopicGuideDetail {
  id: CheckId;
  whatToCheck: {
    summaryBn: string;
    summaryEn: string;
    whyItMattersBn: string;
    whyItMattersEn: string;
  };
  requiredDocuments: {
    disclaimerBn: string;
    disclaimerEn: string;
    items: {
      nameBn: string;
      nameEn: string;
      purposeBn: string;
      purposeEn: string;
    }[];
  };
  howToCompare: {
    introBn: string;
    introEn: string;
    steps: {
      stepNumber: number;
      titleBn: string;
      titleEn: string;
      instructionBn: string;
      instructionEn: string;
      keyItemsBn: string[];
      keyItemsEn: string[];
    }[];
  };
  whereToVerify: {
    introBn: string;
    introEn: string;
    offices: {
      nameBn: string;
      nameEn: string;
      roleBn: string;
      roleEn: string;
    }[];
    portals: {
      nameBn: string;
      nameEn: string;
      url: string;
      noteBn: string;
      noteEn: string;
    }[];
  };
  ifDiscrepancyFound: {
    warningBn: string;
    warningEn: string;
    actions: {
      titleBn: string;
      titleEn: string;
      guidanceBn: string;
      guidanceEn: string;
    }[];
  };
  preparationPrompt: {
    leadBn: string;
    leadEn: string;
    disclaimerBn: string;
    disclaimerEn: string;
  };
}

export const topicGuideDetails: Record<CheckId, TopicGuideDetail> = {
  owner: {
    id: 'owner',
    whatToCheck: {
      summaryBn: 'বিক্রেতা কি এই জমির বৈধ, নিরঙ্কুশ ও একক বা নির্ধারিত অংশের প্রকৃত মালিক? নাকি ওয়ারিশ বা অন্য অংশীদারের অধিকার অমীমাংসিত রয়েছে? জমির দাগ, মৌজা, খতিয়ান ও দলিলের পরিচিতির সাথে বিক্রেতার জাতীয় পরিচয়পত্র এবং সরেজমিন দখলের হুবহু মিল আছে কি না তা যাচাই করুন।',
      summaryEn: 'Is the seller the lawful, absolute owner of the specific land or share being sold, or are there unpartitioned co-heirs or prior rights? Verify that the seller’s national ID, physical possession, and boundary match the deed, khatian, plot, and mouza exactly.',
      whyItMattersBn: 'জমি কেনায় সবচেয়ে বড় আর্থিক প্রতারণা ঘটে যখন বিক্রেতার সম্পূর্ণ জমি বিক্রির আইনগত অধিকার থাকে না। ভুল দাগের জমি কেনা, ভায়া দলিলের যোগসূত্রহীনতা বা অন্য শরিকের জমি বিক্রি করার ঘটনা ঘটলে পরবর্তীতে দেওয়ানি মামলায় দলিল বাতিল ও সমুদয় অর্থ হারানোর আশঙ্কা থাকে।',
      whyItMattersEn: 'The biggest risk in land purchases is buying from someone lacking legal transfer authority. Buying wrong plot numbers, broken title chains, or selling another co-sharer’s portion leads to civil court cancellation of deeds and complete loss of investment.',
    },
    requiredDocuments: {
      disclaimerBn: 'সতর্কতা: কোনো একক দলিল বা খতিয়ান একাই চূড়ান্ত ও নিরঙ্কুশ স্বত্বের প্রমাণ নয়। মালিকানা নিশ্চিত করতে সবগুলো নথিপত্র ক্রমানুসারে মিলিয়ে দেখতে হবে।',
      disclaimerEn: 'Notice: No single deed or khatian alone conclusively establishes title. All documents must be compared together in chronological sequence.',
      items: [
        {
          nameBn: 'মূল মালিকানা দলিল (সাব-কবলা, হেবা বা বণ্টননামা)',
          nameEn: 'Original Title Deed (Sale deed, Heba, or Partition deed)',
          purposeBn: 'বিক্রেতা কীভাবে জমিটির মালিক হয়েছেন (ক্রয়সূত্রে, দানসূত্রে নাকি আপস-বণ্টনসূত্রে) এবং তার বিক্রির ক্ষমতা আছে কি না তা যাচাই করা।',
          purposeEn: 'Examines how the seller acquired ownership (purchase, gift, or partition) and whether the seller holds legal authority to transfer.',
        },
        {
          nameBn: 'ভায়া দলিলসমূহ (Chain of Title Deeds)',
          nameEn: 'Chain of Title Deeds (Baya Deeds)',
          purposeBn: 'সিএস বা এসএ রেকর্ড থেকে বর্তমান বিক্রেতা পর্যন্ত অতীতের সব হাতবদলের ধারাবাহিক বৈধতা ও বালাম এন্ট্রি প্রমাণ করা।',
          purposeEn: 'Proves the unbroken sequence of ownership transfers and volume registrations from older survey records to the current seller.',
        },
        {
          nameBn: 'রেকর্ডীয় খতিয়ান (সিএস, এসএ, আরএস, বিএস/সিটি জরিপ)',
          nameEn: 'Survey Khatians (CS, SA, RS, BS / City Survey)',
          purposeBn: 'বিভিন্ন সরকারি জরিপে জমির মূল মালিক, জোত নম্বর, সাবেক ও হাল দাগ নম্বর এবং পরিমাণের ঐতিহাসিক পরিবর্তন মিলানো।',
          purposeEn: 'Tracks plot evolution, previous and current dag numbers, recorded tenants, and area across historic and current government surveys.',
        },
        {
          nameBn: 'বিক্রেতার জাতীয় পরিচয়পত্র (NID) ও ছবি',
          nameEn: 'Seller’s National ID (NID) and Photographs',
          purposeBn: 'দলিলে উল্লিখিত নাম, পিতা/স্বামীর নাম ও ঠিকানার সাথে বিক্রেতার প্রকৃত পরিচয় মিলিয়ে ভূয়া ব্যক্তি বা জালিয়াতি রোধ করা।',
          purposeEn: 'Matches the name, parent/spouse names, and address against the real individual to prevent personation and deed fraud.',
        },
        {
          nameBn: 'ওয়ারিশান সনদ ও বণ্টননামা (প্রযোজ্য ক্ষেত্রে)',
          nameEn: 'Succession Certificate & Registered Partition Deed (if inherited)',
          purposeBn: 'উত্তরাধিকারসূত্রে মালিক হলে সব বৈধ ওয়ারিশদের তালিকা এবং কে কোন দাগে কতটুকু জমি পেয়েছেন তা সুস্পষ্টভাবে জানা।',
          purposeEn: 'Clarifies all legal heirs and specifies exact shares and plots when ownership is acquired through inheritance.',
        },
        {
          nameBn: 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা',
          nameEn: 'Current Land Development Tax (Khajna) Receipt',
          purposeBn: 'জমিটির সরকারি রাজস্ব পরিশোধ আছে কি না এবং নির্দিষ্ট হোল্ডিংয়ে বিক্রেতার নাম চালু আছে কি না তা দেখা।',
          purposeEn: 'Verifies up-to-date land revenue payment and active holding record under the seller’s name.',
        },
      ],
    },
    howToCompare: {
      introBn: 'বিক্রেতার দেওয়া তথ্যের সাথে মূল নথিপত্র ধাপে ধাপে এভাবে মিলিয়ে দেখুন:',
      introEn: 'Follow these numbered, actionable steps to compare seller details against official records:',
      steps: [
        {
          stepNumber: 1,
          titleBn: 'বিক্রেতার নাম ও পরিচিতির পুঙ্খানুপুঙ্খ মিল',
          titleEn: 'Verify seller name and identity specifics',
          instructionBn: 'দলিল, খতিয়ান এবং বিক্রেতার জাতীয় পরিচয়পত্রের নাম, পিতা/স্বামীর নাম ও স্থায়ী ঠিকানা অক্ষরে অক্ষরে মিলিয়ে দেখুন। কোনো প্রকার বানানের অমিল থাকলে স্থানীয় চেয়ারম্যান সনদ বা আদালতের এফিডেভিট তলব করুন।',
          instructionEn: 'Compare letter-by-letter the seller’s name, parent/spouse names, and permanent address across deeds, khatians, and national ID cards.',
          keyItemsBn: ['বিক্রেতার নাম ও পিতা/স্বামীর নাম', 'জাতীয় পরিচয়পত্র নম্বর', 'স্থায়ী ঠিকানা'],
          keyItemsEn: ['Seller name & parent/spouse name', 'National ID number', 'Permanent address'],
        },
        {
          stepNumber: 2,
          titleBn: 'তফসিল মিলানো: জেলা, মৌজা, জেএল ও দাগ নম্বর',
          titleEn: 'Match land schedule: district, mouza, JL, and plot numbers',
          instructionBn: 'দলিলের তপশিলে উল্লেখিত জেলা, উপজেলা/থানা, মৌজা ও জেএল (JL) নম্বরের সাথে খতিয়ান ও মৌজা ম্যাপের তথ্য মিলান। সাবেক দাগ ও হাল দাগ ঠিকমতো চিহ্নিত আছে কি না নিশ্চিত হোন।',
          instructionEn: 'Verify that district, upazila/thana, mouza, and JL numbers in the deed match survey khatians and mouza maps, tracking former and current plot numbers.',
          keyItemsBn: ['মৌজা ও জেএল নম্বর', 'সাবেক দাগ ও হাল দাগ নম্বর', 'খতিয়ান নম্বর'],
          keyItemsEn: ['Mouza and JL number', 'Former plot & current plot number', 'Khatian number'],
        },
        {
          stepNumber: 3,
          titleBn: 'জমির পরিমাণ ও বিক্রেতার মোট প্রাপ্য হিস্যা',
          titleEn: 'Verify total area, boundaries, and seller’s fractional share',
          instructionBn: 'দলিলে যত শতাংশ জমি বিক্রি করার প্রস্তাব দেওয়া হয়েছে, খতিয়ানে বিক্রেতার অংশের মোট জমির পরিমাণ তার সমান বা বেশি কি না দেখুন। যৌথ খতিয়ান হলে বিক্রেতা নিজের অংশের অতিরিক্ত বিক্রি করছেন কি না যাচাই করুন।',
          instructionEn: 'Confirm that the proposed area in decimals matches the seller’s exact undivided share in the khatian and does not exceed their entitled holding.',
          keyItemsBn: ['জমির মোট পরিমাণ (শতাংশ/একর)', 'খতিয়ানে বিক্রেতার হিস্যা (অংশ)', 'চতুর্দিকের সীমানা (চৌহদ্দি)'],
          keyItemsEn: ['Total land area (decimals/acres)', 'Seller share fraction in khatian', 'Four-way boundary limits'],
        },
        {
          stepNumber: 4,
          titleBn: 'ভায়া দলিলের নিরবচ্ছিন্ন ধারাবাহিকতা (Chain of Title)',
          titleEn: 'Trace unbroken title chain across historical transfers',
          instructionBn: 'সর্বশেষ সরকারি জরিপ রেকর্ড (সিএস/এসএ/আরএস/বিএস) থেকে শুরু করে পরবর্তী প্রতিটি হস্তান্তরের দলিল ক্রমানুসারে সাজিয়ে দেখুন। কোনো দলিলের লিংক বা দলিল নম্বর বাদ পড়লে সেই জমি কেনা ঝুঁকিপূর্ণ।',
          instructionEn: 'Trace historical ownership transfers sequentially from base survey records down to the current seller without missing title links or intermediate deeds.',
          keyItemsBn: ['পূর্ববর্তী দলিলের নম্বর ও সাল', 'সাব-রেজিস্ট্রি অফিসের নাম', 'হস্তান্তরকারী ও গ্রহীতার পরম্পরা'],
          keyItemsEn: ['Prior deed numbers and years', 'Sub-registry office name', 'Transferor to transferee succession'],
        },
        {
          stepNumber: 5,
          titleBn: 'সরেজমিন অবস্থান, চতুর্সীমানা ও প্রকৃত দখল পরীক্ষা',
          titleEn: 'Inspect physical site, boundary lines, and actual possession',
          instructionBn: 'শুধু কাগজ দেখে সিদ্ধান্ত নেবেন না। জমিতে সরেজমিনে গিয়ে স্থানীয় প্রতিবেশী ও গণ্যমান্য ব্যক্তিদের উপস্থিতিতে সীমানা মেপে দেখুন। বাস্তবে বিক্রেতার নিরবচ্ছিন্ন দখল আছে কি না তা নিশ্চিত হোন।',
          instructionEn: 'Visit the plot in person with neighbors and an experienced local surveyor. Confirm genuine physical possession and boundaries on ground.',
          keyItemsBn: ['বাস্তব দখলদার কে', 'সীমানায় কোনো বিরোধ বা বাধা আছে কি না', 'যাতায়াতের রাস্তা/সংযোগ'],
          keyItemsEn: ['Actual occupant on site', 'Any boundary conflict or fence dispute', 'Physical access path/road'],
        },
      ],
    },
    whereToVerify: {
      introBn: 'মালিকানা ও দলিলের সত্যতা নিশ্চিত করতে নিম্নলিখিত অফিস ও সরকারি পোর্টালে যোগাযোগ করুন:',
      introEn: 'Contact these official offices and government services to confirm title authenticity:',
      offices: [
        {
          nameBn: 'সংশ্লিষ্ট সাব-রেজিস্ট্রি অফিস',
          nameEn: 'Concerned Sub-Registry Office',
          roleBn: 'বালাম বই তল্লাশি দিয়ে মূল দলিলের নকল (Certified Copy), রেজিস্ট্রি এন্ট্রি এবং জমিটি অন্য কারো কাছে ইতিপূর্বে বিক্রি বা বন্ধক আছে কি না তা যাচাই করুন।',
          roleEn: 'Inspect volume registers for certified deed copies, official registration entries, and prior encumbrances or mortgages.',
        },
        {
          nameBn: 'সহকারী কমিশনার (ভূমি) / উপজেলা ভূমি অফিস',
          nameEn: 'Assistant Commissioner (Land) / Upazila Land Office',
          roleBn: 'রেকর্ড রুমে সংরক্ষিত সরকারি জরিপ খতিয়ান এবং নামজারি রেকর্ড তলব করে স্বত্বের বৈধতা পরীক্ষা করুন।',
          roleEn: 'Review official survey khatians and mutation records in the revenue record room.',
        },
        {
          nameBn: 'অভিজ্ঞ ভূমি আইনজীবী / দলিল লেখক',
          nameEn: 'Qualified Land Lawyer / Experienced Deed Writer',
          roleBn: 'দলিলের শর্তাবলি, স্বত্বের আইনি জটিলতা এবং হস্তান্তরের অধিকার সম্পর্কে পেশাদার আইনি মতামত গ্রহণ করুন।',
          roleEn: 'Obtain formal legal review on property title, covenants, restrictions, and authority to convey.',
        },
      ],
      portals: [
        {
          nameBn: 'ডিএলআরএমএস — খতিয়ান ও মৌজা ম্যাপের সরকারি সেবা',
          nameEn: 'DLRMS — Official Khatian and Mouza Map Service',
          url: 'https://dlrms.land.gov.bd/',
          noteBn: 'অনলাইনে মৌজা ম্যাপ ও খতিয়ানের তথ্য পর্যালোচনা এবং নকলের আবেদনের সরকারি প্রবেশদ্বার।',
          noteEn: 'Official government portal to view mouza maps, survey khatians, and apply for certified record copies.',
        },
        {
          nameBn: 'ভূমি মন্ত্রণালয় সেবা প্রবেশদ্বার',
          nameEn: 'Ministry of Land Service Portal',
          url: 'https://www.land.gov.bd/',
          noteBn: 'ভূমি সংক্রান্ত সার্বিক নাগরিক সেবা, পরিপত্র এবং সরকারি নির্দেশনা জানতে।',
          noteEn: 'Gateway for citizen land services, notifications, and official guidelines.',
        },
      ],
    },
    ifDiscrepancyFound: {
      warningBn: 'যদি বিক্রেতার নাম, দাগ নম্বর, খতিয়ান বা সীমানায় সামান্যতম অমিল পাওয়া যায়, তবে অবিলম্বে সতর্ক হোন:',
      warningEn: 'If any discrepancy is found in seller names, plot numbers, khatians, or boundaries, exercise caution immediately:',
      actions: [
        {
          titleBn: 'চুক্তি ও আর্থিক লেনদেন সাময়িকভাবে স্থগিত রাখুন',
          titleEn: 'Pause the transaction and do not make advance payments',
          guidanceBn: 'কোনো অবস্থাতেই বায়না বা অগ্রিম টাকা দেবেন না। মৌখিক আশ্বাসে কখনোই জমি কেনার জন্য অর্থ হস্তান্তর করবেন না।',
          guidanceEn: 'Do not pay earnest money or advances based on verbal assurances while differences remain unresolved.',
        },
        {
          titleBn: 'বিক্রেতার কাছে সুনির্দিষ্ট ব্যাখ্যা ও অনুপস্থিত কাগজ চান',
          titleEn: 'Request written clarification and missing title links',
          guidanceBn: 'অনুপস্থিত ভায়া দলিল, বণ্টননামা বা সংশোধিত খতিয়ান হাজির করার জন্য বিক্রেতাকে লিখিতভাবে জানান।',
          guidanceEn: 'Ask the seller in writing to produce missing link deeds, partition agreements, or corrected records.',
        },
        {
          titleBn: 'সাব-রেজিস্ট্রি অফিসে তল্লাশি দিন (Search Volume Books)',
          titleEn: 'Search sub-registry office registers for double sale or encumbrance',
          guidanceBn: '১২ থেকে ৩০ বছরের বালাম বই তল্লাশি দিয়ে নিশ্চিত হোন জমিটি অন্য কারো কাছে ইতোমধ্যেই বিক্রি বা ব্যাংকে দায়বদ্ধ করা হয়নি।',
          guidanceEn: 'Inspect sub-registry records for 12 to 30 years to verify the land has not been previously sold or mortgaged.',
        },
        {
          titleBn: 'অভিজ্ঞ ভূমি আইনজীবীর পরামর্শ নিয়ে পরবর্তী পদক্ষেপ নিন',
          titleEn: 'Consult an experienced land lawyer before proceeding',
          guidanceBn: 'আইনগত স্বত্ব সম্পূর্ণ পরিষ্কার না হওয়া পর্যন্ত জমি কেনা থেকে বিরত থাকুন।',
          guidanceEn: 'Refrain from purchasing until clear, marketable title is legally established by qualified counsel.',
        },
      ],
    },
    preparationPrompt: {
      leadBn: 'আপনার কাছে মালিক ও জমির পরিচয়ের প্রয়োজনীয় কাগজগুলো সংগ্রহে আছে কি না চিহ্নিত করুন:',
      leadEn: 'Track whether you have gathered the essential documents for owner and plot identity:',
      disclaimerBn: 'স্মারক: কাগজ সংগ্রহ করা মানেই তা সরকারি রেকর্ডে যাচাই হয়ে যাওয়া নয়। এখানে সংগৃহীত চিহ্নিত করার পর তা সংশ্লিষ্ট অফিসে গিয়ে মিলিয়ে দেখতে হবে।',
      disclaimerEn: 'Reminder: Gathering a document does not mean it has been verified against government records. Comparing with official offices is essential.',
    },
  },

  mutation: {
    id: 'mutation',
    whatToCheck: {
      summaryBn: 'বিক্রেতার নামে জমিটির নামজারি (মিউটেশন) ও জমাভাগ যথাযথভাবে সম্পন্ন হয়েছে কি না এবং সরকারি রেকর্ডে তার নামে পৃথক খতিয়ান খোলা হয়েছে কি না তা যাচাই করুন। শুধু দলিলের ভিত্তিতে নয়, নামজারির আদেশনামা ও ডিসিআর দিয়ে স্বত্বের ধারাবাহিকতা পরীক্ষা করতে হবে।',
      summaryEn: 'Verify whether mutation (e-Mutation) and separate holding split have been officially completed in the seller’s name with an independent khatian, confirmed by the mutation order sheet and duplicate carbon receipt (DCR).',
      whyItMattersBn: 'রেজিস্ট্রি দলিল সম্পাদন হওয়ার পরও যদি নামজারি না করানো হয়, তবে সরকারি রেকর্ডে পূর্বের মালিকের নামই বহাল থাকে। ফলে সরকার নির্ধারিত খাজনা দেওয়া যায় না এবং অসৎ পূর্ববর্তী মালিক জমিটি অন্য কারো কাছে পুনরায় বিক্রি বা হস্তান্তরের সুযোগ পেতে পারে।',
      whyItMattersEn: 'Without mutation, the government record continues to show the previous owner’s name. You cannot pay land taxes, and fraudulent previous owners or co-heirs may attempt to resell or encumber the plot.',
    },
    requiredDocuments: {
      disclaimerBn: 'সতর্কতা: শুধুমাত্র নামজারির আবেদন জমা দেওয়ার রসিদ বা ট্র্যাকিং নম্বর থাকলেই নামজারি সম্পন্ন হয়েছে বলে গণ্য হবে না; কোনো একক কাগজ বা দাখিলা চূড়ান্ত স্বত্বের একক প্রমাণ নয়।',
      disclaimerEn: 'Notice: An e-mutation application receipt or tracking number alone does not mean mutation has been approved; no single document conclusively establishes clear title.',
      items: [
        {
          nameBn: 'নামজারি খতিয়ান (মিউটেশন পর্চা)',
          nameEn: 'Mutation Khatian (Mutation Parcha)',
          purposeBn: 'সহকারী কমিশনার (ভূমি) কর্তৃক অনুমোদিত বিক্রেতার নামের স্বতন্ত্র খতিয়ান নম্বর ও জমির পরিমাণ প্রমাণ করা।',
          purposeEn: 'Proves the distinct khatian number, recorded owner name, and allocated area sanctioned by the AC (Land).',
        },
        {
          nameBn: 'নামজারির আদেশনামা (Order Sheet) ও মিসকেস নম্বর',
          nameEn: 'Mutation Order Sheet and Case Number',
          purposeBn: 'নামজারি অনুমোদনের তারিখ, সংশ্লিষ্ট মিসকেস নম্বর (যেমন: ১২৩৪/২০২৩-২৪) এবং কোনো আপত্তি ছিল কি না তা জানা।',
          purposeEn: 'Verifies the case approval date, mutation case reference, hearing records, and absence of formal objection.',
        },
        {
          nameBn: 'ডিসিআর (Duplicate Carbon Receipt - DCR)',
          nameEn: 'Duplicate Carbon Receipt (DCR)',
          purposeBn: 'নামজারি ফি বাবদ সরকারি কোষাগারে নির্ধারিত ফি পরিশোধের সরকারি রসিদ যাচাই করা।',
          purposeEn: 'Confirms payment of mandatory government mutation and khatian issuance fees to the treasury.',
        },
        {
          nameBn: 'নামজারি খতিয়ানের হালনাগাদ দাখিলা (ভূমি উন্নয়ন কর রসিদ)',
          nameEn: 'Land Development Tax Receipt on Mutation Khatian',
          purposeBn: 'নামজারি খতিয়ান নম্বর উল্লেখপূর্বক সাম্প্রতিকতম অর্থবছরের খাজনা পরিশোধের নিশ্চয়তা।',
          purposeEn: 'Proves that land development tax for the current fiscal year has been cleared on this mutated holding.',
        },
        {
          nameBn: 'পূর্ববর্তী মূল খতিয়ান ও জমাভাগ সংক্রান্ত তথ্য',
          nameEn: 'Prior Survey Khatian & Partition Records',
          purposeBn: 'আগের কোন মূল খতিয়ান ও দাগ থেকে কর্তন করে এই নতুন নামজারি খতিয়ান খোলা হয়েছে তা মেলানো।',
          purposeEn: 'Identifies which parent survey khatian and plot number this mutation was extracted from.',
        },
      ],
    },
    howToCompare: {
      introBn: 'নামজারির কাগজপত্র যাচাইয়ের জন্য নিচের ধাপগুলো ক্রমানুসারে অনুসরণ করুন:',
      introEn: 'Follow these numbered, actionable steps to audit mutation authenticity:',
      steps: [
        {
          stepNumber: 1,
          titleBn: 'নামজারি কেস নম্বর ও আদেশের কপি মিলানো',
          titleEn: 'Verify case number, order date, and approval signature',
          instructionBn: 'নামজারি খতিয়ানের শীর্ষে উল্লিখিত কেস নম্বর, সাল এবং সহকারী কমিশনার (ভূমি)-এর আদেশনামার নম্বর ও অনুমোদনের তারিখ হুবহু মিলান।',
          instructionEn: 'Confirm that the case number, year, AC (Land) order date, and official seal on the order sheet match the mutation khatian exactly.',
          keyItemsBn: ['নামজারি কেস নম্বর ও সাল', 'অনুমোদনের তারিখ', 'এসিল্যান্ডের স্বাক্ষর ও সিল'],
          keyItemsEn: ['Case number & fiscal year', 'Approval date', 'AC Land signature & seal'],
        },
        {
          stepNumber: 2,
          titleBn: 'মূল দাগ ও কর্তনকৃত জমির পরিমাণ মিলানো',
          titleEn: 'Match parent plot number and mutated area',
          instructionBn: 'বিক্রেতার মূল ক্রয় দলিলে উল্লেখিত দাগ নম্বর ও জমির পরিমাণের সাথে নামজারি খতিয়ানের দাগ নম্বর ও জমাভাগকৃত জমির পরিমাণ মিলছে কি না দেখুন। মূল দলিলের চেয়ে বেশি জমি নামজারি করা থাকলে তা অবৈধ।',
          instructionEn: 'Compare deed plot numbers and area with the mutation khatian. A mutation showing more land than conveyed in the deed is unauthorized.',
          keyItemsBn: ['দাগ নম্বর (সাবেক ও হাল)', 'মূল দলিলের জমি বনাম নামজারির জমি', 'জমির শ্রেণি (নাল, ভিটি ইত্যাদি)'],
          keyItemsEn: ['Plot number (former & current)', 'Deed area vs mutated area', 'Land class (arable, homestead, etc.)'],
        },
        {
          stepNumber: 3,
          titleBn: 'ডিসিআর (DCR) ও ফি পরিশোধের রসিদ যাচাই',
          titleEn: 'Verify DCR receipt and treasury fee payment',
          instructionBn: 'নামজারি মঞ্জুর হওয়ার পর ডিসিআর কাটা হয়েছে কি না এবং ডিসিআরে উল্লেখিত কেস নম্বর ও খতিয়ান নম্বর খতিয়ানের সাথে মিলছে কি না নিশ্চিত হোন। ডিসিআর ছাড়া নামজারি আইনত কার্যকর হয় না।',
          instructionEn: 'Confirm a legitimate DCR exists matching the case and khatian number. A mutation is incomplete without treasury fee clearance through DCR.',
          keyItemsBn: ['ডিসিআর নম্বর ও তারিখ', 'পরিশোধিত সরকারি ফি', 'কেস নম্বরের সাথে ডিসিআরের মিল'],
          keyItemsEn: ['DCR receipt number & date', 'Fee payment details', 'Case number reference in DCR'],
        },
        {
          stepNumber: 4,
          titleBn: 'অনলাইন ই-নামজারি পোর্টালে যাচাই',
          titleEn: 'Cross-check online status on the official mutation portal',
          instructionBn: 'সরকারি e-Mutation পোর্টালে গিয়ে বিভাগ, জেলা, উপজেলা, মৌজা ও কেস নম্বর অথবা আবেদন নম্বর দিয়ে অনলাইনে আদেশের অবস্থা অনুসন্ধান করুন।',
          instructionEn: 'Check the official e-Mutation portal using division, district, upazila, mouza, and case reference to inspect the approved record online.',
          keyItemsBn: ['অনলাইন কিউআর কোড (প্রযোজ্য ক্ষেত্রে)', 'অনলাইন কেস ট্র্যাকিং স্ট্যাটাস', 'আদেশের সত্যতা'],
          keyItemsEn: ['Online QR verification (if present)', 'Online case tracking status', 'Genuineness of order'],
        },
        {
          stepNumber: 5,
          titleBn: 'ইউনিয়ন ভূমি অফিসের ২ নম্বর বালাম রেজিস্টারে হোল্ডিং পরীক্ষা',
          titleEn: 'Inspect Holding Register II at the Union Land Office',
          instructionBn: 'তহশিল অফিসে গিয়ে ২ নম্বর রেজিস্টার (জমাখারিজ রেজিস্টার) দেখে নিশ্চিত হোন যে বিক্রেতার নামে নতুন জোত বা হোল্ডিং খোলা হয়েছে এবং নামজারি এন্ট্রি বৈধভাবে অন্তর্ভুক্ত আছে।',
          instructionEn: 'Confirm at the local Union Land Office that a new holding was legally opened in Register II (Jamakharij Register).',
          keyItemsBn: ['হোল্ডিং নম্বর', '২ নম্বর রেজিস্টার ভলিউম ও পৃষ্ঠা', 'হালনাগাদ খাজনার স্থিতি'],
          keyItemsEn: ['Holding number', 'Register II volume and page', 'Up-to-date tax status'],
        },
      ],
    },
    whereToVerify: {
      introBn: 'নামজারির কাগজ ও ইতিহাস যাচাইয়ের জন্য উপযুক্ত অফিস ও সরকারি সেবা:',
      introEn: 'Contact these official offices and portals to confirm mutation authenticity:',
      offices: [
        {
          nameBn: 'উপজেলা সহকারী কমিশনার (ভূমি) কার্যালয়',
          nameEn: 'Upazila Assistant Commissioner (Land) Office',
          roleBn: 'নামজারির মূল মিসেল নথি তলব করে আবেদন, নোটিশ প্রদান, ফিল্ড রিপোর্ট ও চূড়ান্ত আদেশনামা পর্যবেক্ষণ করুন।',
          roleEn: 'Inspect the primary mutation file including citizen petition, notices, field report, and final order sheet.',
        },
        {
          nameBn: 'ইউনিয়ন / পৌর ভূমি অফিস (তহশিল অফিস)',
          nameEn: 'Union / Pourashava Land Office (Tahsil Office)',
          roleBn: '২ নম্বর রেজিস্টারে নামজারি কর্তন ও নতুন হোল্ডিং খোলার এন্ট্রি সরেজমিনে মিলিয়ে দেখুন।',
          roleEn: 'Verify mutation deduction and opening of the new holding in local Register II.',
        },
      ],
      portals: [
        {
          nameBn: 'সরকারি ই-নামজারি সেবা পোর্টাল',
          nameEn: 'Official e-Mutation Portal',
          url: 'https://mutation.land.gov.bd/',
          noteBn: 'অনলাইন নামজারি আবেদন ট্র্যাকিং, অনুমোদিত খতিয়ান ও ডিসিআর যাচাইয়ের কেন্দ্রীয় সরকারি প্ল্যাটফর্ম।',
          noteEn: 'Central government platform for e-Mutation tracking, approved khatian verification, and DCR payment validation.',
        },
      ],
    },
    ifDiscrepancyFound: {
      warningBn: 'যদি নামজারি প্রক্রিয়া অসম্পূর্ণ থাকে বা কোনো গরমিল ও অমিল দেখা দেয়, তবে অবিলম্বে সতর্ক হোন:',
      warningEn: 'If mutation is incomplete, disputed, or inconsistent with title deeds:',
      actions: [
        {
          titleBn: 'নামজারি সম্পন্ন না হওয়া পর্যন্ত জমি কেনা স্থগিত রাখুন',
          titleEn: 'Pause the purchase until formal mutation is completed',
          guidanceBn: 'বিক্রেতা "বায়না করুন, রেজিস্ট্রির আগেই নামজারি করিয়ে দেব"—এমন কথায় বিশ্বাস করবেন না। খতিয়ান ও ডিসিআর ছাড়া জমি কিনবেন না।',
          guidanceEn: 'Never purchase land on a promise to mutate after advance payment. Insist on having the approved khatian and DCR in hand first.',
        },
        {
          titleBn: 'নামজারি আবেদনে আপত্তি (Objection) থাকলে তথ্য নিন',
          titleEn: 'Investigate any co-sharer or third-party objection',
          guidanceBn: 'অন্য কোনো অংশীদার বা পূর্বতন মালিক আপত্তি দাখিল করেছেন কি না তা এসিল্যান্ড অফিসের নথি দেখে নিশ্চিত হোন।',
          guidanceEn: 'Check the AC Land office file to see if co-heirs or neighbors filed an objection against this holding separation.',
        },
        {
          titleBn: 'জমির পরিমাণে অমিল থাকলে যৌথ জরিপ করান',
          titleEn: 'Conduct joint survey if land area differs',
          guidanceBn: 'দলিলে ১০ শতক কিন্তু নামজারি হয়েছে ৮ শতক—এমন অমিল থাকলে বাকি ২ শতক কোথায় গেল তা স্পষ্ট না হওয়া পর্যন্ত বায়না করবেন না।',
          guidanceEn: 'If the deed conveys 10 decimals but mutation covers only 8, identify the missing area before entering into a deed.',
        },
        {
          titleBn: 'ভুয়া নামজারির ক্ষেত্রে তাৎক্ষণিকভাবে চুক্তি বাতিল করুন',
          titleEn: 'Cancel immediately if fake or revoked mutation is discovered',
          guidanceBn: 'জাল সিল-স্বাক্ষরযুক্ত খতিয়ান বা বাতিলকৃত নামজারি ধরা পড়লে কোনো আর্থিক লেনদেন করবেন না।',
          guidanceEn: 'Cease negotiations immediately if fraudulent seals, altered papers, or revoked orders are detected.',
        },
      ],
    },
    preparationPrompt: {
      leadBn: 'আপনার কাছে নামজারি খতিয়ান, আদেশনামা ও ডিসিআরের কপি আছে কি না চিহ্নিত করুন:',
      leadEn: 'Track whether you have gathered mutation khatian, order sheet, and DCR copies:',
      disclaimerBn: 'স্মারক: নামজারির কাগজ হাতে থাকা মানেই তা আসল বা সক্রিয় থাকার প্রমাণ নয়; অনলাইন সেবা ও এসিল্যান্ড অফিসে তা পরখ করে নিতে হবে।',
      disclaimerEn: 'Reminder: Having mutation papers in hand does not certify they are authentic or active; cross-checking with official offices is required.',
    },
  },

  case: {
    id: 'case',
    whatToCheck: {
      summaryBn: 'জমিটির মালিকানা, সীমানা বা দখল নিয়ে দেওয়ানি আদালত (যেমন: স্বত্ব মামলা, বণ্টন মামলা), ফৌজদারি আদালত (১৪৪/১৪৫ ধারা) বা ভূমি রাজস্ব ট্রাইব্যুনালে কোনো মামলা অথবা আদালতের কোনো নিষেধাজ্ঞা (Injunction/Status Quo) বলবৎ আছে কি না তা যাচাই করুন।',
      summaryEn: 'Verify whether there is any pending civil dispute (title suit, partition suit), injunction (temporary stay or status quo), criminal proceeding (sec 144/145), or land revenue tribunal litigation affecting the land.',
      whyItMattersBn: 'মামলাধীন কোনো সম্পত্তি কেনা হলে ক্রেতা স্বয়ংক্রিয়ভাবে মামলার রায়ে বাধ্য থাকেন (সম্পত্তি হস্তান্তর আইনের ৫২ ধারা—Doctrine of Lis Pendens)। আদালতে জমি বিক্রির ওপর নিষেধাজ্ঞা থাকলে সম্পাদিত দলিল আদালতে বাতিল হয়ে যাবে এবং ক্রেতার অর্থ ও দখল হাতছাড়া হবে।',
      whyItMattersEn: 'Under Section 52 of the Transfer of Property Act (Doctrine of Lis Pendens), a buyer of property subject to pending litigation is bound by the court’s decree. An injunction violation renders the transfer void, risking total loss of funds and possession.',
    },
    requiredDocuments: {
      disclaimerBn: 'সতর্কতা: অনলাইনে কোনো মামলার তথ্য না পাওয়ার অর্থ এই নয় যে জমিটি সম্পূর্ণরূপে মামলা-মুক্ত; কোনো একক প্রত্যয়ন বা অনলাইন তল্লাশি মামলা-মুক্তির চূড়ান্ত প্রমাণ নয়। স্থানীয় আদালত ও আইনজীবীর মাধ্যমে তথ্য মিলিয়ে নেওয়া আবশ্যক।',
      disclaimerEn: 'Notice: No search result online does not prove the land is free of litigation; no single search or document conclusively proves lack of dispute. Confirming with local court registries and legal counsel is essential.',
      items: [
        {
          nameBn: 'মামলার নম্বর, ৪ ডিজিটের সাল ও আদালতের নাম',
          nameEn: 'Case Number, 4-digit Year, and Court Name',
          purposeBn: 'বিক্রেতা বা বিরোধীদের কাছ থেকে জানা মামলার সুনির্দিষ্ট নম্বর (যেমন: দেওয়ানি মামলা ১২৩/২০২৩) এবং সংশ্লিষ্ট আদালতের পরিচিতি।',
          purposeEn: 'Accurate case identifier, filing year (e.g. Title Suit 123/2023), and specific court bench for cause list searches.',
        },
        {
          nameBn: 'মামলার আরজি (Plaint) ও লিখিত জবাব (Written Statement)',
          nameEn: 'Court Plaint and Written Statement',
          purposeBn: 'মামলায় কোন তফসিলের দাগ ও কতটুকু জমি নিয়ে দাবি করা হয়েছে এবং কী কারণে বিরোধ তা জানা।',
          purposeEn: 'Examines which exact schedule, plots, and acreage are contested and the underlying basis of claim.',
        },
        {
          nameBn: 'আদালতের সর্বশেষ আদেশনামা ও অন্তর্বর্তীকালীন নিষেধাজ্ঞা আদেশ',
          nameEn: 'Latest Court Order Sheet & Injunction Orders',
          purposeBn: 'জমি হস্তান্তর, বিক্রি বা অবকাঠামো নির্মাণের ওপর কোনো স্থগিতাদেশ বা স্থিতাবস্থা (Status Quo) আছে কি না তা নিশ্চিত করা।',
          purposeEn: 'Confirms whether any temporary injunction, status quo, or transfer restriction has been issued by the bench.',
        },
        {
          nameBn: 'সাব-রেজিস্ট্রি অফিসের দায়মুক্তি সনদ (Non-Encumbrance Certificate)',
          nameEn: 'Non-Encumbrance Certificate / Search Receipt',
          purposeBn: 'সাব-রেজিস্ট্রি অফিসে জমিটি ক্রোক (Attachment) বা আদালতের আদেশে হস্তান্তর নিষিদ্ধ করা হয়েছে কি না তা তল্লাশি করা।',
          purposeEn: 'Confirms whether any judicial attachment or court restraint is officially noted in sub-registry registers.',
        },
        {
          nameBn: 'আপিল বা রিভিশন সংক্রান্ত প্রমাণপত্র (যদি মামলা ইতিপূর্বে নিষ্পত্তি হয়ে থাকে)',
          nameEn: 'Certified Judgment, Decree, and Non-Appeal Certificate',
          purposeBn: 'পূর্ববর্তী রায় কার্যকর আছে কি না এবং উচ্চ আদালতে কোনো আপিল বিচারাধীন নেই তা প্রমাণ করা।',
          purposeEn: 'Verifies certified decree and confirms no higher court appeal or stay order is currently pending.',
        },
      ],
    },
    howToCompare: {
      introBn: 'মামলা বা নিষেধাজ্ঞা পরীক্ষা করতে নিচের সুনির্দিষ্ট ধাপগুলো অনুসরণ করুন:',
      introEn: 'Follow these numbered, actionable steps to check for pending litigation or court orders:',
      steps: [
        {
          stepNumber: 1,
          titleBn: 'বিক্রেতার কাছ থেকে সুনির্দিষ্ট মামলার নম্বর ও ৪ ডিজিটের সাল নিন',
          titleEn: 'Obtain exact case number and 4-digit filing year',
          instructionBn: 'বিক্রেতার কাছে জমি সংক্রান্ত যেকোনো অতীত বা বর্তমান মামলার নম্বর, চার ডিজিটের বছর (যেমন: ২০২৪) এবং আদালতের নাম জানতে চান। মৌখিক কথার ওপর নির্ভর করবেন না।',
          instructionEn: 'Require the seller to disclose any past or active litigation numbers, exact 4-digit years, and court names in writing.',
          keyItemsBn: ['মামলার ধরন (স্বত্ব, বণ্টন, রাজস্ব ইত্যাদি)', 'মামলার নম্বর ও ৪ ডিজিটের সাল', 'আদালতের নাম ও জেলা'],
          keyItemsEn: ['Case type (title, partition, revenue)', 'Case number & 4-digit year', 'Court name & district'],
        },
        {
          stepNumber: 2,
          titleBn: 'মামলার তপশিলে প্রস্তাবিত দাগ ও জমির সীমানা মিলানো',
          titleEn: 'Match land schedule in court plaint with the proposed plot',
          instructionBn: 'মামলার আরজির তপশিলে উল্লেখিত মৌজা, জেএল, খতিয়ান, দাগ ও চৌহদ্দি আপনার কেনার প্রস্তাবিত জমির সাথে হুবহু মিলছে কি না খতিয়ে দেখুন। সামান্য অংশও মামলার আওতায় থাকলে পুরো জমি ঝুঁকিপূর্ণ।',
          instructionEn: 'Compare the scheduled mouza, khatian, plot, and boundary in the plaint with your target parcel to determine if any part is disputed.',
          keyItemsBn: ['মামলার তপশিলের দাগ নম্বর', 'মামলাভুক্ত জমির পরিমাণ', 'বিরোধের মূল কারণ'],
          keyItemsEn: ['Scheduled plot numbers in suit', 'Contested land area', 'Underlying dispute rationale'],
        },
        {
          stepNumber: 3,
          titleBn: 'আদালতের নিষেধাজ্ঞার বর্তমান অবস্থা ও আদেশনামা পর্যালোচনা',
          titleEn: 'Review injunction status and current court order sheet',
          instructionBn: 'আদালত কর্তৃক কোনো অস্থায়ী নিষেধাজ্ঞা (Temporary Injunction) বা স্থিতাবস্থা (Status Quo) জারি আছে কি না তা সর্বশেষ আদেশনামা থেকে বিজ্ঞ আইনজীবীর মাধ্যমে যাচাই করুন।',
          instructionEn: 'Verify whether temporary injunctions or status quo orders restricting sale, possession, or alteration are currently in force.',
          keyItemsBn: ['নিষেধাজ্ঞার মেয়াদ ও কার্যকারিতা', 'কোন পক্ষের ওপর নিষেধাজ্ঞা আরোপিত', 'সর্বশেষ শুনানির তারিখ'],
          keyItemsEn: ['Injunction duration and scope', 'Enjoined party details', 'Last court hearing date'],
        },
        {
          stepNumber: 4,
          titleBn: 'বিচার বিভাগের অনলাইন কার্যতালিকা ও ভূমি রাজস্ব মামলা পোর্টালে অনুসন্ধান',
          titleEn: 'Inspect official court cause lists and land revenue case platforms',
          instructionBn: 'সরকারি e-Causelist পোর্টালে আদালত, তারিখ ও মামলার নম্বর দিয়ে দৈনন্দিন কার্যতালিকা ও আদেশের তথ্য দেখুন। ভূমি রাজস্ব সংক্রান্ত বিরোধ থাকলে case.gov.bd-এ অনুসন্ধান করুন।',
          instructionEn: 'Search the official judiciary cause list portal by district, court, and case number, and check case.gov.bd for revenue litigation.',
          keyItemsBn: ['অনলাইন কার্যতালিকার বিবরণ', 'রাজস্ব মামলার স্ট্যাটাস', 'পরবর্তী শুনানির তারিখ'],
          keyItemsEn: ['Online cause list listing', 'Revenue case status', 'Next hearing date'],
        },
        {
          stepNumber: 5,
          titleBn: 'স্থানীয় পর্যায়ে গোপন অনুসন্ধান ও ফৌজদারি বিরোধের খোঁজ',
          titleEn: 'Discreet local inquiries regarding possession and criminal disputes',
          instructionBn: 'জমির আশপাশের প্রতিবেশী, স্থানীয় ইউনিয়ন পরিষদ সদস্য এবং চায়ের দোকানে গোপনে খোঁজ নিন জমিটি নিয়ে কারো সাথে দখল বা সীমানা নিয়ে মারামারি বা ফৌজদারি মামলা (১৪৪/১৪৫ ধারা) আছে কি না।',
          instructionEn: 'Discreetly inquire with adjoining landowners and community elders regarding possession conflicts or Section 144/145 police proceedings.',
          keyItemsBn: ['স্থানীয় কোনো দাবিদার আছে কি না', '১৪৪/১৪৫ ধারার নোটিশ', 'দখল নিয়ে কোনো সংঘাতের ইতিহাস'],
          keyItemsEn: ['Local adverse claimants', 'Section 144/145 police notices', 'History of possession clashes'],
        },
      ],
    },
    whereToVerify: {
      introBn: 'মামলা বা নিষেধাজ্ঞা সংক্রান্ত নির্ভরযোগ্য তথ্য পাওয়ার জন্য এখানে যোগাযোগ করুন:',
      introEn: 'Contact these official bodies and services to verify court dispute status:',
      offices: [
        {
          nameBn: 'সংশ্লিষ্ট জেলা ও দায়রা জজ আদালত / সহকারী জজ আদালত',
          nameEn: 'Concerned District & Sessions Judge Court / Assistant Judge Court',
          roleBn: 'বিজ্ঞ আইনজীবীর মাধ্যমে আদালতের সেরেস্তা ও রেজিস্টার তল্লাশি দিয়ে মামলার আরজি ও সর্বশেষ আদেশ নিশ্চিত করুন।',
          roleEn: 'Inspect judicial registry files through legal counsel to examine plaints, written statements, and orders.',
        },
        {
          nameBn: 'অভিজ্ঞ দেওয়ানি ভূমি আইনজীবী',
          nameEn: 'Experienced Civil Land Lawyer',
          roleBn: 'সম্পত্তি হস্তান্তর আইন ও দেওয়ানি কার্যবিধি অনুসারে মামলার সম্ভাব্য ফলাফল ও ক্রয়ের ঝুঁকি নিরূপণ করুন।',
          roleEn: 'Assess litigation risk, transfer restrictions, and legal implications under property law.',
        },
      ],
      portals: [
        {
          nameBn: 'আদালতের সরকারি কার্যতালিকা (ই-কার্যতালিকা)',
          nameEn: 'Judiciary Official Cause List (e-Causelist)',
          url: 'https://causelist.judiciary.gov.bd/',
          noteBn: 'সুপ্রিম কোর্ট ও জেলা পর্যায়ের নিম্ন আদালতের মামলার দৈনন্দিন কার্যতালিকা ও তথ্য জানার সরকারি পোর্টাল।',
          noteEn: 'Official judiciary portal for Supreme Court and subordinate district court daily cause lists.',
        },
        {
          nameBn: 'ভূমি রাজস্ব মামলা ব্যবস্থাপনা সিস্টেম',
          nameEn: 'Land Revenue Case Management System',
          url: 'https://case.gov.bd/',
          noteBn: 'ভূমি আপিল বোর্ড ও ভূমি রাজস্ব বিরোধ সংক্রান্ত সরকারি মামলা পর্যালোচনার প্ল্যাটফর্ম।',
          noteEn: 'Government platform for land appeal board cases and revenue administration litigation.',
        },
      ],
    },
    ifDiscrepancyFound: {
      warningBn: 'যদি জমি নিয়ে কোনো মামলা বা আদালতের নিষেধাজ্ঞার অস্তিত্ব পাওয়া যায়:',
      warningEn: 'If an active lawsuit or court injunction is discovered affecting the plot:',
      actions: [
        {
          titleBn: 'তাৎক্ষণিকভাবে ক্রয়ের সকল কার্যক্রম স্থগিত করুন',
          titleEn: 'Immediately halt all purchasing and transaction steps',
          guidanceBn: 'মামলা নিষ্পত্তি না হওয়া পর্যন্ত এক টাকাও বায়না দেবেন না। মামলাধীন জমি কিনে নিজের ভবিষ্যৎ ঝুঁকিতে ফেলবেন না।',
          guidanceEn: 'Never pay earnest money or enter contracts while a suit or injunction is pending.',
        },
        {
          titleBn: 'বিক্রেতার মৌখিক আশ্বাসে কখনোই বিশ্বাস করবেন না',
          titleEn: 'Do not rely on verbal assurances that the dispute is settled',
          guidanceBn: 'বিক্রেতা "মামলা তো মিটমাট হয়ে গেছে" বা "আমরা জিতে যাব"—এমন দাবি করলে আদালতের সত্যায়িত চূড়ান্ত ডিক্রি দেখতে চান।',
          guidanceEn: 'Insist on certified copies of final decrees and judgments rather than verbal claims of settlement.',
        },
        {
          titleBn: 'আদালতের সার্টিফায়েড আদেশনামা সংগ্রহ করে আইনজীবীকে দেখান',
          titleEn: 'Obtain certified order sheets and consult independent counsel',
          guidanceBn: 'আদালত থেকে চূড়ান্ত আদেশের নকল তুলে নিশ্চিত হোন কোনো নিষেধাজ্ঞা বহাল আছে কি না এবং কোনো পক্ষ আপিল করেছে কি না।',
          guidanceEn: 'Have an independent lawyer review certified orders to confirm no stay or appeal remains open.',
        },
        {
          titleBn: 'শরিকদের মধ্যে বণ্টন মামলা থাকলে বণ্টননামা ছাড়া জমি কিনবেন না',
          titleEn: 'Never buy unpartitioned land subject to partition suits',
          guidanceBn: 'রেজিস্ট্রিকৃত বণ্টননামা দলিল বা আদালতের চূড়ান্ত বণ্টন ডিক্রি ছাড়া এজমালি জমির সুনির্দিষ্ট অংশ কেনা আইনত অনিরাপদ।',
          guidanceEn: 'Purchasing a specific portion of joint property without a registered partition deed or court partition decree invites litigation.',
        },
      ],
    },
    preparationPrompt: {
      leadBn: 'আদালতের মামলা বা নিষেধাজ্ঞার বিষয়ে অনুসন্ধান করেছেন কি না চিহ্নিত করুন:',
      leadEn: 'Track whether you have investigated court cases and injunctions for this land:',
      disclaimerBn: 'স্মারক: অনলাইন অনুসন্ধানে কোনো মামলা না পাওয়া মানেই জমি মামলা-মুক্ত থাকার নিশ্চয়তা নয়; সংশ্লিষ্ট আদালতে খোঁজ নেওয়া প্রয়োজন।',
      disclaimerEn: 'Reminder: Finding no online case records does not guarantee zero litigation; inquiring with the relevant court registry is required.',
    },
  },

  khas: {
    id: 'khas',
    whatToCheck: {
      summaryBn: 'জমিটি সরকারের কোনো খাস খতিয়ানভুক্ত (যেমন: ১ নং খাস খতিয়ান), পরিত্যক্ত সম্পত্তি, অর্পিত সম্পত্তি (Vested Property) বা কোনো সরকারি সংস্থার (রেলওয়ে, সড়ক ও জনপথ, বন বিভাগ ইত্যাদি) জমি কি না তা নিশ্চিত করুন।',
      summaryEn: 'Verify whether the land is government khas land (e.g. 1 No. Khas Khatian), vested property, abandoned property, or vested in a statutory agency (Railways, RHD, Forest Department, etc.).',
      whyItMattersBn: 'সরকারি খাস জমি বা অর্পিত সম্পত্তি ব্যক্তি কর্তৃক বিক্রি করা সম্পূর্ণ বেআইনি, প্রতারণামূলক এবং দণ্ডনীয় অপরাধ। এমন জমি কিনলে সরকার যেকোনো সময় বিনা ক্ষতিপূরণে উচ্ছেদ করবে এবং ক্রেতার সমুদয় অর্থ নষ্ট হবে।',
      whyItMattersEn: 'Selling government khas or vested property is strictly illegal and fraudulent. The government may evict occupants at any time without compensation, resulting in complete financial loss.',
    },
    requiredDocuments: {
      disclaimerBn: 'সতর্কতা: জমিবার্তায় সরাসরি সরকারি খাস রেজিস্টার তল্লাশির কোনো ব্যবস্থা নেই। কোনো একক কাগজ বা বিক্রেতার দাবি খাস-মুক্ত হওয়ার চূড়ান্ত প্রমাণ নয়; মাঠপর্যায়ের ভূমি অফিসে গিয়ে এটি সরাসরি যাচাই করতে হবে।',
      disclaimerEn: 'Notice: Jomibarta does not query the official khas register; no single document or seller statement alone conclusively establishes non-khas status. Field-level verification at the local land office is strictly required.',
      items: [
        {
          nameBn: 'সর্বশেষ সরকারি জরিপ খতিয়ান (আরএস/বিএস/সিটি জরিপ)',
          nameEn: 'Latest Survey Khatian (RS / BS / City Survey)',
          purposeBn: 'খতিয়ানের মালিকের কলামে "বাংলাদেশ সরকার", "জেলা প্রশাসক" বা কোনো সরকারি প্রতিষ্ঠানের নাম আছে কি না পরীক্ষা করা।',
          purposeEn: 'Checks if the owner column names the Government of Bangladesh, Deputy Commissioner, or an agency.',
        },
        {
          nameBn: 'ইউনিয়ন ভূমি অফিসের ৮ নম্বর রেজিস্টার (খাস জমি রেজিস্টার) তথ্য',
          nameEn: 'Union Land Office Register VIII (Khas Land Register)',
          purposeBn: 'দাগটি স্থানীয় ভূমি অফিসের খাস জমি রেজিস্টারভুক্ত কি না তা সুস্পষ্টভাবে নিশ্চিত হওয়া।',
          purposeEn: 'Verifies whether the plot is formally listed in Register VIII of local government khas lands.',
        },
        {
          nameBn: 'অর্পিত বা পরিত্যক্ত সম্পত্তির সরকারি গেজেট ও তালিকা',
          nameEn: 'Vested or Abandoned Property Gazette & Schedules',
          purposeBn: 'জমিটি শত্রু সম্পত্তি/অর্পিত সম্পত্তির "ক" বা "খ" তফসিলভুক্ত কি না তা নিশ্চিত করা।',
          purposeEn: 'Confirms that the plot is not scheduled under Vested Property ("Ka" or "Kha" schedules).',
        },
        {
          nameBn: 'সরকারি বন্দোবস্তের দলিল ও শর্তাবলি (প্রযোজ্য ক্ষেত্রে)',
          nameEn: 'Government Settlement Deed & Lease Terms (if settled)',
          purposeBn: 'বিক্রেতা পূর্বে সরকার কর্তৃক বন্দোবস্ত পেয়ে থাকলে তা হস্তান্তরযোগ্য কি না এবং শর্ত ভঙ্গের ঝুঁকি আছে কি না যাচাই করা।',
          purposeEn: 'Determines whether settled government lease land carries mandatory non-transfer covenants.',
        },
        {
          nameBn: 'নদী, খাল, জলাশয় বা চরের ভৌগোলিক রেকর্ডের তথ্য',
          nameEn: 'Waterbody, Riverbank, or Char Land Classification Details',
          purposeBn: 'জমিটি সিকস্তি-পয়স্তি আইনের আওতায় নদী বা খালের অংশ কি না এবং খাস শ্রেণির আওতায় পড়ে কি না তা জানা।',
          purposeEn: 'Examines alluvian/diluvian char laws and wetland protections where government rights automatically attach.',
        },
      ],
    },
    howToCompare: {
      introBn: 'জমিটি সরকারি খাস বা অর্পিত সম্পত্তি কি না তা বোঝার জন্য নিচের পদক্ষেপগুলো গ্রহণ করুন:',
      introEn: 'Follow these numbered, actionable steps to investigate government khas or vested status:',
      steps: [
        {
          stepNumber: 1,
          titleBn: 'খতিয়ানের মালিকের কলাম ও ১ নম্বর খতিয়ানের যোগসূত্র দেখা',
          titleEn: 'Check the owner column and reference to 1 No. Khas Khatian',
          instructionBn: 'খতিয়ানে মালিকের নাম ভালো করে পড়ুন। "বাংলাদেশ সরকার", "কালেক্টর", "জেলা প্রশাসক", "রেলওয়ে" বা "সওজ" লেখা থাকলে তা সরকারি জমি। দাগের পূর্বাপর রেকর্ড ১ নম্বর খতিয়ানের সাথে সম্পৃক্ত কি না তা খতিয়ে দেখুন।',
          instructionEn: 'Scrutinize the owner column in all survey records. Entries designating government, collector, or statutory bodies indicate public land.',
          keyItemsBn: ['মালিকের নাম ও পদবি', 'খতিয়ান নম্বর (বিশেষ করে ১ নং খতিয়ান)', 'জমির দখলকারী কলাম'],
          keyItemsEn: ['Owner name designation', 'Khatian number (especially Khas 1)', 'Possessor/occupant remarks'],
        },
        {
          stepNumber: 2,
          titleBn: 'জমির শ্রেণি (Land Classification) পর্যবেক্ষণ',
          titleEn: 'Scrutinize official land classification and usage categories',
          instructionBn: 'জমির শ্রেণি যদি নদী, খাল, গোপাট (রাস্তা), ডাঙ্গা, পতিত, বনভূমি, হালট বা কবরস্থান হয়, তবে তা ব্যক্তি মালিকানায় হস্তান্তর হওয়ার সম্ভাবনা প্রায় শূন্য। এ ধরনের জমি কেনার প্রস্তাব সবসময় পরিহার করুন।',
          instructionEn: 'Classifications such as canal, river, public pathway, forest, or uncultivated waste are overwhelmingly public land and legally non-transferable.',
          keyItemsBn: ['জমির শ্রেণি (নদী, খাল, গোপাট, বন ইত্যাদি)', 'বর্তমান বাস্তব ব্যবহার', 'পরিবেশগত সংরক্ষণ বিধিনিষেধ'],
          keyItemsEn: ['Land class (river, canal, pathway, forest)', 'Current physical use', 'Environmental preservation caveats'],
        },
        {
          stepNumber: 3,
          titleBn: 'ইউনিয়ন ভূমি অফিসের ৮ নম্বর রেজিস্টার সরাসরি তল্লাশি',
          titleEn: 'Inspect Register VIII at the Union Land Office in person',
          instructionBn: 'তহশিল অফিসে গিয়ে তহশিলদারের উপস্থিতিতে সংশ্লিষ্ট মৌজার খাস জমি রেজিস্টার (৮ নম্বর রেজিস্টার) দেখে নিশ্চিত হোন যে এই দাগটি খাস তালিকাভুক্ত নয়।',
          instructionEn: 'Visit the local Union Tahsil Office and ask the officer to verify whether the plot appears in Register VIII of khas lands.',
          keyItemsBn: ['৮ নম্বর রেজিস্টারের এন্ট্রি', 'তহশিলদারের লিখিত বা মৌখিক মতামত', 'হোল্ডিংয়ে খাস খতিয়ান উল্লেখ'],
          keyItemsEn: ['Register VIII entry status', 'Tahsil officer confirmation', 'Holding references to khas accounts'],
        },
        {
          stepNumber: 4,
          titleBn: 'অর্পিত সম্পত্তির তালিকা ও গেজেট মিলিয়ে দেখা',
          titleEn: 'Cross-reference with official Vested Property lists and gazettes',
          instructionBn: 'উপজেলা ভূমি অফিসের কানুনগো বা খাস জমি শাখায় গিয়ে অর্পিত সম্পত্তির গেজেট ও "ক" বা "খ" তফসিলের তালিকায় দাগ নম্বরটি আছে কি না তা যাচাই করুন।',
          instructionEn: 'Check the upazila land office kanungo branch to ensure the plot is not scheduled in vested property gazettes.',
          keyItemsBn: ['অর্পিত সম্পত্তির তালিকাভুক্ত কি না', 'পূর্বে কোনো অবমুক্তির আদেশ হয়েছে কি না', 'ট্রাইব্যুনালের কোনো রায় আছে কি না'],
          keyItemsEn: ['Listed in vested property schedule', 'Any formal release decree', 'Tribunal court rulings'],
        },
        {
          stepNumber: 5,
          titleBn: 'বন্দোবস্তকৃত খাস জমির ক্ষেত্রে হস্তান্তরের বিধিনিষেধ পরীক্ষা',
          titleEn: 'Examine transfer restrictions on settled agricultural lease land',
          instructionBn: 'বিক্রেতা যদি সরকার থেকে ভূমিহীন হিসেবে খাস জমি বন্দোবস্ত পেয়ে থাকেন, তবে মনে রাখবেন খাস জমি সাধারণত হস্তান্তরযোগ্য নয়। সরকারি অনুমতি ছাড়া তা বিক্রি করলে বরাদ্দ স্বয়ংক্রিয়ভাবে বাতিল হয়।',
          instructionEn: 'Government agricultural lease land granted to landless citizens strictly bars private sale without prior state permission.',
          keyItemsBn: ['বন্দোবস্ত কবুলিয়তের শর্তাবলি', 'হস্তান্তরযোগ্যতার সরকারি অনুমতিপত্র', 'বরাদ্দ বাতিলের ঝুঁকি'],
          keyItemsEn: ['Settlement deed covenants', 'Official transfer permission certificate', 'Risk of lease cancellation'],
        },
      ],
    },
    whereToVerify: {
      introBn: 'জমি সরকারি খাস কি না তা নিশ্চিত করতে সরাসরি এই অফিসগুলোতে যোগাযোগ করুন:',
      introEn: 'Inquire in person with these administrative offices to establish khas status:',
      offices: [
        {
          nameBn: 'ইউনিয়ন / পৌর ভূমি অফিস (তহশিল অফিস)',
          nameEn: 'Union / Pourashava Land Office (Tahsil Office)',
          roleBn: '৮ নম্বর খাস রেজিস্টার ও স্থানীয় খাস জমির ভৌগোলিক অবস্থান সরাসরি তল্লাশি করুন।',
          roleEn: 'Inspect Register VIII of khas properties and verify field boundaries.',
        },
        {
          nameBn: 'উপজেলা সহকারী কমিশনার (ভূমি) কার্যালয় — খাস জমি শাখা',
          nameEn: 'Upazila AC (Land) Office — Khas Land Section',
          roleBn: 'উপজেলা পর্যায়ের খাস জমি, অর্পিত সম্পত্তি এবং সায়রাত মহালের সরকারি রেকর্ড পরীক্ষা করুন।',
          roleEn: 'Examine upazila archives for government khas land, vested estates, and waterbody leases.',
        },
        {
          nameBn: 'জেলা প্রশাসকের কার্যালয় — রাজস্ব শাখা',
          nameEn: 'Deputy Commissioner Office — Revenue Section',
          roleBn: 'জেলাভিত্তিক অর্পিত ও পরিত্যক্ত সম্পত্তির তালিকা এবং সরকারি খাস ব্যবস্থাপনা রেকর্ড যাচাই করতে।',
          roleEn: 'Review district-level vested property schedules and government estate management records.',
        },
      ],
      portals: [
        {
          nameBn: 'ভূমি মন্ত্রণালয়ের সেবার প্রবেশদ্বার',
          nameEn: 'Ministry of Land Service Portal',
          url: 'https://www.land.gov.bd/',
          noteBn: 'সরকারি খাস জমি ব্যবস্থাপনা সংক্রান্ত নাগরিক নীতিমালা ও নির্দেশনা জানতে।',
          noteEn: 'Official government portal for land policies, circulars, and khas land citizen guidelines.',
        },
      ],
    },
    ifDiscrepancyFound: {
      warningBn: 'যদি জমিটি সরকারি খাস, অর্পিত বা পরিত্যক্ত সম্পত্তি হওয়ার প্রমাণ বা সন্দেহ পাওয়া যায়:',
      warningEn: 'If any evidence or suspicion indicates government khas, vested, or abandoned status:',
      actions: [
        {
          titleBn: 'তাৎক্ষণিকভাবে ক্রয়ের সকল চিন্তা ও আর্থিক লেনদেন বন্ধ করুন',
          titleEn: 'Immediately abort all negotiations and monetary transactions',
          guidanceBn: 'সরকারি জমিতে কখনোই বৈধ ব্যক্তিগত মালিকানা তৈরি হয় না। কেউ "ম্যানেজ করে দেব" বললে তা স্পষ্ট প্রতারণা।',
          guidanceEn: 'Never enter into agreements for public land. Claims that government ownership can be privately arranged are fraudulent.',
        },
        {
          titleBn: 'বিক্রেতার দীর্ঘদিনের দখলের অজুহাতে বিভ্রান্ত হবেন না',
          titleEn: 'Do not be misled by claims of long-term adverse possession',
          guidanceBn: 'সরকারি জমিতে ৫০ বছর দখল থাকলেও তামাদি আইনের অধীনে ব্যক্তিস্বত্ব তৈরি হয় না; সরকার যেকোনো সময় নোটিশ দিয়ে উচ্ছেদ করতে পারে।',
          guidanceEn: 'Long adverse possession against the state confers no private title; eviction without compensation may occur at any time.',
        },
        {
          titleBn: 'সহকারী কমিশনার (ভূমি) অফিসে লিখিতভাবে তথ্য জানতে চান',
          titleEn: 'Request formal written clarification from the AC (Land) Office',
          guidanceBn: 'দাগ নম্বরটি উল্লেখ করে জমিটির প্রকৃত সরকারি স্থিতি জানতে এসিল্যান্ড বরাবর লিখিত তথ্য অধিকার আবেদন করুন।',
          guidanceEn: 'File a written inquiry with the Assistant Commissioner (Land) citing the plot number to confirm official classification.',
        },
        {
          titleBn: 'প্রতারণামূলক বিক্রির চেষ্টা হলে স্থানীয় ভূমি অফিসে অবগত করুন',
          titleEn: 'Report fraudulent attempts to sell public property to authorities',
          guidanceBn: 'সরকারি সম্পত্তি বিক্রি করার চেষ্টা বেআইনি হওয়ায় বিষয়টি স্থানীয় প্রশাসনের নজরে আনা একজন সুনাগরিকের দায়িত্ব।',
          guidanceEn: 'Informing local revenue administration about fraudulent attempts to dispose of government land protects public assets.',
        },
      ],
    },
    preparationPrompt: {
      leadBn: 'জমিটি সরকারি খাস কি না তা অনুসন্ধানের প্রয়োজনীয় তথ্য সংগ্রহ করেছেন কি না চিহ্নিত করুন:',
      leadEn: 'Track whether you have checked government khas and vested property records for this plot:',
      disclaimerBn: 'স্মারক: জমিটি খাস নয় বলে বিক্রেতার দেওয়া তথ্য কখনোই চূড়ান্ত নয়; মাঠপর্যায়ের ভূমি অফিসে রেজিস্টার মিলিয়ে নিশ্চিত হতে হবে।',
      disclaimerEn: 'Reminder: A seller’s assertion that land is not khas is never conclusive; field confirmation with the local land office is required.',
    },
  },

  acquisition: {
    id: 'acquisition',
    whatToCheck: {
      summaryBn: 'জমিটি সরকারের কোনো উন্নয়ন প্রকল্পের (যেমন: মহাসড়ক প্রশস্তকরণ, রেলপথ, অর্থনৈতিক অঞ্চল, বিদ্যুৎ কেন্দ্র বা বাঁধ নির্মাণ) জন্য অধিগ্রহণ (Land Acquisition - LA) বা হুকুমদখল করা হয়েছে কি না, অথবা কোনো অধিগ্রহণের নোটিশ জারি হয়েছে কি না তা যাচাই করুন।',
      summaryEn: 'Verify whether the land has been acquired or requisitioned for public development projects (e.g. highways, railways, economic zones, power plants) or is subject to pending land acquisition (LA) notices.',
      whyItMattersBn: 'স্থাবর সম্পত্তি অধিগ্রহণ ও হুকুমদখল আইন ২০১৭ অনুসারে অধিগ্রহণের প্রাথমিক নোটিশ (৪ ধারা) জারি হওয়ার পর জমি বিক্রি বা হস্তান্তর করা সম্পূর্ণ নিষিদ্ধ। অধিগ্রহণাধীন জমি কিনলে জমির দখল সরকারি প্রকল্পে চলে যাবে এবং ক্রেতা কোনো ক্ষতিপূরণ পাবেন না।',
      whyItMattersEn: 'Under the Acquisition and Requisition of Immovable Property Act 2017, property transfer after Section 4 notice is unlawful. The buyer will lose possession to the public project while compensation is paid to previous recorded awardees.',
    },
    requiredDocuments: {
      disclaimerBn: 'সতর্কতা: কোনো একক ওয়েবসাইট বা দলিল দেশের সব জমির অধিগ্রহণ নোটিশ উন্মুক্তভাবে দেখায় না বা অধিগ্রহণমুক্তির চূড়ান্ত প্রমাণ নয়। জেলা প্রশাসকের কার্যালয়ের ভূমি অধিগ্রহণ (এলএ) শাখায় গিয়ে তথ্য যাচাই করা আবশ্যক।',
      disclaimerEn: 'Notice: No single online platform or document conclusively proves lack of acquisition nationwide. Inquiring at the Deputy Commissioner’s LA Branch is mandatory.',
      items: [
        {
          nameBn: 'জেলা প্রশাসকের এলএ শাখার নোটিশ (৪ ধারা, ৭ ধারা বা ৮ ধারা সংক্রান্ত বিজ্ঞপ্তি)',
          nameEn: 'District LA Branch Acquisition Notices (Section 4, 7, or 8)',
          purposeBn: 'জমিটি অধিগ্রহণের প্রাথমিক প্রস্তাবভুক্ত (৪ ধারা), যৌথ তদন্তাধীন (৭ ধারা) নাকি ক্ষতিপূরণ নির্ধারণাধীন (৮ ধারা) তা জানা।',
          purposeEn: 'Determines whether Section 4 (preliminary notice), Section 7 (joint verification), or Section 8 (award declaration) applies.',
        },
        {
          nameBn: 'জাতীয় ও স্থানীয় দৈনিক পত্রিকায় প্রকাশিত অধিগ্রহণের গণবিজ্ঞপ্তি',
          nameEn: 'Public Acquisition Gazettes and Press Notifications',
          purposeBn: 'সংশ্লিষ্ট প্রকল্পের আওতায় কোন কোন মৌজা ও দাগ অধিগ্রহণ করা হচ্ছে তার সরকারি তফসিল পর্যালোচনা।',
          purposeEn: 'Reviews published government gazettes and press schedules listing project-affected mouzas and plots.',
        },
        {
          nameBn: 'এলএ কেস (LA Case) নম্বর ও প্রকল্প পরিচিতি',
          nameEn: 'LA Case Reference and Project Scope Profile',
          purposeBn: 'সুনির্দিষ্ট এলএ মামলা নম্বর (যেমন: এলএ কেস ০৫/২০২৩-২৪) ও অধিগ্রহণকারী সরকারি সংস্থার নাম জানা।',
          purposeEn: 'Identifies the precise LA case reference and the acquiring agency (RHD, Railways, BEZA, etc.).',
        },
        {
          nameBn: 'প্রকল্প এলাইনমেন্ট ম্যাপ ও অধিগ্রহণ লেআউট শিট',
          nameEn: 'Project Alignment Map and Acquisition Layout Sheet',
          purposeBn: 'দাগের সম্পূর্ণ জমি নাকি আংশিক জমি অধিগ্রহণের লাল সীমানার মধ্যে পড়েছে তা নিখুঁতভাবে চিহ্নিত করা।',
          purposeEn: 'Clarifies whether the whole plot or a partial segment falls within the project boundary line.',
        },
        {
          nameBn: 'ক্ষতিপূরণ পরিশোধ সংক্রান্ত নোটিশ বা অ্যাওয়ার্ড তালিকা',
          nameEn: 'Compensation Award Notice & Payment Sanction Sheet',
          purposeBn: 'জমিটির ক্ষতিপূরণের টাকা ইতোমধ্যে অন্য কেউ তুলে নিয়েছে কি না এবং জমিটি সরকারি দখলে চলে গেছে কি না তা প্রমাণ করা।',
          purposeEn: 'Verifies whether compensation was already drawn by former owners and legal possession transferred to the state.',
        },
      ],
    },
    howToCompare: {
      introBn: 'অধিগ্রহণের ঝুঁকি এড়াতে নিচের পদক্ষেপগুলো যথাযথভাবে অনুসরণ করুন:',
      introEn: 'Follow these numbered, actionable steps to audit land acquisition risks:',
      steps: [
        {
          stepNumber: 1,
          titleBn: 'মৌজা ও দাগ নম্বর দিয়ে এলএ মামলার তফসিল মিলানো',
          titleEn: 'Match target mouza and plot numbers against project LA schedules',
          instructionBn: 'জেলা প্রশাসকের এলএ শাখা কর্তৃক প্রকাশিত বিজ্ঞপ্তিতে আপনার প্রস্তাবিত জমির মৌজা, জেএল এবং সাবেক ও হাল দাগ নম্বর তালিকাভুক্ত আছে কি না তা খুঁটিয়ে দেখুন।',
          instructionEn: 'Check the official project notification schedules to confirm whether your mouza, JL, and former/current plot numbers are listed.',
          keyItemsBn: ['মৌজা ও জেএল নম্বর', 'অধিগ্রহণকৃত দাগের তালিকা', 'এলএ কেস নম্বর'],
          keyItemsEn: ['Mouza and JL number', 'Acquired plot list', 'LA case reference'],
        },
        {
          stepNumber: 2,
          titleBn: 'সম্পূর্ণ নাকি আংশিক অধিগ্রহণ তা নির্দিষ্ট করা',
          titleEn: 'Determine whether acquisition is whole or partial',
          instructionBn: 'দাগের মোট জমির কত শতাংশ অধিগ্রহণের প্রস্তাবিত নোটিশে রয়েছে তা পরীক্ষা করুন। আংশিক অধিগ্রহণ হলে অবশিষ্ট অংশ আলাদা দাগে নামজারি ও সীমানা নির্ধারণ না হওয়া পর্যন্ত ক্রয় ঝুঁকিপূর্ণ।',
          instructionEn: 'Inspect what acreage is affected. Buying remaining unacquired land without segregated survey and boundary delineation carries grave boundary disputes.',
          keyItemsBn: ['দাগের মোট জমি বনাম অধিগ্রহণকৃত জমি', 'অবশিষ্ট জমির পরিমাণ ও নকশা', 'প্রবেশাধিকার ও রাস্তার অবস্থা'],
          keyItemsEn: ['Total plot area vs acquired acreage', 'Residual area layout and map', 'Road access and frontage'],
        },
        {
          stepNumber: 3,
          titleBn: 'নোটিশের ধারা ও বর্তমান আইনি স্থিতি নিরূপণ',
          titleEn: 'Review statutory notice sections (Sec 4, 7, and 8)',
          instructionBn: '৪ ধারার নোটিশ জারি হওয়ার পর জমি কেনাবেচা বা স্থাপনা নির্মাণ বেআইনি। ৭ ধারা বা ৮ ধারা সম্পন্ন হয়ে থাকলে জমিটি ইতিমধ্যেই সরকারি সম্পত্তিতে রূপান্তরিত হয়ে গেছে।',
          instructionEn: 'Property transfer after Section 4 is void under law. Once Section 7 or 8 is issued, ownership legally passes to the acquiring authority.',
          keyItemsBn: ['নোটিশ জারির তারিখ', 'কোন ধারার নোটিশ কার্যকর', 'ক্ষতিপূরণের নোটিশ হয়েছে কি না'],
          keyItemsEn: ['Notice publication date', 'Statutory section currently in force', 'Award notice status'],
        },
        {
          stepNumber: 4,
          titleBn: 'সরেজমিন পরিদর্শন: জরিপ খুঁটি, লাল নিশান ও প্রজেক্ট সাইনবোর্ড',
          titleEn: 'Site inspection: survey boundary markers, red flags, and signage',
          instructionBn: 'জমিতে সরেজমিনে যান। সরকারি জরিপকারী কর্তৃক পুঁতে দেওয়া লাল খুঁটি, কংক্রিট পিলার, চেইনেজ মার্কার বা প্রকল্প কর্তৃপক্ষের সাইনবোর্ড আছে কি না নিবিড়ভাবে পর্যবেক্ষণ করুন।',
          instructionEn: 'Inspect the parcel on foot for government surveyor red boundary markers, concrete benchmark pillars, chainage pegs, or project signboards.',
          keyItemsBn: ['সরকারি জরিপ খুঁটি বা লাল নিশান', 'প্রকল্পের সীমানা পিলার', 'আশপাশের লোকজনের বক্তব্য'],
          keyItemsEn: ['Surveyor red flags/pegs', 'Project boundary boundary pillars', 'Neighbor testimony regarding surveyors'],
        },
        {
          stepNumber: 5,
          titleBn: 'জেলা প্রশাসকের এলএ শাখায় সরাসরি অনুসন্ধান',
          titleEn: 'Direct official verification at the District DC LA Branch',
          instructionBn: 'অনলাইন তথ্যের ওপর সম্পূর্ণ নির্ভর না করে সরাসরি জেলা প্রশাসকের কার্যালয়ের ভূমি অধিগ্রহণ শাখায় গিয়ে সংশ্লিষ্ট দাগে কোনো এলএ কেস বা অধিগ্রহণ প্রস্তাব চলমান আছে কি না তা জেনে নিন।',
          instructionEn: 'Visit the Deputy Commissioner’s LA Branch in person to confirm whether any active project acquisition proposal touches this parcel.',
          keyItemsBn: ['এলএ শাখার কর্মকর্তার মতামত', 'প্রকল্প মাস্টারপ্ল্যানে জমিটির অবস্থান', 'অ্যাওয়ার্ড বইয়ের স্থিতি'],
          keyItemsEn: ['LA officer written/verbal confirmation', 'Master plan alignment placement', 'Award register status'],
        },
      ],
    },
    whereToVerify: {
      introBn: 'অধিগ্রহণের নোটিশ ও বর্তমান স্থিতি নিশ্চিত করতে এখানে যোগাযোগ করুন:',
      introEn: 'Contact these administrative authorities to verify acquisition status:',
      offices: [
        {
          nameBn: 'জেলা প্রশাসকের কার্যালয় — ভূমি অধিগ্রহণ (এলএ) শাখা',
          nameEn: 'Deputy Commissioner’s Office — Land Acquisition (LA) Branch',
          roleBn: 'জেলাভিত্তিক সকল উন্নয়ন প্রকল্পের এলএ কেস, গেজেট বিজ্ঞপ্তি এবং অধিগ্রহণকৃত দাগের তালিকা আনুষ্ঠানিকভাবে তল্লাশি করুন।',
          roleEn: 'Inspect official district LA case files, gazette notifications, and scheduled plot records.',
        },
        {
          nameBn: 'প্রকল্প বাস্তবায়নকারী সংস্থা (সওজ, রেলপথ, বেজা, সেতু কর্তৃপক্ষ ইত্যাদি)',
          nameEn: 'Project Executing Agency (RHD, Railways, BEZA, BBA, etc.)',
          roleBn: 'ভবিষ্যৎ প্রকল্পের রাইট-অব-ওয়ে (Right of Way - ROW) এবং এলাইনমেন্ট ম্যাপে জমিটি পড়েছে কি না তা নিশ্চিত হতে।',
          roleEn: 'Verify if the land lies within the approved project alignment or Right-of-Way boundaries.',
        },
      ],
      portals: [
        {
          nameBn: 'সরকারি অধিগ্রহণ ব্যবস্থাপনা সেবা (LARMS)',
          nameEn: 'Official Land Acquisition Management Service (LARMS)',
          url: 'https://larms.land.gov.bd/',
          noteBn: 'ভূমি অধিগ্রহণ সংক্রান্ত কেন্দ্রীয় সরকারি নোটিশ ও ব্যবস্থাপনা সেবা (উল্লেখ্য: সব দাগের উন্মুক্ত সাধারণ অনুসন্ধান এখানে সম্ভব নয়)।',
          noteEn: 'Central government portal for land acquisition management (note: does not offer universal plot-level open search).',
        },
      ],
    },
    ifDiscrepancyFound: {
      warningBn: 'যদি জমিটি অধিগ্রহণের নোটিশভুক্ত থাকে বা প্রস্তাবনা চলমান থাকে:',
      warningEn: 'If the plot is subject to an acquisition notice or active project alignment:',
      actions: [
        {
          titleBn: 'অবিলম্বে চুক্তি ও বায়না প্রক্রিয়া সম্পূর্ণ বাতিল করুন',
          titleEn: 'Immediately cancel all purchase and earnest money agreements',
          guidanceBn: '৪ ধারা জারির পর জমি কেনা আইনত দণ্ডনীয় ও অকার্যকর। বিক্রেতার কথায় বিভ্রান্ত হয়ে টাকা দিলে তা আর ফেরত পাওয়া যাবে না।',
          guidanceEn: 'Buying land after Section 4 notice is legally void. Recovering earnest money from an unscrupulous seller is exceedingly difficult.',
        },
        {
          titleBn: '"নোটিশ প্রত্যাহার হবে" বা "ক্ষতিপূরণ আপনাকে দেব"—এমন কথা বিশ্বাস করবেন না',
          titleEn: 'Do not trust promises that notices will be withdrawn or awards transferred',
          guidanceBn: 'অধিগ্রহণের ক্ষতিপূরণ তোলার জটিলতা অত্যন্ত বেশি এবং সরকারি প্রজেক্টে জমি চলে গেলে ব্যক্তিগত কোনো প্রতিকার পাওয়া যায় না।',
          guidanceEn: 'Drawing compensation awards as a post-notice buyer is legally barred, and you will lose possession without redress.',
        },
        {
          titleBn: 'আংশিক অধিগ্রহণের ক্ষেত্রে অবশিষ্ট অংশ আলাদা না হওয়া পর্যন্ত অপেক্ষা করুন',
          titleEn: 'Wait for formal segregation and demarcation in partial acquisitions',
          guidanceBn: 'যদি দাগের একাংশ অধিগ্রহণ হয়ে থাকে, তবে অবশিষ্ট অংশের আলাদা দাগ নম্বর, সীমানা নির্ধারণ ও নতুন নামজারি না হওয়া পর্যন্ত জমি কেনা স্থগিত রাখুন।',
          guidanceEn: 'In partial acquisitions, postpone purchase until residual land is formally segregated, demarcated, and mutated under a new plot.',
        },
        {
          titleBn: 'জেলা প্রশাসকের এলএ শাখা থেকে পরিষ্কার ছাড়পত্র নিন',
          titleEn: 'Require an official written clearance from the DC LA Branch',
          guidanceBn: 'কোনো সন্দেহ দেখা দিলে এলএ শাখা থেকে দাগটির বিষয়ে সুনির্দিষ্ট আইনি প্রত্যয়ন নিয়ে সিদ্ধান্ত নিন।',
          guidanceEn: 'Insist on receiving clear official confirmation from the LA branch before committing to any property deal.',
        },
      ],
    },
    preparationPrompt: {
      leadBn: 'জমিটির কোনো সরকারি অধিগ্রহণের নোটিশ আছে কি না সে বিষয়ে খোঁজ নিয়েছেন কি না চিহ্নিত করুন:',
      leadEn: 'Track whether you have investigated land acquisition notices and project scopes:',
      disclaimerBn: 'স্মারক: অনলাইন পোর্টালে তথ্য না থাকা মানেই জমিটি অধিগ্রহণমুক্ত নয়; জেলা প্রশাসকের এলএ শাখায় সরাসরি নিশ্চিত হওয়া জরুরি।',
      disclaimerEn: 'Reminder: Absence of online notice records does not certify the land is unacquired; verifying with the DC LA branch is vital.',
    },
  },
};
