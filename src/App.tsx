import React, { useState, useEffect } from 'react';
import {
  MapPin, Phone, Clock, Instagram, Facebook, Twitter, Youtube, Mail, Share2, 
  Accessibility, ParkingCircle, ChevronDown, MessageCircleQuestion
} from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { AnimatedCard } from './components/AnimatedCard';
import { EventCard } from './components/EventCard';
import { Link } from 'react-router-dom';
import { Header } from './components/Navigation/HeaderComponent';
import ScrollToTop from './components/Navigation/ScrollToTop';
import { ThisWeekOverlay } from './sections/ThisWeek';
import { BottomNavMobile } from './components/Navigation/BottomNavMobile';

const testimonials = [
  { name: 'Emily R.', role: 'Visitor', quote: 'This fair was magical! The food, the shows, the vibe – 10/10.' },
  { name: 'Mark L.', role: 'Vendor', quote: 'Well-organized, great crowd! Looking forward to next year.' },
  { name: 'Sarah G.', role: '4-H Parent', quote: 'My kid had the best experience! Truly a community affair.' },
  { name: 'Jake P.', role: 'Performer', quote: 'The stage setup was professional and crowd was electric.' },
  { name: 'Olivia T.', role: 'Local Artist', quote: 'A great place to showcase art and crafts to families.' },
  { name: 'Ben S.', role: 'Food Vendor', quote: 'Sold out my entire truck. Amazing footfall!' },
  { name: 'Grace M.', role: 'Volunteer', quote: 'Well organized and fun for all ages. Loved helping out!' },
  { name: 'Liam K.', role: 'Repeat Visitor', quote: 'Each year gets better — love the fireworks finale!' },
  { name: 'Ava W.', role: 'Petting Zoo Coordinator', quote: 'Kids loved the animals. Super rewarding.' },
  { name: 'Noah D.', role: 'Ride Operator', quote: 'The Ferris wheel views were unbeatable at sunset.' },
];

// FAQ Data
const faqs = [
  {
    question: 'Where can I buy tickets?',
    answer: 'Tickets can be purchased online or at the gate. We recommend buying in advance!',
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, we have multiple lots with shuttle service. Parking is $5/day.',
  },
  {
    question: 'Are pets allowed?',
    answer: 'Only service animals are permitted on fairgrounds.',
  },
];


function SocialToggleFAB() {
  const [open, setOpen] = useState(false);
  const icons = [
    { icon: Facebook, color: "bg-blue-600", href: "https://www.facebook.com/monroecountyfairgrounds" },
    { icon: Twitter, color: "bg-sky-400", href: "#" },
    { icon: Instagram, color: "bg-pink-600", href: "#" },
    { icon: Youtube, color: "bg-red-600", href: "#" },
    { icon: Mail, color: "bg-green-600", href: "#" }
  ];


  // Testimonials Data

  return (
    
    <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end space-y-2">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="flex flex-col items-end space-y-2 mb-2"
        >
          {icons.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.1 }}
              className={`${item.color} p-3 rounded-full text-white shadow-lg`}
            >
              <item.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      )}
      <div
  onClick={() => setOpen(!open)}
  className={`w-14 h-14 cursor-pointer transition-transform duration-500 ease-in-out ${
    open ? 'rotate-[0deg]' : 'rotate-0'
  } bg-purple-600 flex items-center justify-center rounded-full shadow-lg`}
  title="Toggle Social Links"
>
  <Share2 className="w-6 h-6 text-white" />
</div>

      {/* <img
        onClick={() => setOpen(!open)}
        src="/assets/socialMedia.png"
        alt="Social Media Toggle"
        className={`w-14 h-14 cursor-pointer transition-transform duration-500 ease-in-out ${open ? 'rotate-[360deg]' : 'rotate-0'}`}
      /> */}
    </div>
  );
}

function HeroCountdown() {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-04-20T12:00:00");
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white text-lg md:text-xl bg-black/5 rounded-full px-6 py-2 inline-block font-semibold backdrop-blur mt-4 mb-6">
      {/* 🎉 Next Big Event in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s */}
      🎉 Next Big Event in: 2d 3h 35m 3s
    </div>
  );
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, 5000); // change every 5 seconds
  return () => clearInterval(interval);
}, []);


  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Header />

        {/* Hero Section */}
        <div className="relative h-screen w-full overflow-hidden flex items-start justify-center pt-12 -mt-px">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/50 to-transparent z-10" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-20 text-center px-4 max-w-2xl pt-6"
          >

