import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../atoms/Button';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();
  
  // Set initial state based on current path
  useEffect(() => {
    // Reset activeLink berdasarkan path saat ini
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
  
  // Fungsi untuk menutup menu mobile saja, tanpa mengubah activeLink
  const handleMobileMenuClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Hanya cek section jika di halaman beranda
      if (location.pathname === '/') {
        const sections = ['home', 'destination', 'stories', 'reviews'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveLink(section);
              break;
            }
          }
        }
      }
    };

    // Panggil handleScroll sekali untuk mengatur status awal
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Tentukan apakah halaman saat ini adalah halaman Reviews atau Create Review
  const isReviewPage = location.pathname === '/reviews' || location.pathname === '/create-review';

  return (
    <nav className={`${isScrolled || isReviewPage ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'} ${isScrolled || isReviewPage ? 'text-gray-800' : 'text-white'} fixed top-0 left-0 right-0 z-50 transition-all duration-500`}>
      <div className="w-full px-4 md:px-8 lg:px-12 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center z-20">
            <img 
              src="https://dinaspupr.blitarkota.go.id/uploads/dokumen/Branding%20Blitar%202.png" 
              alt="Wisata Blitar Logo" 
              className="h-[70px] w-auto transition-all duration-300 hover:scale-105" 
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
          
          <div className="hidden lg:block">
            <button className="relative overflow-hidden bg-white text-black hover:text-white text-sm px-5 py-2 rounded-full transition-all duration-300 group">
              <span className="relative z-10">Login</span>
              <span className="absolute inset-0 bg-[#CC1720] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </div>
          
    
          <div className="lg:hidden z-20">
            <button 
              onClick={toggleMenu} 
              className={`focus:outline-none transition-all duration-300 ${isScrolled || isReviewPage ? 'text-gray-800' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              <div className="relative w-7 h-5">
                <span className={`absolute left-0 top-0 w-7 h-0.5 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''} ${isScrolled || isReviewPage ? 'bg-gray-800' : 'bg-white'} transform transition-all duration-300`}></span>
                <span className={`absolute left-0 top-2 w-7 h-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'} ${isScrolled || isReviewPage ? 'bg-gray-800' : 'bg-white'} transition-opacity duration-300`}></span>
                <span className={`absolute left-0 top-4 w-7 h-0.5 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''} ${isScrolled || isReviewPage ? 'bg-gray-800' : 'bg-white'} transform transition-all duration-300`}></span>
              </div>
            </button>
          </div>
        </div>
        
        <div className={`fixed inset-0 bg-white/95 backdrop-blur-md z-10 flex flex-col justify-center items-center lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="text-center space-y-6">
            {['home', 'destination', 'stories', 'reviews'].map((item) => {
              const isActive = item === 'home' ? location.pathname === '/' : location.pathname === `/${item}s`;
              return (
                item === 'destination' || item === 'stories' || item === 'reviews' ? (
                  <Link 
                    key={item} 
                    to={item === 'reviews' ? '/reviews' : `/${item}`} 
                    onClick={handleMobileMenuClick} 
                    className={`block text-xl font-medium transition-all duration-300 ${activeLink === item ? 'text-[#CC1720]' : 'text-gray-800 hover:text-[#CC1720]'}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ) : (
                  <Link 
                    key={item} 
                    to={item === 'home' ? '/' : `/#${item}`} 
                    onClick={handleMobileMenuClick} 
                    className={`block text-xl font-medium transition-all duration-300 ${activeLink === item ? 'text-[#CC1720]' : 'text-gray-800 hover:text-[#CC1720]'}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                )
              );
            })}
            <div className="pt-8">
              <button className="relative overflow-hidden bg-[#CC1720] text-white hover:text-[#CC1720] text-base px-8 py-2 rounded-full transition-all duration-300 group">
                <span className="relative z-10">Login</span>
                <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
