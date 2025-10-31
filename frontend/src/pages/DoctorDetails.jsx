import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { doctors } from "../assets/assets.js";
import {
  FaUserMd,
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaCalendarAlt,
  FaDollarSign,
  FaCheckCircle,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

// Mock time slots - in real app, this would come from API
const generateTimeSlots = () => {
  const slots = [];
  const today = new Date();
  for (let day = 0; day < 7; day++) {
    const date = new Date(today);
    date.setDate(today.getDate() + day);
    const daySlots = [];
    const hours = [9, 10, 11, 14, 15, 16, 17];
    hours.forEach((hour) => {
      daySlots.push({
        time: `${hour}:00`,
        available: Math.random() > 0.3, // Random availability
      });
    });
    slots.push({
      date: date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      }),
      fullDate: date.toISOString().split("T")[0],
      times: daySlots,
    });
  }
  return slots;
};

const DoctorDetails = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeSlots] = useState(generateTimeSlots());

  const doctor = doctors.find((d) => d._id === id);

  if (!doctor) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Doctor Not Found
          </h2>
          <Link
            to="/doctors"
            className="text-primary hover:underline font-medium"
          >
            Back to Doctors
          </Link>
        </div>
      </div>
    );
  }

  const handleBookAppointment = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time slot");
      return;
    }
    // Placeholder: integrate booking API here
    alert(
      `Booking appointment with ${doctor.name} on ${selectedDate} at ${selectedTime}`
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[80vh] bg-white py-8 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/doctors"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-6 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Doctors
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Doctor Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
              {/* Doctor Image */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-48 h-48 rounded-2xl object-contain bg-indigo-50 p-4 shadow-md"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 shadow-lg">
                    <FaCheckCircle className="text-white w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Doctor Name & Speciality */}
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                  {doctor.name}
                </h1>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-primary font-semibold">
                    {doctor.speciality}
                  </span>
                  <MdVerified className="text-primary w-5 h-5" />
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  Available
                </div>
              </div>

              {/* Doctor Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <FaGraduationCap className="text-primary w-5 h-5" />
                  <span className="text-sm font-medium">{doctor.degree}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaBriefcase className="text-primary w-5 h-5" />
                  <span className="text-sm font-medium">
                    {doctor.experience} Experience
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaDollarSign className="text-primary w-5 h-5" />
                  <span className="text-sm font-medium">
                    ${doctor.fees} per consultation
                  </span>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <FaMapMarkerAlt className="text-primary w-5 h-5 mt-1" />
                  <div className="text-sm">
                    <p className="font-medium">{doctor.address.line1}</p>
                    <p className="text-gray-500">{doctor.address.line2}</p>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  About
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {doctor.about}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Booking Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <FaCalendarAlt className="text-primary" />
                Book Appointment
              </h2>
              <p className="text-gray-600 mb-6">
                Select your preferred date and time slot
              </p>

              {/* Date Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FaCalendarAlt className="text-primary" />
                  Select Date
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {timeSlots.map((slot, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedDate(slot.fullDate)}
                      className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                        selectedDate === slot.fullDate
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-gray-200 hover:border-primary/50 text-gray-700"
                      }`}
                    >
                      {slot.date}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <FaClock className="text-primary" />
                    Available Time Slots
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                    {timeSlots
                      .find((s) => s.fullDate === selectedDate)
                      ?.times.map((timeSlot, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedTime(timeSlot.time)}
                          disabled={!timeSlot.available}
                          className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                            !timeSlot.available
                              ? "border-gray-200 text-gray-400 cursor-not-allowed opacity-50"
                              : selectedTime === timeSlot.time
                              ? "border-primary bg-primary text-white"
                              : "border-gray-200 hover:border-primary/50 text-gray-700"
                          }`}
                        >
                          {timeSlot.time}
                        </button>
                      ))}
                  </div>
                </motion.div>
              )}

              {/* Booking Summary */}
              {selectedDate && selectedTime && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Booking Summary
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Doctor:</span>
                      <span className="font-medium">{doctor.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">
                        {timeSlots.find((s) => s.fullDate === selectedDate)?.date}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between border-t border-primary/20 pt-2 mt-2">
                      <span className="text-gray-600 font-semibold">
                        Consultation Fee:
                      </span>
                      <span className="font-bold text-primary">
                        ${doctor.fees}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Book Button */}
              <button
                onClick={handleBookAppointment}
                disabled={!selectedDate || !selectedTime}
                className="btn btn-primary w-full rounded-full py-3 text-lg font-semibold shadow-lg transition-all hover:scale-[1.02] hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorDetails;

