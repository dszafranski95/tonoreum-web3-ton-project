import React from 'react';

const Roadmap: React.FC = () => {
  return (
    <section>
      <div className="bg-[#F0FCFC] text-black py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-blue-800 uppercase tracking-loose font-bold">Roadmap</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 font-bold">Tonoreum Project Roadmap</p>
            <p className="text-sm md:text-base text-[#333] mb-4">
              This roadmap outlines the key milestones and development phases for the Tonoreum project, showcasing our commitment to innovation and growth in the blockchain space.
            </p>
            <a href="/whitepaper" className="bg-transparent mr-auto hover:bg-blue-300 text-blue-500 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-blue-600 hover:border-transparent">
              Explore Whitepaper
            </a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 border-blue-555 absolute h-full border" style={{ right: '50%', border: '2px solid #0098EA', borderRadius: '1%' }}></div>
                <div className="border-2-2 border-blue-555 absolute h-full border" style={{ left: '50%', border: '2px solid #0098EA', borderRadius: '1%' }}></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-blue-600 font-bold">Q1 2024</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Initiation and Development Phase</h4>
                    <p className="text-sm md:text-base leading-snug text-[#333] text-opacity-100">
                      <ul className="list-disc ml-4">
                        <li>Starting the development of a decentralized application (DApp) on the Telegram platform.</li>
                        <li>Development and testing of the smart contract, providing a basis for secure and efficient mining.</li>
                        <li>Expansion of the mining platform infrastructure to enhance its efficiency and accessibility.</li>
                        <li>Development and implementation of a marketing strategy to increase project awareness.</li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-blue-600 font-bold">Q2 2024</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Testing and Market Introduction</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      <ul className="list-disc ml-4 text-[#333]">
                        <li>Beginning tests of the Telegram application to ensure stability and security.</li>
                        <li>Creation and promotion of $TOR's presence on social media to build community and engage users.</li>
                        <li>Testing of the smart contract in the Telegram Virtual Machine (TVM), ensuring its flawless integration.</li>
                        <li>Development of an API for users, facilitating easy access to project services.</li>
                        <li>Official release of the smart contract on the mainnet, enabling the start of the mining process.</li>
                        <li>Launch of the premine phase and public pre-sale of tokens to ensure liquidity on the trading market.</li>
                        <li>Execution of the first halving of blocks to regulate the pace of mining.</li>
                        <li>Starting the mining process for users, along with listing the $TOR token on exchanges.</li>
                        <li>Introduction of NFT boosters that increase TOR Power computational power, adding a new element of gamification.</li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-blue-600 font-bold">Q3 2024</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Expansion and Growth</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      <ul className="list-disc ml-4 text-[#333]">
                        <li>Periodic halving of blocks every month to adjust the mining pace to network growth.</li>
                        <li>Continued expansion of the mining platform to allow users more efficient mining.</li>
                        <li>Release of a new NFT collection, increasing user engagement and introducing new reward mechanisms.</li>
                        <li>Implementation of an additional Proof of Work mechanism based on completing tasks in the user panel, introducing a new layer of interaction.</li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-blue-600 font-bold">Q4 2024</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Further Development and Integration</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      <ul className="list-disc ml-4 text-[#333]">
                        <li>Burning unsold tokens from the premine phase to increase the value of remaining tokens and ensure the project's economic stability.</li>
                        <li>Expansion of the platform with new tasks and opportunities to increase user engagement and satisfaction.</li>
                        <li>Continuation of marketing activities on social media to further develop the community and increase project visibility.</li>
                        <li>Integration of the NFT collection with new currencies and blockchains, opening the project to new markets and growth opportunities.</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              <img className="mx-auto -mt-16 md:-mt-16" src="favicon.jpg" alt="Roadmap" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
