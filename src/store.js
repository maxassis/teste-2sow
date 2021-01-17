import create from "zustand";

export const useStore = create((set) => ({
  show: true,

  truer: () =>
    set((state) => ({
      show: true,
    })),

  falser: () =>
    set((state) => ({
      show: false,
    })),
}));
