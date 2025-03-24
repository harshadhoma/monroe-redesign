import React from 'react';
import { Link } from 'react-router-dom';

export default function EventCard({ event }: { event: any }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between">
      <div>
        <h4 className="text-lg font-semibold text-purple-900 mb-1">{event.title}</h4>
        <p className="text-sm text-gray-600 mb-2">{event.description}</p>
        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
          {event.category} • {event.timeSlot}
        </span>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <Link
          to={`/events/${event.id}`}
          className="text-purple-600 underline text-sm font-medium"
        >
          View Details
        </Link>

        <Link
          to={`/tickets/${event.id}`}
          className="bg-yellow-400 text-purple-900 font-bold px-4 py-2 rounded-full hover:bg-yellow-300 transition text-sm"
        >
          Buy Tickets
        </Link>
      </div>
    </div>
  );
}
