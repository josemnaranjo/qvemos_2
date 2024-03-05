import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set) => ({
    anfitrion: false,
    setAnfitrion: (value) => set({ anfitrion: value }),
  }))
);

export default useStore;
