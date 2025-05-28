import React from 'react';
import { useNavigate } from 'react-router-dom';
import TicketOrderForm from '../components/organisms/order/TicketOrderForm';
import Footer from '../components/organisms/Footer';
import { FaArrowLeft } from 'react-icons/fa';

function TicketOrderPage() {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1); // Kembali ke halaman sebelumnya
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md py-4 px-6">
        <button 
          onClick={handleGoBack}
          className="flex items-center text-gray-800 hover:text-[#CC1720] transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          <span>Kembali ke Detail Destinasi</span>
        </button>
      </div>
      <main className="flex-grow pt-16">
        <TicketOrderForm />
      </main>
      <Footer />
    </div>
  );
}

export default TicketOrderPage;
