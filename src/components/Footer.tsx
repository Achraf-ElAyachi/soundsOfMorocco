import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter Signup */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates on Moroccan culture and music projects.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-morocco-ochre-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-morocco-red-600 hover:bg-morocco-red-700 rounded-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-morocco-ochre-400" />
                <span className="text-gray-300">info@soundsofmorocco.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-morocco-ochre-400" />
                <span className="text-gray-300">+212 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-morocco-ochre-400" />
                <span className="text-gray-300">Casablanca, Morocco</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-morocco-ochre-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-morocco-ochre-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-morocco-ochre-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Sounds of Morocco. All rights reserved. Preserving and celebrating Moroccan musical heritage.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;