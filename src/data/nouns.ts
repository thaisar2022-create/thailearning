import { CategoryId, ThaiNoun, VocabCategory, VocabWord } from '../types';
import { VOCABULARY_DATA, VocabularyItem } from './vocabulary';

// Re-export VOCABULARY_DATA and VocabularyItem from vocabulary.ts
export { VOCABULARY_DATA };
export type { VocabularyItem, VocabWord };

// Category mapping helper
const CATEGORY_MAP: Record<string, VocabCategory> = {
  'နာမ်စားနှင့် အခြေခံ': 'pronouns',
  'နိုင်ငံနှင့် နေရာများ': 'places',
  'ကိန်းဂဏန်းနှင့် ငွေကြေး': 'numbers',
  'ဈေးဝယ်ခြင်းနှင့် အဝတ်အထည်': 'clothing',
  'အချိန်နှင့် နာရီ': 'time',
  'ရက်စွဲနှင့် ပြက္ခဒိန်': 'calendar',
  'အစားအသောက်နှင့် သစ်သီးများ': 'food',
  'လမ်းညွှန်နှင့် ယာဉ်များ': 'directions',
  'ခန္ဓာကိုယ်နှင့် ကျန်းမာရေး': 'medical',
  'အလုပ်အကိုင်များ': 'jobs',
  'မိုးလေဝသနှင့် ရာသီဥတု': 'weather',
};

/**
 * Backwards compatibility: export VOCABULARY_LIST matching VocabWord[]
 */
export const VOCABULARY_LIST: VocabWord[] = VOCABULARY_DATA.map((v) => ({
  id: String(v.id),
  thai: v.thai,
  phonetic: v.phonetic,
  myanmarReading: v.myanmarReading,
  myanmar: v.meaning,
  category: CATEGORY_MAP[v.category] || 'pronouns',
  audioText: v.thai,
}));

/**
 * Maps all 500 entries of VOCABULARY_DATA into rich ThaiNoun objects
 * for full compatibility with Flashcards, Vocab views, and Dashboard.
 */
export const THAI_NOUNS: ThaiNoun[] = VOCABULARY_DATA.map((vocab) => {
  const catId = CATEGORY_MAP[vocab.category] || 'pronouns';

  return {
    id: vocab.id,
    thai: vocab.thai,
    phonetics: vocab.phonetic,
    phonetic: vocab.phonetic,
    burmesePhonetic: vocab.myanmarReading,
    myanmarReading: vocab.myanmarReading,
    burmeseMeaning: vocab.meaning,
    category: catId,
    categoryNameBurmese: vocab.category,
    tone: vocab.tone,
    meaningExplanation: `${vocab.meaning} ဖြစ်ပါသည်။ (${vocab.category})`,
    exampleThai: vocab.thai,
    exampleBurmese: vocab.meaning,
  };
});
