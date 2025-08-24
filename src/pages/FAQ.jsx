import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // 👈 for smooth animation

const faqs = [
  {
    question: "How do I apply for a job?",
    answer: (
      <ul className="list-decimal list-inside space-y-2">
        <li>Browse our job listings and find a position that matches your skills</li>
        <li>Click on the <b>"Apply Now"</b> button</li>
        <li>Fill out the application form</li>
        <li>Upload your resume & documents</li>
        <li>Review and submit your application</li>
      </ul>
    ),
  },
  {
    question: "How can I create an account?",
    answer:
      'Click "Sign Up" at the top right. You can sign up with email, Google, or LinkedIn. Then verify your email.',
  },
  {
    question: "Is there a fee to use CareerConnect Pro?",
    answer:
      "No, it's completely free for job seekers. Employers may pay to post jobs depending on their plan.",
  },
  {
    question: "How do I update my profile information?",
    answer:
      'Log in → Profile menu → "My Profile". Edit your info and save changes.',
  },
  // ... keep rest of your FAQ data
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
      <button
        className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-gray-800 hover:text-indigo-600 focus:outline-none"
        onClick={onClick}
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-4"
        >
          <svg
            className="h-6 w-6 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-4 text-gray-600"
          >
            {typeof answer === "string" ? <p>{answer}</p> : answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-5xl mx-auto py-16 px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Can’t find what you’re looking for?{" "}
            <a
              href="/contact"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Contact Support
            </a>
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>

        {/* Support Call-to-Action */}
        <div className="mt-16 text-center">
          <div className="bg-white shadow-lg rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-semibold text-gray-900">
              Still have questions?
            </h3>
            <p className="mt-2 text-gray-600">
              Our team is here to help you anytime.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
