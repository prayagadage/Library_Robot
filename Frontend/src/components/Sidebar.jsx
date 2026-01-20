import React from 'react';
import { FaBook, FaHome, FaUser, FaCompass, FaCog, FaSignOutAlt, FaPhoneAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { icon: <FaHome size={20} />, path: '/', label: 'Home' },
    { icon: <FaBook size={20} />, path: '/library', label: 'Library' },
    { icon: <FaUser size={20} />, path: '/authors', label: 'Authors' },
    { icon: <FaCompass size={20} />, path: '/explore', label: 'Explore' },
    { icon: <FaPhoneAlt size={18} />, path: '/contact', label: 'Contact' },
    { icon: <FaCog size={20} />, path: '/settings', label: 'Settings' },
  ];

  return (
    <aside className="w-20 flex flex-col items-center py-8 bg-library-bgDark border-r border-library-border z-50">
      {/* Logo */}
      <div className="mb-12">
        <div className="w-10 h-10 flex items-center justify-center text-library-accent">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 w-full flex flex-col items-center space-y-6">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`p-3 rounded-xl transition-all duration-300 relative group
                                ${isActive ? 'text-library-accent' : 'text-library-textMuted hover:text-white'}`}
            >
              {item.icon}

              {/* Active Indicator Dot */}
              {isActive && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-library-accent rounded-l-full translate-x-4"></span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Action */}
      <div className="mt-auto">
        <button className="p-3 text-library-textMuted hover:text-white transition-colors">
          <FaSignOutAlt size={20} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
