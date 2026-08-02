function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-8">
      <label htmlFor="project-search" className="sr-only">
        Search projects
      </label>
      <input
        id="project-search"
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search projects by client, title, or category..."
        className="w-full border border-line bg-white px-4 py-3 font-mono text-sm text-ink placeholder:text-slate focus-visible:outline-2 focus-visible:outline-cobalt"
      />
    </div>
  );
}

export default SearchBar;
