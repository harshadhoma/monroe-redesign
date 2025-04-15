// src/components/admin/Sidebar.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const links = [
  { label: 'Manage Events', path: '/admin/events' },
  { label: 'Vendor Bookings', path: '/admin/bookings' },
  { label: 'Vendors List', path: '/admin/vendors' },
  { label: 'Analytics', path: '/admin/analytics' },
  { label: 'Messages', path: '/admin/messages' },
  { label: 'Reports', path: '/admin/reports' },
  { label: 'Settings', path: '/admin/settings' },
];

export const Sidebar = ({ setIsAdmin }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-64 bg-purple-900 text-white min-h-screen p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-3">
        {links.map((link, i) => (
          <li
            key={i}
            onClick={() => navigate(link.path)}
            className={`cursor-pointer px-4 py-2 rounded-lg hover:bg-purple-700 transition ${
              location.pathname === link.path ? 'bg-purple-700' : ''
            }`}
          >
            {link.label}
          </li>
        ))}
        <li
          onClick={() => {
            setIsAdmin(false);
            navigate('/admin/login');
          }}
          className="mt-6 cursor-pointer px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
        >
          Logout
        </li>
      </ul>
    </div>
  );
};
