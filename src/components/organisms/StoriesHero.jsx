import React, { useState } from 'react';

import tamanPecut from '../../assets/images/Taman_Pecut.jpg';
import gunungKelud from '../../assets/images/gunung kelud.jpg';
import makamSoekarno from '../../assets/images/Makam_Soekarno.jpg';

function StoriesHero() {
  // State to store the ID of the currently expanded story
  const [expandedStoryId, setExpandedStoryId] = useState(null);
  
  // Function to handle click on "Learn more"
  const handleLearnMore = (id) => {
    if (expandedStoryId === id) {
      setExpandedStoryId(null); // Close if already open
    } else {
      setExpandedStoryId(id); // Open if not yet open
    }
  };
  const stories = [
    {
      id: 1,
      image: tamanPecut,
      title: "Feel the fresh air on\nthe tea garden in\nINDONESIA",
      alt: "Tea Garden",
      description: "Taman Pecut in Blitar offers a serene tea garden experience with breathtaking views of lush green tea plantations stretching as far as the eye can see. The cool mountain air and peaceful atmosphere make it a perfect retreat from the hustle and bustle of city life. Visitors can learn about tea cultivation, participate in tea picking activities, and enjoy freshly brewed tea while taking in the stunning scenery. The garden also features walking paths, picnic areas, and photo spots that showcase the natural beauty of the region. Whether you're a tea enthusiast or simply looking for a tranquil getaway, Taman Pecut provides an unforgettable experience that connects you with nature and Indonesia's rich agricultural heritage."
    },
    {
      id: 2,
      image: gunungKelud,
      title: "The wild nature\nexperience of kelud\nof blitar",
      alt: "Kelud Mountain",
      description: "Mount Kelud offers an extraordinary wild nature experience that captivates adventure seekers and nature enthusiasts alike. This active volcano, located at the border of Blitar, Kediri, and Malang, features a stunning crater lake with turquoise waters that change color depending on volcanic activity. The hiking trails wind through lush forests and volcanic landscapes, providing glimpses of unique flora and fauna that have adapted to this dynamic environment. From the summit, visitors are rewarded with panoramic views of East Java's mountainous terrain and surrounding valleys. The area also includes hot springs where you can relax after your trek. Despite its destructive eruptions throughout history, Mount Kelud stands as a testament to nature's resilience and raw beauty, making it a must-visit destination for those seeking an authentic connection with Indonesia's volcanic heritage."
    },
    {
      id: 3,
      image: makamSoekarno,
      title: "Beautiful Soekarno\nmemorial place in\nmiddle blitar city",
      alt: "Bung Karno",
      description: "The Soekarno Memorial in the heart of Blitar City stands as a majestic tribute to Indonesia's founding father and first president. This beautifully designed complex features a grand mausoleum where Soekarno's remains are interred, surrounded by meticulously landscaped gardens and reflective pools that create a serene atmosphere for visitors. The memorial includes a museum housing personal artifacts, photographs, and documents that chronicle Soekarno's life, political journey, and contributions to Indonesia's independence. The architecture blends traditional Indonesian elements with modern design, symbolizing Soekarno's vision of a progressive yet culturally rooted nation. Marble pathways lead visitors through the grounds, where quotes from his famous speeches are engraved on stone monuments. The site has become not only a place of historical significance but also a spiritual pilgrimage for many Indonesians who come to pay their respects to the man who played a pivotal role in shaping the nation's identity and future."
    }
  ];

  return (
    <div className="relative w-full pt-0 pb-0 bg-transparent" id="stories">
      {/* Hero Section with Full Width */}
      <div className="w-full h-[500px] md:h-[600px] relative overflow-hidden">
        {/* Content with Grid */}
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
                <button 
                  onClick={() => handleLearnMore(story.id)} 
                  className="flex items-center text-white hover:text-[#CC1720] transition-colors"
                >
                  <span className="mr-2">{expandedStoryId === story.id ? "Show less" : "Learn more"}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={expandedStoryId === story.id ? "M19 9l-7 7-7-7" : "M14 5l7 7m0 0l-7 7m7-7H3"} />
                  </svg>
                </button>
                {expandedStoryId === story.id && (
                  <div className="mt-3 text-white text-sm">
                    <p>{story.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Main Title */}
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
