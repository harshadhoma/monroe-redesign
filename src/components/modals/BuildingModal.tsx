import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BuildingModalProps {
  isOpen: boolean;
  onClose: () => void;
  building: {
    name: string;
    image: string;
    description: string;
    calendarEmbedUrl: string;
    fullPageLink: string;
  };
}

export const BuildingModal: React.FC<BuildingModalProps> = ({ isOpen, onClose, building }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  if (!isOpen || !building) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted rental request:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-5xl w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row gap-8 p-6">
          {/* Left Column: Info */}
          <div className="md:w-1/2 space-y-4">
            <img
              src={building.image}
              alt={building.name}
              className="w-full h-56 object-cover rounded-lg shadow"
            />

            <h2 className="text-2xl font-bold text-purple-800">{building.name}</h2>
            <p className="text-gray-700">{building.description}</p>

            <Link
              to={building.fullPageLink}
              className="text-sm text-purple-600 underline hover:text-purple-800"
            >
              View Full Page
            </Link>

            <div className="h-64 w-full overflow-hidden rounded-lg">
              <iframe
                src={building.calendarEmbedUrl}
                style={{ border: 0 }}
                width="100%"
                height="100%"
                title={`${building.name} Calendar`}
                loading="lazy"
                className="rounded-lg shadow"
              />
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="md:w-1/2">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Request Rental</h3>
            {submitted ? (
              <div className="bg-green-100 text-green-800 p-4 rounded shadow">
                🎉 Thank you! Your request has been received. We’ll contact you soon.
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
      </div>
    </div>
  );
};