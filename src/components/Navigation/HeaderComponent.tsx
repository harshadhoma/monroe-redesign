import React, { useState } from 'react';
import { MainNav } from './MainNav';
import { Link } from 'react-router-dom';
import {
  Ticket, Calendar, GraduationCap, Map, Camera, Bell, ChevronDown
} from 'lucide-react';

const quickLinks = [
  { icon: Ticket, text: 'Buy Tickets', href: '/tickets' },
  { icon: Calendar, text: 'Event Schedule', href: '/schedule' },
  { icon: GraduationCap, text: '4-H', href: '/4h' },
  { icon: Map, text: 'Interactive Map', href: '/map' },
  { icon: Camera, text: 'Share Your Story', href: '/share-your-story' },
  { icon: Bell, text: 'Fair Updates', href: '/updates' },
];

export function Header() {
  const [showQuickLinks, setShowQuickLinks] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top Quick Links Bar */}
      <div className="bg-purple-900 text-white text-sm px-4 py-2">
        <div className="flex flex-col items-start sm:flex-row sm:justify-end sm:items-center gap-2 sm:gap-6">
          {/* Quick Links Dropdown on Mobile */}
          <div className="relative md:hidden">
            <button
              onClick={() => setShowQuickLinks(!showQuickLinks)}
              className="flex items-center space-x-1 text-white"
            >
              <span>Quick Links</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {showQuickLinks && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-md z-50">
                {quickLinks.map((link, idx) => (
                  <Link
                    key={idx}
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

          {/* Inline Quick Links for Desktop */}
          <div className="hidden md:flex space-x-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="flex items-center space-x-1 hover:text-yellow-300 transition-colors"
              >
                <link.icon className="w-4 h-4" />
                <span>{link.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <MainNav />
    </header>
  );
}
