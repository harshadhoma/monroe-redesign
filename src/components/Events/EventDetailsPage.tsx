import React from 'react';
import { useParams, Link } from 'react-router-dom';

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
    description:
      'Enjoy a magical evening of country music under the stars with local and national artists lighting up the stage. Bring your boots and your friends!',
  },
  {
    id: 'food-festival',
    title: 'Food Truck Festival 🍔',
    date: 'June 16, 2025',
    time: '12:00 PM',
    location: 'Food Plaza',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACqVeydR6Pjm99kfhBvtM8M5gSndGs87DEA&s',
    description:
      'A mouthwatering showcase of the county\'s best food trucks offering a variety of cuisines, desserts, drinks, and local specialties.',
  },
  {
    id: 'spring-carnival',
    title: 'Spring Carnival 🤠',
    date: 'June 18, 2025',
    time: '5:00 PM',
    location: 'Main Arena',
    image: 'https://visitlitchfield.com/wp-content/uploads/2024/03/carnival-1.jpg',
    description:
      'Bulls, broncos, and barrel racing! An adrenaline-filled rodeo evening with pro riders, lively commentary, and family fun.',
  },
];

export default function EventDetailsPage() {
  const { eventId } = useParams();
  const event = sampleEvents.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl font-semibold">
        Event not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-50">
          <TopBar />
          <MainNav />
    <div className="min-h-screen bg-purple-50 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />

        <div className="p-8">
          <h1 className="text-3xl font-bold text-purple-900 mb-2">{event.title}</h1>
          <p className="text-gray-600 mb-1">
            <strong>Date:</strong> {event.date}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Time:</strong> {event.time}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Location:</strong> {event.location}
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">{event.description}</p>

          <Link
            to={`/tickets/${event.id}`}
            className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-3 px-6 rounded-full transition"
          >
            Buy Tickets 🎟️
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
