import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="text-center p-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
        © 2024 Tonoreum, Inc. All rights reserved.
      </div>

      <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-700">
        <div className="text-gray-200 mr-12 hidden lg:block">
          <span>Connect with us on social networks:</span>
        </div>
        <div className="flex justify-center">
  <a href="https://twitter.com/Tonoreum" target="_blank" rel="noopener noreferrer" className="mr-6 text-gray-200 hover:text-gray-400">
    <FontAwesomeIcon icon={faTwitter} size="2x" />
  </a>
  <a href="https://t.me/Tonoreum" target="_blank" rel="noopener noreferrer" className="mr-6 text-gray-200 hover:text-gray-400">
    <FontAwesomeIcon icon={faTelegramPlane} size="2x" />
  </a>
</div>

      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          
          {/* Section - Tonoreum */}
          <div className="mb-6">
            <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
              Tonoreum
            </h6>
            <p>
              Explore the world of decentralized mining with Tonoreum. Join our community and be a part of the future of blockchain technology.
            </p>
          </div>

          {/* Section - Quick Links */}
          <div className="mb-6">
            <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
              Quick Links
            </h6>
            <p className="mb-4">
              <a href="/news" className="text-gray-400 hover:text-gray-200">News</a>
            </p>
            <p className="mb-4">
              <a href="/tokenomy" className="text-gray-400 hover:text-gray-200">Tokenomy</a>
            </p>
            <p className="mb-4">
              <a href="/whitepaper" className="text-gray-400 hover:text-gray-200">Whitepaper</a>
            </p>
            <p className="mb-4">
              <a href="/roadmap" className="text-gray-400 hover:text-gray-200">Roadmap</a>
            </p>
          </div>

          {/* Section - Resources */}
          <div className="mb-6">
            <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
              Resources
            </h6>
            <p className="mb-4">
              <a href="/start" className="text-gray-400 hover:text-gray-200">Start Mining</a>
            </p>
            <p className="mb-4">
              <a href="/mine" className="text-gray-400 hover:text-gray-200">Mining Guide</a>
            </p>
            <p className="mb-4">
              <a href="/claim" className="text-gray-400 hover:text-gray-200">Claim Rewards</a>
            </p>
            <p className="mb-4">
              <a href="/boosters" className="text-gray-400 hover:text-gray-200">Boosters</a>
            </p>
          </div>

          {/* Section - Support */}
          <div className="mb-6">
            <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
              Support
            </h6>
            <p className="mb-4">
              <a href="/faq" className="text-gray-400 hover:text-gray-200">FAQ</a>
            </p>
            <p className="mb-4">
              <a href="/about" className="text-gray-400 hover:text-gray-200">About Us</a>
            </p>
            <p className="mb-4">
              <a href="https://t.me/Tonoreum" className="text-gray-400 hover:text-gray-200">Contact</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
