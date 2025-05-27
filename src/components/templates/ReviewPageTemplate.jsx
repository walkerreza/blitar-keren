import React from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import ReviewHero from '../organisms/ReviewHero';
import ReviewList from '../organisms/ReviewList';

function ReviewPageTemplate() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ReviewHero />
        <ReviewList />
      </main>
      <Footer />
    </div>
  );
}

export default ReviewPageTemplate;
