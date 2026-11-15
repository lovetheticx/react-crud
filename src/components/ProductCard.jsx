function ProductCard({ product, onDeleteProduct }) {
  return (
    <article className="w-full min-w-0 flex-1 overflow-hidden rounded-xl border border-pink-200 bg-white sm:min-w-[280px]">
      <img
        src={product.image}
        alt={product.name}
        className="h-52 w-full object-cover"
      />
      <div className="p-4">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-pink-500">{product.brand}</p>
          </div>
          <span className="rounded-full bg-pink-50 px-3 py-1 text-sm text-pink-700">
            {product.category}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold">${product.price}</p>
          <button
            onClick={() => onDeleteProduct(product.id)}
            className="rounded-lg border border-pink-200 px-3 py-2 text-sm text-pink-600 cursor-pointer hover:bg-pink-500 hover:text-white hover:border-pink-500"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
