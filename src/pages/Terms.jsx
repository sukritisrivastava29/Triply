import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Terms() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-28 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">

          <h1 className="text-5xl font-bold text-slate-800 mb-8">
            Terms & Conditions 📄
          </h1>

          <p className="text-slate-600 leading-8 mb-8">
            Welcome to <span className="font-semibold text-orange-500">Triply</span>.
            By accessing or using this website, you agree to comply with the
            following Terms & Conditions. Please read them carefully before
            using our services.
          </p>

          <div className="space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                1. Acceptance of Terms
              </h2>

              <p className="text-slate-600 leading-8">
                By using Triply, you agree to these Terms & Conditions and all
                applicable laws and regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                2. AI Travel Planner
              </h2>

              <p className="text-slate-600 leading-8">
                The AI-generated itineraries are intended for informational
                purposes only. Travel plans, prices, weather, and availability
                may change and should be verified before booking.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                3. Bookings
              </h2>

              <p className="text-slate-600 leading-8">
                Booking requests submitted through Triply do not guarantee a
                confirmed reservation until approved by the travel provider.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                4. User Responsibilities
              </h2>

              <p className="text-slate-600 leading-8">
                Users are responsible for providing accurate information and
                using the website responsibly. Misuse of the platform may
                result in restricted access.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                5. Limitation of Liability
              </h2>

              <p className="text-slate-600 leading-8">
                Triply is not liable for travel disruptions, cancellations,
                delays, or losses resulting from third-party travel providers
                or unforeseen circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                6. Changes to These Terms
              </h2>

              <p className="text-slate-600 leading-8">
                We reserve the right to update these Terms & Conditions at any
                time. Continued use of the website constitutes acceptance of
                any revised terms.
              </p>
            </div>

          </div>

          <div className="mt-10 border-t pt-6 text-sm text-slate-500">
            Last Updated: June 2026
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Terms;