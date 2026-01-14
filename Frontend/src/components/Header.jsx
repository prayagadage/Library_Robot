import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="sticky top-0 z-40 w-full px-8 py-6 bg-library-bg/95 backdrop-blur-sm flex items-center justify-between">

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-auto">
                <div className="relative group">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-library-textMuted group-focus-within:text-library-accent transition-colors" />
                    <input
                        type="text"
                        placeholder="Search for books, authors, or subjects..."
                        className="w-full bg-library-card border border-library-border rounded-full py-3 pl-12 pr-6 text-library-text placeholder-library-textMuted focus:outline-none focus:border-library-accent focus:shadow-glow transition-all duration-300"
                    />
                </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-6 ml-8">
                {/* Notifications */}
                <button className="relative p-2 text-library-textMuted hover:text-white transition-colors">
                    <FaBell size={20} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-library-accent rounded-full animate-pulse"></span>
                </button>

                {/* User Profile */}
                <div className="flex items-center space-x-3 cursor-pointer p-1 rounded-full hover:bg-library-card transition-colors pr-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-library-accent to-yellow-200 border-2 border-library-card overflow-hidden">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                            alt="User"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="hidden md:block">
                        <p className="text-sm font-semibold text-white">Alex Morgan</p>
                        <p className="text-xs text-library-textMuted">Premium Member</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
