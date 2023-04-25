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

interface IRefState {
  app: HTMLDivElement | null;
  setApp: (node: HTMLDivElement | null) => void;
  pages: { [key: string]: HTMLDivElement | null };
  addPage: (page: string, node: HTMLDivElement | null) => void;
}
export const useRefStore = create<IRefState>((set) => ({
  app: null,
  setApp: (node) => set(() => ({ app: node })),
  pages: {},
  addPage: (page, node) =>
    set((state) => ({ pages: { ...state.pages, [page]: node } })),
}));

interface IScrollState {
  scroll: "auto" | "hidden";
  setScroll: (lock: boolean) => void;
}
export const useScrollStore = create<IScrollState>((set) => ({
  scroll: "auto",
  setScroll: (lock) => set(() => ({ scroll: lock ? "hidden" : "auto" })),
}));

interface IModalState {
  modalID: string | null;
  openModal: (id: string) => void;
  closeModal: () => void;
}
export const useModalStore = create<IModalState>((set) => ({
  modalID: null,
  openModal: (id) => set(() => ({ modalID: id })),
  closeModal: () => set(() => ({ modalID: null })),
}));
