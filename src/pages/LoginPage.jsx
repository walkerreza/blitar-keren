import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaHome, FaTicketAlt } from 'react-icons/fa';
import backgroundVideo from '../assets/Video/Menyusuri Untaian Sejarah dan Keindahan Alam di Kota Blitar.mp4';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status when component is loaded
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!username || !password) {
      setError('Username and password must be filled');
      return;
    }
    
    // Dummy login - accept any input
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    setIsLoggedIn(true);
    
    // Reset form
    setUsername('');
    setPassword('');
    setError('');
    
    // Redirect to main page
    navigate('/');
  };

  // Function for logout
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
          {isLoggedIn ? (
            <div className="p-8">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-6 flex items-center justify-center">
                  <FaUser className="h-12 w-12 text-gray-500" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  Welcome, {localStorage.getItem('username')}
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  You have successfully logged in and can book tickets.
                </p>
                
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
                  <button 
                    onClick={() => navigate('/ticket-order')}
                    className="bg-[#CC1720] text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center text-lg font-medium"
                  >
                    <FaTicketAlt className="mr-2" />
                    Book Ticket
                  </button>
                  <button 
                    onClick={() => navigate('/')}
                    className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center text-lg font-medium"
                  >
                    <FaHome className="mr-2" />
                    Home
                  </button>
                </div>
                <button 
                  onClick={handleLogout}
                  className="mt-6 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors text-base"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">Login</h2>
                <p className="text-gray-600 text-lg">
                  Please login to book tour tickets
                </p>
              </div>
              
              <form onSubmit={handleLogin}>
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                  </div>
                )}
                
                <div className="mb-6">
                  <label htmlFor="username" className="block text-gray-700 text-base font-bold mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                  
                    </div>
                    <input
                      type="text"
                      id="username"
                      className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 pl-10 text-gray-700 text-lg leading-tight focus:outline-none focus:ring-2 focus:ring-[#CC1720] focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="password" className="block text-gray-700 text-base font-bold mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    
                    </div>
                    <input
                      type="password"
                      id="password"
                      className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 pl-10 text-gray-700 text-lg leading-tight focus:outline-none focus:ring-2 focus:ring-[#CC1720] focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    *For demo, enter any username and password
                  </p>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <button
                    type="submit"
                    className="bg-[#CC1720] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full transition-colors text-lg"
                  >
                    Login
                  </button>
                </div>
                
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="text-[#CC1720] hover:text-red-700 font-medium text-base flex items-center justify-center mx-auto"
                  >
                    <FaHome className="mr-2" />
                    Back to Home
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
