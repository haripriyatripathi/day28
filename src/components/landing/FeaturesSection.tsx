import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Heart, Calendar, Stethoscope, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Screening',
    description: 'Get personalized PCOS risk assessment using advanced AI that analyzes your symptoms and health patterns.',
    color: 'primary',
  },
  {
    icon: Heart,
    title: 'Emotional Journal',
    description: 'Track your mood, stress levels, and emotional well-being. AI provides insights to help you understand patterns.',
    color: 'accent',
  },
  {
    icon: Calendar,
    title: 'Cycle Tracking',
    description: 'Monitor your menstrual cycle with intelligent predictions and personalized health recommendations.',
    color: 'secondary',
  },
  {
    icon: Stethoscope,
    title: 'Connect with Doctors',
    description: 'Find verified specialists who understand PCOS. Book consultations with empathetic healthcare providers.',
    color: 'primary',
  },
  {
    icon: Shield,
    title: '100% Private',
    description: 'Your health data stays yours. End-to-end encryption ensures complete privacy and security.',
    color: 'accent',
  },
  {
    icon: Sparkles,
    title: 'Personalized Insights',
    description: 'Receive tailored recommendations based on your unique health profile and wellness goals.',
    color: 'secondary',
  },
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wide uppercase mb-4 block">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need for{' '}
            <span className="gradient-text">Better Health</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive tools designed with empathy for Indian women's unique health needs.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card-hover p-8 group"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-transform group-hover:scale-110 ${
                  feature.color === 'primary'
                    ? 'bg-primary/10'
                    : feature.color === 'accent'
                    ? 'bg-accent/10'
                    : 'bg-secondary/10'
                }`}
              >
                <feature.icon
                  size={24}
                  className={
                    feature.color === 'primary'
                      ? 'text-primary'
                      : feature.color === 'accent'
                      ? 'text-accent'
                      : 'text-secondary'
                  }
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
