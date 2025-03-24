// src/components/vendor/VendorDashboard.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TopBar } from '../Navigation/TopBar';
import { MainNav } from '../Navigation/MainNav';
import { Header } from '../Navigation/HeaderComponent';

const dummyEvents = [
  {
    id: 'spring-market',
    title: 'Spring Vendor Market',
    date: 'May 10, 2025',
    description: 'Join us for our annual Spring Market! Limited booths available.',
  },
  {
    id: 'food-fest',
    title: 'Summer Food Fest',
    date: 'July 20, 2025',
    description: 'Food vendors gather to serve thousands of visitors — reserve early!',
  },
  {
    id: 'craft-fair',
    title: 'Fall Craft Fair',
    date: 'October 5, 2025',
    description: 'Perfect for artisans and crafters. Showcase your work!',
  },
];

export const VendorDashboard = () => {
  const navigate = useNavigate();

  const handleBookNow = (eventId: string) => {
    navigate(`/vendor/event/${eventId}/map`);
  };

  return (
    <div className="min-h-screen bg-purple-50 overflow-x-hidden">
      {/* <TopBar />
      <MainNav /> */}
      <Header />
      <div className="max-w-7xl mx-auto pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-purple-800 mb-8"
        >
          Vendor Dashboard
        </motion.h2>

        <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
          <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-2">📜 Vendor Guidelines</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Please review our <strong>vendor policies</strong> before booking. Bring your own tables unless rented. No refunds after May 1st. Outdoor spots may require tents. Electricity is available in limited areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-purple-800 mb-1">{event.title}</h4>
              <p className="text-sm text-gray-500 mb-2">📅 {event.date}</p>
              <p className="text-gray-600 text-sm sm:text-base mb-4">{event.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-purple-900 font-bold py-2 px-4 rounded-full text-sm hover:bg-yellow-300"
                onClick={() => handleBookNow(event.id)}
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
