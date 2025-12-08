import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ClipboardCheck, Brain, LineChart, Stethoscope } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    step: '01',
    title: 'Complete Assessment',
    description: 'Answer clinically designed questions about your symptoms, cycle, and health history.',
  },
  {
    icon: Brain,
    step: '02',
    title: 'AI Analysis',
    description: 'Our validated AI model analyzes your responses to provide personalized risk insights.',
  },
  {
    icon: LineChart,
    step: '03',
    title: 'Track & Monitor',
    description: 'Monitor your cycle, emotions, and symptoms on your personal health dashboard.',
  },
  {
    icon: Stethoscope,
    step: '04',
    title: 'Get Expert Care',
    description: 'Connect with verified specialists for consultations and treatment plans.',
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Path to <span className="gradient-text">Better Health</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A supportive, evidence-based approach designed for your comfort and wellbeing.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="glass-card p-8 text-center relative">
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-md">
                  {step.step}
                </div>

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 mt-4">
                  <step.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
