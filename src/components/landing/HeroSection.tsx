import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, MapPin, Users } from 'lucide-react';
import logo from '@/assets/day28-logo.png';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Clean soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex justify-center mb-8"
          >
            <img 
              src={logo} 
              alt="DAY28" 
              className="h-20 md:h-24 w-auto rounded-xl shadow-md"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground"
          >
            AI-Powered PCOS Care
            <br />
            <span className="text-primary">for Indian Women</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Early screening, cycle insights, and access to verified gynecologists — all in one secure platform.
          </motion.p>

          {/* Trust Metric */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
            className="text-sm text-primary font-medium mb-10"
          >
            Used by 5,000+ women across India • Built with guidance from gynecologists
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col items-center mb-14"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3">
              <Link to="/screener">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="btn-primary group flex items-center gap-2 text-base px-6 py-3"
                >
                  <span>Begin Free Assessment</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
              <Link to="/doctors">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="btn-secondary flex items-center gap-2 px-6 py-3"
                >
                  <MapPin size={18} />
                  <span>Find Nearby Specialist</span>
                </motion.button>
              </Link>
            </div>
            {/* CTA Microcopy */}
            <p className="text-xs text-muted-foreground">
              No credit card required • Takes under 5 minutes
            </p>
          </motion.div>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-primary/10">
                <Shield size={20} className="text-primary" />
              </div>
              <span className="text-sm text-muted-foreground font-medium">Clinically designed workflows</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-secondary/10">
                <Lock size={20} className="text-secondary" />
              </div>
              <span className="text-sm text-muted-foreground font-medium">Privacy-first data handling</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-primary/10">
                <Users size={20} className="text-primary" />
              </div>
              <span className="text-sm text-muted-foreground font-medium">India-specific health insights</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
