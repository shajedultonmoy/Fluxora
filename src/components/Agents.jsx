import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

const categories = ['All', 'SEO', 'Ads', 'Social Media'];

const agents = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'SEO Specialist',
    category: 'SEO',
    rating: 4.9,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    skills: ['Technical SEO', 'Content Strategy'],
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'PPC Expert',
    category: 'Ads',
    rating: 5.0,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    skills: ['Google Ads', 'Meta Ads'],
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Social Media Manager',
    category: 'Social Media',
    rating: 4.8,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    skills: ['Brand Building', 'Viral Campaigns'],
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Growth Hacker',
    category: 'SEO',
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    skills: ['Conversion Rate', 'A/B Testing'],
  },
];

export default function Agents() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredAgents = activeCategory === 'All' 
    ? agents 
    : agents.filter(agent => agent.category === activeCategory);

  return (
    <section id="agents" className="py-24 bg-light relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-wider uppercase text-sm mb-4"
            >
              Hire Experts
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-dark mb-6"
            >
              Meet Our Top <br className="hidden md:block" /> Digital Agents
            </motion.h2>
          </div>
          
          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'bg-white text-dark/70 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredAgents.map((agent) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={agent.id}
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col h-full"
              >
                <div className="relative mb-6">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 text-sm font-bold text-dark shadow-sm">
                    <Star size={14} className="text-amber-400 fill-amber-400" />
                    {agent.rating}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-dark mb-1">{agent.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{agent.role}</p>
                  
                  <div className="space-y-2 mb-6">
                    {agent.skills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2 text-dark/70 text-sm">
                        <CheckCircle2 size={16} className="text-accent" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full py-3 rounded-xl bg-light text-dark font-semibold group-hover:bg-primary group-hover:text-white transition-colors mt-auto">
                  Hire Now
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
