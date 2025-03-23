import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Map, Bell, Music, Ticket } from 'lucide-react';

const quickLinks = [
  { icon: Ticket, text: 'Buy Tickets', href: '/tickets' },
  { icon: Calendar, text: 'Event Schedule', href: '#' },
  { icon: Bell, text: 'Fair Updates', href: '#' },
  { icon: Map, text: 'Interactive Map', href: '#' },
  { icon: Music, text: 'Live Entertainment', href: '#' },
];

export function TopBar() {
  return (
    <div className="bg-purple-900 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ensure the links are aligned to the right */}
        <div className="flex justify-end space-x-6">
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
