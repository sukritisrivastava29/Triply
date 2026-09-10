import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Privacy() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-28 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">

          <h1 className="text-5xl font-bold text-slate-800 mb-8">
            Privacy Policy 🔒
          </h1>

          <p className="text-slate-600 leading-8 mb-8">
            At <span className="font-semibold text-orange-500">Triply</span>,
            we value your privacy. This Privacy Policy explains how we collect,
            use, and protect your information while you use our website.
          </p>

          <div className="space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                1. Information We Collect
              </h2>

              <p className="text-slate-600 leading-8">
                We may collect your name, email address, travel preferences,
                and booking details when you interact with our website or submit
                forms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                2. How We Use Your Information
              </h2>

              <p className="text-slate-600 leading-8">
                Your information is used to improve your travel experience,
                generate personalized itineraries, process booking requests,
                and provide customer support.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                3. Data Security
              </h2>

              <p className="text-slate-600 leading-8">
                We implement reasonable security measures to protect your data.
                However, no online service can guarantee complete security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                4. Third-Party Services
              </h2>

              <p className="text-slate-600 leading-8">
                Triply may use third-party services such as AI providers and
                analytics tools to enhance functionality. These services have
                their own privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                5. Your Rights
              </h2>

              <p className="text-slate-600 leading-8">
                You may request access to, correction of, or deletion of your
                personal information by contacting us.
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

export default Privacy;