// /src/pages/GalleryWall.tsx
import React from 'react';
import { Header } from '../../components/Navigation/HeaderComponent';

const images = [
  'https://media.istockphoto.com/id/1051006172/photo/happy-family-having-fun-at-an-amusement-park.jpg?s=612x612&w=0&k=20&c=jJMD1lEcEiDbpAWkbnypUUBpTVfHwLptyEDLwUnJoqI=',
  'https://media.istockphoto.com/id/1266364936/photo/family-has-fun-at-outdoor-carnival-setting.jpg?s=612x612&w=0&k=20&c=n8UpAe4DQnjiWgsfDfZORU32Y--ilPAwHJ6JnMP08T0=',
  'https://media.istockphoto.com/id/2132930819/photo/family-fun-at-the-funfair.jpg?s=612x612&w=0&k=20&c=-SN7Ixyr6jYRr8pjMXY4xsSxRvesUdnucYpNR3P4Xsk=',
  'https://media.istockphoto.com/id/1346019586/photo/happy-family-at-the-amusement-park.jpg?s=612x612&w=0&k=20&c=SSwexQLeARMZYk8xhvPt4kpFok6FKHu0ozKhwCSK0lw='
];

export default function GalleryWall() {
  return (
    <div className="min-h-screen bg-purple-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-purple-800 mb-2 flex items-center gap-2">
          📸 Photo Gallery
        </h1>
        <p className="text-gray-500 italic mb-6">
          Share your special moments from the fair!
        </p>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {images.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Memory ${i + 1}`}
              className="w-full h-40 object-cover rounded-lg shadow"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
