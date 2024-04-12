// src\views\Index\Index.tsx
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Tokenomy from '../../components/Tokenomy/tokenomy';

const MineApp = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-10 flex-grow">
        {/* Zawartość aplikacji */}
        <Tokenomy />
      </div>
    </div>
  );
};

export default MineApp;
