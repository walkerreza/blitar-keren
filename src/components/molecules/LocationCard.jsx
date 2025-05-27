function LocationCard({ image, title, onClick }) {
  return (
    <div 
      className="aspect-square rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
      onClick={onClick}
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
  );
}

export default LocationCard;
