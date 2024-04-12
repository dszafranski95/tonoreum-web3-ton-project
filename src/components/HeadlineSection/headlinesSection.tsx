import React from 'react';

const NewsItem = ({ date, title, summary, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-sm text-gray-600 mt-2">{summary}</p>
    </a>
  );
};

const NewsSection = () => {
  const news = [
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
  ];

  return (
    <div className="bg-[#EEFCFC] py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Tonoreum News</h2>
            <p className="mt-1 text-sm text-gray-500">Latest updates and developments from Tonoreum.</p>
          </div>
          <a href="/news" className="text-blue-600 hover:text-blue-800 transition duration-300 text-sm font-semibold flex items-center">
            All News
            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {news.map((item, index) => (
            <NewsItem key={index} title={item.title} date={item.date} summary={item.summary} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
