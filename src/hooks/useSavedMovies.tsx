import { useState, useEffect } from "react";
import type { IMovie } from "@/types";

const SAVED_KEY = "saved_movies";

export const useSavedMovies = () => {
  const [saved, setSaved] = useState<IMovie[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem(SAVED_KEY);
    if (savedData) {
      setSaved(JSON.parse(savedData));
    }
  }, []);

  const saveMovie = (movie: IMovie) => {
    const existing = saved.find((m) => m.id === movie.id);
    if (!existing) {
      const updated = [...saved, movie];
      setSaved(updated);
      localStorage.setItem(SAVED_KEY, JSON.stringify(updated));
    }
  };

  const removeMovie = (id: number) => {
    const updated = saved.filter((m) => m.id !== id);
    setSaved(updated);
    localStorage.setItem(SAVED_KEY, JSON.stringify(updated));
  };

  const isSaved = (id: number) => saved.some((m) => m.id === id);

  return { saved, saveMovie, removeMovie, isSaved };
};