import React from 'react';

const LocationMap = ({ location, title }) => {
  // Menggunakan link langsung ke Google Maps tanpa API Key
  const mapUrl = `https://www.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`;
  
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-md mb-4">
      <iframe
        title={`Peta lokasi ${title}`}
        width="100%"
        height="100%"
        frameBorder="0"
        src={mapUrl}
        allowFullScreen
      ></iframe>
      <div className="mt-2 text-right">
        <a 
          href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition inline-block"
        >
          Lihat di Google Maps
        </a>
      </div>
    </div>
  );
};

export default LocationMap;
