import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Our Projects' },
    { path: '/events', label: 'Events' },
    { path: '/donations', label: 'Donations' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About Us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#3333FF] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/src/assets/logo.png"
                alt="Sounds of Morocco Logo"
                className="h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52 w-auto min-w-[120px] object-contain max-w-none"
              />




            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive(item.path)
                    ? 'text-[#F4DEBD] font-semibold'
                    : 'text-white hover:text-[#F4DEBD]'
                  }`}
                style={isActive(item.path) ? { fontSize: '0.975rem' } : {}}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-morocco-red-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#3333FF] border-t">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${isActive(item.path)
                    ? 'text-[#F4DEBD] font-semibold'
                    : 'text-white hover:text-[#F4DEBD]'
                  }`}
                style={isActive(item.path) ? { fontSize: '0.975rem' } : {}}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;