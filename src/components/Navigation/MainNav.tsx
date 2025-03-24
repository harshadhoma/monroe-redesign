import React, { useState } from 'react';
import { MegaMenu } from './MegaMenu';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';


const navigationItems = [
  {
    title: "Events & Attractions",
    items: [
      {
        section: "Featured Events",
        links: [
          // { text: "Annual Fair", href: "/" },
          { text: "Upcoming Events", href: "/events" },
          // { text: "Competitions", href: "/" },
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
        section: "Entertainment",
        links: [
          // { text: "Live Music", href: "/" },
          // { text: "Family Shows", href: "/" },
          // { text: "Special Performances", href: "/" },
          // { text: "Daily Schedule", href: "/" },
        ]
      },
      {
        section: "Tickets",
        links: [
          { text: "Buy Tickets", href: "/tickets/calendar" },
          // { text: "Pricing Options", href: "/" },
          { text: "Season Passes", href: "/" },
          // { text: "VIP Packages", href: "/" },
        ]
      }
    ]
  },
  {
    title: "Plan Your Visit",
    items: [
      {
        section: "Getting Here",
        links: [
          { text: "Maps & Directions", href: "/" },
          { text: "Parking Information", href: "/" },
          // { text: "Accessibility", href: "/" },
          { text: "Public Transportation", href: "/" },
        ]
      },
      {
        section: "At the Fair",
        links: [
          { text: "Food & Vendors", href: "/" },
          // { text: "Shopping Guide", href: "/" },
          // { text: "Amenities", href: "/" },
          { text: "First Aid", href: "/" },
        ]
      },
      // {
      //   section: "Accommodations",
      //   links: [
      //     // { text: "Partner Hotels", href: "/" },
      //     // { text: "RV Camping", href: "/" },
      //     // { text: "Group Services", href: "/" },
      //     // { text: "Local Attractions", href: "/" },
      //   ]
      // },
      {
        section: "Resources",
        links: [
          { text: "FAQs", href: "/" },
          { text: "Fair Guide", href: "/" },
          // { text: "Rules & Policies", href: "/" },
          // { text: "Contact Support", href: "/" },
        ]
      }
    ]
  },
  {
    title: "Get Involved",
    items: [
      {
        section: "Vendors & Visitors",
        links: [
          { text: "Become a Vendor", href: "/" },
          { text: "Vendor Portal", href: "/vendor/login" },
          { text: "Visitor Portal", href: "/user/dashboard"},
          { text: "Photo Gallery", href: "/upload" },
        ]
      },
      {
        section: "Sponsorship",
        links: [
          { text: "Opportunities", href: "/" },
          { text: "Current Sponsors", href: "/sponsor" },
          // { text: "Benefits", href: "/" },
          // { text: "Contact", href: "/" },
        ]
      },
      {
        section: "Community",
        links: [
          { text: "Volunteer", href: "/" },
          { text: "Job Opportunities", href: "/" },
          { text: "Donations", href: "/" },
          // { text: "Support Programs", href: "/" },
        ]
      },
      {
        section: "Education",
        links: [
          { text: "4-H", href: "/4h" },
          // { text: "Youth Development", href: "/" },
          // { text: "Workshops", href: "/" },
          // { text: "Resources", href: "/" },
        ]
      }
    ]
  },
  {
    title: "About Us",
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
      // {
      //   section: "News & Media",
      //   links: [
      //     // { text: "Press Releases", href: "/" },
      //     // { text: "News Coverage", href: "/" },
      //     // { text: "Media Kit", href: "/" },
      //   ]
      // },
      {
        section: "Contact",
        links: [
          { text: "General Inquiries", href: "/" },
          // { text: "Department Contacts", href: "/" },
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
  const location = useLocation();

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-0">
          <a href="/" className="text-2xl font-bold text-purple-800">
            Monroe County Fairgrounds
          </a>

          {/* Desktop Nav */}
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

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-6 shadow-lg">
          {navigationItems.map((item) => (
            <div key={item.title}>
              <h3 className="text-purple-800 font-semibold mb-2">{item.title}</h3>
              <ul className="pl-2 space-y-1">
                {item.items.flatMap(section => section.links).map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href} className="text-gray-600 hover:text-purple-700 block">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}