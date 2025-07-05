import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const useMovie = () => {
  const getMovies = (params: any) =>
    useQuery({
      queryKey: ["movie", params],
      queryFn: () =>
        api.get("discover/movie", { params }).then((res) => res.data),
    });

  const getMovieSingle = (id: string) =>
    useQuery({
      queryKey: ["movie", id],
      queryFn: () => api.get(`movie/${id}`).then((res) => res.data),
    });

  const getMovieDetail = (id: string, path: string) =>
    useQuery({
      queryKey: ["movie", id, path],
      queryFn: () => api.get(`movie/${id}/${path}`).then((res) => res.data),
    });
    const getSearchMovie = (params: any) =>
      useQuery({
        queryKey: ["search-movie", params],
        queryFn: () =>
          api.get("search/movie", { params }).then((res) => res.data),
        enabled: !!params.query,
      });

  return { getMovies, getMovieSingle, getMovieDetail, getSearchMovie };
};