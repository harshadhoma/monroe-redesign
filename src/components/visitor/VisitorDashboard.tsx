// src/pages/user/UserDashboard.tsx

import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/Navigation/TopBar';
import { MainNav } from '../../components/Navigation/MainNav';
import { motion } from 'framer-motion';

interface Ticket {
  event: string;
  date: string;
  quantity: number;
  total: number;
}

export default function UserDashboard() {
  const [user] = useState({ name: 'Visitor Test1', email: 'visitor1@user.com' });

  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    // Simulate fetch from local/sessionStorage or dummy DB
    const dummyTickets: Ticket[] = [
      {
        event: 'Spring Food Fest',
        date: 'April 12, 2025',
        quantity: 3,
        total: 30
      },
      {
        event: 'Crafts & Culture Day',
        date: 'May 3, 2025',
        quantity: 2,
        total: 20
      }
    ];
    setTickets(dummyTickets);
  }, []);

  return (
    <div className="min-h-screen bg-purple-50">
      <TopBar />
      <MainNav />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">Welcome, {user.name}</h2>
        <p className="text-gray-600 mb-8">Email: {user.email}</p>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-purple-700 mb-4">🎟️ Your Booked Tickets</h3>

          {tickets.length === 0 ? (
            <p className="text-gray-500">You haven’t booked any tickets yet.</p>
          ) : (
            <div className="space-y-4">
              {tickets.map((ticket, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="border border-purple-200 p-4 rounded-lg shadow-sm bg-purple-50"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-purple-900">{ticket.event}</h4>
                      <p className="text-sm text-gray-600">{ticket.date}</p>
                      <p className="text-sm text-gray-700">Quantity: {ticket.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-purple-800">${ticket.total}</p>
                      <button className="mt-2 text-sm text-purple-600 underline hover:text-purple-800">
                        Download Ticket
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
