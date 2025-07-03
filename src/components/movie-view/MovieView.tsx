import React from "react";
import { IMAGE_URL } from "@/const";
import type { IMovie } from "@/types";

interface Props {
  data?: IMovie[];
  loading?: boolean;
  SkeletonComponent?: React.ReactNode; 
}

function MovieView({ data, loading = false, SkeletonComponent }: Props) {
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
      {data.map((movie) => (
        <div
          key={movie.id}
          className="dark:bg-[#111111] bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <div>
            <img
              loading="lazy"
              src={IMAGE_URL + movie.poster_path}
              alt={movie.title}
              className="rounded-t-xl w-full h-auto"
            />
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
      ))}
    </div>
  );
}

export default React.memo(MovieView);
