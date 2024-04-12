// src/components/SidebarMobile/SidebarMobile.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SidebarMobile.css'; // Upewnij się, że masz ten plik z odpowiednimi stylami

export const SidebarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      )}
      <div className={`sidebar-mobile ${isOpen ? 'open' : 'closed'}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <ul className="sidebar-nav">
          <li>
            <Link to="/about" className="sidebar-link" onClick={toggleSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/roadmap" className="sidebar-link" onClick={toggleSidebar}>
              Roadmap
            </Link>
          </li>
          <li>
            <Link to="/tokenomy" className="sidebar-link" onClick={toggleSidebar}>
              Tokenomics
            </Link>
          </li>
          <li>
            <Link to="/whitepaper" className="sidebar-link" onClick={toggleSidebar}>
              Whitepaper
            </Link>
          </li>
          <li>
            <Link to="/start" className="sidebar-link" onClick={toggleSidebar}>
              How to Start
            </Link>
          </li>
          {/* Reszta linków... */}
        </ul>
      </div>
      <button className="burger-btn" onClick={toggleSidebar}>
        &#9776;
      </button>
    </>
  );
};

export default Sidebar
