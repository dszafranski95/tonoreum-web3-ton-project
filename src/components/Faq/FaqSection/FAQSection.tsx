// demo-dapp-with-wallet\src\components\Faq\FaqSection\FAQSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export const FAQSection = () => {
  return (
    <div className="bg-[#EEFCFC] py-4 shadow-md pt-20 pb-20">
      <div className="flex justify-between items-center mx-auto px-4" style={{ maxWidth: '1024px' }}>
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center text-lg font-bold shadow-sm">?</div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-blue-600 uppercase">New Section</span>
            <h2 className="text-2xl font-bold">FAQs</h2>
          </div>
          <p className="hidden md:block text-sm text-black">Quickly find the answers you are looking for by navigating Frequently Asked Questions organized by use case.</p>
        </div>

        <Link to="/faq" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
  Questions Answered
  <svg className="w-6 h-6 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
  </svg>
</Link>
      </div>
    </div>
  );
};
