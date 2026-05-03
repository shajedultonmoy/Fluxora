import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-light">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div animate={{ x: [0, 50, 0], y: [0, 30, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[120px]" />
        <motion.div animate={{ x: [0, -30, 0], y: [0, 50, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm mb-6"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs font-semibold text-dark">Trusted by 500+ startups</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight text-dark mb-6 leading-[1.1]"
            >
              Grow Faster with <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Fluxora
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-dark/70 mb-10 max-w-xl leading-relaxed"
            >
              Elevate your brand with data-driven digital marketing strategies. We connect you with top-tier experts to scale your business online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#agents"
                className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-dark transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
              >
                Hire an Expert
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex justify-center items-center gap-2 bg-white text-dark px-8 py-4 rounded-full font-semibold border border-gray-200 hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex items-center gap-8 border-t border-gray-200 pt-8"
            >
              <div>
                <p className="text-3xl font-bold text-dark">98%</p>
                <p className="text-sm text-dark/60 font-medium">Client Success</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-dark">$2M+</p>
                <p className="text-sm text-dark/60 font-medium">Ad Spend Managed</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Image / Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ y, opacity }}
            className="w-full lg:w-1/2 relative z-10"
          >
            <motion.div style={{ scale }} className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/3] lg:aspect-square group">
              <motion.img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Digital Marketing Team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>

              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 glass p-4 rounded-2xl flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-dark font-bold text-xl">
                  +
                </div>
                <div>
                  <p className="font-bold text-dark text-lg">250% Growth</p>
                  <p className="text-xs font-medium text-dark/60">Average Client ROI</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
