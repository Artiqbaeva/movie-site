import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const useGenre = () => {
  const getGenres = () =>
    useQuery({
      queryKey: ["genre"],
      queryFn: () => api.get("genre/movie/list").then(res => res.data),
    });

  return { getGenres };
};