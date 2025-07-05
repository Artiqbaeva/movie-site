import React, { useState } from "react";
import { NavLink,  useParams } from "react-router-dom";
import { IMAGE_URL } from "@/const";
import { api } from "@/api";
import { Spin } from "antd";
import type { IPerson, IMovie } from "@/types";
import { useEffect } from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { LoadingOutlined } from "@ant-design/icons";
const PersonView = () => {
  useScrollToTop();
  const { id } = useParams();
  const [person, setPerson] = useState<IPerson | null>(null);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 40, color: "#dc2626" }} spin />
  );
  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const res = await api.get(`/person/${id}`);
        setPerson(res.data);
      } catch (error) {
        console.error("Failed to fetch person:", error);
      }
    };

    const fetchMovies = async () => {
      try {
        const res = await api.get(`/person/${id}/movie_credits`);
        setMovies(res.data.cast);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    Promise.all([fetchPerson(), fetchMovies()]).finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin  indicator={antIcon} />
      </div>
    );
  }

  if (!person) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Actor not found.</p>
      </div>
    );
  }
 

  return (
    <div className="container mt-14 mx-auto px-4 py-8 space-y-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src={person.profile_path ? IMAGE_URL + person.profile_path : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-7509.jpg"}
          alt={person.name}
          className="w-56 rounded-lg shadow-md"
        />

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{person.name}</h1>
          <p className="text-gray-500">{person.birthday} | {person.place_of_birth}</p>
          <p className="text-gray-600 max-w-xl whitespace-pre-line">
            {person.biography || "No biography available."}
          </p>
        </div>
      </div>

     
      <div>
        <h2 className="text-2xl font-semibold mb-4">Known For</h2>
        {movies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {movies.slice(0,8).map(movie => (
              <div
                key={movie.id}
                className="bg-white dark:bg-[#111] rounded-xl shadow hover:shadow-lg transition"
              >
                <NavLink to={`/movie/${movie.id}`}>
                 <img
                     src={movie.poster_path ? IMAGE_URL + movie.poster_path : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-7509.jpg"}
                     alt={movie.title}
                     className="rounded-t-xl w-full h-auto cursor-pointer"
                   />
                 </NavLink>
                
                <div className="p-2">
                  <h3 className="text-sm font-semibold line-clamp-1">{movie.title}</h3>
                  <p className="text-xs text-gray-500">{movie.release_date?.slice(0,4)}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No movies found for this actor.</p>
        )}
      </div>
    </div>
  );
};

export default React.memo(PersonView);