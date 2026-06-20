import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Account Created Successfully! (Frontend Demo)");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-slate-800">
            Create Account ✨
          </h1>

          <p className="text-slate-500 mt-3">
            Join Triply and start planning your dream trips.
          </p>

        </div>

        <form onSubmit={handleRegister} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-8 text-slate-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;