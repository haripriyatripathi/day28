import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Activity, 
  Calendar, 
  Heart, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle,
  ArrowRight,
  Brain
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Welcome Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Welcome back, <span className="gradient-text">Sarah</span>
            </h1>
            <p className="text-muted-foreground">Here's your health overview for today</p>
          </motion.div>

          {/* Main Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {/* PCOS Risk Snapshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card-hover p-6 lg:col-span-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Activity size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">PCOS Risk</h3>
                    <p className="text-sm text-muted-foreground">Last updated today</p>
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <svg className="w-32 h-32" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="hsl(var(--muted))"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeDasharray={`${0.35 * 283} 283`}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(335 100% 65%)" />
                        <stop offset="100%" stopColor="hsl(340 100% 76%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-foreground">35%</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Low to Moderate Risk</p>
              </div>

              <Link to="/screener">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-secondary py-3 text-sm flex items-center justify-center gap-2"
                >
                  Retake Screening
                  <ArrowRight size={16} />
                </motion.button>
              </Link>
            </motion.div>

            {/* Cycle Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-secondary/10">
                  <Calendar size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Cycle Overview</h3>
                  <p className="text-sm text-muted-foreground">Day 14 of 28</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Current Phase</span>
                  <span className="text-foreground font-medium">Ovulation</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-gradient-to-r from-secondary to-primary rounded-full" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Next Period</span>
                  <span className="text-foreground font-medium">14 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Fertility Window</span>
                  <span className="text-accent font-medium flex items-center gap-1">
                    <CheckCircle size={14} />
                    Active
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Emotional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Heart size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Emotional Summary</h3>
                  <p className="text-sm text-muted-foreground">This week</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">😊</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">Mood Score</span>
                      <span className="text-sm font-medium text-foreground">7.2/10</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[72%] bg-gradient-to-r from-accent to-primary rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="text-center p-2 bg-card/40 rounded-lg">
                    <span className="text-lg">😌</span>
                    <p className="text-xs text-muted-foreground mt-1">Calm</p>
                  </div>
                  <div className="text-center p-2 bg-card/40 rounded-lg">
                    <span className="text-lg">😤</span>
                    <p className="text-xs text-muted-foreground mt-1">Stressed</p>
                  </div>
                  <div className="text-center p-2 bg-card/40 rounded-lg">
                    <span className="text-lg">😴</span>
                    <p className="text-xs text-muted-foreground mt-1">Tired</p>
                  </div>
                </div>

                <Link to="/journal">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-secondary py-3 text-sm flex items-center justify-center gap-2 mt-2"
                  >
                    Add Entry
                    <ArrowRight size={16} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* AI Insights */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Brain size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">AI Insight</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Based on your recent entries, your stress levels seem higher than usual. 
                    Consider trying the breathing exercises in our wellness section.
                  </p>
                  <div className="flex gap-3">
                    <Link to="/journal">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-primary py-2.5 px-5 text-sm"
                      >
                        <span className="relative z-10">Learn More</span>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming */}
            <div className="glass-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Upcoming Reminders</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-card/40 rounded-xl">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <AlertCircle size={18} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Period due in 14 days</p>
                    <p className="text-xs text-muted-foreground">Track symptoms starting next week</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-card/40 rounded-xl">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <TrendingUp size={18} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Weekly check-in</p>
                    <p className="text-xs text-muted-foreground">Complete your emotional wellness survey</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
