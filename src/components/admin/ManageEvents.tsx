// src/components/admin/ManageEvents.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

type Event = {
  id: string;
  title: string;
  date: string;
  description: string;
};

const initialEvents: Event[] = [
  {
    id: 'spring-market',
    title: 'Spring Vendor Market',
    date: '2025-05-10',
    description: 'Annual market with local vendors and crafts.',
  },
  {
    id: 'summer-foodfest',
    title: 'Summer Food Fest',
    date: '2025-07-20',
    description: 'Food trucks and local eateries come together!',
  },
];

export const ManageEvents = () => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [activeEvent, setActiveEvent] = useState<Event | null>(null);
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  const handleEdit = (event: Event) => {
    setActiveEvent(event);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setActiveEvent(null);
    setIsEditing(false);
    setShowModal(true);
  };

  const handleSave = () => {
    if (!activeEvent?.title || !activeEvent.date || !activeEvent.description) return;

    if (isEditing) {
      setEvents((prev) =>
        prev.map((e) => (e.id === activeEvent.id ? activeEvent : e))
      );
    } else {
      setEvents((prev) => [
        ...prev,
        { ...activeEvent, id: activeEvent.title.toLowerCase().replace(/\s+/g, '-') },
      ]);
    }

    setShowModal(false);
    setActiveEvent(null);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-800">Manage Events</h2>
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="text-sm text-purple-700 hover:underline"
        >
          ← Back to Dashboard
        </button>
      </div>

      <button
        onClick={handleAddNew}
        className="mb-6 bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition"
      >
        ➕ Add New Event
      </button>

      {events.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-16">
          No events available. Click "Add New Event" to create one.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold text-purple-700">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-2">📅 {event.date}</p>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(event)}
                  className="bg-yellow-400 text-purple-900 px-4 py-1 rounded hover:bg-yellow-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              className="bg-white rounded-xl p-6 shadow-xl w-full max-w-md"
            >
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                {isEditing ? 'Edit Event' : 'Add New Event'}
              </h3>
              <input
                type="text"
                placeholder="Title"
                className="w-full mb-2 px-3 py-2 border rounded"
                value={activeEvent?.title || ''}
                onChange={(e) =>
                  setActiveEvent((prev) => ({ ...prev!, title: e.target.value }))
                }
              />
              <input
                type="date"
                className="w-full mb-2 px-3 py-2 border rounded"
                value={activeEvent?.date || ''}
                onChange={(e) =>
                  setActiveEvent((prev) => ({ ...prev!, date: e.target.value }))
                }
              />
              <textarea
                placeholder="Description"
                className="w-full mb-4 px-3 py-2 border rounded"
                value={activeEvent?.description || ''}
                onChange={(e) =>
                  setActiveEvent((prev) => ({ ...prev!, description: e.target.value }))
                }
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
                >
                  {isEditing ? 'Save Changes' : 'Add Event'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
