// demo-dapp-with-wallet\src\components\Mine\Mine.tsx
import React from 'react';
import useWalletConnected from '../../hooks/useWalletConnected';
import useWalletInfo from '../../hooks/useWalletInfo';

const farms = [
  {
    name: 'Create TON Wallet',
    description: 'Download TonKepper or other wallet and install.',
    image: '/88587596.png',
    link: 'https://tonkeeper.com/',

  },
  {
    name: 'Install Telegram',
    description: 'Install Telegram and create the account.',
    image: '/telegram.png',
    link: 'https://desktop.telegram.org/',

  },
  {
    name: 'Verify your Telegram account.',
    description: 'Verify your Telegram account to make your telegram ID verified.',
    image: '/ghost.png',
    link: 'https://ton.app/staking/tonoreum-pow-and-pol?id=1710',
  },
  {
    name: 'Start mine $TOR when verified.',
    description: 'When your account is verified it is time to mine $TOR',
    image: '/favicon.jpg',
    link: 'https://ton.app/staking/tonoreum-pow-and-pol?id=1710',

  },
];

const Mine = () => {
  const { address, balance } = useWalletInfo();
  const isWalletConnected = useWalletConnected();

  const handleNFTClick = (farmLink: string) => {
    window.open(farmLink, '_blank');
  };

  return (
    <div className="bg-[#EEFCFC] min-h-screen flex flex-col justify-center items-center px-4 py-8">
      {isWalletConnected ? (
        <>
          <div className="flex items-center justify-center mb-6">
            <img 
                src="/favicon.jpg" 
                alt="Tonoreum Logo" 
                className="h-20 w-20 object-cover mr-4" 
            />
            <h1 className="text-4xl font-bold text-gray-800">How to start mine?</h1>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-8 max-w-6xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {farms.map((farm, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow transition duration-300 hover:bg-blue-50" onClick={() => handleNFTClick(farm.link)}>
                  <img src={farm.image} alt={farm.name} className="h-32 w-32 object-contain mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{farm.name}</h3>
                  <p className="text-gray-600 text-sm">{farm.description}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="text-3xl font-bold text-gray-800">
          Please connect your wallet to play the game.
        </div>
      )}
    </div>
  );
};

export default Mine;