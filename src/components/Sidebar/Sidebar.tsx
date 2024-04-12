import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './Sidebar.css';

const Sidebar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  let sidebarClass = "sidebar";
  if (isMobile) {
    sidebarClass += isOpen ? " mobile-sidebar open" : " mobile-sidebar";
  }

  return (
    <>
      {isMobile && (
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? '❌' : '➡️'}
        </button>
      )}
      <div className={`${sidebarClass} bg-gray-800 text-white w-64 min-h-screen pt-8`}>
        {/* Removed sticky class from the container div */}
        <div className="px-4 py-2">
          <h2 className="text-xl font-bold">Tonoreum</h2>
        </div>
        <nav className="overflow-auto">
          <ul>
            <li>
              <Link to="/about" className="block py-2 px-4 hover:bg-gray-700">
                ℹ️ About
              </Link>
            </li>
            <li>
              <Link to="/roadmap" className="block py-2 px-4 hover:bg-gray-700">
                🎯 Roadmap
              </Link>
            </li>
            <li>
              <Link to="/tokenomy" className="block py-2 px-4 hover:bg-gray-700">
                🪙 Tokenomics
              </Link>
            </li>
            <li>
              <Link to="/whitepaper" className="block py-2 px-4 hover:bg-gray-700">
                🧾 Whitepaper
              </Link>
            </li>
            <li>
              <Link to="/start" className="block py-2 px-4 hover:bg-gray-700">
                🚀 How to Start
              </Link>
            </li>
            <hr className="border-t border-gray-600 my-4" />
            <li>
              <Link to="/portfolio" className="block py-2 px-4 hover:bg-gray-700">
                🧑‍💼 My portfolio
              </Link>
            </li>
            <li>
              <Link to="/mine" className="block py-2 px-4 hover:bg-gray-700">
                ⛏️ Start Mining
              </Link>
            </li>
            <li>
              <Link to="/claim" className="block py-2 px-4 hover:bg-gray-700">
                💰 Claim Your Tokens
              </Link>
            </li>
            <li>
              <Link to="/boosters" className="block py-2 px-4 hover:bg-gray-700">
                ⚡ Your Mining Boosters
              </Link>
            </li>
            <li>
              <Link to="/buy-tokens" className="block py-2 px-4 hover:bg-gray-700">
                💵 Buy Tokens
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isMobile && isOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Sidebar;
