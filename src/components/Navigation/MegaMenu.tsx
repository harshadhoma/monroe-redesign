import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';


interface MenuItem {
  title: string;
  items: {
    section: string;
    links: { text: string; href: string }[];
  }[];
}

interface MegaMenuProps {
  item: MenuItem;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function MegaMenu({ item, isOpen, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [alignRight, setAlignRight] = useState(false);

  useEffect(() => {
    if (menuRef.current) {
      const { right } = menuRef.current.getBoundingClientRect();
      if (right > window.innerWidth) {
        setAlignRight(true);
      } else {
        setAlignRight(false);
      }
    }
  }, [isOpen]);

  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {/* Main Menu Button */}
      <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-700 py-6">
        <span>{item.title}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Expanded Full-Width Dropdown with Overflow Fix */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute ${alignRight ? 'right-0' : 'left-0'} w-auto min-w-[600px] bg-white shadow-xl rounded-b-xl z-50 border border-gray-200`}
          >
            <div className="max-w-7xl mx-auto px-8 py-6">
              {/* Auto-adjust to number of sections */}
              <div className={`grid ${item.items.length > 2 ? 'grid-cols-3' : 'grid-cols-2'} gap-8`}>
                {item.items.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold text-purple-900 mb-4">{section.section}</h3>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          {link.href.startsWith('/') ? (
                            <motion.div whileHover={{ x: 5 }}>
                              <Link
                                to={link.href}
                                className="text-gray-600 hover:text-purple-700 block"
                              >
                                {link.text}
                              </Link>
                            </motion.div>
                          ) : (
                            <motion.a
                              href={link.href}
                              className="text-gray-600 hover:text-purple-700 block"
                              whileHover={{ x: 5 }}
                            >
                              {link.text}
                            </motion.a>
                          )}

                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
