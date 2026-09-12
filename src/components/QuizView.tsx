import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../data/quiz';
import { playThaiSpeech } from '../utils/audio';

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
  // Start at Question 7 by default to match the exact uploaded screenshot, or allow navigation!
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(6); // index 6 is Q7
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: number]: string }>({
    1: 'ခ',
    2: 'က',
    3: 'ဂ',
    4: 'ဂ',
    5: 'က',
    6: 'ခ',
    7: 'ခ', // pre-selected to match screenshot, but fully interactive
  });
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(15);
  const [showCelebration, setShowCelebration] = useState(false);

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

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;

  // Calculate score
  let correctAnswersCount = 0;
  let answeredCount = 0;
  QUIZ_QUESTIONS.forEach((q) => {
    const userSelectedKey = selectedAnswers[q.id];
    if (userSelectedKey) {
      answeredCount++;
      const opt = q.options.find((o) => o.key === userSelectedKey);
      if (opt && opt.isCorrect) {
        correctAnswersCount++;
      }
    }
  });

  const percentScore = answeredCount > 0 ? Math.round((correctAnswersCount / answeredCount) * 100) : 100;
  const progressPercent = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  const handleSelectOption = (key: 'က' | 'ခ' | 'ဂ' | 'ဃ') => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: key,
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
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setSecondsElapsed(0);
    setShowCelebration(false);
  };

  const selectedKeyForCurrent = selectedAnswers[currentQ.id];

  return (
    <div className="flex-1 px-4 pt-3 pb-24 flex flex-col gap-3">
      {/* Quiz Assessment Top Status Bar */}
      <div className="flex items-center justify-between gap-2">
        {/* Part Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f6d9ff]/70 border border-[#2c0043]/15 text-[#2c0043] text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#4b006e]" />
          <span className="font-padauk text-[12px] leading-none">
            အပိုင်း (က) <span className="font-prompt text-[11px] font-bold">PART A : Q1-Q10</span>
          </span>
        </div>

        {/* Live Timer */}
        <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#f4ece8] border border-[#EBE5DA] text-xs font-mono text-[#4d4450]">
          <span className="material-symbols-outlined text-[15px]">schedule</span>
          <span className="font-bold">{formatTimer(secondsElapsed)}</span>
        </div>

        {/* Score Badge */}
        <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#fce01b]/25 border border-[#fce01b] text-[#2c0043] text-xs font-padauk font-bold">
          <span className="text-[14px]">🏆</span>
          <span>
            ရမှတ်: <span className="font-mono">{toBurmeseNumber(correctAnswersCount)}/{toBurmeseNumber(answeredCount || 1)}</span>
          </span>
        </div>
      </div>

      {/* Progress Info Header */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-padauk text-[15px] font-bold text-[#2c0043]">
            မေးခွန်း <span className="font-padauk text-[#4b006e] text-[18px]">{toBurmeseNumber(currentQuestionIndex + 1)}</span> / {toBurmeseNumber(totalQuestions)}
          </span>
          <span className="font-mono text-[12px] text-[#7f7381] font-semibold">
            {progressPercent}% <span className="font-padauk text-[11px]">ပြီးစီး</span>
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#f4ece8] h-2 rounded-full overflow-hidden border border-[#EBE5DA]">
          <div
            className="h-full bg-[#4b006e] rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Number Strip (1 to 10) */}
      <div className="bg-white rounded-2xl p-2.5 border border-[#EBE5DA] shadow-2xs flex flex-col gap-2">
        <div className="flex items-center justify-between text-[11px] text-[#4d4450]">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">menu</span>
            <span className="font-padauk font-semibold">မေးခွန်း ၁၀ စာရင်း</span>
          </div>
          <div className="flex items-center gap-2 font-padauk text-[10px]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" /> ဖြေပြီး
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#4b006e]" /> လက်ရှိ
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-1">
          {QUIZ_QUESTIONS.map((q, idx) => {
            const isCurrent = idx === currentQuestionIndex;
            const isAnswered = !!selectedAnswers[q.id];

            let badgeStyle = 'bg-[#f4ece8] text-[#7f7381] hover:bg-[#eee7e3]';
            if (isCurrent) {
              badgeStyle = 'bg-[#2c0043] text-white font-bold ring-2 ring-[#F2D705]';
            } else if (isAnswered) {
              badgeStyle = 'bg-[#16A34A] text-white font-bold';
            }

            return (
              <button
                key={q.id}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-[12px] transition-all cursor-pointer ${badgeStyle}`}
              >
                {q.id}
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
          <h2 className="font-padauk font-bold text-[19px] text-[#1e1b19] leading-snug">
            {toBurmeseNumber(currentQ.id)}။ "
            <span className="text-[#2c0043] font-prompt font-bold">{currentQ.thaiWord}</span>"
            ၏ မြန်မာလို အဓိပ္ပာယ်မှာ အဘယ်နည်း။
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-mono text-xs bg-[#f4ece8] text-[#4d4450] px-2.5 py-0.5 rounded-full">
              အသံထွက်: [ {currentQ.phonetics} ]
            </span>
            <span className="font-padauk text-[11px] text-[#D97706] bg-[#D97706]/10 px-2 py-0.5 rounded-full font-semibold">
              • {currentQ.categoryTag}
            </span>
          </div>
        </div>

        {/* Multiple Choice Options */}
        <div className="flex flex-col gap-2 pt-1">
          {currentQ.options.map((option) => {
            const isSelected = selectedKeyForCurrent === option.key;
            const isCorrectAnswer = option.isCorrect;

            let borderStyle = 'border-[#EBE5DA] bg-white hover:bg-[#faf2ee]';
            let circleStyle = 'border-[#d0c2d1] text-[#7f7381]';
            let radioStyle = 'border-[#d0c2d1]';

            if (isSelected) {
              if (isCorrectAnswer) {
                borderStyle = 'border-[#16A34A] bg-[#f0fdf4] text-[#14532d] shadow-xs';
                circleStyle = 'bg-[#16A34A] text-white border-[#16A34A]';
                radioStyle = 'bg-[#16A34A] border-[#16A34A] text-white';
              } else {
                borderStyle = 'border-[#E11D48] bg-[#fff1f2] text-[#7f1d1d]';
                circleStyle = 'bg-[#E11D48] text-white border-[#E11D48]';
                radioStyle = 'bg-[#E11D48] border-[#E11D48] text-white';
              }
            }

            return (
              <button
                key={option.key}
                id={`quiz-option-${option.key}`}
                onClick={() => handleSelectOption(option.key)}
                className={`w-full p-3 rounded-xl border-2 flex items-center justify-between text-left transition-all cursor-pointer active:scale-98 ${borderStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-padauk font-bold text-sm border ${circleStyle}`}
                  >
                    {option.key}
                  </span>
                  <span className="font-padauk font-semibold text-[15px]">{option.text}</span>
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
        {selectedKeyForCurrent && (
          <div className="bg-[#fffbeb] border border-[#fce01b]/80 rounded-xl p-3 flex flex-col gap-1 animate-fadeIn">
            <div className="flex items-center gap-1.5 text-[#b45309]">
              <span className="text-[16px]">💡</span>
              <span className="font-padauk font-bold text-xs">ရှင်းလင်းချက် မှတ်စုတို</span>
            </div>
            <p className="font-padauk text-[13px] text-[#1e1b19] leading-relaxed">
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
          <div className="w-11 h-11 rounded-full bg-[#16A34A]/15 text-[#16A34A] flex flex-col items-center justify-center font-mono font-bold text-xs shrink-0">
            {percentScore}%
          </div>
          <div className="flex flex-col">
            <span className="font-padauk font-bold text-[13px] text-[#2c0043] leading-tight">
              ထူးချွန်အဆင့် (A+)
            </span>
            <span className="font-padauk text-[11px] text-[#4d4450]">
              {toBurmeseNumber(correctAnswersCount)} ပုဒ်ဖြေပြီး {toBurmeseNumber(correctAnswersCount)} ပုဒ်စလုံး မှန်ကန်
            </span>
          </div>
        </div>

        <div className="text-right">
          <span className="font-padauk text-[10px] text-[#7f7381] block">ပျမ်းမျှတုံ့ပြန်ချိန်</span>
          <span className="font-mono text-xs font-bold text-[#2c0043]">
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
              သင့်ရမှတ်: {toBurmeseNumber(correctAnswersCount)} / {toBurmeseNumber(totalQuestions)} (ရမှတ် {percentScore}%)
            </p>

            <div className="w-full bg-[#F4F0E8] rounded-xl p-3 text-xs font-padauk text-[#2c0043] flex justify-around">
              <div>
                <span className="block text-[#7f7381]">စုစုပေါင်းအချိန်</span>
                <strong className="font-mono text-sm">{formatTimer(secondsElapsed)}</strong>
              </div>
              <div>
                <span className="block text-[#7f7381]">အဆင့်အတန်း</span>
                <strong className="text-[#16A34A] text-sm">ထူးချွန် (A+)</strong>
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
