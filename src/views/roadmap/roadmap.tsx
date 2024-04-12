// src\views\Index\Index.tsx
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Roadmap from '../../components/Roadmap/roadmap';

const MineApp = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        {/* Zawartość aplikacji */}
        <Roadmap />
      </div>
    </div>
  );
};

export default MineApp;
