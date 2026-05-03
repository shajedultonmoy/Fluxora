import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Agents', href: '#agents' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'
        }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div
          className={`flex items-center justify-between rounded-2xl transition-all duration-300 px-6 py-3 ${isScrolled ? 'glass' : 'bg-transparent'
            }`}
        >
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-primary/10 text-primary p-2 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-primary/0 group-hover:shadow-lg group-hover:shadow-primary/30">
              <Rocket size={24} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-2xl tracking-tight text-dark">
              Fluxora
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-dark/80 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -10px rgba(var(--primary), 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex items-center justify-center bg-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              Get Started
            </motion.a>

            <button
              className="md:hidden p-2 text-dark"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 md:hidden flex flex-col glass-dark h-svh"
          >
            <div className="flex items-center justify-between p-6">
              <span className="font-bold text-2xl tracking-tight text-white">
                Fluxora
              </span>
              <button
                className="p-2 text-white/80 hover:text-white bg-white/10 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-8 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-white/90 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold w-full text-center hover:bg-secondary transition-colors"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
