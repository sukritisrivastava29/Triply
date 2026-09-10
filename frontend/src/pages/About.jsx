import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-24 px-6">

        <div className="max-w-6xl mx-auto">

          {/* Hero */}
          <div className="text-center mb-16">

            <h1 className="text-5xl font-extrabold text-slate-800">
              About Triply 🌍
            </h1>

            <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
              Triply is a modern travel platform designed to make planning your
              next adventure simple, personalized, and exciting with the power
              of AI.
            </p>

          </div>

          {/* Mission */}
          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl mb-4">🎯</div>

              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                Our Mission
              </h2>

              <p className="text-slate-600 leading-8">
                We believe every traveler deserves a personalized experience.
                Triply combines intuitive design with AI-powered recommendations
                to help users discover destinations, build itineraries, and plan
                unforgettable trips.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl mb-4">🚀</div>

              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                Why Triply?
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>✅ AI-powered travel planning</li>
                <li>✅ Beautiful and responsive interface</li>
                <li>✅ Easy trip booking experience</li>
                <li>✅ Personalized travel recommendations</li>
                <li>✅ Built with React & Tailwind CSS</li>
              </ul>

            </div>

          </div>

          {/* Features */}
          <div className="mt-20">

            <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">
              What We Offer
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

                <div className="text-5xl mb-4">✈️</div>

                <h3 className="text-xl font-bold mb-3">
                  Smart Planning
                </h3>

                <p className="text-slate-600">
                  Generate complete travel itineraries in seconds using AI.
                </p>

              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

                <div className="text-5xl mb-4">🏨</div>

                <h3 className="text-xl font-bold mb-3">
                  Travel Packages
                </h3>

                <p className="text-slate-600">
                  Explore curated destinations and travel experiences.
                </p>

              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

                <div className="text-5xl mb-4">🌎</div>

                <h3 className="text-xl font-bold mb-3">
                  Global Destinations
                </h3>

                <p className="text-slate-600">
                  Discover amazing places across the world with ease.
                </p>

              </div>

            </div>

          </div>

          {/* Call To Action */}
          <div className="mt-20 bg-gradient-to-r from-orange-500 to-rose-500 rounded-3xl text-white text-center p-12">

            <h2 className="text-4xl font-bold mb-4">
              Ready for Your Next Adventure?
            </h2>

            <p className="text-lg mb-8">
              Let Triply create the perfect travel plan for you.
            </p>

            <Link
  to="/ai-planner"
  className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition inline-block"
>
  Try AI Planner
</Link>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;