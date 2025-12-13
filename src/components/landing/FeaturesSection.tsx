import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Heart, Calendar, Stethoscope, Shield, Sparkles, Clock, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered PCOS Screening',
    description: 'Get accurate risk assessment in just 3 minutes. Our AI is trained on data from 10,000+ Indian women.',
    color: 'primary',
    badge: 'Most Popular',
  },
  {
    icon: Heart,
    title: 'Emotional Wellness Tracker',
    description: 'Daily mood journaling with AI insights. Understand how your emotions connect to your cycle.',
    color: 'secondary',
    badge: null,
  },
  {
    icon: Calendar,
    title: 'Smart Cycle Tracking',
    description: 'Predict your periods accurately, even with irregular cycles. Get reminders for doctor visits.',
    color: 'primary',
    badge: null,
  },
  {
    icon: Stethoscope,
    title: 'Connect with Specialists',
    description: 'Find FOGSI-certified gynecologists and endocrinologists in your city. Book online or in-person.',
    color: 'secondary',
    badge: '500+ Doctors',
  },
  {
    icon: MessageCircle,
    title: 'Hindi & Regional Support',
    description: 'Use the app in Hindi or English. Our support team speaks your language.',
    color: 'primary',
    badge: null,
  },
  {
    icon: Shield,
    title: '100% Private & Secure',
    description: 'Your health data stays on your device. We never share or sell your information.',
    color: 'secondary',
    badge: 'Encrypted',
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
          <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
            Complete Care Platform
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need for{' '}
            <span className="gradient-text-secondary">Better Health</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Clinically validated tools designed with empathy for Indian women's unique health needs.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="glass-card-hover p-8 group relative"
            >
              {/* Badge */}
              {feature.badge && (
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  feature.color === 'primary' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-secondary/10 text-secondary'
                }`}>
                  {feature.badge}
                </div>
              )}

              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 ${
                  feature.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                }`}
              >
                <feature.icon
                  size={26}
                  className={feature.color === 'primary' ? 'text-primary' : 'text-secondary'}
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Clock size={18} className="text-secondary" />
            <span>Takes only 3 minutes to get started</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
