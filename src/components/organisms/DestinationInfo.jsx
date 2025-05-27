import React from 'react';
import { FaClock, FaTicketAlt, FaMapMarkerAlt, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';

function DestinationInfo() {
  // Tourism information data
  const destinationInfo = {
    name: "Mount Kelud",
    location: "Kediri/Blitar, East Java",
    openHours: "08.00 AM - 05.00 PM",
    ticketPrice: {
      weekday: "Rp 15,000 (Monday-Friday)",
      weekend: "Rp 20,000 (Saturday-Sunday)",
      international: "Rp 150,000 (Foreign Tourists)"
    },
    facilities: ["Parking", "Toilets", "Food Stalls", "Rest Area", "Viewpoints", "Hiking Trails", "Camping Area", "Photo Spots"],
    bookingInfo: "Tickets can be booked online through the Blitar Tourism E-Ticket application or directly at the entrance gate",
    bestTime: "April to October (Dry Season)",
    difficulty: "Moderate",
    elevation: "1,731 meters above sea level"
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
        {/* Title MT.KELUD */}
        <div className="text-center mb-8">
          <h1 className="text-[#CC1720] text-5xl md:text-6xl font-bold mb-2">
            MT.KELUD
          </h1>
          <p className="text-gray-500 text-lg mb-2">Blitar</p>
        </div>
        
        {/* Mount Kelud Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-center text-gray-700 mb-6 leading-relaxed">
            Mount Kelud is an active volcano in East Java, Indonesia. Famous for its explosive eruptions and beautiful crater lake, it has become a popular tourist destination in Blitar. With an elevation of 1,731 meters above sea level, Mount Kelud offers spectacular natural scenery and an unforgettable tourism experience.
          </p>
          <p className="text-lg text-center text-gray-700 mb-8 leading-relaxed">
            The volcano is known for its periodic eruptions, with the most recent major eruption occurring in 2014. Despite its active status, the area has been developed for tourism with safe viewing platforms and hiking trails. Visitors can enjoy the stunning views of the crater lake, lush forests, and surrounding landscapes. The journey to Mount Kelud is an adventure in itself, passing through scenic villages and agricultural lands.
          </p>
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
              src="https://asset.kompas.com/crops/oDTMd3mxLQ_XLl5Ij_YHnOsHiWA=/0x0:1000x667/750x500/data/photo/2021/12/16/61bb2c3a6a7e3.jpg" 
              alt="Gunung Kelud" 
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Kolom Kiri */}
              <div>
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-4">
                      <FaClock className="text-[#CC1720] text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Opening Hours</h3>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-700 text-lg">{destinationInfo.openHours}</p>
                    <p className="text-gray-500 text-sm mt-1">Open every day including national holidays</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-4">
                      <FaTicketAlt className="text-[#CC1720] text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Entrance Fee</h3>
                  </div>
                  <div className="ml-14 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Monday - Friday</span>
                      <span className="font-semibold text-gray-800">Rp 15,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Saturday - Sunday</span>
                      <span className="font-semibold text-gray-800">Rp 20,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Foreign Tourists</span>
                      <span className="font-semibold text-gray-800">Rp 150,000</span>
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
                    <h3 className="text-xl font-bold text-gray-800">Facilities</h3>
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
                    <p className="text-gray-500 text-sm mt-1">Clear skies and better visibility during dry season</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-4">
                      <FaInfoCircle className="text-[#CC1720] text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Hiking Difficulty</h3>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-700">{destinationInfo.difficulty}</p>
                    <p className="text-gray-500 text-sm mt-1">Suitable for beginners with reasonable fitness level</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-4">
                      <FaCalendarAlt className="text-[#CC1720] text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Ticket Booking</h3>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-700">{destinationInfo.bookingInfo}</p>
                    <button className="mt-4 bg-[#CC1720] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                      Book Tickets Now
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
              Location Map
            </h3>
            <div className="bg-gray-200 h-80 rounded-xl overflow-hidden shadow-inner">
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-500">Mount Kelud Location Map</p>
                {/* Google Maps or other map can be added here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationInfo;
