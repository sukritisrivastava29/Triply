import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/destinations" },
       { name: "✨ AI Planner", path: "/ai-planner" },
    { name: "Packages", path: "/packages" },

    
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-orange-100">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent"
        >
          Triply
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-slate-700 hover:text-orange-500 transition duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
         <Link
  to="/login"
  className="font-medium text-slate-700 hover:text-orange-500 transition"
>
  Sign In
</Link>

          <Link
  to="/book"
  className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-6 py-2.5 rounded-full hover:scale-105 transition shadow-lg"
>
  Book Now
</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-slate-800"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-slate-700 hover:text-orange-500 font-medium"
              >
                {link.name}
              </Link>
            ))}

           <Link
  to="/login"
  onClick={() => setMenuOpen(false)}
  className="text-left font-medium text-slate-700 hover:text-orange-500"
>
  Sign In
</Link>

<Link
  to="/book"
  onClick={() => setMenuOpen(false)}
  className="bg-gradient-to-r from-orange-500 to-rose-500 text-white py-3 rounded-full text-center"
>
  Book Now
</Link></div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;