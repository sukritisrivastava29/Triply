import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <Link
            to="/"
            className="text-3xl font-bold text-orange-500"
          >
            Triply
          </Link>

          <p className="mt-4 text-slate-400 leading-7">
            Explore breathtaking destinations, book unforgettable
            experiences, and create memories that last forever.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Company
          </h3>

          <ul className="space-y-3 text-slate-400">

            <li>
              <Link
                to="/"
                className="hover:text-orange-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-orange-400 transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/destinations"
                className="hover:text-orange-400 transition"
              >
                Destinations
              </Link>
            </li>

            <li>
              <Link
                to="/packages"
                className="hover:text-orange-400 transition"
              >
                Packages
              </Link>
            </li>

          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Services
          </h3>

          <ul className="space-y-3 text-slate-400">

            <li>
              <Link
                to="/ai-planner"
                className="hover:text-orange-400 transition"
              >
                AI Planner
              </Link>
            </li>

            <li>
              <Link
                to="/book"
                className="hover:text-orange-400 transition"
              >
                Book Now
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-orange-400 transition"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="hover:text-orange-400 transition"
              >
                Login
              </Link>
            </li>

          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Legal
          </h3>

          <ul className="space-y-3 text-slate-400">

            <li>
              <Link
                to="/privacy"
                className="hover:text-orange-400 transition"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                to="/terms"
                className="hover:text-orange-400 transition"
              >
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                className="hover:text-orange-400 transition"
              >
                Create Account
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-orange-400 transition"
              >
                Support
              </Link>
            </li>

          </ul>
        </div>

      </div>

      <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500">
        © 2026 Triply. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;