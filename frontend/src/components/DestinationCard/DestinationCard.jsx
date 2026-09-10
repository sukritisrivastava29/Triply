import { Link } from "react-router-dom";

function DestinationCard({ place }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2  hover:scale-[1.02] transition duration-300">

      <img
        src={place.image}
        alt={place.name}
        className="h-70 w-full object-cover"
      />

      <div className="p-5">

        <div className="flex justify-between items-start">

          <div>
            <h2 className="text-2xl font-bold">
              {place.name}
            </h2>

            <p className="text-slate-500">
              {place.country}
            </p>
          </div>

          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-semibold">
            ⭐ {place.rating}
          </span>

        </div>

        <div className="flex justify-between mt-5 text-sm text-slate-500">

          <span>🕒 {place.duration}</span>

          <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full">
            {place.category}
          </span>

        </div>

        <p className="mt-3 text-slate-600 line-clamp-2">
          {place.description}
        </p>

        <div className="mt-4 flex justify-between items-center">

          <div>

            <p className="text-sm text-slate-500">
              Starting From

            </p>

            <h3 className="text-2xl font-bold text-orange-500">
              {place.price}
            </h3>

          </div>

        </div>

        <div className="flex gap-3 mt-6">

          <Link
            to="/ai-planner"
            className="flex-1 border border-orange-500 text-orange-500 text-center py-2 rounded-full hover:bg-orange-50 transition"
          >
            ✨ AI Planner
          </Link>

          <Link
            to={`/destination/${place.id}`}
            className="flex-1 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-center py-2 rounded-full hover:scale-105 transition"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
}

export default DestinationCard;