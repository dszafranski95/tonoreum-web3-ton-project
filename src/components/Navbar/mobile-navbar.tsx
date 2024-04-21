// src\components\Navbar\mobile-navbar.tsx
import React, { useState } from 'react';
import './navbar.css';
import { TonConnectButton } from "@tonconnect/ui-react";

export const MobileNavbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>
      )}
      <header className="bg-[#EEFCFC] z-50 fixed w-full">
        <nav className="flex items-center justify-between p-2">
          <a href="/" className="flex items-center">
            <img className="h-8 w-auto" src="favicon.jpg" alt="Logo" />
            <span className="text-xl font-bold ml-3 text-gray-900">Tonoreum</span>
          </a>

          <button onClick={toggleMenu} className="text-black z-50">
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M4 5h12v2H4V5zm0 6h12v2H4v-2zm0 6h12v2H4v-2z" />
              </svg>
            )}
          </button>

          <div className={`fixed top-0 bottom-0 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out bg-[#EEFCFC] shadow-lg w-3/4 z-50`}>
            <div className="flex flex-col h-full">
              {/* Close button */}
              <button onClick={toggleMenu} className="self-end p-4 mt-2 mr-2">
                <svg className="h-8 w-8 text-gray-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                </svg>
              </button>
              {/* Mobile menu items */}
              <div className="mt-8 text-black">
              <TonConnectButton />

                <a href="/portfolio" className="block p-4 text-xl" onClick={toggleMenu}>My Portfolio</a>
                <a href="/mine" className="block p-4 text-xl" onClick={toggleMenu}>Start Mining</a>
                <a href="/claim" className="block p-4 text-xl" onClick={toggleMenu}>Claim your tokens</a>
                <a href="/boosters" className="block p-4 text-xl" onClick={toggleMenu}>Your Mining Boosters</a>
                <a href="/buy-tokens" className="block p-4 text-xl" onClick={toggleMenu}>Buy Tokens</a>
                <a href="/about" className="block p-4 text-xl" onClick={toggleMenu}>About</a>
                <a href="/whitepaper" className="block p-4 text-xl" onClick={toggleMenu}>Whitepaper</a>
                <a href="/roadmap" className="block p-4 text-xl" onClick={toggleMenu}>Roadmap</a>
                <a href="/tokenomy" className="block p-4 text-xl" onClick={toggleMenu}>Tokenomy</a>
                <a href="/start" className="block p-4 text-xl" onClick={toggleMenu}>How to start?</a>
                {/* Insert TonConnectButton here */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
