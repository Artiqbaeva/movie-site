import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const useMovie = () => {
  const getMovies = (params: any) =>
    useQuery({
      queryKey: ["movie", params],
      queryFn: () => api.get("discover/movie", { params }).then(res => res.data),
    });

  return { getMovies };
};