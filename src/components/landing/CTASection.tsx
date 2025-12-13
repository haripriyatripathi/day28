import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Heart, MapPin } from 'lucide-react';

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden bg-muted/30" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center glass-card p-10 md:p-16 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
        >
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Shield size={16} className="text-primary" />
              <span>Free Assessment</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Clock size={16} className="text-secondary" />
              <span>Takes 3 Minutes</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Heart size={16} className="text-primary" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin size={16} className="text-secondary" />
              <span>Available Pan-India</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Ready to Take Control of{' '}
            <span className="gradient-text-rose">Your Health?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Join <span className="font-semibold text-foreground">50,000+ Indian women</span> who have found clarity, 
            support, and better health outcomes with DAY28. 
            Your journey to wellness starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/screener">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary group flex items-center gap-2 text-base"
              >
                <span className="relative z-10">अभी मुफ्त जांच करें</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="/doctors">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary"
              >
                Find a Specialist Near You
              </motion.button>
            </Link>
          </motion.div>

          {/* Additional info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            No credit card required • Works on all devices • Hindi & English support
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
