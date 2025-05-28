import { useState } from 'react';

function DetailStoriesGrid() {
  const stories = [
    {
      id: 1,
      title: "Climbing Adventure to Mount Kelud",
      excerpt: "An unforgettable experience climbing Mount Kelud and witnessing the stunning beauty of its crater lake.",
      category: "ADVENTURE",
      author: "Rudi Hartono",
      authorImage: "https://randomuser.me/api/portraits/men/42.jpg",
      date: "Jun 15, 2023"
    },
    {
      id: 2,
      title: "Sunset Bliss at Tambakrejo Beach",
      excerpt: "The breathtaking sunset views at Tambakrejo Beach that have become a favorite among local and international tourists.",
      category: "NATURE",
      author: "Dewi Lestari",
      authorImage: "https://randomuser.me/api/portraits/women/32.jpg",
      date: "May 28, 2023"
    },
    {
      id: 3,
      title: "Hidden History of Penataran Temple",
      excerpt: "Fascinating facts and hidden history behind the magnificence of Penataran Temple that are rarely known to visitors.",
      category: "HISTORY",
      author: "Prof. Bambang",
      authorImage: "https://randomuser.me/api/portraits/men/65.jpg",
      date: "Apr 10, 2023"
    },
    {
      id: 4,
      title: "Must-Try Culinary Delights of Blitar",
      excerpt: "Explore the delicious culinary treasures of Blitar, from Pecel rice to mouth-watering chicken satay.",
      category: "CULINARY",
      author: "Siti Nurhaliza",
      authorImage: "https://randomuser.me/api/portraits/women/22.jpg",
      date: "Mar 5, 2023"
    },
    {
      id: 5,
      title: "Visiting Bung Karno's Birthplace",
      excerpt: "A moving journey visiting the birthplace of Indonesia's first president, Bung Karno, and seeing his historical artifacts.",
      category: "HISTORY",
      author: "Ahmad Dahlan",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "Feb 20, 2023"
    },
    {
      id: 6,
      title: "Hidden Natural Beauty of South Blitar",
      excerpt: "Discover the hidden natural wonders in South Blitar region that are still rarely visited by tourists.",
      category: "NATURE",
      author: "Rina Marlina",
      authorImage: "https://randomuser.me/api/portraits/women/45.jpg",
      date: "Jan 15, 2023"
    }
  ];
  
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 6;
  const totalPages = Math.ceil(stories.length / storiesPerPage);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="py-12 bg-white w-full">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {stories.map(story => (
            <div key={story.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[#CC1720] text-xs font-medium">{story.category}</span>
                    <h3 className="text-lg font-bold mt-2 mb-3">{story.title}</h3>
                    <p className="text-gray-600 text-sm">{story.excerpt}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={story.authorImage} 
                        alt={story.author} 
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <p className="text-xs font-medium">{story.author}</p>
                        <p className="text-xs text-gray-500">{story.date}</p>
                      </div>
                    </div>
                    <button className="text-[#CC1720] font-medium text-xs hover:underline">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        

        
        {/* Pagination */}
        <div className="flex justify-center">
          <div className="flex space-x-2">
            <button 
              onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
              disabled={currentPage === 1}
              className={`w-8 h-8 flex items-center justify-center rounded ${currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`w-8 h-8 flex items-center justify-center rounded ${
                  currentPage === index + 1
                    ? 'bg-[#CC1720] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button 
              onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
              disabled={currentPage === totalPages}
              className={`w-8 h-8 flex items-center justify-center rounded ${currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailStoriesGrid;
