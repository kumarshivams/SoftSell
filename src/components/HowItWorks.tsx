import React from 'react';
import { motion } from 'framer-motion';
import { Upload, LineChart, DollarSign, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Upload Your License',
      description: 'Submit your software license details through our secure portal. We support major software providers including Adobe, Microsoft, Autodesk, and more.',
      icon: <Upload className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      delay: 0.1
    },
    {
      id: 2,
      title: 'Get a Fair Valuation',
      description: 'Our advanced algorithm analyzes your license against current market prices. We provide a fair, transparent quote based on real-time data.',
      icon: <LineChart className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      delay: 0.3
    },
    {
      id: 3,
      title: 'Get Paid Quickly',
      description: 'Accept our offer and receive payment within 72 hours via your preferred method - bank transfer, PayPal, or cryptocurrency.',
      icon: <DollarSign className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      delay: 0.5
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
    <section id="how-it-works" className="section bg-slate-50 dark:bg-slate-800/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Our streamlined process makes selling your software licenses simple, secure, and profitable
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="card flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-5 mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">{step.description}</p>
              
              {index < steps.length - 1 ? (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              ) : null}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Start Selling Now
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;