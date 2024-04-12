import React from 'react';

const WalletSupport: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col justify-center items-center px-4 py-10">
      <div className="max-w-5xl w-full mx-auto bg-white rounded-lg shadow-xl p-10 space-y-6">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">Wallet Support for $TOR Tokens</h1>
        
        <p className="text-gray-600 text-lg">
          Ensuring the security and accessibility of $TOR tokens is a priority for the Tonoreum project. We support a variety of wallets that enable users to store, manage, and transact $TOR securely. Here's a guide to the wallets that are fully compatible with $TOR tokens.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-6">Supported Wallets</h2>
        
        <h3 className="text-2xl font-bold text-gray-800 mt-4">TonKeeper</h3>
        <p className="text-gray-600 text-lg">
          TonKeeper is a popular choice for users within the TON community. It offers robust security features and a user-friendly interface, making it ideal for both new and experienced users looking to manage their $TOR tokens.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mt-4">OpenMask</h3>
        <p className="text-gray-600 text-lg">
          OpenMask, a versatile browser extension wallet, provides a seamless and secure way to interact with decentralized applications (DApps) on the TON blockchain. It’s designed for ease of use and integrates directly with most web browsers, offering a straightforward approach to managing $TOR tokens.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mt-4">Telegram Wallet</h3>
        <p className="text-gray-600 text-lg">
          Leveraging the widespread use of Telegram, the Telegram Wallet allows users to store and transact $TOR directly within the Telegram application. This integration ensures that users can easily access their tokens, participate in transactions, or use services without ever leaving the chat interface.
        </p>

        <p className="text-gray-600 text-lg mt-6">
          Each of these wallets has been thoroughly tested and integrated with the Tonoreum infrastructure to provide a secure, efficient, and user-friendly experience for managing $TOR tokens. We continue to work on expanding our support to include more wallets, aiming to provide our users with greater flexibility and control over their digital assets.
        </p>
      </div>
    </div>
  );
};

export default WalletSupport;
