import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone } from 'lucide-react';

export function StickyBanner() {
  return (
    <div className="bg-yellow-300 text-purple-900 text-sm font-semibold py-2 text-center">
      ✨ Tickets Selling Fast — Reserve Your Spot Now!
    </div>
  );
}

export function HeroOverlayCTA() {
  return (
    <div className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <img
        src="/assets/background.png"
        alt="Fairgrounds"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-900/40 z-10" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center px-4"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Experience the Magic
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Join us for unforgettable events, shows, and celebrations at Monroe County's premier venue
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/tickets/calendar" className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition">
            Get Tickets
          </Link>
          <Link to="/events" className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition">
            View Events
          </Link>
        </div>
        <div className="mt-6">
          <Link to="#this-week" className="text-white underline text-base font-medium hover:text-yellow-300 transition">
            👉 What’s Happening This Week
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export function MapPreview() {
  return (
    <div className="bg-white py-12 px-4 text-center">
      <h2 className="text-2xl font-bold text-purple-900 mb-4">Explore Our Grounds</h2>
      <p className="text-gray-600 mb-4">Tap below to explore the map and plan your visit</p>
      <Link to="/map">
        <img
          src="/assets/map-preview.png"
          alt="Map Preview"
          className="mx-auto w-full max-w-md rounded-xl shadow-lg"
        />
      </Link>
    </div>
  );
}

export function InfoAccordion() {
  return (
    <div className="bg-purple-50 py-12 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-xl font-bold text-purple-900 mb-6 text-center">Need to Know Info</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-start gap-4">
              <MapPin className="text-purple-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-purple-800">Location</h3>
                <p className="text-gray-700">5700 W Airport Road, Bloomington, IN 47403</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-start gap-4">
              <Clock className="text-purple-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-purple-800">Office Hours</h3>
                <p className="text-gray-700">Mon - Fri: 9AM - 5PM<br />Sat: 10AM - 2PM</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-start gap-4">
              <Phone className="text-purple-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-purple-800">Contact</h3>
                <p className="text-gray-700">Phone: (812) 825-7439<br />Email: mocofairgrounds@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
