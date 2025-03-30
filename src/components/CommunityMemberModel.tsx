// /src/components/Modals/CommunityMemberModal.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  person: {
    name: string;
    fullBio: string;
    description: string;
    image: string;
    contributions: string[];
  } | null;
}

export function CommunityMemberModal({ isOpen, onClose, person }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && person && (
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
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex gap-4">
              <img src={person.image} className="w-24 h-24 object-cover rounded-lg" />
              <div>
                <h2 className="text-xl font-bold text-purple-800 mb-2">{person.name}</h2>
                <p className="text-sm text-gray-600">{person.fullBio}</p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-md font-semibold text-purple-700">Contributions:</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-2">
                {person.contributions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 text-sm text-gray-700">
              {person.description}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
