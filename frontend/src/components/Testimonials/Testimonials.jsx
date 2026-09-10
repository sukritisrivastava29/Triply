function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "USA",
      review:
        "Triply made planning my vacation effortless. Everything was smooth and the experience was unforgettable.",
    },
    {
      name: "Rahul Sharma",
      location: "India",
      review:
        "The destinations were amazing and the booking process was incredibly simple. Highly recommended!",
    },
    {
      name: "Emma Wilson",
      location: "UK",
      review:
        "Beautiful interface, great support, and the best travel experience I've had online.",
    },
  ];

  return (
    <section className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          What Our Travelers Say
        </h2>

        <p className="text-center text-slate-600 mt-4 mb-14">
          Trusted by thousands of happy explorers worldwide.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>

              <p className="text-slate-600 italic mb-6">
                "{review.review}"
              </p>

              <h3 className="text-xl font-bold">
                {review.name}
              </h3>

              <p className="text-orange-500">
                {review.location}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;