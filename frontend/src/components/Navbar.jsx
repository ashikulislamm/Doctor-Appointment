import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Doctors", to: "/doctors" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  const activeClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? "text-primary"
        : "text-[var(--color-text-muted)] hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg)] backdrop-blur shadow-sm rounded-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2" onClick={close}>
          <img
            src={logo}
            alt="MediHub logo"
            className="block h-8 w-10 md:h-9"
          />
          <h1 className="text-2xl font-bold text-primary">MediHub</h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={activeClass}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Right actions (desktop) */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/register"
            className="btn btn-primary shadow-sm rounded-full"
          >
            Create Account
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger / Close icon */}
          <svg
            className={`h-6 w-6 ${open ? "hidden" : "block"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className={`h-6 w-6 ${open ? "block" : "hidden"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 6l12 12M18 6l-12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`md:hidden ${
          open ? "block" : "hidden"
        } border-t border-[var(--color-border)] bg-[var(--color-bg)]`}
      >
        <div className="space-y-1 px-4 py-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={close}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-base font-medium ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-[var(--color-text-muted)] hover:bg-[#f9fafb] hover:text-[var(--color-text)]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="mt-2 grid grid-cols-2 gap-2 border-t border-[var(--color-border)] pt-3">
            <Link
              to="/register"
              onClick={close}
              className="btn btn-primary w-full shadow-sm rounded-full"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
