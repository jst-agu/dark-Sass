"use client";
import { useState } from "react";
// import clsx from "clsx";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import { motion, AnimatePresence } from "framer-motion";

interface FaqProps {
  question: string;
  answer: string;
}

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

const AccordionItem = ({question, answer}: FaqProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-7 border-b border-white/30"
     onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">
          {question}
          </span> 
      {!isOpen ? <PlusIcon /> : <MinusIcon />}
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div
           initial={{ opacity: 0, height: 0, marginTop: 0 }}
           animate={{ opacity: 1, height: "auto", marginTop: '16px' }}
           exit={{ opacity: 0, height: 0, marginTop: 0 }}
           >
              {answer}
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24
    bg-[linear-gradient(to_bottom,#5D2CAB,#000)]">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] 
        mx-auto font-bold tracking-tighter">
          Frequently Asked Questions
          </h2>
        <div className="mt-12 max-w-[648px] mx-auto cursor-pointer">
          {/* This could work if styled well too.. some forgotten html tags lol */}
          {/* {items.map((item, index) => (
            <details key={index}>
              <summary>
                <span>{item.question}</span> 
              <PlusIcon />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))} */}
          {items.map((item, index) => (
            <AccordionItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
