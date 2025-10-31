import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa6";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    dob: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Placeholder: integrate API call here
    console.log("Registering patient:", form);
    alert("Registration submitted! (Hook up API next)");
  };

  return (
    <div className="min-h-[93vh] w-full  flex items-center justify-center py-6 animate-fade-in-up">
      <section className="relative w-full max-w-2xl px-2 sm:px-0">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full ring-1 ring-primary/10 shadow-lg">
            <FaUserPlus className="w-7 h-7" />
          </div>
        </div>
        <div className="card relative z-0 mt-9 rounded-2xl drop-shadow-xl bg-white/90 p-8 ring-1 ring-gray-100/70 backdrop-blur-md animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-1">
            <span className="text-primary">Create</span> your MediHub account
          </h1>
          <p className="mt-1 text-center text-base text-[var(--color-text-muted)] font-medium mb-2">
            Patient registration is fast and secure.
          </p>
          <p className="mb-2 text-center text-sm text-gray-500 font-medium">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-primary underline underline-offset-2 hover:text-brand"
            >
              Log in
            </Link>
          </p>
          <form
            onSubmit={onSubmit}
            className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 "
          >
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold mb-1">
                Full name
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={update}
                required
                placeholder="John Doe"
                className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base outline-none  transition-all focus:border-primary focus:ring-1 focus:ring-primary/50"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                required
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base outline-none  transition-all focus:border-primary focus:ring-1 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={update}
                placeholder="+1 555 123 4567"
                className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base outline-none  transition-all focus:border-primary focus:ring-1 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Gender</label>
              <select
                name="gender"
                value={form.gender}
                onChange={update}
                className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base outline-none  transition-all focus:border-primary focus:ring-1 focus:ring-primary/50"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Age</label>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={update}
                placeholder="20"
                className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base outline-none  transition-all focus:border-primary focus:ring-1 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Date of brith
              </label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={update}
                className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base outline-none  transition-all focus:border-primary focus:ring-1 focus:ring-primary/50"
              />
            </div>
            <div className="relative sm:col-span-2">
              <label className="block text-sm font-semibold mb-1">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={update}
                required
                className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 pr-10 text-base outline-none  focus:border-primary focus:ring-1 focus:ring-primary/50"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-2 top-[38px] rounded p-1 px-2 bg-gray-50 hover:bg-primary/10 transition text-primary text-xs font-bold shadow-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold mb-1">
                Confirm password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={update}
                required
                className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base outline-none  focus:border-primary focus:ring-1 focus:ring-primary/50"
              />
            </div>
            <div className="sm:col-span-2 mt-1">
              <button
                type="submit"
                className="btn btn-primary w-full rounded-full py-3 shadow-lg text-base font-semibold tracking-wide transition-all hover:scale-[1.025] hover:bg-primary/90  "
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
