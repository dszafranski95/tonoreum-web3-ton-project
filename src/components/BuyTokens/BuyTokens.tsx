import React from 'react';

const BuyTokens: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-400 to-indigo-500 flex flex-col lg:flex-row justify-center items-center p-4 gap-10">
      {/* Promotion Section */}
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden p-8 space-y-6 w-full lg:max-w-md xl:max-w-lg">
        <img src="/favicon.jpg" alt="Tonoreum Token" className="w-32 h-32 mx-auto"/>
        <h2 className="text-3xl font-bold text-center text-gray-800">Buy $TOR Tokens</h2>
        <p className="text-gray-600 text-center">
          Join the Tonoreum ecosystem by purchasing $TOR tokens. Get started with cryptocurrency and explore the endless possibilities.
        </p>
        <a href="https://app.ston.fi/swap?ft=TON&tt=STON&chartVisible=false&chartInterval=1w" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block bg-blue-600 text-white text-lg text-center font-bold py-3 px-6 rounded-full hover:bg-blue-800 transition duration-300"
        >
          Buy Now
        </a>
      </div>

      {/* Ston.fi Embedded Window - Made significantly larger */}
      <div className="w-full lg:flex-1 xl:flex-[3_3_0%] min-w-0">
        <iframe
          src="https://app.ston.fi/swap?ft=TON&tt=STON&chartVisible=false&chartInterval=1w"
          title="Swap TON to STON"
          style={{ height: '80vh', minHeight: '500px' }} // This sets the height of the iframe to 80% of the viewport height, with a minimum of 500px
          className="w-full rounded-2xl border-none"
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
};

export default BuyTokens;
