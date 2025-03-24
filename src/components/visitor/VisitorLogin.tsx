// src/pages/auth/VisitorLogin.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopBar } from '../../components/Navigation/TopBar';
import { MainNav } from '../../components/Navigation/MainNav';
import { motion } from 'framer-motion';
import { Header } from '../../components/Navigation/HeaderComponent';

const dummyUsers = [
    {
      email: 'test1@user.com',
      password: '12345',
      name: 'User 1'
    },
    {
      email: 'test2@user.com',
      password: '123456',
      name: 'User 2'
    }
  ];
  

export default function VisitorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  
    const foundUser = dummyUsers.find(
      (user) => user.email === email && user.password === password
    );
  
    if (foundUser) {
      alert(`Welcome, ${foundUser.name}!`);
      // You can store user in localStorage or state to simulate session
      localStorage.setItem('user', JSON.stringify(foundUser));
      navigate('/tickets'); // or wherever you want to redirect
    } else {
      alert('Invalid credentials!');
    }
  };
  

  return (
    <div className="min-h-screen bg-purple-50">
      {/* <TopBar />
      <MainNav /> */}
      <Header />
      <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded-xl shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-purple-800 mb-6 text-center"
        >
          Visitor Login
        </motion.h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
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
            Login
          </motion.button>
        </form>
        <p className="text-sm text-center mt-4">
          Don't have an account?{' '}
          <button onClick={() => navigate('/auth/register')} className="text-purple-600 hover:underline">
            Register here
          </button>
        </p>
      </div>
    </div>
  );
}
