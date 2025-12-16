import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Database, Lock, LineChart, Sparkles, Shield } from 'lucide-react';

const aiFeatures = [
  {
    icon: Database,
    title: 'Data-Driven Insights',
    description: 'Our AI models are trained on anonymized health data from thousands of Indian women, ensuring culturally relevant and accurate assessments.',
  },
  {
    icon: Brain,
    title: 'Intelligent Pattern Recognition',
    description: 'Advanced algorithms detect subtle patterns in your symptoms, cycle data, and mood entries that might indicate hormonal imbalances.',
  },
  {
    icon: Lock,
    title: 'Privacy-First Architecture',
    description: 'Your personal health data is encrypted end-to-end. We use anonymized, aggregated data for AI training — never individual records.',
  },
];

export const AIInsightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
              Technology & Trust
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How Our <span className="text-primary">AI</span> Works
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our platform combines clinical expertise with advanced machine learning to provide accurate, 
              personalized health insights. Built by healthcare professionals and data scientists, 
              specifically for Indian women's health needs.
            </p>

            <div className="space-y-6">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8">
              {/* Sample Chart Visualization */}
              <div className="flex items-center gap-2 mb-6">
                <LineChart size={20} className="text-primary" />
                <span className="font-semibold text-foreground">Sample Symptom Trend Analysis</span>
              </div>

              {/* Mock Chart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground w-20">Fatigue</span>
                  <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '65%' } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                    />
                  </div>
                  <span className="text-sm text-foreground font-medium">65%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground w-20">Mood</span>
                  <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '78%' } : {}}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-secondary to-secondary/60 rounded-full"
                    />
                  </div>
                  <span className="text-sm text-foreground font-medium">78%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground w-20">Sleep</span>
                  <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '52%' } : {}}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                  <span className="text-sm text-foreground font-medium">52%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground w-20">Stress</span>
                  <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '41%' } : {}}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="h-full bg-gradient-to-r from-secondary to-primary rounded-full"
                    />
                  </div>
                  <span className="text-sm text-foreground font-medium">41%</span>
                </div>
              </div>

              {/* AI Insight Box */}
              <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={16} className="text-primary" />
                  <span className="text-sm font-semibold text-foreground">AI Insight</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on your patterns, stress levels correlate with fatigue spikes during the luteal phase. 
                  Consider relaxation techniques during days 18-24.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 flex items-center justify-center gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Shield size={12} className="text-secondary" />
                  <span>Encrypted</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Lock size={12} className="text-secondary" />
                  <span>Private</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Brain size={12} className="text-secondary" />
                  <span>AI-Powered</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
