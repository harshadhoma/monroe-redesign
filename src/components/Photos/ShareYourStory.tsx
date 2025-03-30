import React, { useState } from 'react';
import { Header } from '../../components/Navigation/HeaderComponent';
import { ShareStoryOverlay } from '../../components/Photos/ShareStoryOverlay';

export default function ShareYourStory() {
  const [modalOpen, setModalOpen] = useState(false);

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

        {/* This page can show uploaded or static images if needed */}

        <ShareStoryOverlay isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  );
}
