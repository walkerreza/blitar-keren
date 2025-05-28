import React, { useState } from 'react';

function CreateReview() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [rating, setRating] = useState(5);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send review to server
    console.log({ title, content, location, destination, rating, image });
    // Reset form
    setTitle('');
    setContent('');
    setLocation('');
    setDestination('');
    setRating(5);
    setImage(null);
    setImagePreview(null);
    setShowForm(false);
  };

  return (
    <div className="w-full bg-gray-50 rounded-lg shadow-md p-6 mb-8">
      {!showForm ? (
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Travel Experience</h3>
   
   
          <button 
            className="mt-4 px-6 py-2 bg-[#CC1720] text-white rounded-full hover:bg-red-700 transition-colors"
            onClick={() => setShowForm(true)}
          >
            Write New Review
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">Share your Travel Experience in form of a story</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Title of your review</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CC1720] focus:border-transparent"
                  placeholder="Enter title here"
                  required
                />
              </div>
              
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Location</label>
                <input 
                  type="text" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CC1720] focus:border-transparent"
                  placeholder="Enter your location"
                  required
                />
              </div>
              
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Where did you travel?</label>
                <div className="relative">
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#CC1720] focus:border-[#CC1720]"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    style={{ height: '150px' }}
                  >
                  <option value="">Select Place</option>
                  <option value="Mount Kelud">Mount Kelud</option>
                  <option value="Penataran Temple">Penataran Temple</option>
                  <option value="Bung Karno Tomb">Bung Karno Tomb</option>
                  <option value="Istana Gebang">Istana Gebang</option>
                  <option value="Tambakrejo Beach">Tambakrejo Beach</option>
                  <option value="Serang Beach">Serang Beach</option>
                  <option value="Jolosutro Beach">Jolosutro Beach</option>
                  <option value="Pangi Beach">Pangi Beach</option>
                  <option value="Pasur Beach">Pasur Beach</option>
                  <option value="Peh Beach">Peh Beach</option>
                  <option value="Coban Wilis Waterfall">Coban Wilis Waterfall</option>
                  <option value="Jurug Bening Waterfall">Jurug Bening Waterfall</option>
                  <option value="Maliran Deer Conservation">Maliran Deer Conservation</option>
                  <option value="Kebon Rojo Park">Kebon Rojo Park</option>
                  <option value="Kampung Coklat">Kampung Coklat</option>
                  <option value="Taman Pecut">Taman Pecut</option>
                  <option value="Grebek Pancasila">Grebek Pancasila</option>
                </select>
                </div>
              </div>
              
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Photo</label>
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                    {imagePreview ? (
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </div>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="review-image"
                  />
                  <label 
                    htmlFor="review-image"
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 cursor-pointer"
                  >
                    Choose File
                  </label>
                </div>
              </div>
              
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none"
                    >
                      <svg 
                        className={`w-6 h-6 ${rating >= star ? 'text-[#CC1720]' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{rating} out of 5 stars</span>
                </div>
              </div>
              
              <div className="col-span-1 md:col-span-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-[#CC1720]" />
                  <span className="ml-2 text-sm text-gray-600">
                    I certify that this review is based on my own experience and is my genuine opinion of this place, and that I have no personal or business relationship with this establishment.
                  </span>
                </label>
              </div>
              
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
                <textarea 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CC1720] focus:border-transparent"
                  rows="5"
                  placeholder="Describe your experience..."
                  required
                ></textarea>
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              <button 
                type="button" 
                onClick={() => setShowForm(false)}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 mr-4"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-6 py-2 bg-[#CC1720] text-white rounded-full hover:bg-red-700"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default CreateReview;
