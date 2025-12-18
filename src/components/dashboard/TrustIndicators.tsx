import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  UserCheck, 
  Clock, 
  FileCheck, 
  Shield, 
  Lock, 
  EyeOff 
} from 'lucide-react';

const medicalMetrics = [
  { icon: Stethoscope, value: '92%', label: 'AI insights reviewed by gynecologists' },
  { icon: UserCheck, value: '150+', label: 'Verified doctors onboarded' },
  { icon: Clock, value: '<24 hrs', label: 'Average doctor response time' },
  { icon: FileCheck, value: 'ICMR', label: 'Clinical guidelines followed' },
];

const privacyIndicators = [
  { icon: Shield, label: 'Zero data sold' },
  { icon: Lock, label: 'E2E encryption' },
  { icon: EyeOff, label: 'Anonymous mode active' },
];

export const TrustIndicators = () => {
  return (
    <div className="glass-card p-6">
      <h3 className="font-semibold text-foreground mb-4 text-sm">
        Trust & Safety Metrics
      </h3>

      {/* Medical Trust Metrics */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {medicalMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-3 rounded-lg bg-card/50 border border-border/30"
          >
            <metric.icon className="mx-auto text-primary mb-1.5" size={16} />
            <div className="text-lg font-bold text-foreground">{metric.value}</div>
            <p className="text-[10px] text-muted-foreground leading-tight">{metric.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Privacy Indicators */}
      <div className="pt-4 border-t border-border">
        <div className="flex flex-wrap gap-2">
          {privacyIndicators.map((indicator, index) => (
            <motion.div
              key={indicator.label}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-secondary/10 border border-secondary/20"
            >
              <indicator.icon size={10} className="text-secondary" />
              <span className="text-[10px] text-foreground">{indicator.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-4 pt-3 border-t border-border">
        <p className="text-[10px] text-muted-foreground leading-relaxed">
          AI-assisted insights are reviewed by certified doctors. This is not a final diagnosis. 
          Results improve with consistent tracking.
        </p>
      </div>
    </div>
  );
};
