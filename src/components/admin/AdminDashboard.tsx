// src/components/admin/AdminDashboard.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sidebar } from './Sidebar';

export const AdminDashboard = ({ setIsAdmin }: { setIsAdmin: (value: boolean) => void }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCardClick = (route: string) => {
    if (route === 'logout') {
      setIsAdmin(false);
      navigate('/admin/login');
    } else {
      navigate(route);
    }
  };

  const cards = [
    { title: 'Manage Events', route: '/admin/events' },
    { title: 'Vendor Bookings', route: '/admin/bookings' },
    { title: 'Vendors List', route: '/admin/vendors' },
    { title: 'Analytics', route: '/admin/analytics' },
    { title: 'Messages', route: '/admin/messages' },
    { title: 'Reports', route: '/admin/reports' },
    { title: 'Settings', route: '/admin/settings' },
    { title: 'Logout', route: 'logout' },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Mobile toggle button */}
      <div className="md:hidden p-4 bg-purple-900 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white bg-purple-700 px-3 py-1 rounded"
        >
          {sidebarOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`md:block ${sidebarOpen ? 'block' : 'hidden'} md:w-64 w-2/3 bg-purple-900 text-white p-6 shadow-md`}>
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-3">
          {cards.map((card, i) => (
            <li
              key={i}
              onClick={() => handleCardClick(card.route)}
              className={`cursor-pointer px-4 py-2 rounded-lg hover:bg-purple-700 transition ${card.route === 'logout' ? 'bg-red-600 hover:bg-red-700 mt-6' : ''}`}
            >
              {card.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 md:p-10">
        <h1 className="text-3xl font-bold text-purple-800 mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCardClick(card.route)}
              className="cursor-pointer bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-purple-700">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
