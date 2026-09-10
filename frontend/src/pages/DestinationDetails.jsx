import { Link,useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { destinations } from "../data/destination";

function DestinationDetails() {
  const { id } = useParams();
  const destination = destinations.find(
    (place) => place.id === Number(id)
  );

  if (!destination) {
    return <h1 className="text-center mt-40 text-3xl">Destination Not Found</h1>;
  }

  return (
    <>
      <Navbar />

      <section className="pt-28 pb-20 bg-amber-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">

          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
          />

          <div className="mt-10">

            <h1 className="text-5xl font-bold">
              {destination.name}
            </h1>

            <p className="text-xl text-slate-500 mt-2">
              {destination.country}
            </p>

            <div className="flex gap-8 mt-6 text-lg">

              <p className="text-orange-500 font-bold">
                {destination.price}
              </p>

              <p>
                ⭐ {destination.rating}
              </p>

            </div>

            <p className="mt-8 text-lg text-slate-600 leading-8">
              {destination.description}
            </p>

            <h2 className="text-3xl font-bold mt-10">
              Highlights
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mt-6">

              {destination.highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl shadow"
                >
                  ✅ {item}
                </div>
              ))}

            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

  <Link
    to="/ai-planner"
    className="text-center border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition"
  >
    ✨ Plan with AI
  </Link>

  <Link
    to="/book"
    className="text-center bg-gradient-to-r from-orange-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
  >
    📅 Book Now
  </Link>

</div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default DestinationDetails;