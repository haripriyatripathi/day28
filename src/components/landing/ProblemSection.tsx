import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Clock, Heart, MapPin } from 'lucide-react';

const insights = [
  {
    icon: TrendingUp,
    stat: '20+ Million',
    title: 'Women Affected',
    description: 'PCOS impacts a large portion of India\'s female population, many undiagnosed.',
    color: 'primary',
  },
  {
    icon: Clock,
    stat: '70%',
    title: 'Delayed Diagnosis',
    description: 'Women often consult multiple doctors before receiving clarity.',
    color: 'secondary',
  },
  {
    icon: Heart,
    stat: '65%',
    title: 'Mental Health Impact',
    description: 'Anxiety, stress, and mood disorders commonly go unaddressed.',
    color: 'primary',
  },
  {
    icon: MapPin,
    stat: '80%',
    title: 'Limited Access',
    description: 'Tier-2 and Tier-3 cities lack reliable PCOS-focused care.',
    color: 'secondary',
  },
];

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden bg-background" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-wide uppercase mb-4 block">
            PCOS Landscape in India
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why India Needs Accessible PCOS Care
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Across metros, small towns, and rural regions, millions of Indian women face delayed diagnosis, 
            limited access to specialists, and mental health challenges related to PCOS. 
            Early, affordable, and stigma-free care is critical.
          </p>
        </motion.div>

        {/* Key Insights - Text Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="flex items-start gap-4"
            >
              <div className={`flex-shrink-0 p-2.5 rounded-lg ${
                insight.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
              }`}>
                <insight.icon size={22} className={
                  insight.color === 'primary' ? 'text-primary' : 'text-secondary'
                } />
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className={`text-xl font-bold ${
                    insight.color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`}>{insight.stat}</span>
                  <span className="text-foreground font-semibold">{insight.title}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{insight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            <span className="font-semibold text-foreground">You're not alone in this journey.</span>{' '}
            DAY28 was created by women, for women — with compassionate care that respects your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
