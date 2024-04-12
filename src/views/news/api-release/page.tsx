import React from 'react';

const APIReleaseNews: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col justify-center items-center px-4 py-10">
      <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow-xl p-8 space-y-6">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">Tonoreum Unveils New API for Enhanced Developer Integration</h1>

        <p className="text-gray-600 text-lg">
          As part of its continuous efforts to improve and expand the Tonoreum ecosystem, a new API has been released, designed to simplify and enhance the way developers interact with the platform.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-6">Seamless Integration for Developers</h2>
        <p className="text-gray-600 text-lg">
          The Tonoreum API represents a significant milestone, providing developers with the tools to create decentralized applications (DApps) that can interact directly with the Tonoreum network. This API opens up a plethora of opportunities for innovation within the TON blockchain.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mt-6">What the API Offers</h3>
        <p className="text-gray-600 text-lg">
          With the new API, developers can now:
          <ul className="list-disc ml-8 my-4">
            <li>Access the network's full mining capabilities programmatically.</li>
            <li>Integrate Tonoreum's unique features into their own applications.</li>
            <li>Facilitate user interactions with the Tonoreum blockchain.</li>
          </ul>
        </p>

        <h4 className="text-xl font-bold text-gray-800 mt-6">Empowering the Community</h4>
        <p className="text-gray-600 text-lg">
          The release of the API is a testament to Tonoreum's commitment to fostering an open and collaborative ecosystem. By empowering developers with these new capabilities, Tonoreum is paving the way for a more robust and interconnected blockchain environment.
        </p>

        <p className="text-gray-600 text-lg mt-6">
          The API documentation is detailed and user-friendly, ensuring that even those with minimal experience on the TON blockchain can leverage the power of Tonoreum in their projects. Developers are encouraged to explore the documentation and start building on the platform, with community support readily available for anyone who needs it.
        </p>

        <p className="text-gray-600 text-lg mt-6">
          This API release marks just the beginning of a series of planned technical enhancements aimed at making Tonoreum the most accessible and developer-friendly platform in the cryptocurrency space.
        </p>
      </div>
    </div>
  );
};

export default APIReleaseNews;
