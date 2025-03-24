// src/components/vendor/MapPreview.tsx

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TopBar } from '../Navigation/TopBar';
import { MainNav } from '../Navigation/MainNav';
import { motion } from 'framer-motion';
import fairMap from '../../images/monroefg.png';
import { Header } from '../Navigation/HeaderComponent';

export const MapPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleStartBooking = () => {
    navigate(`/vendor/event/${id}/booking`);
  };

  return (
    <div className="min-h-screen bg-purple-50 overflow-x-hidden">
      {/* <TopBar />
      <MainNav /> */}
      <Header />

      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-purple-800 mb-8"
        >
          Select Booth Area for <span className="capitalize">{id?.replace('-', ' ')}</span>
        </motion.h2>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <img
            src={fairMap}
            alt="Fairground Map"
            className="w-full max-w-3xl mx-auto rounded-lg border border-gray-200"
            // className="w-full rounded-lg border border-gray-200"
          />
          <p className="text-sm text-gray-500 mt-3">
            Review the layout and choose your preferred booth location. You’ll specify your booth preferences in the next step.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStartBooking}
          className="bg-yellow-400 text-purple-900 font-bold py-3 px-6 rounded-full text-lg hover:bg-yellow-300 transition"
        >
          Start Booking
        </motion.button>
      </div>
    </div>
  );
};
