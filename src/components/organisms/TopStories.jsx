import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TopStories() {
  // State untuk menyimpan ID cerita yang sedang diperluas
  const [expandedStoryId, setExpandedStoryId] = useState(null);
  
  // Fungsi untuk menangani klik pada "Read More"
  const handleReadMore = (id) => {
    if (expandedStoryId === id) {
      setExpandedStoryId(null); // Tutup jika sudah terbuka
    } else {
      setExpandedStoryId(id); // Buka jika belum terbuka
    }
  };
  
  // Data cerita dengan deskripsi lengkap
  const stories = [
    {
      id: 1,
      title: "The Majestic Mount Kelud",
      image: "/src/assets/images/gunung kelud.jpg",
      alt: "Mount Kelud",
      excerpt: "Explore the breathtaking beauty of Mount Kelud, an active volcano with a stunning crater lake. The best time to visit is during the dry season from May to September...",
      fullDescription: "Explore the breathtaking beauty of Mount Kelud, an active volcano with a stunning crater lake. The best time to visit is during the dry season from May to September. Mount Kelud is one of East Java's most active volcanoes, offering breathtaking views of its crater lake. Located at the border of Blitar, Kediri, and Malang, it's a must-visit destination for nature enthusiasts. Despite its history of powerful eruptions, Mount Kelud has become a popular tourist attraction due to its stunning natural beauty. The highlight of the mountain is its crater lake, which changes color depending on the volcanic activity. The hike to the crater is relatively easy, with well-maintained paths and stairs leading to the viewing points. Along the way, you'll encounter lush vegetation and possibly some local wildlife. The panoramic views from the top are absolutely spectacular, especially during sunrise or sunset. For those interested in geology, Mount Kelud provides a fascinating glimpse into the power and beauty of volcanic landscapes.",
      author: "Admin"
    },
    {
      id: 2,
      title: "Exploring the Ancient Penataran Temple",
      image: "/src/assets/images/candi penataran.jpg",
      alt: "Penataran Temple",
      excerpt: "Discover the largest Hindu temple complex in East Java. Built over several centuries, Penataran Temple showcases intricate carvings and rich historical significance...",
      fullDescription: "Discover the largest Hindu temple complex in East Java. Built over several centuries, Penataran Temple showcases intricate carvings and rich historical significance. This magnificent temple complex dates back to the 12th century and was continuously expanded until the 15th century during the Majapahit era. The temple is dedicated to Lord Shiva and features a series of terraced courtyards, each with its own unique structures and carvings. The main temple is adorned with intricate relief panels depicting scenes from Hindu epics like the Ramayana. One of the most fascinating aspects of Penataran Temple is its blend of Hindu and indigenous Javanese elements, reflecting the cultural synthesis that characterized ancient East Java. The temple complex also includes bathing pools, smaller shrines, and ceremonial structures. Archaeological findings suggest that Penataran was an important pilgrimage site and royal temple for several Javanese kingdoms. Today, it stands as a testament to the artistic and architectural achievements of ancient Java and offers visitors a glimpse into Indonesia's rich pre-Islamic heritage.",
      author: "Admin"
    },
    {
      id: 3,
      title: "Historical Journey to Bung Karno's Tomb",
      image: "/src/assets/images/Makam_Soekarno.jpg",
      alt: "Bung Karno Tomb",
      excerpt: "Visit the final resting place of Indonesia's first president, Sukarno. This historical site features beautiful architecture and offers insights into Indonesia's struggle for independence...",
      fullDescription: "Visit the final resting place of Indonesia's first president, Sukarno. This historical site features beautiful architecture and offers insights into Indonesia's struggle for independence. The Bung Karno Tomb complex in Blitar is more than just a burial site; it's a national monument that honors the founding father of Indonesia. The complex features a grand mausoleum with a distinctive roof inspired by traditional Javanese architecture. Inside, Sukarno's tomb is made of black marble and surrounded by an atmosphere of reverence. Adjacent to the tomb is a museum that houses a collection of Sukarno's personal belongings, photographs, and documents chronicling his life and Indonesia's fight for independence. The museum provides valuable context about Sukarno's role in shaping modern Indonesia, his political philosophy, and his contributions to the non-aligned movement during the Cold War. The entire complex is set within beautifully landscaped gardens with reflecting pools and walkways, creating a peaceful environment for visitors to reflect on Indonesia's history. For many Indonesians, a visit to Bung Karno's Tomb is a pilgrimage that connects them to their national identity and the struggle that led to their country's independence.",
      author: "Admin"
    }
  ];
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Top Travel Stories in Blitar</h2>
          <Link to="/detail-stories" className="text-[#CC1720] text-sm font-medium flex items-center">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map(story => (
            <div key={story.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{story.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {expandedStoryId === story.id ? story.fullDescription : story.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Written by {story.author}</span>
                  <button 
                    onClick={() => handleReadMore(story.id)} 
                    className="text-[#CC1720] text-xs font-medium cursor-pointer"
                  >
                    {expandedStoryId === story.id ? "Show Less" : "Read More"}
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

export default TopStories;
