// src/components/vendor/VendorMap.tsx

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../Navigation/HeaderComponent';
import { motion } from 'framer-motion';

// Define sizes and pricing for both Indoor and Outdoor booths
const indoorSizes = ['10x10', '10x20', '10x30'];
const indoorPrices = {
  '10x10': { before: 50, after: 55 },
  '10x20': { before: 65, after: 70 },
  '10x30': { before: 80, after: 85 },
};

const outdoorSizes = ['10x10', '10x20', '10x30'];
const outdoorPrices = {
  '10x10': { before: 40, after: 45 },
  '10x20': { before: 55, after: 60 },
  '10x30': { before: 70, after: 75 },
};

// Generate booths: 4 of each size for Indoor and Outdoor
let boothIdCounter = 1;
const indoorBooths = indoorSizes.flatMap((size) =>
  Array.from({ length: 4 }, () => {
    const booth = {
      id: boothIdCounter++,
      type: 'Indoor',
      size,
      priceBefore: indoorPrices[size].before,
      priceAfter: indoorPrices[size].after,
      previousEvents: ['Craft Fair', 'Tech Expo'],
    };
    return booth;
  })
);
const outdoorBooths = outdoorSizes.flatMap((size) =>
  Array.from({ length: 4 }, () => {
    const booth = {
      id: boothIdCounter++,
      type: 'Outdoor',
      size,
      priceBefore: outdoorPrices[size].before,
      priceAfter: outdoorPrices[size].after,
      previousEvents: ['Food Fest', 'Car Show'],
    };
    return booth;
  })
);
const allBooths = [...indoorBooths, ...outdoorBooths];

// Example reserved booth IDs
const reservedBooths = [3, 5, 14, 20];

export const VendorMap = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [selectedBooths, setSelectedBooths] = useState([]);
  const [modalBooth, setModalBooth] = useState(null);

  const openModal = (booth) => {
    if (reservedBooths.includes(booth.id)) return;
    setModalBooth(booth);
  };

  const closeModal = () => {
    setModalBooth(null);
  };

  const confirmSelection = (booth) => {
    const exists = selectedBooths.find((b) => b.id === booth.id);
    if (!exists) {
      setSelectedBooths([...selectedBooths, booth]);
    } else {
      setSelectedBooths(selectedBooths.filter((b) => b.id !== booth.id));
    }
    closeModal();
  };

  const handleProceed = () => {
    navigate(`/vendor/event/${eventId}/booking`, { state: { eventId, selectedBooths } });
  };

  const getTotalPrice = () => {
    // For vendor map, show the "before" price as default display (the current price in the modal is date-adjusted)
    return selectedBooths.reduce(
      (total, booth) => total + (booth.priceBefore || 0),
      0
    );
  };

  const getBoothColor = (booth) => {
    if (reservedBooths.includes(booth.id))
      return 'bg-gray-300 text-gray-500 cursor-not-allowed';
    return booth.type === 'Indoor'
      ? 'bg-blue-200 hover:bg-yellow-100'
      : 'bg-green-200 hover:bg-yellow-100';
  };

  return (
    <div className="min-h-screen bg-purple-50 relative">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Top Center Step Label */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-purple-800">Step 1/5: Vendor Map</h2>
        </div>
        <h2 className="text-3xl font-bold text-purple-800 mb-4">📍 Select Booth(s)</h2>
        <p className="text-gray-600 mb-4 text-sm">
          Click on a booth to view details. Reserved booths are grey. Confirm your selection to proceed.
        </p>
        {/* Legend */}
        <div className="flex gap-4 mb-6 text-sm">
          <Legend color="yellow-400" label="Available" />
          <Legend color="gray-300" label="Reserved" />
          <Legend color="blue-200" label="Indoor" />
          <Legend color="green-200" label="Outdoor" />
        </div>
        {/* Booth Grid */}
        <div className="grid grid-cols-6 md:grid-cols-10 gap-4">
          {allBooths.map((booth) => {
            const isSelected = selectedBooths.find((b) => b.id === booth.id);
            return (
              <motion.div
                key={booth.id}
                onClick={() => openModal(booth)}
                whileHover={{ scale: reservedBooths.includes(booth.id) ? 1 : 1.05 }}
                className={`py-3 rounded text-xs sm:text-sm font-medium text-center border ${getBoothColor(booth)} ${
                  isSelected ? 'ring-4 ring-yellow-400' : ''
                }`}
              >
                Booth {booth.id}
                <div className="text-[10px]">
                  ({booth.type}, {booth.size})
                </div>
              </motion.div>
            );
          })}
        </div>
        {selectedBooths.length > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={handleProceed}
              className="bg-yellow-400 text-purple-900 font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition text-sm"
            >
              Proceed with {selectedBooths.length} Booth(s) - Total: ${getTotalPrice()}
            </button>
          </div>
        )}
      </div>
      {/* Booth Details Modal */}
      {modalBooth && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg"
          >
            <h3 className="text-xl font-bold text-purple-800 mb-4">Booth {modalBooth.id} Details</h3>
            <p className="mb-2 text-sm">
              <strong>Type:</strong> {modalBooth.type}
            </p>
            <p className="mb-2 text-sm">
              <strong>Size:</strong> {modalBooth.size}
            </p>
            <p className="mb-2 text-sm">
              <strong>Price:</strong>{' '}
              ${new Date() > new Date('2025-04-18') ? modalBooth.priceAfter : modalBooth.priceBefore}
            </p>
            <p className="mb-4 text-sm">
              <strong>Previous Events:</strong> {modalBooth.previousEvents.join(', ')}
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => confirmSelection(modalBooth)}
                className="px-4 py-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300 text-sm"
              >
                {selectedBooths.find((b) => b.id === modalBooth.id) ? 'Remove' : 'Select'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const Legend = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <div className={`w-4 h-4 bg-${color} rounded-sm border`} />
    <span className="text-sm">{label}</span>
  </div>
);

export default VendorMap;
