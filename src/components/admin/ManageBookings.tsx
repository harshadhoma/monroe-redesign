// src/components/admin/ManageBookings.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

type Booking = {
  id: string;
  event: string;
  vendorName: string;
  email: string;
  boothId: string;
  extras: string[];
  status: 'pending' | 'approved' | 'cancelled';
};

const initialBookings: Booking[] = [
  {
    id: 'bk001',
    event: 'Spring Vendor Market',
    vendorName: 'Jane Crafts',
    email: 'jane@example.com',
    boothId: 'B-12',
    extras: ['Electricity'],
    status: 'pending',
  },
  {
    id: 'bk002',
    event: 'Summer Food Fest',
    vendorName: 'Taco Bros',
    email: 'taco@example.com',
    boothId: 'F-03',
    extras: ['Water Hookup', 'Tables'],
    status: 'approved',
  },
  {
    id: 'bk003',
    event: 'Spring Vendor Market',
    vendorName: 'WoodWorks Co.',
    email: 'wood@example.com',
    boothId: 'C-07',
    extras: [],
    status: 'cancelled',
  },
];

export const ManageBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [filter, setFilter] = useState<string>('');
  const navigate = useNavigate();

  const filteredBookings = filter
    ? bookings.filter((b) => b.event === filter)
    : bookings;

  const handleStatusChange = (id: string, status: Booking['status']) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status } : b))
    );
  };

  const eventOptions = Array.from(new Set(bookings.map((b) => b.event)));

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-800">Vendor Bookings</h2>
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="text-sm text-purple-700 hover:underline"
        >
          ← Back to Dashboard
        </button>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border rounded-md w-full sm:w-auto"
        >
          <option value="">All Events</option>
          {eventOptions.map((event, i) => (
            <option key={i} value={event}>
              {event}
            </option>
          ))}
        </select>
      </div>

      {filteredBookings.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-16">
          No bookings found for this filter.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBookings.map((booking) => (
            <motion.div
              key={booking.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold text-purple-700 mb-1">{booking.vendorName}</h3>
              <p className="text-sm text-gray-600 mb-1">📧 {booking.email}</p>
              <p className="text-sm text-gray-600 mb-1">🎪 Event: {booking.event}</p>
              <p className="text-sm text-gray-600 mb-1">🪧 Booth: {booking.boothId}</p>
              {booking.extras.length > 0 && (
                <p className="text-sm text-gray-600 mb-2">
                  ➕ Extras: {booking.extras.join(', ')}
                </p>
              )}
              <p className="text-sm mb-4">
                Status:{' '}
                <span
                  className={`font-semibold ${
                    booking.status === 'approved'
                      ? 'text-green-600'
                      : booking.status === 'cancelled'
                      ? 'text-red-600'
                      : 'text-yellow-600'
                  }`}
                >
                  {booking.status}
                </span>
              </p>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleStatusChange(booking.id, 'approved')}
                  disabled={booking.status === 'approved'}
                  className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 disabled:opacity-50"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleStatusChange(booking.id, 'cancelled')}
                  disabled={booking.status === 'cancelled'}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 disabled:opacity-50"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
