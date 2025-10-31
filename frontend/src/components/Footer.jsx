import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-8 text-left sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold">MediHub</h3>
            <p className="mt-3 text-sm text-gray-600">
              Book appointments with trusted doctors. Fast, simple, and secure.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
              Company
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>
                <a className="hover:text-gray-900" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="/contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="/doctors">
                  Doctors
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
              Support
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>
                <a className="hover:text-gray-900" href="#faqs">
                  FAQs
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#help">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#privacy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
              Get in touch
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Email: support@example.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <a
                aria-label="Twitter"
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996A4.107 4.107 0 0 0 16.616 4c-2.266 0-4.103 1.837-4.103 4.102 0 .322.036.636.106.936-3.41-.171-6.437-1.804-8.462-4.285a4.095 4.095 0 0 0-.556 2.064 4.102 4.102 0 0 0 1.827 3.417 4.077 4.077 0 0 1-1.859-.514v.052c0 2.042 1.452 3.746 3.379 4.133a4.1 4.1 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407 11.615 11.615 0 0 0 8.29 20" />
                </svg>
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M13.5 9H15V6h-1.5C11.57 6 10 7.57 10 9.5V11H8v3h2v7h3v-7h2.1l.4-3H13v-1.5c0-.28.22-.5.5-.5Z" />
                </svg>
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm5 2.8A4.2 4.2 0 1 1 7.8 12 4.2 4.2 0 0 1 12 7.8m0 2A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8M17.25 7A.75.75 0 1 1 16.5 7a.75.75 0 0 1 .75-.75" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
          <p>&copy; {year} Doctor Appointment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
