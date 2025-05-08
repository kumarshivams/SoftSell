import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, DollarSign, BadgeCheck } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      id: 1,
      title: 'Secure Transactions',
      description: 'Our platform uses bank-level encryption and secure license transfer protocols to ensure your transactions remain safe.',
      icon: <Shield className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      delay: 0.1
    },
    {
      id: 2,
      title: 'Fast Process',
      description: 'From submission to payment, our streamlined process typically takes less than 5 business days, with most transactions completing in 72 hours.',
      icon: <Clock className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      delay: 0.2
    },
    {
      id: 3,
      title: 'Best Market Rates',
      description: 'Our pricing algorithm ensures you get the highest possible value for your licenses, typically 20-30% higher than competitors.',
      icon: <DollarSign className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      delay: 0.3
    },
    {
      id: 4,
      title: 'Compliance Guarantee',
      description: 'Our legal team ensures all transactions comply with software licensing regulations and vendor transfer policies.',
      icon: <BadgeCheck className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      delay: 0.4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="why-choose-us" className="section bg-white dark:bg-slate-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Why Choose SoftSell</h2>
          <p className="section-subtitle">
            We differentiate ourselves through security, speed, and superior value
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              className="card flex items-start gap-5"
              variants={itemVariants}
            >
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-8 md:p-12 text-white shadow-xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to turn your unused software licenses into cash?</h3>
            <p className="text-blue-100 mb-8">
              Join thousands of satisfied customers who have successfully monetized their unused software assets.
            </p>
            <a href="#contact" className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
              Get Started Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;