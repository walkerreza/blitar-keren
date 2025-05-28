import React, { useState } from 'react';

function StreetViewTour() {
  const [activeLocation, setActiveLocation] = useState(0);
  
  const tourLocations = [
    {
      id: 1,
      name: 'Blitar City Square',
      description: 'The main city square of Blitar that serves as the center of community activities',
      embedUrl: 'https://www.google.com/maps/embed?pb=!4v1748031172326!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRHMtdGV0dkFF!2m2!1d-8.09815946224599!2d112.1651847346519!3f199.96314717913646!4f19.52263086443301!5f0.7820865974627469'
    },
    {
      id: 2,
      name: 'Bung Karno Tomb',
      description: 'The final resting place of Indonesia\'s first president, Sukarno',
      embedUrl: 'https://www.google.com/maps/embed?pb=!4v1716626400000!6m8!1m7!1sCAoSLEFGMVFpcE9ORTlBTXNyaHZoRnNVeXZPMFVSWnRPUGFJRXRQbzBQVFdOZmJP!2m2!1d-8.084819!2d112.176346!3f0!4f0!5f0.7820865974627469'
    },
    {
      id: 3,
      name: 'Penataran Temple',
      description: 'The largest Hindu temple complex in East Java',
      embedUrl: 'https://www.google.com/maps/embed?pb=!4v1716626500000!6m8!1m7!1sCAoSLEFGMVFpcE5LNVR1OHdYMUhyQ3ZZbHhFTGNmMHlZRWdYWVpLbmFVTmZxWXBl!2m2!1d-8.0161!2d112.2092!3f0!4f0!5f0.7820865974627469'
    }
  ];
  

  
  const handleLocationChange = (index) => {
    setActiveLocation(index);
  };
  
  return (
    <div className="h-full">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
        <div className="p-3 bg-gray-100 border-b">
          <div className="flex flex-wrap justify-between items-center">
            <h3 className="font-medium">Location: {tourLocations[activeLocation].name}</h3>
            <div className="flex space-x-2 mt-2 sm:mt-0">
              {tourLocations.map((location, index) => (
                <button
                  key={location.id}
                  onClick={() => handleLocationChange(index)}
                  className={`px-3 py-1 rounded-md text-sm ${index === activeLocation ? 'bg-[#CC1720] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  {location.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Container for Street View */}
        <iframe 
          src={tourLocations[activeLocation].embedUrl} 
          className="w-full flex-grow" 
          style={{border: 0, minHeight: '500px'}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title={`Street View ${tourLocations[activeLocation].name}`}
        ></iframe>
        
        <div className="p-3 bg-gray-100 border-t">
          <p className="text-sm text-gray-700">{tourLocations[activeLocation].description}</p>
        </div>
      </div>
    </div>
  );
}

export default StreetViewTour;
