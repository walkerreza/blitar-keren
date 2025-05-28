import { Link } from 'react-router-dom';

function LocationCard({ image, title, onClick }) {
  // Fungsi untuk menangani klik pada kartu lokasi
  const handleCardClick = () => {
    // Simpan informasi lokasi yang dipilih ke localStorage
    const selectedDestination = {
      title: title,
      image: image
    };
    localStorage.setItem('selectedDestination', JSON.stringify(selectedDestination));
    
    // Panggil fungsi onClick jika disediakan
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <Link to="/detail-stories" onClick={handleCardClick} className="block">
      <div 
        className="aspect-square rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="h-4/5 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2 text-center h-1/5 flex items-center justify-center">
          <h3 className="text-sm font-medium text-gray-800">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default LocationCard;
