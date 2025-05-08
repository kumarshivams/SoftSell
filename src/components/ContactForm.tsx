import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Send, Check } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<FormData>();

  const licenseTypes = [
    { value: "", label: "Select License Type" },
    { value: "adobe", label: "Adobe Creative Cloud" },
    { value: "microsoft", label: "Microsoft Office" },
    { value: "autodesk", label: "Autodesk" },
    { value: "ibm", label: "IBM Software" },
    { value: "oracle", label: "Oracle" },
    { value: "sap", label: "SAP" },
    { value: "vmware", label: "VMware" },
    { value: "other", label: "Other" }
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    toast.success('Your message has been sent!');
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after delay
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section bg-white dark:bg-slate-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get a Quote</h2>
          <p className="section-subtitle">
            Fill out the form below to receive a valuation for your software licenses
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card"
          >
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100 text-green-600">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Your message has been received. We'll get back to you within 24 hours with a valuation.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Full Name*
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                      } bg-white dark:bg-slate-800 focus:outline-none focus:border-blue-500`}
                      placeholder="John Doe"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email Address*
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                      } bg-white dark:bg-slate-800 focus:outline-none focus:border-blue-500`}
                      placeholder="john@company.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Company Name*
                    </label>
                    <input
                      id="company"
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.company ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                      } bg-white dark:bg-slate-800 focus:outline-none focus:border-blue-500`}
                      placeholder="Your Company Ltd."
                      {...register('company', { required: 'Company name is required' })}
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="licenseType" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      License Type*
                    </label>
                    <select
                      id="licenseType"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.licenseType ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                      } bg-white dark:bg-slate-800 focus:outline-none focus:border-blue-500`}
                      {...register('licenseType', { required: 'Please select a license type' })}
                    >
                      {licenseTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.licenseType && (
                      <p className="mt-1 text-sm text-red-500">{errors.licenseType.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                    } bg-white dark:bg-slate-800 focus:outline-none focus:border-blue-500`}
                    placeholder="Please provide details about your software licenses (quantity, version, etc.)"
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: {
                        value: 20,
                        message: 'Message must be at least 20 characters'
                      }
                    })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex items-center justify-center gap-2 min-w-[200px]"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Submit Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;