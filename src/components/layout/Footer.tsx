import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Instagram, Twitter, Linkedin, Mail, Shield } from 'lucide-react';
import logo from '@/assets/day28-logo.png';

const footerLinks = {
  product: [
    { name: 'PCOS Assessment', path: '/screener' },
    { name: 'Emotional Journal', path: '/journal' },
    { name: 'Health Dashboard', path: '/dashboard' },
    { name: 'Find Specialists', path: '/doctors' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Clinical Advisory', path: '/advisory' },
    { name: 'Research', path: '/research' },
    { name: 'Contact', path: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Medical Disclaimer', path: '/disclaimer' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="DAY28"
                className="h-8 w-auto"
              />
              <span className="font-bold text-lg text-foreground">DAY28</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              Empowering women with AI-powered PCOS insights and emotional wellness support. 
              Evidence-based care, designed with empathy.
            </p>
            
            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Shield size={16} className="text-primary" />
              <span>HIPAA Compliant • Data Protected</span>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DAY28 Health. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-accent fill-accent" /> for women's health in India
          </p>
        </div>
      </div>
    </footer>
  );
};
