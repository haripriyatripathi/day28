import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Activity, FileText, TrendingUp, Shield, CheckCircle } from 'lucide-react';

const metrics = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Women Tracked',
    description: 'Active users across India',
  },
  {
    icon: Activity,
    value: '1.2M+',
    label: 'Cycles Analyzed',
    description: 'Menstrual cycles monitored',
  },
  {
    icon: FileText,
    value: '85,000+',
    label: 'Reports Generated',
    description: 'Health assessments completed',
  },
  {
    icon: TrendingUp,
    value: '73%',
    label: 'Symptom Improvement',
    description: 'Users reporting better outcomes',
  },
];

export const MetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 relative overflow-hidden bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm tracking-wide uppercase mb-4 block">
            Platform Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted Health <span className="text-primary">Analytics</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real data from real women — helping improve healthcare outcomes across India
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <metric.icon size={24} className="text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{metric.value}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{metric.label}</div>
              <div className="text-xs text-muted-foreground">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield size={16} className="text-secondary" />
            <span>Data Privacy Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle size={16} className="text-secondary" />
            <span>Clinically Backed</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield size={16} className="text-secondary" />
            <span>Secure and Confidential</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
