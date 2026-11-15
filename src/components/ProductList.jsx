import ProductCard from "./ProductCard";

function ProductList({ products, onDeleteProduct }) {
  if (products.length === 0) {
    return (
      <p className="rounded-lg bg-white p-8 text-center text-gray-600">
        No products found.
      </p>
    );
  }

  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDeleteProduct={onDeleteProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;
