import heroImage from "../../assets/trv2.avif";
import SearchBar from "../SearchBar/SearchBar";
function Hero() {
  return (
    <section
     className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-orange-300 font-semibold tracking-widest uppercase">
          Explore the World
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mt-4">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-white/90 mt-6 max-w-2xl text-lg">
          Find unforgettable destinations, book incredible experiences,
          and create memories that last a lifetime.
        </p>

        <button className="mt-10 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition duration-300 shadow-xl">
          Explore Now
        </button>
      </div>
    </section>
  );
}

export default Hero;