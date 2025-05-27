function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="bg-gray-100 rounded-full p-4 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default FeatureCard;
