import React from "react";
import { IMAGE_URL } from "@/const";
import type { IMovie } from "@/types";
import { useNavigate } from "react-router-dom";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useStore } from "@/zustand/useStore";

interface Props {
  data?: IMovie[];
  loading?: boolean;
  SkeletonComponent?: React.ReactNode;
}

function MovieView({ data, loading = false, SkeletonComponent }: Props) {
  const navigate = useNavigate();
  const { toggleSave, saved } = useStore(); 

  if (loading) {
    return (
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <React.Fragment key={i}>{SkeletonComponent}</React.Fragment>
        ))}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="container mx-auto text-center text-gray-500 py-10">
        No movies found.
      </div>
    );
  }

  return (
    <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
      {data.map((movie) => {
        const isSaved = saved.some((m) => m.id === movie.id); 

        return (
          <div
            key={movie.id}
            className="dark:bg-[#111111] bg-white rounded-xl shadow hover:shadow-lg relative transition"
          >
            <div className="relative">
              <img
                loading="lazy"
                src={
                  movie.poster_path
                    ? IMAGE_URL + movie.poster_path
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnNH6I8IvZndxspJlJ0BDEyUNHxLvNokyWQ&s"
                }
                alt={movie.title}
                onClick={() => navigate(`/movie/${movie.id}`)}
                className="rounded-t-xl w-full h-auto cursor-pointer"
              />

                  <button
                 onClick={() => toggleSave(movie)}
                   className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2 "
                 >
                 {isSaved ? <FaBookmark className="text-white" /> : <FaRegBookmark />}
                   </button>
              <p className="absolute top-2 left-2 text-white bg-red-500 px-2 rounded text-sm">
                {movie.release_date.split("-")[0]}
              </p>
            </div>

            <div className="p-3 space-y-2">
              <h3
                title={movie.title}
                className="text-xl font-semibold line-clamp-1"
              >
                {movie.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Rating: {movie.vote_average}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default React.memo(MovieView);
