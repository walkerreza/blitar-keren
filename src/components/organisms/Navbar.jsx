import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../atoms/Button';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const location = useLocation();
  
  // Set initial state based on current path
  useEffect(() => {
    // Reset activeLink based on current path
    if (location.pathname === '/') {
      setActiveLink('home');
    } else if (location.pathname === '/destination') {
      setActiveLink('destination');
    } else if (location.pathname === '/stories') {
      setActiveLink('stories');
    } else if (location.pathname === '/detail-stories') {
      setActiveLink('stories');
    } else if (location.pathname === '/reviews' || location.pathname === '/create-review') {
      setActiveLink('reviews');
    }
  }, [location.pathname]);
  
  // Function to close mobile menu only, without changing activeLink
  const handleMobileMenuClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    // Check login status from localStorage
    const checkLoginStatus = () => {
      const loggedInStatus = localStorage.getItem('isLoggedIn');
      const storedUsername = localStorage.getItem('username');
      if (loggedInStatus === 'true' && storedUsername) {
        setIsLoggedIn(true);
        setUsername(storedUsername);
      } else {
        setIsLoggedIn(false);
        setUsername('');
      }
    };

    // Check login status when component is loaded
    checkLoginStatus();

    // Add event listener for localStorage changes
    window.addEventListener('storage', checkLoginStatus);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
  };

  // Determine if current page is Reviews, Create Review, or Ticket Order page
  const isReviewPage = location.pathname === '/reviews' || location.pathname === '/create-review';
  const isTicketOrderPage = location.pathname === '/ticket-order';

  return (
    <nav className={`${isScrolled || isReviewPage || isTicketOrderPage ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'} ${isScrolled || isReviewPage || isTicketOrderPage ? 'text-gray-800' : 'text-white'} fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500`}>
      <div className="w-full px-3 md:px-8 lg:px-12 py-2 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center z-20 flex-shrink-0">
            <img 
              src="https://dinaspupr.blitarkota.go.id/uploads/dokumen/Branding%20Blitar%202.png" 
              alt="Blitar Tourism Logo" 
              className="h-[50px] md:h-[60px] lg:h-[70px] w-auto transition-all duration-300 hover:scale-105" 
            />
          </div>
          
      
          <div className="hidden lg:flex space-x-8">
            {['home', 'destination', 'stories', 'reviews'].map((item) => {
              const isActive = item === 'home' ? location.pathname === '/' : location.pathname === `/${item}s`;
              return (
                item === 'destination' || item === 'stories' || item === 'reviews' ? (
                  <Link 
                    key={item} 
                    to={item === 'reviews' ? '/reviews' : `/${item}`} 
                    className={`relative px-1 py-2 text-sm font-medium transition-all duration-300 ${isScrolled || isReviewPage 
                      ? activeLink === item 
                        ? 'text-[#CC1720]' 
                        : 'text-gray-800 hover:text-[#CC1720]' 
                      : activeLink === item 
                        ? 'text-white' 
                        : 'text-white/90 hover:text-white'}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-[#CC1720] ${activeLink === item ? 'block' : 'hidden'}`}></span>
                  </Link>
                ) : (
                  <Link 
                    key={item} 
                    to={item === 'home' ? '/' : `/#${item}`} 
                    className={`relative px-1 py-2 text-sm font-medium transition-all duration-300 ${isScrolled || isReviewPage 
                      ? activeLink === item 
                        ? 'text-[#CC1720]' 
                        : 'text-gray-800 hover:text-[#CC1720]' 
                      : activeLink === item 
                        ? 'text-white' 
                        : 'text-white/90 hover:text-white'}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-[#CC1720] ${activeLink === item ? 'block' : 'hidden'}`}></span>
                  </Link>
                )
              );
            })}
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="text-sm font-medium">
                  <span className="text-gray-700">Halo, </span>
                  <span className="text-[#CC1720]">{username}</span>
                </div>
                <div className="flex space-x-2">
                  <Link 
                    to="/login"
                    className="text-gray-700 hover:text-[#CC1720] text-sm px-3 py-1 rounded-full border border-gray-300 hover:border-[#CC1720] transition-all duration-300"
                  >
                    Profil
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-[#CC1720] text-sm px-3 py-1 rounded-full border border-gray-300 hover:border-[#CC1720] transition-all duration-300"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                to="/login"
                className="relative overflow-hidden bg-white text-black hover:text-white text-sm px-5 py-2 rounded-full transition-all duration-300 group"
              >
                <span className="relative z-10">Login</span>
                <span className="absolute inset-0 bg-[#CC1720] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            )}
          </div>
          
    
          <div className="lg:hidden z-20 flex-shrink-0">
            <button 
              onClick={toggleMenu} 
              className={`focus:outline-none transition-all duration-300 ${isScrolled || isReviewPage || isTicketOrderPage ? 'text-gray-800' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              <div className="relative w-7 h-5">
                <span className={`absolute left-0 top-0 w-7 h-0.5 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''} ${isScrolled || isReviewPage || isTicketOrderPage ? 'bg-gray-800' : 'bg-white'} transform transition-all duration-300`}></span>
                <span className={`absolute left-0 top-2 w-7 h-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'} ${isScrolled || isReviewPage || isTicketOrderPage ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}></span>
                <span className={`absolute left-0 top-4 w-7 h-0.5 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''} ${isScrolled || isReviewPage || isTicketOrderPage ? 'bg-gray-800' : 'bg-white'} transform transition-all duration-300`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Sidebar untuk mobile */}
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full pt-20 pb-6 px-6">
            <div className="flex-grow">
              {/* Logo di sidebar */}
              <div className="flex justify-center mb-8">
                <img 
                  src="https://dinaspupr.blitarkota.go.id/uploads/dokumen/Branding%20Blitar%202.png" 
                  alt="Blitar Tourism Logo" 
                  className="h-12 w-auto" 
                />
              </div>
              
              {/* Menu items */}
              <div className="space-y-6">
                {['home', 'destination', 'stories', 'reviews'].map((item) => {
                  const isActive = item === 'home' ? location.pathname === '/' : location.pathname === `/${item}s`;
                  return (
                    item === 'destination' || item === 'stories' || item === 'reviews' ? (
                      <Link 
                        key={item} 
                        to={item === 'reviews' ? '/reviews' : `/${item}`} 
                        onClick={handleMobileMenuClick} 
                        className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${activeLink === item ? 'bg-red-50 text-[#CC1720]' : 'text-gray-800 hover:bg-gray-100'}`}
                      >
                        <span className="text-lg font-medium">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                      </Link>
                    ) : (
                      <Link 
                        key={item} 
                        to={item === 'home' ? '/' : `/#${item}`} 
                        onClick={handleMobileMenuClick} 
                        className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${activeLink === item ? 'bg-red-50 text-[#CC1720]' : 'text-gray-800 hover:bg-gray-100'}`}
                      >
                        <span className="text-lg font-medium">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                      </Link>
                    )
                  );
                })}
              </div>
            </div>
            
            {/* Login/Logout section */}
            <div className="mt-auto pt-6 border-t border-gray-200">
              {isLoggedIn ? (
                <div className="space-y-3">
                  <div className="px-4 py-2 text-gray-700 font-medium">Hi, {username}</div>
                  <button 
                    onClick={() => {
                      handleLogout();
                      handleMobileMenuClick();
                    }} 
                    className="w-full flex items-center justify-center px-4 py-2 bg-[#CC1720] text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link 
                  to="/login"
                  onClick={handleMobileMenuClick}
                  className="w-full flex items-center justify-center px-4 py-2 bg-[#CC1720] text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
        
        {/* Overlay untuk menutup sidebar saat diklik */}
        <div 
          className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={toggleMenu}
        ></div>
      </div>
      
      {/* Login Modal is no longer used, replaced with login page */}
    </nav>
  );
}

export default Navbar;
