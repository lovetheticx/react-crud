function SearchBar({ search, onSearchChange }) {
  return (
    <input
      type="search"
      value={search}
      onChange={(event) => onSearchChange(event.target.value)}
      placeholder="Search products..."
      className="mb-8 w-full rounded-lg border border-pink-300 bg-white px-4 py-3 outline-none focus:border-pink-500"
    />
  );
}

export default SearchBar;
