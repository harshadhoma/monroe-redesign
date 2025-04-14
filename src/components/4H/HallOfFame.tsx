import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '../../components/Navigation/HeaderComponent';

import img1 from '../../images/4h/1.jpg';
import img2 from '../../images/4h/2.jpg';
import img3 from '../../images/4h/3.jpg';
import img4 from '../../images/4h/4.jpg';
import img5 from '../../images/4h/5.jpg';
import img7 from '../../images/4h/7.jpg';
import img8 from '../../images/4h/8.jpg';

const honorees = [
  { name: 'Emma R.', role: 'Artist 🎨', year: '2023', category: 'Arts', image: img1, stars: 5 },
  { name: 'Noah D.', role: 'Community Builder 🌟', year: '2022', category: 'Community', image: img2, stars: 4 },
  { name: 'Ava T.', role: 'Agriculture Leader 🌾', year: '2021', category: 'Agriculture', image: img3, stars: 5 },
  { name: 'Maya S.', role: 'STEM Innovator 🧪', year: '2023', category: 'STEM', image: img4, stars: 5 },
  { name: 'Ava T.', role: 'Agriculture Leader 🌾', year: '2021', category: 'Agriculture', image: img5, stars: 5 },
  { name: 'Leo M.', role: 'Leadership Mentor 🏅', year: '2020', category: 'Leadership', image: img7, stars: 3 },
  { name: 'Zoe K.', role: 'Arts Excellence 🎭', year: '2020', category: 'Arts', image: img8, stars: 4 }
];

const categoryColors = {
  STEM: 'bg-blue-400',
  Arts: 'bg-pink-400',
  Community: 'bg-green-400',
  Leadership: 'bg-yellow-400',
  Agriculture: 'bg-purple-400',
};

export default function HallOfFame() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredHonorees = honorees.filter(
    (h) =>
      (h.name.toLowerCase().includes(search.toLowerCase()) ||
        h.role.toLowerCase().includes(search.toLowerCase())) &&
      (categoryFilter ? h.category === categoryFilter : true) &&
      (yearFilter ? h.year === yearFilter : true)
  );

  return (
    <div className="min-h-screen bg-purple-50">
      <Header />
      <div className="bg-purple-100 py-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">4-H Hall of Fame</h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Honoring individuals who made a lasting impact on our 4-H community through leadership, innovation, and service.
        </p>
        <Link to="/4h" className="text-purple-700 underline hover:text-purple-900 text-sm">
          ← Back to 4-H Overview
        </Link>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by name or role..."
            className="border border-gray-300 px-3 py-2 rounded-md w-full md:w-1/3 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md w-full md:w-1/3 text-sm"
          >
            <option value="">All Categories</option>
            {Object.keys(categoryColors).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md w-full md:w-1/3 text-sm"
          >
            <option value="">All Years</option>
            {[...new Set(honorees.map((h) => h.year))].map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-end mb-4">
          <button
            onClick={() => {
              setSearch('');
              setCategoryFilter('');
              setYearFilter('');
            }}
            className="text-sm bg-purple-100 text-purple-800 hover:bg-purple-200 px-4 py-2 rounded-md transition"
          >
            Reset Filters
          </button>
        </div>

        <div className="mb-8">
          <h4 className="font-semibold mb-2">Category Legend:</h4>
          <div className="flex flex-wrap gap-4">
            {Object.entries(categoryColors).map(([cat, color]) => (
              <div key={cat} className="flex items-center gap-2">
                <span className={`w-4 h-4 rounded-full ${color}`}></span>
                <span className="text-sm">{cat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredHonorees.slice(0, visibleCount).map((person, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition"
              whileHover={{ scale: 1.03 }}
            >
              <img src={person.image} alt={person.name} className="h-36 w-full object-cover rounded-md mb-3" />
              <h4 className="font-semibold text-purple-700 text-lg">{person.name}</h4>
              <p className="text-sm text-gray-600">{person.role}</p>
              <p className="text-xs text-purple-500 italic mb-2">{person.year}</p>
              <div className="flex justify-center gap-1 mb-2">
                {Array.from({ length: person.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <div className="flex justify-center gap-2 flex-wrap">
                <span className={`text-xs px-2 py-1 rounded-full text-white ${categoryColors[person.category]}`}>
                  {person.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < filteredHonorees.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
