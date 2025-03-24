import React, { useState } from 'react';
import { TopBar } from '../../components/Navigation/TopBar';
import { MainNav } from '../../components/Navigation/MainNav';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Navigation/HeaderComponent';

type EventType = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  description: string;
};

const events: EventType[] = [
  {
    id: 'country-concert',
    title: 'Country Concert Night',
    date: '2025-06-15',
    time: '7:00 PM',
    location: 'Main Stage',
    category: 'Concert',
    image: 'https://images.pexels.com/photos/3727150/pexels-photo-3727150.jpeg',
    description: 'Enjoy a night of amazing live country music under the stars!',
  },
  {
    id: 'food-festival',
    title: 'Food Truck Fiesta',
    date: '2025-07-04',
    time: '12:00 PM',
    location: 'Central Grounds',
    category: 'Food Festival',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACqVeydR6Pjm99kfhBvtM8M5gSndGs87DEA&s',
    description: 'A delicious gathering of the best food trucks in the county!',
  },
  {
    id: 'spring-carnival',
    title: 'Spring Carnival',
    date: '2025-06-18',
    time: '5:00 PM',
    location: 'Rodeo Arena',
    category: 'Carnival',
    image: 'https://visitlitchfield.com/wp-content/uploads/2024/03/carnival-1.jpg',
    description: 'Watch daring cowboys and cowgirls show off their rodeo skills!',
  },
  {
    id: '4h-expo',
    title: '4-H Youth Livestock Expo',
    date: '2025-06-21',
    time: '10:00 AM',
    location: 'Barn Pavilion',
    category: '4-H Expo',
    image: 'https://s3.amazonaws.com/assets.cce.cornell.edu/slides/65198/image/sized/Poultry1.JPG?1562771034',
    description: 'Local 4-H youth showcase their livestock and agricultural skills.',
  },
  {
    id: 'tech-day',
    title: 'Tech Innovations Fair',
    date: '2025-06-23',
    time: '11:00 AM',
    location: 'Innovation Center',
    category: 'Technology',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdjW6rTNY9ZjogaUVtB3xLoT-LMA5xciUFQ&s',
    description: 'Explore cutting-edge tech exhibits from local startups and makers.',
  },
  {
    id: 'art-bazaar',
    title: 'Art & Craft ',
    date: '2025-06-25',
    time: '1:00 PM',
    location: 'Hall B',
    category: 'Art & Craft',
    image: 'https://shop4-h.org/cdn/shop/collections/19730923433_723971a4dd_w9.png?v=1693501447',
    description: 'Discover handmade art and crafts by local creators.',
  },
  // ... more events omitted for brevity, keep your original list
];

const categoryColors: { [key: string]: string } = {
  'Concert': 'bg-yellow-400',
  'Food Festival': 'bg-red-400',
  'Carnival': 'bg-pink-400',
  '4-H Expo': 'bg-blue-300',
  'Technology': 'bg-green-400',
  'Art & Craft': 'bg-purple-400'
};

const categories = Object.keys(categoryColors);

export default function EventSchedule() {
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
          <span role="img" aria-label="schedule">🎪</span> Event Schedule
        </h1>
        <p className="text-gray-600 mb-6">
          Explore all scheduled events happening at the Monroe County Fairgrounds. Plan your visit and never miss out!
        </p>

        {/* Filter controls */}
        <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
  <input
    type="text"
    placeholder="Search events..."
    className="border border-gray-300 px-3 py-2 rounded-md text-sm w-full md:w-1/3"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <select
    value={categoryFilter}
    onChange={(e) => setCategoryFilter(e.target.value)}
    className="border border-gray-300 px-3 py-2 rounded-md text-sm w-full md:w-1/3"
  >
    <option value="">All Categories</option>
    {categories.map(cat => (
      <option key={cat} value={cat}>{cat}</option>
    ))}
  </select>
  <input
    type="date"
    value={dateFilter}
    onChange={(e) => setDateFilter(e.target.value)}
    className="border border-gray-300 px-3 py-2 rounded-md text-sm w-full md:w-1/3"
  />
</div>


{/* Reset Button */}
<div className="flex justify-end mb-4">
  <button
    onClick={() => {
      setSearch('');
      setCategoryFilter('');
      setDateFilter('');
    }}
    className="text-sm bg-purple-100 text-purple-800 hover:bg-purple-200 px-4 py-2 rounded-md transition"
  >
    Reset Filters
  </button>
</div>


        {/* Legend */}
        <div className="mb-8">
          <h4 className="font-semibold mb-2">Event Categories:</h4>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <div key={cat} className="flex items-center gap-2">
                <span className={`w-4 h-4 rounded-full ${categoryColors[cat]}`}></span>
                <span className="text-sm">{cat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Event listings by date */}
        {sortedDates.length > 0 ? sortedDates.map((date) => (
          <div key={date} className="mb-10">
            <h3 className="text-xl font-bold text-purple-900 mb-4">{date}</h3>
            <div className="space-y-4">
              {grouped[date].map((event: EventType) => (
                <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden flex">
                  <img src={event.image} alt={event.title} className="w-1/3 h-44 object-cover" />
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
                    <Link to={`/events/${event.id}`} className="text-purple-600 hover:underline text-sm mt-2 inline-block">
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )) : (
          <p className="text-gray-500 italic mt-6">No events match your filters.</p>
        )}
      </div>
    </div>
  );
}
