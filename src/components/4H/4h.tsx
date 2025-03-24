import React, { useState } from 'react';
import { TopBar } from '../../components/Navigation/TopBar';
import { MainNav } from '../../components/Navigation/MainNav';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '../../components/Navigation/HeaderComponent';

import img1 from '../../images/4h/1.jpg';
import img2 from '../../images/4h/2.jpg';
import img3 from '../../images/4h/3.jpg';
import img4 from '../../images/4h/4.jpg';
import img5 from '../../images/4h/5.jpg';
import img7 from '../../images/4h/7.jpg';
import img8 from '../../images/4h/8.jpg';

const galleryImages = [
  "https://www.lsuagcenter.com/~/media/system/6/8/4/9/6849648a9a4a7ea0b0d7f0d7c79ce6fa/4h%20kidspng.png?h=1979&la=en&w=2969",
  img1,
  img3,
  "https://extension.psu.edu/programs/4-h/++resource++agsci.common/assets/images/navigation/4-h/opportunities.jpg",
  img4,
  img5,
  "https://calexicochronicle.com/wp-content/uploads/2021/08/IMG_0259.jpeg",
  "https://www.ailife.com/articles/images/buying-special-activities-coverage-for-4H-events-lg.jpg",
];

const participants = [
  {
    img: img2,
    name: "Benjamin R.",
    quote: "I learned so much showing my project this year!"
  },
  {
    img: img7,
    name: "Liam K.",
    quote: "I made new friends and learned to present with confidence."
  },
  {
    img: img8,
    name: "Sofia T.",
    quote: "My robotics project actually won a ribbon. So proud!"
  }
];

export default function FourHShowcase() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen bg-purple-50">
      {/* <TopBar />
      <MainNav /> */}
      < Header />

      {/* Hero Section */}
      <div className="bg-purple-100 py-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-purple-800 mb-2">4-H</h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Honoring the creativity, dedication, and achievements of our youth across agriculture, art, science, and more.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/4h-schedule" className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800">View Schedule</Link>
          <Link to="#gallery" className="bg-white border border-purple-700 text-purple-700 px-6 py-2 rounded-md hover:bg-purple-100">Photo Gallery</Link>
        </div>

        {/* Animated Info Section */}
        <div className="mt-10">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="text-purple-800 font-semibold underline hover:text-purple-600"
          >
            {showInfo ? 'Hide What is 4‑H?' : 'What is 4‑H?'}
          </button>
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 bg-white p-4 rounded-lg shadow max-w-xl mx-auto text-left"
              >
                <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
                  <li>🌱 4‑H helps youth develop leadership, citizenship, and life skills through hands-on learning.</li>
                  <li>🎯 Open to grades 3–12 (Mini 4‑H available for K–2 students).</li>
                  <li>🎨 Explore projects in agriculture, robotics, arts, science, and more!</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Schedule Preview */}
      <section id="schedule" className="py-10 px-4 bg-white max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">4-H Event Schedule</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-purple-400 bg-purple-50 p-4 rounded">
            <p className="text-sm text-gray-600">Saturday, June 14</p>
            <p className="font-semibold text-gray-800">Tractor Driving Contest – 11:00 AM – Behind Demonstration Garden</p>
          </div>
          <div className="border-l-4 border-purple-400 bg-purple-50 p-4 rounded">
            <p className="text-sm text-gray-600">Monday, June 23</p>
            <p className="font-semibold text-gray-800">Entry Judging: Crafts, Photography, Foods, Livestock and More – 5:00–7:00 PM – 4-H Building</p>
          </div>
          <div className="border-l-4 border-purple-400 bg-purple-50 p-4 rounded">
            <p className="text-sm text-gray-600">Thursday, June 26</p>
            <p className="font-semibold text-gray-800">Mini 4-H Projects Entry & Public Judging – 5:00–7:00 PM – Fairgrounds</p>
          </div>
          <Link to="/4h-schedule" className="text-purple-600 hover:underline inline-block mt-2">View Full Schedule →</Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="pt-10 pb-4 px-4 max-w-6xl mx-auto">
        <div className="mb-2">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Participant Voices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {participants.map((p, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow text-center">
                <img src={p.img} alt={p.name} className="h-36 w-full object-cover rounded-md mb-3" />
                <h4 className="font-semibold text-purple-700 text-sm">{p.name}</h4>
                <p className="text-xs text-gray-600 italic">"{p.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-800 mb-2">Photo Gallery</h2>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {galleryImages.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`4-H event ${i + 1}`}
              className="w-full h-40 object-cover rounded-lg"
            />
          ))}
        </div>
        <Link to="/gallery" className="text-purple-600 hover:underline inline-block mt-4">Browse Full Gallery →</Link>
      </section>

      {/* CTA */}
      <section className="bg-purple-100 py-10 px-4 text-center">
        <h3 className="text-xl font-semibold text-purple-800 mb-2">Ready to be part of something amazing?</h3>
        <p className="text-gray-700 mb-4">Join 4-H today or volunteer to help make this year’s fair unforgettable.</p>
        <div className="flex justify-center gap-4">
          <a href="https://4-h.org" target="_blank" rel="noopener noreferrer" className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800">Join 4-H</a>
          <a href="/volunteer" className="bg-white border border-purple-700 text-purple-700 px-6 py-2 rounded-md hover:bg-purple-100">Become a Volunteer</a>
        </div>
      </section>
    </div>
  );
}