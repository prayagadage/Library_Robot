import React from 'react';
import { FaStar } from 'react-icons/fa';

const BookCard = ({ title, author, coverUrl, rating, department, isLarge = false }) => {
  return (
    <div className={`group relative flex-shrink-0 cursor-pointer ${isLarge ? 'w-64' : 'w-48'}`}>

      {/* Cover Image Wrapper */}
      <div className={`relative overflow-hidden rounded-xl shadow-soft transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-glow
        ${isLarge ? 'h-96' : 'h-72'} bg-library-card`}
      >
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-4 text-center bg-gradient-to-br from-library-card to-library-bgDark">
            <span className="font-display font-bold text-library-textMuted opacity-50 text-xl">{title[0]}</span>
          </div>
        )}

        {/* Overlay Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick Action Button */}
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-library-accent text-library-bgDark font-bold py-2 px-6 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg text-sm whitespace-nowrap">
          View Details
        </button>
      </div>

      {/* Metadata */}
      <div className="mt-4 px-1">
        <h3 className={`font-display font-bold text-white truncate group-hover:text-library-accent transition-colors ${isLarge ? 'text-lg' : 'text-base'}`}>
          {title}
        </h3>
        <p className="text-sm text-library-textMuted truncate">{author}</p>

        <div className="flex items-center justify-between mt-2">
          {department && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-library-card border border-library-border text-library-textMuted uppercase tracking-wider">
              {department}
            </span>
          )}
          {rating && (
            <div className="flex items-center text-library-accent text-sm gap-1">
              <FaStar size={12} />
              <span className="font-bold">{rating}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
