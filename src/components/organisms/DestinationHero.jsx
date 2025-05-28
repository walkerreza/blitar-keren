import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function DestinationHero() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search
  const handleSearch = () => {
    // Save search parameters to localStorage
    const searchParams = {
      query: searchQuery,
      timestamp: new Date().getTime() // Add timestamp to ensure changes are detected
    };
    localStorage.setItem('destinationSearchParams', JSON.stringify(searchParams));
    
    // If already on destination page, use state to trigger re-render
    if (location.pathname === '/destination') {
      // Navigate with replace to avoid adding to history
      navigate('/destination', { replace: true, state: { refresh: Date.now() } });
    } else {
      // Navigate to destination page with search parameters
      navigate('/destination', { state: { refresh: Date.now() } });
    }
  };
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
            <div className="flex-grow">
              <label className="block text-gray-800 text-sm font-medium mb-1">Where do you want to go?</label>
              <input 
                type="text" 
                placeholder="Search destination" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <div className="flex items-end">
              <button 
                className="bg-[#CC1720] text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
                onClick={handleSearch}
              >
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
