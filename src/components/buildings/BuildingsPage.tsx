import React, { useState } from 'react';
import { buildings } from '../../data/buildings';
import { Header } from '../Navigation/HeaderComponent';
import { CalendarModal } from '../modals/CalendarModal';
import { RentalFormModal } from '../modals/RentalFormModal';

export default function BuildingsPage() {
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleBuildingClick = (building: any) => {
    setSelectedBuilding(building);
    setShowCalendar(true);
  };

  const handleProceedToForm = (date: string) => {
    setSelectedDate(date);
    setShowCalendar(false);
    setShowForm(true);
  };

  const handleCloseAll = () => {
    setSelectedBuilding(null);
    setSelectedDate('');
    setShowCalendar(false);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-purple-800 text-center mb-8">
          🏩 Explore Fairgrounds Buildings & Rentals
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {buildings.map((building) => (
            <div
              key={building.id}
              className="bg-white rounded-xl shadow hover:shadow-lg cursor-pointer transition"
              onClick={() => handleBuildingClick(building)}
            >
              <img
                src={building.image}
                alt={building.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-purple-700">{building.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{building.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Modal */}
      {selectedBuilding && (
        <CalendarModal
          isOpen={showCalendar}
          onClose={handleCloseAll}
          buildingName={selectedBuilding.name}
          calendarEmbedUrl={selectedBuilding.calendarEmbedUrl}
          onProceed={handleProceedToForm}
        />
      )}

      {/* Rental Form Modal */}
      {selectedBuilding && (
        <RentalFormModal
          isOpen={showForm}
          onClose={handleCloseAll}
          buildingName={selectedBuilding.name}
          selectedDate={selectedDate}
        />
      )}
    </div>
  );
}
