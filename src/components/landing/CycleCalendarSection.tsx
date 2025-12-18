import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Droplets, Heart, Sparkles, Moon, AlertCircle, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DayData {
  date: number;
  isPeriod?: boolean;
  isFertile?: boolean;
  isOvulation?: boolean;
  isPredicted?: boolean;
  mood?: 'good' | 'neutral' | 'low';
  energy?: 'high' | 'medium' | 'low';
  symptoms?: string[];
  aiInsight?: string;
}

const generateCalendarData = (): DayData[] => {
  const days: DayData[] = [];
  for (let i = 1; i <= 28; i++) {
    const day: DayData = { date: i };
    
    // Period days (1-5)
    if (i >= 1 && i <= 5) {
      day.isPeriod = true;
      day.mood = i <= 2 ? 'low' : 'neutral';
      day.energy = 'low';
      day.symptoms = i === 1 ? ['cramps', 'fatigue'] : i === 3 ? ['mild cramps'] : undefined;
    }
    // Fertile window (10-16)
    else if (i >= 10 && i <= 16) {
      day.isFertile = true;
      day.mood = 'good';
      day.energy = 'high';
      if (i === 14) {
        day.isOvulation = true;
        day.aiInsight = 'Peak fertility day detected. Energy levels typically highest.';
      }
    }
    // Predicted period (26-28)
    else if (i >= 26) {
      day.isPredicted = true;
      day.mood = 'neutral';
      if (i === 26) {
        day.aiInsight = 'Cycle delay detected. Consider logging stress and sleep patterns.';
      }
    }
    // Regular days
    else {
      day.mood = i % 3 === 0 ? 'good' : 'neutral';
      day.energy = i % 4 === 0 ? 'high' : 'medium';
    }
    
    days.push(day);
  }
  return days;
};

const calendarData = generateCalendarData();

