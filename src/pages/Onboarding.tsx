import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, User, Calendar, Heart, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import logo from '@/assets/day28-logo.png';

const steps = [
  {
    id: 1,
    title: 'About You',
    icon: User,
    fields: [
      { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Enter your name' },
      { name: 'age', label: 'Age', type: 'number', placeholder: 'Enter your age' },
      { name: 'location', label: 'City', type: 'text', placeholder: 'Enter your city' },
    ],
  },
  {
    id: 2,
    title: 'Cycle Info',
    icon: Calendar,
    fields: [
      { name: 'lastPeriod', label: 'Last Period Date', type: 'date', placeholder: '' },
      { name: 'cycleLength', label: 'Average Cycle Length (days)', type: 'number', placeholder: '28' },
      { name: 'periodDuration', label: 'Period Duration (days)', type: 'number', placeholder: '5' },
    ],
  },
  {
    id: 3,
    title: 'Health Goals',
    icon: Heart,
    options: [
      { value: 'pcos-screening', label: 'PCOS Screening' },
      { value: 'cycle-tracking', label: 'Cycle Tracking' },
      { value: 'emotional-wellness', label: 'Emotional Wellness' },
      { value: 'fertility', label: 'Fertility Planning' },
      { value: 'weight-management', label: 'Weight Management' },
      { value: 'general-health', label: 'General Health' },
    ],
  },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string | string[]>>({
    goals: [],
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoalToggle = (goal: string) => {
    const currentGoals = (formData.goals as string[]) || [];
    if (currentGoals.includes(goal)) {
      setFormData((prev) => ({
        ...prev,
        goals: currentGoals.filter((g) => g !== goal),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        goals: [...currentGoals, goal],
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      navigate('/dashboard');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const step = steps[currentStep];
  const StepIcon = step.icon;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg"
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Step {currentStep + 1} of {steps.length}
              </span>
              <span className="text-sm text-primary font-medium">{step.title}</span>
            </div>
            <div className="h-2 bg-card/60 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.4 }}
                className="h-full bg-gradient-primary rounded-full"
              />
            </div>
          </div>

          <div className="glass-card p-8 md:p-10">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img src={logo} alt="DAY28" className="h-12" />
            </div>

            {/* Step Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <StepIcon size={24} className="text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">{step.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {currentStep === 0 && "Let's get to know you better"}
                  {currentStep === 1 && 'Help us understand your cycle'}
                  {currentStep === 2 && 'What are you looking for?'}
                </p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {step.fields ? (
                  step.fields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={(formData[field.name] as string) || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        className="w-full px-4 py-3.5 bg-card/60 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  ))
                ) : step.options ? (
                  <div className="grid grid-cols-2 gap-3">
                    {step.options.map((option) => {
                      const isSelected = ((formData.goals as string[]) || []).includes(option.value);
                      return (
                        <motion.button
                          key={option.value}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleGoalToggle(option.value)}
                          className={`p-4 rounded-xl border text-left transition-all ${
                            isSelected
                              ? 'bg-primary/20 border-primary/50 text-foreground'
                              : 'bg-card/40 border-border/50 text-muted-foreground hover:border-primary/30'
                          }`}
                        >
                          <span className="text-sm font-medium">{option.label}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                ) : null}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex gap-4 mt-8">
              {currentStep > 0 && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={prevStep}
                  className="btn-secondary flex-1 flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={18} />
                  Back
                </motion.button>
              )}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={nextStep}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                <span className="relative z-10">
                  {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
                </span>
                {currentStep === steps.length - 1 ? (
                  <Sparkles size={18} className="relative z-10" />
                ) : (
                  <ArrowRight size={18} className="relative z-10" />
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Onboarding;
