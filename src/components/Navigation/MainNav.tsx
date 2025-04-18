import React, { useState, useEffect } from 'react';
import { MegaMenu } from './MegaMenu';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp, Calendar, Map, Handshake, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigationItems = [
  {
    title: "Events & Attractions",
    icon: Calendar,
    items: [
      {
        section: "Featured Events",
        links: [
          { text: "Annual Fair", href: "/" },
          { text: "Upcoming Events", href: "/events" },
          { text: "Carnival & Entertainment", href: "/" },
        ]
      },
      {
        section: "Special Attractions",
        links: [
          { text: "4-H Shows", href: "/" },
          { text: "Rodeo Events", href: "/" },
          { text: "Queen's Pageant", href: "/" },
          { text: "Demolition Derby", href: "/" },
        ]
      },
      {
        section: "Tickets",
        links: [
          { text: "Buy Tickets", href: "/tickets/calendar" },
          { text: "Season Passes", href: "/" },
        ]
      }
    ]
  },
  {
    title: "Plan Your Visit",
    icon: Map,
    items: [
      {
        section: "Getting Here",
        links: [
          { text: "Maps & Directions", href: "/" },
          { text: "Parking Information", href: "/" },
          { text: "Public Transportation", href: "/" },
        ]
      },
      {
        section: "At the Fair",
        links: [
          { text: "Food & Vendors", href: "/" },
          { text: "First Aid", href: "/" },
        ]
      },
      {
        section: "Resources",
        links: [
          { text: "FAQs", href: "/" },
          { text: "Fair Guide", href: "/" },
        ]
      }
    ]
  },
  {
    title: "Get Involved",
    icon: Handshake,
    items: [
      {
        section: "Vendors & Visitors",
        links: [
          { text: "Become a Vendor", href: "/" },
          { text: "Vendor Portal", href: "/vendor/login" },
          { text: "Visitor Portal", href: "/user/dashboard" },
          { text: "Photo Gallery", href: "/upload" },
        ]
      },
      {
        section: "Sponsorship",
        links: [
          { text: "Opportunities", href: "/" },
          { text: "Current Sponsors", href: "/sponsor" },
        ]
      },
      {
        section: "Community",
        links: [
          { text: "Meet your Community", href: "/community" },
          { text: "Job Opportunities", href: "/" },
          { text: "Donations", href: "/" },
        ]
      },
      {
        section: "Education",
        links: [
          { text: "4-H", href: "/4h" },
          { text: "Youth Development", href: "/" },
          { text: "Workshops", href: "/" },
        ]
      }
    ]
  },
  {
    title: "About Us",
    icon: Info,
    items: [
      {
        section: "Our Story",
        links: [
          { text: "History", href: "/" },
          { text: "Mission & Values", href: "/" },
          { text: "Fair Board", href: "/" },
          { text: "Staff Directory", href: "/" },
        ]
      },
      {
        section: "Contact",
        links: [
          { text: "General Inquiries", href: "/" },
          { text: "Location", href: "/" },
          { text: "Hours", href: "/" },
        ]
      },
      {
        section: "Connect",
        links: [
          { text: "Newsletter", href: "/" },
          { text: "Social Media", href: "/" },
          { text: "Blog", href: "/" },
          { text: "Community Events", href: "/" },
        ]
      }
    ]
  }
];

export function MainNav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const location = useLocation();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    // <div className="bg-white border-b">
    <div className="bg-transparent border-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-0">
          <a href="/" className="text-2xl font-bold text-purple-800">
            Monroe County Fairgrounds
          </a>

          <div className="relative hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <MegaMenu
                key={item.title}
                item={item}
                isOpen={openMenu === item.title}
                onMouseEnter={() => setOpenMenu(item.title)}
                onMouseLeave={() => setOpenMenu(null)}
              />
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden bg-white px-4 py-4 shadow-lg"
          style={{ height: 'calc(100vh - 64px)', overflowY: 'auto', touchAction: 'auto' }}
        >
          {navigationItems.map((item) => (
            <div key={item.title} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left text-purple-800 font-semibold text-xl mb-2"
                onClick={() => toggleSection(item.title)}
              >
                <span className="flex items-center gap-2">
                  {item.icon && <item.icon className="w-5 h-5" />} {item.title}
                </span>
                {expandedSections[item.title] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <AnimatePresence>
                {expandedSections[item.title] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4">
                      {item.items.map((section, i) => (
                        <div key={i}>
                          <p className="text-base font-semibold text-gray-700 mb-1">{section.section}</p>
                          <ul className="pl-4 space-y-1">
                            {section.links.map((link, idx) => (
                              <li key={idx}>
                                <Link
                                  to={link.href}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setTimeout(() => {
                                      window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }, 100);
                                  }}
                                  className="text-gray-600 hover:text-purple-700 block text-base"
                                >
                                  {link.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
