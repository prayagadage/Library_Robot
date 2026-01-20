import React, { useState } from 'react';
import { FaSearch, FaBell, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    const [activeTab, setActiveTab] = useState('Library');

    const tabs = ['Library', 'Books', 'Authors'];

    return (
        <header className="px-8 py-5 flex items-center justify-between bg-library-bg">
            {/* Left Tabs */}
            <div className="flex items-center space-x-8">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-lg transition-colors ${activeTab === tab
                                ? 'text-white font-medium'
                                : 'text-library-textMuted hover:text-white'
                            }`}
                    >
                        {tab}
                        {activeTab === tab && (
                            <div className="h-0.5 bg-white w-4 mx-auto mt-1 rounded-full" />
                        )}
                    </button>
                ))}
            </div>

            {/* Center Search */}
            <div className="flex-1 max-w-xl mx-12">
                <div className="relative group">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-white transition-colors" />
                    <input
                        type="text"
                        placeholder="Search here"
                        className="w-full bg-library-card border-none rounded-2xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:ring-0 focus:bg-library-cardHover transition-all"
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-6">
                <button className="text-gray-400 hover:text-white transition-colors relative">
                    <FaBell size={20} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-library-accent rounded-full border-2 border-library-bg"></span>
                </button>

                <button className="text-gray-400 hover:text-white transition-colors">
                    <FaEnvelope size={20} />
                </button>

                <div className="flex items-center space-x-3 pl-4 border-l border-library-border ml-2">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-medium text-white">Abhishek Saha</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-library-accent overflow-hidden">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
