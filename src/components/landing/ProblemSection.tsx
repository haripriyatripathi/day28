import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertCircle, Clock, Heart, Users, TrendingUp, MapPin } from 'lucide-react';

const problems = [
  {
    icon: TrendingUp,
    stat: '2 करोड़+',
    title: 'Affected in India',
    description: 'Over 20 million Indian women live with PCOS, yet most remain unaware of their condition.',
    color: 'primary',
  },
  {
    icon: Clock,
    stat: '70%',
    title: 'Delayed Diagnosis',
    description: 'Most women visit 3+ doctors before getting correctly diagnosed, losing precious years.',
    color: 'secondary',
  },
  {
    icon: Heart,
    stat: '65%',
    title: 'Mental Health Impact',
    description: 'Anxiety, depression, and mood disorders are common but rarely discussed or treated.',
    color: 'primary',
  },
  {
    icon: MapPin,
    stat: '80%',
    title: 'Limited Access',
    description: 'Women in tier-2 and tier-3 cities struggle to find qualified PCOS specialists.',
    color: 'secondary',
  },
];

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden bg-muted/30" ref={ref}>
      {/* Background decoration */}
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
          <span className="text-secondary font-semibold text-sm tracking-wide uppercase mb-4 block">
            भारत में PCOS की स्थिति
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why India Needs{' '}
            <span className="gradient-text-rose">Better PCOS Care</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            From bustling metros to small towns, millions of Indian women struggle silently. 
            It's time for accessible, affordable, and judgment-free healthcare.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="stat-card group"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 ${
                problem.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
              }`}>
                <problem.icon size={26} className={
                  problem.color === 'primary' ? 'text-primary' : 'text-secondary'
                } />
              </div>
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                problem.color === 'primary' ? 'text-primary' : 'text-secondary'
              }`}>{problem.stat}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass-card p-8 md:p-10 text-center bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            You're Not Alone in This Journey
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            DAY28 was created by women, for women. We understand the challenges, 
            the stigma, and the need for compassionate care that respects your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
