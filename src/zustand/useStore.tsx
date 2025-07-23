import { create } from "zustand";

type Store = {
  saved: any[];
  toggleSave: (movie: any) => void;
  auth: null | string;
};

export const useStore = create<Store>()((set, get) => ({
  saved: JSON.parse(localStorage.getItem("savedMovies") || "[]"),
  toggleSave: (movie) => {
    const { saved } = get();
    const isSaved = saved.some((m) => m.id === movie.id);
    let newSaved;

    if (isSaved) {
      newSaved = saved.filter((m) => m.id !== movie.id);
    } else {
      newSaved = [...saved, movie];
    }

   
    localStorage.setItem("savedMovies", JSON.stringify(newSaved));

    set({ saved: newSaved });
  },
  auth: null,
}));
