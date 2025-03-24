import React from 'react';
import { TopBar } from '../../components/Navigation/TopBar';
import { MainNav } from '../../components/Navigation/MainNav';
import { Header } from '../../components/Navigation/HeaderComponent';

const updates = [
  {
    date: 'March 23, 2025',
    message: '🎆 Fireworks show rescheduled to 9:30 PM due to light showers.'
  },
  {
    date: 'March 22, 2025',
    message: '🎁 First 100 visitors at Art Bazaar today get a free tote bag!'
  },
  {
    date: 'March 21, 2025',
    message: '🛑 South Parking is full. Please use North Entrance for faster access.'
  },
  {
    date: 'March 20, 2025',
    message: '🎤 Surprise musical act added to Rock Night — don’t miss it!'
  },
];

export default function FairUpdates() {
  return (
    <div className="min-h-screen bg-purple-50">
      {/* <TopBar />
      <MainNav /> */}
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-purple-800 mb-2 flex items-center gap-2">
          <span role="img" aria-label="megaphone">📢</span> Fair Updates
        </h1>
        <p className="text-gray-600 mb-6">
          Stay informed with the latest news and announcements during the Monroe County Fair.
        </p>

        <div className="space-y-4">
          {updates.map((update, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-purple-400 p-4 shadow-sm rounded-lg"
            >
              <p className="text-sm text-gray-500 mb-1">{update.date}</p>
              <p className="text-base text-gray-800">{update.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
