import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Loader2,
  ArrowLeft,
  Trophy,
  Brain
} from 'lucide-react';
import { getQuizGroups, getQuiz, generateImage, QuizData, QuizGroup } from './services/gemini';

type AppState = 'input' | 'loading' | 'quiz' | 'results';

export default function App() {
  const [state, setState] = useState<AppState>('input');
  const [quizGroups, setQuizGroups] = useState<QuizGroup[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<string>('');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [loadingStep, setLoadingStep] = useState('Carregando grupos de questões...');
  const [questionImages, setQuestionImages] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);

  // Load quiz groups on component mount
  React.useEffect(() => {
    const loadGroups = async () => {
      try {
        const groups = await getQuizGroups();
        setQuizGroups(groups);
      } catch (error) {
        console.error('Error loading quiz groups:', error);
      }
    };
    loadGroups();
  }, []);

  const handleStartQuiz = async (isRetry = false) => {
    if (!selectedGroup.trim()) return;
    
    setState('loading');
    setLoadingStep(isRetry ? 'Sorteando novas perguntas...' : 'Carregando questões...');
    
    try {
      const data = await getQuiz(selectedGroup, questionCount);
      setQuizData(data);
      setCurrentQuestionIndex(0);
      setAnswers([]);
      setScore(0);
      setQuestionImages({});
      
      setState('quiz');

    } catch (error) {
      console.error("Error generating quiz:", error);
      alert("Ops! Algo deu errado ao criar seu quiz. Tente novamente!");
      setState('input');
    }
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    
    if (optionIndex === quizData?.questions[currentQuestionIndex].correctAnswerIndex) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < (quizData?.questions.length || 0) - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 1500);
    } else {
      setTimeout(() => {
        setState('results');
      }, 1500);
    }
  };

  const resetQuiz = () => {
    setState('input');
    setQuizData(null);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setScore(0);
    setQuestionImages({});
    setSelectedGroup('');
    setQuestionCount(10);
  };

  const tryAgain = () => {
    handleStartQuiz(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#4A4A40] font-sans selection:bg-[#E0E7D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="bg-[#5A5A40] p-2 rounded-2xl">
              <Brain className="text-white w-6 h-6" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#2A2A20]">Quiz Mágico</h1>
          </div>
          {state !== 'input' && (
            <button 
              onClick={resetQuiz}
              className="text-sm font-medium flex items-center gap-2 hover:text-[#2A2A20] transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Recomeçar
            </button>
          )}
        </header>

        <AnimatePresence mode="wait">
          {state === 'input' && (
            <motion.div
              key="input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif italic text-[#2A2A20]">O que vamos aprender hoje?</h2>
                <p className="text-base sm:text-lg text-[#6A6A50]">Escolhe um tema e quantas perguntas queres responder!</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-lg font-medium text-[#4A4A40]">Escolhe o tema do quiz:</label>
                  <select
                    value={selectedGroup}
                    onChange={(e) => setSelectedGroup(e.target.value)}
                    className="w-full p-3 sm:p-4 bg-white rounded-2xl border-2 border-[#E5E5E0] focus:border-[#5A5A40] focus:ring-0 transition-all text-base sm:text-lg shadow-sm hover:shadow-md"
                  >
                    <option value="">Seleciona um tema...</option>
                    {quizGroups.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.id.charAt(0).toUpperCase() + group.id.slice(1)} ({group.questionCount} perguntas)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-lg font-medium text-[#4A4A40]">Quantas perguntas?</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="5"
                      max="50"
                      value={questionCount}
                      onChange={(e) => setQuestionCount(Number(e.target.value))}
                      className="flex-1 h-2 bg-[#E5E5E0] rounded-lg appearance-none cursor-pointer accent-[#5A5A40]"
                    />
                    <span className="text-lg font-bold text-[#5A5A40] min-w-[3rem] text-center">
                      {questionCount}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleStartQuiz()}
                disabled={!selectedGroup.trim()}
                className="w-full py-4 sm:py-6 bg-[#5A5A40] text-white rounded-full text-lg sm:text-xl font-medium flex items-center justify-center gap-3 hover:bg-[#4A4A30] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                Iniciar o Quiz <Sparkles className="w-6 h-6" />
              </button>
            </motion.div>
          )}

          {state === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 space-y-8"
            >
              <div className="relative">
                <div className="w-24 h-24 border-4 border-[#E5E5E0] border-t-[#5A5A40] rounded-full animate-spin" />
                <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#5A5A40] w-8 h-8 animate-pulse" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-serif italic text-[#2A2A20]">{loadingStep}</h3>
                <p className="text-[#8A8A70]">Aguarda um momento, a magia está a acontecer...</p>
              </div>
            </motion.div>
          )}

          {state === 'quiz' && quizData && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-widest text-[#8A8A70]">
                    Pergunta {currentQuestionIndex + 1} de {quizData.questions.length}
                  </span>
                  <span className="text-sm font-bold text-[#5A5A40]">
                    {Math.round(((currentQuestionIndex + 1) / quizData.questions.length) * 100)}%
                  </span>
                </div>
                <div className="h-2 w-full bg-[#E5E5E0] rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#5A5A40]"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestionIndex + 1) / quizData.questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div className="bg-white rounded-[40px] p-8 shadow-sm border border-[#F0F0E8] overflow-hidden">
                <h3 className="text-2xl font-serif leading-tight text-[#2A2A20] mb-8">
                  {quizData.questions[currentQuestionIndex].text}
                </h3>

                <div className="grid gap-4">
                  {quizData.questions[currentQuestionIndex].options.map((option, idx) => {
                    const isAnswered = answers.length > currentQuestionIndex;
                    const isCorrect = idx === quizData.questions[currentQuestionIndex].correctAnswerIndex;
                    const isSelected = answers[currentQuestionIndex] === idx;
                    
                    let buttonClass = "w-full p-6 text-left rounded-2xl border-2 transition-all flex items-center justify-between group ";
                    if (!isAnswered) {
                      buttonClass += "border-[#F0F0E8] hover:border-[#5A5A40] hover:bg-[#FDFCF0]";
                    } else if (isCorrect) {
                      buttonClass += "border-[#E0E7D8] bg-[#F4F7F0] text-[#4A5A30]";
                    } else if (isSelected && !isCorrect) {
                      buttonClass += "border-[#F7E0E0] bg-[#FDF4F4] text-[#7A3030]";
                    } else {
                      buttonClass += "border-transparent opacity-50";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => !isAnswered && handleAnswer(idx)}
                        disabled={isAnswered}
                        className={buttonClass}
                      >
                        <span className="text-lg font-medium">{option}</span>
                        {isAnswered && isCorrect && <CheckCircle2 className="w-6 h-6 text-[#4A5A30]" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-[#7A3030]" />}
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {answers.length > currentQuestionIndex && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="mt-8 pt-8 border-t border-[#F0F0E8]"
                    >
                      <p className="text-[#6A6A50] italic">
                        {quizData.questions[currentQuestionIndex].explanation}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {state === 'results' && quizData && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-12 py-12"
            >
              <div className="relative inline-block">
                <div className="bg-white rounded-full p-12 shadow-xl border-8 border-[#FDFCF0] outline outline-2 outline-[#5A5A40]">
                  <Trophy className="w-24 h-24 text-[#5A5A40]" />
                </div>
                <motion.div 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-4 -right-4 bg-[#5A5A40] text-white p-4 rounded-full shadow-lg"
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
              </div>

              <div className="space-y-4">
                <h2 className="text-5xl font-serif italic text-[#2A2A20]">Parabéns!</h2>
                <p className="text-2xl text-[#6A6A50]">
                  Você acertou <span className="font-bold text-[#5A5A40]">{score}</span> de {quizData.questions.length} perguntas!
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  onClick={tryAgain}
                  className="w-full py-6 bg-[#5A5A40] text-white rounded-full text-xl font-medium flex items-center justify-center gap-3 hover:bg-[#4A4A30] transition-all shadow-lg active:scale-[0.98]"
                >
                  Jogar Novamente <RotateCcw className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setState('input')}
                  className="w-full py-6 bg-white text-[#5A5A40] border-2 border-[#5A5A40] rounded-full text-xl font-medium flex items-center justify-center gap-3 hover:bg-[#FDFCF0] transition-all"
                >
                  Novo Quiz <ArrowLeft className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
