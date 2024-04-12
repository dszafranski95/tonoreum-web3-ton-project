// src\components\News\NewsSection\NewsSection.tsx
import React from 'react';

const NewsItem = ({ date, summary, title, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{date}</p>
      <p className="text-gray-600">{summary}</p>
    </a>
  );
};

const NewsSection = () => {
  const headlines = [
    {
      title: 'Tonoreum Initiates Token Halving Event',
      date: 'Apr 4, 2024',
      summary: 'The Tonoreum project announces a significant token halving, reducing block rewards by 15%, aiming to increase $TOR value.',
      link: '/news/halving-event',
    },
    {
      title: 'Expansion of Tonoreum Mining Infrastructure',
      date: 'Mar 23, 2024',
      summary: 'Tonoreum has expanded its mining platform infrastructure to enhance efficiency and accessibility for miners.',
      link: '/news/mining-infrastructure',
    },
    {
      title: 'Introduction of Tonoreum NFT Boosters',
      date: 'Feb 15, 2024',
      summary: 'New NFT boosters have been introduced, which increase computational power and add a gamified element to mining.',
      link: '/news/nft-boosters',
    },
    {
      title: 'Tonoreum New API for Developers Released',
      date: 'Jan 30, 2024',
      summary: 'Developers can now access Tonoreum’s services more easily with the release of a new comprehensive API.',
      link: '/news/api-release',
    },
    {
      title: 'Tonoreum Lists $TOR Token on Major Exchanges',
      date: 'Jan 12, 2024',
      summary: 'The $TOR token is now listed on several major exchanges, increasing liquidity and trading options.',
      link: '/news/token-listing',
    },
    {
      title: 'Tonoreum Integrates with DeFi Protocols',
      date: 'Mar 28, 2024',
      summary: 'Tonoreum announces integration with leading DeFi protocols, enhancing utility and use cases for $TOR.',
      link: '/news/defi-integration',
    },
    {
      title: 'Secure Your $TOR Assets with Wallets',
      date: 'Mar 27, 2024',
      summary: 'Tonoreum users can now secure their $TOR tokens using wallets like Tonkepper, OpenMask and so on.',
      link: '/news/wallet-support',
    },
    {
      title: 'Collaborative Projects Enhance Tonoreum Network',
      date: 'Mar 26, 2024',
      summary: 'Tonoreum collaborates with various blockchain projects to enhance network functionality and user experience.',
      link: '/news/collaborations',
    },
    {
      title: 'Understanding $TOR: Digital Gold of the Future',
      date: 'Mar 21, 2024',
      summary: 'Explore how Tonoreum $TOR token is setting a new standard for digital assets, akin to digital gold.',
      link: '/news/digital-gold',
    },
    {
      title: 'Trade $TOR with Confidence on Ston.Fi',
      date: 'Mar 20, 2024',
      summary: 'Tonoreum $TOR token trading will live on DEX like Ston.Fi, with features to enhance user confidence and market stability.',
      link: '/news/dex-trading',
    },
  ];
  

  return (
    <div className="bg-[#EEFCFC] py-10">
      <div className="max-w-7xl mx-auto px-5"> {/* Expanded width with max-w-7xl */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">Latest News from Tonoreum</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Adjusted for larger cards */}
          {headlines.map((item, index) => (
            <NewsItem key={index} title={item.title} date={item.date} summary={item.summary} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
