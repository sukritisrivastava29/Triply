import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

const packages = [
  {
    id: 1,
    title: "Bali Escape",
    duration: "5 Days / 4 Nights",
    price: "₹45,999",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
  },
  {
    id: 2,
    title: "Paris Getaway",
    duration: "6 Days / 5 Nights",
    price: "₹79,999",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
  },
  {
    id: 3,
    title: "Dubai Adventure",
    duration: "4 Days / 3 Nights",
    price: "₹54,999",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
  },
  {
    id: 4,
    title: "Tokyo Explorer",
    duration: "7 Days / 6 Nights",
    price: "₹92,999",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
  },
  {
    id: 5,
    title: "Maldives Luxury",
    duration: "5 Days / 4 Nights",
    price: "₹69,999",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800",
  },
  {
    id: 6,
    title: "Goa Weekend",
    duration: "3 Days / 2 Nights",
    price: "₹14,999",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
  },
];

function Packages() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <h1 className="text-5xl font-extrabold text-slate-800">
              Travel Packages 📦
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Handpicked packages designed for unforgettable experiences.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {packages.map((pkg) => (

              <div
                key={pkg.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition"
              >

                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-60 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold text-slate-800">
                    {pkg.title}
                  </h2>

                  <p className="text-slate-500 mt-2">
                    {pkg.duration}
                  </p>

                  <h3 className="text-3xl font-bold text-orange-500 mt-5">
                    {pkg.price}
                  </h3>

                  <div className="mt-6 flex gap-3">

                    <Link
                      to="/ai-planner"
                      className="flex-1 text-center border-2 border-orange-500 text-orange-500 py-3 rounded-full font-semibold hover:bg-orange-50 transition"
                    >
                      ✨ AI Planner
                    </Link>

                    <Link
                      to="/book"
                      className="flex-1 text-center bg-gradient-to-r from-orange-500 to-rose-500 text-white py-3 rounded-full font-semibold hover:scale-105 transition"
                    >
                      📅 Book
                    </Link>

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

export default Packages;