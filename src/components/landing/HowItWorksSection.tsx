import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ClipboardCheck, Brain, LineChart, Stethoscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: ClipboardCheck,
    step: '01',
    title: 'Quick Assessment',
    description: 'Answer clinically-designed questions about your symptoms, cycle, and lifestyle in just 3 minutes.',
    color: 'primary',
  },
  {
    icon: Brain,
    step: '02',
    title: 'AI Analysis',
    description: 'Our validated AI analyzes your responses using data patterns from thousands of Indian women.',
    color: 'secondary',
  },
  {
    icon: LineChart,
    step: '03',
    title: 'Track & Monitor',
    description: 'Use your personal dashboard to track symptoms, mood patterns, and cycle data over time.',
    color: 'primary',
  },
  {
    icon: Stethoscope,
    step: '04',
    title: 'Expert Care',
    description: 'Connect with verified gynecologists and specialists — online or at a clinic near you.',
    color: 'secondary',
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden bg-muted/30" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-wide uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Path to{' '}
            <span className="text-primary">Better Health</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A simple, supportive journey designed with clinical precision and care for your well-being.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[60%] w-full h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="glass-card p-8 text-center relative h-full">
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-bold shadow-md ${
                  step.color === 'primary' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground'
                }`}>
                  {step.step}
                </div>

                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mt-4 ${
                  step.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                }`}>
                  <step.icon size={28} className={step.color === 'primary' ? 'text-primary' : 'text-secondary'} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link to="/screener">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary group inline-flex items-center gap-2"
            >
              <span className="relative z-10">Start Your Free Assessment</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
