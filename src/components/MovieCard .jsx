import React from "react";

const MovieCard = () => {
  return (
    <>
      <section>
        <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer w-44">
          {/* Movie Poster */}
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-64 object-cover"
          />

          {/* Content */}
          <div className="p-2 text-white">
            {/* Title */}
            <h3 className="text-sm font-semibold truncate">{movie.title}</h3>

            {/* Year + Rating Row */}
            <div className="flex items-center justify-between mt-1 text-xs text-gray-400">
              <span>{movie.year}</span>

              {/* IMDb Rating Badge */}
              <span className="bg-yellow-500 text-black px-1.5 py-0.5 rounded text-xs font-bold">
                ⭐ {movie.rating}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieCard;
