function Navbar({ onAddProduct }) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="text-xl font-bold text-blue-700 cursor-pointer">
          <img
            className="w-45"
            src="https://files.ox-sys.com/cache/original/image/c0/13/31/c013312f35d937c5ebde4dd15f3d5ec7751d43ba80b16e1b9b12ad13213d5c23.png"
            alt="logo"
          />
        </a>
        <button
          onClick={onAddProduct}
          className="rounded-lg bg-pink-500 px-4 py-2 font-medium text-white cursor-pointer hover:bg-pink-700"
        >
          ADD PRODUCT
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
