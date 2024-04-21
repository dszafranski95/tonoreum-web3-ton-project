import React from 'react';
import useWalletConnected from '../../hooks/useWalletConnected';
import useWalletInfo from '../../hooks/useWalletInfo';

// Define the path to your NFT booster card image here
// Ensure the path is correct relative to your public directory or is an absolute URL
const boosterCardImage = '/nft.png';

const Portfolio: React.FC = () => {
  const isConnected = useWalletConnected();
  const { address, balance } = useWalletInfo();

  const copyToClipboard = async (text: string) => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        alert('Address copied to clipboard');
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-200 to-indigo-500 flex justify-center items-center p-5">
      <div className="max-w-lg w-full bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden p-8 space-y-8 transition-all duration-300 ease-in-out transform hover:scale-105">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Wallet Details</h2>
          {isConnected ? (
            <div className="space-y-4 mt-4">
              <p className="text-lg text-gray-700 cursor-pointer" onClick={() => copyToClipboard(address)}>
                <span className="font-bold">Address:</span>
                <span className="text-indigo-600"> {address}</span>
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-bold">Balance:</span>
                <span className="text-green-500 font-semibold">{balance} $TOR</span>
              </p>
            </div>
          ) : (
            <p className="text-lg text-red-500 mt-4">Wallet not connected</p>
          )}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Boosters - SOON!</h3>
          <div className="inline-block bg-gradient-to-br from-indigo-200 to-purple-500 rounded-lg p-2 shadow-lg">
            <img src={boosterCardImage} alt="NFT Booster" className="h-48 w-auto mx-auto rounded-md"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
