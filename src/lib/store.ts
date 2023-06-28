import { create } from "zustand";

interface SideNavigationState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

type DeleteModalTarget = "board" | "task";

interface DeleteModalState {
  isOpen: boolean;
  target?: DeleteModalTarget;
  open: (target: DeleteModalTarget) => void;
  close: () => void;
}

export const useSideNavigationStore = create<SideNavigationState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export const useDeleteModalStore = create<DeleteModalState>((set) => ({
  isOpen: false,
  target: "board",
  open: (target) => set({ isOpen: true, target: target }),
  close: () => set({ isOpen: false }),
}));
