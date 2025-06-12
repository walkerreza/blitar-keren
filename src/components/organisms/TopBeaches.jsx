import { useState, useRef, useEffect } from 'react';
import BeachCard from '../molecules/BeachCard';

import pantaiTambakrejo from '../../assets/images/pantai_Tambakrejo.jpg';
import pantaiSerang from '../../assets/images/pantai-serang.jpg';
import pantaiJolosutro from '../../assets/images/Pantai-Jolosutro.jpg';
import pantaiPangi from '../../assets/images/pangi.jpg';
import pantaiPasur from '../../assets/images/pantaipasur.jpg';
import pantaiPehPulo from '../../assets/images/pantai-peh-pulo.jpg';

function TopBeaches() {
  const beaches = [
    {
      id: 1,
      image: pantaiTambakrejo,
      title: "Tambakrejo Beach"
    },
    {
      id: 2,
      image: pantaiSerang,
      title: "Serang Beach"
    },
    {
      id: 3,
      image: pantaiJolosutro,
      title: "Jolosutro Beach"
    },
    {
      id: 4,
      image: pantaiPangi,
      title: "Pangi Beach"
    },
    {
      id: 5,
      image: pantaiPasur,
      title: "Pasur Beach"
    },
    {
      id: 6,
      image: pantaiPehPulo,
      title: "Peh Beach"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');
  const containerRef = useRef(null);
  const itemsPerPage = 3;
  
  // Effect for scroll animation with smooth door-like sliding and fade effect
  useEffect(() => {
    if (containerRef.current) {
      if (isAnimating) {
        // Prepare for animation
        containerRef.current.style.transition = 'none';
        containerRef.current.style.transform = 'translateX(0)';
        containerRef.current.style.opacity = '1';
        
        // Force reflow
        containerRef.current.offsetHeight;
        
        // First phase: fade out and start sliding
        containerRef.current.style.transition = 'opacity 0.3s ease-out, transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        containerRef.current.style.opacity = '0.3';
        containerRef.current.style.transform = slideDirection === 'right' ? 'translateX(-30%)' : 'translateX(30%)';
        
        // Second phase: complete slide and fade in new content
        const timer1 = setTimeout(() => {
          // Change content while it's faded out
          setCurrentIndex((prevIndex) => {
            if (slideDirection === 'right') {
              const nextIndex = prevIndex + itemsPerPage;
              return nextIndex >= beaches.length ? 0 : nextIndex;
            } else {
              const nextIndex = prevIndex - itemsPerPage;
              return nextIndex < 0 ? Math.max(0, beaches.length - itemsPerPage) : nextIndex;
            }
          });
          
          // Prepare for entrance animation
          containerRef.current.style.transition = 'none';
          containerRef.current.style.transform = slideDirection === 'right' ? 'translateX(30%)' : 'translateX(-30%)';
          
          // Force reflow
          containerRef.current.offsetHeight;
          
          // Animate entrance
          containerRef.current.style.transition = 'opacity 0.3s ease-in, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
          containerRef.current.style.opacity = '1';
          containerRef.current.style.transform = 'translateX(0)';
          
          // Animation complete
          const timer2 = setTimeout(() => {
            setIsAnimating(false);
          }, 600);
          
          return () => clearTimeout(timer2);
        }, 300);
        
        return () => clearTimeout(timer1);
      } else {
        containerRef.current.style.opacity = '1';
        containerRef.current.style.transform = 'translateX(0)';
      }
    }
  }, [isAnimating, slideDirection, beaches.length, itemsPerPage]);
  
  const nextPage = () => {
    if (!isAnimating) {
      setSlideDirection('right');
      setIsAnimating(true);
    }
  };
  
  const prevPage = () => {
    if (!isAnimating) {
      setSlideDirection('left');
      setIsAnimating(true);
    }
  };

  // Get 3 beaches to display based on currentIndex
  const visibleBeaches = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const index = (currentIndex + i) % beaches.length;
    visibleBeaches.push(beaches[index]);
  }

  return (
    <section className="py-12 bg-white w-full">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center mb-6">
          <div className="text-left">
            <h2 className="text-xl font-bold text-left">Top Beaches in Blitar</h2>
            <p className="text-sm text-gray-500 text-left">Explore the beautiful coastline of Blitar</p>
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

        <div className="overflow-hidden relative">
          <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
      </div>
    </section>
  );
}

export default TopBeaches;
