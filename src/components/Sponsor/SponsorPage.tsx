import React from 'react';
// SponsorsPage.tsx

import { TopBar } from '../../components/Navigation/TopBar';
import { MainNav } from '../../components/Navigation/MainNav';
import { Header } from '../../components/Navigation/HeaderComponent';

const featuredSponsors = [
  { name: "Toyota", src: "/sponsors/toyota.png" },
  { name: "Chevrolet", src: "/sponsors/wtiu.png" },
  { name: "Corona", src: "/sponsors/corona.png" },
  { name: "Albertsons", src: "/sponsors/ifb.png" }
];

const allSponsors = [
  '/sponsors/toyota.png',
  '/sponsors/chevrolet.png',
  '/sponsors/wtiu.png',
  '/sponsors/corona.png',
  '/sponsors/albertsons.png',
  '/sponsors/ifb.png',
  '/sponsors/michelob.png',
  '/sponsors/mattress.png',
];

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-purple-50">
      {/* <TopBar />
      <MainNav /> */}
      < Header />
      <div className="max-w-6xl mx-auto py-5 px-4 text-center">
        <h2 className="text-4xl font-extrabold text-purple-800 mb-4">Our Valued Sponsors</h2>
        <p className="text-gray-600 mb-12">
          We are proud to be supported by generous sponsors who help make the Monroe County Fair an unforgettable experience.
        </p>

        {/* Featured Sponsors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center mb-20">
  {featuredSponsors.map((s, i) => (
    <div key={i} className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
      <img
        src={s.src}
        alt={s.name}
        className="h-16 object-contain"
      />
      {/* <p className="text-sm mt-2 text-purple-800 font-medium">{s.name}</p> */}
    </div>
  ))}
</div>



        {/* Call to Action */}
        <div className="text-center mt-10">
        <h3 className="text-xl font-semibold text-purple-800">Want to be a Sponsor?</h3>
        <p className="text-gray-600 mt-2">Support the fair and gain visibility with thousands of attendees!</p>
        <a href="/sponsorship/opportunities" className="mt-4 inline-block bg-yellow-400 text-purple-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition">
          View Sponsorship Opportunities
        </a>
      </div>
      

        {/* Scrolling Logos
        <div className="overflow-hidden whitespace-nowrap py-6 bg-purple-100 rounded-xl shadow-inner">
          <div className="inline-block animate-scroll space-x-12 px-4">
            {allSponsors.concat(allSponsors).map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Logo"
                className="inline-block h-12 w-auto object-contain"
              />
            ))}
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
