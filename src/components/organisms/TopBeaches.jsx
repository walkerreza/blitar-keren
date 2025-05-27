import { useState, useRef, useEffect } from 'react';
import BeachCard from '../molecules/BeachCard';

function TopBeaches() {
  const beaches = [
    {
      id: 1,
      image: "/src/assets/images/pantai_Tambakrejo.jpg",
      title: "Tambakrejo Beach"
    },
    {
      id: 2,
      image: "/src/assets/images/pantai-serang.jpg",
      title: "Serang Beach"
    },
    {
      id: 3,
      image: "/src/assets/images/Pantai-Jolosutro.jpg",
      title: "Jolosutro Beach"
    },
    {
      id: 4,
      image: "/src/assets/images/pangi.jpg",
      title: "Pangi Beach"
    },
    {
      id: 5,
      image: "/src/assets/images/pantaipasur.jpg",
      title: "Pasur Beach"
    },
    {
      id: 6,
      image: "/src/assets/images/pantai-peh-pulo.jpg",
      title: "Peh Beach"
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
          return nextIndex >= beaches.length ? 0 : nextIndex;
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
          return nextIndex < 0 ? Math.max(0, beaches.length - itemsPerPage) : nextIndex;
        });
      }, 250);
    }
  };

  // Mengambil 3 pantai yang akan ditampilkan berdasarkan currentIndex
  const visibleBeaches = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const index = (currentIndex + i) % beaches.length;
    visibleBeaches.push(beaches[index]);
  }

  return (
    <section className="py-12 bg-white w-full">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold">Top Beaches in Blitar</h2>
            <p className="text-sm text-gray-500">Explore the beautiful coastline of Blitar</p>
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
          {visibleBeaches.map((beach) => (
            <BeachCard
              key={beach.id}
              image={beach.image}
              title={beach.title}
              onClick={() => console.log(`Clicked on ${beach.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopBeaches;
