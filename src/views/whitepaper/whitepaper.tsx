// src\views\Index\Index.tsx
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Whitepaper from '../../components/whitepaper/whitepaper';

const MineApp = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-1 flex-grow">
        {/* Zawartość aplikacji */}
        <Whitepaper />
      </div>
    </div>
  );
};

export default MineApp;