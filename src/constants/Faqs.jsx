import React from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

const Faqs = () => {
  const faqs = [
    {
      id: 1,
      question: "What is UrbanPay?",
      answer: "",
    },
    {
      id: 2,
      question: "How can I get real-time transport prices?",
      answer: "",
    },
    {
      id: 3,
      question: "Can I use UrbanPay anywhere?",
      answer: "",
    },
    {
      id: 4,
      question: "How does UrbanPay protect my assets?",
      answer: "",
    },
  ];

  return (
    <main className="flex flex-col p-4">
      <h1 className="flex items-center justify-center text-bold text-4xl mb-4">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="w-full bg-[#F4F4F5] flex items-center justify-between p-4 my-2 rounded-lg shadow-md"
        >
          <span className="text-black py-4">{faq.question}</span>
          <BsPlusLg className="text-black" />
        </div>
      ))}
    </main>
  );
};

export default Faqs;
