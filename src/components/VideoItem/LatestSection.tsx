import React from 'react';

const VideoItem = ({ title, date, thumbnail, link, isLarge }) => {
  const itemClass = isLarge ? "col-span-2 lg:col-span-full" : "col-span-1";
  return (
    <div className={`group ${itemClass} mb-4`}>
      <a href={link} className="block overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
        <img
          src={thumbnail}
          alt={title}
          className={`object-cover w-full ${isLarge ? 'h-72' : 'h-36 lg:h-48'} group-hover:opacity-80`}
        />
        <div className="p-4 bg-white">
          <h5 className="text-lg font-bold truncate">{title}</h5>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </a>
    </div>
  );
};

const AppItem = ({ name, developer, icon, link }) => {
  return (
    <div className="group mb-4 flex" style={{ width: 'calc(100% - 1rem)' }}> {/* Assuming gap is 1rem */}
      <a href={link} className="block flex overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl w-full">
        <div className="flex-none w-20 h-16 overflow-hidden">
          <img
            src={icon}
            alt={name}
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="p-4 bg-white flex-grow">
          <h5 className="text-lg font-bold truncate">{name}</h5>
          <p className="text-sm text-gray-500">{developer}</p>
        </div>
      </a>
    </div>
  );
};

const LatestSection = () => {
  const videos = [
    {
      title: 'How to start mining $TOR?',
      thumbnail: 'https://images.unsplash.com/photo-1633354998322-415842c7ee11?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/mine'
    },
    {
      title: 'Whitepaper',
      thumbnail: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/whitepaper'
    },
    {
      title: 'Roadmap',
      thumbnail: 'https://images.unsplash.com/photo-1592111332908-f8f7fe1bb041?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/roadmap'
    },
  ];

  const apps = [
    {
      name: 'News',
      icon: 'https://source.unsplash.com/random/300x200?app',
      link: '/news'
    },
    {
      name: 'Tokenomy',
      icon: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/tokenomy'
    },
    {
      name: 'Start',
      icon: 'https://images.unsplash.com/photo-1608496601160-f86d19a44f9f?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/start'
    },
    {
      name: 'Twitter',
      icon: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://twitter.com/tonoreum'
    },
    {
      name: 'Telegram',
      icon: 'https://images.unsplash.com/photo-1636743085547-4dcf1f9157dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://t.me/Tonoreum'
    },
    {
      name: 'About',
      icon: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2097&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/about'
    },
    {
      name: 'Portfolio',
      icon: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/portfolio'
    },
    {
      name: 'Mine',
      icon: 'https://images.unsplash.com/photo-1666625519702-7270420bb4f9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/mine'
    },
    {
      name: 'Claim',
      icon: 'https://images.unsplash.com/photo-1628873041000-857b83258b82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/claim'
    },
    {
      name: 'Boosters',
      icon: 'https://images.unsplash.com/photo-1642525027649-00d7397a6d4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/boosters'
    },
    {
      name: 'Buy Token',
      icon: 'https://images.unsplash.com/photo-1647462659318-1e9702f92b5b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/buy-token'
    },
    {
      name: 'FAQ',
      icon: 'https://images.unsplash.com/photo-1484069560501-87d72b0c3669?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/faq'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-[#EEFCFC]" style={{ maxWidth: '1200px' }}> 
      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-3 text-[#333]">Crucial information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#333]">
            {videos.map((video, index) => (
              <VideoItem key={index} {...video} isLarge={index === 0} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-4 text-[#333]">
            {apps.map((app, index) => (
              <AppItem key={index} {...app} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestSection;
