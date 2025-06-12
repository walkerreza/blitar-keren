import React from 'react';
import { Link } from 'react-router-dom';

import logoKabBlitar from '../../assets/images/sponsors/Lambang_Kabupaten_Blitar.webp.png';
import logoKumparan from '../../assets/images/sponsors/Kumparan-Logo-V4-300x117.png';
import logoDetik from '../../assets/images/sponsors/detik.com.png';
import logoKotaBlitar from '../../assets/images/sponsors/Lambang_Kota_Blitar.png';
import logoUgm from '../../assets/images/sponsors/image 46.png';

import blitarJadoel from '../../assets/images/blitar-jadoel.jpg';
import benCarnival from '../../assets/images/foto-ben-carnival.jpg';
import grebekPancasila from '../../assets/images/grebek-pancasila.jpg';

function Sponsors() {
  const sponsors = [
    {
      id: 1,
      name: 'Kabupaten Blitar',
      logo: logoKabBlitar,
    },
    {
      id: 2,
      name: 'Kumparan',
      logo: logoKumparan,
    },
    {
      id: 3,
      name: 'Detik.com',
      logo: logoDetik,
    },
    {
      id: 4,
      name: 'Kota Blitar',
      logo: logoKotaBlitar,
    },
    {
      id: 5,
      name: 'UGM',
      logo: logoUgm,
    },
  ];

  const destinations = [
    {
      id: 1,
      name: 'Blitar Jadoel',
      image: blitarJadoel,
    },
    {
      id: 2,
      name: 'Ben Carnival Festival',
      image: benCarnival,
    },
    {
      id: 3,
      name: 'Grebek Pancasila',
      image: grebekPancasila,
    },
  ];

  return (
    <section className="py-8 bg-white border-t border-gray-100">
      <div className="w-full px-4 md:px-8 lg:px-12">
        {/* Sponsor logos */}
        <div className="text-center mb-6">
          <h3 className="text-gray-600 text-sm md:text-base uppercase font-medium tracking-wider">ALSO FEATURED IN</h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-12">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="w-24 h-24 md:w-32 md:h-28 flex items-center justify-center p-2">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        
        {/* Plan your trip section */}
        <div className="py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Plan your best trip ever</h2>
            <p className="text-gray-600">Making the Most of Your Travel Experience in 2023</p>
          </div>
          
          {/* Destination cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {destinations.map((destination) => (
              <div key={destination.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6">
            <Link 
              to="/destination" 
              className="inline-flex items-center text-[#CC1720] hover:text-[#a01219] font-medium border border-[#CC1720] rounded-full px-4 py-2"
            >
              <span className="mr-2">View All Destination</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
