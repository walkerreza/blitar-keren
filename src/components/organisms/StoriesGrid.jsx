import React, { useState } from 'react';

import pantaiTambakrejo from '../../assets/images/pantai_Tambakrejo.jpg';
import blitarJadoel from '../../assets/images/blitar-jadoel.jpg';
import makamSoekarno from '../../assets/images/Makam_Soekarno.jpg';
import istanaGebang from '../../assets/images/istana-gebang-blitar.jpg';
import maliranDeer from '../../assets/images/maliran deer.webp';
import gunungKelud from '../../assets/images/gunung kelud.jpg';

function StoriesGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  
  // State to store the ID of the currently expanded story
  const [expandedStoryId, setExpandedStoryId] = useState(null);
  
  // Function to handle click on "read more"
  const handleReadMore = (id) => {
    if (expandedStoryId === id) {
      setExpandedStoryId(null); // Close if already open
    } else {
      setExpandedStoryId(id); // Open if not yet open
    }
  };
  
  const stories = [
    {
      id: 1,
      title: "Exploring the Beaches of Blitar",
      excerpt: "Blitar's southern coast offers stunning beaches like Serang, Tambakrejo, and Jolosutro. Each beach has its unique charm, from white sand to exotic black sand and beautiful sunset views...",
      fullExcerpt: "Blitar's southern coast offers stunning beaches like Serang, Tambakrejo, and Jolosutro. Each beach has its unique charm, from white sand to exotic black sand and beautiful sunset views. Serang Beach is known for its white sand and clear blue water, perfect for swimming and sunbathing. Tambakrejo Beach offers a more rugged experience with its black sand and impressive waves, making it a favorite among surfers. Jolosutro Beach is more secluded, providing a peaceful retreat for those looking to escape the crowds. All these beaches offer breathtaking sunset views that will leave you in awe of nature's beauty.",
      image: pantaiTambakrejo,
      author: "Admin",
      date: "May 12, 2023"
    },
    {
      id: 2,
      title: "A Day at Kampung Coklat: Blitar's Chocolate Paradise",
      excerpt: "Kampung Coklat is a chocolate lover's heaven in Blitar. Located in Plosorejo Village, it offers delicious chocolate treats, educational tours about cocoa processing, and beautiful surroundings...",
      fullExcerpt: "Kampung Coklat is a chocolate lover's heaven in Blitar. Located in Plosorejo Village, it offers delicious chocolate treats, educational tours about cocoa processing, and beautiful surroundings. Visitors can learn about the entire chocolate-making process, from cocoa bean to finished product. The facility includes a chocolate factory, a chocolate shop selling various chocolate products, and a café where you can enjoy chocolate drinks and desserts. There are also cocoa plantations that you can explore, and workshops where you can make your own chocolate. It's an educational and delicious experience that's perfect for families and chocolate enthusiasts.",
      image: blitarJadoel,
      author: "Admin",
      date: "May 10, 2023"
    },
    {
      id: 3,
      title: "Historical Journey: Bung Karno's Legacy in Blitar",
      excerpt: "Blitar is home to important historical sites related to Indonesia's first president, Sukarno. Visit Istana Gebang, his childhood home, and his final resting place to learn about his life and legacy...",
      fullExcerpt: "Blitar is home to important historical sites related to Indonesia's first president, Sukarno. Visit Istana Gebang, his childhood home, and his final resting place to learn about his life and legacy. Istana Gebang, or Gebang Palace, is a colonial-style house where Sukarno spent his childhood. It has been preserved as a museum, displaying personal belongings, photographs, and memorabilia that offer insights into the early life of Indonesia's founding father. The Bung Karno Tomb, located in the heart of Blitar, is a grand monument that serves as Sukarno's final resting place. The complex includes a museum that chronicles his life and contributions to Indonesia's independence. Both sites attract visitors from all over Indonesia and abroad, making Blitar an important destination for those interested in Indonesian history.",
      image: makamSoekarno,
      author: "Admin",
      date: "May 5, 2023"
    },
    {
      id: 4,
      title: "Adventure at Blitar Park: Fun for the Whole Family",
      excerpt: "Blitar Park offers exciting rides, a giant swimming pool with slides, Instagram-worthy photo spots, and delicious food options. It's the perfect destination for a family day out in Blitar...",
      fullExcerpt: "Blitar Park offers exciting rides, a giant swimming pool with slides, Instagram-worthy photo spots, and delicious food options. It's the perfect destination for a family day out in Blitar. The park features a variety of attractions suitable for all ages, from gentle carousel rides for toddlers to thrilling roller coasters for the more adventurous. The water park area includes a large swimming pool with multiple slides, a lazy river, and a splash pad for younger children. Throughout the park, you'll find beautifully landscaped areas with colorful flowers and unique structures that make for great photo opportunities. There are also several food stalls and restaurants offering a range of local and international cuisine to satisfy your hunger after a day of fun.",
      image: istanaGebang,
      author: "Admin",
      date: "May 2, 2023"
    },
    {
      id: 5,
      title: "Nature and Wildlife at Maliran Deer Conservation",
      excerpt: "The Maliran Deer Conservation area in Blitar is perfect for nature lovers. Meet adorable deer in a cool, fresh environment while enjoying the educational experience and outbound facilities...",
      fullExcerpt: "The Maliran Deer Conservation area in Blitar is perfect for nature lovers. Meet adorable deer in a cool, fresh environment while enjoying the educational experience and outbound facilities. The conservation area is home to a large population of deer that roam freely in a natural habitat. Visitors can interact with these gentle creatures, feeding them and taking photos. The area also serves as an educational center, providing information about deer conservation and the importance of protecting wildlife. In addition to deer watching, the site offers various outbound activities such as hiking, camping, and team-building exercises. The lush greenery and fresh mountain air make it a refreshing escape from the hustle and bustle of city life.",
      image: maliranDeer,
      author: "Admin",
      date: "April 28, 2023"
    },
    {
      id: 6,
      title: "The Majestic Mount Kelud: Blitar's Volcanic Wonder",
      excerpt: "Mount Kelud is one of East Java's most active volcanoes, offering breathtaking views of its crater lake. Located at the border of Blitar, Kediri, and Malang, it's a must-visit destination for nature enthusiasts...",
      fullExcerpt: "Mount Kelud is one of East Java's most active volcanoes, offering breathtaking views of its crater lake. Located at the border of Blitar, Kediri, and Malang, it's a must-visit destination for nature enthusiasts. Despite its history of powerful eruptions, Mount Kelud has become a popular tourist attraction due to its stunning natural beauty. The highlight of the mountain is its crater lake, which changes color depending on the volcanic activity. The hike to the crater is relatively easy, with well-maintained paths and stairs leading to the viewing points. Along the way, you'll encounter lush vegetation and possibly some local wildlife. The panoramic views from the top are absolutely spectacular, especially during sunrise or sunset. For those interested in geology, Mount Kelud provides a fascinating glimpse into the power and beauty of volcanic landscapes.",
      image: gunungKelud,
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
                <p className="text-gray-600 text-sm mb-4">
                  {expandedStoryId === story.id ? story.fullExcerpt : story.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Written by {story.author}</span>
                  <button 
                    onClick={() => handleReadMore(story.id)} 
                    className="text-[#CC1720] text-xs font-medium cursor-pointer"
                  >
                    {expandedStoryId === story.id ? "show less" : "read more"}
                  </button>
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
