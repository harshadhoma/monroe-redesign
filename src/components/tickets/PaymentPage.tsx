// src/pages/tickets/Payment.tsx

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TopBar } from '../Navigation/TopBar';
import { MainNav } from '../Navigation/MainNav';
import { generateTicketPDF } from '../../utils/generateTicketPDF';
import { motion } from 'framer-motion';
import { Header } from '../../components/Navigation/HeaderComponent';



export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, quantities, total, eventId } = location.state || {};

  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('Online Payment');

  const handleApplyCoupon = () => {
    if (coupon === 'FAIR10') {
      setDiscount(total * 0.1); // 10% off
    } else {
      alert('Invalid coupon code');
      setDiscount(0);
    }
  };

  const finalAmount = total - discount;
  
  const handleConfirmPayment = () => {
    generateTicketPDF({
      name: user.name,
      email: user.email,
      phone: user.phone,
      eventTitle: 'Monroe County Fair 2025',
      tickets: quantities,
      total: finalAmount,
    });

    navigate(`/tickets/${eventId}/success`);
  };


  return (
    <div className="min-h-screen bg-purple-50">
      {/* <TopBar />
      <MainNav /> */}
      <Header />

      <div className="max-w-2xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">Payment</h2>

        <div className="bg-white rounded-xl shadow p-6 space-y-6">
  {/* User Info */}
  <div>
    <h4 className="font-semibold text-purple-800 mb-1">User Details</h4>
    <ul className="text-sm text-gray-700 space-y-1">
      <li>Name: {user?.name}</li>
      <li>Email: {user?.email}</li>
      <li>Contact: {user?.phone}</li>
    </ul>
  </div>

  {/* Ticket Summary */}
  <div>
    <h4 className="font-semibold text-purple-800 mb-1">Tickets</h4>
    <ul className="text-sm text-gray-700 space-y-1">
      {Object.entries(quantities || {}).map(([label, qty]: any) =>
        qty > 0 && <li key={label}>{label}: {qty}</li>
      )}
    </ul>
  </div>

  {/* Coupon Code */}
  <div>
    <label className="block font-semibold text-gray-700 mb-2">Coupon Code</label>
    <div className="flex space-x-2">
      <input
        type="text"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
        placeholder="Enter code"
      />
      <button
        onClick={handleApplyCoupon}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-500"
      >
        Apply
      </button>
    </div>
  </div>

  {/* Payment Method */}
  <div>
    <label className="block font-semibold text-gray-700 mb-2">Payment Method</label>
    <select
      value={paymentMethod}
      onChange={(e) => setPaymentMethod(e.target.value)}
      className="w-full border border-gray-300 rounded-lg px-4 py-2"
    >
      <option>Online Payment</option>
      <option>Pay at Entry</option>
    </select>
  </div>

  {/* Total Summary */}
  <div className="text-right space-y-1">
    <p className="text-purple-800 font-bold">Total: ${total}</p>
    <p className="text-green-600 font-medium">Discount: -${discount.toFixed(2)}</p>
    <p className="text-purple-900 text-lg font-extrabold">Grand Total: ${finalAmount.toFixed(2)}</p>
  </div>

  {/* Confirm Button */}
  <div className="flex justify-center pt-2">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={handleConfirmPayment}
    className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition"
  >
    Confirm & Download Ticket 🎟️
  </motion.button>
</div>


</div>

      </div>
    </div>
  );
}
