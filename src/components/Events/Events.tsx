import React from 'react';
import { Link } from 'react-router-dom';

import { TopBar } from '../../components/Navigation/TopBar';
import { MainNav } from '../../components/Navigation/MainNav';

const sampleEvents = [
  {
    id: 'country-concert',
    title: 'Country Concert Night 🎶',
    date: 'June 15, 2025',
    time: '7:00 PM',
    location: 'Main Stage',
    image: 'https://images.pexels.com/photos/3727150/pexels-photo-3727150.jpeg',
    description: 'Enjoy a night of amazing live country music under the stars!',
  },
  {
    id: 'food-festival',
    title: 'Food Truck Fiesta 🍔',
    date: 'July 4, 2025',
    time: '12:00 PM',
    location: 'Central Grounds',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACqVeydR6Pjm99kfhBvtM8M5gSndGs87DEA&s',
    description: 'A delicious gathering of the best food trucks in the county!',
  },
  {
    id: 'spring-carnival',
    title: 'Spring Carnival 🤠',
    date: 'June 18, 2025',
    time: '5:00 PM',
    location: 'Rodeo Arena',
    image: 'https://visitlitchfield.com/wp-content/uploads/2024/03/carnival-1.jpg',
    description: 'Watch daring cowboys and cowgirls show off their rodeo skills!',
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-purple-50">
          <TopBar />
          <MainNav />
    <div className="min-h-screen bg-purple-50 py-5 px-6">
      <h1 className="text-4xl font-bold text-purple-800 text-center mb-10">Upcoming Events</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {sampleEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={event.image} alt={event.title} className="h-48 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-900">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{event.date} · {event.time}</p>
              <p className="text-sm text-gray-500 mb-4">{event.location}</p>
              <p className="text-gray-700 text-sm mb-4">{event.description}</p>
              <div className="flex justify-between">
                <Link
                  to={`/events/${event.id}`}
                  className="text-purple-600 hover:underline font-medium"
                >
                  View Details
                </Link>
                <Link
                  to={`/tickets/${event.id}`}
                  className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-1 px-4 rounded-full"
                >
                  Buy Tickets
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
