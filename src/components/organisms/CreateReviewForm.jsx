import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateReviewForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');
  const [place, setPlace] = useState('');
  const [rating, setRating] = useState(5);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [agreed, setAgreed] = useState(false);
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
    
    // Create new review object
    const newReview = {
      id: Date.now(), // Use timestamp as unique ID
      title: title,
      description: content,
      image: imagePreview || '',
      author: 'Anda', // Can be replaced with username if login system exists
      date: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
      rating: rating,
      reviews: 1,
      location: location,
      place: place
    };
    
    // Get existing reviews from localStorage
    const existingReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    
    // Add new review to array
    const updatedReviews = [newReview, ...existingReviews];
    
    // Save back to localStorage
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    
    console.log('Review successfully saved:', newReview);
    
    // Return to reviews page
    navigate('/reviews');
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex flex-row">
          <div className="w-1/3 pr-4">
            <div className="w-full max-w-xs h-48 border border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-100 mb-4">
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
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
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 cursor-pointer w-full block text-center mb-2"
            >
              Choose File
            </label>
          </div>
          
          <div className="w-2/3 pl-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <span className="text-xs text-gray-500 mb-1 block">Title of your review</span>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#CC1720] focus:border-[#CC1720]"
                  placeholder="Enter title here"
                  required
                />
              </div>
              
              <div className="mb-4">
                <span className="text-xs text-gray-500 mb-1 block">Your review</span>
                <textarea 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#CC1720] focus:border-[#CC1720]"
                  rows="3"
                  placeholder="Describe your experience..."
                  required
                ></textarea>
              </div>
              
              <div className="flex flex-row justify-between items-start mb-4">
                <div className="w-1/2 pr-2">
                  <span className="text-xs text-gray-500 mb-1 block">Location</span>
                  <input 
                    type="text" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#CC1720] focus:border-[#CC1720]"
                    placeholder="Enter your location"
                    required
                  />
                </div>
                
                <div className="w-1/2 pl-2">
                  <span className="text-xs text-gray-500 mb-1 block">Where did you travel?</span>
                  <select 
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#CC1720] focus:border-[#CC1720]"
                    required
                  >
                    <option value="">Select Place</option>
                    <option value="Gunung Kelud">Gunung Kelud</option>
                    <option value="Candi Penataran">Candi Penataran</option>
                    <option value="Makam Bung Karno">Makam Bung Karno</option>
                    <option value="Pantai Tambakrejo">Pantai Tambakrejo</option>
                    <option value="Kampung Coklat">Kampung Coklat</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-4 text-left">
                <span className="text-xs text-gray-500 mb-1 block">Rating</span>
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
                  <span className="ml-2 text-xs text-gray-600">{rating} out of 5 stars</span>
                </div>
              </div>
              
              <div className="mb-4 text-left">
                <label className="flex items-start">
                  <input 
                    type="checkbox" 
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="form-checkbox h-4 w-4 text-[#CC1720] mt-1" 
                    required
                  />
                  <span className="ml-2 text-xs text-gray-600">
                    I certify that this review is based on my own experience and is my genuine opinion of this place, and that I have no personal or business relationship with this establishment.
                  </span>
                </label>
              </div>
              
              <div className="flex justify-end mt-4">
                <button 
                  type="submit"
                  className="px-4 py-2 bg-[#CC1720] text-white text-sm rounded-md hover:bg-red-700"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateReviewForm;
