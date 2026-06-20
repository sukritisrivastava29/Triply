import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-6">

      <div className="text-center">

        <h1 className="text-8xl font-extrabold text-orange-500">
          404
        </h1>

        <h2 className="mt-4 text-4xl font-bold text-slate-800">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-slate-600 max-w-md mx-auto leading-7">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to planning your next adventure.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            to="/"
            className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            🏠 Back to Home
          </Link>

          <Link
            to="/ai-planner"
            className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition"
          >
            ✨ AI Planner
          </Link>

        </div>

      </div>

    </div>
  );
}

export default NotFound;