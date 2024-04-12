// src\App.tsx
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";
import { Navbar } from "./components/Navbar/Navbar";
import { MobileNavbar } from "./components/Navbar/mobile-navbar";
import { Footer } from "./components/Footer/Footer";
import Index from './views/index/Index';
import About from './views/about/About';
import News from './views/news/News';
import HalvingTimer from './components/News/HalvingTimer/HalvingTimer';
import Portfolio from './views/portfolio/portfolio';
import Mine from './views/mine/Mine';
import Claim from './views/claim/Claim';
import Boosters from './views/boosters/Boosters';
import BuyTokens from './views/buy-tokens/BuyTokens';
import Whitepaper from './views/whitepaper/whitepaper';
import Roadmap from './views/roadmap/roadmap';
import Start from './views/start/start';
import Tokenomy from './views/tokenomy/tokenomy';
import Faq from './views/faq/faq';

import HalvingEvent from './views/news/halving-event/page';
import MiningInfrastructure from './views/news/mining-infrastructure/page';
import NftBoosters from './views/news/nft-boosters/page';
import ApiRelease from './views/news/api-release/page';
import TokenListing from './views/news/token-listing/page';
import DeFiIntegration from './views/news/defi-integration/page';
import WalletSupport from './views/news/wallet-support/page';
import Collaborations from './views/news/collaborations/page';
import DigitalGold from './views/news/digital-gold/page';
import DexTrading from './views/news/dex-trading/page';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
      <TonConnectUIProvider
          manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json"
          uiPreferences={{ theme: THEME.DARK }}
          walletsListConfiguration={{
            includeWallets: [
              {
                appName: "safepalwallet",
                name: "SafePal",
                imageUrl: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
                aboutUrl: "https://www.safepal.com/download",
                jsBridgeKey: "safepalwallet",
                platforms: ["ios", "android", "chrome", "firefox"]
              },
              {
                appName: "tonwallet",
                name: "TON Wallet",
                imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
                aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
                universalLink: "https://wallet.ton.org/ton-connect",
                jsBridgeKey: "tonwallet",
                bridgeUrl: "https://bridge.tonapi.io/bridge",
                platforms: ["chrome", "android"]
              }
            ]
          }}
          actionsConfiguration={{
              twaReturnUrl: 'https://t.me/tc_twa_demo_bot/start'
          }}
      >
      <Router>
        <div className="app">
        
          
          
          {isMobile ? <MobileNavbar /> : <Navbar />}
          <HalvingTimer />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/mine" element={<Mine />} />
            <Route path="/claim" element={<Claim />} />
            <Route path="/boosters" element={<Boosters />} />
            <Route path="/buy-tokens" element={<BuyTokens />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/start" element={<Start />} />
            <Route path="/tokenomy" element={<Tokenomy />} /> 
            <Route path="/faq" element={<Faq />} />

            <Route path="/news/halving-event" element={<HalvingEvent />} />
            <Route path="/news/mining-infrastructure" element={<MiningInfrastructure />} />
            <Route path="/news/nft-boosters" element={<NftBoosters />} />
            <Route path="/news/api-release" element={<ApiRelease />} />
            <Route path="/news/token-listing" element={<TokenListing />} />
            <Route path="/news/defi-integration" element={<DeFiIntegration />} />
            <Route path="/news/wallet-support" element={<WalletSupport />} />
            <Route path="/news/collaborations" element={<Collaborations />} />
            <Route path="/news/digital-gold" element={<DigitalGold />} />
            <Route path="/news/dex-trading" element={<DexTrading />} />


            {/* Tutaj możesz dodać więcej tras */}
          </Routes>
          <Footer />
        </div>
      </Router>
      </TonConnectUIProvider>
  )
}

export default App
