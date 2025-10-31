import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { specialityData, doctors } from "../assets/assets.js";
import logo from "../assets/logo.png";

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V12a6.002 6.002 0 00-4-5.659V6a2 2 0 10-4 0v.341C6.67 7.165 5 9.388 5 12v2.159c0 .538-.214 1.055-.595 1.436L3 17h5m2 0v1a3 3 0 006 0v-1m-6 0a3 3 0 006 0v-1"
        />
      </svg>
    ),
    text: "Trusted Doctors",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m4-1V9a4 4 0 00-4-4 4 4 0 00-4 4v2a3 3 0 002 2.83M13 16h1a3 3 0 001-5.83M7 17v2a2 2 0 002 2h6a2 2 0 002-2v-2"
        />
      </svg>
    ),
    text: "Secure & Fast",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8v8a2 2 0 002 2h14a2 2 0 002-2V8m-10 4h4m-4-4h8v4a2 2 0 01-2 2h-4a2 2 0 01-2-2z"
        />
      </svg>
    ),
    text: "24/7 Service",
  },
];

const cards = [
  {
    title: "Book Instantly",
    desc: "No waiting in lines. Find the right doctor and book your appointment within minutes.",
    icon: logo,
  },
  {
    title: "All Specialties",
    desc: "Easily connect with specialists across 10+ medical fields in one place.",
    icon: logo,
  },
  {
    title: "Your Health, Secured",
    desc: "We protect your data and privacy with industry-standard security.",
    icon: logo,
  },
];

// Reusable Speciality grid that maps items
const SpecialityGrid = ({ items = [] }) => {
  if (!items) return null;
  if (items.length === 0) {
    return (
      <p className="mt-6 text-center text-sm text-gray-500">
        No specialities available.
      </p>
    );
  }
  return (
    <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 place-items-center">
      {items.map((item) => (
        <Link key={item.speciality} to={`/doctors`} className="group w-full">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 ring-1 ring-gray-200 transition-all group-hover:scale-105 group-hover:ring-primary/40">
            <img
              src={item.image}
              alt={item.speciality}
              className="h-12 w-12"
              loading="lazy"
            />
          </div>
          <p className="mt-2 text-center text-sm font-medium text-gray-700 group-hover:text-primary">
            {item.speciality}
          </p>
        </Link>
      ))}
    </div>
  );
};

// Reusable Doctors grid that maps items
const TopDoctorsGrid = ({ items = [] }) => {
  if (!items) return null;
  if (items.length === 0) {
    return (
      <p className="mt-6 text-center text-sm text-gray-500">
        No doctors available.
      </p>
    );
  }
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {items.map((doc) => (
        <div
          key={doc._id}
          className="rounded-2xl bg-white shadow-md ring-1 ring-gray-100 overflow-hidden transition-all hover:shadow-xl"
        >
          <div className="bg-indigo-50/60 flex items-center justify-center">
            <img
              src={doc.image}
              alt={doc.name}
              className="h-60 object-contain"
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2 text-sm text-green-600 mb-1">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Available
            </div>
            <h3 className="font-semibold text-gray-900">{doc.name}</h3>
            <p className="text-sm text-gray-600">{doc.speciality}</p>
            <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
              <span>{doc.degree}</span>
              <span>{doc.experience}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className="w-full min-h-[90vh] pb-12 animate-fade-in">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto pt-6 sm:pt-16 px-4 sm:px-8 pb-5 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-0">
        {/* Left: Headline + CTA */}
        <div className="w-full lg:w-6/12 flex flex-col items-start justify-center mt-10 lg:mt-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-2 bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-xs shadow-sm mx-auto">
            <img src={logo} alt="logo" className="w-6 h-6" /> MediHub
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-2 text-gray-900 ">
            Book Your <span className="text-primary">Doctor Appointment</span>{" "}
            Online
          </h1>
          <div className="text-lg sm:text-xl text-gray-700 opacity-80 mb-5 max-w-xl">
            Find, connect, and book with the best doctors at your convenience.
            Simple. Fast. Secure.
          </div>
          <Link
            to="/register"
            className="btn btn-primary rounded-full px-8 py-3 text-lg font-semibold hover:scale-105 hover:bg-primary/90 transition-all mb-4 mx-auto"
          >
            Book Appointment
          </Link>
          {/* Feature points */}
          <div className="flex flex-wrap gap-6 mt-2">
            {features.map(({ icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white rounded-xl py-2 px-4 shadow-md font-medium text-gray-700 text-base"
              >
                {icon}
                {text}
              </div>
            ))}
          </div>
        </div>
        {/* Right: Hero Image */}
        <div className="w-full lg:w-6/12 flex justify-center items-center animate-fade-in">
          <img
            src={assets.header_img}
            alt="Doctor appointment illustration"
            className="w-[360px] sm:w-[400px] md:w-[440px] lg:w-[490px] rounded-xl bg-white/80 object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* Find by Speciality */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-6 sm:mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          Find by <span className="text-primary">Speciality</span>
        </h2>
        <p className="mt-2 text-center text-sm sm:text-base text-[var(--color-text-muted)]">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
        <SpecialityGrid items={specialityData} />
      </section>

      {/* Top Doctors to Book */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          Top Doctors to <span className="text-primary">Book</span>
        </h2>
        <p className="mt-2 text-center text-sm sm:text-base text-[var(--color-text-muted)]">
          Simply browse through our extensive list of trusted doctors.
        </p>
        <TopDoctorsGrid items={doctors.slice(0, 5)} />
        <div className="text-center mt-10 mb-12">
          <Link
            to="/doctors"
            className="text-brand bg-primary text-white rounded-full px-6 py-3 hover:bg-primary/90 transition-all font-medium"
          >
            View all doctors
          </Link>
        </div>
      </section>

      {/* Info cards */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mt-4">
        Why Choose <span className="text-primary">MediHub</span>
      </h2>
      <div className="max-w-7xl mx-auto mt-10 mb-3 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(({ title, desc, icon }, idx) => (
          <div
            key={title}
            className="bg-white/60 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center w-full transition-all hover:scale-[1.035] animate-fade-in-up"
            style={{ animationDelay: `${0.12 * idx + 0.08}s` }}
          >
            <img
              src={icon}
              alt="icon"
              className="w-12 h-12 mb-2"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold text-primary mb-1">{title}</h3>
            <p className="text-base text-gray-700 opacity-80">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
