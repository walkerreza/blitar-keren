import React, { useRef, useEffect } from 'react';
import Button from '../atoms/Button';

function Hero() {
  const videoRef = useRef(null);
  
  // Daftar tempat wisata di Blitar
  const touristSpots = [

  ];
  
  // Efek untuk memastikan video diputar secara otomatis dan diulang
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section id="beranda" className="relative h-screen w-full" style={{width: '100vw', maxWidth: '100vw', margin: 0, padding: 0, overflow: 'hidden'}}>
      {/* Video Background (YouTube Embed) dengan rasio aspek responsif untuk semua perangkat */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '177.77777778vh', /* 100 * 16/9 */
              height: '56.25vw', /* 100 * 9/16 */
              minWidth: '100%',
              minHeight: '100%',
              objectFit: 'cover',
              pointerEvents: 'none'
            }}
          >
            <source src="/src/assets/Video/Menyusuri Untaian Sejarah dan Keindahan Alam di Kota Blitar.mp4" type="video/mp4" />
            Maaf, browser Anda tidak mendukung tag video.
          </video>
        </div>
      </div>
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Main Header */}
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-6 px-4">
            Discover Historical <br /> and Natural Beauty of <span className="text-[#CC1720] font-extrabold" style={{fontFamily: "'Cinzel Decorative', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>BLITAR</span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-8 px-4">
            Explore the charm of historical sites, culture, and natural beauty in Blitar City, East Java
          </p>
    
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-28 left-0 right-0 flex justify-center z-30 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
      
      {/* Tourist Spots Cards */}
      <div className="absolute inset-x-0 bottom-10 z-20">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {touristSpots.map((spot) => (
              <div 
                key={spot.id} 
                className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-6 transition-all duration-300 hover:bg-white/20 hover:border-white/30"
              >
                <h3 className="text-white text-lg md:text-xl font-bold mb-2">{spot.name}</h3>
                <p className="text-white/80 mb-4">{spot.description}</p>
                <a 
                  href={spot.link} 
                  className="flex items-center text-white hover:text-[#CC1720] transition-colors"
                >
                  <span className="mr-2">Learn More</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
