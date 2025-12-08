import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Heart, Send, Sparkles, Calendar, BookOpen } from 'lucide-react';

const moodOptions = [
  { emoji: '😊', label: 'Happy', value: 'happy' },
  { emoji: '😌', label: 'Calm', value: 'calm' },
  { emoji: '😔', label: 'Sad', value: 'sad' },
  { emoji: '😤', label: 'Stressed', value: 'stressed' },
  { emoji: '😰', label: 'Anxious', value: 'anxious' },
  { emoji: '😴', label: 'Tired', value: 'tired' },
];

const pastEntries = [
  {
    date: 'Dec 7, 2024',
    mood: '😊',
    entry: 'Feeling great today! Had a productive morning and went for a walk.',
    aiInsight: 'Your positive mood aligns with your regular sleep schedule this week.',
  },
  {
    date: 'Dec 6, 2024',
    mood: '😰',
    entry: 'Work has been overwhelming. Feeling anxious about upcoming deadlines.',
    aiInsight: 'Consider taking short breaks. Anxiety often peaks mid-cycle.',
  },
  {
    date: 'Dec 5, 2024',
    mood: '😌',
    entry: 'Peaceful day. Practiced meditation and felt centered.',
    aiInsight: 'Great to see you maintaining wellness routines!',
  },
];

const Journal = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [journalEntry, setJournalEntry] = useState('');
  const [showAiInsight, setShowAiInsight] = useState(false);
  const [aiResponse, setAiResponse] = useState('');

  const handleSubmit = () => {
    if (!selectedMood || !journalEntry) return;

    // Simulate AI response
    setAiResponse(
      `Thank you for sharing. Based on your ${selectedMood} mood and entry, I notice you might benefit from some relaxation techniques. Your emotional patterns suggest increased stress levels compared to last week. Consider taking a 10-minute break for deep breathing exercises.`
    );
    setShowAiInsight(true);
  };

  const resetForm = () => {
    setSelectedMood('');
    setJournalEntry('');
    setShowAiInsight(false);
    setAiResponse('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Heart size={18} className="text-accent" />
              <span className="text-sm font-medium text-accent">Emotional Wellness</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Emotional <span className="gradient-text">Journal</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Track your emotions, reflect on your day, and receive AI-powered insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Journal Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <BookOpen size={24} className="text-accent" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-foreground">Today's Entry</h2>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} />
                      December 8, 2024
                    </p>
                  </div>
                </div>

                {!showAiInsight ? (
                  <>
                    {/* Mood Selection */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-muted-foreground mb-3">
                        How are you feeling today?
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                        {moodOptions.map((mood) => (
                          <motion.button
                            key={mood.value}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedMood(mood.value)}
                            className={`p-4 rounded-xl border text-center transition-all ${
                              selectedMood === mood.value
                                ? 'bg-accent/20 border-accent/50'
                                : 'bg-card/40 border-border/50 hover:border-accent/30'
                            }`}
                          >
                            <span className="text-2xl mb-1 block">{mood.emoji}</span>
                            <span className="text-xs text-muted-foreground">{mood.label}</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Journal Entry */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-muted-foreground mb-3">
                        What's on your mind?
                      </label>
                      <textarea
                        value={journalEntry}
                        onChange={(e) => setJournalEntry(e.target.value)}
                        placeholder="Write about your day, thoughts, or feelings..."
                        rows={6}
                        className="w-full px-4 py-3.5 bg-card/60 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={handleSubmit}
                      disabled={!selectedMood || !journalEntry}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10">Get AI Insights</span>
                      <Send size={18} className="relative z-10" />
                    </motion.button>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    {/* AI Insight */}
                    <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles size={20} className="text-primary" />
                        <span className="font-semibold text-foreground">AI Insight</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{aiResponse}</p>
                    </div>

                    {/* Summary */}
                    <div className="flex items-center gap-4 p-4 bg-card/40 rounded-xl">
                      <span className="text-3xl">
                        {moodOptions.find((m) => m.value === selectedMood)?.emoji}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">Your mood today</p>
                        <p className="font-medium text-foreground capitalize">{selectedMood}</p>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={resetForm}
                      className="btn-secondary w-full"
                    >
                      Add Another Entry
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Past Entries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-foreground mb-4">Recent Entries</h3>
              {pastEntries.map((entry, index) => (
                <motion.div
                  key={entry.date}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">{entry.date}</span>
                    <span className="text-xl">{entry.mood}</span>
                  </div>
                  <p className="text-sm text-foreground mb-3 line-clamp-2">{entry.entry}</p>
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <p className="text-xs text-muted-foreground flex items-start gap-2">
                      <Sparkles size={12} className="text-primary mt-0.5 flex-shrink-0" />
                      {entry.aiInsight}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Journal;
