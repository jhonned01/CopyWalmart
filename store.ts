import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CardState {
  cart: [];
  addToCard: (product: any) => void;
  removeFromCart: (product: any) => void;
}

export const useCarStore = create<CardState>()(
  devtools(
    persist(
      (set: any, get: any) => ({
        cart: [],
        removeFromCart(product: any) {
          const ProductToRemove = get().cart.findIndex(
            (p: any) => p.meta.sku === product.meta.sku
          );

          set((state: any) => {
            const newCart = [...state.cart];

            newCart.splice(ProductToRemove, 1);
            return {
              cart: newCart,
            };
          });
        },
        addToCard: (product: any) => {
          set((state: any) => ({
            cart: [...state.cart, product],
          }));
        },
      }),

      {
        name: "shopping-cart-torage",
      }
    )
  )
);
