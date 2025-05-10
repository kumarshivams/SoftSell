import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, File } from 'lucide-react';


// Adjust the path as necessary

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigation = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-slate-900 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          {/* <a href="#" className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <File size={32} className="stroke-current" />
            <span className="text-2xl font-bold">SoftSell</span>
          </a> */}
              <a href="https://png.pngtree.com/png-vector/20230527/ourmid/pngtree-s-logo-icon-vector-png-image_7111071.png" className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <img src='https://png.pngtree.com/png-vector/20230527/ourmid/pngtree-s-logo-icon-vector-png-image_7111071.png' alt="SoftSell Logo" className="w-8 h-8" />
                <span className="text-2xl font-bold">SoftSell</span>
              </a>

        </motion.div>
        
        {/* Desktop Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#contact" className="btn-primary">
            Get Started
          </a>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-200"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-lg md:hidden"
          >
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;