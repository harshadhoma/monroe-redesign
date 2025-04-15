// src/components/admin/ReportsPanel.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const AdminReports = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const navigate = useNavigate();

  const handleExport = (type: 'csv' | 'pdf') => {
    alert(`Exported ${type.toUpperCase()} for ${fromDate || 'start'} to ${toDate || 'end'}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-800">Reports & Export</h2>
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="text-sm text-purple-700 hover:underline"
        >
          ← Back to Dashboard
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
        <label className="text-sm text-gray-600">
          From:{' '}
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="border px-3 py-2 rounded-md ml-2"
          />
        </label>

        <label className="text-sm text-gray-600">
          To:{' '}
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="border px-3 py-2 rounded-md ml-2"
          />
        </label>

        <div className="space-x-2 mt-2 sm:mt-0">
          <button
            onClick={() => handleExport('csv')}
            className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 text-sm"
          >
            Export CSV
          </button>
          <button
            onClick={() => handleExport('pdf')}
            className="bg-yellow-400 text-purple-900 px-4 py-2 rounded hover:bg-yellow-300 text-sm"
          >
            Export PDF
          </button>
        </div>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <motion.div className="bg-white p-6 rounded-xl shadow border-l-4 border-green-500">
          <p className="text-sm text-gray-500 mb-1">Total Vendors</p>
          <h3 className="text-2xl font-bold text-gray-800">132</h3>
        </motion.div>

        <motion.div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-500">
          <p className="text-sm text-gray-500 mb-1">Total Bookings</p>
          <h3 className="text-2xl font-bold text-gray-800">189</h3>
        </motion.div>

        <motion.div className="bg-white p-6 rounded-xl shadow border-l-4 border-yellow-500">
          <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
          <h3 className="text-2xl font-bold text-gray-800">$9,250</h3>
        </motion.div>
      </div>

      {/* Breakdown Placeholder */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h4 className="text-lg font-semibold text-purple-800 mb-4">Summary Breakdown</h4>
        <ul className="text-sm text-gray-700 list-disc ml-6 space-y-1">
          <li>Spring Vendor Market – 55 vendors – $2,750</li>
          <li>Summer Food Fest – 65 vendors – $3,900</li>
          <li>Fall Craft Fair – 42 vendors – $2,600</li>
        </ul>
      </div>
    </div>
  );
};