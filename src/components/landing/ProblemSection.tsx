import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertCircle, Clock, Heart, Users } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    stat: '70%',
    title: 'Go Undiagnosed',
    description: 'Most women with PCOS remain undiagnosed for years, missing early intervention.',
  },
  {
    icon: AlertCircle,
    stat: '1 in 5',
    title: 'Women Affected',
    description: 'PCOS affects millions of Indian women, often causing silent health struggles.',
  },
  {
    icon: Heart,
    stat: '60%',
    title: 'Mental Health Impact',
    description: 'Emotional challenges like anxiety and mood swings are common but overlooked.',
  },
  {
    icon: Users,
    stat: '90%',
    title: 'Lack Awareness',
    description: 'Limited knowledge about symptoms leads to delayed care and complications.',
  },
];

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wide uppercase mb-4 block">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why PCOS Awareness <span className="gradient-text">Matters</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Millions of women struggle silently. It's time for accessible, judgment-free support.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card-hover p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
                <problem.icon size={24} className="text-primary" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">{problem.stat}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
