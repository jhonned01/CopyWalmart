"use client";

import { useCarStore } from "@/store";
import { Button } from "./ui/button";

const RemoveFromCart = ({ product }: any) => {
  const removeFromCart = useCarStore((state) => state.removeFromCart);

  const handleRemove = () => {
    removeFromCart(product);
  };

  return (
    <Button
      className="bg-walmart hover:bg-walmart/50"
      onClick={() => handleRemove()}
    >
      -
    </Button>
  );
};

export default RemoveFromCart;