export const CycleCalendarSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedDay, setSelectedDay] = useState<DayData | null>(calendarData[13]); // Day 14

  const getMoodIcon = (mood?: string) => {
    switch (mood) {
      case 'good': return '😊';
      case 'neutral': return '😐';
      case 'low': return '😔';
      default: return null;
    }
  };

  const getEnergyColor = (energy?: string) => {
    switch (energy) {
      case 'high': return 'bg-secondary';
      case 'medium': return 'bg-primary/60';
      case 'low': return 'bg-muted-foreground/40';
      default: return 'bg-muted';
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background" ref={ref}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-wide uppercase mb-4 block">
            Cycle Intelligence
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Personal{' '}
            <span className="text-primary">Cycle Calendar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Track your menstrual cycle with AI-powered insights. Understand patterns, predict changes, and take control of your health.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-6 md:p-8">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <ChevronLeft size={20} className="text-muted-foreground" />
                </button>
                <h3 className="text-xl font-semibold text-foreground">December 2024</h3>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <ChevronRight size={20} className="text-muted-foreground" />
                </button>
              </div>

              {/* Weekdays */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-2">
                {/* Empty cells for start of month */}
                {[...Array(6)].map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}
                
                {calendarData.map((day) => (
                  <motion.button
                    key={day.date}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDay(day)}
                    className={cn(
                      "aspect-square rounded-xl flex flex-col items-center justify-center relative transition-all border-2",
                      day.isPeriod && "bg-primary/20 border-primary/40",
                      day.isFertile && !day.isOvulation && "bg-secondary/20 border-secondary/40",
                      day.isOvulation && "bg-secondary/30 border-secondary ring-2 ring-secondary/30",
                      day.isPredicted && "bg-primary/10 border-dashed border-primary/30",
                      !day.isPeriod && !day.isFertile && !day.isPredicted && "border-transparent hover:bg-muted",
                      selectedDay?.date === day.date && "ring-2 ring-primary"
                    )}
                  >
                    <span className={cn(
                      "text-sm font-medium",
                      (day.isPeriod || day.isOvulation) ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {day.date}
                    </span>
                    
                    {/* Indicators */}
                    <div className="flex gap-0.5 mt-1">
                      {day.isPeriod && <Droplets size={10} className="text-primary" />}
                      {day.isOvulation && <Heart size={10} className="text-secondary" />}
                      {day.aiInsight && <Sparkles size={10} className="text-amber-500" />}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-primary/20 border-2 border-primary/40" />
                  <span className="text-sm text-muted-foreground">Period</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-secondary/20 border-2 border-secondary/40" />
                  <span className="text-sm text-muted-foreground">Fertile Window</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-secondary/30 border-2 border-secondary" />
                  <span className="text-sm text-muted-foreground">Ovulation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border-2 border-dashed border-primary/30" />
                  <span className="text-sm text-muted-foreground">Predicted</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Day Details Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card p-6 h-full">
              {selectedDay ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-foreground">Day {selectedDay.date}</h4>
                    <span className="text-3xl">{getMoodIcon(selectedDay.mood)}</span>
                  </div>

                  {/* Day Status */}
                  <div className="space-y-4 mb-6">
                    {selectedDay.isPeriod && (
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10">
                        <Droplets className="text-primary" size={20} />
                        <span className="text-sm font-medium text-foreground">Period Day</span>
                      </div>
                    )}
                    {selectedDay.isFertile && (
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/10">
                        <Heart className="text-secondary" size={20} />
                        <span className="text-sm font-medium text-foreground">
                          {selectedDay.isOvulation ? 'Ovulation Day' : 'Fertile Window'}
                        </span>
                      </div>
                    )}
                    {selectedDay.isPredicted && (
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                        <Moon className="text-muted-foreground" size={20} />
                        <span className="text-sm font-medium text-foreground">Predicted Period</span>
                      </div>
                    )}
                  </div>

                  {/* Energy Level */}
                  <div className="mb-6">
                    <span className="text-sm text-muted-foreground block mb-2">Energy Level</span>
                    <div className="flex gap-1">
                      {[1, 2, 3].map((level) => (
                        <div
                          key={level}
                          className={cn(
                            "h-2 flex-1 rounded-full",
                            selectedDay.energy === 'high' ? 'bg-secondary' :
                            selectedDay.energy === 'medium' && level <= 2 ? 'bg-primary/60' :
                            selectedDay.energy === 'low' && level === 1 ? 'bg-muted-foreground/40' :
                            'bg-muted'
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 block capitalize">
                      {selectedDay.energy || 'Not logged'}
                    </span>
                  </div>

                  {/* Symptoms */}
                  {selectedDay.symptoms && selectedDay.symptoms.length > 0 && (
                    <div className="mb-6">
                      <span className="text-sm text-muted-foreground block mb-2">Symptoms</span>
                      <div className="flex flex-wrap gap-2">
                        {selectedDay.symptoms.map((symptom) => (
                          <span
                            key={symptom}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {symptom}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* AI Insight */}
                  {selectedDay.aiInsight && (
                    <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-primary/10 border border-amber-500/20">
                      <div className="flex items-start gap-3">
                        <Sparkles className="text-amber-500 flex-shrink-0 mt-0.5" size={18} />
                        <div>
                          <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 block mb-1">
                            AI Insight
                          </span>
                          <p className="text-sm text-foreground leading-relaxed">
                            {selectedDay.aiInsight}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <AlertCircle className="text-muted-foreground mb-3" size={32} />
                  <p className="text-muted-foreground">Select a day to view details</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Cycle Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {[
            { label: 'Cycle Length', value: '28 days', icon: TrendingUp, change: 'Regular' },
            { label: 'Period Duration', value: '5 days', icon: Droplets, change: 'Normal' },
            { label: 'Next Period', value: 'Dec 26', icon: Moon, change: 'In 8 days' },
            { label: 'Cycle Health', value: '92%', icon: Heart, change: '+5% this month' },
          ].map((stat, index) => (
            <div key={stat.label} className="glass-card p-4 text-center">
              <stat.icon className="mx-auto mb-2 text-primary" size={20} />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
              <div className="text-xs text-secondary mt-1">{stat.change}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
