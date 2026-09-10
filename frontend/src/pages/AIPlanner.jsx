import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { generateTrip } from "../services/gemini";
 import { useRef } from "react";
 import { Link } from "react-router-dom";
 import { Copy, RotateCcw } from "lucide-react";

function AIPlanner() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [style, setStyle] = useState("");
  const [copied, setCopied] = useState(false);
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

Create a travel itinerary.

Destination: ${destination}
Duration: ${days} days
Budget: ${budget}
Travel Style: ${style}

The amount of detail should depend on the trip duration.

Rules:
- 1 day: Keep the itinerary under 150 words.
- 2-3 days: Keep it under 250 words.
- 4-7 days: Keep it under 450 words.
- More than 7 days: Keep it under 700 words.

For each day include:
Morning:
Afternoon:
Evening:

Use only one activity for each time slot.

Also include:
- 🌍 Trip Overview (2 sentences)
- 💰 Estimated Budget (1 sentence)
- ☀️ Best Time to Visit (1 sentence)
- 🍽️ Must-Try Foods (3 items)
- 🎒 Packing List (5 items)
- 💡 Travel Tips (3 tips)

Return the response in Markdown using ## headings.
Do not write long paragraphs.
Keep activities short and easy to scan.
`;  const response = await generateTrip(prompt);
      setTrip(response);
      setTimeout(() => {
  resultRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, 100);
    }catch (error) {
  console.error(error);

  if (error.message.includes("429")) {
    return "⚠️ AI service is temporarily busy. Please try again in a few seconds.";
  }

  return "❌ Failed to generate itinerary.";
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
    className="mt-12 bg-white rounded-3xl shadow-xl border border-orange-100 p-6 md:p-10"
  >
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

      {/* Title */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          ✈️ Your Personalized Itinerary
        </h2>

        <p className="mt-2 text-sm md:text-base text-slate-500">
          Crafted by AI based on your destination, budget and travel style.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex w-full md:w-auto gap-3">

        <button
          onClick={() => {
            navigator.clipboard.writeText(trip);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="flex-1 md:flex-none flex items-center justify-center gap-2 border border-slate-200 bg-white px-4 py-2 rounded-lg text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:shadow-md transition-all duration-200"
        >
          <Copy size={16} />
          {copied ? "Copied!" : "Copy"}
        </button>

        <button
          onClick={() => {
            setTrip("");
            setDestination("");
            setDays("");
            setBudget("");
            setStyle("");
            setCopied(false);
          }}
          className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        >
          <RotateCcw size={16} />
          New Trip
        </button>

      </div>
    </div>

    <hr className="my-6 border-orange-100" />

    {/* Itinerary */}
    <article
      className="
        prose
        prose-lg
        max-w-none
        leading-8
        prose-headings:text-orange-600
        prose-headings:font-bold
        prose-h2:text-2xl
        prose-h3:text-xl
        prose-strong:text-slate-800
        prose-p:text-slate-700
        prose-li:text-slate-700
        prose-li:marker:text-orange-500
      "
    >
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