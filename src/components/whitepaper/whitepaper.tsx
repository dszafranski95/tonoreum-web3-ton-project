import React from 'react';

const Whitepaper: React.FC = () => {
 return (
   <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col justify-center items-center px-4 py-10">
     <div className="max-w-7xl w-full mx-auto bg-white rounded-lg shadow-xl p-8 space-y-6">
       <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">Tonoreum $TOR Whitepaper</h1>
       
       <h2 className="text-3xl font-bold text-gray-800 mt-6">General</h2>
       <p className="text-gray-600 text-lg">
         Tonoreum is a pioneering project built on the Telegram Open Network (TON), utilizing a unique combination of Proof of Link and Proof of Work algorithms. Its innovation lies in creating individual computational power, known as TOR Power, which enables users to mine TOR currency. This project integrates the functionalities of the Telegram app with advanced blockchain technology, marking a breakthrough in integrating communication and distributed ledger technologies. Users, by joining the TOR channel, not only gain TOR Power but also have the opportunity to increase it by referring new users, for which they receive power bonuses. Moreover, referred individuals start with their own TOR Power package and can continue the referral cycle, fostering rapid and organic network growth.
       </p>
       <p className="text-gray-600 text-lg">
         The goal of the $TOR project is to create the first infrastructure on the TON blockchain based on the Proof of Link consensus. This innovative consensus solution leverages advanced technologies, such as Telegram and other blockchain platforms, to build a decentralized network. Consequently, Tonoreum stands out among other projects by offering only 5% of its tokens in the premine phase, with the rest distributed through regular mining in blocks every five minutes until reaching the maximum supply of 21 billion tokens. This distribution model is designed to stimulate user activity and long-term engagement.
       </p>
       <p className="text-gray-600 text-lg">
         Importantly, users are required to refresh their mining session daily, preventing computational power stagnation and encouraging regular interaction with the platform. A decrease in computational power to zero requires users to re-engage in the mining process, ensuring continuous network activity.
       </p>
       <p className="text-gray-600 text-lg">
         Within the Proof of Work framework, $TOR focuses on building infrastructure with tasks for which users can receive tokens and unique NFTs. This approach not only enriches the $TOR ecosystem but also creates additional opportunities for users to gain value, making Tonoreum an attractive project for investors looking for innovation at the intersection of blockchain technology and social communication.
       </p>
       
       <h2 className="text-3xl font-bold text-gray-800 mt-6">Roadmap 2024</h2>
<p className="text-gray-600 text-lg">

  <ul className="list-disc ml-8">
    <li><span className='font-bold'>Q1: Initiation and Development Phase</span>
      <ul className="list-disc ml-8">
        <li>Starting the development of a decentralized application (DApp) on the Telegram platform.</li>
        <li>Development and testing of the smart contract, providing a basis for secure and efficient mining.</li>
        <li>Expansion of the mining platform infrastructure to enhance its efficiency and accessibility.</li>
        <li>Development and implementation of a marketing strategy to increase project awareness.</li>
      </ul>
    </li>
    <li><span className='font-bold'>Q2: Testing and Market Introduction</span>
      <ul className="list-disc ml-8">
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
    </li>
    <li><span className='font-bold'>Q3: Expansion and Growth</span>
      <ul className="list-disc ml-8">
        <li>Periodic halving of blocks every month to adjust the mining pace to network growth.</li>
        <li>Continued expansion of the mining platform to allow users more efficient mining.</li>
        <li>Release of a new NFT collection, increasing user engagement and introducing new reward mechanisms.</li>
        <li>Implementation of an additional Proof of Work mechanism based on completing tasks in the user panel, introducing a new layer of interaction.</li>
      </ul>
    </li>
    <li><span className='font-bold'>Q4: Further Development and Integration</span>
      <ul className="list-disc ml-8">
        <li>Burning unsold tokens from the premine phase to increase the value of remaining tokens and ensure the project's economic stability.</li>
        <li>Expansion of the platform with new tasks and opportunities to increase user engagement and satisfaction.</li>
        <li>Continuation of marketing activities on social media to further develop the community and increase project visibility.</li>
        <li>Integration of the NFT collection with new currencies and blockchains, opening the project to new markets and growth opportunities.</li>
      </ul>
    </li>
  </ul>
  <p className="text-gray-600 text-lg pt-7">
    This detailed roadmap highlights Tonoreum's commitment to technological development and community building, positioning it as an innovative leader in the blockchain space.
  </p>
</p>


<h2 className="text-3xl font-bold text-gray-800 mt-6">Tokenomics</h2>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner">
  <p className="text-gray-600 text-lg mb-4">
    The $TOR token is characterized by a unique distribution strategy aimed at long-term growth and stability within the Tonoreum ecosystem.
  </p>
  <div className="flex flex-wrap justify-between items-center">
    <div className="w-full md:w-1/2 p-4">
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">Distribution Overview:</h3>
      <p className="text-gray-600 text-lg">
        A significant <span className='font-bold'>91.85% of the total $TOR token supply is allocated for acquisition through an innovative mining process</span>, which operates at regular intervals every five minutes. This process will continue until the total circulation reaches <span className='font-bold'>the cap of 21 billion tokens</span>, ensuring a decentralized and equitable token distribution.
      </p>
      <p className="text-gray-600 text-lg pt-5">
      <span className='font-bold'>Conversely, 8.15% of the total supply is specifically reserved to bolster market liquidity</span>, which is essential for maintaining active and healthy trading on cryptocurrency exchanges. To enhance token value, a strategic portion of this liquidity pool will be burned, thereby reducing the overall token supply and increasing scarcity.
      </p>
    </div>
    <div className="w-full md:w-1/2 p-4">
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">Visualizing Tokenomics:</h3>
      <p className="text-gray-600 mb-2">Below is a chart illustrating the token distribution:</p>
      <img src="/mined.png" alt="Tokenomics Distribution Chart" className="w-50% h-auto rounded-lg shadow-lg" />
      <p className="text-gray-500 text-sm italic mt-2">Figure 1: $TOR Token Distribution Chart</p>
    </div>
  </div>
</div>


       <h2 className="text-3xl font-bold text-gray-800 mt-6">Telegram App</h2> 
       <p className="text-gray-600 text-lg">
       The DApp (decentralized application) created as part of Telegram represents an innovative solution that combines blockchain technology with social communication, allowing users not only to mine blocks but also to distribute them among network members. The key goal of the application is to provide users with the ability to build and increase their own computational power on the blockchain, forming the foundation of the mining process.<br /> <br />
      Every user of the application receives a unique referral link, which enables the increase of their computational power by 75 units each time a new participant joins the network using this link. This reciprocal referral mechanism not only promotes network growth but also encourages active participation in the project's ecosystem. Additionally, newly invited users not only gain a basic computational power of 100 units but also receive a bonus of an additional 25 units of power, further motivating them to engage in the mining process and build their own sub-network of referrals. <br /><br />
      The central element of the user experience is the graphical user panel, accessible directly from the Telegram app. This panel, activated using the TON wallet, serves as a gateway to managing one's resources, receiving rewards from the mining process, and monitoring statistics and progress of one's referral network. Thus, users can easily track their progress, manage computational power, and actively participate in the blockchain ecosystem.
      This approach not only democratizes the mining process, enabling a wide range of users to actively participate in network development, but also leverages the popularity and functionality of the Telegram platform to build a decentralized community around the blockchain project. It exemplifies how modern technologies can collaborate to create innovative and engaged digital ecosystems.
       </p>
       
       <h2 className="text-3xl font-bold text-gray-800 mt-6">Mining</h2>
       <p className="text-gray-600 text-lg">
         Mining in the Tonoreum project is an innovative process that combines elements of traditional cryptocurrency mining with social mechanics and gamification. It utilizes a unique algorithm that allows users to build and increase their computational power, known as TOR Power, through active interaction in the network and the Telegram platform. Every participant in Tonoreum starts with basic computational power, which can be increased in two main ways. The first is through recruiting new users via the referral system. Users receive a unique referral link to share. For each person who joins the Tonoreum project through this link, the referrer's computational power increases by 75 units. Newly invited users not only gain a basic computational power of 100 units but also receive an additional bonus of 25 units, encouraging further network expansion. The second key aspect of the mining process in Tonoreum is the ability to earn rewards and increase computational power through special tasks and interactions within the DApp on Telegram. <br /><br /> This application offers users an intuitive graphical panel for managing their computational power, tracking mining statistics, and receiving rewards. Mining in Tonoreum is not limited to the technical aspect. It is a social process that requires building and maintaining an active user network. This approach not only stimulates the growth and development of the Tonoreum ecosystem but also promotes engagement and cooperation among participants. Moreover, through the gamification of the mining process, where users can acquire NFT boosters to increase TOR Power, the project introduces elements of fun and competition, making participation in the network more attractive and engaging.
       </p>

       <h2 className="text-3xl font-bold text-gray-800 mt-6">SETUP MINER</h2>
<div className="text-gray-600 text-lg mb-4">
  <p>
    To start the mining process in the Tonoreum project, the first step is to engage with the community via the Telegram app. This process is simple and intuitive, making it accessible to a broad range of users, regardless of their previous experience with blockchain technology. <br /><br />
  </p>
  <ol className="list-decimal ml-8">
    <li>
      <strong>Join the Telegram Application:</strong> The first step is to join the dedicated Tonoreum channel available at <a href="https://t.me/Tonoreum" target="_blank" className="text-blue-500 hover:underline">https://t.me/Tonoreum</a>. Here, users can find all necessary information, support, and a community of like-minded individuals. The Telegram app serves as the main tool for communication and interaction in the Tonoreum project.
    </li>
    <li>
      <strong>Connect the TON Wallet:</strong> After joining the Tonoreum channel on Telegram, the next step is to enter the user panel, also known as the dashboard. Here, the user must connect their TON wallet. This is a crucial stage, as the wallet serves as a secure place to store TOR tokens and other rewards earned through the mining process.
    </li>
    <li>
      <strong>Follow the Instructions:</strong> The configuration and start of the mining process are facilitated by the application's intuitive graphical interface. Users should carefully follow the instructions presented in the application, which will guide them through all necessary steps, from initial configuration to advanced mining features.
    </li>
  </ol>
  <br /> 
  <p>
    The Tonoreum project places a strong emphasis on simplifying the mining process and making it as accessible as possible. Thanks to the integration with the Telegram app, the project opens new opportunities for users interested in blockchain technology, offering a supportive and engaged community. This process not only makes it easier to start mining but also promotes network building and computational power enhancement through active collaboration with other project participants.
  </p>
</div>

<h2 className="text-3xl font-bold text-gray-800 mt-6">CLAIM REWARDS</h2>
<div className="text-gray-600 text-lg mb-4">
  <p>
    The process of obtaining rewards from mining in the Tonoreum project is designed to be as intuitive and accessible as possible. Claiming one's rewards is possible at any moment. The key element is the use of the Telegram app and the integrated user panel, which significantly simplifies interaction with the platform.
  </p>
  <ol className="list-decimal ml-8">
    <li>
      <strong>Open the Telegram Application:</strong> The first step is to access the Telegram app and find the Tonoreum project channel. This is where users can manage their activities in the project, including the mining process.
    </li>
    <li>
      <strong>Log in to the Graphical Panel:</strong> Next, users should proceed to the graphical user panel, accessible directly from the Telegram app. At this location, users need to log in using their TON wallet. This is crucial for user identification and managing their digital assets.
    </li>
    <li>
      <strong>Send the Claim Command:</strong> To receive mining rewards, the user must send the "claim" command through the graphical panel. This command initiates the process of transferring rewards to the user's wallet.
    </li>
    <li>
      <strong>Execute the Transaction:</strong> To complete the transaction and cover the transaction fee, it may be necessary to send a transaction of minimal value. This is a standard procedure to cover transaction costs in the blockchain network and enable the transfer of rewards.
    </li>
    <li>
      <strong>Follow the Instructions:</strong> The entire process is detailed in the graphical interface, along with step-by-step instructions on how to go through each part of the process. It is important to follow these instructions carefully to ensure a smooth and effective transaction.
    </li>
  </ol>
  <p>
    The Tonoreum project focuses on simplifying and automating the processes related to mining and receiving rewards, making it approachable even for those new to cryptocurrencies. Integration with Telegram and the ease of using the user panel mean that managing one's assets and receiving rewards are hassle-free and quick, significantly improving the experience for users participating in the project.
  </p>
</div>


<h2 className="text-3xl font-bold text-gray-800 mt-6">TOR POWER</h2>
<div className="text-gray-600 text-lg mb-4">
  <p>
    In the Tonoreum project, TOR Power represents a unit of computational power that plays a key role in the process of mining rewards from blocks generated every 5 minutes. This mechanism allows users to earn rewards proportional to their share of the total computational power in the network. For example, if there are 10 miners in the network and the total computational power is 1000 TOR Power, a user with 100 TOR Power is entitled to receive 10% of the reward from each generated block. This is a fair and transparent way of distributing rewards, encouraging active participation and increasing computational power.
  </p>
  <p>
    TOR Power can be increased by referring new users. Each person who joins the project through a referral link not only contributes to the network's growth but also increases the referring user's computational power by 75 units. New users start with 100 units of TOR Power, and by joining through a referral link, they receive an additional 25 units, giving them 125 units to start with. This structure encourages the building of one's referral network and supports both new and existing users in enhancing their computational power.
  </p>
  <p>
    To maintain activity and engagement in the network, Tonoreum introduced a mechanism for refreshing the mining session. Users must log into their graphical panel every 24 hours and refresh their mining session to maintain their computational power. Failure to log in results in a gradual decrease in computational power according to a specified schedule, leading to a progressive reduction in the ability to mine rewards. This procedure aims to encourage regular interaction with the project and eliminate inactive accounts.
  </p>
  <p className='pb-5'>The schedule for the decrease in power in case of failure to refresh the session is as follows:</p>
  <ul className="list-disc ml-8 font-bold pb-5">
    <li>After 24 hours, TOR Power will decrease by 5%.</li>
    <li>After 48 hours, TOR Power will decrease by an additional 15%.</li>
    <li>After 72 hours, TOR Power will decrease by another 30%.</li>
    <li>After 96 hours, TOR Power will decrease by another 45%.</li>
    <li>After 120 hours, TOR Power will decrease by another 60%.</li>
    <li>After 144 hours, TOR Power will decrease by another 80%.</li>
    <li>After 168 hours, TOR Power will decrease by 100%.</li>
  </ul>
  <p>
    Tonoreum plans to introduce additional tasks within the Proof of Work (PoW) mechanism, which will serve not only to renew mining sessions but also as a way to further increase computational power and rewards for active participants. This model ensures that the most active and engaged users are rewarded, fostering the building of a strong and active community around the project.
  </p>
</div>


<h2 className="text-3xl font-bold text-gray-800 mt-6">BLOCKS & CONTRACT</h2>
<div className="text-gray-600 text-lg">
  <p>The Tonoreum project has implemented an advanced smart contract, which underpins the mechanism for TOR tokens. This smart contract releases new tokens every 24 hours based on the number of blocks generated during that period. Blocks are mined every 5 minutes, providing regular reward distributions, with each block releasing 364604.563656 $TOR.</p>
  <p>An important aspect of the Tonoreum ecosystem is the halving mechanism, occurring every 30 days, which reduces the mining reward for a single block by 15%. This process helps manage inflation and enhances the value of the tokens as the supply of new tokens gradually decreases.</p>
  <p>The smart contract is designed to enable the mining of up to 21 billion TOR tokens, establishing a deflationary token economy to increase value over time.</p>
  <h3>Formulas for Reward Distribution and Block Creation</h3><br />
  <h4 className="font-bold">1. Basic Reward Distribution Per Block</h4>
  <p>Initial block reward: 364604.563656 $TOR. Following each halving, the reward decreases by 15%, described by the formula:</p>
  <p><span className="formula">N<sub>t</sub> = N<sub>0</sub> × (0.85)<sup>m</sup></span></p>
  <p>Where:</p>
  <ul>
    <li><span className="formula">N<sub>t</sub></span> - Block reward after <span className="formula">m</span> halvings.</li>
    <li><span className="formula">N<sub>0</sub></span> - Initial block reward.</li>
    <li><span className="formula">m</span> - Number of halvings occurred.</li>
  </ul><br />
  <h4 className='font-bold'>2. Number of Halvings Over Time</h4>
  <p>The number of halvings depends on the number of days passed:</p>
  <p><span className="formula">m = ⌊d/30⌋</span></p>
  <p>Where:</p>
  <ul>
    <li><span className="formula">⌊ ⋅ ⌋</span> - Denotes the mathematical floor function, rounding down to the nearest whole number.</li>
  </ul><br />
  <h4 className='font-bold'>3. Distribution of Rewards Based on Computational Power</h4>
  <p>If the total computational power of the network is <span className="formula">P<sub>total</sub></span>, and a user's computational power is <span className="formula">P<sub>user</sub></span>, the user's reward from a block is calculated as follows:</p>
  <p><span className="formula">U<sub>n</sub> = (P<sub>user</sub> / P<sub>total</sub>) × N<sub>t</sub></span></p><br />
  <h4 className='font-bold'>4. Total Number of Blocks in a Day</h4>
  <p>Since blocks are generated every 5 minutes, the total number of blocks generated in one day is:</p>
  <p><span className="formula">B<sub>day</sub> = (24 × 60 / 5) = 288</span></p><br />
  <h4 className='font-bold'>5. Total Possible Reward for a User in a Day</h4>
  <p>Considering the user's share and the number of blocks per day, the total potential reward is:</p>
  <p><span className="formula">R<sub>day</sub> = U<sub>n</sub> × B<sub>day</sub></span></p>
</div>


       
       <h2 className="text-3xl font-bold text-gray-800 mt-6">NFT Collection</h2>
       <p className="text-gray-600 text-lg">
         The Tonoreum project introduces an innovative approach to using NFTs in the blockchain ecosystem, adding to its offering NFT collections that have a direct impact on the dynamics and mining capabilities of users. In the first phase, these unique digital assets will serve as boosters of computational power, TOR Power, offering users multipliers of <span className='font-bold'>x2, x4, x6, and x8.</span> Importantly, acquiring these boosters will be possible through the mechanism of burning $TOR tokens, representing an interesting way to regulate the supply of tokens in circulation, while adding value and utility to the process of owning TOR tokens. Additionally, Tonoreum plans to expand the functionality of NFTs in subsequent project phases, introducing collections that will allow direct interactions with other currencies and integration with various blockchain networks. <br /> <br />Such development of the NFT collections will open new opportunities for users related to cross-chain transactions and acquiring various digital assets, increasing interoperability in the cryptocurrency ecosystem. The integration of NFTs as boosters of computational power and tools for cross-chain interactions not only distinguishes Tonoreum from other blockchain projects but also introduces a new level of gamification and user engagement. As a result, participants in the Tonoreum ecosystem not only have a direct impact on their mining capabilities and economic potential but can also actively participate in the evolving world of cryptocurrencies, exploring new networks and acquiring a variety of assets. This innovative model introduces an additional layer of involvement and investment in the project, favoring the long-term development and stability of the Tonoreum ecosystem.
       </p>
     </div>
   </div>
 );
};

export default Whitepaper;
