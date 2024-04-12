import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col justify-center items-center px-4 py-10">
      <div className="max-w-6xl w-full mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">About Tonoreum $TOR</h1>
        <p className="text-gray-600 text-lg">
          The Tonoreum project is built on the innovative Telegram Open Network (TON) and employs a unique combination of Proof of Link and Proof of Work algorithms to redefine blockchain usability. Our approach leverages the social dynamics of Telegram to enhance user engagement and network growth through decentralized applications (DApps).
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mt-6 mb-4">Our Technology</h2>
        <p className="text-gray-600 text-lg">
          Tonoreum introduces TOR Power, a dynamic computational power model that users enhance through network participation and referrals. This system not only powers mining operations but also integrates directly with Telegram, making the process accessible to a broad user base.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Core Features</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 text-lg">
          <li>Decentralized mining model integrated with Telegram, enhancing user engagement and participation.</li>
          <li>Advanced security protocols to safeguard user transactions and data across the network.</li>
          <li>Continuous development driven by community feedback, ensuring the platform evolves to meet user needs.</li>
          <li>Unique NFT boosters to enhance mining capabilities and enrich user interaction within the ecosystem.</li>
        </ul>
        <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Mission and Vision</h3>
        <p className="text-gray-600 text-lg mb-6">
          Our mission is to democratize blockchain technology through innovative uses of Telegram’s social platform, making cryptocurrency accessible and functional for everyday users. We are committed to developing a sustainable and thriving ecosystem that supports both new and experienced users in exploring and benefiting from blockchain technology.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Sustainable Growth</h3>
        <p className="text-gray-600 text-lg mb-6">
          The project emphasizes sustainable growth through its tokenomics, focusing on long-term stability and value creation. Our strategic use of token burning and rewards for network participation are designed to incentivize sustained and beneficial user activity within the ecosystem.
        </p>
      </div>
    </div>
  );
};

export default About;
