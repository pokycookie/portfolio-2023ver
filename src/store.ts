import { create } from "zustand";

interface IWindowState {
  width: number;
  height: number;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
}
export const useWindowStore = create<IWindowState>((set) => ({
  width: 0,
  height: 0,
  setWidth: (width) => set(() => ({ width })),
  setHeight: (height) => set(() => ({ height })),
}));
