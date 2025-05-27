import React from 'react';

function DestinationHero() {
  return (
    <div className="relative h-[50vh] w-full">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="src/assets/images/Taman_Pecut.jpg" 
          alt="Penataran Temple Blitar" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 md:px-8 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Explore the Hidden Gems of <br />
          <span className="text-[#CC1720]">BLITAR</span> East Java's Cultural Treasure
        </h1>
        
        {/* Search box */}
        <div className="w-full max-w-3xl mt-8 bg-white rounded-lg shadow-lg p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-medium mb-1">Where do you want to go?</label>
              <input 
                type="text" 
                placeholder="Search destination" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-medium mb-1">When?</label>
              <input 
                type="date" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-medium mb-1">Tour Package</label>
              <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>All Destinations</option>
                <option>Historical Sites</option>
                <option>Beaches</option>
                <option>Mountains</option>
                <option>Waterfalls</option>
                <option>Parks & Gardens</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="bg-[#CC1720] text-white py-2 px-4 rounded hover:bg-red-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationHero;
