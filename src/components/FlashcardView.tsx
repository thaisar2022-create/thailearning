import React, { useState, useMemo, useEffect } from 'react';
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

  const playAudio = (text: string) => {
    handlePlaySound(text);
  };

  // Keyboard support: Spacebar or Enter to flip, Arrow keys to navigate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredNouns.length]);

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
                <span>အားလုံး (၁၀၀ လုံး)</span>
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
                  <span lang="my">{cat.burmese}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Counter and Pronounce Speaker */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <span className="font-padauk text-[14px] text-[#4b006e] font-bold">
              {toBurmeseNumber(safeIndex + 1)} / {selectedCat === 'all' ? '၁၀၀ လုံး' : `${toBurmeseNumber(filteredNouns.length)} လုံး`}
            </span>
            <span className="font-padauk text-[10px] text-[#7f7381]">စုစုပေါင်း ၁၀၀ လုံး</span>
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

      {/* Touch 3D Flashcard Container with strict min-h-[420px] and CLS stability */}
      <div
        id="flashcard-deck-card"
        role="button"
        tabIndex={0}
        aria-label="Flashcard: Press Spacebar or Enter to flip"
        onClick={() => setIsFlipped(!isFlipped)}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            setIsFlipped(!isFlipped);
          }
        }}
        className="w-full min-h-[420px] perspective-1000 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded-2xl relative"
      >
        <div
          className="relative w-full h-full min-h-[420px] transition-transform duration-500 ease-in-out preserve-3d rounded-2xl"
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            WebkitTransform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transformStyle: 'preserve-3d',
            WebkitTransformStyle: 'preserve-3d',
          }}
        >
          {/* 1. FRONT SIDE (Default state - !isFlipped: Burmese Active Recall) */}
          <div
            className={`absolute inset-0 w-full h-full min-h-[420px] backface-hidden rounded-2xl p-6 flex flex-col justify-between items-center bg-gradient-to-br from-[#2c0043] via-[#4b006e] to-[#68278a] text-white border-2 border-[#F2D705]/40 shadow-xl ${
              isFlipped ? 'pointer-events-none' : 'pointer-events-auto'
            }`}
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(0deg)',
              WebkitTransform: 'rotateY(0deg)',
            }}
          >
            {/* Top row: Category tag at top-left, word index badge at top-right */}
            <div className="w-full flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 border border-[#F2D705]/40">
                <span className="w-2 h-2 rounded-full bg-[#F2D705] animate-pulse" />
                <span lang="my" className="font-padauk text-[12px] text-[#F2D705] font-semibold">
                  {currentNoun.categoryNameBurmese}
                </span>
              </div>
              <span className="font-prompt text-[11px] tracking-wider uppercase text-[#F2D705] font-bold bg-black/35 px-3 py-1 rounded-full border border-[#F2D705]/30">
                THAI NOUN #{String(currentNoun.id).padStart(3, '0')}
              </span>
            </div>

            {/* Center: ONLY Myanmar meaning in prominent, large, well-spaced Burmese typography */}
            <div className="flex-1 flex flex-col items-center justify-center text-center my-auto w-full py-6">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-amber-300 leading-snug px-4 font-padauk drop-shadow-md"
                lang="my"
              >
                {currentNoun.burmeseMeaning}
              </h2>
            </div>

            {/* Bottom Hint */}
            <div className="w-full flex items-center justify-center pt-3 border-t border-white/10 z-10">
              <span className="text-gray-400 text-sm flex items-center gap-1 font-padauk">
                🔄 ကတ်ကိုနှိပ်၍ ထိုင်းစကားလုံး ကြည့်ပါ
              </span>
            </div>
          </div>

          {/* 2. BACK SIDE (Revealed state - isFlipped: Thai Vocabulary, Book Phonetics, Audio & Tone) */}
          <div
            className={`absolute inset-0 w-full h-full min-h-[420px] backface-hidden rounded-2xl p-6 flex flex-col justify-between items-center bg-gradient-to-br from-[#1d002e] via-[#2d0046] to-[#4c006f] text-white border-2 border-[#F2D705] shadow-2xl ${
              !isFlipped ? 'pointer-events-none' : 'pointer-events-auto'
            }`}
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              WebkitTransform: 'rotateY(180deg)',
            }}
          >
            {/* Top row */}
            <div className="w-full flex items-center justify-between z-10 border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 border border-[#F2D705]/40">
                <span className="w-2 h-2 rounded-full bg-[#F2D705]" />
                <span lang="my" className="font-padauk text-[12px] text-[#F2D705] font-semibold">
                  {currentNoun.categoryNameBurmese}
                </span>
              </div>
              <span className="font-mono text-[11px] bg-[#f6d9ff] text-[#2c0043] border border-[#2c0043]/20 px-2.5 py-0.5 rounded-full font-bold">
                #{String(currentNoun.id).padStart(3, '0')}
              </span>
            </div>

            {/* Center: Extra-large Thai, Phonetic reading, Tone badge & Audio Button */}
            <div className="flex-1 flex flex-col items-center justify-center text-center my-auto w-full py-4">
              <h2
                className="text-4xl sm:text-5xl font-bold text-white mb-3 font-prompt tracking-wide drop-shadow-md"
                lang="th"
              >
                {currentNoun.thai}
              </h2>

              <div className="bg-purple-950/60 px-4 py-2 rounded-full border border-purple-400/30 text-base font-mono text-purple-200 mb-4 inline-flex items-center gap-2 shadow-inner">
                <span>{currentNoun.phonetic || currentNoun.phonetics}</span>{' '}
                <span lang="my" className="font-padauk text-purple-200">
                  ({currentNoun.myanmarReading || currentNoun.burmesePhonetic})
                </span>
              </div>

              {/* Tone Badge */}
              <div className="px-3.5 py-1 rounded-full bg-black/40 border border-purple-400/30 text-xs font-mono text-purple-200 mb-4">
                {currentNoun.tone}
              </div>

              {/* Audio Pronounce Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio(currentNoun.thai);
                }}
                aria-label="Listen to Thai pronunciation"
                className="p-3 bg-purple-600 hover:bg-purple-500 active:scale-95 rounded-full text-white shadow-lg transition flex items-center gap-2 cursor-pointer font-padauk font-semibold border border-purple-400/30"
              >
                <span>🔊 အသံနားထောင်မည်</span>
              </button>

              {/* Compact example context */}
              {currentNoun.exampleThai && (
                <div className="mt-3 px-3.5 py-1.5 rounded-xl bg-black/30 border border-white/10 text-center max-w-xs">
                  <p lang="th" className="text-xs text-amber-200 font-prompt font-medium">
                    {currentNoun.exampleThai}
                  </p>
                  <p lang="my" className="text-[11px] text-gray-300 font-padauk mt-0.5">
                    {currentNoun.exampleBurmese}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Row */}
            <div className="w-full flex items-center justify-between pt-2 border-t border-white/10 z-10 text-xs">
              <span className="font-padauk text-gray-400">🔄 ပြန်လှည့်ရန် နှိပ်ပါ</span>
              <span className="font-padauk text-amber-300 font-medium">
                {currentNoun.burmeseMeaning}
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
          <span className="font-padauk text-[14px] font-bold">
            {isFlipped ? 'ကတ်ပြန်လှန်မည် (Flip Back)' : 'ကတ်လှန်မည် (Flip)'}
          </span>
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
            psychology
          </span>
          <div className="flex flex-col">
            <span className="font-padauk text-[13px] text-[#2c0043] font-bold">Active Recall လေ့ကျင့်နည်း</span>
            <span className="font-padauk text-[11px] text-[#4d4450]">
              မြန်မာစကားလုံးကို ကြည့်ပြီး ထိုင်းစကားလုံးကို အရင်စဉ်းစားပါ (Space / Enter ဖြင့် ကတ်လှန်နိုင်ပါသည်)
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
