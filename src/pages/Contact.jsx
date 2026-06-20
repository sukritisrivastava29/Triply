import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <h1 className="text-5xl font-extrabold text-slate-800">
              Contact Us 📩
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              We'd love to hear from you. Send us a message anytime.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Contact Information */}

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6 text-slate-600">

                <div>
                  <h3 className="font-semibold text-slate-800">📍 Address</h3>
                  <p>123 Travel Street, New Delhi, India</p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">📞 Phone</h3>
                  <p>+91 98765 43210</p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">📧 Email</h3>
                  <p>support@triply.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">🕒 Working Hours</h3>
                  <p>Monday - Saturday</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>

              </div>

            </div>

            {/* Contact Form */}

            <div className="bg-white rounded-3xl shadow-xl p-8">

              {!submitted ? (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
                  />

                  <textarea
                    rows="6"
                    placeholder="Write your message..."
                    required
                    className="w-full border rounded-xl p-4 resize-none focus:ring-2 focus:ring-orange-400 outline-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white py-4 rounded-xl font-semibold hover:scale-105 transition"
                  >
                    Send Message
                  </button>

                </form>

              ) : (

                <div className="text-center py-16">

                  <div className="text-6xl mb-6">
                    ✅
                  </div>

                  <h2 className="text-3xl font-bold text-slate-800">
                    Message Sent!
                  </h2>

                  <p className="text-slate-500 mt-4">
                    Thank you for contacting Triply.
                  </p>

                  <p className="text-slate-500">
                    We'll get back to you as soon as possible.
                  </p>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Contact;