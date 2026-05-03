import { motion } from 'framer-motion';
import { Search, Share2, MousePointerClick, FileText, Mail, Layout } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Rank higher on search engines and drive organic traffic with our data-driven SEO strategies.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build a loyal community and increase brand awareness across all major social platforms.',
  },
  {
    icon: MousePointerClick,
    title: 'Paid Advertising',
    description: 'Maximize your ROI with targeted PPC campaigns on Google, Facebook, and LinkedIn.',
  },
  {
    icon: FileText,
    title: 'Content Marketing',
    description: 'Engage your audience with compelling, high-quality content that converts readers into customers.',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Nurture leads and drive sales with personalized, automated email campaigns.',
  },
  {
    icon: Layout,
    title: 'Web Design & Dev',
    description: 'Stunning, fast, and conversion-optimized websites tailored to your brand identity.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-4"
          >
            Our Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-dark mb-6"
          >
            Digital Solutions for <br /> Modern Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-dark/70"
          >
            We offer a comprehensive suite of digital marketing services designed to elevate your brand and drive measurable results.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
              className="group p-8 rounded-3xl bg-light border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 ease-out" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700">
                  <service.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-dark/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
