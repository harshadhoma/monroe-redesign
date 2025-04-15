// src/components/admin/AnalyticsPanel.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const boothData = [
  { event: 'Spring Market', booths: 42 },
  { event: 'Food Fest', booths: 58 },
  { event: 'Craft Fair', booths: 35 },
];

const statusData = [
  { name: 'Approved', value: 65 },
  { name: 'Pending', value: 20 },
  { name: 'Cancelled', value: 15 },
];

const COLORS = ['#10b981', '#facc15', '#ef4444'];

export const AnalyticsPanel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-800">Analytics Overview</h2>
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="text-sm text-purple-700 hover:underline"
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* STAT BOXES */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl shadow border-l-4 border-green-500"
        >
          <p className="text-gray-500 text-sm mb-1">Total Vendors</p>
          <h3 className="text-2xl font-bold text-gray-800">132</h3>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-500"
        >
          <p className="text-gray-500 text-sm mb-1">Booths Booked</p>
          <h3 className="text-2xl font-bold text-gray-800">139</h3>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl shadow border-l-4 border-yellow-500"
        >
          <p className="text-gray-500 text-sm mb-1">Est. Revenue</p>
          <h3 className="text-2xl font-bold text-gray-800">$7,950</h3>
        </motion.div>
      </div>

      {/* CHARTS */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h4 className="text-lg font-semibold text-purple-800 mb-4">Booths Booked per Event</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={boothData}>
              <XAxis dataKey="event" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="booths" fill="#7c3aed" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h4 className="text-lg font-semibold text-purple-800 mb-4">Booking Status Distribution</h4>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
