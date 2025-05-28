import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTicketAlt, FaCalendar, FaUser, FaEnvelope, FaPhone, FaIdCard, FaMapMarkerAlt, FaCreditCard, FaCheck } from 'react-icons/fa';

function TicketOrderForm() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState({
    name: "",
    location: "",
    ticketPrice: {}
  });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visitDate: "",
    adultTickets: 1,
    childTickets: 0,
    identityNumber: "",
    paymentMethod: "bank_transfer",
    isPaid: false
  });
  
  const [totalPrice, setTotalPrice] = useState(0);
  const [showPaymentConfirmation, setShowPaymentConfirmation] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  
  // Get destination data and login status from localStorage when component is loaded
  useEffect(() => {
    // Check login status
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');
    
    if (loggedInStatus === 'true' && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
      
      // Automatically fill name with username if already logged in
      setFormData(prevData => ({
        ...prevData,
        name: storedUsername
      }));
    } else {
      setIsLoggedIn(false);
      // If not logged in, redirect to main page
      navigate('/', { state: { message: 'Please login first to book tickets' } });
    }
    
    // Get destination data
    const savedDestination = JSON.parse(localStorage.getItem('selectedDestination'));
    if (savedDestination) {
      setDestination({
        name: savedDestination.title,
        location: savedDestination.subtitle || "Blitar, East Java",
        ticketPrice: savedDestination.ticketPrice || {
          weekday: "Rp 15,000 (Monday-Friday)",
          weekend: "Rp 20,000 (Saturday-Sunday)"
        }
      });
    }
  }, [navigate]);
  
  // Calculate ticket price based on form data
  useEffect(() => {
    let basePrice = 15000; // Default price if no specific price
    
    // Get ticket price from destination data
    if (destination.ticketPrice) {
      const price = destination.ticketPrice.weekday || 
                   destination.ticketPrice.entry || 
                   "Rp 15,000";
      
      // Extract numeric value from price string
      const priceMatch = price.match(/\d+,\d+|\d+/);
      if (priceMatch) {
        basePrice = parseInt(priceMatch[0].replace(',', ''));
      }
    }
    
    // Calculate total price
    const adultTotal = basePrice * formData.adultTickets;
    const childTotal = basePrice * 0.5 * formData.childTickets; // Child price is 50% of adult price
    
    setTotalPrice(adultTotal + childTotal);
  }, [formData.adultTickets, formData.childTickets, destination]);
  
  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check login status sebelum melanjutkan
    if (!isLoggedIn) {
      navigate('/', { state: { message: 'Please login first to book tickets' } });
      return;
    }
    
    if (!showPaymentConfirmation) {
      // Show payment confirmation
      setShowPaymentConfirmation(true);
      return;
    }
    
    // Generate order number
    const orderNumber = 'BLT' + Date.now().toString().slice(-8);
    
    // Set order as complete with payment status
    const completedOrder = {
      ...formData,
      orderNumber,
      destination: destination.name,
      location: destination.location,
      totalPrice,
      orderDate: new Date().toISOString(),
      status: "Paid",
      isPaid: true,
      username: username // Tambahkan username ke data order
    };
    
    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(completedOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Set order as complete
    setOrderComplete(true);
    
    // Redirect to home page after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
    
    // Reset formulir
    setFormData({
      name: "",
      email: "",
      phone: "",
      visitDate: "",
      adultTickets: 1,
      childTickets: 0,
      identityNumber: "",
      paymentMethod: "bank_transfer",
      isPaid: false
    });
  };
  
  // Handle payment method changes
  const handlePaymentMethodChange = (method) => {
    setFormData(prevData => ({
      ...prevData,
      paymentMethod: method
    }));
  };
  
  // Format number to rupiah format
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };
  
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Pemesanan Tiket</h2>
          
          {isLoggedIn ? (
            <div className="mb-6 bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center">
                <FaUser className="text-green-500 mr-2" />
                <p className="text-green-700">Anda login sebagai <span className="font-semibold">{username}</span></p>
              </div>
            </div>
          ) : (
            <div className="mb-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-yellow-700">Silakan login terlebih dahulu untuk memesan tiket</p>
            </div>
          )}
          <p className="text-gray-600">Isi formulir di bawah ini untuk memesan tiket masuk ke {destination.name}</p>
        </div>
        
        {/* Card Formulir */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {/* Header Card */}
          <div className="bg-[#CC1720] p-6 text-white">
            <div className="flex items-center">
              <FaTicketAlt className="text-2xl mr-4" />
              <div>
                <h2 className="text-xl font-bold">{destination.name}</h2>
                <p className="text-sm opacity-90">{destination.location}</p>
              </div>
            </div>
          </div>
          
          {/* Formulir */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Data Pengunjung */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <FaUser className="mr-2 text-[#CC1720]" />
                  Data Pengunjung
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CC1720] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <div className="flex items-center">
                      <FaEnvelope className="text-gray-400 absolute ml-3" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CC1720] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Nomor Telepon
                    </label>
                    <div className="flex items-center">
                      <FaPhone className="text-gray-400 absolute ml-3" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CC1720] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="identityNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Nomor Identitas (KTP/SIM/Paspor)
                    </label>
                    <div className="flex items-center">
                      <FaIdCard className="text-gray-400 absolute ml-3" />
                      <input
                        type="text"
                        id="identityNumber"
                        name="identityNumber"
                        value={formData.identityNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CC1720] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Detail Kunjungan */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-[#CC1720]" />
                  Detail Kunjungan
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="visitDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Tanggal Kunjungan
                    </label>
                    <div className="flex items-center">
                      <FaCalendar className="text-gray-400 absolute ml-3" />
                      <input
                        type="date"
                        id="visitDate"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CC1720] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="adultTickets" className="block text-sm font-medium text-gray-700 mb-1">
                      Jumlah Tiket Dewasa
                    </label>
                    <input
                      type="number"
                      id="adultTickets"
                      name="adultTickets"
                      value={formData.adultTickets}
                      onChange={handleChange}
                      min="1"
                      max="10"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CC1720] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="childTickets" className="block text-sm font-medium text-gray-700 mb-1">
                      Jumlah Tiket Anak (Usia &lt; 12 tahun)
                    </label>
                    <input
                      type="number"
                      id="childTickets"
                      name="childTickets"
                      value={formData.childTickets}
                      onChange={handleChange}
                      min="0"
                      max="10"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CC1720] focus:border-transparent"
                    />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mt-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Ringkasan Pemesanan</h4>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Tiket Dewasa ({formData.adultTickets}x)</span>
                      <span>{formatRupiah(totalPrice * (formData.adultTickets / (formData.adultTickets + formData.childTickets * 0.5)))}</span>
                    </div>
                    {formData.childTickets > 0 && (
                      <div className="flex justify-between text-sm mb-1">
                        <span>Tiket Anak ({formData.childTickets}x)</span>
                        <span>{formatRupiah(totalPrice * (formData.childTickets * 0.5 / (formData.adultTickets + formData.childTickets * 0.5)))}</span>
                      </div>
                    )}
                    <div className="border-t border-gray-200 my-2 pt-2 flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-[#CC1720]">{formatRupiah(totalPrice)}</span>
                    </div>
                  </div>
                  
                  {showPaymentConfirmation && (
                    <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <FaCreditCard className="mr-2 text-[#CC1720]" />
                        Metode Pembayaran
                      </h4>
                      
                      <div className="space-y-3">
                        <div 
                          className={`border rounded-lg p-3 cursor-pointer ${formData.paymentMethod === 'bank_transfer' ? 'border-[#CC1720] bg-red-50' : 'border-gray-200 hover:border-gray-300'}`}
                          onClick={() => handlePaymentMethodChange('bank_transfer')}
                        >
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full mr-3 border ${formData.paymentMethod === 'bank_transfer' ? 'border-[#CC1720] bg-[#CC1720]' : 'border-gray-300'}`}></div>
                            <div className="flex-grow">
                              <p className="font-medium text-gray-800">Transfer Bank</p>
                              <p className="text-xs text-gray-500">BCA, BNI, BRI, Mandiri</p>
                            </div>
                          </div>
                        </div>
                        
                        <div 
                          className={`border rounded-lg p-3 cursor-pointer ${formData.paymentMethod === 'e_wallet' ? 'border-[#CC1720] bg-red-50' : 'border-gray-200 hover:border-gray-300'}`}
                          onClick={() => handlePaymentMethodChange('e_wallet')}
                        >
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full mr-3 border ${formData.paymentMethod === 'e_wallet' ? 'border-[#CC1720] bg-[#CC1720]' : 'border-gray-300'}`}></div>
                            <div className="flex-grow">
                              <p className="font-medium text-gray-800">E-Wallet</p>
                              <p className="text-xs text-gray-500">OVO, GoPay, DANA, LinkAja</p>
                            </div>
                          </div>
                        </div>
                        
                        <div 
                          className={`border rounded-lg p-3 cursor-pointer ${formData.paymentMethod === 'credit_card' ? 'border-[#CC1720] bg-red-50' : 'border-gray-200 hover:border-gray-300'}`}
                          onClick={() => handlePaymentMethodChange('credit_card')}
                        >
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full mr-3 border ${formData.paymentMethod === 'credit_card' ? 'border-[#CC1720] bg-[#CC1720]' : 'border-gray-300'}`}></div>
                            <div className="flex-grow">
                              <p className="font-medium text-gray-800">Credit Card</p>
                              <p className="text-xs text-gray-500">Visa, Mastercard, JCB</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <p className="text-sm text-blue-800">
                          <strong>Note:</strong> For demo purposes, all payment methods will automatically be considered "Paid" when the confirmation button is pressed.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="mt-8 text-center">
              {orderComplete ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <FaCheck className="text-green-500 text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Payment Successful!</h3>
                  <p className="text-green-700 mb-4">Your ticket has been confirmed and is ready to use.</p>
                  <p className="text-sm text-gray-600 mb-4">You will be redirected to the main page in 3 seconds...</p>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-semibold text-green-600">Paid</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Destination:</span>
                      <span className="font-semibold">{destination.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total:</span>
                      <span className="font-semibold">{formatRupiah(totalPrice)}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="bg-gray-100 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Back to Home
                  </button>
                </div>
              ) : (
                <>
                  <button
                    type="submit"
                    className="bg-[#CC1720] text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    {showPaymentConfirmation ? 'Confirm Payment' : 'Book Ticket Now'}
                  </button>
                  <p className="text-sm text-gray-500 mt-2">
                    By pressing the button above, you agree to the applicable terms and conditions
                  </p>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TicketOrderForm;
