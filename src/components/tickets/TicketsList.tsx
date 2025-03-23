// src/pages/tickets/TicketsList.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TopBar } from '../../components/Navigation/TopBar';
import { MainNav } from '../../components/Navigation/MainNav';
import { motion } from 'framer-motion';

const sampleEvents = [
  {
    id: 'spring-carnival',
    title: 'Spring Carnival',
    date: 'May 5 - May 7, 2025',
    image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=800',
    shortDescription: 'A weekend full of fun rides, games, and food!'
  },
  {
    id: 'country-concert',
    title: 'Country Music Concert',
    date: 'June 12, 2025',
    image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800',
    shortDescription: 'Enjoy live performances by top country artists.'
  },
  {
    id: 'food-truck-fiesta',
    title: 'Food Truck Fiesta',
    date: 'July 4, 2025',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800',
    shortDescription: 'Taste the best food from around the region.'
  }
];

export default function TicketsList() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-purple-50">
      <TopBar />
      <MainNav />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-purple-900 mb-8 text-center">🎟️ Buy Tickets</h1>

        <div className="grid md:grid-cols-3 gap-10">
          {sampleEvents.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                <p className="text-gray-600 text-sm mb-4">{event.shortDescription}</p>
                <button
                  onClick={() => navigate(`/tickets/${event.id}`)}
                  className="bg-yellow-400 text-purple-900 font-bold py-2 px-4 rounded-full text-sm hover:bg-yellow-300 transition"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