<div className="bg-black/5 backdrop-blur-sm rounded-lg p-4 inline-block">
  <motion.h1 className="text-white text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
    Experience the Magic
  </motion.h1>
  <motion.p className="text-gray-200 text-base md:text-lg drop-shadow">
    Unforgettable events, shows, and celebrations await at Monroe County’s premier venue
  </motion.p>
</div>

            {/* <motion.h1 className="text-white text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
              Experience the Magic
            </motion.h1>

            <motion.p className="text-gray-200 text-base md:text-lg mb-4 drop-shadow">
              Unforgettable events, shows, and celebrations await at Monroe County’s premier venue
            </motion.p> */}

            <HeroCountdown />

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 justify-center items-center mb-3">
              <Link to="/tickets/calendar">
                <button className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-full text-lg font-bold hover:bg-yellow-300 transition shadow-lg">
                  Get Tickets
                </button>
              </Link>
              <Link to="/events">
              <button className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-full text-lg font-bold hover:bg-yellow-300 transition shadow-lg">
                  View Events
                </button>
              </Link>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="text-white underline text-sm sm:text-base font-medium hover:text-yellow-300 transition"
            >
              👉 What’s Happening This Week
            </button>
          </motion.div>
        </div>

        <ThisWeekOverlay isOpen={modalOpen} onClose={() => setModalOpen(false)} />


        {/* UPCOMING EVENTS SECTION */}
        <div className="py-12 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
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
        
        {/* // Drop this AFTER your Upcoming Events section in App.tsx */}
        <section className="py-1 bg-white">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-purple-900 mb-12 text-center">Plan Your Visit</h2>

    <div className="grid md:grid-cols-4 gap-8">
      {[{
        icon: MapPin,
        title: 'Directions',
        content: '5700 W Airport Rd\nBloomington, IN\nNear Hwy 37'
      }, {
        icon: Clock,
        title: 'Hours & Admission',
        content: 'Weekdays: 10AM–9PM\nWeekends: 9AM–10PM\n$5 General Entry'
      }, {
        icon: Accessibility,
        title: 'Accessibility',
        content: 'Wheelchair paths\nRental scooters available\nADA seating'
      }, {
        icon: ParkingCircle,
        title: 'Parking Info',
        content: 'Multiple lots\nShuttle service\n$5/day parking'
      }].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          className="p-6 bg-purple-50 rounded-xl shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex items-start space-x-4">
            <item.icon className="w-6 h-6 text-purple-700 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-purple-800 mb-1">{item.title}</h3>
              <p className="text-gray-600 whitespace-pre-line text-sm">{item.content}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="text-center mt-12">
      <Link
        to="/visit"
        className="inline-block px-6 py-3 bg-purple-700 text-white rounded-full font-medium hover:bg-purple-800 transition"
      >
        See All Visitor Info
      </Link>
    </div>
  </div>
</section>


<section className="bg-purple-50 py-16">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-purple-900 mb-12">What People Are Saying</h2>

    {/* INLINE STYLING FIX */}
    <style>{`
      .swiper-button-next,
      .swiper-button-prev {
        color: #7e22ce !important;
        width: 30px !important;
        height: 30px !important;
        top: 45% !important;
      }

      .swiper-button-next::after,
      .swiper-button-prev::after {
        font-size: 22px !important;
        font-weight: bold;
      }
    `}</style>

    {/* SWIPER */}
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-12"
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white shadow-lg rounded-xl p-6 text-left h-full mx-2">
            <p className="text-lg text-gray-700 mb-4">“{item.quote}”</p>
            <h4 className="font-semibold text-purple-800">{item.name}</h4>
            <span className="text-sm text-gray-500">{item.role}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>




{/* FAQ ACCORDION */}
<section className="bg-white py-5">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-purple-900 text-center mb-10">Frequently Asked Questions</h2>
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <details key={index} className="group border border-purple-200 rounded-lg p-4 transition-all hover:shadow">
          <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-purple-800 group-open:text-purple-600">
            {faq.question}
            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
          </summary>
          <p className="text-gray-600 mt-2">{faq.answer}</p>
        </details>
      ))}
    </div>
  </div>
</section>


 
        <SocialToggleFAB />

        {/* FOOTER */}
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
                <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
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
          <BottomNavMobile />
        </footer>
      </div>
    </>
  );
}

export default App;
