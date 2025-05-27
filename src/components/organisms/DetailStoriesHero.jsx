import React from 'react';

function DetailStoriesHero() {

  return (
    <div className="relative min-h-[80vh] w-full">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://asset.kompas.com/crops/oDTMd3mxLQ_XLl5Ij_YHnOsHiWA=/0x0:1000x667/750x500/data/photo/2021/12/16/61bb2c3a6a7e3.jpg" 
          className="w-full h-full object-cover transform scale-110"
          alt="Gunung Kelud"
          style={{ transformOrigin: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 md:px-8 lg:px-18 py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          
          {/* Title with outline style as in reference image */}
          <div className="text-center mb-10 flex flex-col items-center mt-32">
            <h1 className="text-8xl md:text-9xl font-bold tracking-wider uppercase mb-8" style={{ 
              color: 'transparent', 
              WebkitTextStroke: '2px white',
              textShadow: '0 0 10px rgba(255,255,255,0.3)'
            }}>
              KELUD
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              One of East Java's most active volcanoes with a stunning crater lake
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailStoriesHero;
