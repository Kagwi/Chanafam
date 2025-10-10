import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, Phone, Mail, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productCategories = [
    { name: 'Plumbing', path: '/products/plumbing' },
    { name: 'Wood Products', path: '/products/wood' },
    { name: 'Paintwork', path: '/products/paintwork' },
    { name: 'Steel & Metal', path: '/products/steel' },
    { name: 'Tiles', path: '/products/tiles' },
    { name: 'Doors & Windows', path: '/products/doors-windows' },
    { name: 'General Hardware', path: '/products/general-hardware' }
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gray-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone size={14} />
                <span>+254 106 713 487</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail size={14} />
                <span>chanafaminvestment@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={14} />
              <span>Mon-Sat: 7AM-6PM | Closed Sundays</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200 animate-pulse-glow">
                <span className="text-white font-bold text-xl">CF</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                  CHANAFAM
                </h1>
                <p className="text-sm text-gray-600 -mt-1">INVESTMENT</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors hover:text-yellow-600 ${
                  location.pathname === '/' ? 'text-yellow-600' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to="/products" 
                  className={`flex items-center font-medium transition-colors hover:text-yellow-600 cursor-pointer ${
                    location.pathname.includes('/products') ? 'text-yellow-600' : 'text-gray-700'
                  }`}
                >
                  Products <ChevronDown size={16} className="ml-1" />
                </Link>
                
                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-4 z-50">
                    {productCategories.map((category) => (
                      <Link
                        key={category.path}
                        to={category.path}
                        className="block px-6 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors cursor-pointer"
                        onClick={() => {
                          setActiveDropdown(null);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/services" 
                className={`font-medium transition-colors hover:text-yellow-600 ${
                  location.pathname === '/services' ? 'text-yellow-600' : 'text-gray-700'
                }`}
              >
                Services
              </Link>
              
              <Link 
                to="/gallery" 
                className={`font-medium transition-colors hover:text-yellow-600 ${
                  location.pathname === '/gallery' ? 'text-yellow-600' : 'text-gray-700'
                }`}
              >
                Gallery
              </Link>
              
              <Link 
                to="/about" 
                className={`font-medium transition-colors hover:text-yellow-600 ${
                  location.pathname === '/about' ? 'text-yellow-600' : 'text-gray-700'
                }`}
              >
                About Us
              </Link>
              
              <Link 
                to="/contact" 
                className={`font-medium transition-colors hover:text-yellow-600 ${
                  location.pathname === '/contact' ? 'text-yellow-600' : 'text-gray-700'
                }`}
              >
                Contact
              </Link>
            </nav>

              {/* Quote Button */}
              <Link
                to="/contact"
                className="hidden md:block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-200"
              >
                Get Quote
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-4">
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 md:hidden">
                  <Search size={18} className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="bg-transparent text-sm outline-none flex-1"
                  />
                </div>
                
                <Link 
                  to="/" 
                  className="block py-2 text-gray-700 hover:text-yellow-600 transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Home
                </Link>
                <Link 
                  to="/products" 
                  className="block py-2 text-gray-700 hover:text-yellow-600 transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Products
                </Link>
                {productCategories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className="block py-2 pl-4 text-sm text-gray-600 hover:text-yellow-600 transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {category.name}
                  </Link>
                ))}
                <Link 
                  to="/services" 
                  className="block py-2 text-gray-700 hover:text-yellow-600 transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Services
                </Link>
                <Link 
                  to="/gallery" 
                  className="block py-2 text-gray-700 hover:text-yellow-600 transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Gallery
                </Link>
                <Link 
                  to="/about" 
                  className="block py-2 text-gray-700 hover:text-yellow-600 transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  About Us
                </Link>
                <Link 
                  to="/contact" 
                  className="block py-2 text-gray-700 hover:text-yellow-600 transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Contact
                </Link>
                
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:from-yellow-500 hover:to-orange-600 transition-all duration-200"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
