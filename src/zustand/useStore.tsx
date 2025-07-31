import { create } from "zustand";

type User = {
  email: string;
  name: string;
  picture: string;
};

type Store = {
  saved: any[];
  toggleSave: (movie: any) => void;

  auth: User | null;
  setAuth: (user: User) => void;
  logout: () => void;
};

export const useStore = create<Store>((set, get) => ({
  saved: [],
  toggleSave: (movie) => {
    const { saved } = get();
    const isSaved = saved.some((m) => m.id === movie.id);
    const updated = isSaved
      ? saved.filter((m) => m.id !== movie.id)
      : [...saved, movie];
    localStorage.setItem("savedMovies", JSON.stringify(updated));
    set({ saved: updated });
  },

  auth: JSON.parse(localStorage.getItem("user") || "null"),
  setAuth: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ auth: user });
  },
  logout: () => {
    localStorage.removeItem("user");
    set({ auth: null });
  },
}));
