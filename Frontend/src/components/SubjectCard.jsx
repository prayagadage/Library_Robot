import React from 'react';

const SubjectCard = ({ title, count, color, icon, active }) => {
    return (
        <div
            className={`p-5 rounded-2xl flex items-center justify-between cursor-pointer transition-all hover:scale-105
            ${active
                    ? 'bg-library-accent text-library-bgDark'
                    : 'bg-library-card text-white hover:bg-library-cardHover'
                }`}
        >
            <div>
                <h4 className={`font-semibold text-lg mb-1 ${active ? 'text-library-bgDark' : 'text-white'}`}>
                    {title}
                </h4>
                <div className="inline-block text-2xl mb-1">{icon}</div>
                <p className={`text-xs ${active ? 'text-library-bgDark/70' : 'text-library-textMuted'}`}>
                    {count} Books available
                </p>
            </div>

            {/* Right Side Stats or Decorative */}
            <div className="flex flex-col items-end">
                <span className={`text-xl font-bold ${active ? 'text-library-bgDark' : 'text-white'}`}>
                    {count}
                </span>
                <span className={`text-[10px] mt-1 ${active ? 'text-library-bgDark/70' : 'text-library-textMuted'}`}>
                    Books
                </span>
            </div>
        </div>
    );
};

export default SubjectCard;
