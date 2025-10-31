import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { doctors, specialityData } from "../assets/assets.js";

const FILTER_ALL = "All";

const Doctors = () => {
  const [selected, setSelected] = useState(FILTER_ALL);

  const filters = useMemo(
    () => [FILTER_ALL, ...specialityData.map((s) => s.speciality)],
    []
  );

  const filteredDoctors = useMemo(() => {
    if (selected === FILTER_ALL) return doctors;
    return doctors.filter((d) => d.speciality === selected);
  }, [selected]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Our <span className="text-primary">Doctors</span>
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[var(--color-text-muted)]">
          Browse our trusted specialists and book your appointment with ease.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
        {filters.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setSelected(name)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              selected === name
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Doctors grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDoctors.map((doc) => (
          <Link
            key={doc._id}
            to={`/doctors/${doc._id}`}
            className="rounded-2xl bg-white shadow-md ring-1 ring-gray-100 overflow-hidden transition-all hover:shadow-xl cursor-pointer"
          >
            <div className="bg-indigo-50/60 flex items-center justify-center">
              <img
                src={doc.image}
                alt={doc.name}
                className="h-60 object-contain"
                loading="lazy"
              />
            </div>
            <div className="p-4 text-left">
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
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  ${doc.fees}
                </span>
                <span className="btn btn-primary rounded-full px-4 py-2 text-sm">
                  View Details
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <p className="text-center text-sm text-gray-500 mt-10">
          No doctors found for this speciality.
        </p>
      )}
    </div>
  );
};

export default Doctors;
