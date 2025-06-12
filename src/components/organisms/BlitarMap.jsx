import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import gunungKelud from '../../assets/images/gunung kelud.jpg';
import candiPenataran from '../../assets/images/candi penataran.jpg';
import makamSoekarno from '../../assets/images/Makam_Soekarno.jpg';
import istanaGebang from '../../assets/images/istana-gebang-blitar.jpg';
import pantaiTambakrejo from '../../assets/images/pantai_Tambakrejo.jpg';
import pantaiSerang from '../../assets/images/pantai-serang.jpg';
import pantaiJolosutro from '../../assets/images/Pantai-Jolosutro.jpg';
import cobanWilis from '../../assets/images/coban wilis.jpg';
import jurugBening from '../../assets/images/jurug bening.webp';

function BlitarMap() {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const navigate = useNavigate();
  
  // Destination data from DestinationGrid.jsx
  const destinations = [
    {
      id: 1,
      title: "Mount Kelud",
      subtitle: "Blitar, East Java",
      mapLocation: {
        lat: -7.9333, 
        lng: 112.3083
      },
      description: "Mount Kelud is one of East Java's most active volcanoes, offering breathtaking views of its crater lake.",
      image: gunungKelud
    },
    {
      id: 2,
      title: "Penataran Temple",
      subtitle: "Blitar, East Java",
      mapLocation: {
        lat: -8.0163, 
        lng: 112.2091
      },
      description: "Discover the largest Hindu temple complex in East Java. Built over several centuries, Penataran Temple showcases intricate carvings and rich historical significance.",
      image: candiPenataran
    },
    {
      id: 3,
      title: "Bung Karno Tomb",
      subtitle: "Blitar City",
      mapLocation: {
        lat: -8.0798, 
        lng: 112.1672
      },
      description: "Visit the final resting place of Indonesia's first president, Sukarno. This historical site features beautiful architecture and offers insights into Indonesia's struggle for independence.",
      image: makamSoekarno
    },
    {
      id: 4,
      title: "Istana Gebang",
      subtitle: "Blitar City",
      mapLocation: {
        lat: -8.0978, 
        lng: 112.1763
      },
      description: "Istana Gebang is the childhood home of President Sukarno that has been converted into a museum.",
      image: istanaGebang
    },
    {
      id: 5,
      title: "Tambakrejo Beach",
      subtitle: "Blitar, East Java",
      mapLocation: {
        lat: -8.3189, 
        lng: 112.1253
      },
      description: "Tambakrejo Beach offers stunning views with its exotic black sand and waves suitable for surfing.",
      image: pantaiTambakrejo
    },
    {
      id: 6,
      title: "Serang Beach",
      subtitle: "Blitar, East Java",
      mapLocation: {
        lat: -8.3278, 
        lng: 112.3417
      },
      description: "Serang Beach is one of the most beautiful beaches in Blitar with its clean white sand and clear seawater.",
      image: pantaiSerang
    },
    {
      id: 7,
      title: "Jolosutro Beach",
      subtitle: "Blitar, East Java",
      mapLocation: {
        lat: -8.3174, 
        lng: 112.2051
      },
      description: "Jolosutro Beach is one of the beaches that is still natural with soft black sand and quite large waves.",
      image: pantaiJolosutro
    },
    {
      id: 8,
      title: "Coban Wilis Waterfall",
      subtitle: "Gandusari, Blitar",
      mapLocation: {
        lat: -7.9917, 
        lng: 112.2639
      },
      description: "Coban Wilis Waterfall is one of the amazing waterfalls in Blitar that was affected by the eruption of Mount Kelud in 2014.",
      image: cobanWilis
    },
    {
      id: 9,
      title: "Jurug Bening Waterfall",
      subtitle: "Wates, Blitar",
      mapLocation: {
        lat: -8.2583, 
        lng: 112.3639
      },
      description: "Jurug Bening Waterfall is a natural tourist destination that offers the beauty of a waterfall with exotic black rocks.",
      image: jurugBening
    }
  ];
  
  useEffect(() => {
    // Function to load Leaflet CSS
    const loadLeafletCSS = () => {
      const existingLink = document.querySelector('link[href*="leaflet.css"]');
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
        link.crossOrigin = '';
        document.head.appendChild(link);
      }
    };
    
    // Function to load Leaflet script
    const loadLeafletScript = () => {
      return new Promise((resolve, reject) => {
        if (window.L) {
          resolve(window.L);
          return;
        }
        
        const existingScript = document.querySelector('script[src*="leaflet.js"]');
        if (existingScript) {
          existingScript.addEventListener('load', () => resolve(window.L));
          return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
        script.crossOrigin = '';
        script.async = true;
        
        script.addEventListener('load', () => resolve(window.L));
        script.addEventListener('error', (e) => reject(e));
        
        document.head.appendChild(script);
      });
    };
    
    // Function to handle clicks on markers
    const handleMarkerClick = (destination) => {
      // Simpan data destinasi yang dipilih ke localStorage
      localStorage.setItem('selectedDestination', JSON.stringify(destination));
      // Arahkan ke halaman detail
      navigate('/detail-stories');
    };
    
    // Function to initialize the map
    const initializeMap = async () => {
      if (!mapRef.current) return;
      
      try {
        // Load Leaflet CSS
        loadLeafletCSS();
        
        // Load Leaflet script
        const L = await loadLeafletScript();
        
        // Blitar coordinates
        const blitarCoordinates = [-8.1000, 112.1667];
        
        // Initialize map with scrollWheelZoom disabled
        const map = L.map(mapRef.current, {
          scrollWheelZoom: false, // Disable zoom with mouse scroll
          zoomControl: true,      // Still display zoom controls
          dragging: true,         // Still allow map dragging
        }).setView(blitarCoordinates, 10);
        
        // Add map layer from OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map);
        
        // Add marker for Blitar
        const mainMarker = L.marker(blitarCoordinates).addTo(map);
        mainMarker.bindPopup('<div><h3>Blitar Regency</h3><p>East Java, Indonesia</p></div>');
        
        // Add markers for all destinations
        destinations.forEach(destination => {
          const { mapLocation, title, subtitle, description } = destination;
          // Membuat custom icon untuk marker dengan thumbnail
      const customIcon = L.divIcon({
        className: 'custom-map-marker',
        html: `<div style="background-image: url('${destination.image}'); width: 36px; height: 36px; background-size: cover; background-position: center; border-radius: 50%; border: 3px solid #CC1720;"></div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -20]
      });
      
      // Menggunakan custom icon untuk marker
      const locationMarker = L.marker([mapLocation.lat, mapLocation.lng], { icon: customIcon }).addTo(map);
          
          // Create popup with destination information and thumbnail image
      const popupContent = `
        <div class="popup-content">
          <div style="display: flex; align-items: center; margin-bottom: 10px;">
            <div style="flex: 0 0 80px; margin-right: 10px;">
              <img src="${destination.image}" alt="${title}" style="width: 80px; height: 60px; object-fit: cover; border-radius: 4px;" />
            </div>
            <div>
              <h3 style="font-weight: bold; margin-bottom: 5px;">${title}</h3>
              <p style="font-style: italic; margin-bottom: 0;">${subtitle}</p>
            </div>
          </div>
          <p style="font-size: 0.9em; margin-bottom: 10px;">${description.substring(0, 100)}...</p>
          <button 
            id="btn-${destination.id}" 
            style="background-color: #CC1720; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 4px; width: 100%;"
          >
            View Details
          </button>
        </div>
          `;
          
          // Add popup to marker
          const popup = locationMarker.bindPopup(popupContent);
          
          // Add event listener for button in popup
          popup.on('popupopen', () => {
            setTimeout(() => {
              const button = document.getElementById(`btn-${destination.id}`);
              if (button) {
                button.addEventListener('click', () => {
                  handleMarkerClick(destination);
                });
              }
            }, 100);
          });
        });
        
        setMapLoaded(true);
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };
    
    // Inisialisasi peta
    initializeMap();
    
    // Cleanup function
    return () => {
      if (mapRef.current && mapRef.current.map) {
        mapRef.current.map.remove();
        mapRef.current.map = null;
      }
    };
  }, [navigate]);
  
  return (
    <div className="h-full relative">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col relative z-0">
        <div className="p-3 bg-gray-100 border-b">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Blitar Regency Map</h3>
            <div className="text-sm text-gray-500">
              <span>Source: OpenStreetMap</span>
            </div>
          </div>
        </div>
        
        {/* Container for OpenStreetMap */}
        <div ref={mapRef} className="w-full flex-grow" style={{ minHeight: '500px', position: 'relative', zIndex: 0 }}></div>
        
        <div className="p-3 bg-gray-100 border-t">
          <p className="text-xs text-gray-600">
            <strong>Note:</strong> Click on markers to see information about tourist locations in Blitar
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlitarMap;
