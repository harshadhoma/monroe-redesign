// src/pages/tickets/EventDetails.tsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TopBar } from '../../components/Navigation/TopBar';
import { MainNav } from '../../components/Navigation/MainNav';
import { motion } from 'framer-motion';
import { Header } from '../../components/Navigation/HeaderComponent';

const eventsData = {
  'spring-carnival': {
    title: 'Spring Carnival',
    date: 'May 5 - May 7, 2025',
    location: 'Fairgrounds Park - Main Arena',
    image: 'https://visitlitchfield.com/wp-content/uploads/2024/03/carnival-1.jpg',
    description: `Get ready for a weekend of fun! Enjoy thrilling rides, delicious food, live music, and entertainment for all ages. It's the perfect spring celebration.`,
    tickets: [
      { type: 'General Admission', price: 10 },
      { type: 'Family Pass (4 people)', price: 35 },
      { type: 'Unlimited Rides Wristband', price: 25 }
    ]
  },
  'country-concert': {
    title: 'Country Music Concert',
    date: 'June 12, 2025',
    location: 'Monroe Grand Stage',
    image: 'https://images.pexels.com/photos/3727150/pexels-photo-3727150.jpeg',
    description: `Join us for a night under the stars with top country artists. Food, drinks, and great vibes await!`,
    tickets: [
      { type: 'Standard', price: 25 },
      { type: 'Front Row VIP', price: 60 },
      { type: 'Meet & Greet + VIP', price: 100 }
    ]
  },
  'food-festival': {
    title: 'Food Truck Fiesta',
    date: 'July 4, 2025',
    location: 'Central Grounds',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACqVeydR6Pjm99kfhBvtM8M5gSndGs87DEA&s',
    description: `Savor an explosion of flavors from 20+ food trucks, featuring local chefs, music, and fun for the whole family.`,
    tickets: [
      { type: 'Entry Only', price: 5 },
      { type: 'Entry + Tasting Pack', price: 15 }
    ]
  }
};

export default function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = eventsData[eventId as keyof typeof eventsData];

  if (!event) {
    return <div className="text-center py-20 text-red-600">Event not found</div>;
  }

  return (
    <div className="min-h-screen bg-purple-50">
      {/* <TopBar />
      <MainNav /> */}
      < Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <img
          src={event.image}
          alt={event.title}
          className="rounded-xl w-full h-64 object-cover mb-8"
        />

        <h1 className="text-3xl font-bold text-purple-900 mb-2">{event.title}</h1>
        <p className="text-gray-600 text-sm mb-1">📅 {event.date}</p>
        <p className="text-gray-600 text-sm mb-6">📍 {event.location}</p>
        <p className="text-gray-800 mb-8 leading-relaxed">{event.description}</p>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">Available Tickets</h3>
          <ul className="space-y-2 mb-6">
            {event.tickets.map((ticket, index) => (
              <li key={index} className="flex justify-between border-b pb-2 text-sm">
                <span>{ticket.type}</span>
                <span className="font-semibold text-purple-900">${ticket.price}</span>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/tickets/${eventId}/checkout`)}
            className="bg-yellow-400 text-purple-900 font-bold py-3 px-6 rounded-full text-sm hover:bg-yellow-300 transition"
          >
            Buy Tickets
          </motion.button>
        </div>
      </div>
    </div>
  );
}
