"use client";

import { useCarStore } from "@/store";
import { Button } from "./ui/button";
import RemoveFromCart from "./RemoveFromCart";

const AddToCart = ({ product }: any) => {
  const [cart, addToCart] = useCarStore((state) => [
    state.cart,
    state.addToCard,
  ]);

  const howManyInCart = cart.filter(
    (item: any) => item.meta.sku === product.meta.sku
  ).length;

  const handleAdd = () => {
    addToCart(product);
  };

  if (howManyInCart > 0) {
    return (
      <div className="flex space-x-5 items-center">
        <RemoveFromCart product={product} />

        <span>{howManyInCart}</span>
        <Button onClick={handleAdd} className="bg-walmart hover:bg-walmart/50">
          +
        </Button>
      </div>
    );
  }

  return (
    <Button
      className="bg-walmart hover:bg-walmart/50"
      onClick={() => handleAdd()}
    >
      AddToCart
    </Button>
  );
};

export default AddToCart;
