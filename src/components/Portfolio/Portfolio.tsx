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
    if (navigator.clipboard) { // Checks if the browser supports the clipboard API
      try {
        await navigator.clipboard.writeText(text);
        alert('Address copied to clipboard'); // Informs the user that the address was copied
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-indigo-300 flex justify-center items-center">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-xl overflow-hidden p-8 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Wallet Details</h2>
          {isConnected ? (
            <div className="space-y-4 mt-4">
              <p className="text-lg text-gray-600 cursor-pointer" onClick={() => copyToClipboard(address)}>
                <span className="font-bold">Address:</span>
                <span className="text-indigo-600"> {address}</span>
              </p>
              <p className="text-lg text-gray-600">
                <span className="font-bold">Balance:</span>
                <span className="text-green-500"> {balance} TON</span>
              </p>
            </div>
          ) : (
            <p className="text-lg text-red-500 mt-4">Wallet not connected</p>
          )}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Boosters</h3>
          <div className="inline-block bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={boosterCardImage} alt="NFT Booster" className="h-48 w-auto mx-auto"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
