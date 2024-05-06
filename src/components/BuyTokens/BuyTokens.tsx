import React from 'react';

const BuyTokens: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-400 to-indigo-500 flex flex-col justify-center items-center p-4 gap-10">
      
      {/* Iframe Section */}
      <div className="w-full max-w-6xl min-w-0 mb-10"> {/* Adjusted for maximum width and added margin-bottom */}
        <iframe
          src="https://app.ston.fi/swap?outputCurrency=EQCRhkvxiW9Ml44FLTxGePs1xMqBAf-axakBgCEfI8YwHTWW&chartVisible=false&ft=TON&tt=EQCRhkvxiW9Ml44FLTxGePs1xMqBAf-axakBgCEfI8YwHTWW"
          title="Buy TOR Tokens"
          style={{ height: '90vh', width: '100%', minHeight: '500px' }}  // Adjusted height to 60vh for better layout
          className="w-full rounded-2xl border-none"
          allowFullScreen>
        </iframe>
      </div>
      
      {/* Promotion Section */}
      <div className="bg-blue shadow-2xl rounded-2xl overflow-hidden p-8 space-y-6 w-full max-w-md"> {/* Adjusted for maximum width */}
        <a href="https://app.ston.fi/swap?outputCurrency=EQCRhkvxiW9Ml44FLTxGePs1xMqBAf-axakBgCEfI8YwHTWW&chartVisible=false&ft=TON&tt=EQCRhkvxiW9Ml44FLTxGePs1xMqBAf-axakBgCEfI8YwHTWW" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block bg-gray-900 text-white text-lg text-center font-bold py-3 px-6 rounded-full hover:bg-blue-800 transition duration-300"
        >
          Buy $TOR Tokens
        </a>
      </div>

    </div>
  );
};

export default BuyTokens;
