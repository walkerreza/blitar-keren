import React from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import CreateReviewForm from '../organisms/CreateReviewForm';

function CreateReviewTemplate() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="w-full bg-gray-50 pt-32 pb-20">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Share your Travel Experience in<br />form of a story
              </h1>
            </div>
            <div className="relative w-full max-w-md mx-auto mb-8">
              <input 
                type="text" 
                placeholder="What would you like to review..." 
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#CC1720] focus:border-transparent"
                readOnly
              />
            </div>
            <CreateReviewForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CreateReviewTemplate;
