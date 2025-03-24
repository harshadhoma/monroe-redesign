import React from 'react';
import { TopBar } from './components/Navigation/TopBar';
import { MainNav } from './components/Navigation/MainNav';
import { Calendar, MapPin, Phone, Clock, ChevronRight, Instagram, Facebook, Twitter, Youtube, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParallaxImage } from './components/ParallaxImage';
import { AnimatedCard } from './components/AnimatedCard';
import { EventCard } from './components/EventCard';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <TopBar />
      <MainNav />
      
      {/* Hero Section - Enhanced with ParallaxImage */}
      {/* <div className="relative pt-20 h-screen"> */}
      <div className="relative h-[81vh] flex items-start">
        <ParallaxImage
          src="https://offloadmedia.feverup.com/secretseattle.co/wp-content/uploads/2024/08/20120934/23fair_carnival_daytime_JC216-1024x683.jpg"
          alt="Fairgrounds"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-900/40" />
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-6xl font-bold text-white mb-6"
            >
              Experience the Magic
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-2xl text-gray-200 mb-8"
            >
              Join us for unforgettable events, shows, and celebrations at Monroe County's premier venue
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex space-x-6"
            >
              <Link to="/tickets/calendar">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition"
              >
                Get Tickets
              </motion.button>
              </Link>
              <Link to="/events">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition"
                  >
                    View Events
                  </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Featured Events */}
      <div className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-purple-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Don't miss out on these amazing experiences</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <EventCard
              date="March 15, 2024"
              title="Spring Craft Fair"
              description="Join local artisans and crafters for a day of unique finds and creative inspiration."
              imageUrl="https://visitlitchfield.com/wp-content/uploads/2024/03/carnival-1.jpg"
            />
            <EventCard
              date="April 2, 2024"
              title="Agricultural Exhibition"
              description="Experience the best of local agriculture with demonstrations and shows."
              imageUrl="https://wgxa.tv/resources/media2/16x9/3000/648/0x157/90/88001917-7e73-4116-b72b-38dfedbbcd0a-ganatlantiqueag2023tractorpulling101.jpg"
            />
            <EventCard
              date="April 20, 2024"
              title="Food Truck Festival"
              description="Savor delicious cuisine from the region's best food trucks and enjoy live music."
              imageUrl="https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?auto=format&fit=crop&w=800"
            />
          </div>
        </div>
      </div>

      {/* Quick Info - Enhanced with AnimatedCard */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: "Location", content: "5700 W Airport Road\nBloomington, IN 47403" },
              { icon: Phone, title: "Contact Us", content: "Phone: (812) 825-7439\nEmail: mocofairgrounds@gmail.com" },
              { icon: Clock, title: "Office Hours", content: "Monday - Friday: 9AM - 5PM\nSaturday: 10AM - 2PM" }
            ].map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <div className="p-6 flex items-start space-x-4">
                  <item.icon className="w-6 h-6 text-purple-600" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Bar - Enhanced animations */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col space-y-2">
          {[
            { icon: Facebook, color: "bg-blue-600", href: "https://www.facebook.com/monroecountyfairgrounds" },
            { icon: Twitter, color: "bg-sky-400", href: "#" },
            { icon: Instagram, color: "bg-pink-600", href: "#" },
            { icon: Youtube, color: "bg-red-600", href: "#" },
            { icon: Mail, color: "bg-green-600", href: "#" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ x: -10, scale: 1.1 }}
              className={`${item.color} p-3 rounded-l-lg text-white hover:shadow-lg transition duration-300`}
            >
              <item.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-300">Monroe County Fairgrounds has been serving our community since 1940, providing a premier venue for events and gatherings.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/tickets/calendar" className="text-gray-300 hover:text-white transition">Events Calendar</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition">Facility Rental</a></li>
                <li><a href="/4h" className="text-gray-300 hover:text-white transition">4-H Programs</a></li>
                <li><a href="/" className="text-gray-300 hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li>5700 W Airport Road</li>
                <li>Bloomington, IN 47403</li>
                <li>(812) 825-7439</li>
                <li>info@monroefair.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -5 }}
                    className="text-gray-300 hover:text-white transition"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Monroe County Fairgrounds. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;