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
      {/* Search and Filter */}
      <div className="flex flex-col gap-2">
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-[#7f7381] text-[20px]">
            search
          </span>
          <input
            type="text"
            placeholder="ထိုင်းစာ၊ အသံထွက် သို့မဟုတ် အဓိပ္ပာယ် ရှာဖွေပါ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 bg-white rounded-xl border border-[#EBE5DA] text-xs font-padauk placeholder:text-[#7f7381] focus:outline-none focus:ring-2 focus:ring-[#4b006e]/30 shadow-2xs"
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

        {/* Category horizontal pills */}
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-full text-xs font-padauk whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#2c0043] text-[#F2D705] font-bold shadow-xs'
                : 'bg-[#f4ece8] text-[#4d4450] hover:bg-[#eee7e3]'
            }`}
          >
            အားလုံး ({THAI_NOUNS.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-full text-xs font-padauk whitespace-nowrap transition-all flex items-center gap-1 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#2c0043] text-white font-bold shadow-xs'
                  : 'bg-[#f4ece8] text-[#4d4450] hover:bg-[#eee7e3]'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: cat.tagColor }}
              />
              <span>{cat.burmese}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs text-[#7f7381] font-padauk px-1">
        <span>တွေ့ရှိသည့် ဝေါဟာရ: <strong className="text-[#2c0043] font-mono">{filteredNouns.length}</strong> လုံး</span>
        <span>ကျက်မှတ်ပြီး: <strong className="text-[#16A34A] font-mono">{masteredWords.size}</strong></span>
      </div>

      {/* Word List */}
      <div className="flex flex-col gap-2">
        {filteredNouns.map((noun) => {
          const isMastered = masteredWords.has(noun.id);
          const isPlaying = playingId === noun.id;

          return (
            <div
              key={noun.id}
              className="bg-white rounded-xl p-3 border border-[#EBE5DA] shadow-xs flex items-center justify-between hover:border-[#4b006e]/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <button
                  id={`vocab-audio-btn-${noun.id}`}
                  onClick={() => handlePlaySound(noun)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 active:scale-90 transition-all cursor-pointer ${
                    isPlaying
                      ? 'bg-[#F2D705] text-[#1A0028] animate-pulse'
                      : 'bg-[#f4ece8] text-[#4b006e] hover:bg-[#ebd0f5]'
                  }`}
                  title="Play pronunciation"
                >
                  <span className="material-symbols-outlined text-[19px]">
                    {isPlaying ? 'graphic_eq' : 'volume_up'}
                  </span>
                </button>

                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="font-prompt font-bold text-[17px] text-[#1e1b19]">
                      {noun.thai}
                    </span>
                    <span className="font-mono text-xs text-[#4d4450]">
                      [{noun.phonetics}]
                    </span>
                    <span className="font-padauk text-xs text-[#7f7381]">
                      ({noun.burmesePhonetic})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-padauk text-[13px] font-bold text-[#2c0043]">
                      {noun.burmeseMeaning}
                    </span>
                    <span className="font-mono text-[10px] bg-[#f4ece8] text-[#7f7381] px-1.5 py-0.2 rounded">
                      {noun.tone}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Learn in flashcard & Mastered toggle */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => onLearnWord(noun)}
                  className="p-1.5 rounded-lg text-[#4b006e] hover:bg-[#f6d9ff] transition-colors cursor-pointer"
                  title="ကတ်ပြားဖြင့် လေ့လာမည်"
                >
                  <span className="material-symbols-outlined text-[20px]">style</span>
                </button>

                <button
                  onClick={() => onToggleMastered(noun.id)}
                  className="p-1.5 rounded-lg text-[#7f7381] hover:text-[#16A34A] transition-colors cursor-pointer"
                  title={isMastered ? 'မှတ်မိပြီး' : 'မှတ်မိကြောင်း သတ်မှတ်မည်'}
                >
                  <span
                    className={`material-symbols-outlined text-[22px] ${
                      isMastered ? 'text-[#16A34A]' : 'text-[#d0c2d1]'
                    }`}
                    style={isMastered ? { fontVariationSettings: "'FILL' 1" } : {}}
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
