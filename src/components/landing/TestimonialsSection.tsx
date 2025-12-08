import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import snehaImg from '@/assets/testimonial-sneha.jpg';
import riyaImg from '@/assets/testimonial-riya.jpg';
import aishaImg from '@/assets/testimonial-aisha.jpg';

const testimonials = [
  {
    name: 'Sneha',
    age: 19,
    location: 'Delhi University Student',
    image: snehaImg,
    rating: 5,
    quote: 'DAY28 helped me understand my symptoms when I was too confused and embarrassed to ask anyone. The AI screening gave me clarity and confidence to talk to my doctor about PCOS.',
  },
  {
    name: 'Riya',
    age: 21,
    location: 'Software Engineer, Mumbai',
    image: riyaImg,
    rating: 5,
    quote: 'The emotional wellness journal changed my stress management completely. I finally see the patterns between my work stress and my cycle. This app is a game changer for women\'s health!',
  },
  {
    name: 'Aisha',
    age: 24,
    location: 'Marketing Professional, Bangalore',
    image: aishaImg,
    rating: 5,
    quote: 'Finally found clarity about PCOS after years of confusion. The personalized insights and doctor recommendations made my health journey so much easier and less intimidating.',
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from women who found clarity, support, and better health with DAY28.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 md:p-12"
              >
                <Quote size={40} className="text-primary/20 mb-6" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-sm" />
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/30 relative"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}, {testimonials[currentIndex].age}
                    </h4>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors shadow-sm"
              >
                <ChevronLeft size={20} />
              </motion.button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors shadow-sm"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
