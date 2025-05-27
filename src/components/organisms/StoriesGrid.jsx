import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function StoriesGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const stories = [
    {
      id: 1,
      title: "Exploring the Beaches of Blitar",
      excerpt: "Blitar's southern coast offers stunning beaches like Serang, Tambakrejo, and Jolosutro. Each beach has its unique charm, from white sand to exotic black sand and beautiful sunset views...",
      image: "/src/assets/images/pantai_Tambakrejo.jpg",
      author: "Admin",
      date: "May 12, 2023"
    },
    {
      id: 2,
      title: "A Day at Kampung Coklat: Blitar's Chocolate Paradise",
      excerpt: "Kampung Coklat is a chocolate lover's heaven in Blitar. Located in Plosorejo Village, it offers delicious chocolate treats, educational tours about cocoa processing, and beautiful surroundings...",
      image: "/src/assets/images/blitar-jadoel.jpg",
      author: "Admin",
      date: "May 10, 2023"
    },
    {
      id: 3,
      title: "Historical Journey: Bung Karno's Legacy in Blitar",
      excerpt: "Blitar is home to important historical sites related to Indonesia's first president, Sukarno. Visit Istana Gebang, his childhood home, and his final resting place to learn about his life and legacy...",
      image: "/src/assets/images/Makam_Soekarno.jpg",
      author: "Admin",
      date: "May 5, 2023"
    },
    {
      id: 4,
      title: "Adventure at Blitar Park: Fun for the Whole Family",
      excerpt: "Blitar Park offers exciting rides, a giant swimming pool with slides, Instagram-worthy photo spots, and delicious food options. It's the perfect destination for a family day out in Blitar...",
      image: "/src/assets/images/istana-gebang-blitar.jpg",
      author: "Admin",
      date: "May 2, 2023"
    },
    {
      id: 5,
      title: "Nature and Wildlife at Maliran Deer Conservation",
      excerpt: "The Maliran Deer Conservation area in Blitar is perfect for nature lovers. Meet adorable deer in a cool, fresh environment while enjoying the educational experience and outbound facilities...",
      image: "/src/assets/images/maliran deer.webp",
      author: "Admin",
      date: "April 28, 2023"
    },
    {
      id: 6,
      title: "The Majestic Mount Kelud: Blitar's Volcanic Wonder",
      excerpt: "Mount Kelud is one of East Java's most active volcanoes, offering breathtaking views of its crater lake. Located at the border of Blitar, Kediri, and Malang, it's a must-visit destination for nature enthusiasts...",
      image: "/src/assets/images/gunung kelud.jpg",
      author: "Admin",
      date: "April 25, 2023"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-2xl font-bold mb-8">All Travel Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stories.map(story => (
            <div key={story.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{story.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{story.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Ditulis oleh {story.author}</span>
                  <Link to="/detail-stories" className="text-[#CC1720] text-xs font-medium">read more</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </div>
  );
}

export default StoriesGrid;
