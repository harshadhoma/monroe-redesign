import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Ticket, Calendar, Map, Bell, Menu,
  Info, Camera, Handshake, GraduationCap, Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function BottomNavMobile() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-md md:hidden">
        <div className="flex justify-around items-center py-2 text-xs text-purple-800">
          <Link to="/tickets" className="flex flex-col items-center hover:text-yellow-500 transition">
            <Ticket className="w-5 h-5 mb-1" />
            <span>Tickets</span>
          </Link>
          <Link to="/events" className="flex flex-col items-center hover:text-yellow-500 transition">
            <Calendar className="w-5 h-5 mb-1" />
            <span>Events</span>
          </Link>
          <Link to="/map" className="flex flex-col items-center hover:text-yellow-500 transition">
            <Map className="w-5 h-5 mb-1" />
            <span>Map</span>
          </Link>
          <Link to="/updates" className="flex flex-col items-center hover:text-yellow-500 transition">
            <Bell className="w-5 h-5 mb-1" />
            <span>Updates</span>
          </Link>
          <button onClick={() => setShowDrawer(true)} className="flex flex-col items-center hover:text-yellow-500 transition">
            <Menu className="w-5 h-5 mb-1" />
            <span>More</span>
          </button>
        </div>
      </div>

      {/* Bottom Drawer */}
      <AnimatePresence>
        {showDrawer && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/50 flex justify-center items-end md:hidden"
            onClick={() => setShowDrawer(false)}
          >
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto"
            >
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Menu</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
                <Link to="/4h" className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-purple-600" />
                  <span>4-H Programs</span>
                </Link>
                <Link to="/upload" className="flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-purple-600" />
                  <span>Photo Gallery</span>
                </Link>
                <Link to="/vendor/login" className="flex items-center space-x-2">
                  <Handshake className="w-4 h-4 text-purple-600" />
                  <span>Vendor Portal</span>
                </Link>
                <Link to="/community" className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span>Meet Community</span>
                </Link>
                <Link to="/sponsor" className="flex items-center space-x-2">
                  <Info className="w-4 h-4 text-purple-600" />
                  <span>Sponsors</span>
                </Link>
                <Link to="/about" className="flex items-center space-x-2">
                  <Info className="w-4 h-4 text-purple-600" />
                  <span>About Us</span>
                </Link>
              </div>
              <button
                onClick={() => setShowDrawer(false)}
                className="mt-6 w-full py-2 bg-purple-700 text-white rounded-lg text-sm hover:bg-purple-800"
              >
                Close Menu
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default BottomNavMobile;
