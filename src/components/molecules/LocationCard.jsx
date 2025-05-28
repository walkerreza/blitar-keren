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
    <div className="aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
      <div className="h-4/5 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link 
            to="/detail-stories" 
            onClick={handleCardClick} 
            className="px-4 py-2 bg-[#CC1720] text-white rounded-md hover:bg-red-700 transition-colors font-medium text-sm"
          >
            Lihat
          </Link>
        </div>
      </div>
      <div className="p-2 text-center h-1/5 flex items-center justify-center">
        <h3 className="text-sm font-medium text-gray-800">{title}</h3>
      </div>
    </div>
  );
}

export default LocationCard;
