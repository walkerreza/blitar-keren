import React, { useState, useEffect } from 'react';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import LocationMap from '../molecules/LocationMap';
import { Link, useNavigate } from 'react-router-dom';

function DestinationInfo() {
  const navigate = useNavigate();
  // Check login status from localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  // State to store destination data
  const [destinationInfo, setDestinationInfo] = useState({
    name: "Mount Kelud",
    location: "Kediri/Blitar, East Java",
    openHours: "08.00 AM - 05.00 PM",
    ticketPrice: {
      weekday: "Rp 15,000 (Monday-Friday)",
      weekend: "Rp 20,000 (Saturday-Sunday)",
      international: "Rp 150,000 (Foreign Tourists)"
    },
    facilities: ["Parking", "Toiletss", "Food Stalls", "Rest Area", "Viewpoints", "Hiking Trails", "Camping Area", "Photo Spots"],
    bookingInfo: "Tickets can be booked online through the Blitar Tourism E-Ticket application or directly at the entrance gate",
    bestTime: "April to October (Dry Season)",
    difficulty: "Moderate",
    elevation: "1,731 meters above sea level"
  });
  
  // Get destination data from localStorage when component is loaded
  useEffect(() => {
    const savedDestination = JSON.parse(localStorage.getItem('selectedDestination'));
    if (savedDestination) {
      // Update destinationInfo with data from localStorage
      setDestinationInfo({
        name: savedDestination.title,
        location: savedDestination.subtitle || "Blitar, East Java",
        openHours: savedDestination.openHours || "08.00 - 17.00 (Every day)",
        ticketPrice: savedDestination.ticketPrice || {
          weekday: "Rp 15,000 (Monday-Friday)",
          weekend: "Rp 20,000 (Saturday-Sunday)",
          international: "Rp 150,000 (Foreign Tourists)"
        },
        facilities: savedDestination.facilities || ["Parking Area", "Toilets", "Food Stalls", "Rest Area"],
        bookingInfo: savedDestination.bookingInfo || "Tickets can be purchased on site",
        bestTime: savedDestination.bestTime || "Morning to evening",
        difficulty: savedDestination.difficulty || "-",
        elevation: savedDestination.elevation || "-",
        description: savedDestination.fullDescription || savedDestination.description,
        image: savedDestination.image,
        historicalSignificance: savedDestination.historicalSignificance || "",
        additionalInfo: savedDestination.additionalInfo || "",
        dress: savedDestination.dress || "",
        mapLocation: savedDestination.mapLocation || { lat: -8.0972, lng: 112.1667 } // Default to Blitar coordinates
      });
    }
  }, []);

  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
        {/* Title of the destination */}
        <div className="text-center mb-8">
          <h1 className="text-[#CC1720] text-5xl md:text-6xl font-bold mb-2">
            {destinationInfo.name.toUpperCase()}
          </h1>
          <p className="text-gray-500 text-lg mb-2">{destinationInfo.location.split(',')[0]}</p>
        </div>
        
        {/* Destination Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-center text-gray-700 mb-8 leading-relaxed">
            {destinationInfo.description}
          </p>
          {destinationInfo.historicalSignificance && (
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Historical Significance</h4>
              <p className="text-gray-700 leading-relaxed">{destinationInfo.historicalSignificance}</p>
            </div>
          )}
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Tourism Information</h2>
          <div className="w-24 h-1 bg-[#CC1720] mx-auto"></div>
        </div>
        
        {/* Card Utama */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          {/* Header dengan gambar */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={destinationInfo.image} 
              alt={destinationInfo.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-white">{destinationInfo.name}</h3>
                <div className="flex items-center text-white/80 mt-1">
                  <FaMapMarkerAlt className="mr-2" />
                  <p>{destinationInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Informasi Utama */}
          <div className="p-8">
            {destinationInfo.additionalInfo && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Informasi Tambahan</h3>
                <p className="text-gray-700 leading-relaxed">{destinationInfo.additionalInfo}</p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Kolom Kiri */}
              <div>
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-4">
                      <FaClock className="text-[#CC1720] text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Jam Buka</h3>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-700">{destinationInfo.openHours}</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-4">
                      <FaTicketAlt className="text-[#CC1720] text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Harga Tiket Masuk</h3>
                  </div>
                  <div className="ml-14">
                    <div className="space-y-2">
                      {Object.entries(destinationInfo.ticketPrice).map(([key, value]) => {
                        // Jangan tampilkan properti 'parking' di bagian tiket masuk
                        if (key === 'parking') return null;
                        
                        return (
                          <p key={key} className="text-gray-700">{value}</p>
                        );
                      })}
                      
                      {/* Tampilkan informasi parkir jika ada */}
                      {destinationInfo.ticketPrice.parking && (
                        <div className="mt-4">
                          <h4 className="text-md font-semibold text-gray-800 mb-2">Biaya Parkir:</h4>
                          <p className="text-gray-700">{destinationInfo.ticketPrice.parking}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Kolom Kanan */}
              <div>
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-4">
                      <FaInfoCircle className="text-[#CC1720] text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Fasilitas</h3>
                  </div>
                  <div className="ml-14">
                    <div className="flex flex-wrap gap-2">
                      {destinationInfo.facilities.map((facility, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{facility}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-4">
                      <FaCalendarAlt className="text-[#CC1720] text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Best Time to Visit</h3>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-700">{destinationInfo.bestTime}</p>
                  </div>
                </div>
                
                {destinationInfo.difficulty !== "-" && (
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-4">
                        <FaInfoCircle className="text-[#CC1720] text-xl" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Difficulty Level</h3>
                    </div>
                    <div className="ml-14">
                      <p className="text-gray-700">{destinationInfo.difficulty}</p>
                    </div>
                  </div>
                )}
                
                {destinationInfo.dress && (
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-4">
                        <FaInfoCircle className="text-[#CC1720] text-xl" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Recommended Clothing</h3>
                    </div>
                    <div className="ml-14">
                      <p className="text-gray-700">{destinationInfo.dress}</p>
                    </div>
                  </div>
                )}
                
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-4">
                      <FaCalendarAlt className="text-[#CC1720] text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Ticket Booking</h3>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-700">{destinationInfo.bookingInfo}</p>
                    <button 
                      onClick={() => {
                        if (!isLoggedIn) {
                          navigate('/login');
                        } else {
                          navigate('/ticket-order');
                        }
                      }}
                      className="mt-4 bg-[#CC1720] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      Book Ticket Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Location Map */}
          <div className="p-8 bg-gray-50 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <FaMapMarkerAlt className="text-[#CC1720] mr-3" />
              Location on Map
            </h3>
            {destinationInfo.mapLocation ? (
              <LocationMap location={destinationInfo.mapLocation} title={destinationInfo.name} />
            ) : (
              <div className="bg-gray-200 h-80 rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
                <p className="text-gray-500">Location map not available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationInfo;
