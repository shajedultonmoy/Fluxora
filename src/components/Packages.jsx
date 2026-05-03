import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Starter',
    price: '$999',
    period: '/month',
    description: 'Perfect for small businesses looking to establish their online presence.',
    features: [
      'Basic SEO Setup',
      '2 Social Media Platforms',
      'Monthly Performance Report',
      'Email Support',
      'Basic Keyword Research'
    ],
    recommended: false,
  },
  {
    name: 'Growth',
    price: '$2,499',
    period: '/month',
    description: 'Ideal for growing companies needing a comprehensive digital strategy.',
    features: [
      'Advanced SEO & Content',
      '4 Social Media Platforms',
      'PPC Campaign Management',
      'Bi-weekly Strategy Calls',
      'Advanced Analytics Dashboard',
      'Priority Support'
    ],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations with complex marketing needs.',
    features: [
      'Full-stack Marketing Team',
      'Unlimited Platforms',
      'Custom App/Web Development',
      'Dedicated Account Manager',
      'Daily Performance Tracking',
      '24/7 Premium Support'
    ],
    recommended: false,
  },
];

export default function Packages() {
  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-4"
          >
            Transparent Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-dark mb-6"
          >
            Choose the Right Plan <br /> for Your Growth
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              whileHover={{ y: -5 }}
              className={`relative rounded-3xl p-8 xl:p-10 transition-all duration-500 ${pkg.recommended
                  ? 'bg-dark text-white shadow-2xl shadow-dark/20 scale-100 md:scale-105 z-10'
                  : 'bg-white border border-gray-100 shadow-lg text-dark hover:border-primary/30'
                }`}
            >
              {pkg.recommended && (
                <motion.div
                  animate={{ boxShadow: ["0 0 0px rgba(79, 70, 229, 0)", "0 0 20px rgba(79, 70, 229, 0.4)", "0 0 0px rgba(79, 70, 229, 0)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <span className="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className={`text-sm mb-6 ${pkg.recommended ? 'text-white/70' : 'text-dark/70'}`}>
                  {pkg.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl xl:text-5xl font-bold tracking-tight">{pkg.price}</span>
                  <span className={`font-medium ${pkg.recommended ? 'text-white/60' : 'text-dark/50'}`}>
                    {pkg.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className={`shrink-0 ${pkg.recommended ? 'text-accent' : 'text-primary'}`}
                    />
                    <span className={`text-sm ${pkg.recommended ? 'text-white/90' : 'text-dark/80'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all ${pkg.recommended
                    ? 'bg-primary hover:bg-secondary text-white'
                    : 'bg-light hover:bg-dark hover:text-white text-dark'
                  }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
