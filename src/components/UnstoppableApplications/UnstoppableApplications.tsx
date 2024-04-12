import React from 'react';

export const UnstoppableApplications = () => {
  return (
    <section className="bg-[#EEFCFC] py-12 pt-20">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6 max-w-6xl">
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">
              Mine Tonoreum with Proof of Link Consensus
            </h2>
            <p className="text-gray-700">
              Tonoreum is revolutionizing blockchain with its Proof of Link mechanism, optimizing mining processes and ensuring secure, decentralized transactions.
            </p>
            <p className="text-gray-700">
              By integrating with the Telegram Open Network (TON), Tonoreum allows users to mine TOR currency efficiently through social interactions and network engagements. The unique mining structure also empowers users by allowing them to increase their mining power by promoting and expanding the network.
            </p>
            <a href="/start" className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center">
              Learn More
              <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1666384805384-b21141eaca45?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tonoreum Mining"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
