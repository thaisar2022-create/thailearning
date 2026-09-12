import { FC } from 'react';
import { TabType } from '../types';

interface HeaderProps {
  currentTab: TabType;
  streak: number;
}

export const Header: FC<HeaderProps> = ({ currentTab, streak }) => {
  const getSubTitle = () => {
    switch (currentTab) {
      case 'flashcards':
        return 'FLASHCARD MODE';
      case 'quiz':
        return 'QUIZ ASSESSMENT MODE';
      case 'vocab':
        return 'VOCABULARY DIRECTORY';
      default:
        return '100 ESSENTIAL NOUNS';
    }
  };

  return (
    <header className="px-4 py-2.5 flex items-center justify-between border-b border-[#EBE5DA]/80 bg-[#fff8f5] z-30 sticky top-0">
      <div className="flex items-center gap-2.5">
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczN01qsKKBoF8MQL1HFzgXZpd8xkRpGvjngMxSlYtrkui_AYVQZEpQa8k8gvH0TrDsD6tbPAQHBOdd9TTdX4UogBgvwQ2VSARghRi1WMUas35ysIOcs=w2400"
          alt="Siam Lexicon Logo"
          referrerPolicy="no-referrer"
          className="h-9 w-9 rounded-xl object-contain shadow-xs border border-[#EBE5DA]"
        />
        <div className="flex flex-col">
          <span className="font-padauk font-bold text-[15px] leading-tight text-[#2c0043]">
            {currentTab === 'flashcards' ? 'ထိုင်းနာမ် ၁၀၀ လုံး' : 'ထိုင်းအခြေခံနာမ် ၁၀၀ လုံး'}
          </span>
          <span className="text-[10px] tracking-wider text-[#4d4450] uppercase font-semibold font-prompt">
            {getSubTitle()}
          </span>
        </div>
      </div>

      {/* Streak & Profile */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f4ece8] border border-[#EBE5DA] text-xs shadow-2xs">
          <span className="text-[#F2D705] text-[16px] leading-none select-none">🔥</span>
          <span className="font-mono text-[12px] font-bold text-[#2c0043]">{streak}</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#2c0043] text-white flex items-center justify-center shadow-xs">
          <span className="material-symbols-outlined text-[18px]">person</span>
        </div>
      </div>
    </header>
  );
};
