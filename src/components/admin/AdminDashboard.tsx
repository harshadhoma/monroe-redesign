// src/components/admin/AdminDashboard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sidebar } from './Sidebar';

type AdminDashboardProps = {
    setIsAdmin: (value: boolean) => void;
  };  

export const AdminDashboard = ({ setIsAdmin }: AdminDashboardProps) => {
  const navigate = useNavigate();

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

    { title: 'Logout', route: 'logout' }, // special logout logic
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar setIsAdmin={setIsAdmin} />

      <div className="flex-1 p-10">
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
