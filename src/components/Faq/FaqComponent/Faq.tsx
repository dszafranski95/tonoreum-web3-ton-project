import React, { useState } from 'react';

type FaqItemProps = {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
};

const FaqItem: React.FC<FaqItemProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="mb-4 bg-white border rounded-lg shadow-sm overflow-hidden">
      <button
        type="button"
        className={`text-lg font-semibold w-full text-left p-5 transition-colors duration-300 ${isOpen ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
        onClick={onClick}
      >
        {title}
        <span className="float-right transform transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </span>
      </button>
      <div className={`transition-height duration-500 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        <div className={`p-5 border-t-0 text-gray-600 ${isOpen ? 'block' : 'hidden'}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqContent = [
    {
      title: "What is the total supply of $TOR tokens?",
      content: "The total supply of $TOR tokens is capped at 21 billion, following a deflationary model where new tokens are mined every five minutes until the cap is reached."
    },
    {
      title: "How does the halving mechanism work?",
      content: "The halving mechanism reduces the reward for mining a block by 15% every 30 days, to manage inflation and gradually increase the token's value."
    },
    {
      title: "Can I increase my mining rewards?",
      content: "Yes, by increasing your computational power through active network participation and referrals, you can increase your share of the mining rewards."
    },
    {
      title: "What is TOR Power?",
      content: "TOR Power is a measure of your computational power in the Tonoreum network, which determines your portion of the mining rewards."
    },
    {
      title: "What happens if I don't refresh my mining session?",
      content: "If you don't refresh your mining session within 24 hours, your TOR Power begins to decrease, ultimately affecting your mining rewards."
    },
  ];

  return (
    <div className="max-w-3xl mx-auto my-10 p-5">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#0098EA]">Frequently Asked Questions</h2>
      {faqContent.map((faq, index) => (
        <FaqItem
          key={index}
          title={faq.title}
          content={faq.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Faq;
