import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CycleCalendar } from '@/components/dashboard/CycleCalendar';
import { ProgressWidgets } from '@/components/dashboard/ProgressWidgets';
import { TrustIndicators } from '@/components/dashboard/TrustIndicators';
import { 
  Activity, 
  Heart, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle,
  ArrowRight,
  Brain,
  BarChart3,
  Calendar
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
            className="mb-8"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
              Welcome back, <span className="text-primary">Sarah</span>
            </h1>
            <p className="text-muted-foreground text-sm">Here's your health overview for today</p>
          </motion.div>

          {/* Main Grid Layout */}
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Quick Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {/* PCOS Risk */}
                <div className="glass-card p-4 text-center">
                  <Activity size={18} className="mx-auto text-primary mb-2" />
                  <div className="text-2xl font-bold text-foreground">35%</div>
                  <div className="text-xs text-muted-foreground">PCOS Risk</div>
                  <div className="text-[10px] text-secondary mt-1">Low-Moderate</div>
                </div>

                {/* Cycle Day */}
                <div className="glass-card p-4 text-center">
                  <Calendar size={18} className="mx-auto text-secondary mb-2" />
                  <div className="text-2xl font-bold text-foreground">Day 14</div>
                  <div className="text-xs text-muted-foreground">of 28</div>
                  <div className="text-[10px] text-secondary mt-1">Ovulation Phase</div>
                </div>

                {/* Mood Score */}
                <div className="glass-card p-4 text-center">
                  <Heart size={18} className="mx-auto text-primary mb-2" />
                  <div className="text-2xl font-bold text-foreground">7.2</div>
                  <div className="text-xs text-muted-foreground">Mood Score</div>
                  <div className="text-[10px] text-secondary mt-1">This week</div>
                </div>

                {/* Next Period */}
                <div className="glass-card p-4 text-center">
                  <TrendingUp size={18} className="mx-auto text-secondary mb-2" />
                  <div className="text-2xl font-bold text-foreground">14</div>
                  <div className="text-xs text-muted-foreground">Days to period</div>
                  <div className="text-[10px] text-secondary mt-1">Dec 26</div>
                </div>
              </motion.div>

              {/* Cycle Calendar Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  Cycle Calendar
                </h2>
                <CycleCalendar />
              </motion.div>

              {/* Symptom Trends Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <BarChart3 size={18} className="text-secondary" />
                    <h3 className="font-semibold text-foreground">Symptom Trends</h3>
                    <span className="text-xs text-muted-foreground">Last 30 days</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { name: 'Fatigue', value: 45, color: 'primary' },
                    { name: 'Bloating', value: 32, color: 'secondary' },
                    { name: 'Mood Swings', value: 58, color: 'primary' },
                    { name: 'Acne', value: 28, color: 'secondary' },
                  ].map((symptom, index) => (
                    <div key={symptom.name} className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground w-20">{symptom.name}</span>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${symptom.value}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className={`h-full rounded-full ${
                            symptom.color === 'primary' 
                              ? 'bg-gradient-to-r from-primary to-primary/60'
                              : 'bg-gradient-to-r from-secondary to-secondary/60'
                          }`}
                        />
                      </div>
                      <span className="text-xs font-medium text-foreground w-8 text-right">{symptom.value}%</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* AI Insights & Reminders Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {/* AI Insights */}
                <div className="glass-card p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Brain size={18} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-sm mb-2">AI Health Insight</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                        Based on your recent entries, your stress levels seem higher than usual. 
                        Consider trying breathing exercises in our wellness section.
                      </p>
                      <Link to="/journal">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="btn-primary py-2 px-4 text-xs"
                        >
                          <span className="relative z-10">Learn More</span>
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Reminders */}
                <div className="glass-card p-5">
                  <h3 className="font-semibold text-foreground text-sm mb-3">Upcoming Reminders</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-card/40 rounded-lg border border-border/30">
                      <AlertCircle size={14} className="text-primary" />
                      <div className="flex-1">
                        <p className="text-xs font-medium text-foreground">Period due in 14 days</p>
                        <p className="text-[10px] text-muted-foreground">Track symptoms starting next week</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-card/40 rounded-lg border border-border/30">
                      <CheckCircle size={14} className="text-secondary" />
                      <div className="flex-1">
                        <p className="text-xs font-medium text-foreground">Weekly check-in</p>
                        <p className="text-[10px] text-muted-foreground">Complete emotional wellness survey</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar Widgets */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ProgressWidgets />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <TrustIndicators />
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-card p-4"
              >
                <h3 className="font-semibold text-foreground text-sm mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <Link to="/screener">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full btn-secondary py-2 text-xs flex items-center justify-center gap-2"
                    >
                      Retake Screening
                      <ArrowRight size={12} />
                    </motion.button>
                  </Link>
                  <Link to="/journal">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full btn-secondary py-2 text-xs flex items-center justify-center gap-2"
                    >
                      Add Journal Entry
                      <ArrowRight size={12} />
                    </motion.button>
                  </Link>
                  <Link to="/doctors">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full btn-primary py-2 text-xs flex items-center justify-center gap-2"
                    >
                      <span className="relative z-10">Book Specialist</span>
                      <ArrowRight size={12} className="relative z-10" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
