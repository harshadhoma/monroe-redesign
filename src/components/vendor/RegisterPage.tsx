// src/components/vendor/RegisterPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TopBar } from '../Navigation/TopBar';
import { MainNav } from '../Navigation/MainNav';

export const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-purple-50">
      <TopBar />
      <MainNav />
      <div className="max-w-md mx-auto py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Vendor Registration</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Business Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-yellow-400 text-purple-900 font-bold py-3 px-6 rounded-full text-lg hover:bg-yellow-300 transition"
            >
              Register
            </motion.button>
          </form>

          <p className="text-sm text-center text-gray-500 mt-4">
            Already have an account?{' '}
            <Link to="/vendor/login" className="text-purple-700 hover:underline">
              Login here
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
