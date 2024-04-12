import React, { useState } from 'react';
import axios from 'axios';
import useWalletConnected from '../../hooks/useWalletConnected';
import useWalletInfo from '../../hooks/useWalletInfo';

const Claim: React.FC = () => {
  const isConnected = useWalletConnected();
  const { address } = useWalletInfo();
  const [userTokenBalance, setUserTokenBalance] = useState('1000'); // Przykładowa wartość

  const handleClaimTokens = async () => {
    try {
      // Zakładamy, że masz już odpowiedni endpoint w backendzie
      const response = await axios.post('/api/claim', { address });
      // Aktualizacja stanu użytkownika po pomyślnym zażądaniu tokenów
      setUserTokenBalance('0');
      alert(response.data.message);
    } catch (error) {
      console.error('Error claiming tokens:', error);
      alert('Failed to claim tokens');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-indigo-300 flex justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl overflow-hidden p-8 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Claim Your Tokens</h2>
          {isConnected ? (
            <div className="space-y-4 mt-4">
              <p className="text-lg text-gray-600">
                <span className="font-bold">Wallet Address:</span>
                <span className="text-indigo-600"> {address}</span>
              </p>
              <p className="text-lg text-gray-600">
                <span className="font-bold">$TOR Token Balance:</span>
                <span className="text-green-500"> {userTokenBalance}</span>
              </p>
              <button 
                className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleClaimTokens}>
                Claim Tokens
              </button>
            </div>
          ) : (
            <p className="text-lg text-red-500 mt-4">Wallet not connected</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Claim;
