import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar, Map, Bell, Ticket, GraduationCap, Camera, ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { icon: Ticket, text: 'Buy Tickets', href: '/tickets' },
  { icon: Calendar, text: 'Event Schedule', href: '/schedule' },
  { icon: GraduationCap, text: '4-H', href: '/4h' },
  { icon: Map, text: 'Interactive Map', href: '/map' },
  { icon: Camera, text: 'Upload Pictures', href: '/upload' },
  { icon: Bell, text: 'Fair Updates', href: '/updates' },
];

export function TopBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="bg-purple-900 text-white py-2">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Desktop Quick Links */}
    <div className="flex flex-col items-start sm:flex-row sm:justify-end sm:items-center gap-2 sm:gap-6">
      {quickLinks.map((link, index) => (
        <Link
          key={index}
          to={link.href}
          className="flex items-center space-x-2 text-sm hover:text-yellow-300 transition-colors"
        >
          <link.icon className="w-4 h-4" />
          <span>{link.text}</span>
        </Link>
      ))}
    </div>

        {/* Mobile - Dropdown version */}
        <div className="md:hidden relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center text-sm space-x-1"
          >
            <span>Quick Links</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {showDropdown && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-md z-50">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="flex items-center px-4 py-2 hover:bg-gray-100"
                >
                  <link.icon className="w-4 h-4 mr-2 text-purple-700" />
                  {link.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
