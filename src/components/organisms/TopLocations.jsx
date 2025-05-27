import { useState, useRef, useEffect } from 'react';
import SectionTitle from '../atoms/SectionTitle';
import LocationCard from '../molecules/LocationCard';

function TopLocations() {
  const locations = [
    {
      id: 1,
      image: "/src/assets/images/gunung kelud.jpg",
      title: "Mount Kelud"
    },
    {
      id: 2,
      image: "/src/assets/images/candi penataran.jpg",
      title: "Penataran Temple"
    },
    {
      id: 3,
      image: "/src/assets/images/Makam_Soekarno.jpg",
      title: "Bung Karno Tomb"
    },
    {
      id: 4,
      image: "/src/assets/images/istana-gebang-blitar.jpg",
      title: "Istana Gebang"
    },
    {
      id: 5,
      image: "/src/assets/images/pantai_Tambakrejo.jpg",
      title: "Tambakrejo Beach"
    },
    {
      id: 6,
      image: "/src/assets/images/pantai-serang.jpg",
      title: "Serang Beach"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');
  const containerRef = useRef(null);
  const itemsPerPage = 3;
  
  // Efek untuk animasi scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = 'transform 0.5s ease-in-out';
      if (isAnimating) {
        containerRef.current.style.transform = slideDirection === 'right' ? 'translateX(-100%)' : 'translateX(100%)';
        
        // Reset setelah animasi selesai
        const timer = setTimeout(() => {
          containerRef.current.style.transition = 'none';
          containerRef.current.style.transform = 'translateX(0)';
          setIsAnimating(false);
        }, 500);
        
        return () => clearTimeout(timer);
      } else {
        containerRef.current.style.transform = 'translateX(0)';
      }
    }
  }, [isAnimating, slideDirection]);
  
  const nextPage = () => {
    if (!isAnimating) {
      setSlideDirection('right');
      setIsAnimating(true);
      
      // Ubah index setelah animasi mulai
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + itemsPerPage;
          return nextIndex >= locations.length ? 0 : nextIndex;
        });
      }, 250);
    }
  };
  
  const prevPage = () => {
    if (!isAnimating) {
      setSlideDirection('left');
      setIsAnimating(true);
      
      // Ubah index setelah animasi mulai
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex - itemsPerPage;
          return nextIndex < 0 ? Math.max(0, locations.length - itemsPerPage) : nextIndex;
        });
      }, 250);
    }
  };

  // Mengambil 3 lokasi yang akan ditampilkan berdasarkan currentIndex
  const visibleLocations = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const index = (currentIndex + i) % locations.length;
    visibleLocations.push(locations[index]);
  }

  return (
    <section className="py-12 bg-white w-full">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold">Top Destinations in Blitar</h2>
            <p className="text-sm text-gray-500">Discover the most beautiful places in Blitar region</p>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={prevPage}
              className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-all duration-300"
              aria-label="Previous page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={nextPage}
              className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-all duration-300"
              aria-label="Next page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-500 ease-in-out overflow-hidden">
          {visibleLocations.map(location => (
            <LocationCard 
              key={location.id}
              image={location.image}
              title={location.title}
              onClick={() => console.log(`Clicked on ${location.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopLocations;
