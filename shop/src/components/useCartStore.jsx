import {create} from "zustand"

const useCartStore = create((set) => ({
  cartCount: 0,
  addToCart: (product) => {
    set((state) => ({ cartCount: state.cartCount + 1 }));
  },
}));
export { useCartStore };