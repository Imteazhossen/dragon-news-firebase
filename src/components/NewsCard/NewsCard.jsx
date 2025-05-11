import React from 'react';
import { FaStar, FaEye, FaShareAlt, FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {
    title,
    id,
    author,
    // published_date,
    thumbnail_url,
    details,
    total_view,
    rating
  } = news;

  const shortDetails = details.length > 200 ? details.slice(0, 200) + '...' : details;

  

  return (
    <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden">
      {/* Author and Share section */}
      <div className="flex justify-between items-center bg-base-200 px-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold">{author.name}</h4>
            <p className="text-sm text-gray-500">{news.author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-lg">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg px-4 mt-3">{title}</h2>

      {/* Thumbnail */}
      <div className="px-4 mt-3">
        <img src={thumbnail_url} alt={title} className="w-full h-auto rounded-lg" />
      </div>

      {/* Details */}
      <div className="px-4 py-3 text-sm text-gray-700">
        <p>{shortDetails}</p>
        <Link to={`/news-details/${id}`} className="text-orange-500 font-medium cursor-pointer">Read More</Link>
      </div>

      {/* Footer: Rating and Views */}
      <div className="flex justify-between items-center px-4 pb-4">
        <div className="flex items-center text-orange-400 gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.number ? 'text-orange-400' : 'text-gray-300'} />
          ))}
          <span className="ml-2 text-sm font-semibold text-black">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
