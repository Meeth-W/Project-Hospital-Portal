import React, { useState } from 'react';

function SearchSection() {
  const [activeTab, setActiveTab] = useState('doctor'); // 'doctor' or 'location'

  return (
    <div className="max-w-screen-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex space-x-6 justify-center mb-4">
        {/* Tab Headers */}
        <button
          className={`text-lg font-semibold ${
            activeTab === 'doctor' ? 'text-darkBlue border-b-2 border-darkBlue' : 'text-gray-600'
          } pb-2`}
          onClick={() => setActiveTab('doctor')}
        >
          Find a Doctor
        </button>
        <button
          className={`text-lg font-semibold ${
            activeTab === 'location' ? 'text-darkBlue border-b-2 border-darkBlue' : 'text-gray-600'
          } pb-2`}
          onClick={() => setActiveTab('location')}
        >
          Find a Location
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'doctor' ? (
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {/* Find a Doctor Form */}
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkBlue"
                placeholder="Name, specialty or condition"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkBlue"
                placeholder="Located near: City or ZIP"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {/* Find a Location Form */}
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkBlue"
                placeholder="City"
              />
            </div>

            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkBlue"
                placeholder="State"
              />
            </div>
          </div>
        )}

        {/* Find Button */}
        <div className="flex justify-end mt-4">
          <button className="bg-darkBlue text-white font-medium py-2 px-6 rounded-lg hover:bg-accentBlue transition duration-300">
            Find
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
