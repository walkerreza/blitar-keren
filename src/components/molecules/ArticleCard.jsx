function ArticleCard({ image, title, description, date, onClick }) {
  return (
    <div 
      className="flex flex-col md:flex-row gap-4 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 md:w-2/3">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
