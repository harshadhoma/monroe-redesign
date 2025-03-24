import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Map, Bell, Ticket, GraduationCap, Camera } from 'lucide-react';

const quickLinks = [
  { icon: Ticket, text: 'Buy Tickets', href: '/tickets' },
  { icon: Calendar, text: 'Event Schedule', href: '/schedule' },
  { icon: GraduationCap, text: '4-H', href: '/4h' },
  { icon: Map, text: 'Interactive Map', href: '/map' },
  { icon: Camera, text: 'Upload Pictures', href: '/upload' },
  { icon: Bell, text: 'Fair Updates', href: '/updates' },
];

export function TopBar() {
  return (
    <div className="bg-purple-900 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive container */}
        <div className="flex flex-col items-start sm:flex-row sm:justify-end sm:items-center gap-2 sm:gap-6">
          {quickLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="flex items-center space-x-2 text-sm hover:text-yellow-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="w-4 h-4" />
              <span>{link.text}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
