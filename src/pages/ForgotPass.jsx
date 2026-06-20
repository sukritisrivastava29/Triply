import { Link } from "react-router-dom";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10">

        {!submitted ? (
          <>
            <h1 className="text-3xl font-bold text-center text-slate-800">
              Forgot Password?
            </h1>

            <p className="text-center text-slate-500 mt-3 mb-8">
              Enter your email and we'll send you a password reset link.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Send Reset Link
              </button>

            </form>
          </>
        ) : (
          <>
            <div className="text-center">

              <div className="text-6xl mb-4">
                📧
              </div>

              <h2 className="text-2xl font-bold text-slate-800">
                Check Your Email
              </h2>

              <p className="text-slate-500 mt-4">
                If an account exists with this email, we've sent a password reset link.
              </p>

            </div>
          </>
        )}

        <div className="text-center mt-8">

          <Link
            to="/login"
            className="text-orange-500 hover:underline font-medium"
          >
            ← Back to Sign In
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;