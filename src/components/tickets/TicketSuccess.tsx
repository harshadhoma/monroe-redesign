import React from 'react';
import { TopBar } from '../Navigation/TopBar';
import { MainNav } from '../Navigation/MainNav';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function TicketSuccess() {
  return (
    <div className="min-h-screen bg-purple-50">
      <TopBar />
      <MainNav />

      <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-10 shadow-md max-w-md w-full"
        >
          <h2 className="text-3xl font-bold text-purple-800 mb-4">🎟️ Ticket Booked Successfully!</h2>
          <p className="text-gray-600 mb-6">A copy of your ticket has been downloaded. Show the QR code at the gate for entry.</p>

          <Link
            to="/"
            className="inline-block bg-yellow-400 text-purple-900 font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition"
          >
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
