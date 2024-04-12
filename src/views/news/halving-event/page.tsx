import React from 'react';

const HalvingEventNews: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col justify-center items-center px-4 py-10">
      <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow-xl p-8 space-y-6">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">Tonoreum Halving Event</h1>

        <p className="text-gray-600 text-lg">
          In a significant move for the Tonoreum ecosystem, the first halving event has been announced. This pivotal event will reduce the reward for mining a block by 15%. But what does this mean for the miners and the overall ecosystem?
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-6">Understanding Halving</h2>
        <p className="text-gray-600 text-lg">
          Halving is a deliberate economic policy embedded within the Tonoreum smart contract to ensure a sustainable and steady distribution of the $TOR token. By reducing the reward for each mined block by 15% every 30 days, the project simulates scarcity and encourages value appreciation over time.
        </p>

        <p className="text-gray-600 text-lg">
          The implications of this mechanism are profound. Initially, miners enjoy higher rewards which entice early adoption and network growth. As the mining reward decreases, the token's inflation rate slows down, potentially increasing the market demand against a slower growing supply.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mt-6">The Mechanism at Work</h3>
        <p className="text-gray-600 text-lg">
          Halving events are integral to the Tonoreum tokenomics and work as follows:
          <ul className="list-disc ml-8 my-4">
            <li><strong>Regular Interval:</strong> Blocks are produced every five minutes, and for each block, miners are rewarded with $TOR tokens.</li>
            <li><strong>Deflationary Feature:</strong> With each halving, the number of $TOR tokens introduced into the system is decreased, this prolongs the mining lifecycle and rewards early adopters.</li>
            <li><strong>Price Implication:</strong> Historically, halving is correlated with an uptick in token value as it introduces a new scarcity level into the economy.</li>
          </ul>
        </p>

        <p className="text-gray-600 text-lg">
          The Tonoreum halving mechanism is a testament to the project's commitment to creating a robust and economically sound network that stands the test of time. By integrating these events, Tonoreum aligns itself with a vision that balances immediate utility with long-term value growth.
        </p>

        <h4 className="text-xl font-bold text-gray-800 mt-6">Future Outlook</h4>
        <p className="text-gray-600 text-lg">
          As the network matures, and more halving events are implemented, we can expect the dynamics of mining and the economics of the $TOR token to evolve. This evolution will serve to solidify Tonoreum's position as an innovative leader in blockchain tokenomics, creating an attractive ecosystem for miners, investors, and users alike.
        </p>

        <p className="text-gray-600 text-lg mt-6">
          The Tonoreum team is dedicated to providing a transparent and equitable mining experience, underpinned by a deflationary token economy that rewards its community. Stay tuned for more updates as we progress along this exciting journey in blockchain development.
        </p>
      </div>
    </div>
  );
};

export default HalvingEventNews;
