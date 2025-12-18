import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Shield, MapPin, RefreshCw, Stethoscope, Award, CheckCircle } from 'lucide-react';

const trustReasons = [
  {
    icon: Stethoscope,
    title: 'Built with Indian Doctors',
    description: 'Our clinical workflows are designed in collaboration with gynecologists and endocrinologists practicing in India.',
  },
  {
    icon: MapPin,
    title: 'Designed for Indian Lifestyles',
    description: 'We understand the unique challenges faced by Indian women — from cultural stigma to limited access in tier-2 cities.',
  },
  {
    icon: Shield,
    title: 'Your Data Stays Private',
    description: 'No data sharing with third parties. Anonymous mode available. You own your health information.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Care, Not One-Time Advice',
    description: 'Long-term tracking, personalized insights, and ongoing support — not just a single consultation.',
  },
];

const doctorProfiles = [
  {
    name: 'Dr. Priya Sharma',
    specialty: 'Gynecologist & PCOS Specialist',
    location: 'Mumbai',
    experience: '15+ years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Dr. Anjali Reddy',
    specialty: 'Endocrinologist',
    location: 'Bengaluru',
    experience: '12+ years',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Dr. Meera Patel',
    specialty: 'Reproductive Health Expert',
    location: 'Delhi',
    experience: '18+ years',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Dr. Kavitha Nair',
    specialty: 'Gynecologist',
    location: 'Chennai',
    experience: '10+ years',
    image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=200&h=200&fit=crop&crop=face',
  },
];

export const WhyWomenTrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden bg-muted/30" ref={ref}>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-wide uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Women Trust{' '}
            <span className="text-primary">Day28</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A platform built by healthcare professionals, designed for Indian women, with privacy at its core.
          </p>
        </motion.div>

        {/* Trust Reasons */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {trustReasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <reason.icon className="text-primary" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Doctor Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Meet Our Medical Advisory Team
            </h3>
            <p className="text-muted-foreground">
              Certified specialists who review our AI insights and clinical workflows
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {doctorProfiles.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card p-5 text-center"
              >
                <div className="relative mx-auto w-20 h-20 mb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                    <CheckCircle size={14} className="text-secondary-foreground" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{doctor.name}</h4>
                <p className="text-xs text-primary mb-1">{doctor.specialty}</p>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <MapPin size={10} />
                  <span>{doctor.location}</span>
                  <span>•</span>
                  <span>{doctor.experience}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Verification Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
              <Award className="text-secondary" size={16} />
              <span className="text-sm text-foreground">Medical Council Registered</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Stethoscope className="text-primary" size={16} />
              <span className="text-sm text-foreground">ICMR Guidelines Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
              <Heart className="text-secondary" size={16} />
              <span className="text-sm text-foreground">Patient-First Approach</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
