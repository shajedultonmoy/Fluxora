import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    content: "Fluxora completely transformed our online presence. Within 3 months, our organic traffic increased by 150%, and our conversion rates have never been higher. Their team is truly exceptional.",
    author: "Jessica Williams",
    role: "CMO, TechNova",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    content: "The paid advertising campaigns managed by Fluxora delivered a 4x ROI in the first quarter. Their attention to detail and data-driven approach sets them apart from any other agency we've worked with.",
    author: "Marcus Johnson",
    role: "Founder, Elevate Fitness",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    content: "Their SEO experts are top-notch. We were struggling to rank for our core keywords, but Fluxora's strategy got us to the first page within months. Highly recommended!",
    author: "Samantha Lee",
    role: "Director of Marketing, GreenLife",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-dark mb-6"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative"
            >
              <div className="text-primary/20 mb-6">
                <Quote size={40} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-dark/80 mb-8 leading-relaxed italic text-lg">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-dark">{testimonial.author}</h4>
                  <p className="text-sm text-dark/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
