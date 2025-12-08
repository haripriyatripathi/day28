import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Stethoscope, 
  MapPin, 
  Star, 
  Calendar, 
  Filter,
  Search,
  Heart,
  Clock
} from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    specialty: 'Gynecologist & PCOS Specialist',
    location: 'Mumbai, Maharashtra',
    rating: 4.9,
    reviews: 234,
    experience: '15+ years',
    available: true,
    image: 'PS',
    nextSlot: 'Tomorrow, 10:00 AM',
    consultationFee: '₹800',
  },
  {
    id: 2,
    name: 'Dr. Anjali Verma',
    specialty: 'Endocrinologist',
    location: 'Delhi NCR',
    rating: 4.8,
    reviews: 189,
    experience: '12+ years',
    available: true,
    image: 'AV',
    nextSlot: 'Today, 4:00 PM',
    consultationFee: '₹1000',
  },
  {
    id: 3,
    name: 'Dr. Meera Reddy',
    specialty: 'Reproductive Medicine',
    location: 'Bangalore, Karnataka',
    rating: 4.9,
    reviews: 312,
    experience: '18+ years',
    available: false,
    image: 'MR',
    nextSlot: 'Dec 12, 11:00 AM',
    consultationFee: '₹1200',
  },
  {
    id: 4,
    name: 'Dr. Kavitha Nair',
    specialty: 'Gynecologist',
    location: 'Chennai, Tamil Nadu',
    rating: 4.7,
    reviews: 156,
    experience: '10+ years',
    available: true,
    image: 'KN',
    nextSlot: 'Tomorrow, 2:00 PM',
    consultationFee: '₹700',
  },
];

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || 
      doctor.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase());
    return matchesSearch && matchesSpecialty;
  });

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Stethoscope size={18} className="text-primary" />
              <span className="text-sm font-medium text-primary">Verified Specialists</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Your <span className="gradient-text">Doctor</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Connect with empathetic PCOS and hormonal health specialists
            </p>
          </motion.div>

          {/* Search & Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-6 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by name, specialty, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-card/60 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Filter */}
              <div className="relative">
                <Filter size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="pl-12 pr-8 py-3.5 bg-card/60 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer min-w-[200px]"
                >
                  <option value="all">All Specialties</option>
                  <option value="gynecologist">Gynecologist</option>
                  <option value="endocrinologist">Endocrinologist</option>
                  <option value="reproductive">Reproductive Medicine</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredDoctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="flex gap-4">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {doctor.image}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                        <p className="text-sm text-primary">{doctor.specialty}</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-card/60 border border-border/30 text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors"
                      >
                        <Heart size={16} />
                      </motion.button>
                    </div>

                    <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {doctor.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        {doctor.rating} ({doctor.reviews})
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <span className="text-muted-foreground">{doctor.experience}</span>
                      <span className="text-foreground font-medium">{doctor.consultationFee}</span>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/30">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className={doctor.available ? 'text-green-400' : 'text-muted-foreground'} />
                    <span className="text-sm text-muted-foreground">
                      {doctor.available ? 'Available: ' : 'Next: '}
                      <span className="text-foreground">{doctor.nextSlot}</span>
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary py-2.5 px-5 text-sm flex items-center gap-2"
                  >
                    <Calendar size={16} className="relative z-10" />
                    <span className="relative z-10">Book</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground">No doctors found matching your search.</p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Doctors;
