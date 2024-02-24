const groupBySKU = (products: any): Record<string, any[]> => {
  return products.reduce((acc: Record<string, any[]>, el: any) => {
    const sku = el?.meta?.sku;

    if (!acc[sku]) {
      acc[sku] = [];
    }

    acc[sku].push(el); // Modificar para solo acc[sku].push(el);

    return acc; // Devolver el acumulador completo en lugar del resultado de push
  }, {});
};

export default groupBySKU;
