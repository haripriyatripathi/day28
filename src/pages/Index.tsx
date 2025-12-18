import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { CTASection } from '@/components/landing/CTASection';
import { MetricsSection } from '@/components/landing/MetricsSection';
import { AIInsightsSection } from '@/components/landing/AIInsightsSection';
import { CycleCalendarSection } from '@/components/landing/CycleCalendarSection';
import { UserFeedbackSection } from '@/components/landing/UserFeedbackSection';
import { TrustMetricsSection } from '@/components/landing/TrustMetricsSection';
import { WhyWomenTrustSection } from '@/components/landing/WhyWomenTrustSection';

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <main>
        <HeroSection />
        <MetricsSection />
        <CycleCalendarSection />
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TrustMetricsSection />
        <WhyWomenTrustSection />
        <AIInsightsSection />
        <UserFeedbackSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
