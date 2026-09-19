/**
 * Comprehensive dataset of 500 essential and daily life Thai words based on the
 * 11 chapters of "Thaisar - လက်တွေ့အသုံးချ ထိုင်း-မြန်မာစကားပြော Video Book".
 *
 * Strict Linguistic Specifications:
 * 1. Clean slash phonetics (e.g. /phǒm/, /dì-chán/, /khun/, /sôm-tam/) - no broken IPA brackets.
 * 2. Authentic Burmese readings with bracketed asats (e.g. "ဖုန်(မ်)", "ဒီချန်(န်)", "ခူ(န်)").
 * 3. Structured VocabularyItem interface with ID 1 to 500 across 11 complete chapters.
 */

export interface VocabularyItem {
  id: number;
  thai: string;
  phonetic: string;
  myanmarReading: string;
  meaning: string;
  tone: string;
  category: string;
}

export const VOCABULARY_DATA: VocabularyItem[] = [
  {
    "id": 1,
    "thai": "ผม",
    "phonetic": "/phǒm/",
    "myanmarReading": "ဖုန်(မ်)",
    "meaning": "ကျွန်တော် (ယဉ်ကျေးသော အမျိုးသားသုံး)",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 2,
    "thai": "ดิฉัน",
    "phonetic": "/dì-chán/",
    "myanmarReading": "ဒီချန်(န်)",
    "meaning": "ကျွန်မ (တရားဝင် အမျိုးသမီးသုံး)",
    "tone": "Low + High Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 3,
    "thai": "ฉัน",
    "phonetic": "/chán/",
    "myanmarReading": "ချန်(န်)",
    "meaning": "ငါ / ကျုပ် / ကျွန်မ (ရင်းနှီးသော အသုံး)",
    "tone": "High Tone (အသံမြင့်)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 4,
    "thai": "คุณ",
    "phonetic": "/khun/",
    "myanmarReading": "ခူ(န်)",
    "meaning": "သင် / မင်း / ရှင် / ခင်ဗျား",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 5,
    "thai": "เธอ",
    "phonetic": "/thəə/",
    "myanmarReading": "ထraw(ရ်)",
    "meaning": "နင် / မင်း / သူ (မိန်းကလေး)",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 6,
    "thai": "เขา",
    "phonetic": "/kháw/",
    "myanmarReading": "ခေါင်(ဝ်)",
    "meaning": "သူ / သူမ",
    "tone": "High Tone (အသံမြင့်)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 7,
    "thai": "พวกเรา",
    "phonetic": "/phûak-raw/",
    "myanmarReading": "ဖွတ်(က်)ရောင်(ဝ်)",
    "meaning": "ငါတို့ / ကျွန်ုပ်တို့",
    "tone": "Falling + Mid Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 8,
    "thai": "พวกเขา",
    "phonetic": "/phûak-kháw/",
    "myanmarReading": "ဖွတ်(က်)ခေါင်(ဝ်)",
    "meaning": "သူတို့",
    "tone": "Falling + High Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 9,
    "thai": "พวกคุณ",
    "phonetic": "/phûak-khun/",
    "myanmarReading": "ဖွတ်(က်)ခူ(န်)",
    "meaning": "ခင်ဗျားတို့ / ရှင်တို့ / မင်းတို့",
    "tone": "Falling + Mid Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 10,
    "thai": "ท่าน",
    "phonetic": "/thâan/",
    "myanmarReading": "ထာန့်(န်)",
    "meaning": "လူကြီးမင်း / အရှင်ဘုရား / ဆရာတော်",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 11,
    "thai": "มัน",
    "phonetic": "/man/",
    "myanmarReading": "မန်(န်)",
    "meaning": "၎င်း / ဒင်း / အကောင်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 12,
    "thai": "ใคร",
    "phonetic": "/khray/",
    "myanmarReading": "ခရိုင်း(ယ်)",
    "meaning": "ဘယ်သူလဲ",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 13,
    "thai": "อะไร",
    "phonetic": "/ʔa-ray/",
    "myanmarReading": "အရိုင်း(ယ်)",
    "meaning": "ဘာလဲ / အဘယ်အရာ",
    "tone": "Low + Mid Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 14,
    "thai": "ที่ไหน",
    "phonetic": "/thîi-nǎy/",
    "myanmarReading": "ထီးနိုင်း(ယ်)",
    "meaning": "ဘယ်မှာလဲ / ဘယ်အရပ်",
    "tone": "Falling + Rising Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 15,
    "thai": "เมื่อไหร่",
    "phonetic": "/mʉ̂a-rày/",
    "myanmarReading": "မြွာရိုင်း(ယ်)",
    "meaning": "ဘယ်တော့လဲ / မည်သည့်အချိန်",
    "tone": "Falling + Low Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 16,
    "thai": "ทำไม",
    "phonetic": "/tham-may/",
    "myanmarReading": "ထမ်(မ်)မိုင်း(ယ်)",
    "meaning": "ဘာကြောင့်လဲ / အဘယ်ကြောင့်",
    "tone": "Mid + Mid Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 17,
    "thai": "อย่างไร",
    "phonetic": "/yàaŋ-ray/",
    "myanmarReading": "ယောင်း(င်)ရိုင်း(ယ်)",
    "meaning": "ဘယ်လိုလဲ / မည်သို့",
    "tone": "Low + Mid Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 18,
    "thai": "เท่าไหร่",
    "phonetic": "/thâw-rày/",
    "myanmarReading": "ထောက်(ဝ်)ရိုင်း(ယ်)",
    "meaning": "ဘယ်လောက်လဲ",
    "tone": "Falling + Low Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 19,
    "thai": "กี่",
    "phonetic": "/kìi/",
    "myanmarReading": "ကီ",
    "meaning": "ဘယ်နှစ် (အရေအတွက်)",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 20,
    "thai": "ใช่",
    "phonetic": "/chây/",
    "myanmarReading": "ချိုင်း(ယ်)",
    "meaning": "ဟုတ်တယ် / မှန်တယ်",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 21,
    "thai": "ไม่ใช่",
    "phonetic": "/mây-chây/",
    "myanmarReading": "မိုင်း(ယ်)ချိုင်း(ယ်)",
    "meaning": "မဟုတ်ဘူး / မမှန်ပါ",
    "tone": "Falling + Falling Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 22,
    "thai": "มี",
    "phonetic": "/mii/",
    "myanmarReading": "မီ",
    "meaning": "ရှိတယ်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 23,
    "thai": "ไม่มี",
    "phonetic": "/mây-mii/",
    "myanmarReading": "မိုင်း(ယ်)မီ",
    "meaning": "မရှိဘူး",
    "tone": "Falling + Mid Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 24,
    "thai": "เป็น",
    "phonetic": "/pen/",
    "myanmarReading": "ပင်(န်)",
    "meaning": "ဖြစ်သည် / တတ်သည်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 25,
    "thai": "อยู่",
    "phonetic": "/yùu/",
    "myanmarReading": "ယူ",
    "meaning": "ရှိသည် / နေထိုင်သည်",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 26,
    "thai": "ไป",
    "phonetic": "/pay/",
    "myanmarReading": "ပိုင်း(ယ်)",
    "meaning": "သွားသည်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 27,
    "thai": "มา",
    "phonetic": "/maa/",
    "myanmarReading": "မာ",
    "meaning": "လာသည်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 28,
    "thai": "กิน",
    "phonetic": "/kin/",
    "myanmarReading": "ကင်(န်)",
    "meaning": "စားသည်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 29,
    "thai": "ดื่ม",
    "phonetic": "/dʉ̀ʉm/",
    "myanmarReading": "ဒွမ်(မ်)",
    "meaning": "သောက်သည်",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 30,
    "thai": "ชอบ",
    "phonetic": "/chɔ̂ɔp/",
    "myanmarReading": "ချောပ်(ပ်)",
    "meaning": "ကြိုက်သည် / နှစ်သက်သည်",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 31,
    "thai": "ไม่ชอบ",
    "phonetic": "/mây-chɔ̂ɔp/",
    "myanmarReading": "မိုင်း(ယ်)ချောပ်(ပ်)",
    "meaning": "မကြိုက်ဘူး / မနှစ်သက်ပါ",
    "tone": "Falling + Falling Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 32,
    "thai": "เอา",
    "phonetic": "/ʔaw/",
    "myanmarReading": "အောင်(ဝ်)",
    "meaning": "ယူသည် / လိုချင်သည်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 33,
    "thai": "ไม่เอา",
    "phonetic": "/mây-ʔaw/",
    "myanmarReading": "မိုင်း(ယ်)အောင်(ဝ်)",
    "meaning": "မယူဘူး / မလိုချင်ပါ",
    "tone": "Falling + Mid Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 34,
    "thai": "รู้",
    "phonetic": "/rúu/",
    "myanmarReading": "ရူး",
    "meaning": "သိသည်",
    "tone": "High Tone (အသံမြင့်)",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 35,
    "thai": "ไม่รู้",
    "phonetic": "/mây-rúu/",
    "myanmarReading": "မိုင်း(ယ်)ရူး",
    "meaning": "မသိပါ / မသိဘူး",
    "tone": "Falling + High Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 36,
    "thai": "เข้าใจ",
    "phonetic": "/khâw-cay/",
    "myanmarReading": "ခေါက်(ဝ်)ကျိုင်း(ယ်)",
    "meaning": "နားလည်သည်",
    "tone": "Falling + Mid Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 37,
    "thai": "ไม่เข้าใจ",
    "phonetic": "/mây-khâw-cay/",
    "myanmarReading": "မိုင်း(ယ်)ခေါက်(ဝ်)ကျိုင်း(ယ်)",
    "meaning": "နားမလည်ပါ",
    "tone": "Falling + Falling + Mid Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 38,
    "thai": "ช่วยด้วย",
    "phonetic": "/chûay-dûay/",
    "myanmarReading": "ချွေ့(ယ်)ဒွေ့(ယ်)",
    "meaning": "ကယ်ပါဦး / ကူညီပါဦး",
    "tone": "Falling + Falling Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 39,
    "thai": "ขอบคุณ",
    "phonetic": "/khɔ̀ɔp-khun/",
    "myanmarReading": "ခေါ်ပ်(ပ်)ခူ(န်)",
    "meaning": "ကျေးဇူးတင်ပါတယ်",
    "tone": "Low + Mid Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 40,
    "thai": "ขอโทษ",
    "phonetic": "/khɔ̌ɔ-thôot/",
    "myanmarReading": "ခေါထို့(တ်)",
    "meaning": "တောင်းပန်ပါတယ် / ခွင့်လွှတ်ပါ",
    "tone": "Rising + Falling Tone",
    "category": "နာမ်စားနှင့် အခြေခံ"
  },
  {
    "id": 41,
    "thai": "ประเทศ",
    "phonetic": "/prà-thêet/",
    "myanmarReading": "ပရာထစ်(တ်)",
    "meaning": "နိုင်ငံ / တိုင်းပြည်",
    "tone": "Low + Falling Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 42,
    "thai": "ประเทศไทย",
    "phonetic": "/prà-thêet-thay/",
    "myanmarReading": "ပရာထစ်(တ်)ထိုင်း(ယ်)",
    "meaning": "ထိုင်းနိုင်ငံ",
    "tone": "Low + Falling + Mid Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 43,
    "thai": "ประเทศพม่า",
    "phonetic": "/prà-thêet-phá-mâa/",
    "myanmarReading": "ပရာထစ်(တ်)ဖာမာ့",
    "meaning": "မြန်မာနိုင်ငံ",
    "tone": "Low + Falling + High + Falling Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 44,
    "thai": "ประเทศจีน",
    "phonetic": "/prà-thêet-ciin/",
    "myanmarReading": "ပရာထစ်(တ်)ကျီးန်(န်)",
    "meaning": "တရုတ်နိုင်ငံ",
    "tone": "Low + Falling + Mid Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 45,
    "thai": "ประเทศญี่ปุ่น",
    "phonetic": "/prà-thêet-yîi-pùn/",
    "myanmarReading": "ပရာထစ်(တ်)ယီးပုန့်(န်)",
    "meaning": "ဂျပန်နိုင်ငံ",
    "tone": "Low + Falling + Falling + Low Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 46,
    "thai": "สหรัฐอเมริกา",
    "phonetic": "/sà-hà-rát-ʔa-mee-rí-kaa/",
    "myanmarReading": "ဆာဟာရတ်(တ်)အမေရိကာ",
    "meaning": "အမေရိကန်ပြည်ထောင်စု",
    "tone": "Complex Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 47,
    "thai": "ประเทศลาว",
    "phonetic": "/prà-thêet-laaw/",
    "myanmarReading": "ပရာထစ်(တ်)လောင်(ဝ်)",
    "meaning": "လာအိုနိုင်ငံ",
    "tone": "Low + Falling + Mid Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 48,
    "thai": "ประเทศสิงคโปร์",
    "phonetic": "/prà-thêet-sǐŋ-khá-poo/",
    "myanmarReading": "ပရာထစ်(တ်)ဆင်(င်)ခါပို",
    "meaning": "စင်ကာပူနိုင်ငံ",
    "tone": "Complex Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 49,
    "thai": "ประเทศมาเลเซีย",
    "phonetic": "/prà-thêet-maa-lee-siia/",
    "myanmarReading": "ပရာထစ်(တ်)မာလေစီယာ",
    "meaning": "မလေးရှားနိုင်ငံ",
    "tone": "Complex Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 50,
    "thai": "กรุงเทพฯ",
    "phonetic": "/kruŋ-thêep/",
    "myanmarReading": "ကရုန်(င်)ထိပ်(ပ်)",
    "meaning": "ဘန်ကောက်မြို့တော်",
    "tone": "Mid + Falling Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 51,
    "thai": "เชียงใหม่",
    "phonetic": "/chiiang-mày/",
    "myanmarReading": "ချင်း(င်)မိုင်း(ယ်)",
    "meaning": "ချင်းမိုင်မြို့",
    "tone": "Mid + Low Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 52,
    "thai": "พัทยา",
    "phonetic": "/phát-thá-yaa/",
    "myanmarReading": "ဖတ်(တ်)ထာယာ",
    "meaning": "ပတ္တရားကမ်းခြေမြို့",
    "tone": "High + High + Mid Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 53,
    "thai": "ภูเก็ต",
    "phonetic": "/phuu-kèt/",
    "myanmarReading": "ဖူးကစ်(တ်)",
    "meaning": "ဖူးခက်ကျွန်းမြို့",
    "tone": "Mid + Low Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 54,
    "thai": "เมือง",
    "phonetic": "/mʉaŋ/",
    "myanmarReading": "မွမ်(င်)",
    "meaning": "မြို့",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 55,
    "thai": "เมืองหลวง",
    "phonetic": "/mʉaŋ-lǔaŋ/",
    "myanmarReading": "မွမ်(င်)လွန်(င်)",
    "meaning": "မြို့တော်",
    "tone": "Mid + Rising Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 56,
    "thai": "ต่างประเทศ",
    "phonetic": "/tàaŋ-prà-thêet/",
    "myanmarReading": "တောင်း(င်)ပရာထစ်(တ်)",
    "meaning": "နိုင်ငံခြား",
    "tone": "Low + Low + Falling Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 57,
    "thai": "บ้าน",
    "phonetic": "/bâan/",
    "myanmarReading": "ဘန်း(န်)",
    "meaning": "အိမ် / နေအိမ်",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 58,
    "thai": "ที่ทำงาน",
    "phonetic": "/thîi-tham-ŋaan/",
    "myanmarReading": "ထီးထမ်(မ်)ငါန်း(န်)",
    "meaning": "အလုပ်ခွင် / အလုပ်ရုံး",
    "tone": "Falling + Mid + Mid Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 59,
    "thai": "โรงเรียน",
    "phonetic": "/rooŋ-rian/",
    "myanmarReading": "ရုန်(င်)ရီယန်(န်)",
    "meaning": "ကျောင်း / စာသင်ကျောင်း",
    "tone": "Mid + Mid Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 60,
    "thai": "มหาวิทยาลัย",
    "phonetic": "/má-hǎa-wít-thá-yaa-lay/",
    "myanmarReading": "မဟာဝစ်(တ်)ထာယာလိုင်း(ယ်)",
    "meaning": "တက္ကသိုလ်",
    "tone": "Complex Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 61,
    "thai": "โรงแรม",
    "phonetic": "/rooŋ-rɛɛm/",
    "myanmarReading": "ရုန်(င်)ရမ်(မ်)",
    "meaning": "ဟိုတယ်",
    "tone": "Mid + Mid Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 62,
    "thai": "ตลาด",
    "phonetic": "/tà-làat/",
    "myanmarReading": "တလာ(တ်)",
    "meaning": "ဈေး",
    "tone": "Low + Low Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 63,
    "thai": "ตลาดนัด",
    "phonetic": "/tà-làat-nát/",
    "myanmarReading": "တလာ(တ်)နတ်(တ်)",
    "meaning": "ညဈေး / ပျံကျဈေး",
    "tone": "Low + Low + High Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 64,
    "thai": "เซเว่น",
    "phonetic": "/see-wên/",
    "myanmarReading": "ဆဲဗင်း(န်)",
    "meaning": "ဆဲဗင်းအလဲဗင်း စတိုးဆိုင်",
    "tone": "Mid + Falling Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 65,
    "thai": "ซูเปอร์มาร์เก็ต",
    "phonetic": "/suu-pə̂ə-maa-kèt/",
    "myanmarReading": "ဆူပါမားကစ်(တ်)",
    "meaning": "စူပါမားကတ်",
    "tone": "Complex Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 66,
    "thai": "ห้างสรรพสินค้า",
    "phonetic": "/hâaŋ-sàp-phá-sǐn-kháa/",
    "myanmarReading": "ဟောင်း(င်)ဆပ်(ပ်)ဖာဆင်(န်)ခါး",
    "meaning": "ကုန်တိုက်ကြီး / ရှော့ပင်းမောလ်",
    "tone": "Complex Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 67,
    "thai": "ร้านค้า",
    "phonetic": "/ráan-kháa/",
    "myanmarReading": "ရန်း(န်)ခါး",
    "meaning": "ဆိုင် / ကုန်စုံဆိုင်",
    "tone": "High + High Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 68,
    "thai": "ร้านอาหาร",
    "phonetic": "/ráan-ʔaa-hǎan/",
    "myanmarReading": "ရန်း(န်)အာဟန်(န်)",
    "meaning": "စားသောက်ဆိုင်",
    "tone": "High + Mid + Rising Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 69,
    "thai": "ร้านกาแฟ",
    "phonetic": "/ráan-kaa-fɛɛ/",
    "myanmarReading": "ရန်း(န်)ကာဖယ်(လ်)",
    "meaning": "ကော်ဖီဆိုင်",
    "tone": "High + Mid + Mid Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 70,
    "thai": "ธนาคาร",
    "phonetic": "/thá-naa-khaan/",
    "myanmarReading": "ထာနာခါန်း(န်)",
    "meaning": "ဘဏ်တိုက်",
    "tone": "High + Mid + Mid Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 71,
    "thai": "สถานทูต",
    "phonetic": "/sà-thǎan-thûut/",
    "myanmarReading": "ဆာထာန်(န်)ထု(တ်)",
    "meaning": "သံရုံး",
    "tone": "Low + Rising + Falling Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 72,
    "thai": "สถานีตำรวจ",
    "phonetic": "/sà-thǎa-nii-tam-rùat/",
    "myanmarReading": "ဆာထာနီတမ်(မ်)ရွတ်(တ်)",
    "meaning": "ရဲစခန်း",
    "tone": "Complex Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 73,
    "thai": "โรงพยาบาล",
    "phonetic": "/rooŋ-phá-yaa-baan/",
    "myanmarReading": "ရုန်(င်)ဖာယာဘာန်(န်)",
    "meaning": "ဆေးရုံကြီး",
    "tone": "Mid + High + Mid + Mid Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 74,
    "thai": "คลินิก",
    "phonetic": "/khlií-nìk/",
    "myanmarReading": "ခလီးနစ်(က်)",
    "meaning": "ဆေးခန်း",
    "tone": "High + Low Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 75,
    "thai": "ร้านขายยา",
    "phonetic": "/ráan-khǎay-yaa/",
    "myanmarReading": "ရန်း(န်)ခိုင်(ယ်)ယာ",
    "meaning": "ဆေးဆိုင်",
    "tone": "High + Rising + Mid Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 76,
    "thai": "วัด",
    "phonetic": "/wát/",
    "myanmarReading": "ဝတ်(တ်)",
    "meaning": "ဘုရားကျောင်း / ဘုန်းကြီးကျောင်း",
    "tone": "High Tone (အသံမြင့်)",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 77,
    "thai": "มัสยิด",
    "phonetic": "/mát-sà-yít/",
    "myanmarReading": "မတ်(တ်)ဆာယစ်(တ်)",
    "meaning": "ဗလီဝတ်ကျောင်း",
    "tone": "High + Low + High Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 78,
    "thai": "โบสถ์",
    "phonetic": "/bòot/",
    "myanmarReading": "ဘို့(တ်)",
    "meaning": "ခရစ်ယာန်ဘုရားရှိခိုးကျောင်း",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 79,
    "thai": "สวนสาธารณะ",
    "phonetic": "/sǔan-sǎa-thaa-rá-ná/",
    "myanmarReading": "ဆွန်(န်)ဆာထာရာဏ",
    "meaning": "အများပြည်သူပန်းခြံ",
    "tone": "Complex Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 80,
    "thai": "สวนสัตว์",
    "phonetic": "/sǔan-sàt/",
    "myanmarReading": "ဆွန်(န်)ဆတ်(တ်)",
    "meaning": "တိရစ္ဆာန်ရုံ",
    "tone": "Rising + Low Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 81,
    "thai": "พิพิธภัณฑ์",
    "phonetic": "/phí-phít-thá-phan/",
    "myanmarReading": "ဖီဖစ်(တ်)ထာဖန်(န်)",
    "meaning": "ပြတိုက်",
    "tone": "High + High + High + Mid Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 82,
    "thai": "ห้องสมุด",
    "phonetic": "/hɔ̂ɔŋ-sà-mùt/",
    "myanmarReading": "ဟောင့်(င်)ဆာမုတ်(တ်)",
    "meaning": "စာကြည့်တိုက်",
    "tone": "Falling + Low + Low Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 83,
    "thai": "ทะเล",
    "phonetic": "/thá-lee/",
    "myanmarReading": "ထာလေ",
    "meaning": "ပင်လယ် / ကမ်းခြေ",
    "tone": "High + Mid Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 84,
    "thai": "ภูเขา",
    "phonetic": "/phuu-khǎw/",
    "myanmarReading": "ဖူးခေါင်(ဝ်)",
    "meaning": "တောင်တန်း / တောင်",
    "tone": "Mid + Rising Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 85,
    "thai": "น้ำตก",
    "phonetic": "/nám-tòk/",
    "myanmarReading": "နမ်း(မ်)တုတ်(က်)",
    "meaning": "ရေတံခွန်",
    "tone": "High + Low Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 86,
    "thai": "เกาะ",
    "phonetic": "/kɔ̀/",
    "myanmarReading": "ကော့(က်)",
    "meaning": "ကျွန်း",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 87,
    "thai": "แม่น้ำ",
    "phonetic": "/mɛ̂ɛ-nám/",
    "myanmarReading": "မဲနမ်း(မ်)",
    "meaning": "မြစ်",
    "tone": "Falling + High Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 88,
    "thai": "ถนน",
    "phonetic": "/thà-nǒn/",
    "myanmarReading": "ထာနုန့်(န်)",
    "meaning": "လမ်းမကြီး",
    "tone": "Low + Rising Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 89,
    "thai": "ซอย",
    "phonetic": "/sɔɔy/",
    "myanmarReading": "ဆွိုင်း(ယ်)",
    "meaning": "လမ်းကြား / ဆွိုင်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 90,
    "thai": "สะพาน",
    "phonetic": "/sà-phaan/",
    "myanmarReading": "ဆာဖာန်း(န်)",
    "meaning": "တံတား",
    "tone": "Low + Mid Tone",
    "category": "နိုင်ငံနှင့် နေရာများ"
  },
  {
    "id": 91,
    "thai": "ศูนย์",
    "phonetic": "/sǔun/",
    "myanmarReading": "ဆူန်(န်)",
    "meaning": "သုည (၀)",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 92,
    "thai": "หนึ่ง",
    "phonetic": "/nʉ̀ŋ/",
    "myanmarReading": "နွန်း(င်)",
    "meaning": "တစ် (၁)",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 93,
    "thai": "สอง",
    "phonetic": "/sɔ̌ɔŋ/",
    "myanmarReading": "ဆောင်(င်)",
    "meaning": "နှစ် (၂)",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 94,
    "thai": "สาม",
    "phonetic": "/sǎam/",
    "myanmarReading": "ဆာမ်(မ်)",
    "meaning": "သုံး (၃)",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 95,
    "thai": "สี่",
    "phonetic": "/sìi/",
    "myanmarReading": "ဆီ",
    "meaning": "လေး (၄)",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 96,
    "thai": "ห้า",
    "phonetic": "/hâa/",
    "myanmarReading": "ဟား",
    "meaning": "ငါး (၅)",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 97,
    "thai": "หก",
    "phonetic": "/hòk/",
    "myanmarReading": "ဟုတ်(က်)",
    "meaning": "ခြောက် (၆)",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 98,
    "thai": "เจ็ด",
    "phonetic": "/cèt/",
    "myanmarReading": "ကျစ်(တ်)",
    "meaning": "ခုနစ် (၇)",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 99,
    "thai": "แปด",
    "phonetic": "/pɛ̀ɛt/",
    "myanmarReading": "ပတ်(တ်)",
    "meaning": "ရှစ် (၈)",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 100,
    "thai": "เก้า",
    "phonetic": "/kâaw/",
    "myanmarReading": "ကောက်(ဝ်)",
    "meaning": "ကိုး (၉)",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 101,
    "thai": "สิบ",
    "phonetic": "/sìp/",
    "myanmarReading": "ဆိပ်(ပ်)",
    "meaning": "တစ်ဆယ် (၁၀)",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 102,
    "thai": "สิบเอ็ด",
    "phonetic": "/sìp-ʔèt/",
    "myanmarReading": "ဆိပ်(ပ်)အစ်(တ်)",
    "meaning": "ဆယ့်တစ် (၁၁)",
    "tone": "Low + Low Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 103,
    "thai": "สิบสอง",
    "phonetic": "/sìp-sɔ̌ɔŋ/",
    "myanmarReading": "ဆိပ်(ပ်)ဆောင်(င်)",
    "meaning": "ဆယ့်နှစ် (၁၂)",
    "tone": "Low + Rising Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 104,
    "thai": "ยี่สิบ",
    "phonetic": "/yîi-sìp/",
    "myanmarReading": "ယီးဆိပ်(ပ်)",
    "meaning": "နှစ်ဆယ် (၂၀)",
    "tone": "Falling + Low Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 105,
    "thai": "ยี่สิบเอ็ด",
    "phonetic": "/yîi-sìp-ʔèt/",
    "myanmarReading": "ယီးဆိပ်(ပ်)အစ်(တ်)",
    "meaning": "နှစ်ဆယ့်တစ် (၂၁)",
    "tone": "Falling + Low + Low Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 106,
    "thai": "สามสิบ",
    "phonetic": "/sǎam-sìp/",
    "myanmarReading": "ဆာမ်(မ်)ဆိပ်(ပ်)",
    "meaning": "သုံးဆယ် (၃၀)",
    "tone": "Rising + Low Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 107,
    "thai": "สี่สิบ",
    "phonetic": "/sìi-sìp/",
    "myanmarReading": "ဆီဆိပ်(ပ်)",
    "meaning": "လေးဆယ် (၄၀)",
    "tone": "Low + Low Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 108,
    "thai": "ห้าสิบ",
    "phonetic": "/hâa-sìp/",
    "myanmarReading": "ဟားဆိပ်(ပ်)",
    "meaning": "ငါးဆယ် (၅၀)",
    "tone": "Falling + Low Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 109,
    "thai": "หกสิบ",
    "phonetic": "/hòk-sìp/",
    "myanmarReading": "ဟုတ်(က်)ဆိပ်(ပ်)",
    "meaning": "ခြောက်ဆယ် (၆၀)",
    "tone": "Low + Low Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 110,
    "thai": "เจ็ดสิบ",
    "phonetic": "/cèt-sìp/",
    "myanmarReading": "ကျစ်(တ်)ဆိပ်(ပ်)",
    "meaning": "ခုနစ်ဆယ် (၇၀)",
    "tone": "Low + Low Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 111,
    "thai": "แปดสิบ",
    "phonetic": "/pɛ̀ɛt-sìp/",
    "myanmarReading": "ပတ်(တ်)ဆိပ်(ပ်)",
    "meaning": "ရှစ်ဆယ် (၈၀)",
    "tone": "Low + Low Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 112,
    "thai": "เก้าสิบ",
    "phonetic": "/kâaw-sìp/",
    "myanmarReading": "ကောက်(ဝ်)ဆိပ်(ပ်)",
    "meaning": "ကိုးဆယ် (၉၀)",
    "tone": "Falling + Low Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 113,
    "thai": "หนึ่งร้อย",
    "phonetic": "/nʉ̀ŋ-rɔ́ɔy/",
    "myanmarReading": "နွန်း(င်)ရွိုင်း(ယ်)",
    "meaning": "တစ်ရာ (၁၀၀)",
    "tone": "Low + High Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 114,
    "thai": "สองร้อย",
    "phonetic": "/sɔ̌ɔŋ-rɔ́ɔy/",
    "myanmarReading": "ဆောင်(င်)ရွိုင်း(ယ်)",
    "meaning": "နှစ်ရာ (၂၀၀)",
    "tone": "Rising + High Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 115,
    "thai": "ห้าร้อย",
    "phonetic": "/hâa-rɔ́ɔy/",
    "myanmarReading": "ဟားရွိုင်း(ယ်)",
    "meaning": "ငါးရာ (၅၀၀)",
    "tone": "Falling + High Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 116,
    "thai": "หนึ่งพัน",
    "phonetic": "/nʉ̀ŋ-phan/",
    "myanmarReading": "နွန်း(င်)ဖန်(န်)",
    "meaning": "တစ်ထောင် (၁,၀၀၀)",
    "tone": "Low + Mid Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 117,
    "thai": "ห้าพัน",
    "phonetic": "/hâa-phan/",
    "myanmarReading": "ဟားဖန်(န်)",
    "meaning": "ငါးထောင် (၅,၀၀၀)",
    "tone": "Falling + Mid Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 118,
    "thai": "หนึ่งหมื่น",
    "phonetic": "/nʉ̀ŋ-mʉ̀ʉn/",
    "myanmarReading": "နွန်း(င်)မွန်း(န်)",
    "meaning": "တစ်သောင်း (၁၀,၀၀၀)",
    "tone": "Low + Low Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 119,
    "thai": "ห้าหมื่น",
    "phonetic": "/hâa-mʉ̀ʉn/",
    "myanmarReading": "ဟားမွန်း(န်)",
    "meaning": "ငါးသောင်း (၅၀,၀၀၀)",
    "tone": "Falling + Low Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 120,
    "thai": "หนึ่งแสน",
    "phonetic": "/nʉ̀ŋ-sɛ̌ɛn/",
    "myanmarReading": "နွန်း(င်)ဆန်(န်)",
    "meaning": "တစ်သိန်း (၁၀၀,၀၀၀)",
    "tone": "Low + Rising Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 121,
    "thai": "หนึ่งล้าน",
    "phonetic": "/nʉ̀ŋ-láan/",
    "myanmarReading": "နွန်း(င်)လန်း(န်)",
    "meaning": "တစ်သန်း (၁,၀၀၀,၀၀၀)",
    "tone": "Low + High Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 122,
    "thai": "สิบล้าน",
    "phonetic": "/sìp-láan/",
    "myanmarReading": "ဆိပ်(ပ်)လန်း(န်)",
    "meaning": "ဆယ်သန်း (၁၀,၀၀၀,၀၀၀)",
    "tone": "Low + High Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 123,
    "thai": "เงิน",
    "phonetic": "/ŋən/",
    "myanmarReading": "ငင်(န်)",
    "meaning": "ငွေ / ပိုက်ဆံ",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 124,
    "thai": "บาท",
    "phonetic": "/bàat/",
    "myanmarReading": "ဘတ်(တ်)",
    "meaning": "ဘတ် (ထိုင်းငွေကြေး)",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 125,
    "thai": "สตางค์",
    "phonetic": "/sà-taaŋ/",
    "myanmarReading": "ဆာတောင်း(င်)",
    "meaning": "စတန် (အကြွေပြား)",
    "tone": "Low + Mid Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 126,
    "thai": "เงินสด",
    "phonetic": "/ŋən-sòt/",
    "myanmarReading": "ငင်(န်)ဆုတ်(တ်)",
    "meaning": "ငွေသား",
    "tone": "Mid + Low Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 127,
    "thai": "เงินทอน",
    "phonetic": "/ŋən-thɔɔn/",
    "myanmarReading": "ငင်(န်)ထွန်း(န်)",
    "meaning": "အမ်းငွေ / အကြွေ",
    "tone": "Mid + Mid Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 128,
    "thai": "บัตรเครดิต",
    "phonetic": "/bàt-khree-dìt/",
    "myanmarReading": "ဘတ်(တ်)ခရေဒစ်(တ်)",
    "meaning": "ခရက်ဒစ်ကတ်",
    "tone": "Low + Mid + Low Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 129,
    "thai": "โอนเงิน",
    "phonetic": "/ʔoon-ŋən/",
    "myanmarReading": "အိုန်(န်)ငင်(န်)",
    "meaning": "ငွေလွှဲသည်",
    "tone": "Mid + Mid Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 130,
    "thai": "ฝากเงิน",
    "phonetic": "/fàak-ŋən/",
    "myanmarReading": "ဖာက်(က်)ငင်(န်)",
    "meaning": "ငွေသွင်းသည်",
    "tone": "Low + Mid Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 131,
    "thai": "ถอนเงิน",
    "phonetic": "/thɔ̌ɔn-ŋən/",
    "myanmarReading": "ထွန်း(န်)ငင်(န်)",
    "meaning": "ငွေထုတ်သည်",
    "tone": "Rising + Mid Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 132,
    "thai": "สแกน",
    "phonetic": "/sà-kɛɛn/",
    "myanmarReading": "ဆာကန်(န်)",
    "meaning": "စကင်ဖတ်သည် (ငွေပေးချေမှု)",
    "tone": "Low + Mid Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 133,
    "thai": "พร้อมเพย์",
    "phonetic": "/phrɔ́ɔm-phee/",
    "myanmarReading": "ဖရွမ်း(မ်)ဖေး",
    "meaning": "PromptPay (ထိုင်းငွေလွှဲစနစ်)",
    "tone": "High + Mid Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 134,
    "thai": "ตู้เอทีเอ็ม",
    "phonetic": "/tûu-ʔee-thii-ʔem/",
    "myanmarReading": "တုအေတီအမ်(မ်)",
    "meaning": "ATM စက်",
    "tone": "Falling + Mid Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 135,
    "thai": "บัญชีธนาคาร",
    "phonetic": "/ban-chii-thá-naa-khaan/",
    "myanmarReading": "ဘန်(န်)ချီထာနာခါန်း(န်)",
    "meaning": "ဘဏ်စာရင်း / ဘဏ်အကောင့်",
    "tone": "Complex Tone",
    "category": "ကိန်းဂဏန်းနှင့် ငွေကြေး"
  },
  {
    "id": 136,
    "thai": "เสื้อ",
    "phonetic": "/sʉ̂a/",
    "myanmarReading": "ဆွေ့(အ်)",
    "meaning": "အင်္ကျီ",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 137,
    "thai": "เสื้อยืด",
    "phonetic": "/sʉ̂a-yʉ̂ʉt/",
    "myanmarReading": "ဆွေ့(အ်)ယွတ်(တ်)",
    "meaning": "တီရှပ်အင်္ကျီ",
    "tone": "Falling + Falling Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 138,
    "thai": "เสื้อเชิ้ต",
    "phonetic": "/sʉ̂a-chə́ət/",
    "myanmarReading": "ဆွေ့(အ်)ချက်(တ်)",
    "meaning": "ရှပ်အင်္ကျီ",
    "tone": "Falling + High Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 139,
    "thai": "เสื้อแขนสั้น",
    "phonetic": "/sʉ̂a-khɛ̌ɛn-sân/",
    "myanmarReading": "ဆွေ့(အ်)ခန်(န်)ဆန်း(န်)",
    "meaning": "လက်တိုအင်္ကျီ",
    "tone": "Falling + Rising + Falling Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 140,
    "thai": "เสื้อแขนยาว",
    "phonetic": "/sʉ̂a-khɛ̌ɛn-yaaw/",
    "myanmarReading": "ဆွေ့(အ်)ခန်(န်)ယောင်(ဝ်)",
    "meaning": "လက်ရှည်အင်္ကျီ",
    "tone": "Falling + Rising + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 141,
    "thai": "เสื้อหนาว",
    "phonetic": "/sʉ̂a-nǎaw/",
    "myanmarReading": "ဆွေ့(အ်)နောင်း(ဝ်)",
    "meaning": "ဆွယ်တာ / အနွေးထည်",
    "tone": "Falling + Rising Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 142,
    "thai": "เสื้อกันฝน",
    "phonetic": "/sʉ̂a-kan-fǒn/",
    "myanmarReading": "ဆွေ့(အ်)ကန်(န်)ဖုန့်(န်)",
    "meaning": "မိုးကာအင်္ကျီ",
    "tone": "Falling + Mid + Rising Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 143,
    "thai": "กางเกง",
    "phonetic": "/kaaŋ-keeŋ/",
    "myanmarReading": "ကန်(င်)ကိန်(င်)",
    "meaning": "ဘောင်းဘီ",
    "tone": "Mid + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 144,
    "thai": "กางเกงขาสั้น",
    "phonetic": "/kaaŋ-keeŋ-khǎa-sân/",
    "myanmarReading": "ကန်(င်)ကိန်(င်)ခါဆန်း(န်)",
    "meaning": "ဘောင်းဘီတို",
    "tone": "Mid + Mid + Rising + Falling Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 145,
    "thai": "กางเกงขายาว",
    "phonetic": "/kaaŋ-keeŋ-khǎa-yaaw/",
    "myanmarReading": "ကန်(င်)ကိန်(င်)ခါယောင်(ဝ်)",
    "meaning": "ဘောင်းဘီရှည်",
    "tone": "Mid + Mid + Rising + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 146,
    "thai": "กางเกงยีนส์",
    "phonetic": "/kaaŋ-keeŋ-yiin/",
    "myanmarReading": "ကန်(င်)ကိန်(င်)ယီးန်(န်)",
    "meaning": "ဂျင်းဘောင်းဘီ",
    "tone": "Mid + Mid + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 147,
    "thai": "กระโปรง",
    "phonetic": "/krà-prooŋ/",
    "myanmarReading": "ကရာပရုန်(င်)",
    "meaning": "စကတ်",
    "tone": "Low + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 148,
    "thai": "ชุดนอน",
    "phonetic": "/chút-nɔɔn/",
    "myanmarReading": "ချုပ်(တ်)နွန်(န်)",
    "meaning": "အိပ်ရာဝင်အဝတ်အစား",
    "tone": "High + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 149,
    "thai": "ชุดชั้นใน",
    "phonetic": "/chút-chán-nay/",
    "myanmarReading": "ချုပ်(တ်)ချန်း(န်)နိုင်း(ယ်)",
    "meaning": "အတွင်းခံအဝတ်အစား",
    "tone": "High + High + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 150,
    "thai": "ถุงเท้า",
    "phonetic": "/thǔŋ-tháw/",
    "myanmarReading": "ထုန်(င်)ထောက်(ဝ်)",
    "meaning": "ခြေအိတ်",
    "tone": "Rising + High Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 151,
    "thai": "ถุงมือ",
    "phonetic": "/thǔŋ-mʉʉ/",
    "myanmarReading": "ထုန်(င်)မွမ်(လ်)",
    "meaning": "လက်အိတ်",
    "tone": "Rising + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 152,
    "thai": "รองเท้า",
    "phonetic": "/rɔɔŋ-tháw/",
    "myanmarReading": "ရောင်(င်)ထောက်(ဝ်)",
    "meaning": "ဖိနပ်",
    "tone": "Mid + High Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 153,
    "thai": "รองเท้าผ้าใบ",
    "phonetic": "/rɔɔŋ-tháw-phâa-bay/",
    "myanmarReading": "ရောင်(င်)ထောက်(ဝ်)ဖာဘိုင်း(ယ်)",
    "meaning": "ကင်းဗတ်ဖိနပ် / စနီကာ",
    "tone": "Complex Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 154,
    "thai": "รองเท้าแตะ",
    "phonetic": "/rɔɔŋ-tháw-tɛ̀/",
    "myanmarReading": "ရောင်(င်)ထောက်(ဝ်)တဲ",
    "meaning": "ညှပ်ဖိနပ် / ဖိနပ်ပါး",
    "tone": "Mid + High + Low Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 155,
    "thai": "รองเท้าส้นสูง",
    "phonetic": "/rɔɔŋ-tháw-sôn-sǔuŋ/",
    "myanmarReading": "ရောင်(င်)ထောက်(ဝ်)ဆုန့်(န်)ဆူန်(င်)",
    "meaning": "ဒေါက်ဖိနပ်",
    "tone": "Complex Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 156,
    "thai": "หมวก",
    "phonetic": "/mùak/",
    "myanmarReading": "မွတ်(က်)",
    "meaning": "ဦးထုပ်",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 157,
    "thai": "แว่นตา",
    "phonetic": "/wên-taa/",
    "myanmarReading": "ဝန့်(န်)တာ",
    "meaning": "မျက်မှန်",
    "tone": "Falling + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 158,
    "thai": "แว่นกันแดด",
    "phonetic": "/wên-kan-dɛ̀ɛt/",
    "myanmarReading": "ဝန့်(န်)ကန်(န်)ဒတ်(တ်)",
    "meaning": "နေကာမျက်မှန်",
    "tone": "Falling + Mid + Low Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 159,
    "thai": "เข็มขัด",
    "phonetic": "/khěm-khàt/",
    "myanmarReading": "ခမ်(မ်)ခတ်(တ်)",
    "meaning": "ခါးပတ်",
    "tone": "Rising + Low Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 160,
    "thai": "เนกไท",
    "phonetic": "/néek-thay/",
    "myanmarReading": "နိတ်(က်)ထိုင်း(ယ်)",
    "meaning": "နက်ခ်တိုင်",
    "tone": "High + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 161,
    "thai": "นาฬิกาข้อมือ",
    "phonetic": "/naa-lí-kaa-khɔ̂ɔ-mʉʉ/",
    "myanmarReading": "နာလိကာခေါ့မွမ်(လ်)",
    "meaning": "လက်ပတ်နာရီ",
    "tone": "Complex Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 162,
    "thai": "สร้อยคอ",
    "phonetic": "/sɔ̂ɔy-khɔɔ/",
    "myanmarReading": "စွေ့(ယ်)ခေါ",
    "meaning": "လည်ဆွဲကြိုး",
    "tone": "Falling + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 163,
    "thai": "แหวน",
    "phonetic": "/wɛ̌ɛn/",
    "myanmarReading": "ဝမ်(န်)",
    "meaning": "လက်စွပ်",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 164,
    "thai": "ต่างหู",
    "phonetic": "/tàaŋ-hǔu/",
    "myanmarReading": "တောင်း(င်)ဟူး",
    "meaning": "နားကပ် / နားဆွဲ",
    "tone": "Low + Rising Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 165,
    "thai": "กำไล",
    "phonetic": "/kam-lay/",
    "myanmarReading": "ကမ်(မ်)လိုင်း(ယ်)",
    "meaning": "လက်ကောက်",
    "tone": "Mid + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 166,
    "thai": "กระเป๋า",
    "phonetic": "/krà-pǎw/",
    "myanmarReading": "ကရာပေါင်(ဝ်)",
    "meaning": "အိတ်",
    "tone": "Low + Rising Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 167,
    "thai": "กระเป๋าสตางค์",
    "phonetic": "/krà-pǎw-sà-taaŋ/",
    "myanmarReading": "ကရာပေါင်(ဝ်)ဆာတောင်း(င်)",
    "meaning": "ပိုက်ဆံအိတ်",
    "tone": "Complex Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 168,
    "thai": "กระเป๋าเป้",
    "phonetic": "/krà-pǎw-pêe/",
    "myanmarReading": "ကရာပေါင်(ဝ်)ပေ့",
    "meaning": "ကျောပိုးအိတ်",
    "tone": "Low + Rising + Falling Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 169,
    "thai": "กระเป๋าเดินทาง",
    "phonetic": "/krà-pǎw-dəən-thaaŋ/",
    "myanmarReading": "ကရာပေါင်(ဝ်)ဒိန်(န်)ထာင်(င်)",
    "meaning": "ခရီးဆောင်အိတ်",
    "tone": "Complex Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 170,
    "thai": "ร่ม",
    "phonetic": "/rôm/",
    "myanmarReading": "ရုံ(မ်)",
    "meaning": "ထီး",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 171,
    "thai": "ผ้าเช็ดหน้า",
    "phonetic": "/phâa-chét-nâa/",
    "myanmarReading": "ဖာချစ်(တ်)နား",
    "meaning": "လက်ကိုင်ပဝါ",
    "tone": "Falling + High + Falling Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 172,
    "thai": "ผ้าพันคอ",
    "phonetic": "/phâa-phan-khɔɔ/",
    "myanmarReading": "ဖာဖန်(န်)ခေါ",
    "meaning": "လည်စည်းပဝါ",
    "tone": "Falling + Mid + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 173,
    "thai": "สี",
    "phonetic": "/sǐi/",
    "myanmarReading": "ဆီ",
    "meaning": "အရောင်",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 174,
    "thai": "สีแดง",
    "phonetic": "/sǐi-dɛɛŋ/",
    "myanmarReading": "ဆီဒင်(င်)",
    "meaning": "အနီရောင်",
    "tone": "Rising + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 175,
    "thai": "สีขาว",
    "phonetic": "/sǐi-khǎaw/",
    "myanmarReading": "ဆီခေါင်(ဝ်)",
    "meaning": "အဖြူရောင်",
    "tone": "Rising + Rising Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 176,
    "thai": "สีดำ",
    "phonetic": "/sǐi-dam/",
    "myanmarReading": "ဆီဒမ်(မ်)",
    "meaning": "အနက်ရောင်",
    "tone": "Rising + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 177,
    "thai": "สีน้ำเงิน",
    "phonetic": "/sǐi-nám-ŋən/",
    "myanmarReading": "ဆီနမ်း(မ်)ငင်(န်)",
    "meaning": "အပြာရင့်ရောင်",
    "tone": "Rising + High + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 178,
    "thai": "สีฟ้า",
    "phonetic": "/sǐi-fáa/",
    "myanmarReading": "ဆီဖား",
    "meaning": "အပြာနုရောင် / မိုးပြာရောင်",
    "tone": "Rising + High Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 179,
    "thai": "สีเขียว",
    "phonetic": "/sǐi-khǐaw/",
    "myanmarReading": "ဆီခီယို့",
    "meaning": "အစိမ်းရောင်",
    "tone": "Rising + Rising Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 180,
    "thai": "สีเหลือง",
    "phonetic": "/sǐi-lʉ̌aŋ/",
    "myanmarReading": "ဆီလွမ်(င်)",
    "meaning": "အဝါရောင်",
    "tone": "Rising + Rising Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 181,
    "thai": "สีส้ม",
    "phonetic": "/sǐi-sôm/",
    "myanmarReading": "ဆီဆုန့်(မ်)",
    "meaning": "လိမ္မော်ရောင်",
    "tone": "Rising + Falling Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 182,
    "thai": "สีชมพู",
    "phonetic": "/sǐi-chom-phuu/",
    "myanmarReading": "ဆီချုန်(မ်)ဖူး",
    "meaning": "ပန်းရောင်",
    "tone": "Rising + Mid + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 183,
    "thai": "แพง",
    "phonetic": "/phɛɛŋ/",
    "myanmarReading": "ဖင်(င်)",
    "meaning": "ဈေးကြီးသည်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 184,
    "thai": "ถูก",
    "phonetic": "/thùuk/",
    "myanmarReading": "ထုက်(က်)",
    "meaning": "ဈေးချိုသည် / မှန်ကန်သည်",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 185,
    "thai": "ลดราคา",
    "phonetic": "/lót-raa-khaa/",
    "myanmarReading": "လုတ်(တ်)ရာခါ",
    "meaning": "ဈေးလျှော့သည်",
    "tone": "High + Mid + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 186,
    "thai": "ต่อราคา",
    "phonetic": "/tɔ̀ɔ-raa-khaa/",
    "myanmarReading": "တောရာခါ",
    "meaning": "ဈေးဆစ်သည်",
    "tone": "Low + Mid + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 187,
    "thai": "ขนาด",
    "phonetic": "/khà-nàat/",
    "myanmarReading": "ခါနာတ်(တ်)",
    "meaning": "အရွယ်အစား / ဆိုဒ်",
    "tone": "Low + Low Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 188,
    "thai": "ลองใส่",
    "phonetic": "/lɔɔŋ-sày/",
    "myanmarReading": "လောင်(င်)ဆိုင်(ယ်)",
    "meaning": "ဝတ်ကြည့်သည်",
    "tone": "Mid + Low Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 189,
    "thai": "จ่ายเงิน",
    "phonetic": "/càay-ŋən/",
    "myanmarReading": "ကျိုင်း(ယ်)ငင်(န်)",
    "meaning": "ငွေရှင်းသည်",
    "tone": "Low + Mid Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 190,
    "thai": "ใบเสร็จ",
    "phonetic": "/bay-sèt/",
    "myanmarReading": "ဘိုင်း(ယ်)ဆစ်(တ်)",
    "meaning": "ပြေစာ / ဘေလ်",
    "tone": "Mid + Low Tone",
    "category": "ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်"
  },
  {
    "id": 191,
    "thai": "เวลา",
    "phonetic": "/wee-laa/",
    "myanmarReading": "ဝေလာ",
    "meaning": "အချိန်ကာလ",
    "tone": "Mid + Mid Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 192,
    "thai": "นาฬิกา",
    "phonetic": "/naa-lí-kaa/",
    "myanmarReading": "နာလိကာ",
    "meaning": "နာရီ",
    "tone": "Mid + High + Mid Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 193,
    "thai": "ชั่วโมง",
    "phonetic": "/chûa-mooŋ/",
    "myanmarReading": "ချိုးမုန်(င်)",
    "meaning": "နာရီ (ကြာချိန်)",
    "tone": "Falling + Mid Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 194,
    "thai": "นาที",
    "phonetic": "/naa-thii/",
    "myanmarReading": "နာထီ",
    "meaning": "မိနစ်",
    "tone": "Mid + Mid Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 195,
    "thai": "วินาที",
    "phonetic": "/wí-naa-thii/",
    "myanmarReading": "ဝိနာထီ",
    "meaning": "စက္ကန့်",
    "tone": "High + Mid + Mid Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 196,
    "thai": "ตอนนี้",
    "phonetic": "/tɔɔn-níi/",
    "myanmarReading": "တွန်(န်)နီး",
    "meaning": "ယခု / အခုချိန်",
    "tone": "Mid + High Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 197,
    "thai": "ตอนเช้า",
    "phonetic": "/tɔɔn-cháaw/",
    "myanmarReading": "တွန်(န်)ချောက်(ဝ်)",
    "meaning": "မနက်ခင်း",
    "tone": "Mid + High Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 198,
    "thai": "ตอนสาย",
    "phonetic": "/tɔɔn-sǎay/",
    "myanmarReading": "တွန်(န်)ဆိုင်း(ယ်)",
    "meaning": "မနက်နှောင်းပိုင်း (၉-၁၁ နာရီ)",
    "tone": "Mid + Rising Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 199,
    "thai": "ตอนเที่ยง",
    "phonetic": "/tɔɔn-thîaŋ/",
    "myanmarReading": "တွန်(န်)ထီယန်း(င်)",
    "meaning": "မွန်းတည့်ချိန် (၁၂ နာရီ)",
    "tone": "Mid + Falling Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 200,
    "thai": "ตอนบ่าย",
    "phonetic": "/tɔɔn-bàay/",
    "myanmarReading": "တွန်(န်)ဘိုင်း(ယ်)",
    "meaning": "နေ့လယ်ခင်း (၁-၃ နာရီ)",
    "tone": "Mid + Low Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 201,
    "thai": "ตอนเย็น",
    "phonetic": "/tɔɔn-yen/",
    "myanmarReading": "တွန်(န်)ယင်(န်)",
    "meaning": "ညနေခင်း (၄-၆ နာရီ)",
    "tone": "Mid + Mid Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 202,
    "thai": "ตอนค่ำ",
    "phonetic": "/tɔɔn-khâm/",
    "myanmarReading": "တွန်(န်)ခမ်း(မ်)",
    "meaning": "ညဦးပိုင်း (၇-၈ နာရီ)",
    "tone": "Mid + Falling Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 203,
    "thai": "ตอนดึก",
    "phonetic": "/tɔɔn-dʉ̀k/",
    "myanmarReading": "တွန်(န်)ဒွက်(က်)",
    "meaning": "ညဉ့်နက်ပိုင်း",
    "tone": "Mid + Low Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 204,
    "thai": "เช้าตรู่",
    "phonetic": "/cháaw-trùu/",
    "myanmarReading": "ချောက်(ဝ်)တရူ",
    "meaning": "မိုးလင်းစ / အရုဏ်တက်ချိန်",
    "tone": "High + Low Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 205,
    "thai": "เที่ยงวัน",
    "phonetic": "/thîaŋ-wan/",
    "myanmarReading": "ထီယန်း(င်)ဝမ်(န်)",
    "meaning": "မွန်းတည့် ၁၂ နာရီ",
    "tone": "Falling + Mid Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 206,
    "thai": "เที่ยงคืน",
    "phonetic": "/thîaŋ-khʉʉn/",
    "myanmarReading": "ထီယန်း(င်)ခွန်း(န်)",
    "meaning": "သန်းခေါင်ယံ ၁၂ နာရီ",
    "tone": "Falling + Mid Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 207,
    "thai": "ตีหนึ่ง",
    "phonetic": "/tii-nʉ̀ŋ/",
    "myanmarReading": "တီနွန်း(င်)",
    "meaning": "မနက် ၁ နာရီ (ညဉ့်နက်)",
    "tone": "Mid + Low Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 208,
    "thai": "ตีสอง",
    "phonetic": "/tii-sɔ̌ɔŋ/",
    "myanmarReading": "တီဆောင်(င်)",
    "meaning": "မနက် ၂ နာရီ",
    "tone": "Mid + Rising Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 209,
    "thai": "ตีสาม",
    "phonetic": "/tii-sǎam/",
    "myanmarReading": "တီဆာမ်(မ်)",
    "meaning": "မနက် ၃ နာရီ",
    "tone": "Mid + Rising Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 210,
    "thai": "ตีสี่",
    "phonetic": "/tii-sìi/",
    "myanmarReading": "တီဆီ",
    "meaning": "မနက် ၄ နာရီ",
    "tone": "Mid + Low Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 211,
    "thai": "ตีห้า",
    "phonetic": "/tii-hâa/",
    "myanmarReading": "တီဟား",
    "meaning": "မနက် ၅ နာရီ",
    "tone": "Mid + Falling Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 212,
    "thai": "หกโมงเช้า",
    "phonetic": "/hòk-mooŋ-cháaw/",
    "myanmarReading": "ဟုတ်(က်)မုန်(င်)ချောက်(ဝ်)",
    "meaning": "မနက် ၆ နာရီ",
    "tone": "Low + Mid + High Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 213,
    "thai": "เจ็ดโมงเช้า",
    "phonetic": "/cèt-mooŋ-cháaw/",
    "myanmarReading": "ကျစ်(တ်)မုန်(င်)ချောက်(ဝ်)",
    "meaning": "မနက် ၇ နာရီ",
    "tone": "Low + Mid + High Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 214,
    "thai": "แปดโมงเช้า",
    "phonetic": "/pɛ̀ɛt-mooŋ-cháaw/",
    "myanmarReading": "ပတ်(တ်)မုန်(င်)ချောက်(ဝ်)",
    "meaning": "မနက် ၈ နာရီ",
    "tone": "Low + Mid + High Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 215,
    "thai": "เก้าโมงเช้า",
    "phonetic": "/kâaw-mooŋ-cháaw/",
    "myanmarReading": "ကောက်(ဝ်)မုန်(င်)ချောက်(ဝ်)",
    "meaning": "မနက် ၉ နာရီ",
    "tone": "Falling + Mid + High Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 216,
    "thai": "สิบโมงเช้า",
    "phonetic": "/sìp-mooŋ-cháaw/",
    "myanmarReading": "ဆိပ်(ပ်)မုန်(င်)ချောက်(ဝ်)",
    "meaning": "မနက် ၁၀ နာရီ",
    "tone": "Low + Mid + High Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 217,
    "thai": "สิบเอ็ดโมง",
    "phonetic": "/sìp-ʔèt-mooŋ/",
    "myanmarReading": "ဆိပ်(ပ်)အစ်(တ်)မုန်(င်)",
    "meaning": "မနက် ၁၁ နာရီ",
    "tone": "Low + Low + Mid Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 218,
    "thai": "บ่ายโมง",
    "phonetic": "/bàay-mooŋ/",
    "myanmarReading": "ဘိုင်း(ယ်)မုန်(င်)",
    "meaning": "နေ့လယ် ၁ နာရီ",
    "tone": "Low + Mid Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 219,
    "thai": "บ่ายสองโมง",
    "phonetic": "/bàay-sɔ̌ɔŋ-mooŋ/",
    "myanmarReading": "ဘိုင်း(ယ်)ဆောင်(င်)မုန်(င်)",
    "meaning": "နေ့လယ် ၂ နာရီ",
    "tone": "Low + Rising + Mid Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 220,
    "thai": "บ่ายสามโมง",
    "phonetic": "/bàay-sǎam-mooŋ/",
    "myanmarReading": "ဘိုင်း(ယ်)ဆာမ်(မ်)မုန်(င်)",
    "meaning": "နေ့လယ် ၃ နာရီ",
    "tone": "Low + Rising + Mid Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 221,
    "thai": "สี่โมงเย็น",
    "phonetic": "/sìi-mooŋ-yen/",
    "myanmarReading": "ဆီမုန်(င်)ယင်(န်)",
    "meaning": "ညနေ ၄ နာရီ",
    "tone": "Low + Mid + Mid Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 222,
    "thai": "ห้าโมงเย็น",
    "phonetic": "/hâa-mooŋ-yen/",
    "myanmarReading": "ဟားမုန်(င်)ယင်(န်)",
    "meaning": "ညနေ ၅ နာရီ",
    "tone": "Falling + Mid + Mid Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 223,
    "thai": "หกโมงเย็น",
    "phonetic": "/hòk-mooŋ-yen/",
    "myanmarReading": "ဟုတ်(က်)မုန်(င်)ယင်(န်)",
    "meaning": "ညနေ ၆ နာရီ",
    "tone": "Low + Mid + Mid Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 224,
    "thai": "หนึ่งทุ่ม",
    "phonetic": "/nʉ̀ŋ-thûm/",
    "myanmarReading": "နွန်း(င်)ထုန့်(မ်)",
    "meaning": "ည ၇ နာရီ",
    "tone": "Low + Falling Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 225,
    "thai": "สองทุ่ม",
    "phonetic": "/sɔ̌ɔŋ-thûm/",
    "myanmarReading": "ဆောင်(င်)ထုန့်(မ်)",
    "meaning": "ည ၈ နာရီ",
    "tone": "Rising + Falling Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 226,
    "thai": "สามทุ่ม",
    "phonetic": "/sǎam-thûm/",
    "myanmarReading": "ဆာမ်(မ်)ထုန့်(မ်)",
    "meaning": "ည ၉ နာရီ",
    "tone": "Rising + Falling Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 227,
    "thai": "สี่ทุ่ม",
    "phonetic": "/sìi-thûm/",
    "myanmarReading": "ဆီထုန့်(မ်)",
    "meaning": "ည ၁၀ နာရီ",
    "tone": "Low + Falling Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 228,
    "thai": "ห้าทุ่ม",
    "phonetic": "/hâa-thûm/",
    "myanmarReading": "ဟားထုန့်(မ်)",
    "meaning": "ည ၁၁ နာရီ",
    "tone": "Falling + Falling Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 229,
    "thai": "ตรงเวลา",
    "phonetic": "/troŋ-wee-laa/",
    "myanmarReading": "တရုန်(င်)ဝေလာ",
    "meaning": "အချိန်တိကျသည်",
    "tone": "Mid + Mid + Mid Tone",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 230,
    "thai": "สาย",
    "phonetic": "/sǎay/",
    "myanmarReading": "ဆိုင်း(ယ်)",
    "meaning": "နောက်ကျသည်",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "အချိန်နှင့် နာရီ"
  },
  {
    "id": 231,
    "thai": "วัน",
    "phonetic": "/wan/",
    "myanmarReading": "ဝမ်(န်)",
    "meaning": "နေ့ / ရက်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 232,
    "thai": "วันนี้",
    "phonetic": "/wan-níi/",
    "myanmarReading": "ဝမ်(န်)နီး",
    "meaning": "ဒီနေ့",
    "tone": "Mid + High Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 233,
    "thai": "พรุ่งนี้",
    "phonetic": "/phrûŋ-níi/",
    "myanmarReading": "ဖရုန်း(င်)နီး",
    "meaning": "မနက်ဖြန်",
    "tone": "Falling + High Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 234,
    "thai": "มะรืนนี้",
    "phonetic": "/má-rʉʉn-níi/",
    "myanmarReading": "မာရွန်း(န်)နီး",
    "meaning": "သဘက်ခါ",
    "tone": "High + Mid + High Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 235,
    "thai": "เมื่อวาน",
    "phonetic": "/mʉ̂a-waan/",
    "myanmarReading": "မြွာဝါန်း(န်)",
    "meaning": "မနေ့က",
    "tone": "Falling + Mid Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 236,
    "thai": "เมื่อวานซืน",
    "phonetic": "/mʉ̂a-waan-sʉʉn/",
    "myanmarReading": "မြွာဝါန်း(န်)ဆွန်း(န်)",
    "meaning": "တစ်နေ့က",
    "tone": "Falling + Mid + Mid Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 237,
    "thai": "ทุกวัน",
    "phonetic": "/thúk-wan/",
    "myanmarReading": "ထုတ်(က်)ဝမ်(န်)",
    "meaning": "နေ့တိုင်း",
    "tone": "High + Mid Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 238,
    "thai": "วันจันทร์",
    "phonetic": "/wan-can/",
    "myanmarReading": "ဝမ်(န်)ကျန်(န်)",
    "meaning": "တနင်္လာနေ့",
    "tone": "Mid + Mid Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 239,
    "thai": "วันอังคาร",
    "phonetic": "/wan-ʔaŋ-khaan/",
    "myanmarReading": "ဝမ်(န်)အင်(င်)ခါန်း(န်)",
    "meaning": "အင်္ဂါနေ့",
    "tone": "Mid + Mid + Mid Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 240,
    "thai": "วันพุธ",
    "phonetic": "/wan-phút/",
    "myanmarReading": "ဝမ်(န်)ဖုတ်(တ်)",
    "meaning": "ဗုဒ္ဓဟူးနေ့",
    "tone": "Mid + High Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 241,
    "thai": "วันพฤหัสบดี",
    "phonetic": "/wan-phá-rʉ́-hàt-sà-bɔɔ-dii/",
    "myanmarReading": "ဝမ်(န်)ဖာရွတ်(တ်)ဆာဘောဒီ",
    "meaning": "ကြာသပတေးနေ့",
    "tone": "Complex Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 242,
    "thai": "วันศุกร์",
    "phonetic": "/wan-sùk/",
    "myanmarReading": "ဝမ်(န်)ဆုတ်(က်)",
    "meaning": "သောကြာနေ့",
    "tone": "Mid + Low Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 243,
    "thai": "วันเสาร์",
    "phonetic": "/wan-sǎw/",
    "myanmarReading": "ဝမ်(န်)ဆောက်(ဝ်)",
    "meaning": "စနေနေ့",
    "tone": "Mid + Rising Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 244,
    "thai": "วันอาทิตย์",
    "phonetic": "/wan-ʔaa-thít/",
    "myanmarReading": "ဝမ်(န်)အာထစ်(တ်)",
    "meaning": "တနင်္ဂနွေနေ့",
    "tone": "Mid + Mid + High Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 245,
    "thai": "วันหยุด",
    "phonetic": "/wan-yùt/",
    "myanmarReading": "ဝမ်(န်)ယုတ်(တ်)",
    "meaning": "ရုံးပိတ်ရက် / အားလပ်ရက်",
    "tone": "Mid + Low Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 246,
    "thai": "วันหยุดสุดสัปดาห์",
    "phonetic": "/wan-yùt-sùt-sàp-daa/",
    "myanmarReading": "ဝမ်(န်)ယုတ်(တ်)ဆုတ်(တ်)ဆပ်(ပ်)ဒါ",
    "meaning": "စနေ/တနင်္ဂနွေ အားလပ်ရက်",
    "tone": "Complex Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 247,
    "thai": "วันเกิด",
    "phonetic": "/wan-kə̀ət/",
    "myanmarReading": "ဝမ်(န်)ကတ်(တ်)",
    "meaning": "မွေးနေ့",
    "tone": "Mid + Low Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 248,
    "thai": "สัปดาห์",
    "phonetic": "/sàp-daa/",
    "myanmarReading": "ဆပ်(ပ်)ဒါ",
    "meaning": "ရက်သတ္တပတ်",
    "tone": "Low + Mid Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 249,
    "thai": "สัปดาห์นี้",
    "phonetic": "/sàp-daa-níi/",
    "myanmarReading": "ဆပ်(ပ်)ဒါနီး",
    "meaning": "ဒီတစ်ပတ်",
    "tone": "Low + Mid + High Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 250,
    "thai": "สัปดาห์หน้า",
    "phonetic": "/sàp-daa-nâa/",
    "myanmarReading": "ဆပ်(ပ်)ဒါနား",
    "meaning": "နောက်တစ်ပတ်",
    "tone": "Low + Mid + Falling Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 251,
    "thai": "สัปดาห์ที่แล้ว",
    "phonetic": "/sàp-daa-thîi-lɛ́ɛw/",
    "myanmarReading": "ဆပ်(ပ်)ဒါထီးလဝ်(ဝ်)",
    "meaning": "ပြီးခဲ့တဲ့အပတ်",
    "tone": "Complex Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 252,
    "thai": "เดือน",
    "phonetic": "/dʉan/",
    "myanmarReading": "ဒွမ်(န်)",
    "meaning": "လ (ပြက္ခဒိန်)",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 253,
    "thai": "เดือนนี้",
    "phonetic": "/dʉan-níi/",
    "myanmarReading": "ဒွမ်(န်)နီး",
    "meaning": "ဒီလ",
    "tone": "Mid + High Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 254,
    "thai": "เดือนหน้า",
    "phonetic": "/dʉan-nâa/",
    "myanmarReading": "ဒွမ်(န်)နား",
    "meaning": "နောက်လ",
    "tone": "Mid + Falling Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 255,
    "thai": "เดือนที่แล้ว",
    "phonetic": "/dʉan-thîi-lɛ́ɛw/",
    "myanmarReading": "ဒွမ်(န်)ထီးလဝ်(ဝ်)",
    "meaning": "ပြီးခဲ့တဲ့လ",
    "tone": "Mid + Falling + High Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 256,
    "thai": "มกราคม",
    "phonetic": "/mók-kà-raa-khom/",
    "myanmarReading": "မုတ်(က်)ကာရာခွန်(မ်)",
    "meaning": "ဇန်နဝါရီလ",
    "tone": "Complex Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 257,
    "thai": "กุมภาพันธ์",
    "phonetic": "/kum-phaa-phan/",
    "myanmarReading": "ကုမ်(မ်)ဖာဖန်(န်)",
    "meaning": "ဖေဖော်ဝါရီလ",
    "tone": "Mid + Mid + Mid Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 258,
    "thai": "มีนาคม",
    "phonetic": "/mii-naa-khom/",
    "myanmarReading": "မီနာခွန်(မ်)",
    "meaning": "မတ်လ",
    "tone": "Mid + Mid + Mid Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 259,
    "thai": "เมษายน",
    "phonetic": "/mee-sǎa-yon/",
    "myanmarReading": "မေဆာယုန့်(န်)",
    "meaning": "ဧပြီလ",
    "tone": "Mid + Rising + Mid Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 260,
    "thai": "พฤษภาคม",
    "phonetic": "/phrʉ́t-sà-phaa-khom/",
    "myanmarReading": "ဖရွတ်(တ်)ဆာဖာခွန်(မ်)",
    "meaning": "မေလ",
    "tone": "Complex Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 261,
    "thai": "มิถุนายน",
    "phonetic": "/mí-thù-naa-yon/",
    "myanmarReading": "မိထုနာယုန့်(န်)",
    "meaning": "ဇွန်လ",
    "tone": "High + Low + Mid + Mid Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 262,
    "thai": "กรกฎาคม",
    "phonetic": "/kà-rák-kà-daa-khom/",
    "myanmarReading": "ကာရက်(က်)ကာဒါခွန်(မ်)",
    "meaning": "ဇူလိုင်လ",
    "tone": "Complex Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 263,
    "thai": "สิงหาคม",
    "phonetic": "/sǐŋ-hǎa-khom/",
    "myanmarReading": "ဆင်(င်)ဟာခွန်(မ်)",
    "meaning": "သြဂုတ်လ",
    "tone": "Rising + Rising + Mid Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 264,
    "thai": "กันยายน",
    "phonetic": "/kan-yaa-yon/",
    "myanmarReading": "ကန်(န်)ယာယုန့်(န်)",
    "meaning": "စက်တင်ဘာလ",
    "tone": "Mid + Mid + Mid Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 265,
    "thai": "ตุลาคม",
    "phonetic": "/tù-laa-khom/",
    "myanmarReading": "တုလာခွန်(မ်)",
    "meaning": "အောက်တိုဘာလ",
    "tone": "Low + Mid + Mid Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 266,
    "thai": "พฤศจิกายน",
    "phonetic": "/phrʉ́t-sà-cì-kaa-yon/",
    "myanmarReading": "ဖရွတ်(တ်)ဆာကျိကာယုန့်(န်)",
    "meaning": "နိုဝင်ဘာလ",
    "tone": "Complex Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 267,
    "thai": "ธันวาคม",
    "phonetic": "/than-waa-khom/",
    "myanmarReading": "ထန်(န်)ဝါခွန်(မ်)",
    "meaning": "ဒီဇင်ဘာလ",
    "tone": "Mid + Mid + Mid Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 268,
    "thai": "ปี",
    "phonetic": "/pii/",
    "myanmarReading": "ပီ",
    "meaning": "နှစ်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 269,
    "thai": "ปีนี้",
    "phonetic": "/pii-níi/",
    "myanmarReading": "ပီနီး",
    "meaning": "ဒီနှစ်",
    "tone": "Mid + High Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 270,
    "thai": "ปีหน้า",
    "phonetic": "/pii-nâa/",
    "myanmarReading": "ပီနား",
    "meaning": "နောက်နှစ်",
    "tone": "Mid + Falling Tone",
    "category": "ရက်စွဲနှင့် ပြက္ခဒိန်"
  },
  {
    "id": 271,
    "thai": "ข้าว",
    "phonetic": "/khâaw/",
    "myanmarReading": "ခေါက်(ဝ်)",
    "meaning": "ထမင်း / ဆန်",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 272,
    "thai": "ข้าวสวย",
    "phonetic": "/khâaw-sǔay/",
    "myanmarReading": "ခေါက်(ဝ်)ဆွေ့(ယ်)",
    "meaning": "ထမင်းဖြူ",
    "tone": "Falling + Rising Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 273,
    "thai": "ข้าวต้ม",
    "phonetic": "/khâaw-tôm/",
    "myanmarReading": "ခေါက်(ဝ်)တုန့်(မ်)",
    "meaning": "ဆန်ပြုတ်",
    "tone": "Falling + Falling Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 274,
    "thai": "ข้าวเหนียว",
    "phonetic": "/khâaw-nǐaw/",
    "myanmarReading": "ခေါက်(ဝ်)နီယို့",
    "meaning": "ကောက်ညှင်းပေါင်း",
    "tone": "Falling + Rising Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 275,
    "thai": "ข้าวผัด",
    "phonetic": "/khâaw-phàt/",
    "myanmarReading": "ခေါက်(ဝ်)ဖတ်(တ်)",
    "meaning": "ထမင်းကြော်",
    "tone": "Falling + Low Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 276,
    "thai": "ข้าวมันไก่",
    "phonetic": "/khâaw-man-kày/",
    "myanmarReading": "ခေါက်(ဝ်)မန်(န်)ကိုင်(ယ်)",
    "meaning": "ကြက်ဆီထမင်း",
    "tone": "Falling + Mid + Low Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 277,
    "thai": "ข้าวขาหมู",
    "phonetic": "/khâaw-khǎa-mǔu/",
    "myanmarReading": "ခေါက်(ဝ်)ခါမူ",
    "meaning": "ဝက်လက်ထမင်း",
    "tone": "Falling + Rising + Rising Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 278,
    "thai": "ก๋วยเตี๋ยว",
    "phonetic": "/kǔay-tǐaw/",
    "myanmarReading": "ကွေ့(ယ်)တီယို့",
    "meaning": "ခေါက်ဆွဲပြုတ်",
    "tone": "Rising + Rising Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 279,
    "thai": "ผัดไทย",
    "phonetic": "/phàt-thay/",
    "myanmarReading": "ဖတ်(တ်)ထိုင်း(ယ်)",
    "meaning": "ဖတ်ထိုင်း (ထိုင်းရိုးရာ ခေါက်ဆွဲကြော်)",
    "tone": "Low + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 280,
    "thai": "ส้มตำ",
    "phonetic": "/sôm-tam/",
    "myanmarReading": "စုန့်(မ်)တမ်(မ်)",
    "meaning": "သင်္ဘောသီးထောင်း",
    "tone": "Falling + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 281,
    "thai": "ต้มยำ",
    "phonetic": "/tôm-yam/",
    "myanmarReading": "တုန့်(မ်)ယမ်(မ်)",
    "meaning": "တုံယမ်းဟင်းချို",
    "tone": "Falling + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 282,
    "thai": "ต้มยำกุ้ง",
    "phonetic": "/tôm-yam-kûŋ/",
    "myanmarReading": "တုန့်(မ်)ယမ်(မ်)ကုန်း(င်)",
    "meaning": "ပုစွန်တုံယမ်း",
    "tone": "Falling + Mid + Falling Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 283,
    "thai": "แกงเขียวหวาน",
    "phonetic": "/kɛɛŋ-khǐaw-wǎan/",
    "myanmarReading": "ကင်(င်)ခီယိုဝါန်(န်)",
    "meaning": "အစိမ်းရောင်ဟင်းလျာ",
    "tone": "Mid + Rising + Rising Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 284,
    "thai": "ลาบ",
    "phonetic": "/lâap/",
    "myanmarReading": "လပ်(ပ်)",
    "meaning": "လာပ် (ဝက်သား/ကြက်သားသုပ်)",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 285,
    "thai": "ไก่ย่าง",
    "phonetic": "/kày-yâaŋ/",
    "myanmarReading": "ကိုင်(ယ်)ယောင်း(င်)",
    "meaning": "ကြက်ကင်",
    "tone": "Low + Falling Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 286,
    "thai": "หมูปิ้ง",
    "phonetic": "/mǔu-pîŋ/",
    "myanmarReading": "မူပင့်(င်)",
    "meaning": "ဝက်သားကင်ချောင်း",
    "tone": "Rising + Falling Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 287,
    "thai": "ไก่",
    "phonetic": "/kày/",
    "myanmarReading": "ကိုင်(ယ်)",
    "meaning": "ကြက်သား / ကြက်",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 288,
    "thai": "หมู",
    "phonetic": "/mǔu/",
    "myanmarReading": "မူ",
    "meaning": "ဝက်သား / ဝက်",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 289,
    "thai": "เนื้อวัว",
    "phonetic": "/nʉ́a-wua/",
    "myanmarReading": "နွမ်(လ်)ဝွာ",
    "meaning": "အမဲသား",
    "tone": "High + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 290,
    "thai": "เป็ด",
    "phonetic": "/pèt/",
    "myanmarReading": "ပစ်(တ်)",
    "meaning": "ဘဲသား / ဘဲ",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 291,
    "thai": "ปลา",
    "phonetic": "/plaa/",
    "myanmarReading": "ပလာ",
    "meaning": "ငါး",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 292,
    "thai": "กุ้ง",
    "phonetic": "/kûŋ/",
    "myanmarReading": "ကုန်း(င်)",
    "meaning": "ပုစွန်",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 293,
    "thai": "ปู",
    "phonetic": "/puu/",
    "myanmarReading": "ပူ",
    "meaning": "ဂဏန်း",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 294,
    "thai": "ปลาหมึก",
    "phonetic": "/plaa-mʉ̀k/",
    "myanmarReading": "ပလာမွက်(က်)",
    "meaning": "ပြည်ကြီးငါး",
    "tone": "Mid + Low Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 295,
    "thai": "หอย",
    "phonetic": "/hɔ̌ɔy/",
    "myanmarReading": "ဟွိုင်း(ယ်)",
    "meaning": "ခရု / ဂုံး",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 296,
    "thai": "ไข่",
    "phonetic": "/khày/",
    "myanmarReading": "ခိုင်(ယ်)",
    "meaning": "ကြက်ဥ / ဘဲဥ",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 297,
    "thai": "ไข่ดาว",
    "phonetic": "/khày-daaw/",
    "myanmarReading": "ခိုင်(ယ်)ဒေါင်(ဝ်)",
    "meaning": "ကြက်ဥကြော် (မကျက်တကျက်)",
    "tone": "Low + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 298,
    "thai": "ไข่เจียว",
    "phonetic": "/khày-ciaw/",
    "myanmarReading": "ခိုင်(ယ်)ကျီယို့",
    "meaning": "ကြက်ဥမွှေကြော်",
    "tone": "Low + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 299,
    "thai": "ผัก",
    "phonetic": "/phàk/",
    "myanmarReading": "ဖတ်(က်)",
    "meaning": "ဟင်းသီးဟင်းရွက်",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 300,
    "thai": "ผักบุ้ง",
    "phonetic": "/phàk-bûŋ/",
    "myanmarReading": "ဖတ်(က်)ဘုန်း(င်)",
    "meaning": "ကန်စွန်းရွက်",
    "tone": "Low + Falling Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 301,
    "thai": "กะหล่ำปลี",
    "phonetic": "/kà-làm-plii/",
    "myanmarReading": "ကာလမ်(မ်)ပလီ",
    "meaning": "ဂေါ်ဖီထုပ်",
    "tone": "Low + Low + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 302,
    "thai": "แตงกวา",
    "phonetic": "/tɛɛŋ-kwaa/",
    "myanmarReading": "တင်(င်)ကွာ",
    "meaning": "သခွားသီး",
    "tone": "Mid + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 303,
    "thai": "มะเขือเทศ",
    "phonetic": "/má-khʉ̌a-thêet/",
    "myanmarReading": "မာခွမ်(လ်)ထစ်(တ်)",
    "meaning": "ခရမ်းချဉ်သီး",
    "tone": "High + Rising + Falling Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 304,
    "thai": "พริก",
    "phonetic": "/phrík/",
    "myanmarReading": "ဖရစ်(က်)",
    "meaning": "ငရုတ်သီး",
    "tone": "High Tone (အသံမြင့်)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 305,
    "thai": "มะนาว",
    "phonetic": "/má-naaw/",
    "myanmarReading": "မာနောင်(ဝ်)",
    "meaning": "သံပရာသီး",
    "tone": "High + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 306,
    "thai": "กระเทียม",
    "phonetic": "/krà-thiam/",
    "myanmarReading": "ကရာထီယမ်(မ်)",
    "meaning": "ကြက်သွန်ဖြူ",
    "tone": "Low + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 307,
    "thai": "หอมแดง",
    "phonetic": "/hɔ̌ɔm-dɛɛŋ/",
    "myanmarReading": "ဟွမ်(မ်)ဒင်(င်)",
    "meaning": "ကြက်သွန်နီ",
    "tone": "Rising + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 308,
    "thai": "น้ำปลา",
    "phonetic": "/nám-plaa/",
    "myanmarReading": "နမ်း(မ်)ပလာ",
    "meaning": "ငံပြာရည်",
    "tone": "High + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 309,
    "thai": "น้ำตาล",
    "phonetic": "/nám-taan/",
    "myanmarReading": "နမ်း(မ်)တာန်(န်)",
    "meaning": "သကြား",
    "tone": "High + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 310,
    "thai": "เกลือ",
    "phonetic": "/klʉa/",
    "myanmarReading": "ကလွမ်(လ်)",
    "meaning": "ဆား",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 311,
    "thai": "ผลไม้",
    "phonetic": "/phǒn-lá-mâay/",
    "myanmarReading": "ဖုန့်(န်)လာမိုင်း(ယ်)",
    "meaning": "သစ်သီးဝလံ",
    "tone": "Rising + High + Falling Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 312,
    "thai": "แตงโม",
    "phonetic": "/tɛɛŋ-moo/",
    "myanmarReading": "တင်(င်)မို",
    "meaning": "ဖရဲသီး",
    "tone": "Mid + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 313,
    "thai": "ส้ม",
    "phonetic": "/sôm/",
    "myanmarReading": "ဆုန့်(မ်)",
    "meaning": "လိမ္မော်သီး",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 314,
    "thai": "มะม่วง",
    "phonetic": "/má-mûaŋ/",
    "myanmarReading": "မာမွမ်(င်)",
    "meaning": "သရက်သီး",
    "tone": "High + Falling Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 315,
    "thai": "กล้วย",
    "phonetic": "/klûay/",
    "myanmarReading": "ကလွေ့(ယ်)",
    "meaning": "ငှက်ပျောသီး",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 316,
    "thai": "สับปะรด",
    "phonetic": "/sàp-pà-rót/",
    "myanmarReading": "ဆပ်(ပ်)ပါရုတ်(တ်)",
    "meaning": "နာနတ်သီး",
    "tone": "Low + Low + High Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 317,
    "thai": "มะละกอ",
    "phonetic": "/má-lá-kɔɔ/",
    "myanmarReading": "မာလာခေါ",
    "meaning": "သင်္ဘောသီး",
    "tone": "High + High + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 318,
    "thai": "ทุเรียน",
    "phonetic": "/thú-rian/",
    "myanmarReading": "ထုရီယန်(န်)",
    "meaning": "ဒူးရင်းသီး",
    "tone": "High + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 319,
    "thai": "มังคุด",
    "phonetic": "/maŋ-khút/",
    "myanmarReading": "မင်(င်)ခုတ်(တ်)",
    "meaning": "မင်းကွတ်သီး",
    "tone": "Mid + High Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 320,
    "thai": "ลิ้นจี่",
    "phonetic": "/lín-cìi/",
    "myanmarReading": "လင်း(န်)ကျီ",
    "meaning": "လိုင်ချီးသီး",
    "tone": "High + Low Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 321,
    "thai": "ลำไย",
    "phonetic": "/lam-yay/",
    "myanmarReading": "လမ်(မ်)ယိုင်း(ယ်)",
    "meaning": "လုံငန်းသီး",
    "tone": "Mid + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 322,
    "thai": "ฝรั่ง",
    "phonetic": "/fà-ràŋ/",
    "myanmarReading": "ဖာရန့်(င်)",
    "meaning": "မာလကာသီး / နိုင်ငံခြားသား",
    "tone": "Low + Low Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 323,
    "thai": "สตรอว์เบอร์รี",
    "phonetic": "/sà-trɔɔ-bəə-rîi/",
    "myanmarReading": "ဆာတရောဘယ်ရီ",
    "meaning": "စတော်ဘယ်ရီသီး",
    "tone": "Complex Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 324,
    "thai": "น้ำ",
    "phonetic": "/nám/",
    "myanmarReading": "နမ်း(မ်)",
    "meaning": "ရေ",
    "tone": "High Tone (အသံမြင့်)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 325,
    "thai": "น้ำเปล่า",
    "phonetic": "/nám-plàw/",
    "myanmarReading": "နမ်း(မ်)ပလောင်(ဝ်)",
    "meaning": "သောက်ရေသန့်",
    "tone": "High + Low Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 326,
    "thai": "น้ำแข็ง",
    "phonetic": "/nám-khɛ̌ŋ/",
    "myanmarReading": "နမ်း(မ်)ခင်(င်)",
    "meaning": "ရေခဲ",
    "tone": "High + Rising Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 327,
    "thai": "กาแฟ",
    "phonetic": "/kaa-fɛɛ/",
    "myanmarReading": "ကာဖယ်(လ်)",
    "meaning": "ကော်ဖီ",
    "tone": "Mid + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 328,
    "thai": "กาแฟเย็น",
    "phonetic": "/kaa-fɛɛ-yen/",
    "myanmarReading": "ကာဖယ်(လ်)ယင်(န်)",
    "meaning": "ကော်ဖီအေး",
    "tone": "Mid + Mid + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 329,
    "thai": "ชา",
    "phonetic": "/chaa/",
    "myanmarReading": "ချာ",
    "meaning": "လက်ဖက်ရည် / တီး",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 330,
    "thai": "ชาเย็น",
    "phonetic": "/chaa-yen/",
    "myanmarReading": "ချာယင်(န်)",
    "meaning": "ထိုင်းလက်ဖက်ရည်အေး",
    "tone": "Mid + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 331,
    "thai": "ชามะนาว",
    "phonetic": "/chaa-má-naaw/",
    "myanmarReading": "ချာမာနောင်(ဝ်)",
    "meaning": "သံပရာလက်ဖက်ရည်",
    "tone": "Mid + High + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 332,
    "thai": "นม",
    "phonetic": "/nom/",
    "myanmarReading": "နုန့်(မ်)",
    "meaning": "နို့ / နို့ရည်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 333,
    "thai": "นมสด",
    "phonetic": "/nom-sòt/",
    "myanmarReading": "နုန့်(မ်)ဆုတ်(တ်)",
    "meaning": "နို့စိမ်း",
    "tone": "Mid + Low Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 334,
    "thai": "น้ำผลไม้",
    "phonetic": "/nám-phǒn-lá-mâay/",
    "myanmarReading": "နမ်း(မ်)ဖုန့်(န်)လာမိုင်း(ယ်)",
    "meaning": "သစ်သီးဖျော်ရည်",
    "tone": "Complex Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 335,
    "thai": "น้ำอัดลม",
    "phonetic": "/nám-ʔàt-lom/",
    "myanmarReading": "နမ်း(မ်)အပ်(တ်)လုန့်(မ်)",
    "meaning": "အချိုရည် / ဂက်စ်ရည်",
    "tone": "High + Low + Mid Tone",
    "category": "အစားအသောက်နှင့် သစ်သီးများ"
  },
  {
    "id": 336,
    "thai": "ทาง",
    "phonetic": "/thaaŋ/",
    "myanmarReading": "ထာင်(င်)",
    "meaning": "လမ်း / လမ်းကြောင်း",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 337,
    "thai": "ทางนี้",
    "phonetic": "/thaaŋ-níi/",
    "myanmarReading": "ထာင်(င်)နီး",
    "meaning": "ဒီလမ်း",
    "tone": "Mid + High Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 338,
    "thai": "ทางนั้น",
    "phonetic": "/thaaŋ-nán/",
    "myanmarReading": "ထာင်(င်)နန်း(န်)",
    "meaning": "ဟိုလမ်း",
    "tone": "Mid + High Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 339,
    "thai": "ตรงไป",
    "phonetic": "/troŋ-pay/",
    "myanmarReading": "တရုန်(င်)ပိုင်း(ယ်)",
    "meaning": "တည့်တည့်သွားပါ",
    "tone": "Mid + Mid Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 340,
    "thai": "เลี้ยวซ้าย",
    "phonetic": "/líaaw-sáay/",
    "myanmarReading": "လီယို့ဆိုင်း(ယ်)",
    "meaning": "ဘယ်ဘက်ကွေ့ပါ",
    "tone": "High + High Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 341,
    "thai": "เลี้ยวขวา",
    "phonetic": "/líaaw-khwǎa/",
    "myanmarReading": "လီယို့ခွာ",
    "meaning": "ညာဘက်ကွေ့ပါ",
    "tone": "High + Rising Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 342,
    "thai": "กลับรถ",
    "phonetic": "/klàp-rót/",
    "myanmarReading": "ကလပ်(ပ်)ရုတ်(တ်)",
    "meaning": "ကွေ့ပြန်လှည့်ပါ (U-Turn)",
    "tone": "Low + High Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 343,
    "thai": "หยุด",
    "phonetic": "/yùt/",
    "myanmarReading": "ယုတ်(တ်)",
    "meaning": "ရပ်ပါ / တန့်ပါ",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 344,
    "thai": "จอด",
    "phonetic": "/cɔ̀ɔt/",
    "myanmarReading": "ကျော့(တ်)",
    "meaning": "ကားရပ်ပါ / ကားဆိုက်ပါ",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 345,
    "thai": "ข้ามถนน",
    "phonetic": "/khâam-thà-nǒn/",
    "myanmarReading": "ခမ်း(မ်)ထာနုန့်(န်)",
    "meaning": "လမ်းဖြတ်ကူးပါ",
    "tone": "Falling + Low + Rising Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 346,
    "thai": "ใกล้",
    "phonetic": "/klây/",
    "myanmarReading": "ကလိုင်း(ယ်)",
    "meaning": "နီးသည်",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 347,
    "thai": "ไกล",
    "phonetic": "/klay/",
    "myanmarReading": "ကလိုင်း(ယ်)",
    "meaning": "ဝေးသည်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 348,
    "thai": "ข้างหน้า",
    "phonetic": "/khâaŋ-nâa/",
    "myanmarReading": "ခေါင်း(င်)နား",
    "meaning": "အရှေ့ဘက်",
    "tone": "Falling + Falling Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 349,
    "thai": "ข้างหลัง",
    "phonetic": "/khâaŋ-lǎŋ/",
    "myanmarReading": "ခေါင်း(င်)လင်(င်)",
    "meaning": "အနောက်ဘက်",
    "tone": "Falling + Rising Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 350,
    "thai": "ข้างๆ",
    "phonetic": "/khâaŋ-khâaŋ/",
    "myanmarReading": "ခေါင်း(င်)ခေါင်း(င်)",
    "meaning": "ဘေးနား / ဘေးဘက်",
    "tone": "Falling + Falling Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 351,
    "thai": "ตรงข้าม",
    "phonetic": "/troŋ-khâam/",
    "myanmarReading": "တရုန်(င်)ခမ်း(မ်)",
    "meaning": "မျက်နှာချင်းဆိုင်",
    "tone": "Mid + Falling Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 352,
    "thai": "รถ",
    "phonetic": "/rót/",
    "myanmarReading": "ရုတ်(တ်)",
    "meaning": "ကား / မော်တော်ယာဉ်",
    "tone": "High Tone (အသံမြင့်)",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 353,
    "thai": "รถเก๋ง",
    "phonetic": "/rót-kěŋ/",
    "myanmarReading": "ရုတ်(တ်)ကင်(င်)",
    "meaning": "ဆလွန်းကား / လူစီးကားသေး",
    "tone": "High + Rising Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 354,
    "thai": "รถกระบะ",
    "phonetic": "/rót-krà-bà/",
    "myanmarReading": "ရုတ်(တ်)ကရာဘ",
    "meaning": "ပစ်ကပ်ကား",
    "tone": "High + Low + Low Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 355,
    "thai": "รถแท็กซี่",
    "phonetic": "/rót-thɛ́k-sîi/",
    "myanmarReading": "ရုတ်(တ်)ထက်ဆီ",
    "meaning": "တက္ကစီ",
    "tone": "High + High + Falling Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 356,
    "thai": "รถเมล์",
    "phonetic": "/rót-mee/",
    "myanmarReading": "ရုတ်(တ်)မေ",
    "meaning": "လိုင်းကား / ဘတ်စ်ကား",
    "tone": "High + Mid Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 357,
    "thai": "มอเตอร์ไซค์",
    "phonetic": "/mɔɔ-təə-say/",
    "myanmarReading": "မောတာဆိုင်း(ယ်)",
    "meaning": "မော်တော်ဆိုင်ကယ်",
    "tone": "Mid + Mid + Mid Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 358,
    "thai": "วินมอเตอร์ไซค์",
    "phonetic": "/win-mɔɔ-təə-say/",
    "myanmarReading": "ဝင်း(န်)မောတာဆိုင်း(ယ်)",
    "meaning": "ဆိုင်ကယ်ကယ်ရီ",
    "tone": "Complex Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 359,
    "thai": "รถตุ๊กตุ๊ก",
    "phonetic": "/rót-túk-túk/",
    "myanmarReading": "ရုတ်(တ်)တုတ်(က်)တုတ်(က်)",
    "meaning": "တုတ်တုတ်သုံးဘီးကား",
    "tone": "High + High + High Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 360,
    "thai": "รถสองแถว",
    "phonetic": "/rót-sɔ̌ɔŋ-thɛ̌w/",
    "myanmarReading": "ရုတ်(တ်)ဆောင်(င်)ထဝ်(ဝ်)",
    "meaning": "ဆောင်းထောင်ကား (နှစ်တန်းထိုင်ကား)",
    "tone": "High + Rising + Rising Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 361,
    "thai": "รถตู้",
    "phonetic": "/rót-tûu/",
    "myanmarReading": "ရုတ်(တ်)တု",
    "meaning": "ဗင်ကား / ခရီးသည်တင်ကား",
    "tone": "High + Falling Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 362,
    "thai": "รถไฟ",
    "phonetic": "/rót-fay/",
    "myanmarReading": "ရုတ်(တ်)ဖိုင်း(ယ်)",
    "meaning": "မီးရထား",
    "tone": "High + Mid Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 363,
    "thai": "รถไฟฟ้า",
    "phonetic": "/rót-fay-fáa/",
    "myanmarReading": "ရုတ်(တ်)ဖိုင်း(ယ်)ဖား",
    "meaning": "မိုးပျံရထား (BTS)",
    "tone": "High + Mid + High Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 364,
    "thai": "รถไฟใต้ดิน",
    "phonetic": "/rót-fay-tâay-din/",
    "myanmarReading": "ရုတ်(တ်)ဖိုင်း(ယ်)တိုင်း(ယ်)ဒင်(န်)",
    "meaning": "မြေအောက်ရထား (MRT)",
    "tone": "Complex Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 365,
    "thai": "จักรยาน",
    "phonetic": "/càk-krà-yaan/",
    "myanmarReading": "ကျက်(က်)ကရာယာန်း(န်)",
    "meaning": "စက်ဘီး",
    "tone": "Low + Low + Mid Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 366,
    "thai": "เรือ",
    "phonetic": "/rʉa/",
    "myanmarReading": "ရွမ်(လ်)",
    "meaning": "လှေ / သင်္ဘော",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 367,
    "thai": "เรือด่วน",
    "phonetic": "/rʉa-dùan/",
    "myanmarReading": "ရွမ်(လ်)ဒွန်(န်)",
    "meaning": "အမြန်လှေ",
    "tone": "Mid + Low Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 368,
    "thai": "เครื่องบิน",
    "phonetic": "/khrʉ̂aŋ-bin/",
    "myanmarReading": "ခရွမ်(င်)ဘင်(န်)",
    "meaning": "လေယာဉ်ပျံ",
    "tone": "Falling + Mid Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 369,
    "thai": "สนามบิน",
    "phonetic": "/sà-nǎam-bin/",
    "myanmarReading": "ဆာနာမ်(မ်)ဘင်(န်)",
    "meaning": "လေဆိပ်",
    "tone": "Low + Rising + Mid Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 370,
    "thai": "ท่าเรือ",
    "phonetic": "/thâa-rʉa/",
    "myanmarReading": "ထာရွမ်(လ်)",
    "meaning": "ဆိပ်ကမ်း / သင်္ဘောဆိပ်",
    "tone": "Falling + Mid Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 371,
    "thai": "ป้ายรถเมล์",
    "phonetic": "/pâay-rót-mee/",
    "myanmarReading": "ပိုက်(စ်)ရုတ်(တ်)မေ",
    "meaning": "ဘတ်စ်ကားမှတ်တိုင်",
    "tone": "Falling + High + Mid Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 372,
    "thai": "สถานีรถไฟ",
    "phonetic": "/sà-thǎa-nii-rót-fay/",
    "myanmarReading": "ဆာထာနီရုတ်(တ်)ဖိုင်း(ယ်)",
    "meaning": "မီးရထားဘူတာရုံ",
    "tone": "Complex Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 373,
    "thai": "ทางด่วน",
    "phonetic": "/thaaŋ-dùan/",
    "myanmarReading": "ထာင်(င်)ဒွန်(န်)",
    "meaning": "အဝေးပြေးအမြန်လမ်း (Expressway)",
    "tone": "Mid + Low Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 374,
    "thai": "ตั๋ว",
    "phonetic": "/tǔa/",
    "myanmarReading": "တွာ",
    "meaning": "လက်မှတ်",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 375,
    "thai": "ซื้อตั๋ว",
    "phonetic": "/sʉ́ʉ-tǔa/",
    "myanmarReading": "ဆွတ်(စ်)တွာ",
    "meaning": "လက်မှတ်ဝယ်သည်",
    "tone": "High + Rising Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 376,
    "thai": "คนขับรถ",
    "phonetic": "/khon-khàp-rót/",
    "myanmarReading": "ခုန့်(န်)ခပ်(ပ်)ရုတ်(တ်)",
    "meaning": "ယာဉ်မောင်းသူ / ဒရိုင်ဘာ",
    "tone": "Mid + Low + High Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 377,
    "thai": "เดิน",
    "phonetic": "/dəən/",
    "myanmarReading": "ဒိန်(န်)",
    "meaning": "လမ်းလျှောက်သည်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 378,
    "thai": "วิ่ง",
    "phonetic": "/wîŋ/",
    "myanmarReading": "ဝင့်(င်)",
    "meaning": "ပြေးသည်",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 379,
    "thai": "ถึง",
    "phonetic": "/thʉ̌ŋ/",
    "myanmarReading": "ထွန်း(င်)",
    "meaning": "ရောက်ရှိသည်",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 380,
    "thai": "หลงทาง",
    "phonetic": "/lǒŋ-thaaŋ/",
    "myanmarReading": "လုန်(င်)ထာင်(င်)",
    "meaning": "လမ်းပျောက်သည် / လမ်းမှားသည်",
    "tone": "Rising + Mid Tone",
    "category": "လမ်းညွှန်နှင့် ယာဉ်များ"
  },
  {
    "id": 381,
    "thai": "ร่างกาย",
    "phonetic": "/râaŋ-kaay/",
    "myanmarReading": "ရောင်း(င်)ကာယ်(လ်)",
    "meaning": "ခန္ဓာကိုယ်",
    "tone": "Falling + Mid Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 382,
    "thai": "หัว",
    "phonetic": "/hǔa/",
    "myanmarReading": "ဟွာ",
    "meaning": "ခေါင်း / ဦးခေါင်း",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 383,
    "thai": "ผม",
    "phonetic": "/phǒm/",
    "myanmarReading": "ဖုန်(မ်)",
    "meaning": "ဆံပင်",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 384,
    "thai": "หน้า",
    "phonetic": "/nâa/",
    "myanmarReading": "နား",
    "meaning": "မျက်နှာ",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 385,
    "thai": "ตา",
    "phonetic": "/taa/",
    "myanmarReading": "တာ",
    "meaning": "မျက်စိ / မျက်လုံး",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 386,
    "thai": "หู",
    "phonetic": "/hǔu/",
    "myanmarReading": "ဟူး",
    "meaning": "နား / နားရွက်",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 387,
    "thai": "จมูก",
    "phonetic": "/cà-mùuk/",
    "myanmarReading": "ကျာမုက်(က်)",
    "meaning": "နှာခေါင်း",
    "tone": "Low + Low Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 388,
    "thai": "ปาก",
    "phonetic": "/pàak/",
    "myanmarReading": "ပါက်(က်)",
    "meaning": "ပါးစပ်",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 389,
    "thai": "ฟัน",
    "phonetic": "/fan/",
    "myanmarReading": "ဖန်(န်)",
    "meaning": "သွား",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 390,
    "thai": "ลิ้น",
    "phonetic": "/lín/",
    "myanmarReading": "လင်း(န်)",
    "meaning": "လျှာ",
    "tone": "High Tone (အသံမြင့်)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 391,
    "thai": "คอ",
    "phonetic": "/khɔɔ/",
    "myanmarReading": "ခေါ",
    "meaning": "လည်ပင်း",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 392,
    "thai": "ไหล่",
    "phonetic": "/lày/",
    "myanmarReading": "လိုင်(ယ်)",
    "meaning": "ပခုံး",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 393,
    "thai": "อก",
    "phonetic": "/ʔòk/",
    "myanmarReading": "အုတ်(က်)",
    "meaning": "ရင်ဘတ်",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 394,
    "thai": "แขน",
    "phonetic": "/khɛ̌ɛn/",
    "myanmarReading": "ခန်(န်)",
    "meaning": "လက်မောင်း",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 395,
    "thai": "มือ",
    "phonetic": "/mʉʉ/",
    "myanmarReading": "မွမ်(လ်)",
    "meaning": "လက်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 396,
    "thai": "นิ้วมือ",
    "phonetic": "/níw-mʉʉ/",
    "myanmarReading": "နိဝ်(ဝ်)မွမ်(လ်)",
    "meaning": "လက်ချောင်း",
    "tone": "High + Mid Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 397,
    "thai": "ท้อง",
    "phonetic": "/thɔ́ɔŋ/",
    "myanmarReading": "ထောင်း(င်)",
    "meaning": "ဗိုက် / ဝမ်းဗိုက်",
    "tone": "High Tone (အသံမြင့်)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 398,
    "thai": "หลัง",
    "phonetic": "/lǎŋ/",
    "myanmarReading": "လင်(င်)",
    "meaning": "ကျောပြင် / ခါးနောက်ဘက်",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 399,
    "thai": "ขา",
    "phonetic": "/khǎa/",
    "myanmarReading": "ခါ",
    "meaning": "ခြေထောက်",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 400,
    "thai": "เข่า",
    "phonetic": "/khàw/",
    "myanmarReading": "ခေါင်(ဝ်)",
    "meaning": "ဒူးခေါင်း",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 401,
    "thai": "เท้า",
    "phonetic": "/tháw/",
    "myanmarReading": "ထောက်(ဝ်)",
    "meaning": "ခြေဖဝါး",
    "tone": "High Tone (အသံမြင့်)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 402,
    "thai": "นิ้วเท้า",
    "phonetic": "/níw-tháw/",
    "myanmarReading": "နိဝ်(ဝ်)ထောက်(ဝ်)",
    "meaning": "ခြေချောင်း",
    "tone": "High + High Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 403,
    "thai": "หัวใจ",
    "phonetic": "/hǔa-cay/",
    "myanmarReading": "ဟွာကျိုင်း(ယ်)",
    "meaning": "နှလုံး",
    "tone": "Rising + Mid Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 404,
    "thai": "ปอด",
    "phonetic": "/pɔ̀ɔt/",
    "myanmarReading": "ပေါ့(တ်)",
    "meaning": "အဆုတ်",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 405,
    "thai": "เลือด",
    "phonetic": "/lʉ̂at/",
    "myanmarReading": "လွတ်(တ်)",
    "meaning": "သွေး",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 406,
    "thai": "ไม่สบาย",
    "phonetic": "/mây-sà-baay/",
    "myanmarReading": "မိုင်း(ယ်)ဆာဘိုင်း(ယ်)",
    "meaning": "နေမကောင်း / ကျန်းမာရေးမကောင်း",
    "tone": "Falling + Low + Mid Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 407,
    "thai": "ป่วย",
    "phonetic": "/pùay/",
    "myanmarReading": "ပွေ့(ယ်)",
    "meaning": "ဖျားနာသည်",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 408,
    "thai": "ปวดหัว",
    "phonetic": "/pùat-hǔa/",
    "myanmarReading": "ပွတ်(တ်)ဟွာ",
    "meaning": "ခေါင်းကိုက်သည်",
    "tone": "Low + Rising Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 409,
    "thai": "ปวดท้อง",
    "phonetic": "/pùat-thɔ́ɔŋ/",
    "myanmarReading": "ပွတ်(တ်)ထောင်း(င်)",
    "meaning": "ဗိုက်နာသည် / ဗိုက်အောင့်သည်",
    "tone": "Low + High Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 410,
    "thai": "ปวดฟัน",
    "phonetic": "/pùat-fan/",
    "myanmarReading": "ပွတ်(တ်)ဖန်(န်)",
    "meaning": "သွားကိုက်သည်",
    "tone": "Low + Mid Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 411,
    "thai": "ปวดหลัง",
    "phonetic": "/pùat-lǎŋ/",
    "myanmarReading": "ပွတ်(တ်)လင်(င်)",
    "meaning": "ခါးနာသည် / ကျောအောင့်သည်",
    "tone": "Low + Rising Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 412,
    "thai": "เป็นไข้",
    "phonetic": "/pen-khây/",
    "myanmarReading": "ပင်(န်)ခိုင်း(ယ်)",
    "meaning": "အဖျားရှိသည်",
    "tone": "Mid + Falling Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 413,
    "thai": "ตัวร้อน",
    "phonetic": "/tua-rɔ́ɔn/",
    "myanmarReading": "တွာရွန်း(န်)",
    "meaning": "ကိုယ်ပူသည်",
    "tone": "Mid + High Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 414,
    "thai": "ไอ",
    "phonetic": "/ʔay/",
    "myanmarReading": "အိုင်း(ယ်)",
    "meaning": "ချောင်းဆိုးသည်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 415,
    "thai": "จาม",
    "phonetic": "/caam/",
    "myanmarReading": "ကျာမ်(မ်)",
    "meaning": "နှာချေသည်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 416,
    "thai": "เจ็บคอ",
    "phonetic": "/cèp-khɔɔ/",
    "myanmarReading": "ကျစ်(ပ်)ခေါ",
    "meaning": "လည်ချောင်းနာသည်",
    "tone": "Low + Mid Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 417,
    "thai": "น้ำมูกไหล",
    "phonetic": "/nám-mûuk-lǎy/",
    "myanmarReading": "နမ်း(မ်)မုက်(က်)လိုင်း(ယ်)",
    "meaning": "နှာရည်ယိုသည်",
    "tone": "High + Falling + Rising Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 418,
    "thai": "ท้องเสีย",
    "phonetic": "/thɔ́ɔŋ-sǐa/",
    "myanmarReading": "ထောင်း(င်)ဆီယာ",
    "meaning": "ဝမ်းလျှောသည် / ဝမ်းပျက်သည်",
    "tone": "High + Rising Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 419,
    "thai": "คลื่นไส้",
    "phonetic": "/khlʉ̂ʉn-sây/",
    "myanmarReading": "ခလွန်း(န်)ဆိုင်း(ယ်)",
    "meaning": "ပျို့အန်ချင်သည်",
    "tone": "Falling + Falling Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 420,
    "thai": "อาเจียน",
    "phonetic": "/ʔaa-cian/",
    "myanmarReading": "အာကျီယန်(န်)",
    "meaning": "အန်သည်",
    "tone": "Mid + Mid Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 421,
    "thai": "เวียนหัว",
    "phonetic": "/wian-hǔa/",
    "myanmarReading": "ဝီယန်(န်)ဟွာ",
    "meaning": "ခေါင်းမူးသည်",
    "tone": "Mid + Rising Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 422,
    "thai": "แพ้",
    "phonetic": "/phɛ́ɛ/",
    "myanmarReading": "ဖဲ",
    "meaning": "ဓာတ်မတည့်ဖြစ်သည် (Allergy)",
    "tone": "High Tone (အသံမြင့်)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 423,
    "thai": "แผล",
    "phonetic": "/phlɛ̌ɛ/",
    "myanmarReading": "ဖလယ်",
    "meaning": "ဒဏ်ရာ / အနာ",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 424,
    "thai": "เลือดออก",
    "phonetic": "/lʉ̂at-ʔɔ̀ɔk/",
    "myanmarReading": "လွတ်(တ်)အောက်(က်)",
    "meaning": "သွေးထွက်သည်",
    "tone": "Falling + Low Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 425,
    "thai": "ยา",
    "phonetic": "/yaa/",
    "myanmarReading": "ယာ",
    "meaning": "ဆေးဝါး / ဆေး",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 426,
    "thai": "กินยา",
    "phonetic": "/kin-yaa/",
    "myanmarReading": "ကင်(န်)ယာ",
    "meaning": "ဆေးသောက်သည်",
    "tone": "Mid + Mid Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 427,
    "thai": "ยาแก้ปวด",
    "phonetic": "/yaa-kɛ̂ɛ-pùat/",
    "myanmarReading": "ယာကဲပွတ်(တ်)",
    "meaning": "အကိုက်အခဲပျောက်ဆေး",
    "tone": "Mid + Falling + Low Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 428,
    "thai": "ยาพารา",
    "phonetic": "/yaa-phaa-raa/",
    "myanmarReading": "ယာဖာရာ",
    "meaning": "ပါရာစီတမောဆေးပြား",
    "tone": "Mid + Mid + Mid Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 429,
    "thai": "ยาลดไข้",
    "phonetic": "/yaa-lót-khây/",
    "myanmarReading": "ယာလုတ်(တ်)ခိုင်း(ယ်)",
    "meaning": "အဖျားကျဆေး",
    "tone": "Mid + High + Falling Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 430,
    "thai": "ยาแก้แพ้",
    "phonetic": "/yaa-kɛ̂ɛ-phɛ́ɛ/",
    "myanmarReading": "ယာကဲဖဲ",
    "meaning": "အလာဂျီပျောက်ဆေး",
    "tone": "Mid + Falling + High Tone",
    "category": "ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး"
  },
  {
    "id": 431,
    "thai": "งาน",
    "phonetic": "/ŋaan/",
    "myanmarReading": "ငါန်း(န်)",
    "meaning": "အလုပ် / တာဝန်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 432,
    "thai": "ทำงาน",
    "phonetic": "/tham-ŋaan/",
    "myanmarReading": "ထမ်(မ်)ငါန်း(န်)",
    "meaning": "အလုပ်လုပ်သည်",
    "tone": "Mid + Mid Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 433,
    "thai": "อาชีพ",
    "phonetic": "/ʔaa-chîip/",
    "myanmarReading": "အာချိပ်(ပ်)",
    "meaning": "အလုပ်အကိုင် / သက်မွေးဝမ်းကျောင်း",
    "tone": "Mid + Falling Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 434,
    "thai": "เจ้านาย",
    "phonetic": "/câaw-naay/",
    "myanmarReading": "ကျောက်(ဝ်)နိုင်း(ယ်)",
    "meaning": "သူဌေး / အထက်လူကြီး",
    "tone": "Falling + Mid Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 435,
    "thai": "หัวหน้า",
    "phonetic": "/hǔa-nâa/",
    "myanmarReading": "ဟွာနား",
    "meaning": "ခေါင်းဆောင် / မန်နေဂျာ",
    "tone": "Rising + Falling Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 436,
    "thai": "ลูกน้อง",
    "phonetic": "/lûuk-nɔ́ɔŋ/",
    "myanmarReading": "လုက်(က်)နောင်း(င်)",
    "meaning": "လက်အောက်ငယ်သား",
    "tone": "Falling + High Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 437,
    "thai": "เพื่อนร่วมงาน",
    "phonetic": "/phʉ̂an-rûam-ŋaan/",
    "myanmarReading": "ဖွန်း(န်)ရွမ်း(မ်)ငါန်း(န်)",
    "meaning": "လုပ်ဖော်ကိုင်ဖက်",
    "tone": "Complex Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 438,
    "thai": "พนักงาน",
    "phonetic": "/phá-nák-ŋaan/",
    "myanmarReading": "ဖာနတ်(က်)ငါန်း(န်)",
    "meaning": "ဝန်ထမ်း",
    "tone": "High + High + Mid Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 439,
    "thai": "พนักงานบริษัท",
    "phonetic": "/phá-nák-ŋaan-bɔɔ-rí-sàt/",
    "myanmarReading": "ဖာနတ်(က်)ငါန်း(န်)ဘောရိဆတ်(တ်)",
    "meaning": "ကုမ္ပဏီဝန်ထမ်း",
    "tone": "Complex Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 440,
    "thai": "พนักงานเสิร์ฟ",
    "phonetic": "/phá-nák-ŋaan-sə̀əp/",
    "myanmarReading": "ဖာနတ်(က်)ငါန်း(န်)ဆပ်(ပ်)",
    "meaning": "စားပွဲထိုးဝန်ထမ်း",
    "tone": "Complex Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 441,
    "thai": "พนักงานขาย",
    "phonetic": "/phá-nák-ŋaan-khǎay/",
    "myanmarReading": "ဖာနတ်(က်)ငါန်း(န်)ခိုင်(ယ်)",
    "meaning": "အရောင်းဝန်ထမ်း",
    "tone": "Complex Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 442,
    "thai": "แคชเชียร์",
    "phonetic": "/khɛ́t-chia/",
    "myanmarReading": "ခက်(တ်)ချီယာ",
    "meaning": "ငွေကိုင် / ကောင်တာဝန်ထမ်း",
    "tone": "High + Mid Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 443,
    "thai": "ครู",
    "phonetic": "/khruu/",
    "myanmarReading": "ခရူး",
    "meaning": "ဆရာ / ဆရာမ",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 444,
    "thai": "อาจารย์",
    "phonetic": "/ʔaa-caan/",
    "myanmarReading": "အာကျာန်(န်)",
    "meaning": "ကထိက / ပါမောက္ခ / တက္ကသိုလ်ဆရာ",
    "tone": "Mid + Mid Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 445,
    "thai": "หมอ",
    "phonetic": "/mɔ̌ɔ/",
    "myanmarReading": "မော",
    "meaning": "ဆရာဝန်",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 446,
    "thai": "พยาบาล",
    "phonetic": "/phá-yaa-baan/",
    "myanmarReading": "ဖာယာဘာန်(န်)",
    "meaning": "သူနာပြု",
    "tone": "High + Mid + Mid Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 447,
    "thai": "ทันตแพทย์",
    "phonetic": "/than-tà-phɛ̂ɛt/",
    "myanmarReading": "ထန်(န်)တာဖတ်(တ်)",
    "meaning": "သွားဆရာဝန်",
    "tone": "Mid + Low + Falling Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 448,
    "thai": "เภสัชกร",
    "phonetic": "/phee-sàt-chá-kɔɔn/",
    "myanmarReading": "ဖေဆတ်(တ်)ချာကွန်း(န်)",
    "meaning": "ဆေးဝါးကျွမ်းကျင်သူ",
    "tone": "Complex Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 449,
    "thai": "วิศวกร",
    "phonetic": "/wít-sà-wá-kɔɔn/",
    "myanmarReading": "ဝစ်(တ်)ဆာဝါကွန်း(န်)",
    "meaning": "အင်ဂျင်နီယာ",
    "tone": "Complex Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 450,
    "thai": "สถาปนิก",
    "phonetic": "/sà-thǎa-pá-ník/",
    "myanmarReading": "ဆာထာပါနစ်(က်)",
    "meaning": "ဗိသုကာပညာရှင်",
    "tone": "Complex Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 451,
    "thai": "ตำรวจ",
    "phonetic": "/tam-rùat/",
    "myanmarReading": "တမ်(မ်)ရွတ်(တ်)",
    "meaning": "ရဲတပ်ဖွဲ့ဝင် / ရဲ",
    "tone": "Mid + Low Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 452,
    "thai": "ทหาร",
    "phonetic": "/thá-hǎan/",
    "myanmarReading": "ထာဟန်(န်)",
    "meaning": "စစ်သား",
    "tone": "High + Rising Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 453,
    "thai": "ทนายความ",
    "phonetic": "/thá-naay-khwaam/",
    "myanmarReading": "ထာနိုင်း(ယ်)ခွာမ်(မ်)",
    "meaning": "ရှေ့နေ",
    "tone": "High + Mid + Mid Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 454,
    "thai": "ผู้พิพากษา",
    "phonetic": "/phûu-phí-phaak-sǎa/",
    "myanmarReading": "ဖုဖီဖာက်(က်)ဆာ",
    "meaning": "တရားသူကြီး",
    "tone": "Complex Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 455,
    "thai": "พ่อค้า",
    "phonetic": "/phɔ̂ɔ-kháa/",
    "myanmarReading": "ဖော့ခါး",
    "meaning": "ကုန်သည် / ဈေးသည် (အမျိုးသား)",
    "tone": "Falling + High Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 456,
    "thai": "แม่ค้า",
    "phonetic": "/mɛ̂ɛ-kháa/",
    "myanmarReading": "မဲခါး",
    "meaning": "ဈေးသည် (အမျိုးသမီး)",
    "tone": "Falling + High Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 457,
    "thai": "นักธุรกิจ",
    "phonetic": "/nák-thú-rá-kìt/",
    "myanmarReading": "နတ်(က်)ထုရာကစ်(တ်)",
    "meaning": "စီးပွားရေးလုပ်ငန်းရှင်",
    "tone": "Complex Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 458,
    "thai": "ชาวนา",
    "phonetic": "/chaaw-naa/",
    "myanmarReading": "ချောင်(ဝ်)နာ",
    "meaning": "လယ်သမား",
    "tone": "Mid + Mid Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 459,
    "thai": "ชาวประมง",
    "phonetic": "/chaaw-prà-moŋ/",
    "myanmarReading": "ချောင်(ဝ်)ပရာမုန်(င်)",
    "meaning": "တံငါသည် / ရေလုပ်သား",
    "tone": "Mid + Low + Mid Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 460,
    "thai": "ช่าง",
    "phonetic": "/châaŋ/",
    "myanmarReading": "ချောင်း(င်)",
    "meaning": "ကျွမ်းကျင်လက်သမား / စက်ဆရာ",
    "tone": "Falling Tone (အသံနိမ့်ကျ)",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 461,
    "thai": "ช่างไฟ",
    "phonetic": "/châaŋ-fay/",
    "myanmarReading": "ချောင်း(င်)ဖိုင်း(ယ်)",
    "meaning": "လျှပ်စစ်ကျွမ်းကျင်ဆရာ",
    "tone": "Falling + Mid Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 462,
    "thai": "ช่างยนต์",
    "phonetic": "/châaŋ-yon/",
    "myanmarReading": "ချောင်း(င်)ယုန့်(န်)",
    "meaning": "မော်တော်ကားစက်ပြင်ဆရာ",
    "tone": "Falling + Mid Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 463,
    "thai": "ช่างตัดผม",
    "phonetic": "/châaŋ-tàt-phǒm/",
    "myanmarReading": "ချောင်း(င်)တတ်(တ်)ဖုန်(မ်)",
    "meaning": "ဆံပင်ညှပ်ဆရာ",
    "tone": "Falling + Low + Rising Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 464,
    "thai": "ช่างเย็บผ้า",
    "phonetic": "/châaŋ-yép-phâa/",
    "myanmarReading": "ချောင်း(င်)ယစ်(ပ်)ဖာ",
    "meaning": "အဝတ်ချုပ်ဆရာ / စက်ချုပ်သမား",
    "tone": "Falling + High + Falling Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 465,
    "thai": "แม่บ้าน",
    "phonetic": "/mɛ̂ɛ-bâan/",
    "myanmarReading": "မဲဘန်း(န်)",
    "meaning": "အိမ်ရှင်မ / အိမ်အကူဝန်ထမ်း",
    "tone": "Falling + Falling Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 466,
    "thai": "รปภ",
    "phonetic": "/rɔɔ-phɔɔ-phɔɔ/",
    "myanmarReading": "ရောဖောဖော",
    "meaning": "လုံခြုံရေးဝန်ထမ်း (Security)",
    "tone": "Mid + Mid + Mid Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 467,
    "thai": "คนขับรถแท็กซี่",
    "phonetic": "/khon-khàp-rót-thɛ́k-sîi/",
    "myanmarReading": "ခုန့်(န်)ခပ်(ပ်)ရုတ်(တ်)ထက်ဆီ",
    "meaning": "တက္ကစီယာဉ်မောင်း",
    "tone": "Complex Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 468,
    "thai": "ดารา",
    "phonetic": "/daa-raa/",
    "myanmarReading": "ဒါရာ",
    "meaning": "သရုပ်ဆောင် / မင်းသား / မင်းသမီး",
    "tone": "Mid + Mid Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 469,
    "thai": "นักร้อง",
    "phonetic": "/nák-rɔ́ɔŋ/",
    "myanmarReading": "နတ်(က်)ရောင်း(င်)",
    "meaning": "အဆိုတော်",
    "tone": "High + High Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 470,
    "thai": "นักเรียน",
    "phonetic": "/nák-rian/",
    "myanmarReading": "နတ်(က်)ရီယန်(န်)",
    "meaning": "ကျောင်းသား / ကျောင်းသူ",
    "tone": "High + Mid Tone",
    "category": "အလုပ်အကိုင်များ"
  },
  {
    "id": 471,
    "thai": "อากาศ",
    "phonetic": "/ʔaa-kàat/",
    "myanmarReading": "အာကာတ်(တ်)",
    "meaning": "ရာသီဥတု / လေထု",
    "tone": "Mid + Low Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 472,
    "thai": "ฤดูกาล",
    "phonetic": "/rʉ́-duu-kaan/",
    "myanmarReading": "ရွတ်(တ်)ဒူကာန်း(န်)",
    "meaning": "ရာသီကာလ",
    "tone": "High + Mid + Mid Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 473,
    "thai": "ฤดูร้อน",
    "phonetic": "/rʉ́-duu-rɔ́ɔn/",
    "myanmarReading": "ရွတ်(တ်)ဒူရွန်း(န်)",
    "meaning": "နွေရာသီ",
    "tone": "High + Mid + High Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 474,
    "thai": "ฤดูฝน",
    "phonetic": "/rʉ́-duu-fǒn/",
    "myanmarReading": "ရွတ်(တ်)ဒူဖုန့်(န်)",
    "meaning": "မိုးရာသီ",
    "tone": "High + Mid + Rising Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 475,
    "thai": "ฤดูหนาว",
    "phonetic": "/rʉ́-duu-nǎaw/",
    "myanmarReading": "ရွတ်(တ်)ဒူနောင်း(ဝ်)",
    "meaning": "ဆောင်းရာသီ",
    "tone": "High + Mid + Rising Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 476,
    "thai": "ร้อน",
    "phonetic": "/rɔ́ɔn/",
    "myanmarReading": "ရွန်း(န်)",
    "meaning": "ပူသည် / ပူပြင်းသည်",
    "tone": "High Tone (အသံမြင့်)",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 477,
    "thai": "ร้อนมาก",
    "phonetic": "/rɔ́ɔn-mâak/",
    "myanmarReading": "ရွန်း(န်)မတ်(က်)",
    "meaning": "အရမ်းပူသည်",
    "tone": "High + Falling Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 478,
    "thai": "หนาว",
    "phonetic": "/nǎaw/",
    "myanmarReading": "နောင်း(ဝ်)",
    "meaning": "အေးသည် (ဆောင်းရာသီ)",
    "tone": "Rising Tone (အသံမြင့်ဆွဲ)",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 479,
    "thai": "เย็น",
    "phonetic": "/yen/",
    "myanmarReading": "ယင်(န်)",
    "meaning": "အေးမြသည် / စိမ့်သည်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 480,
    "thai": "อบอุ่น",
    "phonetic": "/ʔòp-ʔùn/",
    "myanmarReading": "အုတ်(ပ်)အုန့်(န်)",
    "meaning": "နွေးထွေးသည်",
    "tone": "Low + Low Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 481,
    "thai": "ฝนตก",
    "phonetic": "/fǒn-tòk/",
    "myanmarReading": "ဖုန့်(န်)တုတ်(က်)",
    "meaning": "မိုးရွာသည်",
    "tone": "Rising + Low Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 482,
    "thai": "ฝนตกหนัก",
    "phonetic": "/fǒn-tòk-nàk/",
    "myanmarReading": "ဖုန့်(န်)တုတ်(က်)နတ်(က်)",
    "meaning": "မိုးသည်းထန်စွာရွာသည်",
    "tone": "Rising + Low + Low Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 483,
    "thai": "ฝนแล้ง",
    "phonetic": "/fǒn-lɛ́ɛŋ/",
    "myanmarReading": "ဖုန့်(န်)လင်(င်)",
    "meaning": "မိုးခေါင်သည်",
    "tone": "Rising + High Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 484,
    "thai": "พายุ",
    "phonetic": "/phaa-yú/",
    "myanmarReading": "ဖာယု",
    "meaning": "မုန်တိုင်း",
    "tone": "Mid + High Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 485,
    "thai": "ลม",
    "phonetic": "/lom/",
    "myanmarReading": "လုန့်(မ်)",
    "meaning": "လေ / လေပြည်",
    "tone": "Mid Tone (အလယ်သံ)",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 486,
    "thai": "ลมแรง",
    "phonetic": "/lom-rɛɛŋ/",
    "myanmarReading": "လုန့်(မ်)ရင်(င်)",
    "meaning": "လေပြင်းတိုက်ခတ်သည်",
    "tone": "Mid + Mid Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 487,
    "thai": "แดด",
    "phonetic": "/dɛ̀ɛt/",
    "myanmarReading": "ဒတ်(တ်)",
    "meaning": "နေရောင် / နေရောင်ခြည်",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 488,
    "thai": "แดดออก",
    "phonetic": "/dɛ̀ɛt-ʔɔ̀ɔk/",
    "myanmarReading": "ဒတ်(တ်)အောက်(က်)",
    "meaning": "နေသာသည် / နေထွက်သည်",
    "tone": "Low + Low Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 489,
    "thai": "แดดแรง",
    "phonetic": "/dɛ̀ɛt-rɛɛŋ/",
    "myanmarReading": "ဒတ်(တ်)ရင်(င်)",
    "meaning": "နေပူပြင်းသည် / နေရှိန်ပြင်းသည်",
    "tone": "Low + Mid Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 490,
    "thai": "ร่มรื่น",
    "phonetic": "/rôm-rʉ̂ʉn/",
    "myanmarReading": "ရုံ(မ်)ရွန်း(န်)",
    "meaning": "အရိပ်ကောင်းသည် / သာယာအေးချမ်းသည်",
    "tone": "Falling + Falling Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 491,
    "thai": "เมฆ",
    "phonetic": "/mêek/",
    "myanmarReading": "မိတ်(က်)",
    "meaning": "တိမ်တိုက် / မိုးတိမ်",
    "tone": "High Tone (အသံမြင့်)",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 492,
    "thai": "มีเมฆมาก",
    "phonetic": "/mii-mêek-mâak/",
    "myanmarReading": "မီမိတ်(က်)မတ်(က်)",
    "meaning": "တိမ်ထူထပ်သည်",
    "tone": "Mid + High + Falling Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 493,
    "thai": "ฟ้าผ่า",
    "phonetic": "/fáa-phàa/",
    "myanmarReading": "ဖားဖာ",
    "meaning": "မိုးကြိုးပစ်သည်",
    "tone": "High + Low Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 494,
    "thai": "ฟ้าร้อง",
    "phonetic": "/fáa-rɔ́ɔŋ/",
    "myanmarReading": "ဖားရောင်း(င်)",
    "meaning": "မိုးခြိမ်းသည်",
    "tone": "High + High Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 495,
    "thai": "ฟ้าแลบ",
    "phonetic": "/fáa-lɛ̂ɛp/",
    "myanmarReading": "ဖားလက်(ပ်)",
    "meaning": "လျှပ်စီးလက်သည်",
    "tone": "High + Falling Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 496,
    "thai": "น้ำท่วม",
    "phonetic": "/nám-thûam/",
    "myanmarReading": "နမ်း(မ်)ထွမ်း(မ်)",
    "meaning": "ရေကြီးသည် / ရေလျှံသည်",
    "tone": "High + Falling Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 497,
    "thai": "หมอก",
    "phonetic": "/mɔ̀ɔk/",
    "myanmarReading": "မော့(က်)",
    "meaning": "မြူ / မြူနှင်း",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 498,
    "thai": "ฝุ่น",
    "phonetic": "/fùn/",
    "myanmarReading": "ဖုန့်(န်)",
    "meaning": "ဖုန်မှုန့် / အမှုန်အမွှား (PM 2.5)",
    "tone": "Low Tone (အသံနိမ့်)",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 499,
    "thai": "อุณหภูมิ",
    "phonetic": "/ʔun-hà-phuum/",
    "myanmarReading": "အုန့်(န်)ဟာဖူးမ်(မ်)",
    "meaning": "အပူချိန်",
    "tone": "Mid + Low + Mid Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  },
  {
    "id": 500,
    "thai": "พยากรณ์อากาศ",
    "phonetic": "/phá-yaa-kɔɔn-ʔaa-kàat/",
    "myanmarReading": "ဖာယာကွန်း(န်)အာကာတ်(တ်)",
    "meaning": "မိုးလေဝသခန့်မှန်းချက်",
    "tone": "Complex Tone",
    "category": "မိုးလေဝသနှင့် ရာသီဥတု"
  }
];
