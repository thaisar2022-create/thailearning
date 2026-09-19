export interface QuizQuestion {
  id: number;
  sectionId: number; // 1 to 11
  sectionTitle: string;
  questionNumberInSection: number; // 1 to 10
  question: string;
  thaiWord: string;
  phonetic: string;
  myanmarReading: string;
  category: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const QUIZ_SECTIONS = [
  { id: 1, title: "အခန်း ၁", subtitle: "မိတ်ဆက်နှင့် နာမ်စား", count: 10 },
  { id: 2, title: "အခန်း ၂", subtitle: "နှုတ်ဆက်နှင့် နိုင်ငံများ", count: 10 },
  { id: 3, title: "အခန်း ၃", subtitle: "ကိန်းဂဏန်းနှင့် ငွေကြေး", count: 10 },
  { id: 4, title: "အခန်း ၄", subtitle: "ဈေးဝယ်နှင့် အဝတ်အထည်", count: 10 },
  { id: 5, title: "အခန်း ၅", subtitle: "အချိန်နှင့် နာရီများ", count: 10 },
  { id: 6, title: "အခန်း ၆", subtitle: "ရက်စွဲနှင့် ပြက္ခဒိန်", count: 10 },
  { id: 7, title: "အခန်း ၇", subtitle: "အစားအသောက်နှင့် သစ်သီး", count: 10 },
  { id: 8, title: "အခန်း ၈", subtitle: "လမ်းညွှန်နှင့် ယာဉ်များ", count: 10 },
  { id: 9, title: "အခန်း ၉", subtitle: "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး", count: 10 },
  { id: 10, title: "အခန်း ၁၀", subtitle: "အသက်မွေးဝမ်းကြောင်း", count: 10 },
  { id: 11, title: "အခန်း ၁၁", subtitle: "မိုးလေဝသနှင့် ရာသီဥတု", count: 10 }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ==========================================
  // အခန်း (၁) မိတ်ဆက်ခြင်းနှင့် နာမ်စားများ (Q1 - Q10)
  // ==========================================
  {
    id: 1, sectionId: 1, sectionTitle: "အခန်း (၁) မိတ်ဆက်ခြင်းနှင့် နာမ်စားများ", questionNumberInSection: 1,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ผม", phonetic: "/phom/", myanmarReading: "ဖုန်(မ်)", category: "နာမ်စား",
    options: ["ကျွန်တော် (အမျိုးသားသုံး)", "ကျွန်မ (အမျိုးသမီးသုံး)", "သင် / ခင်ဗျား", "သူ / သူမ"],
    correctAnswerIndex: 0, explanation: "ผม (/phom/) သည် အမျိုးသားသုံး 'ကျွန်တော်' ဖြစ်ပါသည်။"
  },
  {
    id: 2, sectionId: 1, sectionTitle: "အခန်း (၁) မိတ်ဆက်ခြင်းနှင့် နာမ်စားများ", questionNumberInSection: 2,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ดิฉัน", phonetic: "/dì-chán/", myanmarReading: "ဒီချန်(န်)", category: "နာမ်စား",
    options: ["ငါ / ကျုပ်", "ကျွန်မ (အမျိုးသမီးသုံး)", "သူတို့", "လူကြီးမင်း"],
    correctAnswerIndex: 1, explanation: "ดิฉัน (/dì-chán/) သည် ယဉ်ကျေးသောအမျိုးသမီးသုံး 'ကျွန်မ' ဖြစ်ပါသည်။"
  },
  {
    id: 3, sectionId: 1, sectionTitle: "အခန်း (၁) မိတ်ဆက်ခြင်းနှင့် နာမ်စားများ", questionNumberInSection: 3,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "คุณ", phonetic: "/khun/", myanmarReading: "ခူ(န်)", category: "နာမ်စား",
    options: ["အဖေ", "သင် / မင်း / ခင်ဗျား", "ဆရာ", "သူဌေး"],
    correctAnswerIndex: 1, explanation: "คุณ (/khun/) သည် 'သင် / ခင်ဗျား / ရှင်' ဖြစ်ပါသည်။"
  },
  {
    id: 4, sectionId: 1, sectionTitle: "အခန်း (၁) မိတ်ဆက်ခြင်းနှင့် နာမ်စားများ", questionNumberInSection: 4,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "พวกเรา", phonetic: "/phûak-raw/", myanmarReading: "ဖုဝက်(က်)ရောင်(ဝ်)", category: "နာမ်စား",
    options: ["သူတို့", "ငါတို့ / ကျွန်ုပ်တို့", "မင်းတို့", "ဆွေမျိုးများ"],
    correctAnswerIndex: 1, explanation: "พวกเรา (/phûak-raw/) သည် 'ငါတို့ / ကျွန်ုပ်တို့' ဖြစ်ပါသည်။"
  },
  {
    id: 5, sectionId: 1, sectionTitle: "အခန်း (၁) မိတ်ဆက်ခြင်းနှင့် နာမ်စားများ", questionNumberInSection: 5,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ท่าน", phonetic: "/thâan/", myanmarReading: "ထာန့်(န်)", category: "နာမ်စား",
    options: ["ညီမလေး", "သူငယ်ချင်း", "လူကြီးမင်း / အရှင်သခင်", "ကလေး"],
    correctAnswerIndex: 2, explanation: "ท่าน (/thâan/) သည် လေးစားစွာခေါ်သော 'လူကြီးမင်း' ဖြစ်ပါသည်။"
  },
  {
    id: 6, sectionId: 1, sectionTitle: "အခန်း (၁) မိတ်ဆက်ခြင်းနှင့် နာမ်စားများ", questionNumberInSection: 6,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "พ่อ", phonetic: "/phɔ̂ɔ/", myanmarReading: "ဖော့", category: "မိသားစု",
    options: ["အဖေ", "အမေ", "အစ်ကို", "ဦးလေး"],
    correctAnswerIndex: 0, explanation: "พ่อ (/phɔ̂ɔ/) သည် 'အဖေ' ဖြစ်ပါသည်။"
  },
  {
    id: 7, sectionId: 1, sectionTitle: "အခန်း (၁) မိတ်ဆက်ခြင်းနှင့် နာမ်စားများ", questionNumberInSection: 7,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "แม่", phonetic: "/mɛ̂ɛ/", myanmarReading: "မဲ့", category: "မိသားစု",
    options: ["ဒေါ်လေး", "အမေ", "အဘွား", "အစ်မ"],
    correctAnswerIndex: 1, explanation: "แม่ (/mɛ̂ɛ/) သည် 'အမေ' ဖြစ်ပါသည်။"
  },
  {
    id: 8, sectionId: 1, sectionTitle: "အခန်း (၁) မိတ်ဆက်ခြင်းနှင့် နာမ်စားများ", questionNumberInSection: 8,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "พี่ชาย", phonetic: "/phîi-chaay/", myanmarReading: "ဖိချိုင်း(ယ်)", category: "မိသားစု",
    options: ["ညီလေး", "အစ်ကို", "အစ်မ", "ဦးလေး"],
    correctAnswerIndex: 1, explanation: "พี่ชาย (/phîi-chaay/) သည် 'အစ်ကို' ဖြစ်ပါသည်။"
  },
  {
    id: 9, sectionId: 1, sectionTitle: "အခန်း (၁) မိတ်ဆက်ခြင်းနှင့် နာမ်စားများ", questionNumberInSection: 9,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "น้องสาว", phonetic: "/nɔ́ɔŋ-săaw/", myanmarReading: "နော(င်)စောင်(ဝ်)", category: "မိသားစု",
    options: ["ညီမ / နှမ", "အစ်မကြီး", "အဒေါ်", "မြေးမလေး"],
    correctAnswerIndex: 0, explanation: "น้องสาว (/nɔ́ɔŋ-săaw/) သည် 'ညီမ / နှမ' ဖြစ်ပါသည်။"
  },
  {
    id: 10, sectionId: 1, sectionTitle: "အခန်း (၁) မိတ်ဆက်ခြင်းနှင့် နာမ်စားများ", questionNumberInSection: 10,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "หลาน", phonetic: "/lăan/", myanmarReading: "လာန်(န်)", category: "မိသားစု",
    options: ["ဆွေမျိုး", "တူ / တူမ / မြေး", "သူငယ်ချင်း", "အိမ်နီးချင်း"],
    correctAnswerIndex: 1, explanation: "หลาน (/lăan/) သည် 'တူ / တူမ / မြေး' ဖြစ်ပါသည်။"
  },

  // ==========================================
  // အခန်း (၂) နှုတ်ဆက်ခြင်းနှင့် နိုင်ငံများ (Q11 - Q20)
  // ==========================================
  {
    id: 11, sectionId: 2, sectionTitle: "အခန်း (၂) နှုတ်ဆက်ခြင်းနှင့် နိုင်ငံများ", questionNumberInSection: 1,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "สวัสดีครับ", phonetic: "/sa-wàt-dii-khráp/", myanmarReading: "စဝပ်(တ်)ဒီးခရပ်(ပ်)", category: "နှုတ်ဆက်ခြင်း",
    options: ["ကျေးဇူးတင်ပါတယ်", "မင်္ဂလာပါ (အမျိုးသားသုံး)", "တောင်းပန်ပါတယ်", "သွားခွင့်ပြုပါဦး"],
    correctAnswerIndex: 1, explanation: "สวัสดีครับ သည် အမျိုးသားသုံး 'မင်္ဂလာပါ' ဖြစ်ပါသည်။"
  },
  {
    id: 12, sectionId: 2, sectionTitle: "အခန်း (၂) နှုတ်ဆက်ခြင်းနှင့် နိုင်ငံများ", questionNumberInSection: 2,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ขอบคุณ", phonetic: "/khɔ̀ɔp-khun/", myanmarReading: "ခေါ်(ပ်)ခူ(န်)", category: "နှုတ်ဆက်ခြင်း",
    options: ["ကိစ္စမရှိပါဘူး", "ကျေးဇူးတင်ပါသည်", "နေကောင်းလား", "နောက်မှတွေ့မယ်"],
    correctAnswerIndex: 1, explanation: "ขอบคุณ (/khɔ̀ɔp-khun/) သည် 'ကျေးဇူးတင်ပါသည်' ဖြစ်ပါသည်။"
  },
  {
    id: 13, sectionId: 2, sectionTitle: "အခန်း (၂) နှုတ်ဆက်ခြင်းနှင့် နိုင်ငံများ", questionNumberInSection: 3,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ขอโทษ", phonetic: "/khɔ̌ɔ-thôot/", myanmarReading: "ခေါ်ထို့(တ်)", category: "နှုတ်ဆက်ခြင်း",
    options: ["တောင်းပန်ပါသည်", "ဝမ်းသာပါသည်", "တွေ့ရတာဝမ်းသာပါတယ်", "မသိပါဘူး"],
    correctAnswerIndex: 0, explanation: "ขอโทษ (/khɔ̌ɔ-thôot/) သည် 'တောင်းပန်ပါသည်' ဖြစ်ပါသည်။"
  },
  {
    id: 14, sectionId: 2, sectionTitle: "အခန်း (၂) နှုတ်ဆက်ခြင်းနှင့် နိုင်ငံများ", questionNumberInSection: 4,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ไม่เป็นไร", phonetic: "/mây-pen-ray/", myanmarReading: "မိုက်(ယ်)ပင်(န်)ရိုင်(ယ်)", category: "နှုတ်ဆက်ခြင်း",
    options: ["မကြိုက်ပါဘူး", "ကိစ္စမရှိပါဘူး / ရပါတယ်", "မစားပါဘူး", "မသွားပါဘူး"],
    correctAnswerIndex: 1, explanation: "ไม่เป็นไร (/mây-pen-ray/) သည် 'ကိစ္စမရှိပါဘူး / ရပါတယ်' ဖြစ်ပါသည်။"
  },
  {
    id: 15, sectionId: 2, sectionTitle: "အခန်း (၂) နှုတ်ဆက်ခြင်းနှင့် နိုင်ငံများ", questionNumberInSection: 5,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "สบายดีไหม", phonetic: "/sà-baay-dii-máy/", myanmarReading: "စဘိုင်(ယ်)ဒီးမိုင်(ယ်)", category: "နှုတ်ဆက်ခြင်း",
    options: ["ထမင်းစားပြီးပြီလား", "နေကောင်းပါသလား", "နာမည်ဘယ်လိုခေါ်လဲ", "ဘယ်သွားမလို့လဲ"],
    correctAnswerIndex: 1, explanation: "สบายดีไหม (/sà-baay-dii-máy/) သည် 'နေကောင်းပါသလား' ဟု မေးမြန်းခြင်း ဖြစ်ပါသည်။"
  },
  {
    id: 16, sectionId: 2, sectionTitle: "အခန်း (၂) နှုတ်ဆက်ခြင်းနှင့် နိုင်ငံများ", questionNumberInSection: 6,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ประเทศพม่า", phonetic: "/prà-thêet-pha-mâa/", myanmarReading: "ပရထေ့(တ်)ဖမာ့", category: "နိုင်ငံများ",
    options: ["ထိုင်းနိုင်ငံ", "မြန်မာနိုင်ငံ", "လာအိုနိုင်ငံ", "တရုတ်နိုင်ငံ"],
    correctAnswerIndex: 1, explanation: "ประเทศพม่า သည် 'မြန်မာနိုင်ငံ' ဖြစ်ပါသည်။"
  },
  {
    id: 17, sectionId: 2, sectionTitle: "အခန်း (၂) နှုတ်ဆက်ခြင်းနှင့် နိုင်ငံများ", questionNumberInSection: 7,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "กรุงเทพฯ", phonetic: "/krùŋ-thêep/", myanmarReading: "ကရုင်(င်)ထေ့(ပ်)", category: "မြို့များ",
    options: ["ရန်ကုန်မြို့", "ချင်းမိုင်မြို့", "ဘန်ကောက်မြို့", "မန္တလေးမြို့"],
    correctAnswerIndex: 2, explanation: "กรุงเทพฯ (/krùŋ-thêep/) သည် ထိုင်းနိုင်ငံ၏ မြို့တော် 'ဘန်ကောက်မြို့' ဖြစ်ပါသည်။"
  },
  {
    id: 18, sectionId: 2, sectionTitle: "အခန်း (၂) နှုတ်ဆက်ခြင်းနှင့် နိုင်ငံများ", questionNumberInSection: 8,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ภาษาไทย", phonetic: "/phaa-săa-thay/", myanmarReading: "ဖားစာထိုင်း(ယ်)", category: "ဘာသာစကား",
    options: ["အင်္ဂလိပ်စာ", "ထိုင်းဘာသာစကား", "မြန်မာစာ", "တရုတ်စကား"],
    correctAnswerIndex: 1, explanation: "ภาษาไทย (/phaa-săa-thay/) သည် 'ထိုင်းဘာသာစကား' ဖြစ်ပါသည်။"
  },
  {
    id: 19, sectionId: 2, sectionTitle: "အခန်း (၂) နှုတ်ဆက်ခြင်းနှင့် နိုင်ငံများ", questionNumberInSection: 9,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "คนจีน", phonetic: "/khon-jiin/", myanmarReading: "ခွန်(န်)ကျင်း(န်)", category: "လူမျိုး",
    options: ["ဂျပန်လူမျိုး", "တရုတ်လူမျိုး", "ကိုရီးယားလူမျိုး", "အမေရိကန်လူမျိုး"],
    correctAnswerIndex: 1, explanation: "คนจีน (/khon-jiin/) သည် 'တရုတ်လူမျိုး' ဖြစ်ပါသည်။"
  },
  {
    id: 20, sectionId: 2, sectionTitle: "အခန်း (၂) နှုတ်ဆက်ခြင်းနှင့် နိုင်ငံများ", questionNumberInSection: 10,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ยินดีที่ได้รู้จัก", phonetic: "/yin-dii-thîi-dâay-rúu-jàk/", myanmarReading: "ယင်(န်)ဒီးထိဒိုက်(ယ်)ရူးကျက်(က်)", category: "နှုတ်ဆက်ခြင်း",
    options: ["သွားခွင့်ပြုပါဦး", "တွေ့ဆုံရတာ ဝမ်းသာပါတယ်", "ကျေးဇူးပြု၍ စောင့်ပါ", "ဘယ်သွားမလို့လဲ"],
    correctAnswerIndex: 1, explanation: "ยินดีที่ได้รู้จัก သည် 'သိကျွမ်းရတာ ဝမ်းသာပါတယ်' ဖြစ်ပါသည်။"
  },

  // ==========================================
  // အခန်း (၃) ကိန်းဂဏန်းနှင့် ငွေရေးကြေးရေး (Q21 - Q30)
  // ==========================================
  {
    id: 21, sectionId: 3, sectionTitle: "အခန်း (၃) ကိန်းဂဏန်းနှင့် ငွေရေးကြေးရေး", questionNumberInSection: 1,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "หนึ่งร้อย", phonetic: "/nʉ̀ŋ-rɔ́ɔy/", myanmarReading: "နင်(င်)ရော်(ယ်)", category: "ကိန်းဂဏန်း",
    options: ["တစ်ဆယ် (၁၀)", "တစ်ရာ (၁၀၀)", "တစ်ထောင် (၁,၀၀၀)", "တစ်သောင်း (၁၀,၀၀၀)"],
    correctAnswerIndex: 1, explanation: "หนึ่งร้อย (/nʉ̀ŋ-rɔ́ɔy/) သည် 'တစ်ရာ (၁၀၀)' ဖြစ်ပါသည်။"
  },
  {
    id: 22, sectionId: 3, sectionTitle: "အခန်း (၃) ကိန်းဂဏန်းနှင့် ငွေရေးကြေးရေး", questionNumberInSection: 2,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "หนึ่งพัน", phonetic: "/nʉ̀ŋ-phan/", myanmarReading: "နင်(င်)ဖန်(န်)", category: "ကိန်းဂဏန်း",
    options: ["တစ်ရာ", "တစ်ထောင် (၁,၀၀၀)", "တစ်သောင်း", "တစ်သိန်း"],
    correctAnswerIndex: 1, explanation: "หนึ่งพัน (/nʉ̀ŋ-phan/) သည် 'တစ်ထောင် (၁,၀၀၀)' ဖြစ်ပါသည်။"
  },
  {
    id: 23, sectionId: 3, sectionTitle: "အခန်း (၃) ကိန်းဂဏန်းနှင့် ငွေရေးကြေးရေး", questionNumberInSection: 3,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "หนึ่งหมื่น", phonetic: "/nʉ̀ŋ-mʉ̀ʉn/", myanmarReading: "နင်(င်)မွတ်(န်)", category: "ကိန်းဂဏန်း",
    options: ["တစ်ထောင်", "တစ်သောင်း (၁၀,၀၀၀)", "တစ်သိန်း", "တစ်သန်း"],
    correctAnswerIndex: 1, explanation: "หนึ่งหมื่น (/nʉ̀ŋ-mʉ̀ʉn/) သည် 'တစ်သောင်း (၁၀,၀၀၀)' ဖြစ်ပါသည်။"
  },
  {
    id: 24, sectionId: 3, sectionTitle: "အခန်း (၃) ကိန်းဂဏန်းနှင့် ငွေရေးကြေးရေး", questionNumberInSection: 4,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "หนึ่งแสน", phonetic: "/nʉ̀ŋ-sɛ̌ɛn/", myanmarReading: "နင်(င်)ဆဲ(န်)", category: "ကိန်းဂဏန်း",
    options: ["တစ်သောင်း", "တစ်သိန်း (၁၀၀,၀၀၀)", "တစ်သန်း", "တစ်ဆယ်"],
    correctAnswerIndex: 1, explanation: "หนึ่งแสน (/nʉ̀ŋ-sɛ̌ɛn/) သည် 'တစ်သိန်း (၁၀၀,၀၀၀)' ဖြစ်ပါသည်။"
  },
  {
    id: 25, sectionId: 3, sectionTitle: "အခန်း (၃) ကိန်းဂဏန်းနှင့် ငွေရေးကြေးရေး", questionNumberInSection: 5,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "หนึ่งล้าน", phonetic: "/nʉ̀ŋ-láan/", myanmarReading: "နင်(င်)လန်(န်)", category: "ကိန်းဂဏန်း",
    options: ["တစ်သိန်း", "တစ်သန်း (၁,၀၀၀,၀၀၀)", "တစ်ကုဋေ", "တစ်သောင်း"],
    correctAnswerIndex: 1, explanation: "หนึ่งล้าน (/nʉ̀ŋ-láan/) သည် 'တစ်သန်း (၁,၀၀၀,၀၀၀)' ဖြစ်ပါသည်။"
  },
  {
    id: 26, sectionId: 3, sectionTitle: "အခန်း (၃) ကိန်းဂဏန်းနှင့် ငွေရေးကြေးရေး", questionNumberInSection: 6,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ธนาคาร", phonetic: "/tha-naa-khaan/", myanmarReading: "ထနာခါန်(န်)", category: "ငွေကြေး",
    options: ["ဈေးဆိုင်", "ဘဏ်", "စာတိုက်", "ရဲစခန်း"],
    correctAnswerIndex: 1, explanation: "ธนาคาร (/tha-naa-khaan/) သည် 'ဘဏ်' ဖြစ်ပါသည်။"
  },
  {
    id: 27, sectionId: 3, sectionTitle: "အခန်း (၃) ကိန်းဂဏန်းနှင့် ငွေရေးကြေးရေး", questionNumberInSection: 7,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "เงินสด", phonetic: "/ŋən-sòt/", myanmarReading: "ငွန်း(န်)စို(တ်)", category: "ငွေကြေး",
    options: ["အကြွေးငွေ", "ငွေသား", "ငွေလွှဲ", "အတိုး"],
    correctAnswerIndex: 1, explanation: "เงินสด (/ŋən-sòt/) သည် 'ငွေသား' ဖြစ်ပါသည်။"
  },
  {
    id: 28, sectionId: 3, sectionTitle: "အခန်း (၃) ကိန်းဂဏန်းနှင့် ငွေရေးကြေးရေး", questionNumberInSection: 8,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "โอนเงิน", phonetic: "/?oon-ŋən/", myanmarReading: "အို(န်)ငွန်း(န်)", category: "ငွေကြေး",
    options: ["ငွေချေးသည်", "ငွေလွှဲသည်", "ငွေချေသည်", "ငွေသိမ်းသည်"],
    correctAnswerIndex: 1, explanation: "โอนเงิน (/?oon-ŋən/) သည် 'ငွေလွှဲသည်' ဖြစ်ပါသည်။"
  },
  {
    id: 29, sectionId: 3, sectionTitle: "အခန်း (၃) ကိန်းဂဏန်းနှင့် ငွေရေးကြေးရေး", questionNumberInSection: 9,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "เงินเดือน", phonetic: "/ŋən-dʉan/", myanmarReading: "ငွန်း(န်)ဒွတ်အန်(န်)", category: "ငွေကြေး",
    options: ["နေ့တွက်ခ", "လစာ", "အပိုဆုကြေး", "အိမ်ငှားခ"],
    correctAnswerIndex: 1, explanation: "เงินเดือน (/ŋən-dʉan/) သည် 'လစာ' ဖြစ်ပါသည်။"
  },
  {
    id: 30, sectionId: 3, sectionTitle: "အခန်း (၃) ကိန်းဂဏန်းနှင့် ငွေရေးကြေးရေး", questionNumberInSection: 10,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ทอนเงิน", phonetic: "/thɔɔn-ŋən/", myanmarReading: "ထော(န်)ငွန်း(န်)", category: "ငွေကြေး",
    options: ["ငွေရှင်းသည်", "ငွေအမ်းသည် / အကြွေပြန်အမ်းသည်", "ငွေလဲသည်", "ငွေပေးသည်"],
    correctAnswerIndex: 1, explanation: "ทอนเงิน (/thɔɔn-ŋən/) သည် 'ငွေပြန်အမ်းသည်' ဖြစ်ပါသည်။"
  },

  // ==========================================
  // အခန်း (၄) ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည် (Q31 - Q40)
  // ==========================================
  {
    id: 31, sectionId: 4, sectionTitle: "အခန်း (၄) ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်", questionNumberInSection: 1,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "เสื้อยืด", phonetic: "/sʉ̂a-yʉ̂ʉt/", myanmarReading: "စွတ်အာ့ယွတ်(တ်)", category: "အဝတ်အထည်",
    options: ["ရှပ်အင်္ကျီ", "တီရှပ်", "အနွေးထည်", "လက်ပြတ်"],
    correctAnswerIndex: 1, explanation: "เสื้อยืด (/sʉ̂a-yʉ̂ʉt/) သည် 'တီရှပ်' ဖြစ်ပါသည်။"
  },
  {
    id: 32, sectionId: 4, sectionTitle: "အခန်း (၄) ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်", questionNumberInSection: 2,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "เสื้อแขนยาว", phonetic: "/sʉ̂a-khɛ̌ɛn-yaaw/", myanmarReading: "စွတ်အာ့ခဲ(န်)ယောင်(ဝ်)", category: "အဝတ်အထည်",
    options: ["အင်္ကျီလက်တို", "အင်္ကျီလက်ရှည်", "မိုးကာအင်္ကျီ", "ဘောင်းဘီရှည်"],
    correctAnswerIndex: 1, explanation: "เสื้อแขนยาว (/sʉ̂a-khɛ̌ɛn-yaaw/) သည် 'အင်္ကျီလက်ရှည်' ဖြစ်ပါသည်။"
  },
  {
    id: 33, sectionId: 4, sectionTitle: "အခန်း (၄) ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်", questionNumberInSection: 3,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "กางเกง", phonetic: "/kaaŋ-keeŋ/", myanmarReading: "ကန်(င်)ကိန်(င်)", category: "အဝတ်အထည်",
    options: ["ဘောင်းဘီ", "စကတ်", "လုံချည်", "အတွင်းခံ"],
    correctAnswerIndex: 0, explanation: "กางเกง (/kaaŋ-keeŋ/) သည် 'ဘောင်းဘီ' ဖြစ်ပါသည်။"
  },
  {
    id: 34, sectionId: 4, sectionTitle: "အခန်း (၄) ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်", questionNumberInSection: 4,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "กระโปรง", phonetic: "/krà-prooŋ/", myanmarReading: "ကရပရုန်(င်)", category: "အဝတ်အထည်",
    options: ["ဘောင်းဘီတို", "စကတ်", "လက်အိတ်", "ခါးပတ်"],
    correctAnswerIndex: 1, explanation: "กระโปรง (/krà-prooŋ/) သည် 'စကတ်' ဖြစ်ပါသည်။"
  },
  {
    id: 35, sectionId: 4, sectionTitle: "အခန်း (၄) ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်", questionNumberInSection: 5,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "กระเป๋าสตางค์", phonetic: "/krà-păw-sa-tàaŋ/", myanmarReading: "ကရပေါင်(ဝ်)စတာန်(င်)", category: "အသုံးအဆောင်",
    options: ["ခရီးဆောင်အိတ်", "ပိုက်ဆံအိတ်", "ကျောပိုးအိတ်", "စာအုပ်အိတ်"],
    correctAnswerIndex: 1, explanation: "กระเป๋าสตางค์ (/krà-păw-sa-tàaŋ/) သည် 'ပိုက်ဆံအိတ်' ဖြစ်ပါသည်။"
  },
  {
    id: 36, sectionId: 4, sectionTitle: "အခန်း (၄) ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်", questionNumberInSection: 6,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "รองเท้าแตะ", phonetic: "/rɔɔŋ-tháaw-tɛ́/", myanmarReading: "ရော်(င်)ထောင်(ဝ်)တဲ", category: "အသုံးအဆောင်",
    options: ["ရှူးဖိနပ်", "ညှပ်ဖိနပ်", "ဒေါက်ဖိနပ်", "ဘွတ်ဖိနပ်"],
    correctAnswerIndex: 1, explanation: "รองเท้าแตะ (/rɔɔŋ-tháaw-tɛ́/) သည် 'ညှပ်ဖိနပ်' ဖြစ်ပါသည်။"
  },
  {
    id: 37, sectionId: 4, sectionTitle: "အခန်း (၄) ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်", questionNumberInSection: 7,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "สีแดง", phonetic: "/sǐi-dɛɛŋ/", myanmarReading: "စီဒဲ(င်)", category: "အရောင်များ",
    options: ["အဝါရောင်", "အနီရောင်", "အစိမ်းရောင်", "အနက်ရောင်"],
    correctAnswerIndex: 1, explanation: "สีแดง (/sǐi-dɛɛŋ/) သည် 'အနီရောင်' ဖြစ်ပါသည်။"
  },
  {
    id: 38, sectionId: 4, sectionTitle: "အခန်း (၄) ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်", questionNumberInSection: 8,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "สีขาว", phonetic: "/sǐi-khǎaw/", myanmarReading: "စီခေါင်(ဝ်)", category: "အရောင်များ",
    options: ["အပြာရောင်", "အဖြူရောင်", "ခရမ်းရောင်", "ရွှေရောင်"],
    correctAnswerIndex: 1, explanation: "สีขาว (/sǐi-khǎaw/) သည် 'အဖြူရောင်' ဖြစ်ပါသည်။"
  },
  {
    id: 39, sectionId: 4, sectionTitle: "အခန်း (၄) ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်", questionNumberInSection: 9,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "แพง", phonetic: "/phɛɛŋ/", myanmarReading: "ဖဲ(င်)", category: "ဈေးဝယ်ခြင်း",
    options: ["ဈေးချိုသည်", "ဈေးကြီးသည်", "အရည်အသွေးကောင်းသည်", "လှပသည်"],
    correctAnswerIndex: 1, explanation: "แพง (/phɛɛŋ/) သည် 'ဈေးကြီးသည်' ဖြစ်ပါသည်။"
  },
  {
    id: 40, sectionId: 4, sectionTitle: "အခန်း (၄) ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်", questionNumberInSection: 10,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ลดราคา", phonetic: "/lót-raa-khaa/", myanmarReading: "လို(တ်)ရာခါ", category: "ဈေးဝယ်ခြင်း",
    options: ["ဈေးတင်သည်", "ဈေးလျှော့သည်", "ငွေရှင်းသည်", "ဘောက်ချာတောင်းသည်"],
    correctAnswerIndex: 1, explanation: "ลดราคา (/lót-raa-khaa/) သည် 'ဈေးနှုန်းလျှော့သည်' ဖြစ်ပါသည်။"
  },

  // ==========================================
  // အခန်း (၅) အချိန်နှင့် နာရီများ (Q41 - Q50)
  // ==========================================
  {
    id: 41, sectionId: 5, sectionTitle: "အခန်း (၅) အချိန်နှင့် နာရီများ", questionNumberInSection: 1,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ตอนนี้กี่โมงแล้ว", phonetic: "/tɔɔn-níi-kìi-mooŋ-lɛ́ɛw/", myanmarReading: "တော်(န်)နီကီမုန်(င်)လဲဝို(ဝ်)", category: "အချိန်",
    options: ["အခု ဘယ်နှနာရီရှိပြီလဲ", "ဘယ်အချိန်သွားမလဲ", "ဒီနေ့ ဘာနေ့လဲ", "ဘယ်တော့ ပြန်လာမလဲ"],
    correctAnswerIndex: 0, explanation: "ตอนนี้กี่โมงแล้ว သည် 'အခု ဘယ်နှနာရီ ရှိပြီလဲ' ဖြစ်ပါသည်။"
  },
  {
    id: 42, sectionId: 5, sectionTitle: "အခန်း (၅) အချိန်နှင့် နာရီများ", questionNumberInSection: 2,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "เที่ยงวัน", phonetic: "/thîaŋ-wan/", myanmarReading: "ထီ့ယမ့်(င်)ဝမ်(န်)", category: "အချိန်",
    options: ["မနက် ၆ နာရီ", "မွန်းတည့် ၁၂ နာရီ", "သန်းခေါင်ယံ ၁၂ နာရီ", "ညနေ ၅ နာရီ"],
    correctAnswerIndex: 1, explanation: "เที่ยงวัน (/thîaŋ-wan/) သည် 'နေ့လယ် မွန်းတည့် ၁၂ နာရီ' ဖြစ်ပါသည်။"
  },
  {
    id: 43, sectionId: 5, sectionTitle: "အခန်း (၅) အချိန်နှင့် နာရီများ", questionNumberInSection: 3,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "เที่ยงคืน", phonetic: "/thîaŋ-khʉʉn/", myanmarReading: "ထီ့ယမ့်(င်)ခေး(န်)", category: "အချိန်",
    options: ["ည ၁၀ နာရီ", "ည သန်းခေါင်ယံ ၁၂ နာရီ", "မနက် ၁ နာရီ", "ညနေ ၆ နာရီ"],
    correctAnswerIndex: 1, explanation: "เที่ยงคืน (/thîaŋ-khʉʉn/) သည် 'ည သန်းခေါင်ယံ ၁၂ နာရီ' ဖြစ်ပါသည်။"
  },
  {
    id: 44, sectionId: 5, sectionTitle: "အခန်း (၅) အချိန်နှင့် နာရီများ", questionNumberInSection: 4,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ตอนเช้า", phonetic: "/tɔɔn-cháaw/", myanmarReading: "တော်(န်)ချောင်(ဝ်)", category: "အချိန်အပိုင်းအခြား",
    options: ["ညနေပိုင်း", "နံနက်ပိုင်း", "နေ့လယ်ပိုင်း", "ညဉ့်နက်ပိုင်း"],
    correctAnswerIndex: 1, explanation: "ตอนเช้า (/tɔɔn-cháaw/) သည် 'မနက်ပိုင်း / နံနက်ပိုင်း' ဖြစ်ပါသည်။"
  },
  {
    id: 45, sectionId: 5, sectionTitle: "အခန်း (၅) အချိန်နှင့် နာရီများ", questionNumberInSection: 5,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ตอนเย็น", phonetic: "/tɔɔn-yen/", myanmarReading: "တော်(န်)ယေ(န်)", category: "အချိန်အပိုင်းအခြား",
    options: ["မနက်ပိုင်း", "ညနေပိုင်း", "သန်းခေါင်ချိန်", "မွန်းတည့်ချိန်"],
    correctAnswerIndex: 1, explanation: "ตอนเย็น (/tɔɔn-yen/) သည် 'ညနေပိုင်း' ဖြစ်ပါသည်။"
  },
  {
    id: 46, sectionId: 5, sectionTitle: "အခန်း (၅) အချိန်နှင့် နာရီများ", questionNumberInSection: 6,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "นาที", phonetic: "/naa-thii/", myanmarReading: "နာထီး", category: "အချိန်",
    options: ["စက္ကန့်", "မိနစ်", "နာရီ", "ရက်"],
    correctAnswerIndex: 1, explanation: "นาที (/naa-thii/) သည် 'မိနစ်' ဖြစ်ပါသည်။"
  },
  {
    id: 47, sectionId: 5, sectionTitle: "အခန်း (၅) အချိန်နှင့် နာရီများ", questionNumberInSection: 7,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ชั่วโมง", phonetic: "/chûa-mooŋ/", myanmarReading: "ချူဝါ(ဝ်)မုန်(င်)", category: "အချိန်",
    options: ["မိနစ်", "နာရီ (ကြာချိန်)", "လ", "နှစ်"],
    correctAnswerIndex: 1, explanation: "ชั่วโมง (/chûa-mooŋ/) သည် ကြာမြင့်ချိန်ကို ဖော်ပြသော 'နာရီ' ဖြစ်ပါသည်။"
  },
  {
    id: 48, sectionId: 5, sectionTitle: "အခန်း (၅) အချိန်နှင့် နာရီများ", questionNumberInSection: 8,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "เริ่มงาน", phonetic: "/rə̂əm-ŋaan/", myanmarReading: "ရွန့်(မ်)ငါန်(န်)", category: "အချိန်နှင့်လုပ်ငန်း",
    options: ["အလုပ်ဆင်းသည်", "အလုပ်စလုပ်သည်", "အလုပ်ရှာသည်", "အလုပ်ပြောင်းသည်"],
    correctAnswerIndex: 1, explanation: "เริ่มงาน (/rə̂əm-ŋaan/) သည် 'အလုပ်စတင်လုပ်ကိုင်သည်' ဖြစ်ပါသည်။"
  },
  {
    id: 49, sectionId: 5, sectionTitle: "အခန်း (၅) အချိန်နှင့် နာရီများ", questionNumberInSection: 9,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "เลิกงาน", phonetic: "/lə̂ək-ŋaan/", myanmarReading: "လစ်(က်)ငါန်(န်)", category: "အချိန်နှင့်လုပ်ငန်း",
    options: ["အလုပ်စသည်", "အလုပ်ဆင်းသည် / အလုပ်သိမ်းသည်", "အလုပ်နားသည်", "အလုပ်လျှောက်သည်"],
    correctAnswerIndex: 1, explanation: "เลิกงาน (/lə̂ək-ŋaan/) သည် 'အလုပ်ဆင်းသည်' ဖြစ်ပါသည်။"
  },
  {
    id: 50, sectionId: 5, sectionTitle: "အခန်း (၅) အချိန်နှင့် နာရီများ", questionNumberInSection: 10,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ตรงเวลา", phonetic: "/troŋ-wee-laa/", myanmarReading: "တရုန်(င်)ဝေလာ", category: "အချိန်",
    options: ["နောက်ကျသည်", "အချိန်မှန်ကန်သည် / အချိန်တိကျသည်", "အချိန်စောသည်", "အချိန်မရှိပါ"],
    correctAnswerIndex: 1, explanation: "ตรงเวลา (/troŋ-wee-laa/) သည် 'အချိန်မှန်ကန်သည်' ဖြစ်ပါသည်။"
  },

  // ==========================================
  // အခန်း (၆) ရက်စွဲ၊ နေ့နှင့် လများ (Q51 - Q60)
  // ==========================================
  {
    id: 51, sectionId: 6, sectionTitle: "အခန်း (၆) ရက်စွဲ၊ နေ့နှင့် လများ", questionNumberInSection: 1,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "วันนี้", phonetic: "/wan-níi/", myanmarReading: "ဝမ်(န်)နီ", category: "ရက်စွဲ",
    options: ["မနေ့က", "ဒီနေ့", "မနက်ဖြန်", "သဘက်ခါ"],
    correctAnswerIndex: 1, explanation: "วันนี้ (/wan-níi/) သည် 'ဒီနေ့' ဖြစ်ပါသည်။"
  },
  {
    id: 52, sectionId: 6, sectionTitle: "အခန်း (၆) ရက်စွဲ၊ နေ့နှင့် လများ", questionNumberInSection: 2,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "พรุ่งนี้", phonetic: "/phrûŋ-níi/", myanmarReading: "ဖရု(င်)နီ", category: "ရက်စွဲ",
    options: ["မနေ့က", "ဒီနေ့", "မနက်ဖြန်", "ဟိုတစ်နေ့က"],
    correctAnswerIndex: 2, explanation: "พรุ่งนี้ (/phrûŋ-níi/) သည် 'မနက်ဖြန်' ဖြစ်ပါသည်။"
  },
  {
    id: 53, sectionId: 6, sectionTitle: "အခန်း (၆) ရက်စွဲ၊ နေ့နှင့် လများ", questionNumberInSection: 3,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "เมื่อวานนี้", phonetic: "/mʉ̂a-waan-níi/", myanmarReading: "မွတ်အာ့ဝါ(န်)နီ", category: "ရက်စွဲ",
    options: ["ဒီနေ့", "မနေ့က", "မနက်ဖြန်", "နောက်လ"],
    correctAnswerIndex: 1, explanation: "เมื่อวานนี้ (/mʉ̂a-waan-níi/) သည် 'မနေ့က' ဖြစ်ပါသည်။"
  },
  {
    id: 54, sectionId: 6, sectionTitle: "အခန်း (၆) ရက်စွဲ၊ နေ့နှင့် လများ", questionNumberInSection: 4,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "วันจันทร์", phonetic: "/wan-jan/", myanmarReading: "ဝမ်(န်)ကျန်(န်)", category: "ရက်သတ္တပတ်",
    options: ["တနင်္လာနေ့", "အင်္ဂါနေ့", "ဗုဒ္ဓဟူးနေ့", "သောကြာနေ့"],
    correctAnswerIndex: 0, explanation: "วันจันทร์ (/wan-jan/) သည် 'တနင်္လာနေ့' ဖြစ်ပါသည်။"
  },
  {
    id: 55, sectionId: 6, sectionTitle: "အခန်း (၆) ရက်စွဲ၊ နေ့နှင့် လများ", questionNumberInSection: 5,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "วันอาทิตย์", phonetic: "/wan-?aa-thít/", myanmarReading: "ဝမ်(န်)အာထစ်(တ်)", category: "ရက်သတ္တပတ်",
    options: ["စနေနေ့", "တနင်္ဂနွေနေ့", "ကြာသပတေးနေ့", "သောကြာနေ့"],
    correctAnswerIndex: 1, explanation: "วันอาทิตย์ (/wan-?aa-thít/) သည် 'တနင်္ဂနွေနေ့' ဖြစ်ပါသည်။"
  },
  {
    id: 56, sectionId: 6, sectionTitle: "အခန်း (၆) ရက်စွဲ၊ နေ့နှင့် လများ", questionNumberInSection: 6,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "วันหยุด", phonetic: "/wan-yùt/", myanmarReading: "ဝမ်(န်)ယု(တ်)", category: "ရက်စွဲ",
    options: ["အလုပ်ရက်", "အားလပ်ရက် / ပိတ်ရက်", "မွေးနေ့", "ရုံးတက်ရက်"],
    correctAnswerIndex: 1, explanation: "วันหยุด (/wan-yùt/) သည် 'အားလပ်ရက် / ပိတ်ရက်' ဖြစ်ပါသည်။"
  },
  {
    id: 57, sectionId: 6, sectionTitle: "အခန်း (၆) ရက်စွဲ၊ နေ့နှင့် လများ", questionNumberInSection: 7,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "มกราคม", phonetic: "/mák-ka-raa-khom/", myanmarReading: "မက်ကရာခုမ်(မ်)", category: "လများ",
    options: ["ဇန်နဝါရီလ", "ဖေဖော်ဝါရီလ", "မတ်လ", "ဒီဇင်ဘာလ"],
    correctAnswerIndex: 0, explanation: "มกราคม သည် ပထမဆုံးလဖြစ်သော 'ဇန်နဝါရီလ' ဖြစ်ပါသည်။"
  },
  {
    id: 58, sectionId: 6, sectionTitle: "အခန်း (၆) ရက်စွဲ၊ နေ့နှင့် လများ", questionNumberInSection: 8,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ธันวาคม", phonetic: "/than-waa-khom/", myanmarReading: "ထန်(န်)ဝါခုမ်(မ်)", category: "လများ",
    options: ["နိုဝင်ဘာလ", "ဒီဇင်ဘာလ", "အောက်တိုဘာလ", "ဩဂုတ်လ"],
    correctAnswerIndex: 1, explanation: "ธันวาคม သည် နှစ်တစ်နှစ်၏ နောက်ဆုံးလ 'ဒီဇင်ဘာလ' ဖြစ်ပါသည်။"
  },
  {
    id: 59, sectionId: 6, sectionTitle: "အခန်း (၆) ရက်စွဲ၊ နေ့နှင့် လများ", questionNumberInSection: 9,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "เดือนหน้า", phonetic: "/dʉan-nâa/", myanmarReading: "ဒွတ်အန်(န်)နာ့", category: "ပြက္ခဒိန်",
    options: ["ပြီးခဲ့သည့်လ", "ဒီလ", "နောက်လ", "နောက်နှစ်"],
    correctAnswerIndex: 2, explanation: "เดือนหน้า (/dʉan-nâa/) သည် 'နောက်လ' ဖြစ်ပါသည်။"
  },
  {
    id: 60, sectionId: 6, sectionTitle: "အခန်း (၆) ရက်စွဲ၊ နေ့နှင့် လများ", questionNumberInSection: 10,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "วันเกิด", phonetic: "/wan-kə̀ət/", myanmarReading: "ဝမ်(န်)ကွတ်(တ်)", category: "ရက်စွဲ",
    options: ["မင်္ဂလာဆောင်ရက်", "မွေးနေ့", "နှစ်သစ်ကူးနေ့", "ကျောင်းဖွင့်ရက်"],
    correctAnswerIndex: 1, explanation: "วันเกิด (/wan-kə̀ət/) သည် 'မွေးနေ့' ဖြစ်ပါသည်။"
  },

  // ==========================================
  // အခန်း (၇) အစားအသောက်နှင့် သစ်သီးများ (Q61 - Q70)
  // ==========================================
  {
    id: 61, sectionId: 7, sectionTitle: "အခန်း (၇) အစားအသောက်နှင့် သစ်သီးများ", questionNumberInSection: 1,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ข้าวเหนียว", phonetic: "/khâaw-nĭaw/", myanmarReading: "ခေါက်(ဝ်)နီယို(ဝ်)", category: "အစားအသောက်",
    options: ["ထမင်းကြော်", "ကောက်ညှင်းပေါင်း", "ဆန်ပြုတ်", "ပေါင်မုန့်"],
    correctAnswerIndex: 1, explanation: "ข้าวเหนียว (/khâaw-nĭaw/) သည် 'ကောက်ညှင်းပေါင်း' ဖြစ်ပါသည်။"
  },
  {
    id: 62, sectionId: 7, sectionTitle: "အခန်း (၇) အစားအသောက်နှင့် သစ်သီးများ", questionNumberInSection: 2,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ส้มตำ", phonetic: "/sôm-tam/", myanmarReading: "စုန့်(မ်)တမ်(မ်)", category: "အစားအသောက်",
    options: ["ခေါက်ဆွဲကြော်", "သင်္ဘောသီးထောင်း", "ကြက်ကင်", "အမဲသားဟင်း"],
    correctAnswerIndex: 1, explanation: "ส้มตำ (/sôm-tam/) သည် 'သင်္ဘောသီးထောင်း' ဖြစ်ပါသည်။"
  },
  {
    id: 63, sectionId: 7, sectionTitle: "အခန်း (၇) အစားအသောက်နှင့် သစ်သီးများ", questionNumberInSection: 3,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ข้าวมันไก่", phonetic: "/khâaw-man-kày/", myanmarReading: "ခေါက်(ဝ်)မန်(န်)ကိုင်(ယ်)", category: "အစားအသောက်",
    options: ["ဝက်လက်ထမင်း", "ကြက်ဆီထမင်း", "ကြက်သားဒံပေါက်", "ထမင်းဖြူ"],
    correctAnswerIndex: 1, explanation: "ข้าวมันไก่ (/khâaw-man-kày/) သည် 'ကြက်ဆီထမင်း' ဖြစ်ပါသည်။"
  },
  {
    id: 64, sectionId: 7, sectionTitle: "အခန်း (၇) အစားအသောက်နှင့် သစ်သီးများ", questionNumberInSection: 4,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ต้มยำ", phonetic: "/tôm-yam/", myanmarReading: "တုန့်(မ်)ယမ်(မ်)", category: "အစားအသောက်",
    options: ["တုံယမ်းဟင်းချို", "ငါးသေတ္တာဟင်း", "အသီးအရွက်ကြော်", "ပဲဟင်း"],
    correctAnswerIndex: 0, explanation: "ต้มยำ (/tôm-yam/) သည် 'တုံယမ်းဟင်းချို' ဖြစ်ပါသည်။"
  },
  {
    id: 65, sectionId: 7, sectionTitle: "အခန်း (၇) အစားအသောက်နှင့် သစ်သီးများ", questionNumberInSection: 5,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "แตงโม", phonetic: "/tɛɛŋ-moo/", myanmarReading: "တဲ(င်)မို", category: "သစ်သီးများ",
    options: ["လိမ္မော်သီး", "ဖရဲသီး", "ဒူးရင်းသီး", "သရက်သီး"],
    correctAnswerIndex: 1, explanation: "แตงโม (/tɛɛŋ-moo/) သည် 'ဖရဲသီး' ဖြစ်ပါသည်။"
  },
  {
    id: 66, sectionId: 7, sectionTitle: "အခန်း (၇) အစားအသောက်နှင့် သစ်သီးများ", questionNumberInSection: 6,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ทุเรียน", phonetic: "/thú-rian/", myanmarReading: "ထုရီယမ်(န်)", category: "သစ်သီးများ",
    options: ["ပိန္နဲသီး", "ဒူးရင်းသီး", "မင်းကွတ်သီး", "သင်္ဘောသီး"],
    correctAnswerIndex: 1, explanation: "ทุเรียน (/thú-rian/) သည် 'ဒူးရင်းသီး' ဖြစ်ပါသည်။"
  },
  {
    id: 67, sectionId: 7, sectionTitle: "အခန်း (၇) အစားအသောက်နှင့် သစ်သီးများ", questionNumberInSection: 7,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "กาแฟเย็น", phonetic: "/kaa-fɛɛ-yen/", myanmarReading: "ကာဖဲ(f)ယေ(န်)", category: "အအေးနှင့်သောက်စရာ",
    options: ["ကော်ဖီပူ", "ကော်ဖီအေး", "လက်ဖက်ရည်", "နွားနို့"],
    correctAnswerIndex: 1, explanation: "กาแฟเย็น (/kaa-fɛɛ-yen/) သည် 'ကော်ဖီအေး' ဖြစ်ပါသည်။"
  },
  {
    id: 68, sectionId: 7, sectionTitle: "အခန်း (၇) အစားအသောက်နှင့် သစ်သီးများ", questionNumberInSection: 8,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "น้ำตาล", phonetic: "/nám-taan/", myanmarReading: "နမ်(မ်)တာ(န်)", category: "ဟင်းခတ်အမွှေးအကြိုင်",
    options: ["ဆား", "သကြား", "ငရုတ်သီး", "ဟင်းခတ်မှုန့်"],
    correctAnswerIndex: 1, explanation: "น้ำตาล (/nám-taan/) သည် 'သကြား' ဖြစ်ပါသည်။"
  },
  {
    id: 69, sectionId: 7, sectionTitle: "အခန်း (၇) အစားအသောက်နှင့် သစ်သီးများ", questionNumberInSection: 9,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "อร่อย", phonetic: "/?a-rɔ̀ɔy/", myanmarReading: "အရော်(ယီ)", category: "အစားအသောက်",
    options: ["ခါးသည်", "အရသာရှိသည် / ကောင်းသည်", "ချဉ်သည်", "စပ်သည်"],
    correctAnswerIndex: 1, explanation: "อร่อย (/?a-rɔ̀ɔy/) သည် 'အရသာရှိသည်' ဖြစ်ပါသည်။"
  },
  {
    id: 70, sectionId: 7, sectionTitle: "အခန်း (၇) အစားအသောက်နှင့် သစ်သီးများ", questionNumberInSection: 10,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "เผ็ด", phonetic: "/phèt/", myanmarReading: "ဖေ(တ်)", category: "အရသာ",
    options: ["ချိုသည်", "စပ်သည်", "ငန်သည်", "အေးသည်"],
    correctAnswerIndex: 1, explanation: "เผ็ด (/phèt/) သည် 'စပ်သည်' ဖြစ်ပါသည်။"
  },

  // ==========================================
  // အခန်း (၈) လမ်းညွှန်ခြင်းနှင့် ယာဉ်များ (Q71 - Q80)
  // ==========================================
  {
    id: 71, sectionId: 8, sectionTitle: "အခန်း (၈) လမ်းညွှန်ခြင်းနှင့် ယာဉ်များ", questionNumberInSection: 1,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ตรงไป", phonetic: "/troŋ-pay/", myanmarReading: "တရုန်(င်)ပိုင်(ယ်)", category: "လမ်းညွှန်",
    options: ["ဘယ်ကွေ့ပါ", "တည့်တည့်သွားပါ", "ညာကွေ့ပါ", "ရပ်တန့်ပါ"],
    correctAnswerIndex: 1, explanation: "ตรงไป (/troŋ-pay/) သည် 'တည့်တည့်သွားပါ' ဖြစ်ပါသည်။"
  },
  {
    id: 72, sectionId: 8, sectionTitle: "အခန်း (၈) လမ်းညွှန်ခြင်းနှင့် ယာဉ်များ", questionNumberInSection: 2,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "เลี้ยวซ้าย", phonetic: "/líaw-sáay/", myanmarReading: "လီယို(ဝ်)ဆိုင်(ယ်)", category: "လမ်းညွှန်",
    options: ["တည့်တည့်သွား", "ဘယ်ဘက်ကွေ့ပါ", "ညာဘက်ကွေ့ပါ", "အနောက်လှည့်ပါ"],
    correctAnswerIndex: 1, explanation: "เลี้ยวซ้าย (/líaw-sáay/) သည် 'ဘယ်ဘက်ကွေ့ပါ' ဖြစ်ပါသည်။"
  },
  {
    id: 73, sectionId: 8, sectionTitle: "အခန်း (၈) လမ်းညွှန်ခြင်းနှင့် ယာဉ်များ", questionNumberInSection: 3,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "เลี้ยวขวา", phonetic: "/líaw-khwǎa/", myanmarReading: "လီယို(ဝ်)ခွာ", category: "လမ်းညွှန်",
    options: ["ဘယ်ဘက်ကွေ့", "ညာဘက်ကွေ့ပါ", "တည့်တည့်သွား", "အောက်ဆင်းပါ"],
    correctAnswerIndex: 1, explanation: "เลี้ยวขวา (/líaw-khwǎa/) သည် 'ညာဘက်ကွေ့ပါ' ဖြစ်ပါသည်။"
  },
  {
    id: 74, sectionId: 8, sectionTitle: "အခန်း (၈) လမ်းညွှန်ခြင်းနှင့် ယာဉ်များ", questionNumberInSection: 4,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "สนามบิน", phonetic: "/sa-năam-bin/", myanmarReading: "စနာမ်(မ်)ဘင်(န်)", category: "နေရာဒေသ",
    options: ["လေယာဉ်ကွင်း / လေဆိပ်", "မီးရထားဘူတာ", "ကားဂိတ်", "သင်္ဘောဆိပ်"],
    correctAnswerIndex: 0, explanation: "สนามบิน (/sa-năam-bin/) သည် 'လေယာဉ်ကွင်း' ဖြစ်ပါသည်။"
  },
  {
    id: 75, sectionId: 8, sectionTitle: "အခန်း (၈) လမ်းညွှန်ခြင်းနှင့် ယာဉ်များ", questionNumberInSection: 5,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "สถานีรถไฟ", phonetic: "/sa-thăa-nii-rót-fay/", myanmarReading: "စထာနီရို(တ်)ဖိုင်(ယ်)", category: "နေရာဒေသ",
    options: ["လေဆိပ်", "မီးရထားဘူတာ", "ဘတ်စ်ကားမှတ်တိုင်", "ဆိပ်ကမ်း"],
    correctAnswerIndex: 1, explanation: "สถานีรถไฟ သည် 'မီးရထားဘူတာ' ဖြစ်ပါသည်။"
  },
  {
    id: 76, sectionId: 8, sectionTitle: "အခန်း (၈) လမ်းညွှန်ခြင်းနှင့် ယာဉ်များ", questionNumberInSection: 6,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "รถเมล์", phonetic: "/rót-mee/", myanmarReading: "ရို(တ်)မေ", category: "ယာဉ်များ",
    options: ["ရထား", "ဘတ်စ်ကား", "တက္ကစီ", "ဆိုင်ကယ်"],
    correctAnswerIndex: 1, explanation: "รถเมล์ (/rót-mee/) သည် 'လိုင်းကား / ဘတ်စ်ကား' ဖြစ်ပါသည်။"
  },
  {
    id: 77, sectionId: 8, sectionTitle: "အခန်း (၈) လမ်းညွှန်ခြင်းနှင့် ယာဉ်များ", questionNumberInSection: 7,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "รถไฟฟ้า", phonetic: "/rót-fay-fáa/", myanmarReading: "ရို(တ်)ဖိုင်(ယ်)ဖာ", category: "ယာဉ်များ",
    options: ["မြေအောက်ရထား", "မိုးပျံရထား / လျှပ်စစ်ရထား", "ဘတ်စ်ကား", "စက်ဘီး"],
    correctAnswerIndex: 1, explanation: "รถไฟฟ้า (/rót-fay-fáa/) သည် 'မိုးပျံရထား (BTS)' ဖြစ်ပါသည်။"
  },
  {
    id: 78, sectionId: 8, sectionTitle: "အခန်း (၈) လမ်းညွှန်ခြင်းနှင့် ယာဉ်များ", questionNumberInSection: 8,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ท่าเรือ", phonetic: "/thâa-rʉa/", myanmarReading: "ထာ့ရွတ်အား", category: "နေရာဒေသ",
    options: ["လေယာဉ်ကွင်း", "သင်္ဘောဆိပ် / လှေဆိပ်", "ဘူတာရုံ", "ကားကြီးဝင်း"],
    correctAnswerIndex: 1, explanation: "ท่าเรือ (/thâa-rʉa/) သည် 'သင်္ဘောဆိပ် / ဆိပ်ကမ်း' ဖြစ်ပါသည်။"
  },
  {
    id: 79, sectionId: 8, sectionTitle: "အခန်း (၈) လမ်းညွှန်ခြင်းနှင့် ယာဉ်များ", questionNumberInSection: 9,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "จอดรถ", phonetic: "/jɔ̀ɔt-rót/", myanmarReading: "ကျော(တ်)ရို(တ်)", category: "လမ်းညွှန်",
    options: ["ကားမောင်းသည်", "ကားရပ်သည်", "ကားဆေးသည်", "ကားပြင်သည်"],
    correctAnswerIndex: 1, explanation: "จอดรถ (/jɔ̀ɔt-rót/) သည် 'ကားရပ်သည်' ဖြစ်ပါသည်။"
  },
  {
    id: 80, sectionId: 8, sectionTitle: "အခန်း (၈) လမ်းညွှန်ခြင်းနှင့် ယာဉ်များ", questionNumberInSection: 10,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "สี่แยก", phonetic: "/sìi-yɛ̂ɛk/", myanmarReading: "စီယဲ့(က်)", category: "လမ်းညွှန်",
    options: ["လမ်းသုံးခွ", "လမ်းလေးခွဆုံ / လမ်းဆုံ", "အဝိုင်း", "အဝေးပြေးလမ်း"],
    correctAnswerIndex: 1, explanation: "สี่แยก (/sìi-yɛ̂ɛk/) သည် 'လမ်းလေးခွဆုံ' ဖြစ်ပါသည်။"
  },

  // ==========================================
  // အခန်း (၉) ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး (Q81 - Q90)
  // ==========================================
  {
    id: 81, sectionId: 9, sectionTitle: "အခန်း (၉) ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး", questionNumberInSection: 1,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "โรงพยาบาล", phonetic: "/rooŋ-pha-yaa-baan/", myanmarReading: "ရုန်(င်)ဖယာဘာန်(န်)", category: "ကျန်းမာရေး",
    options: ["ဆေးဆိုင်", "ဆေးရုံ", "စာသင်ကျောင်း", "ဘဏ်"],
    correctAnswerIndex: 1, explanation: "โรงพยาบาล သည် 'ဆေးရုံ' ဖြစ်ပါသည်။"
  },
  {
    id: 82, sectionId: 9, sectionTitle: "အခန်း (၉) ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး", questionNumberInSection: 2,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "หมอ", phonetic: "/mɔ̌ɔ/", myanmarReading: "မော်", category: "ကျန်းမာရေး",
    options: ["သူနာပြု", "ဆရာဝန်", "ဆေးဝါးကျွမ်းကျင်", "လူနာ"],
    correctAnswerIndex: 1, explanation: "หมอ (/mɔ̌ɔ/) သည် 'ဆရာဝန်' ဖြစ်ပါသည်။"
  },
  {
    id: 83, sectionId: 9, sectionTitle: "အခန်း (၉) ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး", questionNumberInSection: 3,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ปวดหัว", phonetic: "/pùat-hŭa/", myanmarReading: "ပူဝတ်(တ်)ဟူဝါ", category: "ရောဂါလက္ခဏာ",
    options: ["ဗိုက်နာသည်", "ခေါင်းကိုက်သည်", "သွားကိုက်သည်", "ခါးနာသည်"],
    correctAnswerIndex: 1, explanation: "ปวดหัว (/pùat-hŭa/) သည် 'ခေါင်းကိုက်သည်' ဖြစ်ပါသည်။"
  },
  {
    id: 84, sectionId: 9, sectionTitle: "အခန်း (၉) ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး", questionNumberInSection: 4,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ตัวร้อน", phonetic: "/tua-rɔ́ɔn/", myanmarReading: "တူဝါရော်(န်)", category: "ရောဂါလက္ခဏာ",
    options: ["အေးစက်သည်", "ကိုယ်ပူသည် / အဖျားတက်သည်", "ချောင်းဆိုးသည်", "နှာစေးသည်"],
    correctAnswerIndex: 1, explanation: "ตัวร้อน (/tua-rɔ́ɔn/) သည် 'ကိုယ်ပူသည်' ဖြစ်ပါသည်။"
  },
  {
    id: 85, sectionId: 9, sectionTitle: "အခန်း (၉) ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး", questionNumberInSection: 5,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ยา", phonetic: "/yaa/", myanmarReading: "ယား", category: "ဆေးဝါး",
    options: ["ရေ", "ဆေး / ဆေးဝါး", "အစာ", "ဓာတ်မှန်"],
    correctAnswerIndex: 1, explanation: "ยา (/yaa/) သည် 'ဆေးဝါး' ဖြစ်ပါသည်။"
  },
  {
    id: 86, sectionId: 9, sectionTitle: "အခန်း (၉) ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး", questionNumberInSection: 6,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "กินยา", phonetic: "/kin-yaa/", myanmarReading: "ကင်(န်)ယား", category: "ကျန်းမာရေး",
    options: ["ဆေးထိုးသည်", "ဆေးသောက်သည်", "ဆေးဝယ်သည်", "ဆေးလိမ်းသည်"],
    correctAnswerIndex: 1, explanation: "กินยา (/kin-yaa/) သည် 'ဆေးသောက်သည်' ဖြစ်ပါသည်။"
  },
  {
    id: 87, sectionId: 9, sectionTitle: "အခန်း (၉) ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး", questionNumberInSection: 7,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ฉีดยา", phonetic: "/chìit-yaa/", myanmarReading: "ချီ(တ်)ယား", category: "ကျန်းမာရေး",
    options: ["ဆေးသောက်သည်", "ဆေးထိုးသည်", "သွေးစစ်သည်", "ခွဲစိတ်သည်"],
    correctAnswerIndex: 1, explanation: "ฉีดยา (/chìit-yaa/) သည် 'ဆေးထိုးသည်' ဖြစ်ပါသည်။"
  },
  {
    id: 88, sectionId: 9, sectionTitle: "အခန်း (၉) ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး", questionNumberInSection: 8,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "หัวใจ", phonetic: "/hŭa-jay/", myanmarReading: "ဟူဝါကျိုင်(ယ်)", category: "ခန္ဓာကိုယ်",
    options: ["အဆုတ်", "နှလုံး", "အသည်း", "ကျောက်ကပ်"],
    correctAnswerIndex: 1, explanation: "หัวใจ (/hŭa-jay/) သည် 'နှလုံး' ဖြစ်ပါသည်။"
  },
  {
    id: 89, sectionId: 9, sectionTitle: "အခန်း (၉) ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး", questionNumberInSection: 9,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ความดันสูง", phonetic: "/khwaam-dan-sŭuŋ/", myanmarReading: "ခွမ်(မ်)ဒန်(န်)ဆူ(င်)", category: "ကျန်းမာရေး",
    options: ["ဆီးချို", "သွေးတိုးရောဂါ", "အသည်းရောင်", "နှလုံးရောဂါ"],
    correctAnswerIndex: 1, explanation: "ความดันสูง သည် 'သွေးတိုးရောဂါ' ဖြစ်ပါသည်။"
  },
  {
    id: 90, sectionId: 9, sectionTitle: "အခန်း (၉) ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး", questionNumberInSection: 10,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "แพ้ยา", phonetic: "/phɛ́ɛ-yaa/", myanmarReading: "ဖဲယား", category: "ကျန်းမာရေး",
    options: ["ဆေးသောက်ပျောက်သည်", "ဆေးနှင့် ဓာတ်မတည့်ခြင်း", "ဆေးလွန်ခြင်း", "ဆေးကုန်ခြင်း"],
    correctAnswerIndex: 1, explanation: "แพ้ยา (/phɛ́ɛ-yaa/) သည် 'ဆေးမတည့်ခြင်း' ဖြစ်ပါသည်။"
  },

  // ==========================================
  // အခန်း (၁၀) အသက်မွေးဝမ်းကြောင်း အလုပ်များ (Q91 - Q100)
  // ==========================================
  {
    id: 91, sectionId: 10, sectionTitle: "အခန်း (၁၀) အသက်မွေးဝမ်းကြောင်း အလုပ်များ", questionNumberInSection: 1,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "วิศวกร", phonetic: "/wí-sa-wá-kɔɔn/", myanmarReading: "ဝိစဝါကော်(န်)", category: "အလုပ်အကိုင်",
    options: ["ဆရာဝန်", "အင်ဂျင်နီယာ", "ရှေ့နေ", "စာရေးဆရာ"],
    correctAnswerIndex: 1, explanation: "วิศวกร (/wí-sa-wá-kɔɔn/) သည် 'အင်ဂျင်နီယာ' ဖြစ်ပါသည်။"
  },
  {
    id: 92, sectionId: 10, sectionTitle: "အခန်း (၁၀) အသက်မွေးဝမ်းကြောင်း အလုပ်များ", questionNumberInSection: 2,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ครู", phonetic: "/khruu/", myanmarReading: "ခရူ", category: "အလုပ်အကိုင်",
    options: ["ကျောင်းသား", "ဆရာ / ဆရာမ", "ပါမောက္ခ", "အတွင်းရေးမှူး"],
    correctAnswerIndex: 1, explanation: "ครู (/khruu/) သည် 'ဆရာ / ဆရာမ' ဖြစ်ပါသည်။"
  },
  {
    id: 93, sectionId: 10, sectionTitle: "အခန်း (၁၀) အသက်မွေးဝမ်းကြောင်း အလုပ်များ", questionNumberInSection: 3,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "พยาบาล", phonetic: "/pha-yaa-baan/", myanmarReading: "ဖယာဘာန်(န်)", category: "အလုပ်အကိုင်",
    options: ["ဆရာဝန်", "သူနာပြု", "ဆေးဝါးကျွမ်းကျင်", "အိမ်အကူ"],
    correctAnswerIndex: 1, explanation: "พยาบาล (/pha-yaa-baan/) သည် 'သူနာပြု' ဖြစ်ပါသည်။"
  },
  {
    id: 94, sectionId: 10, sectionTitle: "အခန်း (၁၀) အသက်မွေးဝမ်းကြောင်း အလုပ်များ", questionNumberInSection: 4,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ตำรวจ", phonetic: "/tam-rùat/", myanmarReading: "တမ်(မ်)ရူဝတ်(တ်)", category: "အလုပ်အကိုင်",
    options: ["စစ်သား", "ရဲအရာရှိ", "လုံခြုံရေး", "မီးသတ်သမား"],
    correctAnswerIndex: 1, explanation: "ตำรวจ (/tam-rùat/) သည် 'ရဲ' ဖြစ်ပါသည်။"
  },
  {
    id: 95, sectionId: 10, sectionTitle: "အခန်း (၁၀) အသက်မွေးဝမ်းကြောင်း အလုပ်များ", questionNumberInSection: 5,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ทหาร", phonetic: "/tha-hǎan/", myanmarReading: "ထဟန်(န်)", category: "အလုပ်အကိုင်",
    options: ["ရဲ", "စစ်သား", "အစိုးရဝန်ထမ်း", "ကိုယ်ရံတော်"],
    correctAnswerIndex: 1, explanation: "ทหาร (/tha-hǎan/) သည် 'စစ်သား' ဖြစ်ပါသည်။"
  },
  {
    id: 96, sectionId: 10, sectionTitle: "အခန်း (၁၀) အသက်မွေးဝမ်းကြောင်း အလုပ်များ", questionNumberInSection: 6,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "แม่บ้าน", phonetic: "/mɛ̂ɛ-bâan/", myanmarReading: "မဲ့ဘာန့်(န်)", category: "အလုပ်အကိုင်",
    options: ["ဈေးသည်", "အိမ်ရှင်မ / အိမ်အကူ", "စားပွဲထိုး", "စက်ရုံလုပ်သား"],
    correctAnswerIndex: 1, explanation: "แม่บ้าน (/mɛ̂ɛ-bâan/) သည် 'အိမ်ရှင်မ / သန့်ရှင်းရေးဝန်ထမ်း' ဖြစ်ပါသည်။"
  },
  {
    id: 97, sectionId: 10, sectionTitle: "အခန်း (၁၀) အသက်မွေးဝမ်းကြောင်း အလုပ်များ", questionNumberInSection: 7,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ทนายความ", phonetic: "/tha-naay-khwaam/", myanmarReading: "ထနိုင်(ယ်)ခွမ်(မ်)", category: "အလုပ်အကိုင်",
    options: ["တရားသူကြီး", "ရှေ့နေ", "စာရင်းကိုင်", "သံတမန်"],
    correctAnswerIndex: 1, explanation: "ทนายความ (/tha-naay-khwaam/) သည် 'ရှေ့နေ' ဖြစ်ပါသည်။"
  },
  {
    id: 98, sectionId: 10, sectionTitle: "အခန်း (၁၀) အသက်မွေးဝမ်းကြောင်း အလုပ်များ", questionNumberInSection: 8,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "นักธุรกิจ", phonetic: "/nák-thú-rá-kìt/", myanmarReading: "နက်(က်)ထုရကစ်(တ်)", category: "အလုပ်အကိုင်",
    options: ["အစိုးရဝန်ထမ်း", "စီးပွားရေးသမား", "ပညာရှင်", "ကျောင်းသား"],
    correctAnswerIndex: 1, explanation: "นักธุรกิจ သည် 'စီးပွားရေးလုပ်ငန်းရှင်' ဖြစ်ပါသည်။"
  },
  {
    id: 99, sectionId: 10, sectionTitle: "အခန်း (၁၀) အသက်မွေးဝမ်းကြောင်း အလုပ်များ", questionNumberInSection: 9,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "นักร้อง", phonetic: "/nák-rɔ́ɔŋ/", myanmarReading: "နက်(က်)ရော်(င်)", category: "အလုပ်အကိုင်",
    options: ["သရုပ်ဆောင်", "အဆိုတော်", "အကပညာရှင်", "ဂီတသမား"],
    correctAnswerIndex: 1, explanation: "นักร้อง (/nák-rɔ́ɔŋ/) သည် 'အဆိုတော်' ဖြစ်ပါသည်။"
  },
  {
    id: 100, sectionId: 10, sectionTitle: "အခန်း (၁၀) အသက်မွေးဝမ်းကြောင်း အလုပ်များ", questionNumberInSection: 10,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "พนักงาน", phonetic: "/pha-nák-ŋaan/", myanmarReading: "ဖနက်(က်)ငါန်(န်)", category: "အလုပ်အကိုင်",
    options: ["သူဌေး", "ကုမ္ပဏီဝန်ထမ်း", "အလုပ်ရှင်", "မန်နေဂျာ"],
    correctAnswerIndex: 1, explanation: "พนักงาน (/pha-nák-ŋaan/) သည် 'ဝန်ထမ်း' ဖြစ်ပါသည်။"
  },

  // ==========================================
  // အခန်း (၁၁) မိုးလေဝသနှင့် ရာသီဥတု (Q101 - Q110)
  // ==========================================
  {
    id: 101, sectionId: 11, sectionTitle: "အခန်း (၁၁) မိုးလေဝသနှင့် ရာသီဥတု", questionNumberInSection: 1,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ฤดูร้อน", phonetic: "/rí-duu-rɔ́ɔn/", myanmarReading: "ရွတ်ဒူရော်(န်)", category: "ရာသီဥတု",
    options: ["မိုးရာသီ", "နွေရာသီ", "ဆောင်းရာသီ", "နွေဦးရာသီ"],
    correctAnswerIndex: 1, explanation: "ฤดูร้อน (/rí-duu-rɔ́ɔn/) သည် 'နွေရာသီ' ဖြစ်ပါသည်။"
  },
  {
    id: 102, sectionId: 11, sectionTitle: "အခန်း (၁၁) မိုးလေဝသနှင့် ရာသီဥတု", questionNumberInSection: 2,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ฤดูฝน", phonetic: "/rí-duu-fŏn/", myanmarReading: "ရွတ်ဒူဖွန်(န်)", category: "ရာသီဥတု",
    options: ["ဆောင်းရာသီ", "မိုးရာသီ", "နွေရာသီ", "ဆောင်းဦးရာသီ"],
    correctAnswerIndex: 1, explanation: "ฤดูฝน (/rí-duu-fŏn/) သည် 'မိုးရာသီ' ဖြစ်ပါသည်။"
  },
  {
    id: 103, sectionId: 11, sectionTitle: "အခန်း (၁၁) မိုးလေဝသနှင့် ရာသီဥတု", questionNumberInSection: 3,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ฤดูหนาว", phonetic: "/rí-duu-năaw/", myanmarReading: "ရွတ်ဒူနောင်(ဝ်)", category: "ရာသီဥတု",
    options: ["နွေရာသီ", "ဆောင်းရာသီ", "မိုးရာသီ", "နွေဦးရာသီ"],
    correctAnswerIndex: 1, explanation: "ฤดูหนาว (/rí-duu-năaw/) သည် 'ဆောင်းရာသီ' ဖြစ်ပါသည်။"
  },
  {
    id: 104, sectionId: 11, sectionTitle: "အခန်း (၁၁) မိုးလေဝသနှင့် ရာသီဥတု", questionNumberInSection: 4,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ฝนตกหนัก", phonetic: "/fŏn-tòk-nàk/", myanmarReading: "ဖွန်(န်)တို(က်)နက်(က်)", category: "မိုးလေဝသ",
    options: ["နေပူပြင်းသည်", "မိုးသည်းထန်စွာရွာသည်", "နှင်းကျသည်", "မြူဆိုင်းသည်"],
    correctAnswerIndex: 1, explanation: "ฝนตกหนัก (/fŏn-tòk-nàk/) သည် 'မိုးသည်းထန်စွာ ရွာသည်' ဖြစ်ပါသည်။"
  },
  {
    id: 105, sectionId: 11, sectionTitle: "အခန်း (၁၁) မိုးလေဝသနှင့် ရာသီဥတု", questionNumberInSection: 5,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "แดดออก", phonetic: "/dɛ̀ɛt-?ɔ̀ɔk/", myanmarReading: "ဒဲ(တ်)အော်(က်)", category: "မိုးလေဝသ",
    options: ["မိုးရွာသည်", "နေထွက်သည် / နေသာသည်", "လေပြင်းတိုက်သည်", "မိုးမှောင်ကျသည်"],
    correctAnswerIndex: 1, explanation: "แดดออก (/dɛ̀ɛt-?ɔ̀ɔk/) သည် 'နေသာသည် / နေထွက်သည်' ဖြစ်ပါသည်။"
  },
  {
    id: 106, sectionId: 11, sectionTitle: "အခန်း (၁၁) မိုးလေဝသနှင့် ရာသီဥတု", questionNumberInSection: 6,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "ลมแรง", phonetic: "/lom-rɛɛŋ/", myanmarReading: "လုန်(မ်)ရဲ(င်)", category: "မိုးလေဝသ",
    options: ["လေငြိမ်သည်", "လေပြင်းတိုက်သည်", "မိုးသီးကြွေသည်", "ရေကြီးသည်"],
    correctAnswerIndex: 1, explanation: "ลมแรง (/lom-rɛɛŋ/) သည် 'လေပြင်းတိုက်ခတ်သည်' ဖြစ်ပါသည်။"
  },
  {
    id: 107, sectionId: 11, sectionTitle: "အခန်း (၁၁) မိုးလေဝသနှင့် ရာသီဥတု", questionNumberInSection: 7,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "หมอกลง", phonetic: "/mɔ̀ɔk-loŋ/", myanmarReading: "မော်(က်)လုန်(င်)", category: "မိုးလေဝသ",
    options: ["နှင်းကျသည်", "မြူဆိုင်းသည် / မြူကျသည်", "လျှပ်စီးလက်သည်", "မိုးခြိမ်းသည်"],
    correctAnswerIndex: 1, explanation: "หมอกลง (/mɔ̀ɔk-loŋ/) သည် 'မြူကျသည်' ဖြစ်ပါသည်။"
  },
  {
    id: 108, sectionId: 11, sectionTitle: "အခန်း (၁၁) မိုးလေဝသနှင့် ရာသီဥတု", questionNumberInSection: 8,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "อากาศดี", phonetic: "/?aa-kàat-dii/", myanmarReading: "အာကာ(တ်)ဒီး", category: "မိုးလေဝသ",
    options: ["ရာသီဥတုဆိုးရွားသည်", "ရာသီဥတု သာယာသည် / ကောင်းမွန်သည်", "အလွန်ပူအိုက်သည်", "မုန်တိုင်းလာမည်"],
    correctAnswerIndex: 1, explanation: "อากาศดี (/?aa-kàat-dii/) သည် 'ရာသီဥတု သာယာသည်' ဖြစ်ပါသည်။"
  },
  {
    id: 109, sectionId: 11, sectionTitle: "အခန်း (၁၁) မိုးလေဝသနှင့် ရာသီဥတု", questionNumberInSection: 9,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "น้ำท่วม", phonetic: "/náam-thûam/", myanmarReading: "နာမ်(မ်)ထူဝမ့်(မ်)", category: "သဘာဝဘေး",
    options: ["မိုးခေါင်သည်", "ရေကြီးသည် / ရေလျှံသည်", "မြေပြိုသည်", "ငလျင်လှုပ်သည်"],
    correctAnswerIndex: 1, explanation: "น้ำท่วม (/náam-thûam/) သည် 'ရေကြီးရေလျှံသည်' ဖြစ်ပါသည်။"
  },
  {
    id: 110, sectionId: 11, sectionTitle: "အခန်း (၁၁) မိုးလေဝသနှင့် ရာသီဥတု", questionNumberInSection: 10,
    question: "အောက်ပါ ထိုင်းစကားလုံး၏ မှန်ကန်သော မြန်မာအဓိပ္ပာယ်ကို ရွေးချယ်ပါ -",
    thaiWord: "หิมะตก", phonetic: "/hì-má-tòk/", myanmarReading: "ဟိမတို(က်)", category: "မိုးလေဝသ",
    options: ["မိုးရွာသည်", "နှင်းကျသည်", "နေပူသည်", "လေတိုက်သည်"],
    correctAnswerIndex: 1, explanation: "หิมะตก (/hì-má-tòk/) သည် 'နှင်းကျသည်' ဖြစ်ပါသည်။"
  }
];
