import { useState } from "react";

function BookNow() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    destination: "",
    date: "",
    guests: "",
    budget: "",
    requests: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.destination ||
      !form.date ||
      !form.guests ||
      !form.budget
    ) {
      alert("Please fill all the required fields.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-32 px-6">

      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded-3xl shadow-2xl p-10">

          {!submitted ? (
            <>
              <div className="text-center mb-10">

                <h1 className="text-4xl font-bold text-slate-800">
                  ✈️ Book Your Dream Trip
                </h1>

                <p className="text-slate-500 mt-3">
                  Fill in your travel details and we'll help plan your perfect vacation.
                </p>

              </div>

              <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-6"
              >

                <input
                  type="text"
                  name="destination"
                  placeholder="🌍 Destination"
                  value={form.destination}
                  onChange={handleChange}
                  className="border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
                />

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
                />

                <input
                  type="number"
                  name="guests"
                  placeholder="👨‍👩‍👧 Guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
                />

                <input
                  type="text"
                  name="budget"
                  placeholder="💰 Budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
                />

                <textarea
                  name="requests"
                  rows="5"
                  placeholder="Special Requests (Optional)"
                  value={form.requests}
                  onChange={handleChange}
                  className="md:col-span-2 border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none resize-none"
                />

                <button
                  type="submit"
                  className="md:col-span-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white py-4 rounded-xl font-semibold hover:scale-105 transition"
                >
                  Submit Booking Request
                </button>

              </form>
            </>
          ) : (
            <div className="text-center py-16">

              <div className="text-6xl mb-6">
                🎉
              </div>

              <h2 className="text-3xl font-bold text-slate-800">
                Booking Request Submitted!
              </h2>

              <p className="text-slate-500 mt-4">
                Thank you for choosing Triply.
              </p>

              <p className="text-slate-500">
                Our travel experts will contact you shortly.
              </p>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default BookNow;