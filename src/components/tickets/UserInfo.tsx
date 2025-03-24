// src/pages/tickets/UserInfo.tsx

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TopBar } from '../Navigation/TopBar';
import { MainNav } from '../Navigation/MainNav';

export default function UserInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const { eventId, quantities, total } = location.state || {};

  const [mode, setMode] = useState<'guest' | 'login'>('guest');

  const [guestInfo, setGuestInfo] = useState({ name: '', email: '', phone: '' });
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

  const dummyUser = {
    email: 'user@monroe.com',
    password: 'pass123',
    name: 'John Monroe',
    phone: '1234567890'
  };

  const handleGuestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGuestInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleGuestContinue = () => {
    if (!guestInfo.name || !guestInfo.email || !guestInfo.phone) {
      return alert('Please fill out all guest fields.');
    }
    navigate(`/tickets/${eventId}/payment`, {
      state: { eventId, quantities, total, user: guestInfo }
    });
  };

  const handleLogin = () => {
    if (
      loginInfo.email === dummyUser.email &&
      loginInfo.password === dummyUser.password
    ) {
      navigate(`/tickets/${eventId}/payment`, {
        state: {
          eventId,
          quantities,
          total,
          user: {
            name: dummyUser.name,
            email: dummyUser.email,
            phone: dummyUser.phone
          }
        }
      });
    } else {
      alert('Invalid credentials. Try again or continue as guest.');
    }
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <TopBar />
      <MainNav />

      <div className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">Your Information</h2>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setMode('guest')}
            className={`py-2 px-4 rounded-full font-semibold ${mode === 'guest' ? 'bg-purple-600 text-white' : 'bg-white text-purple-700 border'}`}
          >
            Continue as Guest
          </button>
          <button
            onClick={() => setMode('login')}
            className={`py-2 px-4 rounded-full font-semibold ${mode === 'login' ? 'bg-purple-600 text-white' : 'bg-white text-purple-700 border'}`}
          >
            Login
          </button>
        </div>

        {mode === 'guest' && (
          <div className="bg-white rounded-xl p-6 shadow space-y-4">
            <Input label="Full Name" name="name" value={guestInfo.name} onChange={handleGuestChange} />
            <Input label="Email" name="email" type="email" value={guestInfo.email} onChange={handleGuestChange} />
            <Input label="Phone" name="phone" type="tel" value={guestInfo.phone} onChange={handleGuestChange} />
            <button
              onClick={handleGuestContinue}
              className="mt-4 w-full bg-yellow-400 text-purple-900 font-bold py-3 rounded-full hover:bg-yellow-300 transition"
            >
              Continue to Payment
            </button>
          </div>
        )}

        {mode === 'login' && (
          <div className="bg-white rounded-xl p-6 shadow space-y-4">
            <Input label="Email" name="email" type="email" value={loginInfo.email} onChange={handleLoginChange} />
            <Input label="Password" name="password" type="password" value={loginInfo.password} onChange={handleLoginChange} />
            <button
              onClick={handleLogin}
              className="mt-4 w-full bg-yellow-400 text-purple-900 font-bold py-3 rounded-full hover:bg-yellow-300 transition"
            >
              Login & Continue
            </button>
            <p className="text-sm text-gray-500 text-center mt-2">
              Use: <strong>user@monroe.com</strong> / <strong>pass123</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const Input = ({ label, name, value, onChange, type = 'text' }: any) => (
  <div>
    <label className="block font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-lg px-4 py-2"
    />
  </div>
);
