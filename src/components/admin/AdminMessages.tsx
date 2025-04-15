import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

type Message = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'unread' | 'replied';
};

const initialMessages: Message[] = [
  {
    id: 'm1',
    name: 'Jane Doe',
    email: 'jane@example.com',
    subject: 'Booth setup question',
    message: 'Do I need to bring my own tables and tents?',
    status: 'unread',
  },
  {
    id: 'm2',
    name: 'Carlos Ruiz',
    email: 'carlos@grillbros.com',
    subject: 'Vendor guidelines',
    message: 'Can I sell beverages along with food?',
    status: 'replied',
  },
];

export const AdminMessages = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [filter, setFilter] = useState<string>('');
  const navigate = useNavigate();

  const handleMarkReplied = (id: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status: 'replied' } : m))
    );
  };

  const filteredMessages =
    filter === ''
      ? messages
      : messages.filter((m) => m.status === filter);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-800">Messages Center</h2>
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="text-sm text-purple-700 hover:underline"
        >
          ← Back to Dashboard
        </button>
      </div>

      <div className="mb-6 max-w-sm">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="">All Messages</option>
          <option value="unread">Unread</option>
          <option value="replied">Replied</option>
        </select>
      </div>

      {filteredMessages.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No messages found.</p>
      ) : (
        <div className="space-y-4">
          {filteredMessages.map((msg) => (
            <motion.div
              key={msg.id}
              whileHover={{ scale: 1.01 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-purple-800">{msg.subject}</h3>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    msg.status === 'unread'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {msg.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                From: {msg.name} ({msg.email})
              </p>
              <p className="text-sm text-gray-700 mb-3">{msg.message}</p>
              <div className="flex space-x-2">
                {msg.status === 'unread' && (
                  <button
                    onClick={() => handleMarkReplied(msg.id)}
                    className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 text-sm"
                  >
                    Mark as Replied
                  </button>
                )}
                <button className="bg-purple-700 text-white px-4 py-1 rounded hover:bg-purple-800 text-sm">
                  Reply
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
