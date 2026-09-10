import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PopularDestinations from "../components/PopularDestinations/PopularDestinations";
import { useSearchParams } from "react-router-dom";
function Destinations() {
const [searchParams] = useSearchParams();
const destination = searchParams.get("destination");
const date = searchParams.get("date");
const guests = searchParams.get("guests");

console.log(destination, date, guests);
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