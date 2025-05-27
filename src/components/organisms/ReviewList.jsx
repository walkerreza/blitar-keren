import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ReviewList() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [reviews, setReviews] = useState([
    // Data default jika tidak ada review di localStorage
  
    {
      id: 1,
      title: 'A Wonderful Journey to Mount Kelud',
      image: 'https://asset.kompas.com/crops/oDTMd3mxLQ_XLl5Ij_YHnOsHiWA=/0x0:1000x667/750x500/data/photo/2021/12/16/61bb2c3a6a7e3.jpg',
      description: 'Mount Kelud is one of the most active volcanoes in East Java. Located at the border of Kediri, Blitar, and Malang regencies, this mountain offers breathtaking natural scenery with its crater and beautiful lake. The hiking trail is well-maintained and suitable for beginners.',
      author: 'John Smith',
      date: '3 days ago',
      rating: 4.8,
      reviews: 24,
      location: 'Blitar, East Java',
      place: 'Mount Kelud'
    },
    {
      id: 2,
      title: 'Relaxing Day at Serang Beach',
      image: 'https://asset.kompas.com/crops/QCw-ad0KtYAoz9lL3AoKfhDEr_4=/0x0:1000x667/750x500/data/photo/2022/05/24/628c8d5a6ffc7.jpg',
      description: 'Serang Beach in Blitar offers a perfect getaway with its soft white sand and clear blue sea. The beach has various activities like ATV riding and delicious seafood stalls. The sunset view is absolutely stunning and worth waiting for. Highly recommended for beach lovers!',
      author: 'Emily Johnson',
      date: '1 week ago',
      rating: 4.5,
      reviews: 18,
      location: 'Panggungrejo, Blitar',
      place: 'Serang Beach'
    },
    {
      id: 3,
      title: 'Historical Visit to Bung Karno Tomb',
      image: 'https://asset.kompas.com/crops/RwRpCEqLwo9xYB6_riX3C5XcTxI=/0x0:1000x667/750x500/data/photo/2021/11/08/6188f37e4e38c.jpg',
      description: 'Visiting Bung Karno Tomb in Blitar was a meaningful experience. The site is well-maintained with beautiful architecture and gardens. It offers great insights into Indonesia\'s history and the life of its first president. The museum section displays interesting artifacts and photographs from Sukarno\'s life.',
      author: 'Michael Wong',
      date: '2 weeks ago',
      rating: 4.9,
      reviews: 32,
      location: 'Blitar City',
      place: 'Bung Karno Tomb'
    }
  ]);

  // Mengambil data review dari localStorage saat komponen dimuat
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    
    // Jika ada data review di localStorage, tambahkan ke data default
    if (savedReviews.length > 0) {
      setReviews(savedReviews);
    } else {
      // Data default jika tidak ada review di localStorage
      setReviews([
        {
          id: 1,
          title: 'A Wonderful Journey to Mount Kelud',
          image: 'https://asset.kompas.com/crops/oDTMd3mxLQ_XLl5Ij_YHnOsHiWA=/0x0:1000x667/750x500/data/photo/2021/12/16/61bb2c3a6a7e3.jpg',
          description: 'Mount Kelud is one of the most active volcanoes in East Java. Located at the border of Kediri, Blitar, and Malang regencies, this mountain offers breathtaking natural scenery with its crater and beautiful lake. The hiking trail is well-maintained and suitable for beginners.',
          author: 'John Smith',
          date: '3 days ago',
          rating: 4.8,
          reviews: 24,
          location: 'Blitar, East Java',
          place: 'Mount Kelud'
        },
        {
          id: 2,
          title: 'Relaxing Day at Serang Beach',
          image: 'https://asset.kompas.com/crops/QCw-ad0KtYAoz9lL3AoKfhDEr_4=/0x0:1000x667/750x500/data/photo/2022/05/24/628c8d5a6ffc7.jpg',
          description: 'Serang Beach in Blitar offers a perfect getaway with its soft white sand and clear blue sea. The beach has various activities like ATV riding and delicious seafood stalls. The sunset view is absolutely stunning and worth waiting for. Highly recommended for beach lovers!',
          author: 'Emily Johnson',
          date: '1 week ago',
          rating: 4.5,
          reviews: 18,
          location: 'Panggungrejo, Blitar',
          place: 'Serang Beach'
        },
        {
          id: 3,
          title: 'Historical Visit to Bung Karno Tomb',
          image: 'https://asset.kompas.com/crops/RwRpCEqLwo9xYB6_riX3C5XcTxI=/0x0:1000x667/750x500/data/photo/2021/11/08/6188f37e4e38c.jpg',
          description: 'Visiting Bung Karno Tomb in Blitar was a meaningful experience. The site is well-maintained with beautiful architecture and gardens. It offers great insights into Indonesia\'s history and the life of its first president. The museum section displays interesting artifacts and photographs from Sukarno\'s life.',
          author: 'Michael Wong',
          date: '2 weeks ago',
          rating: 4.9,
          reviews: 32,
          location: 'Blitar City',
          place: 'Bung Karno Tomb'
        }
      ]);
    }
  }, []);

  // Fungsi untuk menampilkan rating bintang
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-4 h-4 text-[#CC1720] fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-[#CC1720] fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fillOpacity="0.5" />
        </svg>
      );
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <div className="w-full bg-gray-50 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Search Input */}
        <div className="relative w-full max-w-md mx-auto mb-8">
          <input 
            type="text" 
            placeholder="What would you like to review..." 
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#CC1720] focus:border-transparent"
            onClick={() => navigate('/create-review')}
            readOnly
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {/* Filter and Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Top Tourist Destinations in Blitar with Reviews
            </h2>
            <p className="text-sm text-gray-500">
              Travelers want to see more reviews of these amazing places
            </p>
          </div>
          <button 
            className="px-4 py-2 text-sm rounded-full border border-[#CC1720] text-[#CC1720] hover:bg-red-50 transition-colors mt-4 md:mt-0 flex items-center"
            onClick={() => navigate('/create-review')}
          >
            <span>Write New Review</span>
          </button>
        </div>
        
        {/* Daftar Review */}
        <div className="space-y-8">
          {reviews.map(review => (
            <div key={review.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  {!review.image || review.image === '' ? (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  ) : (
                    <img 
                      src={review.image} 
                      alt={review.title} 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-2">
                    <span className="text-xs text-gray-500 mb-1 block">Title of your review</span>
                    <h3 className="text-base font-medium text-gray-900">{review.title}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-xs text-gray-500 mb-1 block">Your review</span>
                    <p className="text-sm text-gray-600 line-clamp-2">{review.description}</p>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-xs text-gray-600">{review.rating} ({review.reviews} reviews)</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-xs text-gray-500 mb-1 block">Location</span>
                      <div className="text-sm text-gray-700">{review.location || "Enter Your Location"}</div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 mb-1 block">Where did you travel?</span>
                      <div className="text-sm text-gray-700">{review.place || "Select Place"}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="px-4 py-2 bg-[#CC1720] text-white text-sm rounded-md hover:bg-red-700 transition-colors">
                      Submit Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </div>
  );
}

export default ReviewList;
