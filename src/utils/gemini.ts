// /**
//  * This file contains functionality for connecting to the Gemini API.
//  * 
//  * NOTE: This is a mock implementation since API keys aren't provided.
//  * In a real application, you would use the actual Gemini API.
//  */

// // Import the Gemini API SDK
// import { GoogleGenerativeAI } from "@google/generative-ai";

// // Initialize the Gemini API client (this would use a real API key in production)
// // For this demo, we'll simulate responses
// let apiKey = "MOCK_API_KEY";

// // Sample prompt categories and responses
// const responses = {
//   greeting: [
//     "Hello! I'm the SoftSell AI assistant. How can I help you today?",
//     "Welcome to SoftSell! I'm here to answer your questions about software license reselling.",
//     "Hi there! I'm here to help with any questions about selling your software licenses."
//   ],
//   license: [
//     "SoftSell accepts a wide range of software licenses including Microsoft, Adobe, Autodesk, Oracle, SAP, IBM, and many others. The license must be transferable according to the vendor's terms.",
//     "We work with most major software vendors. The key requirement is that the license must be legally transferable. We can help determine if your license qualifies.",
//     "Our platform specializes in enterprise software licenses from major vendors. We'll need details about your specific license to confirm eligibility."
//   ],
//   process: [
//     "Our process is simple: 1) Submit your license details through our form, 2) Receive a valuation within 24 hours, 3) Accept our offer and transfer the license, 4) Get paid within 72 hours.",
//     "Selling your license is easy - submit details, get a quote, accept, and receive payment. The entire process typically takes less than a week.",
//     "We've streamlined the selling process to be as simple as possible. After submitting your license information, we'll handle the valuation, verification, and payment."
//   ],
//   payment: [
//     "We offer multiple payment methods including bank transfer, PayPal, and cryptocurrency. Most payments are processed within 72 hours of completed license transfer.",
//     "You can choose to be paid via bank transfer, PayPal, or cryptocurrency. Our payment processing is secure and typically completes within 3 business days.",
//     "SoftSell provides flexible payment options. Choose from bank transfers, PayPal, or crypto. We prioritize fast payment processing after license verification."
//   ],
//   valuation: [
//     "Our valuation is based on current market demand, remaining subscription time, license type, and transferability conditions. We use data analytics to ensure competitive offers.",
//     "We determine license value using real-time market data and proprietary algorithms that factor in software type, version, term length, and current demand.",
//     "License valuation considers factors like software popularity, version, remaining term, and transfer restrictions. We aim to provide the most competitive offers in the industry."
//   ]
// };

// // Function to get a random response from a category
// const getRandomResponse = (category: keyof typeof responses): string => {
//   const options = responses[category];
//   return options[Math.floor(Math.random() * options.length)];
// };

// // Function to categorize a user query
// const categorizeQuery = (query: string): keyof typeof responses => {
//   query = query.toLowerCase();
  
//   if (query.includes("hello") || query.includes("hi") || query.includes("hey")) {
//     return "greeting";
//   }
  
//   if (query.includes("license") || query.includes("software") || query.includes("accept") || query.includes("eligible")) {
//     return "license";
//   }
  
//   if (query.includes("process") || query.includes("how") || query.includes("work") || query.includes("steps")) {
//     return "process";
//   }
  
//   if (query.includes("payment") || query.includes("pay") || query.includes("money") || query.includes("cash")) {
//     return "payment";
//   }
  
//   if (query.includes("value") || query.includes("worth") || query.includes("price") || query.includes("quote")) {
//     return "valuation";
//   }
  
//   // Default to process if we can't categorize
//   return "process";
// };

// /**
//  * Generate a response using the Gemini API
//  * Note: This is a mock implementation. In a real app, this would connect to the Gemini API.
//  */
// export const generateResponse = async (prompt: string): Promise<string> => {
//   try {
//     // Simulate API latency
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     // Categorize the query and return an appropriate response
//     const category = categorizeQuery(prompt);
//     return getRandomResponse(category);
    
//     // In a real implementation with an API key, you would use code like:
//     /*
//     const genAI = new GoogleGenerativeAI(apiKey);
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
//     const result = await model.generateContent(prompt);
//     const response = result.response;
//     return response.text();
//     */
//   } catch (error) {
//     console.error("Error generating response:", error);
//     return "I'm sorry, I'm having trouble processing your request. Please try again later.";
//   }
// };

