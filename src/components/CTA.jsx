import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <motion.div animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }} transition={{ duration: 10, repeat: Infinity }} className="absolute -top-24 -left-24 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></motion.div>
          <motion.div animate={{ x: [20, -20, 20], y: [20, -20, 20] }} transition={{ duration: 12, repeat: Infinity }} className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></motion.div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Join hundreds of successful companies that have scaled their revenue with our data-driven marketing strategies.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all">
              Book Free Consultation
              <ArrowRight size={20} />
            </motion.button>
            <p className="text-sm text-white/50 mt-6">
              No credit card required. 100% free strategy session.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
