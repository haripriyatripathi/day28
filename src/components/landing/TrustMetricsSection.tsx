import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  Stethoscope, 
  Clock, 
  FileCheck, 
  Lock, 
  Eye, 
  EyeOff, 
  UserCheck,
  MapPin,
  GraduationCap,
  Users,
  Building
} from 'lucide-react';

const medicalTrustMetrics = [
  {
    icon: Stethoscope,
    value: '92%',
    label: 'AI Insights Reviewed',
    description: 'Of AI insights are reviewed by certified gynecologists',
  },
  {
    icon: UserCheck,
    value: '150+',
    label: 'Verified Doctors',
    description: 'Onboarded specialists across major Indian cities',
  },
  {
    icon: Clock,
    value: '<24 hrs',
    label: 'Response Time',
    description: 'Average doctor response for consultations',
  },
  {
    icon: FileCheck,
    value: 'ICMR',
    label: 'Guidelines Followed',
    description: 'Aligned with international PCOS standards',
  },
];

const privacyMetrics = [
  {
    icon: Shield,
    title: 'Zero Data Sold',
    description: 'Your health data is never sold or shared with advertisers. Ever.',
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All personal health information is encrypted at rest and in transit.',
  },
  {
    icon: EyeOff,
    title: 'Anonymous Mode',
    description: 'Use the platform without revealing your identity if you prefer.',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description: 'You control your data. Download or delete anytime.',
  },
];

const communityMetrics = [
  { icon: MapPin, value: '12+', label: 'Indian Cities', suffix: 'reached' },
  { icon: GraduationCap, value: '5,000+', label: 'College Students', suffix: 'onboarded' },
  { icon: Users, value: '50,000+', label: 'Active Users', suffix: 'monthly' },
  { icon: Building, value: '25+', label: 'Awareness Sessions', suffix: 'conducted' },
];

export const TrustMetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden bg-background" ref={ref}>
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-wide uppercase mb-4 block">
            Trust & Safety
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built on{' '}
            <span className="text-primary">Medical Credibility</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AI-assisted, doctor-verified. Your health data stays private, your care stays personal.
          </p>
        </motion.div>

        {/* Medical Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Medical Trust Metrics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicalTrustMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <metric.icon className="text-primary" size={24} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{metric.value}</div>
                <div className="text-sm font-semibold text-foreground mb-2">{metric.label}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Privacy & Data Trust */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="glass-card p-8 md:p-10 bg-gradient-to-br from-secondary/5 to-transparent">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Privacy-First Architecture
              </h3>
              <p className="text-muted-foreground">
                Your health data is private. Never sold. Never shared.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {privacyMetrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-3">
                    <metric.icon className="text-secondary" size={20} />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{metric.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Community & Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Trusted by Women Across India
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {communityMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <metric.icon className="mx-auto text-primary mb-3" size={24} />
                <div className="text-2xl md:text-3xl font-bold text-foreground">{metric.value}</div>
                <div className="text-sm text-foreground font-medium">{metric.label}</div>
                <div className="text-xs text-muted-foreground">{metric.suffix}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Messaging Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20"
        >
          <div className="text-center">
            <p className="text-foreground font-medium mb-2">
              AI-assisted. Doctor-verified. Your health, your control.
            </p>
            <p className="text-sm text-muted-foreground">
              This is not a final diagnosis. Consult a doctor for confirmation. Results improve with consistent tracking.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
