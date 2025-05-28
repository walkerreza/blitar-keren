import React from 'react';

function DetailLatestStories() {
  return (
    <section className="py-16 bg-white w-full">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold mb-2">Top Destinations of Blitar City</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore interesting places in Blitar that you must visit</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1588145330361-568d6339c7b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Candi Penataran" 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[#CC1720] text-sm font-medium">HISTORY</span>
                  <h3 className="text-xl font-bold mt-2 mb-4">Penataran Temple: The Largest Cultural Heritage in East Java</h3>
                  <p className="text-gray-600">Penataran Temple is the largest Hindu temple complex in East Java. Built during the Kediri Kingdom and perfected during the Majapahit Kingdom.</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Author" 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium">Budi Santoso</p>
                      <p className="text-xs text-gray-500">Jun 12, 2023</p>
                    </div>
                  </div>
                  <button className="text-[#CC1720] font-medium text-sm hover:underline">Read More</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 bg-gray-100 rounded-lg overflow-hidden shadow-md flex flex-col">
            <div className="h-48">
              <img 
                src="https://images.unsplash.com/photo-1517722014278-c256a91a6fba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Makam Bung Karno" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[#CC1720] text-sm font-medium">HISTORY</span>
                <h3 className="text-lg font-bold mt-2 mb-3">Bung Karno Tomb: The Final Resting Place of the Proclamator</h3>
                <p className="text-gray-600 text-sm">Bung Karno Tomb has become one of the most popular historical tourist destinations in Blitar.</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Author" 
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <p className="text-xs font-medium">Siti Aminah</p>
                    <p className="text-xs text-gray-500">May 20, 2023</p>
                  </div>
                </div>
                <button className="text-[#CC1720] font-medium text-xs hover:underline">Read</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-2">Latest Stories from Blitarans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Latest stories and experiences from residents and visitors of Blitar</p>
        </div>
      </div>
    </section>
  );
}

export default DetailLatestStories;
