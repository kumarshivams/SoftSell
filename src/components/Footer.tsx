import React from 'react';
import { motion } from 'framer-motion';
import { File, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-1"
          >
            <div className="flex items-center gap-2 text-white mb-4">
              <img src='https://tse4.mm.bing.net/th/id/OIP.c5-tDPObJvu-MlpT6ZM4EgHaGm?rs=1&pid=ImgDetMain' alt="SoftSell Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">SoftSell</span>
            </div>
            <p className="text-slate-400 mb-6">
              The premier marketplace for buying and selling software licenses. Get the best value for your unused licenses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-slate-400 hover:text-blue-400 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-slate-400 hover:text-blue-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-400 hover:text-blue-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">License Agreements</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">GDPR Compliance</a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-slate-400">Rohini Sector22, NewDelhi, Delhi</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:info@softsell.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                  info@softsell.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <a href="tel:+18005551234" className="text-slate-400 hover:text-blue-400 transition-colors">
                  +91 70-1234-5678
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8 text-center">
          <p className="text-slate-500">
            &copy; {currentYear} SoftSell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;