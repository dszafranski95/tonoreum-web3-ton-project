// src\views\abouit/about.tsx
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import About from '../../components/About/About';

const MineApp = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-1 flex-grow">
        {/* Zawartość aplikacji */}
        <About />
      </div>
    </div>
  );
};

export default MineApp;

