import React, { useState, useMemo, useEffect, useRef } from 'react';
import { CATEGORIES } from '../data/categories';
import { THAI_NOUNS } from '../data/nouns';
import { VOCABULARY_DATA } from '../data/vocabulary';
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
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Filter items based on selected category deck
  const filteredNouns = useMemo(() => {
    if (selectedCat === 'all') return THAI_NOUNS;
    return THAI_NOUNS.filter((item) => item.category === selectedCat);
  }, [selectedCat]);

  // Exact counts per category for deck selection
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const n of THAI_NOUNS) {
      counts[n.category] = (counts[n.category] || 0) + 1;
    }
    return counts;
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Keep index in bound when category changes
  const safeIndex = Math.min(currentIndex, Math.max(0, filteredNouns.length - 1));
  const currentNoun: ThaiNoun = filteredNouns[safeIndex] || THAI_NOUNS[0];

  const currentCategoryInfo = CATEGORIES.find((c) => c.id === selectedCat);
  const currentCatTitle = currentCategoryInfo
    ? `${currentCategoryInfo.burmese} (${toBurmeseNumber(filteredNouns.length)} လုံး)`
    : `ဝေါဟာရ အားလုံး (${toBurmeseNumber(VOCABULARY_DATA.length)} လုံး)`;

  const isCurrentMastered = masteredWords.has(currentNoun.id);
  const progressPercent =
    filteredNouns.length > 0
      ? Math.round(((safeIndex + 1) / filteredNouns.length) * 100)
      : 0;

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

  const playAudio = (text: string) => {
    setIsPlayingAudio(true);
    playThaiSpeech(
      text,
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false)
    );
  };

  // Close category dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCatDropdown(false);
      }
    };
    if (showCatDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCatDropdown]);

  // 1. KEYBOARD SHORTCUTS & NAVIGATION (WCAG 2.1.1)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid intercepting if focus is in an input, textarea, or contentEditable
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement).isContentEditable
      ) {
        return;
      }

      // 3. Close category dropdown on Escape key
      if (e.key === 'Escape') {
        if (showCatDropdown) {
          e.preventDefault();
          setShowCatDropdown(false);
          return;
        }
      }

      // Spacebar or Enter: Toggle card flip (avoid double-trigger if focused on an interactive button)
      if (e.key === ' ' || e.key === 'Enter') {
        if (e.target instanceof HTMLButtonElement) {
          return; // Let the button natively handle click
        }
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'a' || e.key === 'A' || e.key === 's' || e.key === 'S') {
        e.preventDefault();
        if (currentNoun && currentNoun.thai) {
          playAudio(currentNoun.thai);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredNouns.length, currentNoun, showCatDropdown]);

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
      {/* 2. ACCESSIBILITY (a11y) & SCREEN READERS: Live Announcement Region */}
      <div className="sr-only" aria-live="polite">
        {isFlipped
          ? `ကတ်ကို လှန်ပြီးပါပြီ။ ထိုင်းစာလုံးမှာ ${currentNoun.thai} ဖြစ်ပြီး အသံထွက်မှာ ${currentNoun.phonetic || currentNoun.phonetics} ဖြစ်ပါသည်။`
          : `မြန်မာအဓိပ္ပာယ်မှာ ${currentNoun.burmeseMeaning} ဖြစ်ပါသည်။ ထိုင်းစကားလုံးကို ကြည့်ရန် ကတ်ကို လှန်ပါ။`}
      </div>

      {/* Category Selector & Quick Stats Bar */}
      <div className="flex items-center justify-between gap-2">
        {/* 3. ACCESSIBLE CATEGORY SELECTOR */}
        <div className="relative flex-1" ref={dropdownRef}>
          <button
            id="flashcard-category-btn"
            onClick={() => setShowCatDropdown(!showCatDropdown)}
            aria-haspopup="listbox"
            aria-expanded={showCatDropdown}
            aria-label="ဝေါဟာရ ကဏ္ဍ ရွေးချယ်ရန်"
            className="w-full min-h-[44px] flex items-center justify-between gap-1.5 bg-[#F4F0E8] hover:bg-[#eee7e3] px-3 py-2 rounded-xl border border-[#EBE5DA] text-left transition-colors cursor-pointer shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="material-symbols-outlined text-[#4b006e] text-[18px] shrink-0" aria-hidden="true">
                {currentCategoryInfo ? currentCategoryInfo.icon : 'folder_open'}
              </span>
              <span className="font-padauk text-[12px] text-[#1e1b19] font-semibold truncate" lang="my">
                {currentCatTitle}
              </span>
            </div>
            <span
              className={`material-symbols-outlined text-[#7f7381] text-[18px] transition-transform ${
                showCatDropdown ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            >
              expand_more
            </span>
          </button>

          {/* Focused Deck Category Dropdown Menu */}
          {showCatDropdown && (
            <div
              role="listbox"
              aria-label="ဝေါဟာရ ကဏ္ဍများ"
              className="absolute top-full left-0 mt-1.5 w-full max-h-80 overflow-y-auto bg-white rounded-xl shadow-2xl z-50 p-1.5 flex flex-col gap-1 border border-[#EBE5DA] divide-y divide-gray-100"
            >
              <button
                role="option"
                aria-selected={selectedCat === 'all'}
                onClick={() => {
                  setSelectedCat('all');
                  setCurrentIndex(0);
                  setIsFlipped(false);
                  setShowCatDropdown(false);
                }}
                className={`min-h-[44px] flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-xs font-padauk transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 ${
                  selectedCat === 'all'
                    ? 'bg-[#f6d9ff] text-[#2c0043] font-bold'
                    : 'hover:bg-[#F4F0E8] text-[#1e1b19]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4b006e] shrink-0" aria-hidden="true" />
                  <span lang="my">ဝေါဟာရ အားလုံး (All Decks)</span>
                </div>
                <span className="font-padauk text-[11px] text-[#4b006e] bg-[#4b006e]/10 px-2 py-0.5 rounded-md font-bold shrink-0" lang="my">
                  {toBurmeseNumber(VOCABULARY_DATA.length)} လုံး လေ့ကျင့်မည်
                </span>
              </button>

              <div className="pt-1 flex flex-col gap-1">
                {CATEGORIES.map((cat) => {
                  const count = categoryCounts[cat.id] || cat.wordCount;
                  const isSelected = selectedCat === cat.id;
                  return (
                    <button
                      key={cat.id}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        setSelectedCat(cat.id);
                        setCurrentIndex(0);
                        setIsFlipped(false);
                        setShowCatDropdown(false);
                      }}
                      className={`min-h-[44px] flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs font-padauk transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 ${
                        isSelected
                          ? 'bg-[#f6d9ff] text-[#2c0043] font-bold'
                          : 'hover:bg-[#F4F0E8] text-[#1e1b19]'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: cat.tagColor }}
                          aria-hidden="true"
                        />
                        <span lang="my" className="truncate">{cat.burmese}</span>
                      </div>
                      <span className="font-padauk text-[11px] text-[#4b006e] bg-purple-50 px-2 py-0.5 rounded-md font-medium shrink-0" lang="my">
                        {toBurmeseNumber(count)} လုံး လေ့ကျင့်မည်
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Counter and Pronounce Speaker */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex flex-col items-end">
            <span className="font-padauk text-[13px] text-[#4b006e] font-bold leading-tight" lang="my">
              {toBurmeseNumber(safeIndex + 1)} / {toBurmeseNumber(filteredNouns.length)} လုံး
            </span>
            <span className="font-padauk text-[10px] text-[#7f7381] leading-tight" lang="my">
              (စုစုပေါင်း {toBurmeseNumber(VOCABULARY_DATA.length)} လုံး)
            </span>
          </div>
          <button
            id="flashcard-quick-audio-btn"
            onClick={() => playAudio(currentNoun.thai)}
            className={`w-11 h-11 rounded-full bg-[#F4F0E8] border border-[#EBE5DA] flex items-center justify-center text-[#4b006e] hover:bg-[#eee7e3] active:scale-90 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 ${
              isPlayingAudio ? 'text-[#F2D705] bg-[#2c0043]' : ''
            }`}
            title="အသံထွက် နားထောင်ရန်"
            aria-label="ထိုင်းစကားလုံး အသံထွက် နားထောင်မည်"
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {isPlayingAudio ? 'graphic_eq' : 'volume_up'}
            </span>
          </button>
        </div>
      </div>

      {/* Mini Progress Line */}
      <div
        className="w-full bg-[#F4F0E8] h-2 rounded-full overflow-hidden border border-[#EBE5DA]"
        role="progressbar"
        aria-valuenow={progressPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="လေ့လာပြီးစီးမှု ရာခိုင်နှုန်း"
      >
        <div
          className="h-full bg-gradient-to-r from-[#4b006e] to-[#F2D705] rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 2 & 4. Touch 3D Flashcard Container with strict min-h-[420px] and CLS stability */}
      <div
        id="flashcard-deck-card"
        role="button"
        tabIndex={0}
        aria-pressed={isFlipped}
        aria-label={isFlipped ? 'ကတ်ကို မူလအတိုင်း ပြန်လှန်မည်' : 'ကတ်ကိုလှန်၍ ထိုင်းစာလုံးနှင့် အသံထွက် ကြည့်မည်'}
        onClick={() => setIsFlipped(!isFlipped)}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            setIsFlipped(!isFlipped);
          }
        }}
        className="w-full min-h-[420px] perspective-1000 cursor-pointer select-none outline-none rounded-2xl relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
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
                <span className="w-2 h-2 rounded-full bg-[#F2D705] animate-pulse" aria-hidden="true" />
                <span lang="my" className="font-padauk text-[12px] text-[#F2D705] font-semibold">
                  {currentNoun.categoryNameBurmese}
                </span>
              </div>
              <span className="font-prompt text-[11px] tracking-wider uppercase text-[#F2D705] font-bold bg-black/35 px-3 py-1 rounded-full border border-[#F2D705]/30">
                THAI NOUN #{String(currentNoun.id).padStart(3, '0')}
              </span>
            </div>

            {/* Center: Prominent golden-yellow Burmese typography */}
            <div className="flex-1 flex flex-col items-center justify-center text-center my-auto w-full py-6">
              <h2
                className="text-amber-300 font-bold text-3xl sm:text-4xl md:text-5xl leading-relaxed text-center px-4 font-padauk drop-shadow-md"
                lang="my"
              >
                {currentNoun.burmeseMeaning}
              </h2>
            </div>

            {/* Bottom Hint */}
            <div className="w-full flex items-center justify-center pt-3 border-t border-white/10 z-10">
              <span className="text-gray-400 text-sm flex items-center gap-1 font-padauk" lang="my">
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
                <span className="w-2 h-2 rounded-full bg-[#F2D705]" aria-hidden="true" />
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
                <span lang="en">{currentNoun.phonetic || currentNoun.phonetics}</span>{' '}
                <span lang="my" className="font-padauk text-purple-200">
                  ({currentNoun.myanmarReading || currentNoun.burmesePhonetic})
                </span>
              </div>

              {/* Tone Badge */}
              <div className="px-3.5 py-1 rounded-full bg-black/40 border border-purple-400/30 text-xs font-mono text-purple-200 mb-4">
                {currentNoun.tone}
              </div>

              {/* Large, Accessible Audio Pronounce Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio(currentNoun.thai);
                }}
                aria-label="ထိုင်းစကားလုံး အသံထွက် နားထောင်မည်"
                className="min-h-[44px] px-5 py-3 bg-purple-600 hover:bg-purple-500 active:scale-95 rounded-full text-white shadow-lg transition flex items-center gap-2 cursor-pointer font-padauk font-semibold border border-purple-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">volume_up</span>
                <span lang="my">ထိုင်းအသံ နားထောင်မည်</span>
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
              <span className="font-padauk text-gray-400" lang="my">🔄 ပြန်လှည့်ရန် နှိပ်ပါ</span>
              <span className="font-padauk text-amber-300 font-medium" lang="my">
                {currentNoun.burmeseMeaning}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 1. KEYBOARD SHORTCUTS BADGE BAR (Desktop) */}
      <div
        className="hidden sm:flex items-center justify-center gap-3 text-xs text-gray-500 dark:text-gray-400 mt-1"
        aria-hidden="true"
      >
        <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-800 rounded font-mono text-gray-700 dark:text-gray-300">Space</span>
        <span lang="my">လှန်မည်</span>
        <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-800 rounded font-mono text-gray-700 dark:text-gray-300">← / →</span>
        <span lang="my">ရှေ့နောက်</span>
        <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-800 rounded font-mono text-gray-700 dark:text-gray-300">A</span>
        <span lang="my">အသံဖွင့်</span>
      </div>

      {/* Mobile Flip & Navigation Controls */}
      <div className="flex items-center justify-between gap-2 pt-1">
        <button
          id="flashcard-prev-btn"
          onClick={handlePrev}
          className="w-12 h-12 rounded-xl bg-[#2c0043] hover:bg-[#3d005e] text-white flex items-center justify-center shadow-sm active:scale-95 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
          title="Previous card"
          aria-label="ယခင် စကားလုံးကတ်သို့ ပြန်သွားမည်"
        >
          <span className="material-symbols-outlined text-[#F2D705] text-[22px]" aria-hidden="true">arrow_back</span>
        </button>

        <button
          id="flashcard-flip-btn"
          role="button"
          aria-pressed={isFlipped}
          aria-label={isFlipped ? 'ကတ်ကို မူလအတိုင်း ပြန်လှန်မည်' : 'ကတ်ကိုလှန်၍ ထိုင်းစာလုံးနှင့် အသံထွက် ကြည့်မည်'}
          onClick={() => setIsFlipped(!isFlipped)}
          className="flex-1 h-12 rounded-xl bg-[#F2D705] hover:bg-[#e0c700] text-[#2c0043] font-bold flex items-center justify-center gap-2 shadow-md active:scale-95 border border-[#e0c700] ring-2 ring-[#F2D705]/40 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
        >
          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">flip</span>
          <span className="font-padauk text-[14px] font-bold" lang="my">
            {isFlipped ? 'ကတ်ပြန်လှန်မည် (Flip Back)' : 'ကတ်လှန်မည် (Flip)'}
          </span>
        </button>

        <button
          id="flashcard-next-btn"
          onClick={handleNext}
          className="w-12 h-12 rounded-xl bg-[#2c0043] hover:bg-[#3d005e] text-white flex items-center justify-center shadow-sm active:scale-95 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
          title="Next card"
          aria-label="နောက် စကားလုံးကတ်သို့ သွားမည်"
        >
          <span className="material-symbols-outlined text-[#F2D705] text-[22px]" aria-hidden="true">
            arrow_forward
          </span>
        </button>
      </div>

      {/* Review & Mastered Action Row */}
      <div className="grid grid-cols-2 gap-2">
        <button
          id="flashcard-review-again-btn"
          onClick={handleMarkReview}
          className={`min-h-[44px] flex items-center justify-center gap-2 py-2 px-3 rounded-xl border-2 transition-all cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 ${
            isReviewing.has(currentNoun.id)
              ? 'bg-[#ffe320]/20 border-[#D97706] text-[#D97706]'
              : 'bg-[#F4F0E8] border-[#2c0043]/20 text-[#2c0043]'
          }`}
          aria-pressed={isReviewing.has(currentNoun.id)}
          aria-label="ဤစကားလုံးကို ထပ်မံလေ့ကျင့်ရန် မှတ်သားမည်"
        >
          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">restart_alt</span>
          <div className="flex flex-col text-left">
            <span className="font-padauk text-[13px] font-bold leading-tight" lang="my">ထပ်မံလေ့ကျင့်</span>
            <span className="font-prompt text-[10px] text-[#7f7381]">Review Again</span>
          </div>
        </button>

        <button
          id="flashcard-mastered-btn"
          onClick={handleToggleMastery}
          className={`min-h-[44px] flex items-center justify-center gap-2 py-2 px-3 rounded-xl border-2 shadow-sm transition-all cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 ${
            isCurrentMastered
              ? 'bg-gradient-to-r from-[#2c0043] via-[#3d005e] to-[#4b006e] text-white border-[#FFDE34] ring-2 ring-[#FFDE34]/40 shadow-md'
              : 'bg-[#F4F0E8] border-[#2c0043]/20 text-[#2c0043] hover:bg-[#eee7e3]'
          }`}
          aria-pressed={isCurrentMastered}
          aria-label={isCurrentMastered ? 'ဤစကားလုံးကို မှတ်မိပြီးအဖြစ် သတ်မှတ်ပြီးပါပြီ' : 'ဤစကားလုံးကို မှတ်မိပြီးအဖြစ် သတ်မှတ်မည်'}
        >
          <span
            className={`material-symbols-outlined text-[20px] ${
              isCurrentMastered ? 'text-[#FFDE34]' : 'text-[#7f7381]'
            }`}
            style={{ fontVariationSettings: "'FILL' 1" }}
            aria-hidden="true"
          >
            check_circle
          </span>
          <div className="flex flex-col text-left">
            <span className="font-padauk text-[13px] font-bold leading-tight" lang="my">မှတ်မိပြီ</span>
            <span
              className={`font-prompt text-[10px] font-semibold ${
                isCurrentMastered ? 'text-[#FFDE34]' : 'text-[#7f7381]'
              }`}
            >
              Mastered
            </span>
          </div>
        </button>
      </div>

      {/* Quick Audio & Study Helper Card */}
      <div className="bg-white rounded-xl p-3 border border-[#EBE5DA] flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[#F2D705] text-[22px]" aria-hidden="true">
            psychology
          </span>
          <div className="flex flex-col">
            <span className="font-padauk text-[13px] text-[#2c0043] font-bold" lang="my">Active Recall လေ့ကျင့်နည်း</span>
            <span className="font-padauk text-[11px] text-[#4d4450]" lang="my">
              မြန်မာစကားလုံးကို ကြည့်ပြီး ထိုင်းစကားလုံးကို အရင်စဉ်းစားပါ (Space / Enter ဖြင့် ကတ်လှန်နိုင်ပါသည်)
            </span>
          </div>
        </div>
        <button
          id="flashcard-shuffle-btn"
          onClick={handleShuffle}
          className="w-11 h-11 rounded-lg bg-[#F4F0E8] text-[#2c0043] hover:bg-[#eee7e3] border border-[#EBE5DA] flex items-center justify-center transition-transform active:scale-90 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
          title="ရောမွှေမည် (Shuffle)"
          aria-label="ကတ်ပြားများကို ရောမွှေမည် (Shuffle)"
        >
          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">shuffle</span>
        </button>
      </div>
    </div>
  );
};
