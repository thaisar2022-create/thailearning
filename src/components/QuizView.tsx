import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/quiz';
import { playThaiSpeech } from '../utils/audio';

const OPTION_KEYS = ['က', 'ခ', 'ဂ', 'ဃ'] as const;

// Helper to format Burmese numbers
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

export const QuizView: React.FC = () => {
  // Always default to Question 1 (index 0) with fresh empty state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: number]: number }>({});
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [showCelebration, setShowCelebration] = useState(false);

  // Clear any existing localStorage state on mount to ensure fresh start at Question 1
  useEffect(() => {
    try {
      localStorage.removeItem('thai_quiz_state');
    } catch {
      // ignore
    }
  }, []);

  // Live timer simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentQuestionIndex] || QUIZ_QUESTIONS[0];
  const totalQuestions = QUIZ_QUESTIONS.length;

  // Calculate score
  let correctAnswersCount = 0;
  let answeredCount = 0;
  QUIZ_QUESTIONS.forEach((q) => {
    const userSelectedOptionIdx = selectedAnswers[q.id];
    if (userSelectedOptionIdx !== undefined) {
      answeredCount++;
      if (userSelectedOptionIdx === q.correctAnswerIndex) {
        correctAnswersCount++;
      }
    }
  });

  const percentScore = answeredCount > 0 ? Math.round((correctAnswersCount / answeredCount) * 100) : 0;
  const progressPercent = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  const handleSelectOption = (optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowCelebration(true);
    }
  };

  const handleSkipQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePlaySound = (text: string) => {
    setIsPlayingAudio(true);
    playThaiSpeech(
      text,
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false)
    );
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setSecondsElapsed(0);
    setShowCelebration(false);
    try {
      localStorage.removeItem('thai_quiz_state');
    } catch {
      // ignore
    }
  };

  const selectedOptionIdxForCurrent = selectedAnswers[currentQ.id];

  return (
    <div className="flex-1 px-4 pt-3 pb-24 flex flex-col gap-3">
      {/* Quiz Assessment Top Status Bar */}
      <div className="flex items-center justify-between gap-1.5 flex-wrap">
        {/* Live Timer */}
        <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#f4ece8] border border-[#EBE5DA] text-xs font-mono text-[#4d4450]">
          <span className="material-symbols-outlined text-[15px]">schedule</span>
          <span className="font-bold">{formatTimer(secondsElapsed)}</span>
        </div>

        {/* Score Badge */}
        <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#fce01b]/25 border border-[#fce01b] text-[#2c0043] text-xs font-padauk font-bold">
          <span className="text-[14px]">🏆</span>
          <span>
            ရမှတ်: <span className="font-padauk font-bold">{toBurmeseNumber(correctAnswersCount)}/{toBurmeseNumber(answeredCount)}</span>
          </span>
        </div>

        {/* Reset / Restart Quiz Button */}
        <button
          onClick={handleResetQuiz}
          title="အစမှ ပြန်ဖြေမည်"
          aria-label="အစမှ ပြန်ဖြေမည်"
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#f4ece8] hover:bg-[#eee7e3] border border-[#EBE5DA] text-xs font-padauk text-[#4d4450] transition-all cursor-pointer active:scale-95"
        >
          <span className="text-[12px]">🔄</span>
          <span className="font-padauk text-[11px] font-bold text-[#2c0043]">အစမှ ပြန်ဖြေမည်</span>
        </button>
      </div>

      {/* Progress Info Header */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-padauk text-[15px] font-bold text-[#2c0043]">
            မေးခွန်း <span className="font-padauk text-[#4b006e] text-[18px]">{toBurmeseNumber(currentQuestionIndex + 1)}</span> / {toBurmeseNumber(totalQuestions)}
          </span>
          <span className="font-padauk text-[12px] text-[#7f7381] font-semibold">
            {toBurmeseNumber(progressPercent)}% ပြီးစီး
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#f4ece8] h-2 rounded-full overflow-hidden border border-[#EBE5DA]">
          <div
            className="h-full bg-gradient-to-r from-[#2c0043] to-[#4b006e] rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Number Strip (1 to 30) */}
      <div className="bg-white rounded-2xl p-2.5 border border-[#EBE5DA] shadow-2xs flex flex-col gap-2">
        <div className="flex items-center justify-between text-[11px] text-[#4d4450]">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">menu</span>
            <span className="font-padauk font-semibold">မေးခွန်း {toBurmeseNumber(totalQuestions)} စာရင်း</span>
          </div>
          <div className="flex items-center gap-2 font-padauk text-[10px]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#FFDE34]" /> ဖြေပြီး
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#4b006e]" /> လက်ရှိ
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
          {QUIZ_QUESTIONS.map((q, idx) => {
            const isCurrent = idx === currentQuestionIndex;
            const isAnswered = selectedAnswers[q.id] !== undefined;

            let badgeStyle = 'bg-[#f4ece8] text-[#7f7381] hover:bg-[#eee7e3]';
            if (isCurrent) {
              badgeStyle = 'bg-[#2c0043] text-white font-bold ring-2 ring-[#FFDE34] shadow-xs scale-105';
            } else if (isAnswered) {
              badgeStyle = 'bg-[#FFDE34] text-[#2c0043] font-bold shadow-xs hover:bg-[#fae250]';
            }

            return (
              <button
                key={q.id}
                onClick={() => setCurrentQuestionIndex(idx)}
                aria-label={`မေးခွန်း ${idx + 1}`}
                className={`w-7 h-7 shrink-0 rounded-lg flex items-center justify-center font-padauk font-bold text-[13px] transition-all cursor-pointer active:scale-95 ${badgeStyle}`}
              >
                {toBurmeseNumber(q.id)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-2xl p-4 border border-[#EBE5DA] shadow-xs flex flex-col gap-3">
        {/* Question Header */}
        <div className="flex items-center justify-between">
          <span className="font-padauk text-xs text-[#7f7381] bg-[#f4ece8] px-2.5 py-1 rounded-full font-medium">
            မေးခွန်းနံပါတ် {toBurmeseNumber(currentQ.id)}
          </span>
          <button
            id="quiz-audio-btn"
            onClick={() => handlePlaySound(currentQ.thaiWord)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              isPlayingAudio
                ? 'bg-[#F2D705] text-[#1A0028] animate-pulse'
                : 'bg-[#f6d9ff] text-[#4b006e] hover:bg-[#ebd0f5]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">volume_up</span>
            <span className="font-padauk text-[11px]">အသံ</span>
          </button>
        </div>

        {/* Prompt */}
        <div className="flex flex-col gap-1">
          <div className="min-h-[54px] flex items-start">
            <h2 lang="my" className="font-padauk font-bold text-[19px] text-[#1e1b19] leading-snug">
              {toBurmeseNumber(currentQ.id)}။ "
              <span lang="th" className="text-[#2c0043] font-prompt font-bold">{currentQ.thaiWord}</span>"
              ၏ မြန်မာလို အဓိပ္ပာယ်မှာ အဘယ်နည်း။
            </h2>
          </div>
          <div className="min-h-[30px] flex items-center gap-2 mt-1 flex-wrap">
            <div className="flex items-center gap-1.5 bg-[#f4ece8] px-2.5 py-1 rounded-full">
              <span className="text-gray-600 dark:text-gray-300 font-mono" lang="en">
                {currentQ.phonetic}
              </span>
              {currentQ.myanmarReading && (
                <span className="text-gray-500 text-sm font-padauk" lang="my">
                  ({currentQ.myanmarReading})
                </span>
              )}
            </div>
            <span lang="my" className="font-padauk text-[11px] text-[#D97706] bg-[#D97706]/10 px-2 py-0.5 rounded-full font-semibold">
              • {currentQ.category}
            </span>
          </div>
        </div>

        {/* Multiple Choice Options */}
        <div className="flex flex-col gap-2 pt-1">
          {currentQ.options.map((optionText, optIdx) => {
            const isSelected = selectedOptionIdxForCurrent === optIdx;
            const isCorrectAnswer = optIdx === currentQ.correctAnswerIndex;
            const optionKey = OPTION_KEYS[optIdx] || String(optIdx + 1);

            let borderStyle = 'border-[#EBE5DA] bg-white hover:bg-[#faf2ee]';
            let circleStyle = 'border-[#d0c2d1] text-[#7f7381]';
            let radioStyle = 'border-[#d0c2d1]';

            if (isSelected) {
              if (isCorrectAnswer) {
                borderStyle = 'border-[#FFDE34] bg-[#fffdf0] text-[#2c0043] shadow-xs';
                circleStyle = 'bg-[#FFDE34] text-[#2c0043] border-[#FFDE34]';
                radioStyle = 'bg-[#FFDE34] border-[#FFDE34] text-[#2c0043]';
              } else {
                borderStyle = 'border-[#E11D48] bg-[#fff1f2] text-[#7f1d1d]';
                circleStyle = 'bg-[#E11D48] text-white border-[#E11D48]';
                radioStyle = 'bg-[#E11D48] border-[#E11D48] text-white';
              }
            }

            return (
              <button
                key={optIdx}
                id={`quiz-option-${optIdx}`}
                onClick={() => handleSelectOption(optIdx)}
                className={`w-full p-3 rounded-xl border-2 flex items-center justify-between text-left transition-all cursor-pointer active:scale-98 ${borderStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-padauk font-bold text-sm border ${circleStyle}`}
                  >
                    {optionKey}
                  </span>
                  <span lang="my" className="font-padauk font-semibold text-[15px]">{optionText}</span>
                </div>

                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${radioStyle}`}
                >
                  {isSelected && (
                    <span className="material-symbols-outlined text-[14px]">
                      {isCorrectAnswer ? 'check' : 'close'}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation Note Card */}
        {selectedOptionIdxForCurrent !== undefined && (
          <div className="bg-[#fffbeb] border border-[#fce01b]/80 rounded-xl p-3 flex flex-col gap-1 animate-fadeIn">
            <div className="flex items-center gap-1.5 text-[#b45309]">
              <span className="text-[16px]">💡</span>
              <span className="font-padauk font-bold text-xs">ရှင်းလင်းချက် မှတ်စုတို</span>
            </div>
            <p lang="my" className="font-padauk text-[13px] text-[#1e1b19] leading-relaxed">
              {currentQ.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Navigation Buttons: Skip & Next Question */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <button
          onClick={handleSkipQuestion}
          className="font-padauk text-xs font-semibold text-[#4d4450] hover:text-[#2c0043] px-3 py-2.5 rounded-xl cursor-pointer"
        >
          အလွတ်ကျော်မည်
        </button>

        <button
          id="quiz-next-question-btn"
          onClick={handleNextQuestion}
          className="flex-1 py-3 px-4 rounded-xl bg-[#2c0043] hover:bg-[#3d005e] text-[#F2D705] font-padauk font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all cursor-pointer"
        >
          <span>
            {currentQuestionIndex < totalQuestions - 1 ? 'နောက်မေးခွန်းသို့' : 'ရလဒ် အပြည့်အစုံ ကြည့်မည်'}
          </span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>

      {/* Bottom Performance Evaluation Banner */}
      <div className="bg-white rounded-xl p-3 border border-[#EBE5DA] shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#FFDE34] text-[#2c0043] border border-[#FFDE34] flex flex-col items-center justify-center font-padauk font-bold text-xs shrink-0 shadow-xs">
            {toBurmeseNumber(percentScore)}%
          </div>
          <div className="flex flex-col">
            <span className="font-padauk font-bold text-[13px] text-[#2c0043] leading-tight">
              {percentScore >= 80 ? 'ထူးချွန်အဆင့် (A+)' : percentScore >= 50 ? 'ကောင်းမွန်သောအဆင့် (B)' : 'လေ့ကျင့်ရန်လိုအပ်ဆဲ'}
            </span>
            <span className="font-padauk text-[11px] text-[#4d4450]">
              {toBurmeseNumber(answeredCount)} ပုဒ်ဖြေပြီး {toBurmeseNumber(correctAnswersCount)} ပုဒ် မှန်ကန်
            </span>
          </div>
        </div>

        <div className="text-right">
          <span className="font-padauk text-[10px] text-[#7f7381] block">ပျမ်းမျှတုံ့ပြန်ချိန်</span>
          <span className="font-padauk text-xs font-bold text-[#2c0043]">
            ၄.၂ စက္ကန့်/ပုဒ်
          </span>
        </div>
      </div>

      {/* Modal celebration dialog if completed */}
      {showCelebration && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-[360px] w-full p-5 border-2 border-[#F2D705] shadow-2xl flex flex-col items-center text-center gap-3 animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-[#fce01b]/30 flex items-center justify-center text-3xl">
              🎉
            </div>
            <h3 className="font-padauk font-bold text-lg text-[#2c0043]">
              ဉာဏ်စမ်းအောင်မြင်စွာ ဖြေဆိုပြီးပါပြီ။
            </h3>
            <p className="font-padauk text-xs text-[#4d4450]">
              သင့်ရမှတ်: {toBurmeseNumber(correctAnswersCount)} / {toBurmeseNumber(totalQuestions)} (ရမှတ် {toBurmeseNumber(percentScore)}%)
            </p>

            <div className="w-full bg-[#F4F0E8] rounded-xl p-3 text-xs font-padauk text-[#2c0043] flex justify-around">
              <div>
                <span className="block text-[#7f7381]">စုစုပေါင်းအချိန်</span>
                <strong className="font-mono text-sm">{formatTimer(secondsElapsed)}</strong>
              </div>
              <div>
                <span className="block text-[#7f7381]">အဆင့်အတန်း</span>
                <strong className="text-[#b45309] text-sm">
                  {percentScore >= 80 ? 'ထူးချွန် (A+)' : percentScore >= 50 ? 'ကောင်းမွန် (B)' : 'ကြိုးစားဆဲ'}
                </strong>
              </div>
            </div>

            <div className="flex gap-2 w-full pt-1">
              <button
                onClick={handleResetQuiz}
                className="flex-1 py-2.5 rounded-xl bg-[#F4F0E8] text-[#2c0043] font-padauk font-bold text-xs hover:bg-[#eee7e3] cursor-pointer"
              >
                ပြန်လည်ဖြေဆိုမည်
              </button>
              <button
                onClick={() => setShowCelebration(false)}
                className="flex-1 py-2.5 rounded-xl bg-[#2c0043] text-[#F2D705] font-padauk font-bold text-xs hover:bg-[#3d005e] cursor-pointer"
              >
                ပိတ်မည်
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
