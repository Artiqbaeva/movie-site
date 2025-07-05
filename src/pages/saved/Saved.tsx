import React from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useSavedMovies } from "@/hooks/useSavedMovies";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "@/const";
import {  FaBookmark } from "react-icons/fa";

function Saved() {
  useScrollToTop();
  const { saved, removeMovie } = useSavedMovies();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto mt-18 min-h-[90vh] px-4">
      <h2 className="text-3xl font-bold mb-8 dark:text-white">Saved Movies</h2>

      {saved.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No saved movies yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {saved.map((movie) => (
            <div
              key={movie.id}
              className="bg-white dark:bg-[#111] rounded-xl shadow hover:shadow-lg transition relative flex flex-col"
            >
              <img
                src={
                  movie.poster_path
                    ? IMAGE_URL + movie.poster_path
                    : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-7509.jpg"
                }
                alt={movie.title}
                onClick={() => navigate(`/movie/${movie.id}`)}
                className="rounded-t-xl w-full h-[300px] object-cover cursor-pointer"
              />
              <button
                onClick={() => removeMovie(movie.id)}
                className="absolute top-2  right-2 text-red-500  text-xl"
              >
                <FaBookmark className="cursor-pointer" />
              </button>

              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold dark:text-white line-clamp-2">
                  {movie.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {movie.release_date?.slice(0, 4)} | Rating: {movie.vote_average}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default React.memo(Saved);