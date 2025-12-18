import { motion } from 'framer-motion';
import { TrendingUp, Target, Flame, Award, Quote, CheckCircle2 } from 'lucide-react';

const progressMetrics = [
  {
    icon: TrendingUp,
    label: 'Cycle Regularity',
    value: 78,
    description: 'Improved since tracking',
    color: 'primary',
  },
  {
    icon: Target,
    label: 'Symptom Reduction',
    value: 42,
    description: 'Average decrease',
    color: 'secondary',
  },
  {
    icon: Flame,
    label: 'Tracking Streak',
    value: 23,
    description: 'Days consecutive',
    color: 'primary',
    isStreak: true,
  },
];

const feedbackCards = [
  {
    quote: "My cycles became predictable in 3 months.",
    improvement: "Cycle regularity +40%",
  },
  {
    quote: "Doctor consultation felt personal and safe.",
    improvement: "Connected in 24 hours",
  },
];

export const ProgressWidgets = () => {
  return (
    <div className="space-y-6">
      {/* Progress Summary Card */}
      <div className="glass-card p-6">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Award className="text-primary" size={18} />
          Your Progress
        </h3>
        
        <div className="space-y-4">
          {progressMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className={`p-2 rounded-lg ${
                metric.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
              }`}>
                <metric.icon 
                  size={16} 
                  className={metric.color === 'primary' ? 'text-primary' : 'text-secondary'} 
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-foreground">{metric.label}</span>
                  <span className="text-sm font-bold text-foreground">
                    {metric.value}{metric.isStreak ? '' : '%'}
                  </span>
                </div>
                {!metric.isStreak && (
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.value}%` }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      className={`h-full rounded-full ${
                        metric.color === 'primary' 
                          ? 'bg-gradient-to-r from-primary to-primary/60' 
                          : 'bg-gradient-to-r from-secondary to-secondary/60'
                      }`}
                    />
                  </div>
                )}
                <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* User Feedback Panel */}
      <div className="glass-card p-6">
        <h3 className="font-semibold text-foreground mb-4 text-sm">
          What Users Say
        </h3>
        
        <div className="space-y-3">
          {feedbackCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-3 rounded-lg bg-card/50 border border-border/30 relative"
            >
              <Quote className="text-primary/10 absolute top-2 right-2" size={20} />
              <p className="text-xs text-foreground leading-relaxed mb-2">
                "{card.quote}"
              </p>
              <div className="flex items-center gap-1 text-[10px] text-secondary">
                <CheckCircle2 size={10} />
                <span>{card.improvement}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
