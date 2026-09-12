import React, { useState } from 'react';
import { CategoryId, TabType } from '../types';
import { playThaiSpeech } from '../utils/audio';

interface DashboardViewProps {
  onNavigate: (tab: TabType, category?: CategoryId) => void;
  masteredCount: number;
  totalCount: number;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onNavigate,
  masteredCount,
  totalCount,
}) => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [completedDrills, setCompletedDrills] = useState<{ [key: string]: boolean }>({
    '1': true,
    '2': true,
  });

  const percent = Math.round((masteredCount / totalCount) * 100);
  const remainingCount = totalCount - masteredCount;

  // 5 Daily Drill items from Image 1
  const dailyDrills = [
    {
      id: '1',
      thai: 'ไก่',
      phonetics: '[kài]',
      burmesePhonetic: 'ကိုင်',
      burmeseMeaning: 'ကြက် / ကြက်သား',
    },
    {
      id: '2',
      thai: 'กุ้ง',
      phonetics: '[kûng]',
      burmesePhonetic: 'ကုန်',
      burmeseMeaning: 'ပုစွန်',
    },
    {
      id: '3',
      thai: 'ข้าวเหนียว',
      phonetics: '[khâao-nĭao]',
      burmesePhonetic: 'ခေါက်နီယို့',
      burmeseMeaning: 'ကောက်ညှင်း',
    },
    {
      id: '4',
      thai: 'พริก',
      phonetics: '[phrík]',
      burmesePhonetic: 'ဖရစ်',
      burmeseMeaning: 'ငရုတ်သီး',
    },
    {
      id: '5',
      thai: 'ตลาด',
      phonetics: '[thà-làat]',
      burmesePhonetic: 'သလတ်',
      burmeseMeaning: 'ဈေး',
    },
  ];

  const handlePlayAudio = (id: string, thaiText: string) => {
    setPlayingId(id);
    playThaiSpeech(
      thaiText,
      () => setPlayingId(id),
      () => setPlayingId(null)
    );
  };

  const toggleDrillComplete = (id: string) => {
    setCompletedDrills((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex-1 px-4 pt-3 pb-24 flex flex-col gap-4">
      {/* Royal Purple Hero Banner Card */}
      <section className="relative w-full rounded-2xl bg-gradient-to-br from-[#2c0043] via-[#4b006e] to-[#431b57] text-white p-4 shadow-md overflow-hidden">
        {/* Ambient radial glows */}
        <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-[#e7b3ff]/20 blur-2xl pointer-events-none" />
        <div className="absolute left-1/4 -bottom-10 w-48 h-48 rounded-full bg-[#F2D705]/15 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-3">
          {/* Burmese-Thai Bilingual Pill */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md self-start border border-white/15 text-[11px]">
            <span className="material-symbols-outlined text-[13px] text-[#F2D705]" style={{ fontVariationSettings: "'FILL' 1" }}>
              auto_awesome
            </span>
            <span className="text-white/90 font-medium">Burmese-Thai Bilingual</span>
          </div>

          {/* Title & Donut Progress row */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1">
              <h1 className="font-padauk font-bold text-[20px] text-white leading-snug">
                ထိုင်းစကားပြော အခြေခံစာလုံး ၁၀၀
              </h1>
              <p className="text-[12px] text-[#e7b3ff] mt-0.5 font-medium font-padauk">
                နေ့စဉ် ပုံမှန်လေ့ကျင့်မှု မှတ်တမ်း
              </p>
            </div>

            {/* Circular Donut (42%) */}
            <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  className="stroke-white/20"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="40"
                  strokeWidth="8"
                />
                <circle
                  className="stroke-[#F2D705] transition-all duration-700 ease-out"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="40"
                  strokeWidth="8"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (251.2 * percent) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="font-mono text-[16px] font-bold text-white leading-none">
                  {percent}%
                </span>
                <span className="font-padauk text-[9px] text-[#f6d9ff] font-bold leading-tight mt-0.5">
                  ပြီးစီး
                </span>
              </div>
            </div>
          </div>

          {/* Progress summary stats bar */}
          <div className="flex items-center justify-between bg-black/25 rounded-xl px-3 py-1.5 border border-white/10 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F2D705]" />
              <span className="font-padauk text-white text-[12px]">
                ကျက်မှတ်ပြီး: <strong className="font-mono text-[#F2D705]">{masteredCount}</strong>/{totalCount}
              </span>
            </div>
            <div className="font-padauk text-[#e7b3ff] text-[11px]">
              ကျန်ရှိ <span className="font-mono text-white font-bold">{remainingCount}</span> လုံး
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-0.5">
            <button
              id="hero-start-flashcards-btn"
              onClick={() => onNavigate('flashcards')}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#F2D705] hover:bg-[#ffe320] text-[#1A0028] font-bold text-xs shadow-sm transition-transform active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[17px]">style</span>
              <span className="font-padauk text-[13px] font-bold">Flashcards စမည်</span>
            </button>
            <button
              id="hero-start-quiz-btn"
              onClick={() => onNavigate('quiz')}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs border border-white/20 transition-transform active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[17px] text-[#F2D705]">quiz</span>
              <span className="font-padauk text-[13px] font-bold">Quiz ဖြေဆိုမည်</span>
            </button>
          </div>
        </div>
      </section>

      {/* Daily Pronunciation Drill Cards (5 items) */}
      <section className="flex flex-col gap-2.5 pt-1">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-padauk font-bold text-[16px] text-[#2c0043] leading-tight">
              ယနေ့အတွက် အသံထွက် ၅ လုံး
            </h2>
            <p className="text-[11px] text-[#4d4450] font-prompt">Daily Pronunciation Drill</p>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#4b006e]/10 text-[#4b006e] font-mono text-[10px] font-bold">
            5 Items
          </span>
        </div>

        <div className="bg-white rounded-2xl p-2.5 border border-[#EBE5DA] shadow-xs flex flex-col gap-2">
          {dailyDrills.map((drill) => {
            const isPlaying = playingId === drill.id;
            const isCompleted = !!completedDrills[drill.id];

            return (
              <div
                key={drill.id}
                className="p-2.5 rounded-xl bg-[#f4ece8] flex items-center justify-between transition-colors hover:bg-[#eee7e3]"
              >
                <div className="flex items-center gap-3">
                  <button
                    id={`drill-audio-btn-${drill.id}`}
                    onClick={() => handlePlayAudio(drill.id, drill.thai)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-xs active:scale-90 transition-all shrink-0 cursor-pointer ${
                      isPlaying
                        ? 'bg-[#F2D705] text-[#1A0028] animate-pulse'
                        : 'bg-[#4b006e] text-white hover:bg-[#3b0057]'
                    }`}
                    title="Listen pronunciation"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {isPlaying ? 'graphic_eq' : 'volume_up'}
                    </span>
                  </button>

                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-prompt font-bold text-[16px] text-[#1e1b19] leading-tight">
                        {drill.thai}
                      </span>
                      <span className="font-mono text-[12px] text-[#4d4450] font-medium">
                        {drill.phonetics}
                      </span>
                    </div>
                    <span className="font-padauk text-[12px] text-[#2c0043] font-semibold">
                      {drill.burmesePhonetic} • {drill.burmeseMeaning}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => toggleDrillComplete(drill.id)}
                  className="cursor-pointer p-1 text-[#4d4450] hover:text-[#16A34A] transition-colors"
                  title={isCompleted ? 'Completed' : 'Mark as done'}
                >
                  <span
                    className={`material-symbols-outlined text-[20px] transition-transform active:scale-125 ${
                      isCompleted ? 'text-[#16A34A]' : 'text-[#d0c2d1]'
                    }`}
                  >
                    {isCompleted ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Quiz Floating Teaser */}
      <section className="rounded-xl bg-gradient-to-r from-[#4b006e] to-[#2c0043] p-3 text-white flex items-center justify-between shadow-xs">
        <div className="flex flex-col">
          <span className="font-padauk font-bold text-sm leading-tight text-white">
            ဉာဏ်စမ်း ဖြေဆိုအမှတ်စစ်မည်
          </span>
          <span className="font-padauk text-[11px] text-[#e7b3ff] mt-0.5">
            မေးခွန်း ၃၀ အနက်မှ ရမှတ်တိုင်းတာရန်
          </span>
        </div>
        <button
          id="quick-quiz-teaser-btn"
          onClick={() => onNavigate('quiz')}
          className="w-10 h-10 rounded-lg bg-[#F2D705] hover:bg-[#ffe320] text-[#1A0028] flex items-center justify-center shrink-0 shadow-sm active:scale-95 transition-transform cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px]">play_arrow</span>
        </button>
      </section>
    </div>
  );
};
