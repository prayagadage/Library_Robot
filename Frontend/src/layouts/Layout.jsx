import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Layout = ({ children, rightPanel }) => {
    return (
        <div className="flex h-screen bg-library-bg text-library-text font-sans overflow-hidden">
            <Sidebar />

            <div className="flex-1 flex flex-col min-w-0">
                <Header />

                <main className="flex-1 flex overflow-hidden">
                    {/* Main Content Area */}
                    <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
                        <div className="max-w-5xl w-full mx-auto">
                            {children}
                        </div>
                    </div>

                    {/* Right Panel (Popular/Authors) */}
                    {rightPanel && (
                        <aside className="w-80 border-l border-library-border bg-library-bg/50 p-6 overflow-y-auto hidden xl:block">
                            {rightPanel}
                        </aside>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Layout;
