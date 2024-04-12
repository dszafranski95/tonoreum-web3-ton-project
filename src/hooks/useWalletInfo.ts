// spongegame/demo-dapp-with-wallet/src/hooks/useWalletInfo.ts
import { useState, useEffect } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';

const useWalletInfo = () => {
  const [walletInfo, setWalletInfo] = useState({ address: '', balance: '' });
  const tonAddress = useTonAddress();

  useEffect(() => {
    const fetchBalance = async (address: string) => {
      // Replace with your actual logic to fetch the balance from the blockchain
      // For example, using a TON blockchain API
      const balance = '0'; // Placeholder for fetched balance
      return balance;
    };

    if (tonAddress) {
      fetchBalance(tonAddress).then(balance => {
        setWalletInfo({ address: tonAddress, balance });
      });
    }
  }, [tonAddress]);

  return walletInfo;
};

export default useWalletInfo;
