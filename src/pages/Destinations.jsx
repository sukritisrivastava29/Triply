import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PopularDestinations from "../components/PopularDestinations/PopularDestinations";

function Destinations() {
  return (
    <>
      <Navbar />

      <div className="pt-24 bg-amber-50 min-h-screen">
        <PopularDestinations />
      </div>

      <Footer />
    </>
  );
}

export default Destinations;