// Upload CTA added in Photo Gallery + Nav link

import React from 'react';
import { TopBar } from '../../components/Navigation/TopBar';
import { MainNav } from '../../components/Navigation/MainNav';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Navigation/HeaderComponent';

export default function GalleryPage() {
  const images = [
    // Replace with dynamic or static image URLs
    'https://media.istockphoto.com/id/1051006172/photo/happy-family-having-fun-at-an-amusement-park.jpg?s=612x612&w=0&k=20&c=jJMD1lEcEiDbpAWkbnypUUBpTVfHwLptyEDLwUnJoqI=',
    'https://media.istockphoto.com/id/1266364936/photo/family-has-fun-at-outdoor-carnival-setting.jpg?s=612x612&w=0&k=20&c=n8UpAe4DQnjiWgsfDfZORU32Y--ilPAwHJ6JnMP08T0=',
    'https://media.istockphoto.com/id/2132930819/photo/family-fun-at-the-funfair.jpg?s=612x612&w=0&k=20&c=-SN7Ixyr6jYRr8pjMXY4xsSxRvesUdnucYpNR3P4Xsk=',
    'https://media.istockphoto.com/id/1346019586/photo/happy-family-at-the-amusement-park.jpg?s=612x612&w=0&k=20&c=SSwexQLeARMZYk8xhvPt4kpFok6FKHu0ozKhwCSK0lw='
  ];

  return (
    <div className="min-h-screen bg-purple-50">
      {/* <TopBar />
      <MainNav /> */}
    <Header />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-purple-800 mb-6 flex items-center gap-2">
          📸 Photo Gallery
        </h1>

        <div className="flex justify-between items-center mb-6">
          <Link
            to="/upload"
            className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 text-sm"
          >
            + Upload Your Memory
          </Link>
          <p className="text-sm text-gray-600 italic">
            Share your special moments from the fair!
          </p>
        </div>

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

        {/* Optional CTA */}
        <div className="mt-10 text-center bg-purple-100 py-6 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">
            Help us build the Wall of Memories 💜
          </h3>
          <Link
            to="/upload"
            className="inline-block bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800"
          >
            Upload Your Photo
          </Link>
        </div>
      </div>
    </div>
  );
}