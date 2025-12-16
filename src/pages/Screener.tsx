import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Brain, ArrowRight, CheckCircle, AlertTriangle, RefreshCw, Shield, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const questions = [
  {
    id: 1,
    question: 'How regular is your menstrual cycle?',
    options: [
      { value: 1, label: 'Very regular (28-32 days)' },
      { value: 2, label: 'Slightly irregular (varies by a week)' },
      { value: 3, label: 'Very irregular (unpredictable)' },
      { value: 4, label: 'I rarely get periods' },
    ],
  },
  {
    id: 2,
    question: 'Do you experience excessive hair growth on face or body?',
    options: [
      { value: 1, label: 'No noticeable hair growth' },
      { value: 2, label: 'Mild, barely noticeable' },
      { value: 3, label: 'Moderate, I manage it regularly' },
      { value: 4, label: 'Significant, it affects my confidence' },
    ],
  },
  {
    id: 3,
    question: 'How would you describe your skin condition?',
    options: [
      { value: 1, label: 'Clear, rarely have breakouts' },
      { value: 2, label: 'Occasional acne' },
      { value: 3, label: 'Persistent acne, especially on chin/jawline' },
      { value: 4, label: 'Severe acne that doesn\'t respond to treatment' },
    ],
  },
  {
    id: 4,
    question: 'Have you experienced unexplained weight gain?',
    options: [
      { value: 1, label: 'No, my weight is stable' },
      { value: 2, label: 'Slight increase over past year' },
      { value: 3, label: 'Noticeable gain, hard to lose' },
      { value: 4, label: 'Significant gain despite diet/exercise' },
    ],
  },
  {
    id: 5,
    question: 'Do you experience mood swings or anxiety?',
    options: [
      { value: 1, label: 'Rarely or never' },
      { value: 2, label: 'Occasionally, around my period' },
      { value: 3, label: 'Frequently throughout the month' },
      { value: 4, label: 'Almost constantly affecting daily life' },
    ],
  },
];

const Screener = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: number) => {
    setAnswers((prev) => ({ ...prev, [questions[currentQuestion].id]: value }));
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion((prev) => prev + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const calculateRisk = () => {
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const maxScore = questions.length * 4;
    const percentage = Math.round((total / maxScore) * 100);
    return percentage;
  };

  const getRiskLevel = (score: number) => {
    if (score < 30) return { level: 'Low', color: 'text-secondary', description: 'Your responses suggest a low likelihood of PCOS. Continue monitoring your health.' };
    if (score < 60) return { level: 'Moderate', color: 'text-amber-500', description: 'Some symptoms may warrant further evaluation. Consider consulting a specialist.' };
    return { level: 'High', color: 'text-primary', description: 'We recommend consulting with a healthcare provider for proper evaluation.' };
  };

  const resetScreener = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const question = questions[currentQuestion];
  const riskScore = calculateRisk();
  const riskInfo = getRiskLevel(riskScore);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <Brain size={18} className="text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Screening</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                PCOS Risk <span className="text-primary">Assessment</span>
              </h1>
              <p className="text-muted-foreground">
                Answer a few clinically-designed questions to understand your risk level
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Shield size={12} className="text-secondary" />
                  <span>Clinically Validated</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Lock size={12} className="text-secondary" />
                  <span>100% Confidential</span>
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card p-8"
                >
                  {/* Progress */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">
                        Question {currentQuestion + 1} of {questions.length}
                      </span>
                      <span className="text-sm text-primary font-medium">
                        {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    {question.question}
                  </h2>

                  {/* Options */}
                  <div className="space-y-3">
                    {question.options.map((option, index) => (
                      <motion.button
                        key={option.value}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => handleAnswer(option.value)}
                        className={`w-full p-4 rounded-xl border text-left transition-all flex items-center gap-4 ${
                          answers[question.id] === option.value
                            ? 'bg-primary/20 border-primary/50'
                            : 'bg-card/40 border-border/50 hover:border-primary/30'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            answers[question.id] === option.value
                              ? 'border-primary bg-primary'
                              : 'border-muted-foreground'
                          }`}
                        >
                          {answers[question.id] === option.value && (
                            <CheckCircle size={12} className="text-primary-foreground" />
                          )}
                        </div>
                        <span className="text-foreground">{option.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                    {riskScore < 30 ? (
                      <CheckCircle size={40} className="text-secondary" />
                    ) : (
                      <AlertTriangle size={40} className={riskInfo.color} />
                    )}
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Your Results Are Ready
                  </h2>

                  <div className="my-8">
                    <div className="relative inline-block">
                      <svg className="w-40 h-40" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="hsl(var(--muted))"
                          strokeWidth="8"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="url(#resultGradient)"
                          strokeWidth="8"
                          strokeDasharray={`${(riskScore / 100) * 283} 283`}
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                        />
                        <defs>
                          <linearGradient id="resultGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="hsl(335 100% 65%)" />
                            <stop offset="100%" stopColor="hsl(340 100% 76%)" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold text-foreground">{riskScore}%</span>
                        <span className={`text-sm font-medium ${riskInfo.color}`}>
                          {riskInfo.level} Risk
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    {riskInfo.description}
                  </p>

                  {/* Disclaimer */}
                  <div className="mb-8 p-4 rounded-xl bg-card/50 border border-border text-left">
                    <p className="text-xs text-muted-foreground">
                      <strong>Note:</strong> This assessment provides health awareness only and is not a medical diagnosis. 
                      Please consult a qualified healthcare professional for proper evaluation and treatment.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={resetScreener}
                      className="btn-secondary flex items-center justify-center gap-2"
                    >
                      <RefreshCw size={18} />
                      Retake Screening
                    </motion.button>
                    <Link to="/doctors">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-primary flex items-center justify-center gap-2"
                      >
                        <span className="relative z-10">Find Specialists</span>
                        <ArrowRight size={18} className="relative z-10" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Screener;
