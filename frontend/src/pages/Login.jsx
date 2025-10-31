import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightToBracket } from "react-icons/fa6";


const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Placeholder: replace with real API call
    alert("Logging in! (Hook up API next)");
  };

  return (
    <div className="min-h-[60vh] w-full  flex items-center justify-center animate-fade-in-up py-6">
      <section className="relative w-full max-w-md px-2 sm:px-0">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full ring-1 ring-primary/20 shadow-lg animate-fade-in-up">
          <FaArrowRightToBracket className="w-7 h-7" />
        </div>
        <div className="card mt-9 rounded-2xl shadow-xl bg-white/90 p-8 ring-1 ring-gray-100/70 backdrop-blur-md animate-fade-in-up relative z-0">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-1">
            <span className="text-primary">Welcome</span> Back
          </h1>
          <p className="text-center text-base text-[var(--color-text-muted)] font-medium mb-2">Log in to your MediHub account</p>
          <form onSubmit={onSubmit} className="space-y-5 mt-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                required
                placeholder="you@example.com"
                autoComplete="username"
                className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base outline-none  transition-all focus:border-primary focus:ring-1 focus:ring-primary/50"
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-semibold mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={update}
                required
                placeholder="Password"
                autoComplete="current-password"
                className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 pr-10 text-base outline-none  focus:border-primary focus:ring-1 focus:ring-primary/50"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label="Toggle password visibility"
                className="absolute right-2 top-[38px] rounded p-1 px-2 bg-gray-50 hover:bg-primary/10 transition text-primary text-xs font-bold shadow-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div>
              <button type="submit" className="btn btn-primary w-full rounded-full py-3 shadow-lg text-base font-semibold tracking-wide transition-all hover:scale-[1.025] hover:bg-primary/90">
                Log In
              </button>
            </div>
          </form>
          <p className="mt-7 text-base text-center text-gray-500 font-medium">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-primary underline underline-offset-2 hover:text-brand"
            >
              Register
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;