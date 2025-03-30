// /components/Photos/ShareStoryOverlay.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaSnapchat, FaTwitter } from 'react-icons/fa';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const platforms = [
  { name: 'Facebook', icon: FaFacebookF },
  { name: 'Instagram', icon: FaInstagram },
  { name: 'Snapchat', icon: FaSnapchat },
  { name: 'Twitter', icon: FaTwitter },
];

export function ShareStoryOverlay({ isOpen, onClose }: Props) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [story, setStory] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return alert('Please select a photo!');

    // No storage – just show a success message
    setSelectedFile(null);
    setStory('');
    setSelectedPlatforms([]);
    setShowSuccess(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex justify-center items-start pt-20 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl max-w-xl w-full p-6 shadow-xl relative"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
          >
            {!showSuccess ? (
              <>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-black"
                >
                  <X className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-bold text-purple-800 mb-4">📣 Share Your Story</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                    className="block w-full"
                  />
                  <textarea
                    placeholder="Write your experience..."
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded h-24"
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Share to social media:
                    </label>
                    <div className="flex space-x-4">
                      {platforms.map(({ name, icon: Icon }) => (
                        <button
                          type="button"
                          key={name}
                          onClick={() => togglePlatform(name)}
                          className={`rounded-full border-2 p-3 transition ${
                            selectedPlatforms.includes(name)
                              ? 'bg-purple-600 text-white border-purple-600'
                              : 'border-gray-300 text-gray-600'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 w-full"
                  >
                    📤 Post Story
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold text-purple-800 mb-2">🎉 Story Submitted!</h3>
                <p className="text-gray-600 mb-4">Thanks for sharing your memory. We hope you had a great time at the fair!</p>
                <button
                  onClick={() => {
                    setShowSuccess(false);
                    onClose();
                  }}
                  className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
