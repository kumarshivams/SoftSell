import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, DollarSign } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl opacity-60"></div>
      </div>

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block mb-4 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium rounded-full text-sm">
              The Software License Marketplace
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Turn Unused Software into 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400"> InReal Revenue </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
               "Turn your unused software licenses into cash—quickly and securely—through our transparent marketplace, without the headaches."
               This version adds:
               Action-oriented language ("Turn...into cash")
               Emphasis on speed and security
               Simpler phrasing (“without the headaches” vs. “without the hassle”)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <DollarSign size={18} />
                Sell My Licenses
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Learn How It Works
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                  {/* <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Software License Trading"
                    className="w-full h-full object-cover"
                  /> */}
                  <img
                          src="https://berkshirebsa.com/wp-content/uploads/2018/08/Selling-a-Business.jpeg"
                          alt="Selling a Business"
                          className="w-full h-full object-cover"
                    />

                </div>
               

                <div className="absolute -right-4 -bottom-4 bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4 w-40 md:w-48">
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium mb-1">
                    <DollarSign size={16} />
                    <span>Fast Payouts</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Get paid within 48 hours of license verification</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 dark:border-slate-700"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">$15M+</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Licenses Traded</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">8,000+</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">99%</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">12h</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Avg. Response Time</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;