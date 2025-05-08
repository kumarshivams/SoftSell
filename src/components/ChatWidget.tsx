import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, RefreshCcw } from 'lucide-react';
import { generateResponse } from '../utils/gemini'; // Import your generateResponse function

// Define message type
interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

// Mock responses for common questions
const predefinedResponses: Record<string, string> = {
  default: "Thank you for your question. A team member will get back to you within 24 hours.",
  greeting: "Hello! Welcome to SoftSell. How can I assist you today?",
  about: "SoftSell is the premier marketplace for buying and selling software licenses. We help organizations recoup value from unused software assets.",
  sell: "To sell your software license, simply fill out our contact form with details about your license. We'll provide a valuation within 24 hours and process payment within 3 business days of acceptance.",
  pricing: "Our pricing is competitive and transparent. We analyze the current market value of your license type and offer up to 70% of retail price depending on factors like remaining term, transferability, and demand.",
  process: "Our process is simple: 1) Submit your license details, 2) Receive a valuation within 24 hours, 3) Accept our offer and complete the transfer, 4) Get paid within 72 hours.",
  payment: "We offer multiple payment methods including bank transfer, PayPal, and cryptocurrency. Most payments are processed within 72 hours of completed license transfer.",
  support: "Our support team is available Monday through Friday, 9am to 6pm PST. You can reach us at support@softsell.com or call (800) 555-1234.",
};

// Sample suggested questions
const suggestedQuestions = [
  "How do I sell my software license?",
  "What is your pricing structure?",
  "How long does the payment process take?",
  "What software licenses do you accept?",
];

// Function to generate unique IDs
const generateId = () => Math.random().toString(36).substring(2, 9);

// Helper function to find best matching response
// const findBestResponse = (question: string): string => {
//   question = question.toLowerCase();
  
//   if (question.match(/hello|hi|hey|greetings/i)) {
//     return predefinedResponses.greeting;
//   }
  
//   if (question.match(/how.*(sell|work|process)/i)) {
//     return predefinedResponses.process;
//   }
  
//   if (question.match(/sell|upload|submit|license/i)) {
//     return predefinedResponses.sell;
//   }
  
//   if (question.match(/price|pricing|quote|value|worth|money|cost/i)) {
//     return predefinedResponses.pricing;
//   }
  
//   if (question.match(/pay|payment|get paid|transfer|paypal|bank/i)) {
//     return predefinedResponses.payment;
//   }
  
//   if (question.match(/about|who are you|what is|softsell/i)) {
//     return predefinedResponses.about;
//   }
  
//   if (question.match(/help|support|contact|phone|email/i)) {
//     return predefinedResponses.support;
//   }
  
//   return predefinedResponses.default;
// };


const findBestResponse = async (question: string): Promise<string> => {
  question = question.toLowerCase();

  if (question.match(/hello|hi|hey|greetings/i)) {
    return predefinedResponses.greeting;
  }

  if (question.match(/how.*(sell|work|process)/i)) {
    return predefinedResponses.process;
  }

  if (question.match(/sell|upload|submit|license/i)) {
    return predefinedResponses.sell;
  }

  if (question.match(/price|pricing|quote|value|worth|money|cost/i)) {
    return predefinedResponses.pricing;
  }

  if (question.match(/pay|payment|get paid|transfer|paypal|bank/i)) {
    return predefinedResponses.payment;
  }

  if (question.match(/about|who are you|what is|softsell/i)) {
    return predefinedResponses.about;
  }

  if (question.match(/help|support|contact|phone|email/i)) {
    return predefinedResponses.support;
  }

  // ELSE: Call Gemini if no keyword matched
  const geminiFallback = await generateResponse(question);
  return geminiFallback || predefinedResponses.default;
};


const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([
          {
            id: generateId(),
            content: "Hi there! Welcome to SoftSell. How can I help you today?",
            role: 'assistant',
            timestamp: new Date()
          }
        ]);
        setIsTyping(false);
      }, 1000);
    }
  }, [isOpen, messages.length]);
  
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: generateId(),
      content: inputValue,
      role: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate response delay
    // setTimeout(() => {
    //   const responseMessage: Message = {
    //     id: generateId(),
    //     content: findBestResponse(userMessage.content),
    //     role: 'assistant',
    //     timestamp: new Date()
    //   };

    setTimeout(async () => {
      const aiResponse = await findBestResponse(userMessage.content);
    
      const responseMessage: Message = {
        id: generateId(),
        content: aiResponse,
        role: 'assistant',
        timestamp: new Date()
      };
   
      setMessages(prev => [...prev, responseMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleQuestionClick = (question: string) => {
    setInputValue(question);
    
    // Auto-submit after a small delay to simulate clicking
    setTimeout(() => {
      const userMessage: Message = {
        id: generateId(),
        content: question,
        role: 'user',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);
      
      setTimeout(async () => {
        const aiResponse = await findBestResponse(userMessage.content);
      
        const responseMessage: Message = {
          id: generateId(),
          content: aiResponse,
          role: 'assistant',
          timestamp: new Date()
        };
            
        setMessages(prev => [...prev, responseMessage]);
        setIsTyping(false);
      }, 1500);
    }, 300);
    
    setInputValue('');
  };
  
  const resetChat = () => {
    setMessages([]);
    // Initial welcome message will be re-added due to the useEffect
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[350px] sm:w-[380px] h-[500px] bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden z-50 flex flex-col border border-slate-200 dark:border-slate-700"
          >
            {/* Chat header */}
            <div className="bg-blue-600 p-4 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <MessageSquare size={20} />
                  <h3 className="font-semibold">SoftSell Support</h3>
                </div>
                <button 
                  onClick={resetChat}
                  className="p-1 hover:bg-blue-700 rounded-full transition-colors"
                  title="Reset conversation"
                >
                  <RefreshCcw size={16} />
                </button>
              </div>
            </div>
            
            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-tl-none'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Auto-scroll anchor */}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Suggested questions (only show if <= 2 messages) */}
            {messages.length <= 2 && (
              <div className="px-4 py-3 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionClick(question)}
                      className="text-xs bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-full px-3 py-1 text-slate-700 dark:text-slate-300 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Chat input */}
            <div className="p-3 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 pr-10 rounded-lg border border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={inputValue.trim() === ''}
                  className={`p-3 rounded-lg ${
                    inputValue.trim() === ''
                      ? 'bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  } transition-colors`}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;