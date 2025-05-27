import { useState } from 'react';
import LocationCard from '../molecules/LocationCard';

function DestinationGrid() {
  const destinations = [
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
    },
    {
      id: 7,
      image: "/src/assets/images/Pantai-Jolosutro.jpg",
      title: "Jolosutro Beach"
    },
    {
      id: 8,
      image: "/src/assets/images/coban wilis.jpg",
      title: "Coban Wilis Waterfall"
    },
    {
      id: 9,
      image: "/src/assets/images/jurug bening.webp",
      title: "Jurug Bening Waterfall"
    },
    {
      id: 10,
      image: "/src/assets/images/maliran deer.webp",
      title: "Maliran Deer Conservation"
    },
    {
      id: 11,
      image: "/src/assets/images/kebon rojo.jpg",
      title: "Kebon Rojo Park"
    },
    {
      id: 12,
      image: "/src/assets/images/blitar-jadoel.jpg",
      title: "Kampung Coklat"
    }
  ];
  
  const [currentPage, setCurrentPage] = useState(1);
  const destinationsPerPage = 9;
  const totalPages = Math.ceil(destinations.length / destinationsPerPage);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="py-12 bg-white w-full">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center">Explore All Destinations in Blitar</h2>
          <p className="text-gray-500 text-center mt-2">Discover the historical and natural beauty of East Java's cultural treasure</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map(destination => (
            <LocationCard 
              key={destination.id}
              image={destination.image}
              title={destination.title}
              onClick={() => console.log(`Clicked on ${destination.title}`)}
            />
          ))}
        </div>
        

      </div>
    </section>
  );
}

export default DestinationGrid;
