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
    const newSaved = isSaved
      ? saved.filter((m) => m.id !== movie.id)
      : [...saved, movie];

    if (typeof window !== "undefined") {
      localStorage.setItem("savedMovies", JSON.stringify(newSaved));
    }
    set({ saved: newSaved });
  },

  auth: null,
  setAuth: (user) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
    }
    set({ auth: user });
  },
  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
    }
    set({ auth: null });
  },
}));
