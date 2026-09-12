import React, { useState, useMemo } from 'react';
import { CATEGORIES } from '../data/categories';
import { THAI_NOUNS } from '../data/nouns';
import { CategoryId, ThaiNoun } from '../types';
import { playThaiSpeech } from '../utils/audio';

interface FlashcardViewProps {
  initialCategoryId?: CategoryId;
  masteredWords: Set<number>;
  onToggleMastered: (wordId: number) => void;
}

// Burmese numeral conversion helper
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

export const FlashcardView: React.FC<FlashcardViewProps> = ({
  initialCategoryId,
  masteredWords,
  onToggleMastered,
}) => {
  const [selectedCat, setSelectedCat] = useState<CategoryId | 'all'>(initialCategoryId || 'all');
  const [showCatDropdown, setShowCatDropdown] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isReviewing, setIsReviewing] = useState<Set<number>>(new Set());

  // Filter items
  const filteredNouns = useMemo(() => {
    if (selectedCat === 'all') return THAI_NOUNS;
    return THAI_NOUNS.filter((item) => item.category === selectedCat);
  }, [selectedCat]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Keep index in bound when category changes
  const safeIndex = Math.min(currentIndex, Math.max(0, filteredNouns.length - 1));
  const currentNoun: ThaiNoun = filteredNouns[safeIndex] || THAI_NOUNS[13]; // Default to #14 ข้าวเหนียว if empty

  const currentCategoryInfo = CATEGORIES.find((c) => c.id === selectedCat);
  const currentCatTitle = currentCategoryInfo ? currentCategoryInfo.burmese : 'အားလုံး (All)';

  const isCurrentMastered = masteredWords.has(currentNoun.id);
  const progressPercent = Math.round(((safeIndex + 1) / filteredNouns.length) * 100);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredNouns.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredNouns.length) % filteredNouns.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * filteredNouns.length);
    setCurrentIndex(randomIndex);
  };

  const handlePlaySound = (text: string) => {
    setIsPlayingAudio(true);
    playThaiSpeech(
      text,
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false)
    );
  };

  const handleToggleMastery = () => {
    onToggleMastered(currentNoun.id);
  };

  const handleMarkReview = () => {
    setIsReviewing((prev) => {
      const next = new Set(prev);
      if (next.has(currentNoun.id)) {
        next.delete(currentNoun.id);
      } else {
        next.add(currentNoun.id);
      }
      return next;
    });
  };

  return (
    <div className="flex-1 px-4 pt-3 pb-24 flex flex-col gap-3.5">
      {/* Category Selector & Quick Stats Bar */}
      <div className="flex items-center justify-between gap-2">
        <div className="relative">
          <button
            id="flashcard-category-btn"
            onClick={() => setShowCatDropdown(!showCatDropdown)}
            className="flex items-center gap-1.5 bg-[#F4F0E8] hover:bg-[#eee7e3] px-3 py-1.5 rounded-lg border border-[#EBE5DA] text-left transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[#4b006e] text-[18px]">
              {currentCategoryInfo ? currentCategoryInfo.icon : 'category'}
            </span>
            <span className="font-padauk text-[12px] text-[#1e1b19] font-semibold truncate max-w-[140px]">
              {currentCatTitle}
            </span>
            <span className="material-symbols-outlined text-[#7f7381] text-[16px]">
              expand_more
            </span>
          </button>

          {/* Category Dropdown Menu */}
          {showCatDropdown && (
            <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl z-50 p-1.5 flex flex-col gap-1 border border-[#EBE5DA]">
              <button
                onClick={() => {
                  setSelectedCat('all');
                  setCurrentIndex(0);
                  setShowCatDropdown(false);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-left text-xs font-padauk transition-colors cursor-pointer ${
                  selectedCat === 'all'
                    ? 'bg-[#f6d9ff] text-[#2c0043] font-bold'
                    : 'hover:bg-[#F4F0E8] text-[#1e1b19]'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#4b006e]" />
                <span>အားလုံး (All Categories)</span>
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCat(cat.id);
                    setCurrentIndex(0);
                    setShowCatDropdown(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-left text-xs font-padauk transition-colors cursor-pointer ${
                    selectedCat === cat.id
                      ? 'bg-[#f6d9ff] text-[#2c0043] font-bold'
                      : 'hover:bg-[#F4F0E8] text-[#1e1b19]'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: cat.tagColor }}
                  />
                  <span>{cat.burmese}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Counter and Pronounce Speaker */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <span className="font-padauk text-[14px] text-[#4b006e] font-bold">
              {toBurmeseNumber(safeIndex + 1)} / {toBurmeseNumber(filteredNouns.length)}
            </span>
            <span className="font-padauk text-[10px] text-[#7f7381]">ကတ်ပြား</span>
          </div>
          <button
            id="flashcard-quick-audio-btn"
            onClick={() => handlePlaySound(currentNoun.thai)}
            className={`w-8 h-8 rounded-full bg-[#F4F0E8] border border-[#EBE5DA] flex items-center justify-center text-[#4b006e] hover:bg-[#eee7e3] active:scale-90 transition-all cursor-pointer ${
              isPlayingAudio ? 'text-[#F2D705] bg-[#2c0043]' : ''
            }`}
            title="အသံထွက် နားထောင်ရန်"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isPlayingAudio ? 'graphic_eq' : 'volume_up'}
            </span>
          </button>
        </div>
      </div>

      {/* Mini Progress Line */}
      <div className="w-full bg-[#F4F0E8] h-2 rounded-full overflow-hidden border border-[#EBE5DA]">
        <div
          className="h-full bg-gradient-to-r from-[#4b006e] to-[#F2D705] rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Touch 3D Flashcard Container */}
      <div
        id="flashcard-deck-card"
        onClick={() => setIsFlipped(!isFlipped)}
        className="w-full h-[360px] [perspective:1400px] cursor-pointer select-none"
      >
        <div
          className={`relative w-full h-full duration-600 transition-transform preserve-3d rounded-2xl shadow-lg ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* FRONT SIDE (Thai Focus) */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl p-5 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#2c0043] via-[#4b006e] to-[#68278a] text-white border-2 border-[#F2D705]/40 shadow-xl">
            {/* Top row */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 border border-[#F2D705]/40">
                <span className="w-2 h-2 rounded-full bg-[#F2D705] animate-pulse" />
                <span className="font-padauk text-[11px] text-[#F2D705] font-semibold">
                  {currentNoun.categoryNameBurmese}
                </span>
              </div>
              <button
                id="front-audio-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlaySound(currentNoun.thai);
                }}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F2D705]/20 hover:bg-[#F2D705]/30 border border-[#F2D705]/50 text-[#F2D705] active:scale-95 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">volume_up</span>
                <span className="font-prompt text-[11px] text-white font-medium">အသံ</span>
              </button>
            </div>

            {/* Center: Thai Word & Phonetics */}
            <div className="flex flex-col items-center justify-center text-center my-auto z-10">
              <span className="font-prompt text-[10px] tracking-widest uppercase text-[#F2D705] font-bold bg-black/35 px-2.5 py-0.5 rounded-full border border-[#F2D705]/30 mb-2">
                Thai Noun #{String(currentNoun.id).padStart(3, '0')}
              </span>
              <h1
                lang="th"
                className="font-prompt text-[34px] text-white font-bold tracking-wide drop-shadow-md leading-tight"
              >
                {currentNoun.thai}
              </h1>
              <div className="mt-2.5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-[#F2D705]/40 shadow-inner">
                <span className="font-mono text-[13px] text-white/95 font-semibold">
                  {currentNoun.phonetic || currentNoun.phonetics}
                </span>
                <span className="text-[#F2D705] text-xs">·</span>
                <span
                  lang="my"
                  className="font-padauk text-[14px] text-[#F2D705] font-bold"
                >
                  ({currentNoun.myanmarReading || currentNoun.burmesePhonetic})
                </span>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10 z-10">
              <span className="font-mono text-[11px] text-white/80">{currentNoun.tone}</span>
              <div className="flex items-center gap-1.5 text-[#F2D705]">
                <span className="material-symbols-outlined text-[16px] animate-spin">sync</span>
                <span lang="my" className="font-padauk text-[12px] font-semibold">လှန်၍ ကြည့်ပါ</span>
              </div>
            </div>
          </div>

          {/* BACK SIDE (Burmese Translation & Explanation) */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl p-4 flex flex-col justify-between bg-white text-[#1e1b19] shadow-xl border-2 border-[#F2D705]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#EBE5DA] pb-2">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#F2D705] text-[20px]">
                  translate
                </span>
                <span
                  lang="my"
                  className="font-padauk text-[17px] text-[#2c0043] font-bold"
                >
                  {currentNoun.burmeseMeaning}
                </span>
              </div>
              <span className="font-mono text-[11px] bg-[#f6d9ff] text-[#2c0043] border border-[#2c0043]/20 px-2 py-0.5 rounded font-bold">
                #{String(currentNoun.id).padStart(3, '0')}
              </span>
            </div>

            {/* Meaning & Details */}
            <div className="flex flex-col gap-2 my-auto">
              <div className="bg-[#F4F0E8] rounded-lg p-2.5 border-l-4 border-l-[#F2D705]">
                <span
                  lang="my"
                  className="font-prompt text-[10px] uppercase font-bold text-[#4b006e]"
                >
                  ရှင်းလင်းချက် (Meaning)
                </span>
                <p
                  lang="my"
                  className="font-padauk text-[13px] text-[#1e1b19] leading-relaxed mt-1"
                >
                  {currentNoun.meaningExplanation}
                </p>
              </div>

              {/* Example sentence */}
              <div className="bg-[#FDFBF7] rounded-lg p-2 border border-[#EBE5DA] flex items-center justify-between">
                <div className="flex flex-col pr-2">
                  <span
                    lang="th"
                    className="font-prompt text-[13px] text-[#2c0043] font-bold"
                  >
                    {currentNoun.exampleThai}
                  </span>
                  <span
                    lang="my"
                    className="font-padauk text-[12px] text-[#4d4450]"
                  >
                    {currentNoun.exampleBurmese}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlaySound(currentNoun.exampleThai);
                  }}
                  className="w-7 h-7 rounded-full bg-[#f6d9ff] text-[#4b006e] flex items-center justify-center shrink-0 active:scale-90 transition-transform cursor-pointer"
                  title="Play example audio"
                >
                  <span className="material-symbols-outlined text-[15px]">volume_up</span>
                </button>
              </div>
            </div>

            {/* Back Footer */}
            <div className="flex items-center justify-between pt-1.5 border-t border-[#EBE5DA] text-[#7f7381]">
              <span className="font-padauk text-[11px]">🔄 ပြန်လှည့်ရန် နှိပ်ပါ</span>
              <span className="material-symbols-outlined text-[#F2D705] text-[16px]">
                touch_app
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Flip & Navigation Controls */}
      <div className="flex items-center justify-between gap-2 pt-1">
        <button
          id="flashcard-prev-btn"
          onClick={handlePrev}
          className="w-12 h-12 rounded-xl bg-[#2c0043] hover:bg-[#3d005e] text-white flex items-center justify-center shadow-sm active:scale-95 transition-all cursor-pointer"
          title="Previous card"
        >
          <span className="material-symbols-outlined text-[#F2D705] text-[22px]">arrow_back</span>
        </button>

        <button
          id="flashcard-flip-btn"
          onClick={() => setIsFlipped(!isFlipped)}
          className="flex-1 h-12 rounded-xl bg-[#F2D705] hover:bg-[#e0c700] text-[#2c0043] font-bold flex items-center justify-center gap-2 shadow-md active:scale-95 border border-[#e0c700] ring-2 ring-[#F2D705]/40 transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">flip</span>
          <span className="font-padauk text-[14px] font-bold">ကတ်လှန်မည် (Flip)</span>
        </button>

        <button
          id="flashcard-next-btn"
          onClick={handleNext}
          className="w-12 h-12 rounded-xl bg-[#2c0043] hover:bg-[#3d005e] text-white flex items-center justify-center shadow-sm active:scale-95 transition-all cursor-pointer"
          title="Next card"
        >
          <span className="material-symbols-outlined text-[#F2D705] text-[22px]">
            arrow_forward
          </span>
        </button>
      </div>

      {/* Review & Mastered Action Row */}
      <div className="grid grid-cols-2 gap-2">
        <button
          id="flashcard-review-again-btn"
          onClick={handleMarkReview}
          className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border-2 transition-all cursor-pointer active:scale-95 ${
            isReviewing.has(currentNoun.id)
              ? 'bg-[#ffe320]/20 border-[#D97706] text-[#D97706]'
              : 'bg-[#F4F0E8] border-[#2c0043]/20 text-[#2c0043]'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">restart_alt</span>
          <div className="flex flex-col text-left">
            <span className="font-padauk text-[13px] font-bold leading-tight">ထပ်မံလေ့ကျင့်</span>
            <span className="font-prompt text-[10px] text-[#7f7381]">Review Again</span>
          </div>
        </button>

        <button
          id="flashcard-mastered-btn"
          onClick={handleToggleMastery}
          className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border-2 shadow-sm transition-all cursor-pointer active:scale-95 ${
            isCurrentMastered
              ? 'bg-[#16A34A] text-white border-[#16A34A]'
              : 'bg-gradient-to-r from-[#2c0043] to-[#4b006e] text-white border-[#F2D705]'
          }`}
        >
          <span
            className="material-symbols-outlined text-[#F2D705] text-[20px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          <div className="flex flex-col text-left">
            <span className="font-padauk text-[13px] font-bold leading-tight">မှတ်မိပြီ</span>
            <span className="font-prompt text-[10px] text-[#F2D705] font-semibold">Mastered</span>
          </div>
        </button>
      </div>

      {/* Quick Audio & Study Helper Card */}
      <div className="bg-white rounded-xl p-3 border border-[#EBE5DA] flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[#F2D705] text-[22px]">
            tips_and_updates
          </span>
          <div className="flex flex-col">
            <span className="font-padauk text-[13px] text-[#2c0043] font-bold">အကြံပြုချက်</span>
            <span className="font-padauk text-[11px] text-[#4d4450]">
              ကတ်မလှန်မီ အသံကို ကိုယ်တိုင်ရွတ်ဖတ်ပါ
            </span>
          </div>
        </div>
        <button
          id="flashcard-shuffle-btn"
          onClick={handleShuffle}
          className="p-2 rounded-lg bg-[#F4F0E8] text-[#2c0043] hover:bg-[#eee7e3] border border-[#EBE5DA] flex items-center justify-center transition-transform active:scale-90 cursor-pointer"
          title="ရောမွှေမည် (Shuffle)"
        >
          <span className="material-symbols-outlined text-[18px]">shuffle</span>
        </button>
      </div>
    </div>
  );
};
