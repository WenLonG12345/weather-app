import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ISearchHistory } from "../../types/history";

interface IUserStore {
  theme?: "light" | "dark";
  history?: ISearchHistory[];

  setTheme: (theme: "light" | "dark") => void;
  addHistory?: (history: ISearchHistory) => void;
  deleteHistory?: (id: string) => void;
}

export const useUserStore = create(
  persist<IUserStore>(
    (set, get) => ({
      theme: "light",
      history: [],
      setTheme: (theme) => {
        document.documentElement.setAttribute("data-theme", theme);
        set({ theme });
      },
      addHistory: (history) =>
        set({ history: [...(get().history || []), history] }),
      deleteHistory: (id) =>
        set({
          history: (get().history || []).filter((item) => item.id !== id),
        }),
    }),
    {
      name: "weather-app",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
