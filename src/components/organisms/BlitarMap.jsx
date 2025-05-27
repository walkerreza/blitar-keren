import React, { useEffect, useRef, useState } from 'react';

function BlitarMap() {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  useEffect(() => {
    let mapInstance = null;
    let scriptElement = null;
    
    // Fungsi untuk menginisialisasi peta
    const initializeMap = () => {
      if (!mapRef.current) return;
      
      try {
        const blitarCoordinates = { lat: -8.1000, lng: 112.1667 }; // Koordinat Blitar yang diperbarui
        
        // Buat instance peta baru
        mapInstance = new window.google.maps.Map(mapRef.current, {
          center: blitarCoordinates,
          zoom: 12,
          mapTypeId: 'roadmap',
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
        });
        
        // Tambahkan marker untuk Blitar
        const marker = new window.google.maps.Marker({
          position: blitarCoordinates,
          map: mapInstance,
          title: 'Blitar Regency',
          animation: window.google.maps.Animation.DROP
        });
        
        // Tambahkan info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: '<div><h3>Blitar Regency</h3><p>East Java, Indonesia</p></div>'
        });
        
        marker.addListener('click', () => {
          infoWindow.open(mapInstance, marker);
        });
        
        setMapLoaded(true);
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };
    
    // Fungsi untuk memuat Google Maps API script
    const loadGoogleMapsScript = () => {
      // Jika script sudah dimuat
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }
      
      // Periksa apakah script sudah ada di DOM
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        // Jika script sudah ada tapi belum diinisialisasi, tunggu hingga selesai dimuat
        window.initGoogleMap = initializeMap;
        return;
      }
      
      // Definisikan callback global
      window.initGoogleMap = initializeMap;
      
      try {
        // Buat script element
        scriptElement = document.createElement('script');
        scriptElement.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&callback=initGoogleMap`;
        scriptElement.async = true;
        scriptElement.defer = true;
        scriptElement.id = 'google-maps-script';
        
        // Tambahkan script ke head
        document.head.appendChild(scriptElement);
      } catch (error) {
        console.error('Error loading Google Maps script:', error);
      }
    };
    
    // Muat script Google Maps
    loadGoogleMapsScript();
    
    // Cleanup function
    return () => {
      // Hapus callback global
      if (window.initGoogleMap) {
        window.initGoogleMap = null;
      }
      
      // Hapus script element jika ada
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, []);
  
  return (
    <div className="h-full">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
        <div className="p-3 bg-gray-100 border-b">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Blitar Regency Map</h3>
            <div className="text-sm text-gray-500">
              <span>Source: Google Maps</span>
            </div>
          </div>
        </div>
        
        {/* Container untuk Google Maps */}
        <div ref={mapRef} className="w-full flex-grow" style={{ minHeight: '500px' }}></div>
        
        <div className="p-3 bg-gray-100 border-t">
          <p className="text-xs text-gray-600">
            <strong>Note:</strong> Use the map to explore interesting locations in Blitar
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlitarMap;
