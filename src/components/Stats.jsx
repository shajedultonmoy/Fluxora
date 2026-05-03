import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

function Counter({ from, to, duration = 2, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Spring animation for smooth counting
  const springValue = useSpring(from, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000
  });
  
  const displayValue = useTransform(springValue, (current) => {
    return Math.round(current).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(to);
    }
  }, [isInView, springValue, to]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

const stats = [
  { label: 'Clients Served', value: 450, suffix: '+' },
  { label: 'Projects Completed', value: 1200, suffix: '+' },
  { label: 'Growth Driven', value: 300, suffix: '%' },
  { label: 'Satisfaction Rate', value: 99, suffix: '%' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Texture bg */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/20">
          {stats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/80 font-medium text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
