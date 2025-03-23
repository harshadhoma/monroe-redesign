// src/pages/tickets/TicketSelection.tsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { TopBar } from '../../components/Navigation/TopBar';
import { MainNav } from '../../components/Navigation/MainNav';

const ticketOptions = [
  { label: 'Adult', description: 'Age 12+', price: 10 },
  { label: 'Child', description: 'Age 5–11', price: 5 },
  { label: 'Infant', description: 'Under 5 (Free)', price: 0 },
  { label: 'Family Pass', description: '2 Adults + 2 Children', price: 30 },
  { label: 'VIP Add-on', description: 'Includes reserved seating & perks', price: 20 },
  { label: 'Food Bundle', description: 'Meal voucher for food stalls', price: 12 }
];

export default function TicketSelection() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = ticketOptions.reduce((sum, ticket) => {
      const qty = quantities[ticket.label] || 0;
      return sum + qty * ticket.price;
    }, 0);
    setTotal(newTotal);
  }, [quantities]);

  const updateQty = (label: string, value: number) => {
    setQuantities(prev => ({ ...prev, [label]: Math.max(0, value) }));
  };

  const handleContinue = () => {
    const hasPaidTicket = ticketOptions.some(t => (quantities[t.label] || 0) > 0 && t.price > 0);
    if (!hasPaidTicket) return alert('Please select at least one paid ticket to continue.');

    navigate(`/tickets/${eventId}/user-info`, { state: { eventId, quantities, total } });
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <TopBar />
      <MainNav />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-purple-800 text-center mb-8">Select Tickets</h2>

        <div className="space-y-4">
          {ticketOptions.map((ticket, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm p-5 flex flex-col sm:flex-row sm:items-center justify-between"
            >
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-purple-900">{ticket.label}</h4>
                <p className="text-sm text-gray-500">{ticket.description}</p>
              </div>

              <div className="flex items-center mt-4 sm:mt-0 sm:space-x-6 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQty(ticket.label, (quantities[ticket.label] || 0) - 1)}
                    className="w-8 h-8 rounded-full bg-purple-100 text-purple-900 text-lg"
                  >–</button>
                  <span className="w-6 text-center font-medium text-purple-800">
                    {quantities[ticket.label] || 0}
                  </span>
                  <button
                    onClick={() => updateQty(ticket.label, (quantities[ticket.label] || 0) + 1)}
                    className="w-8 h-8 rounded-full bg-purple-600 text-white text-lg"
                  >+</button>
                </div>

                <span className="ml-4 font-semibold text-purple-700 whitespace-nowrap">
                  ${ticket.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-right">
          <div className="text-lg font-semibold text-purple-900 mb-4">Total: ${total}</div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContinue}
            className="bg-purple-400 text-purple-900 font-bold py-3 px-6 rounded-full hover:bg-purple-300 transition"
          >
            Continue →
          </motion.button>
        </div>
      </div>
    </div>
  );
}
