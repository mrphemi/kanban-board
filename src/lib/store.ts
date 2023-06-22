import { create } from "zustand";

interface SideNavigationState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

type DeleteDialogTarget = "board" | "task";

interface DeleteDialogState {
  isOpen: boolean;
  target?: DeleteDialogTarget;
  setOpen: (open: boolean, target: DeleteDialogTarget) => void;
  close: () => void;
}

export const useSideNavigationStore = create<SideNavigationState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export const useDeleteDialogStore = create<DeleteDialogState>((set) => ({
  isOpen: false,
  target: "board",
  setOpen: (open, target) => set({ isOpen: open, target: target }),
  close: () => set({ isOpen: false }),
}));
