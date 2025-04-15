// src/components/admin/AdminLogin.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '../Navigation/HeaderComponent'; // Update path if needed

export const AdminLogin = ({ setIsAdmin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@demo.com' && password === '123456') {
      setIsAdmin(true);
      navigate('/admin/dashboard');
    } else {
      setError('Invalid email or password. Try admin@demo.com / 123456');
    }
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <Header />
      <div className="max-w-md mx-auto py-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Admin Login</h2>

          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-yellow-400 text-purple-900 font-bold py-3 px-6 rounded-full text-lg hover:bg-yellow-300 transition"
            >
              Login
            </motion.button>
            <p className="text-sm text-gray-500 text-center mt-2">
              Use: <strong>admin@demo.com</strong> / <strong>123456</strong>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
