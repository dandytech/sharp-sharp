import { create } from "zustand";

const useCartStore = create((set) => ({
  items: [],

  //add to cart
  addToCart: (product) =>
    set((state) => ({ items: [...state.items, product] })),

    //
  removeFromCart: (index) =>
    set((state) => ({ items: state.items.filter((_, i) => i !== index) })),

  //increment qty
  incrementQuantity: (index) =>
    set((state) => {
      const updatedItems = [...state.items];
      updatedItems[index].quantity += 1;
      return { items: updatedItems };
    }),

  //decrement qty
  decrementQuantity: (index) =>
    set((state) => {
      const updatedItems = [...state.items];
      if (updatedItems[index].quantity > 1) {
        updatedItems[index].quantity -= 1;
      }
      return { items: updatedItems };
    }),

  //delete item from cart
  clearCart: () => set({ items: [] }),

  //get total price of items
  getTotalPrice: () => {
    return useCartStore
      .getState()
      .items.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));

export default useCartStore;
