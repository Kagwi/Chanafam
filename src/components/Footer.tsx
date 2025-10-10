import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-orange-900 via-orange-800 to-yellow-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">CHANAFAM</h3>
                <p className="text-sm text-gray-200">INVESTMENT</p>
              </div>
            </div>
            <p className="text-gray-200 mb-4">
              Your trusted partner for all building materials and hardware solutions. 
              Quality products, competitive prices, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61581791594021" className="text-gray-200 hover:text-yellow-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/chanafam007" className="text-gray-200 hover:text-yellow-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/chanafarminvestment/" className="text-gray-200 hover:text-yellow-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-200 hover:text-yellow-300 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-200 hover:text-yellow-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-200 hover:text-yellow-300 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-200 hover:text-yellow-300 transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-gray-200 hover:text-yellow-300 transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-200 hover:text-yellow-300 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-200 hover:text-yellow-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Product Categories</h4>
            <ul className="space-y-3">
              <li><Link to="/products/plumbing" className="text-gray-200 hover:text-yellow-300 transition-colors">Plumbing</Link></li>
              <li><Link to="/products/wood" className="text-gray-200 hover:text-yellow-300 transition-colors">Wood Products</Link></li>
              <li><Link to="/products/paintwork" className="text-gray-200 hover:text-yellow-300 transition-colors">Paintwork</Link></li>
              <li><Link to="/products/steel" className="text-gray-200 hover:text-yellow-300 transition-colors">Steel & Metal</Link></li>
              <li><Link to="/products/tiles" className="text-gray-200 hover:text-yellow-300 transition-colors">Tiles</Link></li>
              <li><Link to="/products/doors-windows" className="text-gray-200 hover:text-yellow-300 transition-colors">Doors & Windows</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-yellow-300 mt-1" />
                <div>
                  <p className="text-gray-200">Juja Farm</p>
                  <p className="text-gray-200">Kiambu County</p>
                  <p className="text-gray-200">Kenya</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-yellow-300 mt-1" />
                <div>
                  <p className="text-gray-200">+254 799 063 452</p>
                  <p className="text-gray-200">+254 106 713 487</p>
                  <p className="text-gray-200">+254 726 495 237</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-yellow-300" />
                <p className="text-gray-200">chanafaminvestment@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-yellow-300 mt-1" />
                <div>
                  <p className="text-gray-200">Monday - Saturday: 7:00 AM - 6:00 PM</p>
                  <p className="text-gray-200">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 text-sm mb-4 md:mb-0">
              © 2025 CHANAFAM INVESTMENT. All rights reserved.
            </p>
            <div className="text-sm text-center md:text-right">
              <p className="text-gray-200">
                Created & Designed by{' '}
                <a 
                  href="https://www.neonsolcreatives.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-300 hover:text-white underline transition-colors duration-300"
                >
                  Neonsol Creatives
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
