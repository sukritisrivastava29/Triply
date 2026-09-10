import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all the fields.");
      return;
    }

    alert("Login Successful! (Frontend Demo)");
    navigate("/");
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-slate-800">
            Welcome Back 👋
          </h1>

          <p className="text-slate-500 mt-3">
            Sign in to continue exploring Triply
          </p>

        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
            />

          </div>

          <div>

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 outline-none"
            />

          </div>

          <div className="flex justify-between items-center text-sm">

            <label className="flex items-center gap-2 text-slate-600">

              <input type="checkbox" />

              Remember me

            </label>

            <Link
              to="/forgot-password"
              className="text-orange-500 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Sign In
          </button>

        </form>

        <div className="my-6 flex items-center">

          <div className="flex-1 border-t"></div>

          <span className="px-4 text-slate-400 text-sm">
            OR
          </span>

          <div className="flex-1 border-t"></div>

        </div>
<button
  className="w-full border py-3 rounded-xl mt-4"
  disabled
>
  Continue with Google (Coming Soon)
</button>

        <p className="text-center mt-8 text-slate-600">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-orange-500 font-semibold hover:underline"
          >
            Create Account
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;