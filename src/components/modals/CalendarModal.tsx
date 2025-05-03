import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  buildingName: string;
  calendarEmbedUrl: string;
  onProceed: (selectedDate: string) => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  onClose,
  buildingName,
  calendarEmbedUrl,
  onProceed,
}) => {
  const [selectedDate, setSelectedDate] = useState('');

  if (!isOpen) return null;

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleProceed = () => {
    if (selectedDate) onProceed(selectedDate);
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
          Select a Date for {buildingName}
        </h2>

        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-1">Choose a date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
        </div>

        <div className="mb-4 h-64 overflow-hidden rounded-lg">
          <iframe
            src={calendarEmbedUrl}
            style={{ border: 0 }}
            width="100%"
            height="100%"
            title={`${buildingName} Availability`}
            loading="lazy"
            className="rounded-lg shadow"
          />
        </div>

        <button
          onClick={handleProceed}
          disabled={!selectedDate}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
        >
          Proceed to Rental Form
        </button>
      </div>
    </div>
  );
};
