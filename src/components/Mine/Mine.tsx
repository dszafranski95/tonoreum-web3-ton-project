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
    link: 'https://link-to-shrimp-farm.com',

  },
  {
    name: 'Start mine $TOR when verified.',
    description: 'When your account is verified it is time to mine $TOR',
    image: '/favicon.jpg',
    link: 'https://link-to-snail-farm.com',

  },
];

const Mine = () => {
  const { address, balance } = useWalletInfo();
  const isWalletConnected = useWalletConnected();

  const handleNFTClick = (farmLink: string) => {
    window.open(farmLink, '_blank');
  };
  

  return (
    <div className="bg-[#EEFCFC] min-h-screen flex flex-col justify-center items-center p-4">
      {isWalletConnected ? (
        <>
<div className="flex items-center justify-center mb-4">
<img 
    src="/favicon.jpg" 
    alt="how to start mine?" 
    className="h-20 w-20 object-cover" // Ustawia wysokość i szerokość obrazka na 20
  />
  <div className="text-dark text-4xl mr-4">How to start mine?</div>
</div>
          <div className="bg-white shadow-xl rounded-lg p-6 max-w-6xl w-full">
            <div className="grid grid-cols-2 gap-4">
              {farms.map((farm, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center cursor-pointer transition duration-300 hover:bg-blue-100" onClick={() => handleNFTClick(farm.link)}>
                  <img src={farm.image} alt={farm.name} className="h-40 w-40 object-cover mx-auto" />
                  <p className="badge badge-accent mt-2">{farm.name}</p>
                  
                  <p><div className="badge badge-neutral">{farm.description}</div></p>

                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="text-3xl font-bold text-white">
          Please connect your wallet to play the game.
        </div>
      )}
    </div>
  );
};

export default Mine;
