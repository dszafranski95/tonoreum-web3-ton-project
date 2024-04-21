import React from 'react';
import useWalletConnected from '../../hooks/useWalletConnected';
import useWalletInfo from '../../hooks/useWalletInfo';

const miningBoosters = [
  {
    name: 'TeleBoost Miner',
    description: 'Boosts $TOR mining speed',
    image: '/nft.png', // Update this path as necessary
    link: 'https://link-to-teleboost-miner.com',
    boostFactor: '2x',
  },
  {
    name: 'Crypto Drill',
    description: 'Enhances $TOR mining efficiency',
    image: '/nft.png', // Update this path as necessary
    link: 'https://link-to-cryptodrill.com',
    boostFactor: '4x',
  },
  {
    name: 'Quantum Harvester',
    description: 'Harvests $TOR at quantum speed',
    image: '/nft.png', // Update this path as necessary
    link: 'https://link-to-quantumharvester.com',
    boostFactor: '6x',
  },
  {
    name: 'BlockChain Saw',
    description: 'Cuts through $TOR blockchains for mining',
    image: '/nft.png', // Update this path as necessary
    link: 'https://link-to-blockchainsaw.com',
    boostFactor: '8x',
  },
];

const GameMain = () => {
  const { address, balance } = useWalletInfo();
  const isWalletConnected = useWalletConnected();

  const handleNFTClick = (boosterLink) => {
    window.open(boosterLink, '_blank');
  };

  return (
    <div className="bg-[#EEFCFC] min-h-screen flex flex-col items-center p-4">
      {isWalletConnected ? (
        <>
          <div className="flex items-center justify-center mb-4">
            <img 
                src="/favicon.jpg" // Update this path as necessary
                alt="Tonoreum Logo" 
                className="h-20 w-20 object-cover"
            />
            <div className="text-black text-4xl ml-4">Your Mining Boosters:</div>
          </div>
          <div className="text-6xl font-bold text-blue-800 my-8">
            NFT SOON!
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 max-w-6xl w-full">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {miningBoosters.map((booster, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center cursor-pointer transition duration-300 hover:scale-105">
                  <img src={booster.image} alt={booster.name} className="h-40 w-40 object-cover mx-auto mb-2" />
                  <div className="text-xl font-semibold">{booster.name}</div>
                  <div className="text-sm">{booster.description}</div>
                  <div className="badge badge-warning mt-2">{booster.boostFactor} Boost</div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="text-3xl font-bold text-[#333]">
          Please connect your wallet to start mining.
        </div>
      )}
    </div>
  );
};

export default GameMain;
