function SearchBar() {
  return (
    <section className="bg-amber-50 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="📍 Destination"
            className="border rounded-xl p-4 outline-none focus:border-orange-500"
          />

          <input
            type="date"
            className="border rounded-xl p-4 outline-none focus:border-orange-500"
          />

          <select className="border rounded-xl p-4 outline-none focus:border-orange-500">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4+ Guests</option>
          </select>

          <button className="bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-xl font-semibold hover:scale-105 transition">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;