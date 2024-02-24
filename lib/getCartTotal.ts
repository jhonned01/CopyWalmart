export function getCartTotal(products: any) {
  const total = products.reduce((acc: number, el: any) => acc + el.price, 0);

  return `${products[0]?.currency || ""} ${total.toFixed(2)}`;
}
