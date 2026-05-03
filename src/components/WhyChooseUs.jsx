import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Headphones } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: 'Data-Driven Strategies',
    description: 'We don\'t guess. Every decision we make is backed by deep analytics and market research to ensure maximum ROI.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Work with vetted, top-tier professionals who have proven track records in scaling businesses like yours.'
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Our campaigns are designed to convert. We focus on metrics that matter: leads, sales, and revenue growth.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Your dedicated account manager is always just a message away. We pride ourselves on transparent, proactive communication.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border-[40px] border-primary/30 blur-xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent font-semibold tracking-wider uppercase text-sm mb-4"
            >
              Why Choose Fluxora
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              We Turn Clicks Into <br /> Customers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-white/70 mb-8 max-w-xl"
            >
              In a crowded digital landscape, you need more than just traffic. You need a partner who understands your business goals and builds tailored systems to achieve them.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <span className="text-xl font-bold text-accent">10+</span>
              </div>
              <div>
                <p className="font-bold text-lg">Years Experience</p>
                <p className="text-sm text-white/60">In digital marketing excellence</p>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 text-accent rounded-xl flex items-center justify-center mb-4">
                  <reason.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
