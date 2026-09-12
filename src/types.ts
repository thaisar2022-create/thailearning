export type VocabCategory =
  | 'pronouns'
  | 'family'
  | 'places'
  | 'numbers'
  | 'clothing'
  | 'food'
  | 'directions'
  | 'medical'
  | 'jobs'
  | 'weather';

export interface VocabWord {
  id: string;
  thai: string;
  phonetic: string;
  myanmar: string;
  category: 'pronouns' | 'family' | 'places' | 'numbers' | 'clothing' | 'food' | 'directions' | 'medical' | 'jobs' | 'weather';
  audioText?: string;
  myanmarReading?: string;
}

export type CategoryId =
  | 'all'
  | 'pronouns'
  | 'family'
  | 'places'
  | 'numbers'
  | 'clothing'
  | 'food'
  | 'directions'
  | 'medical'
  | 'jobs'
  | 'weather'
  | 'meat'
  | 'meal'
  | 'vegetable'
  | 'fruit'
  | 'drink'
  | 'people';

export interface CategoryInfo {
  id: CategoryId;
  burmese: string;
  thai: string;
  english: string;
  tagColor: string;
  badgeBg: string;
  icon: string;
  sampleWords: string[];
  wordCount: number;
}

export interface ThaiNoun {
  id: number;
  thai: string;
  phonetics: string;
  phonetic?: string;
  burmesePhonetic: string;
  myanmarReading?: string;
  burmeseMeaning: string;
  category: CategoryId;
  categoryNameBurmese: string;
  tone: string;
  meaningExplanation: string;
  exampleThai: string;
  exampleBurmese: string;
}

export interface QuizOption {
  key: 'က' | 'ခ' | 'ဂ' | 'ဃ';
  text: string;
  isCorrect: boolean;
}

export interface QuizItem {
  id: number;
  wordId: number;
  thaiWord: string;
  phonetics: string;
  categoryTag: string;
  questionBurmese: string;
  options: QuizOption[];
  explanation: string;
}

export type TabType = 'home' | 'vocab' | 'flashcards' | 'quiz';
