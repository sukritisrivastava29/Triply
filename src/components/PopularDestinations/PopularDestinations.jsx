import { destinations } from "../../data/destination";
import DestinationCard from "../DestinationCard/DestinationCard";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function PopularDestinations() {
  const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const categories = [
  "All",
  "Beach",
  "City",
  "History",
  "Mountain",
  "Nature",
  "Luxury",
];
const filteredDestinations = destinations.filter((place) => {
  const matchName = place.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchCategory =
    category === "All" || place.category === category;

  return matchName && matchCategory;
});
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900">
          Popular Destinations
        </h2>

       <p className="text-center text-slate-600 mt-4">
  {destinations.length} Amazing Destinations waiting for your next adventure.
</p>

        <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30}
  navigation
  pagination={{ clickable: true }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  }}
>
  {filteredDestinations.map((place) => (
    <SwiperSlide key={place.id}>
      <DestinationCard place={place} />
    </SwiperSlide>
  ))}
</Swiper>
      </div>
    </section>
  );
}

export default PopularDestinations;