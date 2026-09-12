import React, { useState, useMemo } from 'react';
import { CATEGORIES } from '../data/categories';
import { THAI_NOUNS } from '../data/nouns';
import { CategoryId, ThaiNoun } from '../types';
import { playThaiSpeech } from '../utils/audio';

interface VocabViewProps {
  onLearnWord: (noun: ThaiNoun) => void;
  masteredWords: Set<number>;
  onToggleMastered: (wordId: number) => void;
}

interface ParsedTone {
  english: string;
  burmese: string;
}

const toBurmeseNumber = (n: number): string => {
  const burmeseDigits = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'];
  return String(n)
    .split('')
    .map((char) => {
      const digit = parseInt(char, 10);
      return isNaN(digit) ? char : burmeseDigits[digit];
    })
    .join('');
};

function parseTone(toneStr: string): ParsedTone {
  if (!toneStr) return { english: 'Tone', burmese: '' };

  const match = toneStr.match(/^(.*?)\s*(\(.*?\))?$/);
  if (match) {
    const english = match[1].trim();
    let burmese = match[2]?.trim() || '';

    // Fallback Burmese descriptions if not in parentheses
    if (!burmese) {
      if (english.includes('Rising')) burmese = '(အသံမြင့်ဆွဲ)';
      else if (english.includes('High')) burmese = '(အသံမြင့်)';
      else if (english.includes('Low')) burmese = '(အသံနိမ့်)';
      else if (english.includes('Falling')) burmese = '(အသံနိမ့်ကျ)';
      else if (english.includes('Mid')) burmese = '(အလယ်သံ)';
    }

    return { english, burmese };
  }

  return { english: toneStr, burmese: '' };
}

