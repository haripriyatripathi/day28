import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Droplets, Heart, Sparkles, Moon } from 'lucide-react';
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
    
    if (i >= 1 && i <= 5) {
      day.isPeriod = true;
      day.mood = i <= 2 ? 'low' : 'neutral';
      day.energy = 'low';
      day.symptoms = i === 1 ? ['cramps', 'fatigue'] : i === 3 ? ['mild cramps'] : undefined;
    } else if (i >= 10 && i <= 16) {
      day.isFertile = true;
      day.mood = 'good';
      day.energy = 'high';
      if (i === 14) {
        day.isOvulation = true;
        day.aiInsight = 'Peak fertility day detected. Energy levels typically highest.';
      }
    } else if (i >= 26) {
      day.isPredicted = true;
      day.mood = 'neutral';
      if (i === 26) {
        day.aiInsight = 'Cycle delay detected. Consider logging stress and sleep patterns.';
      }
    } else {
      day.mood = i % 3 === 0 ? 'good' : 'neutral';
      day.energy = i % 4 === 0 ? 'high' : 'medium';
    }
    
    days.push(day);
  }
  return days;
};

const calendarData = generateCalendarData();

export const CycleCalendar = () => {
  const [selectedDay, setSelectedDay] = useState<DayData | null>(calendarData[13]);

  const getMoodIcon = (mood?: string) => {
    switch (mood) {
      case 'good': return '😊';
      case 'neutral': return '😐';
      case 'low': return '😔';
      default: return null;
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Calendar */}
      <div className="lg:col-span-2 glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <ChevronLeft size={20} className="text-muted-foreground" />
          </button>
          <h3 className="text-lg font-semibold text-foreground">December 2024</h3>
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <ChevronRight size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Weekdays */}
        <div className="grid grid-cols-7 gap-1 mb-3">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={i} className="text-center text-xs font-medium text-muted-foreground py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
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
                "aspect-square rounded-lg flex flex-col items-center justify-center relative transition-all border",
                day.isPeriod && "bg-primary/20 border-primary/40",
                day.isFertile && !day.isOvulation && "bg-secondary/20 border-secondary/40",
                day.isOvulation && "bg-secondary/30 border-secondary",
                day.isPredicted && "bg-primary/10 border-dashed border-primary/30",
                !day.isPeriod && !day.isFertile && !day.isPredicted && "border-transparent hover:bg-muted",
                selectedDay?.date === day.date && "ring-2 ring-primary"
              )}
            >
              <span className={cn(
                "text-xs font-medium",
                (day.isPeriod || day.isOvulation) ? "text-foreground" : "text-muted-foreground"
              )}>
                {day.date}
              </span>
              
              <div className="flex gap-0.5 mt-0.5">
                {day.isPeriod && <Droplets size={8} className="text-primary" />}
                {day.isOvulation && <Heart size={8} className="text-secondary" />}
                {day.aiInsight && <Sparkles size={8} className="text-amber-500" />}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-primary/20 border border-primary/40" />
            <span className="text-xs text-muted-foreground">Period</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-secondary/20 border border-secondary/40" />
            <span className="text-xs text-muted-foreground">Fertile</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-secondary/30 border border-secondary" />
            <span className="text-xs text-muted-foreground">Ovulation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded border border-dashed border-primary/30" />
            <span className="text-xs text-muted-foreground">Predicted</span>
          </div>
        </div>
      </div>

      {/* Day Details Panel */}
      <div className="glass-card p-6">
        {selectedDay ? (
          <>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-foreground">Day {selectedDay.date}</h4>
              <span className="text-2xl">{getMoodIcon(selectedDay.mood)}</span>
            </div>

            {/* Day Status */}
            <div className="space-y-3 mb-4">
              {selectedDay.isPeriod && (
                <div className="flex items-center gap-2 p-2 rounded-lg bg-primary/10">
                  <Droplets className="text-primary" size={16} />
                  <span className="text-xs font-medium text-foreground">Period Day</span>
                </div>
              )}
              {selectedDay.isFertile && (
                <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/10">
                  <Heart className="text-secondary" size={16} />
                  <span className="text-xs font-medium text-foreground">
                    {selectedDay.isOvulation ? 'Ovulation Day' : 'Fertile Window'}
                  </span>
                </div>
              )}
              {selectedDay.isPredicted && (
                <div className="flex items-center gap-2 p-2 rounded-lg bg-muted">
                  <Moon className="text-muted-foreground" size={16} />
                  <span className="text-xs font-medium text-foreground">Predicted Period</span>
                </div>
              )}
            </div>

            {/* Energy Level */}
            <div className="mb-4">
              <span className="text-xs text-muted-foreground block mb-2">Energy Level</span>
              <div className="flex gap-1">
                {[1, 2, 3].map((level) => (
                  <div
                    key={level}
                    className={cn(
                      "h-1.5 flex-1 rounded-full",
                      selectedDay.energy === 'high' ? 'bg-secondary' :
                      selectedDay.energy === 'medium' && level <= 2 ? 'bg-primary/60' :
                      selectedDay.energy === 'low' && level === 1 ? 'bg-muted-foreground/40' :
                      'bg-muted'
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Symptoms */}
            {selectedDay.symptoms && selectedDay.symptoms.length > 0 && (
              <div className="mb-4">
                <span className="text-xs text-muted-foreground block mb-2">Symptoms</span>
                <div className="flex flex-wrap gap-1">
                  {selectedDay.symptoms.map((symptom) => (
                    <span
                      key={symptom}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-primary/10 text-primary"
                    >
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* AI Insight */}
            {selectedDay.aiInsight && (
              <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500/10 to-primary/10 border border-amber-500/20">
                <div className="flex items-start gap-2">
                  <Sparkles className="text-amber-500 flex-shrink-0 mt-0.5" size={14} />
                  <div>
                    <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 block mb-1">
                      AI Insight
                    </span>
                    <p className="text-xs text-foreground leading-relaxed">
                      {selectedDay.aiInsight}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center py-8">
            <p className="text-xs text-muted-foreground">Select a day to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};
