import React from 'react';
import { FaBook, FaHome, FaCompass, FaBookmark, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { icon: <FaHome size={22} />, path: '/', label: 'Home' },
    { icon: <FaCompass size={22} />, path: '/explore', label: 'Explore' },
    { icon: <FaBook size={20} />, path: '/library', label: 'My Library' },
    { icon: <FaBookmark size={20} />, path: '/saved', label: 'Saved' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center bg-library-bgDark border-r border-library-border py-8 z-50">
      {/* Brand Icon */}
      <div className="mb-12">
        <div className="w-10 h-10 rounded-lg bg-library-accent flex items-center justify-center text-library-bgDark font-bold text-xl shadow-glow">
          L
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 w-full flex flex-col items-center space-y-8">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`relative p-3 rounded-xl transition-all duration-300 group
                ${isActive
                  ? 'bg-library-card text-library-accent shadow-glow'
                  : 'text-library-textMuted hover:text-white hover:bg-library-card'}`}
            >
              {item.icon}
              {isActive && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 px-2 py-1 bg-library-card border border-library-border rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                  {item.label}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="flex flex-col space-y-6 mb-4">
        <button className="p-3 text-library-textMuted hover:text-white transition-colors">
          <FaCog size={22} />
        </button>
        <button className="p-3 text-library-textMuted hover:text-red-400 transition-colors">
          <FaSignOutAlt size={22} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
