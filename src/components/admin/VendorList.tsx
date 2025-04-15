// src/components/admin/VendorList.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

type Vendor = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  registeredEvent: string;
  boothId: string;
  category: string;
  status: 'pending' | 'approved' | 'suspended';
  registeredDate: string;
};

const initialVendors: Vendor[] = [
  {
    id: 'v001',
    name: 'Samantha Green',
    email: 'samantha@craftworks.com',
    phone: '555-123-4567',
    company: 'CraftWorks',
    registeredEvent: 'Spring Vendor Market',
    boothId: 'B-12',
    category: 'Crafts',
    status: 'approved',
    registeredDate: '2025-03-10',
  },
  {
    id: 'v002',
    name: 'Luis Rivera',
    email: 'luis@grilltime.com',
    phone: '555-987-6543',
    company: 'GrillTime BBQ',
    registeredEvent: 'Summer Food Fest',
    boothId: 'F-03',
    category: 'Food',
    status: 'pending',
    registeredDate: '2025-03-22',
  },
  {
    id: 'v003',
    name: 'Ashley Moore',
    email: 'ashley@jewelsbyash.com',
    phone: '555-555-1111',
    company: 'Jewels by Ash',
    registeredEvent: 'Fall Craft Fair',
    boothId: 'C-21',
    category: 'Jewelry',
    status: 'suspended',
    registeredDate: '2025-02-28',
  },
];

export const VendorList = () => {
  const [vendors, setVendors] = useState<Vendor[]>(initialVendors);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filtered = vendors.filter(
    (v) =>
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.email.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status: Vendor['status']) => {
    switch (status) {
      case 'approved':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'suspended':
        return 'text-red-600 bg-red-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-800">Vendor Directory</h2>
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="text-sm text-purple-700 hover:underline"
        >
          ← Back to Dashboard
        </button>
      </div>

      <div className="mb-6 max-w-md">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500 text-center mt-20 text-lg">No vendors found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((vendor) => (
            <motion.div
              key={vendor.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-purple-800">{vendor.name}</h3>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(vendor.status)}`}>
                  {vendor.status.toUpperCase()}
                </span>
              </div>

              <p className="text-sm text-gray-600">📧 {vendor.email}</p>
              <p className="text-sm text-gray-600">📞 {vendor.phone}</p>
              <p className="text-sm text-gray-600">🏢 {vendor.company}</p>
              <p className="text-sm text-gray-600">📅 Registered: {vendor.registeredDate}</p>
              <p className="text-sm text-gray-600">🎪 Event: {vendor.registeredEvent}</p>
              <p className="text-sm text-gray-600">🪧 Booth: {vendor.boothId}</p>
              <p className="text-sm text-gray-600">📂 Category: {vendor.category}</p>

              <div className="flex space-x-2 mt-4">
                <button className="bg-purple-700 text-white px-4 py-1 rounded hover:bg-purple-800 text-sm">
                  View Bookings
                </button>
                <button className="bg-yellow-400 text-purple-900 px-4 py-1 rounded hover:bg-yellow-300 text-sm">
                  Message
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
