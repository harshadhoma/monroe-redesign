// src/components/Events/EventCalendar.tsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import { TopBar } from '../Navigation/TopBar';
import { MainNav } from '../Navigation/MainNav';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from '../../components/Navigation/HeaderComponent';

const events = [
  {
    date: new Date(2025, 4, 5), // May 5
    title: 'Spring Carnival',
    slug: 'spring-carnival',
  },
  {
    date: new Date(2025, 5, 12), // June 12
    title: 'Country Music Concert',
    slug: 'country-concert',
  },
  {
    date: new Date(2025, 6, 4), // July 4
    title: 'Food Truck Fiesta',
    slug: 'food-truck-fiesta',
  },
];

export default function EventCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const navigate = useNavigate();

  const eventsOnSelectedDate = events.filter(
    (event) =>
      selectedDate &&
      event.date.toDateString() === selectedDate.toDateString()
  );

  const tileClassName = ({ date }: { date: Date }) => {
    const hasEvent = events.some(
      (event) => event.date.toDateString() === date.toDateString()
    );
    return hasEvent ? 'highlight-event' : null;
  };

  return (
    <div className="min-h-screen bg-purple-50">
      {/* <TopBar />
      <MainNav /> */}
      < Header />
      <div className="max-w-6xl mx-auto px-4 py-4">
        <h2 className="text-3xl font-bold text-purple-900 mb-5 flex items-center gap-2">
          <span role="img">📅</span> Events Calendar
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Calendar */}
          <div className="bg-white rounded-xl p-4 shadow-md border w-full md:w-1/3">
            <Calendar
              onChange={(date: any) => setSelectedDate(date)}
              value={selectedDate}
              tileClassName={tileClassName}
              calendarType="gregory"
              className="text-sm"
            />

            {/* Legend */}
            <div className="mt-4 text-sm text-gray-600">
              <p><span className="inline-block w-3 h-3 bg-purple-200 rounded-sm mr-2 align-middle" /> Event Day</p>
              <p className="mt-1 text-gray-400 italic">Click a date to view events</p>
            </div>
          </div>

          {/* Event List */}
          <div className="w-full md:w-2/3">
            <AnimatePresence>
              {selectedDate && (
                <motion.div
                  key={selectedDate.toString()}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {eventsOnSelectedDate.length > 0 ? (
                    <div className="space-y-6">
                      {eventsOnSelectedDate.map((event, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg shadow p-4 flex items-center justify-between"
                        >
                          <div>
                            <h4 className="text-lg font-semibold text-purple-800">{event.title}</h4>
                            <p className="text-sm text-gray-500">
                              {event.date.toDateString()}
                            </p>
                          </div>
                          <button
                            onClick={() => navigate(`/events/${event.slug}`)}
                            className="bg-yellow-400 text-purple-900 font-bold px-4 py-2 rounded-full text-sm hover:bg-yellow-300 transition"
                          >
                            View Details →
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">
                      No events on this day.
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        .highlight-event {
          background-color: #ede9fe !important;
          color: #6b21a8 !important;
          font-weight: 600;
          border-radius: 6px;
        }
        .react-calendar__tile {
          border-radius: 6px;
        }
        .react-calendar__tile--active {
          background-color: #c084fc !important;
          color: white !important;
        }
        .react-calendar__tile:hover {
          background-color: #f3e8ff;
        }
        .react-calendar__navigation button {
          color: #6b21a8;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
