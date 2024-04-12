// src\views\Index\Index.tsx
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Start from '../../components/Start/start';

const MineApp = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-10 flex-grow">
        {/* Zawartość aplikacji */}
        <Start />
      </div>
    </div>
  );
};

export default MineApp;
