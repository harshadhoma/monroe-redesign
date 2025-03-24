import React from 'react';
import { TopBar } from '../../components/Navigation/TopBar';
import { MainNav } from '../../components/Navigation/MainNav';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const locations = [
  { top: "73%", left: "70%", label: "4-H Building", path: "/4h" },
  { top: "60%", left: "55%", label: "Draper Auditorium" },
  { top: "29%", left: "40%", label: "Music Stage" },
  { top: "70%", left: "40%", label: "Rabbit Barn" },
  { top: "60%", left: "80%", label: "Carnival" },
  { top: "48%", left: "30%", label: "Swine Barn" },
  { top: "52%", left: "38%", label: "Goat Area" },
  { top: "60%", left: "40%", label: "Beef/Dairy" },
  { top: "75%", left: "57%", label: "Community Building" },
  { top: "52%", left: "67%", label: "Commercial Building" },
  { top: "20%", left: "80%", label: "Pit Area" },
  { top: "77%", left: "40%", label: "Poultry" },
  { top: "47%", left: "57%", label: "Grand Stand Arena" },
];

export default function FairgroundsMap() {
  return (
    <div className="min-h-screen bg-purple-50">
      <TopBar />
      <MainNav />
      <br></br>
      <h1 className="text-3xl font-bold text-purple-800 text-center mb-6">🗺️ Explore the Fairgrounds</h1>
      <div className="relative max-w-3xl mx-auto">
        <img src="/src/images/monroefg.png" alt="Fairground Map" className="w-full rounded-lg shadow" />
        {locations.map((loc, i) => (
          <div
            key={i}
            className="absolute text-purple-700 hover:scale-110 transition-transform duration-200 cursor-pointer"
            style={{ top: loc.top, left: loc.left, zIndex: 50 }}
            title={loc.label}
          >
            <Link to={loc.path || "#"}>
              <MapPin className="w-6 h-6" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}