import { useState } from 'react';
import ArticleCard from '../molecules/ArticleCard';
import { Link } from 'react-router-dom';

// Import images
import gunungKelud from '../../assets/images/gunung kelud.jpg';
import candiPenataran from '../../assets/images/candi penataran.jpg';
import makamSoekarno from '../../assets/images/Makam_Soekarno.jpg';
import pantaiTambakrejo from '../../assets/images/pantai_Tambakrejo.jpg';

function TopSelections() {
  const articles = [
    {
      id: 1,
      image: gunungKelud,
      title: "Exploring the Majestic Mount Kelud",
      description: "A thrilling adventure to Mount Kelud's crater lake and surrounding natural wonders. Experience the breathtaking views and volcanic landscapes.",
      date: "May 21, 2023 • 5 min read"
    },
    {
      id: 2,
      image: candiPenataran,
      title: "The Ancient Penataran Temple Complex",
      description: "Discover the largest and most important Hindu temple complex in East Java. A journey through time exploring the intricate carvings and historical significance.",
      date: "May 18, 2023 • 7 min read"
    },
    {
      id: 3,
      image: makamSoekarno,
      title: "A Pilgrimage to Bung Karno's Tomb",
      description: "A moving visit to the final resting place of Indonesia's first president. Explore the historical significance and architectural beauty of this important site.",
      date: "May 15, 2023 • 6 min read"
    },
    {
      id: 4,
      image: pantaiTambakrejo,
      title: "Beach Paradise: Tambakrejo and Serang",
      description: "Discover the hidden coastal gems of Blitar. Experience the pristine beaches, local seafood, and stunning sunsets along Blitar's southern coastline.",
      date: "May 10, 2023 • 8 min read"
    }
  ];
  
  const [currentPage, setCurrentPage] = useState(0);
  
  return (
    <section className="py-12 bg-white w-full">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center mb-6">
          <div className="text-left">
            <h2 className="text-xl font-bold text-left">Top Travel Stories in Blitar</h2>
            <p className="text-sm text-gray-500 text-left">Explore the breathtaking beauty of Blitar through our travelers' experiences</p>
          </div>
          <div>
            <Link to="/stories" className="text-red-600 text-sm font-medium hover:text-red-700 cursor-pointer">
              VIEW ALL STORIES
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map(article => (
            <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base mb-1">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{article.description}</p>
                <div className="text-xs text-gray-500">{article.date}</div>
              </div>
            </div>
          ))}
        </div>
        
      
      </div>
    </section>
  );
}

export default TopSelections;
