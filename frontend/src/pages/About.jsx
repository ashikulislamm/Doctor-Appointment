import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import {
  FaUserMd,
  FaRegHandshake,
  FaClinicMedical,
  FaRegHeart,
  FaMedal,
  FaBriefcaseMedical 
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const highlights = [
  {
    icon: <FaBriefcaseMedical className="w-7 h-7 text-primary" />, // Patient First
    title: "Patient First",
    desc: "Designed entirely for patient outcomes and convenience.",
  },
  {
    icon: <FaUserMd className="w-7 h-7 text-primary" />, // Expert Doctors
    title: "Expert Doctors",
    desc: "Verified medical professionals in every major specialty.",
  },
  {
    icon: <MdVerified className="w-7 h-7 text-primary" />, // Trusted Care
    title: "Trusted Care",
    desc: "End-to-end secure, working only with established clinics.",
  },
];

const timeline = [
  {
    year: "2022",
    icon: (
      <FaClinicMedical className="w-5 h-5 text-white bg-primary rounded-full p-[2px]" />
    ), // Founded
    title: "Founded",
    desc: "Born out of a need for accessible, patient-centered care.",
  },
  {
    year: "2023",
    icon: (
      <FaUserMd className="w-5 h-5 text-white bg-cyan-400 rounded-full p-[2px]" />
    ), // Growth
    title: "Growth & Expansion",
    desc: "Over 200 doctors onboarded and new specialties added.",
  },
  {
    year: "2024",
    icon: (
      <FaMedal className="w-5 h-5 text-white bg-fuchsia-700 rounded-full p-[2px]" />
    ), // Today
    title: "Today & Beyond",
    desc: "A trusted health partner for thousands; always innovating.",
  },
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0.2, 0.1, 1] }}
      className="min-h-[85vh] bg-white flex flex-col items-center justify-start py-10 px-3 sm:px-6 lg:px-0"
    >
      {/* TOP: Logo and Hero */}
      <div className="mx-auto w-full max-w-3xl text-center mb-6">
        <motion.img
          src={logo}
          alt="MediHub Logo"
          className="mx-auto mb-4 rounded-full shadow-md w-20 h-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6, type: "spring" }}
        />
        <motion.h1
          className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          About <span className="text-primary">MediHub</span>
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-[var(--color-text-muted)] font-medium mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Healthcare made simple, accessible, and centered around you.
        </motion.p>
      </div>
      {/* MISSION */}
      <motion.div
        className="w-full max-w-2xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl flex items-center gap-4 p-6 mb-10 shadow-sm"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        
        <div>
        <span className="inline-flex bg-primary/10 text-primary rounded-full p-3 mb-2">
          <FaRegHeart className="w-7 h-7" />
        </span>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Empowering every patient to access quality healthcare without
            friction — from finding the right doctor to securing a seamless
            appointment.
          </p>
        </div>
      </motion.div>
      {/* HIGHLIGHTS */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 max-w-5xl w-full"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 p-6 shadow flex flex-col items-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 + 0.13 * i,
              duration: 0.67,
              type: "spring",
            }}
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-1 text-gray-900">
              {item.title}
            </h3>
            <p className="text-[var(--color-text-muted)] text-sm text-center">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
      {/* TIMELINE */}
      <motion.div className="w-full max-w-4xl mx-auto mt-14 mb-10 flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-8 text-gray-900">
          Our Journey
        </h2>
        <div className="relative flex flex-col sm:flex-row items-center sm:justify-between w-full">
          {timeline.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center mb-10 sm:mb-0 sm:w-1/3 relative"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.18, duration: 0.7 }}
            >
              <div
                className={`mb-2 flex items-center justify-center w-10 h-10 rounded-full shadow-lg bg-primary/80 border-4 border-white relative z-10`}
              >
                {step.icon}
              </div>
              <span className="text-primary font-bold mb-1">{step.year}</span>
              <h4 className="font-semibold text-base text-gray-900 mb-1">
                {step.title}
              </h4>
              <p className="text-gray-500 text-sm text-center mx-auto max-w-xs">
                {step.desc}
              </p>
              {i < timeline.length - 1 && (
                <div
                  className="hidden sm:block absolute right-[-4%] top-5 w-[108%] border-t-2 border-dashed border-gray-200 z-0"
                  style={{ left: "44%" }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* TESTIMONIAL */}
      <motion.div
        className="w-full max-w-2xl mx-auto my-5 bg-[#fafafd] rounded-2xl border border-gray-100 py-7 px-6 flex flex-col items-center shadow-sm"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <FaRegHandshake className="w-8 h-8 text-primary mb-2" />
        <blockquote className="italic text-lg text-center text-gray-600 font-medium max-w-lg mb-3">
          “What I love about MediHub is the speed and trust—booking an
          appointment has never been easier, and I know I’m in good hands.”
        </blockquote>
        <span className="text-sm text-gray-500">— A grateful patient</span>
      </motion.div>
    </motion.div>
  );
};

export default About;
