import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { DashboardView } from './components/DashboardView';
import { FlashcardView } from './components/FlashcardView';
import { QuizView } from './components/QuizView';
import { VocabView } from './components/VocabView';
import { CategoryId, TabType, ThaiNoun } from './types';
import { THAI_NOUNS } from './data/nouns';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('vocab');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | undefined>(undefined);
  const [streak] = useState(12); // From screenshot badge 🔥 12

  // Initialize with 42 mastered words to match the 42% donut from Screenshot 1
  const [masteredWords, setMasteredWords] = useState<Set<number>>(() => {
    const initial = new Set<number>();
    for (let i = 1; i <= 42; i++) {
      initial.add(i);
    }
    return initial;
  });

  const toggleMastered = (wordId: number) => {
    setMasteredWords((prev) => {
      const next = new Set(prev);
      if (next.has(wordId)) {
        next.delete(wordId);
      } else {
        next.add(wordId);
      }
      return next;
    });
  };

  const handleNavigate = (tab: TabType, category?: CategoryId) => {
    if (category) {
      setSelectedCategory(category);
    }
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLearnWord = (_noun: ThaiNoun) => {
    setCurrentTab('flashcards');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keep window scrolled to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentTab]);

  return (
    <div className="min-h-screen bg-[#120718] flex justify-center items-start">
      {/* Mobile Device Viewport Container */}
      <div className="w-full max-w-[420px] min-h-screen bg-[#fff8f5] flex flex-col shadow-2xl relative overflow-x-hidden border-x border-[#2c0043]/20">
        {/* Mobile iOS/Android Native Status Bar */}
        <div className="sticky top-0 z-40 bg-[#fff8f5]/95 backdrop-blur-md px-5 pt-3 pb-2 flex justify-between items-center text-[#1e1b19] text-xs font-semibold select-none">
          <span className="font-mono text-sm tracking-tight font-bold text-[#1e1b19]">9:41</span>
          <div className="flex items-center gap-1.5 text-[#1e1b19]">
            <span className="material-symbols-outlined text-[16px]">signal_cellular_alt</span>
            <span className="material-symbols-outlined text-[16px]">wifi</span>
            <span className="material-symbols-outlined text-[18px] rotate-90">battery_full</span>
          </div>
        </div>

        {/* Dynamic App Header */}
        <Header currentTab={currentTab} streak={streak} />

        {/* View Switcher */}
        <main className="flex-1 flex flex-col">
          {currentTab === 'home' && (
            <DashboardView
              onNavigate={handleNavigate}
              masteredCount={masteredWords.size}
              totalCount={THAI_NOUNS.length}
            />
          )}

          {currentTab === 'flashcards' && (
            <FlashcardView
              initialCategoryId={selectedCategory}
              masteredWords={masteredWords}
              onToggleMastered={toggleMastered}
            />
          )}

          {currentTab === 'quiz' && <QuizView />}

          {currentTab === 'vocab' && (
            <VocabView
              onLearnWord={handleLearnWord}
              masteredWords={masteredWords}
              onToggleMastered={toggleMastered}
            />
          )}
        </main>

        {/* Mobile Persistent Bottom Navigation Bar */}
        <BottomNav currentTab={currentTab} onSelectTab={(tab) => handleNavigate(tab)} />
      </div>
    </div>
  );
}

