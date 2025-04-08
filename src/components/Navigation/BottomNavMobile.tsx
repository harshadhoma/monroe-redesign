import React from 'react';
import { Link } from 'react-router-dom';
import {
  Ticket, Calendar, Map, Bell, Menu
} from 'lucide-react';

export function BottomNavMobile() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-md md:hidden">
      <div className="flex justify-around items-center py-2 text-xs text-purple-800">
        <Link to="/tickets" className="flex flex-col items-center hover:text-yellow-500 transition">
          <Ticket className="w-5 h-5 mb-1" />
          <span>Tickets</span>
        </Link>
        <Link to="/events" className="flex flex-col items-center hover:text-yellow-500 transition">
          <Calendar className="w-5 h-5 mb-1" />
          <span>Events</span>
        </Link>
        <Link to="/map" className="flex flex-col items-center hover:text-yellow-500 transition">
          <Map className="w-5 h-5 mb-1" />
          <span>Map</span>
        </Link>
        <Link to="/updates" className="flex flex-col items-center hover:text-yellow-500 transition">
          <Bell className="w-5 h-5 mb-1" />
          <span>Updates</span>
        </Link>
        <Link to="/menu" className="flex flex-col items-center hover:text-yellow-500 transition">
          <Menu className="w-5 h-5 mb-1" />
          <span>More</span>
        </Link>
      </div>
    </div>
  );
}

export default BottomNavMobile;
