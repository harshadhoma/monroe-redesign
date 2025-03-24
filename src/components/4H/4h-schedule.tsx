import React, { useState } from 'react';
import { TopBar } from '../../components/Navigation/TopBar';
import { MainNav } from '../../components/Navigation/MainNav';
import { Header } from '../../components/Navigation/HeaderComponent';

const events = [
  {
    id: 'tractor-driving',
    title: 'Tractor Driving Contest',
    date: '2025-06-14',
    time: '11:00 AM',
    location: 'Behind Demonstration Garden',
    category: 'Agriculture',
    description: 'Put your driving skills to the test in this fun and competitive event.'
  },
  {
    id: 'cleanup-setup',
    title: '4-H Building Clean-up/Setup',
    date: '2025-06-19',
    time: '6:00 PM',
    location: '4-H Building',
    category: 'Operations',
    description: 'Volunteers prep the building for the upcoming showcases and judging.'
  },
  {
    id: 'fashion-revue',
    title: 'Fashion Revue',
    date: '2025-06-21',
    time: '2:00 PM',
    location: 'Draper-Earles Auditorium',
    category: 'Fashion',
    description: 'Showcase your handmade or styled clothing in front of judges and peers.'
  },
  {
    id: 'clothing-judging',
    title: 'Consumer Clothing Judging',
    date: '2025-06-21',
    time: '3:00 PM',
    location: 'Draper-Earles Auditorium',
    category: 'Fashion',
    description: 'Judging of clothing construction and presentation by youth participants.'
  },
  {
    id: 'crafts-judging',
    title: 'Crafts Entry & Judging',
    date: '2025-06-23',
    time: '5:00 PM',
    location: '4-H Building & Auditorium',
    category: 'Arts & Crafts',
    description: 'Judging for creative crafts submitted by 4-H participants.'
  },
  {
    id: 'poster-judging',
    title: 'Animal Posters & STEM Projects Judging',
    date: '2025-06-23',
    time: '5:00 PM',
    location: '4-H Building',
    category: 'STEM',
    description: 'Judging of state fair eligible posters and science-based entries.'
  },
  {
    id: 'mini4h-judging',
    title: 'Mini 4-H Projects Entry & Judging',
    date: '2025-06-26',
    time: '5:00 PM',
    location: '4-H Building, Fairgrounds',
    category: 'Mini 4-H',
    description: 'Youth participants submit their first 4-H projects for review.'
  },
  {
    id: 'fashion-show',
    title: 'Public Fashion Revue Style Show',
    date: '2025-06-27',
    time: '8:00 PM',
    location: 'Draper-Earles Auditorium',
    category: 'Fashion',
    description: 'A public style show celebrating the best fashion entries from 4-H participants.'
  },
  {
    id: 'family-kickoff',
    title: 'Opening/Family Fun Kickoff',
    date: '2025-06-29',
    time: '5:00 PM',
    location: 'Livestock Arena',
    category: 'Ceremony',
    description: 'Kick off the fair week with games, food, and community celebration!'
  },
  {
    id: 'ice-cream-social',
    title: '4-H Ice Cream Social & Awards Ceremony',
    date: '2025-07-04',
    time: '5:00 PM',
    location: 'Livestock Arena',
    category: 'Ceremony',
    description: 'Celebrate with ice cream and recognize outstanding achievements!'
  },
];

const categoryColors: { [key: string]: string } = {
  'Agriculture': 'bg-green-300',
  'Fashion': 'bg-pink-300',
  'Arts & Crafts': 'bg-purple-300',
  'Mini 4-H': 'bg-yellow-300',
  'Ceremony': 'bg-blue-300',
  'STEM': 'bg-indigo-300',
  'Operations': 'bg-gray-300'
};

export default function FourHSchedule() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter ? event.category === categoryFilter : true;
    const matchesDate = dateFilter ? event.date === dateFilter : true;
    return matchesSearch && matchesCategory && matchesDate;
  });

  const grouped = filteredEvents.reduce((acc: any, event) => {
    const date = new Date(event.date).toDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push(event);
    return acc;
  }, {});

  const sortedDates = Object.keys(grouped).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  return (
    <div className="min-h-screen bg-purple-50">
      {/* <TopBar />
      <MainNav /> */}
      < Header />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-purple-800 mb-2 flex items-center gap-2">
          <span role="img" aria-label="schedule">📆</span> 4-H Event Schedule
        </h1>
        <p className="text-gray-600 mb-6">
          Discover all 4-H related contests, judging events, and activities happening during the fair. Whether you're a participant or a visitor, this schedule keeps you informed.
        </p>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search events..."
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
          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md w-full md:w-1/3 text-sm"
          />
        </div>

        {/* Legend */}
        <div className="mb-8">
          <h4 className="font-semibold mb-2">Event Categories:</h4>
          <div className="flex flex-wrap gap-4">
            {Object.keys(categoryColors).map((cat) => (
              <div key={cat} className="flex items-center gap-2">
                <span className={`w-4 h-4 rounded-full ${categoryColors[cat]}`}></span>
                <span className="text-sm">{cat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Event Listings */}
        {sortedDates.length > 0 ? sortedDates.map((date) => (
          <div key={date} className="mb-10">
            <h3 className="text-xl font-bold text-purple-900 mb-4">{date}</h3>
            <div className="space-y-4">
              {grouped[date].map((event: any) => (
                <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden flex">
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-lg font-semibold text-purple-800">{event.title}</h4>
                        <span className={`text-xs text-black font-semibold px-3 py-1 rounded-full ${categoryColors[event.category]}`}>
                          {event.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{event.time} • {event.location}</p>
                      <p className="text-gray-700 text-sm">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )) : (
          <p className="text-gray-500 italic mt-6">No events match your filters.</p>
        )}

        {/* Resources & FAQ */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Resources & FAQs</h2>

          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <div>
              <h3 className="font-semibold mb-1">📄 Project Handbook & Forms</h3>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li><a className="text-purple-700 underline" href="#">Download 4-H Handbook (PDF)</a></li>
                <li><a className="text-purple-700 underline" href="#">Registration & Entry Form</a></li>
                <li><a className="text-purple-700 underline" href="#">State Fair Guidelines</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1">🤔 Frequently Asked Questions</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>How do I join 4-H?</strong> Visit your local Extension Office or sign up online at the state 4-H website.</li>
                <li><strong>Can I submit more than one project?</strong> Yes! Many participants enter multiple categories.</li>
                <li><strong>What if I miss the judging time?</strong> Contact the event coordinator as soon as possible to see if rescheduling is possible.</li>
                <li><strong>Who can participate in Mini 4-H?</strong> Youth in grades K-2 can participate in Mini 4-H activities.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
