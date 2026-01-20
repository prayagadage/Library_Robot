import React from 'react';
import { FaStar, FaHeart } from 'react-icons/fa';

const BookCard = ({ title, author, coverUrl, rating, reads, color }) => {
  return (
    <div className="w-40 flex-shrink-0 cursor-pointer group">
      {/* Cover */}
      <div
        className="w-full h-56 rounded-xl relative overflow-hidden shadow-lg transition-transform duration-300 group-hover:-translate-y-1 block"
        style={{ backgroundColor: color || '#1f293a' }}
      >
        <img
          src={coverUrl}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Heart Icon (Top Right) */}
        <button className="absolute top-2 right-2 p-1.5 bg-black/20 backdrop-blur-md rounded-full text-white/70 hover:text-red-500 hover:bg-white transition-all">
          <FaHeart size={12} />
        </button>
      </div>

      {/* Info */}
      <div className="mt-3">
        <h3 className="text-white font-semibold text-sm leading-tight line-clamp-2 mb-1 group-hover:text-library-accent transition-colors">
          {title}
        </h3>
        <p className="text-xs text-library-textMuted mb-2">{author}</p>

        <div className="flex items-center justify-between text-xs text-library-textMuted">
          {reads && (
            <span>{reads} readings</span>
          )}
          {rating && (
            <div className="flex items-center text-yellow-500/80">
              <FaStar size={10} className="mr-1" />
              <span>{rating}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
