import { Rocket, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6
    }
  }
};

export default function Footer() {
  return (
    <footer className="bg-light pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >

          {/* Brand */}
          <motion.div variants={footerVariants} className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-white p-2 rounded-xl">
                <Rocket size={24} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-2xl tracking-tight text-dark">
                Fluxora
              </span>
            </a>
            <p className="text-dark/70 mb-6 leading-relaxed">
              Elevating brands through data-driven digital marketing and innovative growth strategies.
            </p>
            <div className="flex gap-4 text-dark/50">
              {[Globe, Mail, Phone, MapPin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, color: 'var(--primary)', rotate: 10 }}
                  className="hover:text-primary transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={footerVariants}>
            <h4 className="font-bold text-dark mb-6">Company</h4>
            <ul className="space-y-4 text-dark/70">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#agents" className="hover:text-primary transition-colors">Our Experts</a></li>
              <li><a href="#careers" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={footerVariants}>
            <h4 className="font-bold text-dark mb-6">Services</h4>
            <ul className="space-y-4 text-dark/70">
              <li><a href="#" className="hover:text-primary transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Social Media Marketing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Paid Advertising</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={footerVariants}>
            <h4 className="font-bold text-dark mb-6">Contact Us</h4>
            <ul className="space-y-4 text-dark/70">
              <li>hello@fluxora.agency</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Growth Ave,<br />San Francisco, CA 94105</li>
            </ul>
          </motion.div>

        </motion.div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-dark/50">
            &copy; {new Date().getFullYear()} Fluxora Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-dark/50">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
