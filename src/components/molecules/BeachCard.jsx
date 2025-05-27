function BeachCard({ image, title, onClick }) {
  return (
    <div 
      className="relative rounded-lg overflow-hidden cursor-pointer h-40 group"
      onClick={onClick}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
        <h3 className="text-white text-sm font-medium">{title}</h3>
      </div>
    </div>
  );
}

export default BeachCard;