// // Function to check if the API key is configured
// export const isConfigured = (): boolean => {
//   return apiKey !== "MOCK_API_KEY" && apiKey !== "";
// };

// // Function to configure the API key
// export const configureApiKey = (key: string): void => {
//   apiKey = key;
// };






/**
 * This file contains functionality for connecting to the Gemini API.
 * NOTE: This includes both real and mock logic depending on API key availability.
 */

import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize API key
let apiKey = import.meta.env.VITE_GEMINI_API_KEY || "MOCK_API_KEY";

// Sample prompt categories and responses for mock fallback
const responses = {
  greeting: [
    "Hello! I'm the SoftSell AI assistant. How can I help you today?",
    "Welcome to SoftSell! I'm here to answer your questions about software license reselling.",
    "Hi there! I'm here to help with any questions about selling your software licenses."
  ],
  license: [
    "SoftSell accepts a wide range of software licenses including Microsoft, Adobe, Autodesk, Oracle, SAP, IBM, and many others. The license must be transferable according to the vendor's terms.",
    "We work with most major software vendors. The key requirement is that the license must be legally transferable. We can help determine if your license qualifies.",
    "Our platform specializes in enterprise software licenses from major vendors. We'll need details about your specific license to confirm eligibility."
  ],
  process: [
    "Our process is simple: 1) Submit your license details through our form, 2) Receive a valuation within 24 hours, 3) Accept our offer and transfer the license, 4) Get paid within 72 hours.",
    "Selling your license is easy - submit details, get a quote, accept, and receive payment. The entire process typically takes less than a week.",
    "We've streamlined the selling process to be as simple as possible. After submitting your license information, we'll handle the valuation, verification, and payment."
  ],
  payment: [
    "We offer multiple payment methods including bank transfer, PayPal, and cryptocurrency. Most payments are processed within 72 hours of completed license transfer.",
    "You can choose to be paid via bank transfer, PayPal, or cryptocurrency. Our payment processing is secure and typically completes within 3 business days.",
    "SoftSell provides flexible payment options. Choose from bank transfers, PayPal, or crypto. We prioritize fast payment processing after license verification."
  ],
  valuation: [
    "Our valuation is based on current market demand, remaining subscription time, license type, and transferability conditions. We use data analytics to ensure competitive offers.",
    "We determine license value using real-time market data and proprietary algorithms that factor in software type, version, term length, and current demand.",
    "License valuation considers factors like software popularity, version, remaining term, and transfer restrictions. We aim to provide the most competitive offers in the industry."
  ]
};

// Get a random mock response by category
const getRandomResponse = (category: keyof typeof responses): string => {
  const options = responses[category];
  return options[Math.floor(Math.random() * options.length)];
};

// Categorize user query for mock response
const categorizeQuery = (query: string): keyof typeof responses => {
  query = query.toLowerCase();

  if (query.includes("hello") || query.includes("hi") || query.includes("hey")) return "greeting";
  if (query.includes("license") || query.includes("software") || query.includes("accept") || query.includes("eligible")) return "license";
  if (query.includes("process") || query.includes("how") || query.includes("work") || query.includes("steps")) return "process";
  if (query.includes("payment") || query.includes("pay") || query.includes("money") || query.includes("cash")) return "payment";
  if (query.includes("value") || query.includes("worth") || query.includes("price") || query.includes("quote")) return "valuation";

  return "process";
};

// Check if real API key is configured
export const isConfigured = (): boolean => {
  return apiKey !== "MOCK_API_KEY" && !!apiKey && apiKey.length > 10;
};

// Allow external API key setting (optional)
export const configureApiKey = (key: string): void => {
  apiKey = key;
};

// Generate response using Gemini API or fallback mock
export const generateResponse = async (prompt: string): Promise<string> => {
  try {
    if (!isConfigured()) {
      console.warn("No real API key found — using mock response.");
      const category = categorizeQuery(prompt);
      return getRandomResponse(category);
    }

    console.log("Generating response using Gemini API...");
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    return response;
  } catch (error) {
    console.error("Error generating Gemini response:", error);
    return "I'm sorry, something went wrong while connecting to the AI.";
  }
};
