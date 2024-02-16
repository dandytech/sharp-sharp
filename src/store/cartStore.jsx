import { create } from "zustand";

const useCartStore = create((set) => ({
  items: [],
  addToCart: (product) =>
    set((state) => ({ items: [...state.items, product] })),
  removeFromCart: (index) =>
    set((state) => ({ items: state.items.filter((_, i) => i !== index) })),
  clearCart: () => set({ items: [] }),
}));

export default useCartStore;
