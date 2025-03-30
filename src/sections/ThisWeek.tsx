import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { getThisWeeksEvents } from '../data/eventsForWeek';
import { EventListItem } from '../components/EventListItem';
import { Link } from 'react-router-dom'; // Make sure this is at the top if not already


const timeSlots = ['all', 'morning', 'afternoon', 'evening'];

export const ThisWeekOverlay = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const allEvents = getThisWeeksEvents();
  const [activeSlot, setActiveSlot] = useState<'all' | 'morning' | 'afternoon' | 'evening'>('all');

  const filteredEvents =
    activeSlot === 'all'
      ? allEvents
      : allEvents.filter((e) => e.timeSlot === activeSlot);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex justify-center items-start pt-24 px-4"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            className="bg-white max-w-3xl w-full rounded-xl p-6 shadow-xl relative overflow-y-auto max-h-[80vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-purple-900 mb-4 text-center">
              What’s Happening This Week
            </h2>

            {/* Time Slot Filter */}
            <div className="flex justify-center gap-4 mb-6">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setActiveSlot(slot as typeof activeSlot)}
                  className={`px-4 py-2 rounded-full border ${
                    activeSlot === slot
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'border-purple-300 text-purple-600 hover:bg-purple-100'
                  } text-sm font-medium transition`}
                >
                  {slot.charAt(0).toUpperCase() + slot.slice(1)}
                </button>
              ))}
            </div>

            {/* Events List */}
            <div className="space-y-4">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <EventListItem
                    key={event.id}
                    date={event.date}
                    title={event.title}
                    timeSlot={event.timeSlot}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500">No events found for this time slot.</p>
              )}
            </div>

            {/* Load More */}
            <div className="mt-6 text-center">
  <Link
    to="/tickets/calendar"
    className="text-purple-700 underline hover:text-purple-900 transition font-medium"
  >
    View Full Calendar →
  </Link>
</div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
