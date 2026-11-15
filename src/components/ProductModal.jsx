function ProductModal({ form, onInputChange, onAddProduct, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold">Add a product</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-2xl text-pink-500 hover:text-pink-800"
          >
            ×
          </button>
        </div>

        <form onSubmit={onAddProduct} className="space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Name</span>
            <input
              name="name"
              value={form.name}
              onChange={onInputChange}
              required
              className="w-full rounded-lg border border-pink-300 px-3 py-2 outline-pink-500"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium">Brand</span>
            <input
              name="brand"
              value={form.brand}
              onChange={onInputChange}
              required
              className="w-full rounded-lg border border-pink-300 px-3 py-2  outline-pink-500"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium">Category</span>
            <select
              name="category"
              value={form.category}
              onChange={onInputChange}
              className="w-full rounded-lg border border-pink-300 px-3 py-2  outline-pink-500"
            >
              <option>Phone</option>
              <option>Tablet</option>
              <option>Laptop</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium">Price</span>
            <input
              name="price"
              type="number"
              min="0"
              step="0.01"
              value={form.price}
              onChange={onInputChange}
              required
              className="w-full rounded-lg border border-pink-300 px-3 py-2  outline-pink-500"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium">Image URL</span>
            <input
              name="image"
              type="url"
              value={form.image}
              onChange={onInputChange}
              required
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-lg border border-pink-300 px-3 py-2  outline-pink-500"
            />
          </label>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-pink-500 px-4 py-2 hover:bg-pink-50 text-pink-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-pink-600 px-4 py-2 font-medium text-white hover:bg-pink-700"
            >
              Add product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductModal;
