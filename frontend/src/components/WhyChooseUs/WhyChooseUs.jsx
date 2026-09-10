function WhyChooseUs() {
  const features = [
    {
      icon: "✈️",
      title: "Best Flight Deals",
      desc: "Find affordable flights to your dream destinations."
    },
    {
      icon: "🏨",
      title: "Luxury Hotels",
      desc: "Stay at handpicked premium hotels with great reviews."
    },
    {
      icon: "🛡️",
      title: "Safe Travel",
      desc: "Trusted bookings with secure payment and support."
    },
    {
      icon: "🎧",
      title: "24/7 Support",
      desc: "Our travel experts are always here to help you."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Why Choose Triply?
        </h2>

        <p className="text-center text-slate-500 mt-4 mb-14">
          Everything you need for a smooth and unforgettable journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-amber-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;