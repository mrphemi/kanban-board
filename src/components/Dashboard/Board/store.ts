import { create } from "zustand";

import { Column } from "@/lib/types";

interface BoardState {
  columns: Column[];
  addColumn: () => void;
  updateColumn: (id: string, name: string) => void;
  deleteColumn: (id: string) => void;
  reset: () => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  columns: [],

  addColumn: () =>
    set((state) => ({
      columns: [...state.columns, { name: "", columnId: crypto.randomUUID() }],
    })),

  updateColumn: (id: string, name: string) =>
    set((state) => {
      const newColumns = state.columns.map((column) => {
        if (column.columnId === id) {
          return { ...column, name: name };
        }

        return column;
      });
      return { columns: newColumns };
    }),

  deleteColumn: (id: string) =>
    set((state) => {
      const newColumns = state.columns.filter(
        (column) => column.columnId !== id
      );
      return { columns: newColumns };
    }),

  reset: () => set({ columns: [] }),
}));
