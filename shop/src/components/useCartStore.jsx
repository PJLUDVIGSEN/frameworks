import {create} from "zustand"

const useCartStore = create((set) => ({
  cartCount: 0,
  products: [],
  totalPrice: 0,
  deleteEverything: () => set({
    cartCount: 0,
    products: [],
    totalPrice: 0,
  }),
  addToCart: (product) => {
    set((state) => ({
      cartCount: state.cartCount + 1,
      products: [...state.products, product],
      totalPrice: state.totalPrice + product.discountedPrice,
    }));
  },
}));
export { useCartStore };