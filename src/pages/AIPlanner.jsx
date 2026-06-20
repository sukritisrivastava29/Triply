import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { generateTrip } from "../services/gemini";
 import { useRef } from "react";
 import { Link } from "react-router-dom";

function AIPlanner() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [style, setStyle] = useState("");
  const resultRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [trip, setTrip] = useState("");

  const handleGenerate = async () => {
    if (!destination || !days || !budget || !style) {
      alert("Please fill all the fields.");
      return;
    }

    setLoading(true);
    setTrip("");
    setTimeout(() => {
  resultRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, 100);
 
  
    try {
   const prompt = `
You are an expert travel planner.

Create a professional travel itinerary.

Destination: ${destination}
Duration: ${days} days
Budget: ${budget}
Travel Style: ${style}

Do NOT use markdown symbols like #, ##, *, or ---.

Use clean section titles exactly like this:

🌍 Trip Overview

💰 Estimated Budget

☀️ Best Time to Visit

📅 Day 1

Morning:
Afternoon:
Evening:

📅 Day 2

Morning:
Afternoon:
Evening:

Continue until Day ${days}.

🍽️ Food to Try

🎒 Packing List

💡 Travel Tips

Keep the itinerary realistic, detailed, and visually clean.
`;
      const response = await generateTrip(prompt);
      setTrip(response);
      setTimeout(() => {
  resultRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, 100);
    } catch (err) {
      console.error(err);
      setTrip("❌ Unable to generate your itinerary.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-32 px-6">

        <div className="max-w-4xl mx-auto">

          <div className="text-center">

            <h1 className="text-5xl font-extrabold text-slate-800">
              ✈️ AI Trip Planner
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Plan your dream vacation in seconds using AI.
            </p>

          </div>

          <div className="mt-10 bg-white rounded-3xl shadow-2xl p-8">

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="🌍 Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <input
                type="number"
                placeholder="📅 Number of Days"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <input
                type="text"
                placeholder="💰 Budget (₹50,000)"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
              >
                <option value="">🎒 Travel Style</option>
                <option>Adventure</option>
                <option>Luxury</option>
                <option>Budget</option>
                <option>Solo</option>
                <option>Family</option>
                <option>Romantic</option>
                <option>Nature</option>
              </select>

            </div>

            <button
              disabled={loading}
              onClick={handleGenerate}
              className={`mt-6 w-full py-4 rounded-xl font-semibold text-white transition duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-500 to-rose-500 hover:scale-105"
              }`}
            >
              {loading ? "✨ Planning your trip..." : "🚀 Generate AI Trip"}
            </button>

            {loading && (
              <div className="flex flex-col items-center mt-8">

                <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

                <p className="mt-4 text-slate-500 animate-pulse">
                  ✈️ Searching attractions...

🏨 Finding hotels...

🍜 Discovering local cuisine...

🗺️ Planning your journey...

🎉 Almost done...
                </p>

              </div>
            )}

          </div>

          {trip && (
            <div
            ref={resultRef}
           className="mt-12 bg-white rounded-3xl shadow-xl border border-orange-100 p-10">

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-3xl font-bold text-orange-500">
                  🌍 Your AI Travel Plan
                </h2>

                <p className="text-slate-500 mt-2">
Personalized itinerary generated with AI
</p>

                <div className="flex gap-3">

 <button
      onClick={() => navigator.clipboard.writeText(trip)}
      className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl transition"
    >
      📋 Copy
    </button>

    <button
      onClick={() => setTrip("")}
      className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-5 py-2 rounded-xl transition"
    >
      🔄 Generate Again
    </button>

  </div>

</div>

<hr className="my-6 border-orange-100" />
              <article className="prose prose-lg max-w-none leading-8 prose-headings:text-orange-600 prose-strong:text-slate-800 prose-p:text-slate-700 prose-li:text-slate-700">
                <ReactMarkdown>{trip}</ReactMarkdown>
              </article>

            </div>
          )}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default AIPlanner;