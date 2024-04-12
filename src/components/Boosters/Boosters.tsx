import React from 'react';
import useWalletConnected from '../../hooks/useWalletConnected';
import useWalletInfo from '../../hooks/useWalletInfo';

const miningBoosters = [
  {
    name: 'TeleBoost Miner',
    description: 'Boosts $TOR mining speed',
    image: '/nft.png', // Przykładowa ścieżka do obrazka, zmień na odpowiednią
    link: 'https://link-to-teleboost-miner.com',
    dailyProduction: '0.5',
    totalGenerated: '2x',
  },
  {
    name: 'Crypto Drill',
    description: 'Enhances $TOR mining efficiency',
    image: '/nft.png', // Przykładowa ścieżka do obrazka, zmień na odpowiednią
    link: 'https://link-to-cryptodrill.com',
    dailyProduction: '0.3',
    totalGenerated: '4x',
  },
  {
    name: 'Quantum Harvester',
    description: 'Harvests $TOR at quantum speed',
    image: '/nft.png', // Przykładowa ścieżka do obrazka, zmień na odpowiednią
    link: 'https://link-to-quantumharvester.com',
    dailyProduction: '0.7',
    totalGenerated: '6x',
  },
  {
    name: 'BlockChain Saw',
    description: 'Cuts through $TOR blockchains for mining',
    image: '/nft.png', // Przykładowa ścieżka do obrazka, zmień na odpowiednią
    link: 'https://link-to-blockchainsaw.com',
    dailyProduction: '0.4',
    totalGenerated: '12x',
  },
];

const GameMain = () => {
  const { address, balance } = useWalletInfo();
  const isWalletConnected = useWalletConnected();

  const handleNFTClick = (boosterLink) => {
    window.open(boosterLink, '_blank');
  };

  return (
    <div className="bg-[#EEFCFC] min-h-screen flex flex-col justify-center items-center p-4">
      {isWalletConnected ? (
        <>
          <div className="flex items-center justify-center mb-4">
            <img 
                src="/favicon.jpg" // Przykładowa ścieżka do logo Tonoreum, zmień na odpowiednią
                alt="Tonoreum Logo" 
                className="h-20 w-20 object-cover" // Ustawia wysokość i szerokość obrazka na 20
            />
            <div className="text-black text-4xl mr-4"> Your Mining Boosters:</div>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 max-w-6xl w-full">
            <div className="text-lg font-semibold text-center">
              <div className="badge badge-neutral mb-4">{address}</div>
              <div className="badge badge-info mb-4">{balance} TOR</div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {miningBoosters.map((booster, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center cursor-pointer transition duration-300 hover:bg-blue-100" onClick={() => handleNFTClick(booster.link)}>
                  <img src={booster.image} alt={booster.name} className="h-40 w-40 object-cover mx-auto" />
                  <p className="badge badge-accent mt-2">{booster.name}</p>
                  
                  <p><div className="badge badge-neutral">{booster.description}</div></p>
                  <p><div className="badge badge-neutral">Daily Production: {booster.dailyProduction} $TOR</div></p>
                  <p><div className="badge badge-warning">Boost: {booster.totalGenerated}</div></p>
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

export default GameMain;