export const VocabView: React.FC<VocabViewProps> = ({
  onLearnWord,
  masteredWords,
  onToggleMastered,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [playingId, setPlayingId] = useState<number | null>(null);

  const filteredNouns = useMemo(() => {
    return THAI_NOUNS.filter((noun) => {
      const matchCat = selectedCategory === 'all' || noun.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchCat;

      const matchText =
        noun.thai.toLowerCase().includes(query) ||
        noun.phonetics.toLowerCase().includes(query) ||
        noun.burmesePhonetic.toLowerCase().includes(query) ||
        noun.burmeseMeaning.toLowerCase().includes(query) ||
        String(noun.id).includes(query);

      return matchCat && matchText;
    });
  }, [searchQuery, selectedCategory]);

  const handlePlaySound = (noun: ThaiNoun) => {
    setPlayingId(noun.id);
    playThaiSpeech(
      noun.thai,
      () => setPlayingId(noun.id),
      () => setPlayingId(null)
    );
  };

  return (
    <div className="flex-1 px-4 pt-3 pb-24 flex flex-col gap-3">
      {/* Search Bar matching Screenshot */}
      <div className="flex flex-col gap-2">
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3.5 text-[#7f7381] text-[20px]">
            search
          </span>
          <input
            type="text"
            placeholder="ထိုင်းစာ၊ အသံထွက် သို့မဟုတ် အဓိပ္ပာယ် ရှာဖွေပါ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 bg-white rounded-xl border border-[#EBE5DA] text-xs font-padauk placeholder:text-[#a094a3] text-[#1e1b19] focus:outline-none focus:ring-2 focus:ring-[#4b006e]/20 shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 text-[#7f7381] hover:text-[#1e1b19] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>

        {/* Category horizontal pills matching Screenshot */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-padauk whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#2c0043] text-[#FFDE34] font-bold shadow-xs'
                : 'bg-[#f4ece8] text-[#4d4450] hover:bg-[#eee7e3]'
            }`}
          >
            အားလုံး (၁၀၀ လုံး)
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-padauk whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#2c0043] text-[#FFDE34] font-bold shadow-xs'
                  : 'bg-[#f4ece8] text-[#4d4450] hover:bg-[#eee7e3]'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: cat.tagColor }}
              />
              <span lang="my">{cat.burmese}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Count Bar matching Screenshot */}
      <div className="flex items-center justify-between text-xs font-padauk px-1 text-[#7f7381]">
        <span>
          ဝေါဟာရ စုစုပေါင်း: <strong className="text-[#1e1b19] font-padauk font-bold text-[13px]">၁၀၀ လုံး</strong>
          {(selectedCategory !== 'all' || searchQuery.trim().length > 0) && (
            <> (တွေ့ရှိ: <strong className="text-[#1e1b19] font-padauk font-bold text-[13px]">{toBurmeseNumber(filteredNouns.length)}</strong> လုံး)</>
          )}
        </span>
        <span>
          ကျက်မှတ်ပြီး: <strong className="text-[#4b006e] font-padauk font-bold text-[13px]">{toBurmeseNumber(masteredWords.size)}</strong>
        </span>
      </div>

      {/* Word List matching Screenshot cards */}
      <div className="flex flex-col gap-2.5">
        {filteredNouns.map((noun) => {
          const isMastered = masteredWords.has(noun.id);
          const isPlaying = playingId === noun.id;
          const toneInfo = parseTone(noun.tone);

          return (
            <div
              key={noun.id}
              className="bg-white rounded-2xl p-3.5 border border-[#EBE5DA] shadow-xs flex items-center justify-between hover:border-[#4b006e]/40 transition-colors gap-2.5"
            >
              {/* Left: Circular Audio Button */}
              <button
                id={`vocab-audio-btn-${noun.id}`}
                onClick={() => handlePlaySound(noun)}
                className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 active:scale-95 transition-all cursor-pointer ${
                  isPlaying
                    ? 'bg-[#FFDE34] text-[#1A0028] shadow-xs animate-pulse'
                    : 'bg-[#f4ece8] text-[#2c0043] hover:bg-[#ebd0f5]'
                }`}
                title="Play pronunciation"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {isPlaying ? 'graphic_eq' : 'volume_up'}
                </span>
              </button>

              {/* Middle: Content Section */}
              <div className="flex-1 min-w-0 flex flex-col justify-center gap-0.5">
                {/* Top row: Thai Word with lang="th", clean slash Phonetic and Myanmar Reading with lang="my" */}
                <div className="flex items-baseline gap-1.5 flex-wrap min-h-[28px]">
                  <span
                    lang="th"
                    className="font-prompt font-bold text-[18px] text-[#1e1b19] leading-tight"
                  >
                    {noun.thai}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 font-mono" lang="en">
                    {noun.phonetic || noun.phonetics}
                  </span>
                  <span className="text-gray-500 text-sm font-padauk" lang="my">
                    ({noun.myanmarReading || noun.burmesePhonetic})
                  </span>
                </div>

                {/* Bottom row: Burmese translation and Two-line Tone badge */}
                <div className="flex items-center justify-between gap-2 mt-0.5">
                  <span
                    lang="my"
                    className="font-padauk text-[14px] font-bold text-[#2c0043] leading-snug"
                  >
                    {noun.burmeseMeaning}
                  </span>

                  {/* Tone badge with Burmese tone description prominent */}
                  <div className="bg-[#f4ece8] border border-[#e8ded7] px-2 py-0.5 rounded-lg flex flex-col items-start leading-tight shrink-0">
                    {toneInfo.burmese ? (
                      <>
                        <span
                          lang="my"
                          className="font-padauk text-[10px] text-[#4b006e] font-bold leading-tight"
                        >
                          {toneInfo.burmese.replace(/[()]/g, '')}
                        </span>
                        <span className="font-prompt text-[9px] text-[#7f7381] font-medium leading-tight">
                          {toneInfo.english}
                        </span>
                      </>
                    ) : (
                      <span className="font-prompt text-[10px] text-[#4b006e] font-semibold leading-tight">
                        {toneInfo.english}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Action Buttons (Flashcards + Mastered Checkmark) */}
              <div className="flex items-center gap-1.5 shrink-0 pl-1">
                <button
                  onClick={() => onLearnWord(noun)}
                  className="p-1 rounded-lg text-[#4b006e] hover:bg-[#f6d9ff] transition-colors cursor-pointer"
                  title="ကတ်ပြားဖြင့် လေ့လာမည်"
                  aria-label={`ကတ်ပြားဖြင့် လေ့လာမည်: ${noun.thai}`}
                >
                  <span className="material-symbols-outlined text-[22px]">style</span>
                </button>

                <button
                  onClick={() => onToggleMastered(noun.id)}
                  className="p-1 rounded-lg transition-colors cursor-pointer"
                  title={isMastered ? 'မှတ်မိပြီး' : 'မှတ်မိကြောင်း သတ်မှတ်မည်'}
                  aria-label={isMastered ? `${noun.thai} မှတ်မိပြီး` : `${noun.thai} ကို မှတ်မိကြောင်း သတ်မှတ်မည်`}
                >
                  <span
                    className={`material-symbols-outlined text-[22px] transition-colors ${
                      isMastered ? 'text-[#4b006e]' : 'text-[#8c7e8e] hover:text-[#4b006e]'
                    }`}
                  >
                    check_circle
                  </span>
                </button>
              </div>
            </div>
          );
        })}

        {filteredNouns.length === 0 && (
          <div className="py-12 flex flex-col items-center justify-center text-center text-[#7f7381] gap-2 font-padauk">
            <span className="material-symbols-outlined text-4xl text-[#d0c2d1]">search_off</span>
            <p>ရှာဖွေတွေ့ရှိသည့် စာလုံး မရှိပါ</p>
          </div>
        )}
      </div>
    </div>
  );
};
