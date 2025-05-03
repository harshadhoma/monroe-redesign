import React, { useState } from 'react';
import { X } from 'lucide-react';

interface RentalFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  buildingName: string;
  selectedDate: string;
}

export const RentalFormModal: React.FC<RentalFormModalProps> = ({
  isOpen,
  onClose,
  buildingName,
  selectedDate,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Rental request submitted:', { ...formData, selectedDate });
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-xl w-full shadow-lg relative p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-purple-800 mb-2">
          Rental Request for {buildingName}
        </h2>
        <p className="text-sm text-gray-600 mb-4">Selected Date: <strong>{selectedDate}</strong></p>

        {submitted ? (
          <div className="bg-green-100 text-green-800 p-4 rounded shadow">
            🎉 Thank you! Your rental request has been submitted. We’ll contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your rental needs..."
              rows={4}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded w-full"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
