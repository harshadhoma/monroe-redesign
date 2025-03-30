import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Navigation/HeaderComponent';
import {ShareStoryOverlay} from '../Photos/ShareStoryOverlay';

export default function ShareStoryPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [photos, setPhotos] = useState<{ url: string; caption: string }[]>([]);

  const dummyStories = [
    {
      url: 'https://media.istockphoto.com/id/1051006172/photo/happy-family-having-fun-at-an-amusement-park.jpg?s=612x612&w=0&k=20&c=jJMD1lEcEiDbpAWkbnypUUBpTVfHwLptyEDLwUnJoqI=',
      caption: 'We had the best family weekend ever!',
    },
    {
      url: 'https://media.istockphoto.com/id/1346019586/photo/happy-family-at-the-amusement-park.jpg?s=612x612&w=0&k=20&c=SSwexQLeARMZYk8xhvPt4kpFok6FKHu0ozKhwCSK0lw=',
      caption: 'The food trucks were amazing!',
    },
    {
      url: 'https://media.istockphoto.com/id/1266364936/photo/family-has-fun-at-outdoor-carnival-setting.jpg?s=612x612&w=0&k=20&c=n8UpAe4DQnjiWgsfDfZORU32Y--ilPAwHJ6JnMP08T0=',
      caption: 'My daughter loved the pony rides 🐴',
    },
    {
      url: 'https://media.istockphoto.com/id/2132930819/photo/family-fun-at-the-funfair.jpg?s=612x612&w=0&k=20&c=-SN7Ixyr6jYRr8pjMXY4xsSxRvesUdnucYpNR3P4Xsk=',
      caption: 'The fireworks were magical ✨',
    },
  ];
  

  return (
    <div className="min-h-screen bg-purple-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-purple-800">📸 Share Your Story</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
          >
            + Share Your Story
          </button>
        </div>

        <p className="text-sm text-gray-600 italic mb-6">
          Your memories help us celebrate our community!
        </p>

        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
  {dummyStories.map((story, index) => (
    <div key={index} className="bg-white rounded-lg shadow p-2">
      <img
        src={story.url}
        alt={`Memory ${index + 1}`}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <p className="text-sm text-gray-700 italic text-center">“{story.caption}”</p>
    </div>
  ))}
</div>


        <ShareStoryOverlay isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  );
}
