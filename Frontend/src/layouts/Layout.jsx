import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-library-bg text-library-text font-sans selection:bg-library-accent selection:text-library-bg">
            <Sidebar />

            <div className="flex-1 flex flex-col ml-20 transition-all duration-300">
                <Header />

                <main className="flex-1 p-8 pt-4 overflow-x-hidden">
                    <div className="max-w-7xl mx-auto w-full animate-fade-in">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
