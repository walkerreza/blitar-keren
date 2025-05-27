import React from 'react';
import { Link } from 'react-router-dom';

function StoriesHero() {
  const stories = [
    {
      id: 1,
      image: "/src/assets/images/Taman_Pecut.jpg",
      title: "Feel the fresh air on\nthe tea garden in\nINDONESIA",
      alt: "Tea Garden"
    },
    {
      id: 2,
      image: "/src/assets/images/gunung kelud.jpg",
      title: "The wild nature\nexperience of kelud\nof blitar",
      alt: "Kelud Mountain"
    },
    {
      id: 3,
      image: "/src/assets/images/Makam_Soekarno.jpg",
      title: "Beautiful Soekarno\nmemorial place in\nmiddle blitar city",
      alt: "Bung Karno"
    }
  ];

  return (
    <div className="relative w-full pt-0 pb-0 bg-transparent" id="stories">
      {/* Hero Section dengan Full Width */}
      <div className="w-full h-[500px] md:h-[600px] relative overflow-hidden">
        {/* Content dengan Grid */}
        <div className="absolute inset-0 grid grid-cols-3 w-full h-full">
          {stories.map((story, index) => (
            <div key={story.id} className="relative w-full h-full">
              {/* Background Image */}
              <img 
                src={story.image} 
                alt={story.alt} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex flex-col justify-end p-6">
                <h3 className="text-white text-lg md:text-xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: story.title.replace(/\n/g, '<br />') }}></h3>
                <Link to="/detail-stories" className="flex items-center text-white hover:text-[#CC1720] transition-colors">
                  <span className="mr-2">Learn more</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Judul Utama */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white pointer-events-none">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 pointer-events-auto">
            Travel Stories from different<br />people globally
          </h1>
        </div>
      </div>
    </div>
  );
}

export default StoriesHero;
