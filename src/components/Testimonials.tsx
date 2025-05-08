import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "SoftSell made it incredibly easy to sell our excess Adobe licenses after downsizing. We received fair market value and the payment was processed within 48 hours. Highly recommended!",
      name: "Sarah Johnson",
      title: "IT Director",
      company: "DesignWorks Studio",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      delay: 0.1
    },
    {
      id: 2,
      quote: "When our company pivoted to different software solutions, we had dozens of unused licenses. SoftSell's valuation was 30% higher than competitors, and their process was smooth and transparent.",
      name: "Michael Chen",
      title: "CTO",
      company: "NexTech Solutions",
      image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      delay: 0.3
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="testimonials" className="section bg-slate-50 dark:bg-slate-800/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it – hear from organizations that have successfully sold their licenses through SoftSell
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="card relative"
              variants={itemVariants}
            >
              <Quote className="w-12 h-12 text-blue-100 dark:text-blue-900/30 absolute -top-2 -left-2" />
              <div className="pt-6">
                <p className="text-slate-700 dark:text-slate-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;