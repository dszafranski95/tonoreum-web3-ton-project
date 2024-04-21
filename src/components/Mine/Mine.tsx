import React from 'react';
import useWalletConnected from '../../hooks/useWalletConnected';
import useWalletInfo from '../../hooks/useWalletInfo';

const Mine = () => {
  const { address, balance } = useWalletInfo();
  const isWalletConnected = useWalletConnected();

  const startMining = () => {
    window.open('https://ton.app/staking/tonoreum-pow-and-pol?id=1710', '_blank');
  };

  return (
    <div className="bg-[#EEFCFC] min-h-screen flex flex-col justify-center items-center p-4">
      {isWalletConnected ? (
        <div className="flex flex-col items-center justify-center">
                  <div className="text-6xl font-bold text-gray-800">
          Tonoreum
        </div>
          <img 
            src="/favicon.jpg" // Zaktualizuj ścieżkę do loga, jeśli to konieczne
            alt="Tonoreum Logo" 
            className="mb-8 h-48 w-48 object-cover" // Zwiększono rozmiar loga
          />
          <div className="bg-white shadow-2xl rounded-xl p-8 text-center"> 
            <button 
              onClick={startMining}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 text-xl rounded-lg cursor-pointer transition duration-300" // Zwiększono padding i rozmiar tekstu
            >
              Start Mining
            </button>
          </div>
        </div>
      ) : (
        <div className="text-3xl font-bold text-gray-800">
          Please connect your wallet to start mining.
        </div>
      )}
    </div>
  );
};

export default Mine;
