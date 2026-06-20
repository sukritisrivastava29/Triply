 function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-r from-orange-500 to-rose-500">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold text-white">
          Stay Informed
        </h2>

        <p className="text-white/90 mt-5 text-lg">
          Subscribe to receive exclusive travel deals, destination guides,
          and adventure inspiration straight to your inbox.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-full w-full md:w-96 outline-none text-slate-800"
          />

          <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;