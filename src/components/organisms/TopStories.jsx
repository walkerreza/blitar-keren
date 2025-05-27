import React from 'react';
import { Link } from 'react-router-dom';

function TopStories() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Top Travel Stories in Blitar</h2>
          <Link to="/detail-stories" className="text-[#CC1720] text-sm font-medium flex items-center">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src="/src/assets/images/gunung kelud.jpg" 
                alt="Mount Kelud" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">The Majestic Mount Kelud</h3>
              <p className="text-gray-600 text-sm mb-4">Explore the breathtaking beauty of Mount Kelud, an active volcano with a stunning crater lake. The best time to visit is during the dry season from May to September...</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Written by Admin</span>
                <Link to="/detail-stories" className="text-[#CC1720] text-xs font-medium">Read More</Link>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src="/src/assets/images/candi penataran.jpg" 
                alt="Penataran Temple" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Exploring the Ancient Penataran Temple</h3>
              <p className="text-gray-600 text-sm mb-4">Discover the largest Hindu temple complex in East Java. Built over several centuries, Penataran Temple showcases intricate carvings and rich historical significance...</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Written by Admin</span>
                <Link to="/detail-stories" className="text-[#CC1720] text-xs font-medium">Read More</Link>
              </div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src="/src/assets/images/Makam_Soekarno.jpg" 
                alt="Bung Karno Tomb" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Historical Journey to Bung Karno's Tomb</h3>
              <p className="text-gray-600 text-sm mb-4">Visit the final resting place of Indonesia's first president, Sukarno. This historical site features beautiful architecture and offers insights into Indonesia's struggle for independence...</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Written by Admin</span>
                <Link to="/detail-stories" className="text-[#CC1720] text-xs font-medium">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopStories;
