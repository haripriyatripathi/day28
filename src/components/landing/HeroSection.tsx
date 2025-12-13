import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Shield, Heart, Award, Stethoscope, Users, Activity } from 'lucide-react';
import logo from '@/assets/day28-logo.png';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Light background with subtle rose gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-rose-light/30 to-background" />

      {/* Soft floating shapes */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
      
      {/* Medical elements - subtle */}
      <div className="absolute top-24 right-16 opacity-10">
        <Stethoscope size={100} className="text-secondary" />
      </div>
      <div className="absolute bottom-32 left-16 opacity-10">
        <Activity size={80} className="text-primary" />
      </div>

      {/* Subtle medical cross pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F05A8A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex justify-center mb-6"
          >
            <img 
              src={logo} 
              alt="DAY28" 
              className="h-24 md:h-32 w-auto rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Healthcare Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="health-badge mb-8"
          >
            <Sparkles size={16} />
            <span>भारत की पहली AI-Powered PCOS Health Platform</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">India's Trusted</span>
            <br />
            <span className="gradient-text-rose">PCOS Care & Emotional</span>
            <br />
            <span className="gradient-text-secondary">Wellness Platform</span>
          </motion.h1>

          {/* Subtitle - India focused */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Designed for Indian women — from college students to working professionals. 
            Get <span className="font-semibold text-primary">free PCOS screening</span>, track your cycle, 
            and connect with <span className="font-semibold text-secondary">verified gynecologists</span> across India.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link to="/screener">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="btn-primary group flex items-center gap-2 text-base"
              >
                <span className="relative z-10">मुफ्त PCOS जांच शुरू करें</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>
            <Link to="/doctors">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="btn-secondary flex items-center gap-2"
              >
                Find Specialist Near You
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Stats - India focused */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10"
          >
            <div className="glass-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50,000+</div>
              <div className="text-sm text-muted-foreground">Indian Women Helped</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Verified Doctors</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">4.8★</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <div className="p-2 rounded-lg bg-primary/10">
                <Shield size={18} className="text-primary" />
              </div>
              <span className="text-sm font-medium">100% Private & Secure</span>
            </div>
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Heart size={18} className="text-secondary" />
              </div>
              <span className="text-sm font-medium">FOGSI Approved Protocol</span>
            </div>
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award size={18} className="text-primary" />
              </div>
              <span className="text-sm font-medium">Clinically Validated AI</span>
            </div>
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Users size={18} className="text-secondary" />
              </div>
              <span className="text-sm font-medium">Available in Hindi & English</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
