// src\components\Navbar\Navbar.tsx
import React, { useState, useEffect } from 'react';
import './navbar.css';
import {TonConnectButton} from "@tonconnect/ui-react";


export const Navbar = () => {

  const [isProductDropdownOpen, setProductDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleProductDropdown = () => {
    setProductDropdownOpen(!isProductDropdownOpen);
    setAboutDropdownOpen(false); // Zamyka drugi dropdown, jeśli jest otwarty
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!isAboutDropdownOpen);
    setProductDropdownOpen(false); // Zamyka drugi dropdown, jeśli jest otwarty
  };

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    // Close other dropdowns if necessary
  };

  useEffect(() => {
    const loadSearchData = async () => {
      if (searchInput) {
        const response = await fetch('/search.json');
        const data = await response.json();
        const filteredResults = data.filter(item => 
          item.title.toLowerCase().startsWith(searchInput.toLowerCase())
        );
        setSearchResults(filteredResults);
      } else {
        setSearchResults([]);
      }
    };

    loadSearchData();
  }, [searchInput]);


return (
<header className="bg-[#EEFCFC]">
<nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1 items-center">
        <a href="/" className="-m-1.5 p-1.5 flex items-center">
            <img className="h-12 w-auto" src="favicon.jpg" alt="Logo"></img>
            <span className="text-xl font-bold ml-3 text-gray-900">Tonoreum</span>
        </a>
    </div>

    <div className="hidden lg:flex lg:items-center lg:space-x-4">  
      <div className="relative">
        <button onClick={toggleProductDropdown} aria-expanded={isProductDropdownOpen} className="inline-flex items-center mr-4 text-black">         
            Play
            <svg className="ml-2 h-5 w-5 flex-none text-gray-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
        </button>

            <div className={`absolute z-10 mt-3 ${isProductDropdownOpen ? 'block' : 'hidden'}`}>
                <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                </svg>
                            </div>
                            <div className="flex-auto">
                            <a href="/portfolio" className="block font-semibold text-gray-900">
                                My Portfolio
                            <span className="absolute inset-0"></span>
                            </a>
                            <p className="mt-1 text-gray-600">Let's see how many coins I've mined.</p>
                    </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <svg className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.832 3.445a1 1 0 0 0-1.664 0l-4 6A1 1 0 0 0 8 11h8a1 1 0 0 0 .832-1.555l-4-6Zm-1.664 17.11a1 1 0 0 0 1.664 0l4-6A1 1 0 0 0 16 13H8a1 1 0 0 0-.832 1.555l4 6Z" clip-rule="evenodd"/>
</svg>


                </div>
                <div className="flex-auto">
                    <a href="/mine" className="block font-semibold text-gray-900">
                    Start Mining
                    <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-600">Here I can start mine my coins.</p>
                </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <svg className="w-6 h-6 text-gray-800 dark:text-white dark:text-white group-hover:text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 3a1 1 0 0 1 .78.375l4 5a1 1 0 1 1-1.56 1.25L13 6.85V14a1 1 0 1 1-2 0V6.85L8.78 9.626a1 1 0 1 1-1.56-1.25l4-5A1 1 0 0 1 12 3ZM9 14v-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"/>
</svg>

                </div>
                <div className="flex-auto">
                    <a href="/claim" className="block font-semibold text-gray-900">
                    Claim your tokens
                    <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-600">Now it's time to get mined tokens!</p>
                </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </div>
                <div className="flex-auto">
                    <a href="/boosters" className="block font-semibold text-gray-900">
                    Your Mining Boosters
                    <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-600">Your mining boosters improve your mine process.</p>
                </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16"> <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/> </svg>
                </div>
                <div className="flex-auto">
                    <a href="/buy-tokens" className="block font-semibold text-gray-900">
                    Buy Tokens
                    <span className="absolute inset-0"></span>
                    </a>
                    <p className="mt-1 text-gray-600">Build strategic funnels that will convert</p>
                </div>
                </div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a href="https://twitter.com/tonoreum" className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
</svg>

                    Twitter
                </a>
                <a href="https://t.me/Tonoreum" className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Telegram icon</title><path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/></svg>
                    Telegram
                </a>
            </div>
            </div>
        </div>
    </div>
</div>


    <div className="flex items-center">
    <button onClick={toggleAboutDropdown} aria-expanded={isAboutDropdownOpen} className="inline-flex items-center mr-4 text-black">
                    Learn
            <svg className="ml-2 h-5 w-5 flex-none text-gray-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
    </button>

    {/* Input field */}
  {/* Input field */}
  <div className="relative flex items-center ml-4 mr-4">
  <input
    type="text"
    className="input input-bordered input-primary w-full max-w-xs"
    placeholder="Type here"
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
  />
  {searchResults.length > 0 && (
    <div className="search-dropdown">
      {searchResults.map((result, index) => (
        <div key={index} className="p-2 hover:bg-gray-100">
          <a href={result.path}>{result.title}</a>
        </div>
      ))}
    </div>
  )}
</div>

    <TonConnectButton />
<div className={`absolute z-10 mt-3 ${isAboutDropdownOpen ? 'block' : 'hidden'}`}>
        <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm9-3a1 1 0 1 0-2 0v2H7a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V7Z" clip-rule="evenodd"/>
</svg>

              </div>
              <div className="flex-auto">
                <a href="/about" className="block font-semibold text-gray-900">
                  About
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">Find out in details about Tonoreum.</p>
              </div>
            </div>
            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11.5c.07 0 .14-.007.207-.021.095.014.193.021.293.021h2a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2H5Zm7 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm1 3V8h1v1H8Z" clip-rule="evenodd"/>
</svg>


              </div>
              <div className="flex-auto">
                <a href="/whitepaper" className="block font-semibold text-gray-900">
                  Whitepaper
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">Read the whitepaper of Tonoreum.</p>
              </div>
            </div>
            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z"/>
</svg>


              </div>
              <div className="flex-auto">
                <a href="/roadmap" className="block font-semibold text-gray-900">
                  Roadmap
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">Find out the futher steps of the project.</p>
              </div>
            </div>
            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
            <svg className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2C8.13401 2 5 5.13401 5 9c0 1.84689.634003 3.54389 1.68629 4.88086L5.43934 17.4393C5.15829 17.7204 5 18.0979 5 18.5C5 19.3284 5.67157 20 6.5 20c.40207 0 .77963-.1583 1.06066-.4393l3.55895-3.24695C11.4561 18.366 13.1531 18.9999 15 19c3.866 0 7-3.134 7-7 0-5.6234-6.7213-12.0302-7-12-.0926.0098-.1811.0305-.2676.0582-.1445.0461-.2864.119-.4254.2078-1.7402 1.1098-2.7786 2.7332-3.5304 4.3676-.1176.2554-.0531.5537.164.771l2.829 2.829c.2173.2174.5156.2818.771.164C14.2567 14.7788 15.88 13.7404 16.9898 12c.0888-.139.1617-.281.2078-.4254.0277-.0865.0484-.1749.0582-.2676C18.9698 7.7216 17.6234 2 12 2zM8.5 18.5c0-.1202.0262-.2381.0761-.3457l2.5458-2.5458C13.2119 14.3127 14.6841 14 16 14c.8133 0 1.5955.1262 2.3193.3599.1127.0365.2306.0547.3507.0547.8284 0 1.5-.6716 1.5-1.5 0-.1201-.0182-.238-.0547-.3507C19.874 10.0955 20 9.3133 20 8.5c0-1.3159-.3127-2.7881-.8929-3.879L14.8457 9.0762c-.1076.05-.2255.0761-.3457.0761-.8284 0-1.5.6716-1.5 1.5 0 .1202.0262.2381.0761.3457l2.5458 2.5458C14.2119 13.3127 14 13.6867 14 14.5c0 2.7614-2.2386 5-5 5-.8133 0-1.5955-.1262-2.3193-.3599-.1127-.0365-.2306-.0547-.3507-.0547-.8284 0-1.5.6716-1.5 1.5z"/>
</svg>

              <div className="flex-auto">
                <a href="/tokenomy" className="block font-semibold text-gray-900">
                  Tokenomy
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">The tokenomy of Tonoreum.</p>
              </div>
            </div>
            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd"/>
</svg>

              </div>
              <div className="flex-auto">
                <a href="/start" className="block font-semibold text-gray-900">
                  How to start?
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">Build strategic funnels that will convert</p>
              </div> 
            </div>
            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z"/>
</svg>


              </div>
              <div className="flex-auto">
                <a href="/news" className="block font-semibold text-gray-900">
                  News
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">Be close anything i happening.</p>
              </div> 
            </div>

          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a href="https://twitter.com/tonoreum" className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
</svg>

                    Twitter
                </a>
                <a href="https://t.me/Tonoreum" className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Telegram icon</title><path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/></svg>
                    Telegram
                </a>
            </div>
        </div>
        </div>
      </div>
  </nav>
</header>

);}

