import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, TrendingUp, Calendar, Target, Award, CheckCircle2, Flame } from 'lucide-react';

const feedbackCards = [
  {
    quote: "My cycles became predictable in 3 months. I finally understand my body better.",
    author: "Anonymous User",
    location: "Mumbai",
    improvement: "Cycle regularity improved by 40%",
  },
  {
    quote: "Doctor consultation felt personal and safe. No judgment, just care and support.",
    author: "Anonymous User", 
    location: "Bengaluru",
    improvement: "Connected with specialist in 24 hours",
  },
  {
    quote: "The AI insights helped me identify triggers I never noticed before.",
    author: "Anonymous User",
    location: "Delhi",
    improvement: "Symptom awareness increased significantly",
  },
  {
    quote: "As a college student, this platform gave me clarity without expensive consultations.",
    author: "Anonymous User",
    location: "Pune",
    improvement: "First-time PCOS screening at age 19",
  },
];

const progressMetrics = [
  {
    icon: TrendingUp,
    label: 'Cycle Regularity',
    value: 68,
    unit: '%',
    description: 'Users with improved cycle predictability after 90 days',
    color: 'primary',
  },
  {
    icon: Target,
    label: 'Symptom Reduction',
    value: 42,
    unit: '%',
    description: 'Average reduction in reported symptoms',
    color: 'secondary',
  },
  {
    icon: Flame,
    label: 'Tracking Streaks',
    value: 85,
    unit: '%',
    description: 'Users maintaining consistent monthly tracking',
    color: 'primary',
  },
  {
    icon: Award,
    label: 'Goal Achievement',
    value: 73,
    unit: '%',
    description: 'Users reaching their health milestones',
    color: 'secondary',
  },
];

export const UserFeedbackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden bg-muted/30" ref={ref}>
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-wide uppercase mb-4 block">
            Real Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Feedback-Driven{' '}
            <span className="text-primary">Progress</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories and measurable outcomes from women who trust Day28 for their health journey.
          </p>
        </motion.div>

        {/* Feedback Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {feedbackCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 relative"
            >
              <Quote className="text-primary/20 absolute top-4 right-4" size={32} />
              <p className="text-foreground text-sm leading-relaxed mb-4 relative z-10">
                "{card.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <div className="text-xs text-muted-foreground mb-1">
                  {card.author} • {card.location}
                </div>
                <div className="flex items-center gap-2 text-xs text-secondary">
                  <CheckCircle2 size={12} />
                  <span>{card.improvement}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Summary Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-card p-8 md:p-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Measurable Health Outcomes
              </h3>
              <p className="text-muted-foreground">
                Data-driven insights from thousands of users across India
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {progressMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
                    metric.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                  }`}>
                    <metric.icon 
                      size={24} 
                      className={metric.color === 'primary' ? 'text-primary' : 'text-secondary'} 
                    />
                  </div>
                  
                  {/* Progress Ring */}
                  <div className="relative inline-flex items-center justify-center mb-3">
                    <svg className="w-24 h-24 -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        fill="none"
                        className="stroke-muted"
                        strokeWidth="6"
                      />
                      <motion.circle
                        cx="48"
                        cy="48"
                        r="40"
                        fill="none"
                        className={metric.color === 'primary' ? 'stroke-primary' : 'stroke-secondary'}
                        strokeWidth="6"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: '0 251.2' }}
                        animate={isInView ? { 
                          strokeDasharray: `${(metric.value / 100) * 251.2} 251.2` 
                        } : {}}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: 'easeOut' }}
                      />
                    </svg>
                    <span className="absolute text-2xl font-bold text-foreground">
                      {metric.value}{metric.unit}
                    </span>
                  </div>

                  <h4 className="font-semibold text-foreground mb-1">{metric.label}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {metric.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-10 pt-6 border-t border-border text-center">
              <p className="text-xs text-muted-foreground">
                Results vary by individual. Consistent tracking over 90+ days yields best outcomes. 
                Consult a healthcare provider for personalized medical advice.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
