import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductModal from "./components/ProductModal";
import SearchBar from "./components/SearchBar";
import { startingProducts } from "./data/data";

const emptyProductForm = {
  name: "",
  brand: "",
  category: "Phone",
  price: "",
  image: "",
};

function App() {
  const [products, setProducts] = useState(startingProducts);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState(emptyProductForm);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function handleAddProduct(event) {
    event.preventDefault();

    const newProduct = {
      ...form,
      id: Date.now(),
      price: Number(form.price),
    };

    setProducts([...products, newProduct]);
    setForm(emptyProductForm);
    setIsModalOpen(false);
  }

  function handleDeleteProduct(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  const filteredProducts = products.filter((product) => {
    const searchText = search.toLowerCase();

    return (
      product.name.toLowerCase().includes(searchText) ||
      product.brand.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar onAddProduct={() => setIsModalOpen(true)} />

      <main className="mx-auto max-w-6xl px-5 py-8">
        <SearchBar search={search} onSearchChange={setSearch} />
        <ProductList
          products={filteredProducts}
          onDeleteProduct={handleDeleteProduct}
        />
      </main>

      {isModalOpen && (
        <ProductModal
          form={form}
          onInputChange={handleInputChange}
          onAddProduct={handleAddProduct}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
