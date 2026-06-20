import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
const destinations = [
  {
    name: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    price: "₹45,999",
    rating: "4.9",
  },
  {
    name: "Paris",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    price: "₹79,999",
    rating: "4.8",
  },
  {
    name: "Dubai",
    country: "UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    price: "₹54,999",
    rating: "4.7",
  },
  {
    name: "Tokyo",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    price: "₹92,999",
    rating: "4.9",
  },
  {
    name: "Maldives",
    country: "Maldives",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800",
    price: "₹69,999",
    rating: "4.9",
  },
  {
    name: "Goa",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
    price: "₹14,999",
    rating: "4.6",
  },
];

function Destinations() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <h1 className="text-5xl font-extrabold text-slate-800">
              Explore Destinations 🌍
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Discover amazing places around the world for your next adventure.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {destinations.map((place) => (

              <div
                key={place.name}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >

                <img
                  src={place.image}
                  alt={place.name}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">

                  <div className="flex justify-between items-center">

                    <div>

                      <h2 className="text-2xl font-bold text-slate-800">
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

                  <div className="mt-6">

  <div className="mb-4">

    <p className="text-slate-500 text-sm">
      Starting From
    </p>

    <p className="text-2xl font-bold text-orange-500">
      {place.price}
    </p>

  </div>

  <div className="flex gap-3">

    <Link
      to="/ai-planner"
      className="flex-1 text-center border border-orange-500 text-orange-500 py-2 rounded-full hover:bg-orange-50 transition"
    >
      ✨ Plan with AI
    </Link>

    <Link
      to="/book"
      className="flex-1 text-center bg-gradient-to-r from-orange-500 to-rose-500 text-white py-2 rounded-full hover:scale-105 transition"
    >
      📅 Book
    </Link>

  </div>

</div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Destinations;