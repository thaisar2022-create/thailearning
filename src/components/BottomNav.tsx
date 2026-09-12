import { FC } from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const BottomNav: FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] bg-[#fff8f5]/95 backdrop-blur-lg border-t border-[#EBE5DA]/90 px-3 py-1.5 z-50 flex items-center justify-around shadow-[0_-4px_16px_rgba(44,0,67,0.08)]">
      {/* Tab 1: Dashboard */}
      <button
        id="nav-tab-dashboard"
        onClick={() => onSelectTab('home')}
        className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-all ${
          currentTab === 'home'
            ? 'text-[#2c0043] font-bold'
            : 'text-[#4d4450] hover:text-[#2c0043]'
        }`}
      >
        <span
          className="material-symbols-outlined text-[22px]"
          style={currentTab === 'home' ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          space_dashboard
        </span>
        <span className="text-[10px] font-padauk font-semibold tracking-tight">ပင်မ</span>
      </button>

      {/* Tab 2: Vocab */}
      <button
        id="nav-tab-vocab"
        onClick={() => onSelectTab('vocab')}
        className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-all ${
          currentTab === 'vocab'
            ? 'text-[#2c0043] font-bold'
            : 'text-[#4d4450] hover:text-[#2c0043]'
        }`}
      >
        <span
          className="material-symbols-outlined text-[22px]"
          style={currentTab === 'vocab' ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          menu_book
        </span>
        <span className="text-[10px] font-padauk font-semibold tracking-tight">ဝေါဟာရ</span>
      </button>

      {/* Tab 3: Flashcards */}
      <button
        id="nav-tab-flashcards"
        onClick={() => onSelectTab('flashcards')}
        className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-all cursor-pointer ${
          currentTab === 'flashcards'
            ? 'text-[#2c0043] font-bold'
            : 'text-[#4d4450] hover:text-[#2c0043]'
        }`}
      >
        <span
          className="material-symbols-outlined text-[22px]"
          style={currentTab === 'flashcards' ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          style
        </span>
        <span className="text-[10px] font-padauk font-semibold tracking-tight">ကတ်များ</span>
      </button>

      {/* Tab 4: Quiz */}
      <button
        id="nav-tab-quiz"
        onClick={() => onSelectTab('quiz')}
        className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-all ${
          currentTab === 'quiz'
            ? 'text-[#2c0043] font-bold'
            : 'text-[#4d4450] hover:text-[#2c0043]'
        }`}
      >
        <span
          className="material-symbols-outlined text-[22px]"
          style={currentTab === 'quiz' ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          quiz
        </span>
        <span className="text-[10px] font-padauk font-semibold tracking-tight">ဉာဏ်စမ်း</span>
      </button>
    </nav>
  );
};
