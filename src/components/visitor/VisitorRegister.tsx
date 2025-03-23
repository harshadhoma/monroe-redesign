// src/pages/auth/VisitorRegister.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopBar } from '../../components/Navigation/TopBar';
import { MainNav } from '../../components/Navigation/MainNav';
import { motion } from 'framer-motion';

export default function VisitorRegister() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.password) {
      alert('Registration successful!');
      navigate('/login');
    } else {
      alert('Please complete all fields.');
    }
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <TopBar />
      <MainNav />
      <div className="max-w-md mx-auto mt-5 p-8 bg-white rounded-xl shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-purple-800 mb-6 text-center"
        >
          Visitor Registration
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-yellow-400 text-purple-900 font-bold w-full py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Register
          </motion.button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <button onClick={() => navigate('/auth/login')} className="text-purple-600 hover:underline">
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}
