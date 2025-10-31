import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdMailOutline, MdPhone, MdLocationOn, MdSend } from "react-icons/md";
import { FaEnvelopeOpenText } from "react-icons/fa";

const ICON_CLASSES = "w-6 h-6 text-primary inline-block mr-2";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0.2, 0.1, 1] }}
      className="min-h-[80vh] bg-white flex flex-col items-center justify-start py-10 px-4"
    >
      {/* Animated Title and Subtitle */}
      <motion.div initial={{opacity: 0, y: -18}} animate={{opacity: 1, y: 0}} transition={{delay: 0.09, duration: 0.55}} className="w-full max-w-2xl text-center mx-auto mb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-2">Get in <span className="text-primary">Touch</span></h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[var(--color-text-muted)] font-medium">
          We'd love to hear from you. Fill out the form or use the details below and our team will respond as soon as possible.
        </p>
      </motion.div>
      <motion.div className="w-full max-w-2xl md:max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Info Card */}
        <motion.div
          className="flex-1 flex flex-col justify-center p-0 md:p-8 rounded-2xl shadow border border-gray-100 bg-white mb-10 md:mb-0"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, type: "spring" }}
        >
          <h1 className="flex items-center text-2xl font-bold text-gray-900 mb-5">
            <FaEnvelopeOpenText className="text-primary w-8 h-8 mr-2" />
            Contact <span className="text-primary ml-1">Us</span>
          </h1>
          <p className="text-base text-[var(--color-text-muted)] font-medium mb-8">
            Have a question, feedback, or need help? Reach out and we'll get in touch as soon as possible.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center text-lg text-gray-700">
              <MdMailOutline className={ICON_CLASSES} /> support@example.com
            </div>
            <div className="flex items-center text-lg text-gray-700">
              <MdPhone className={ICON_CLASSES} /> +1 (555) 123-4567
            </div>
            <div className="flex items-center text-lg text-gray-700">
              <MdLocationOn className={ICON_CLASSES} /> 123 Health St, London, UK
            </div>
          </div>
        </motion.div>
        {/* Contact Form */}
        <motion.form
          onSubmit={onSubmit}
          className="flex-1 space-y-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-lg flex flex-col justify-center w-full"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          autoComplete="off"
        >
          {sent && (
            <motion.div
              className="rounded bg-green-200 text-green-800 px-3 py-2 mb-2 text-sm text-center font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Thank you! We'll be in touch shortly.
            </motion.div>
          )}
          <div className="relative">
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={update}
              disabled={loading}
              className="peer w-full border-b-2 border-gray-200 py-3 px-2 text-base bg-transparent outline-none focus:border-primary transition placeholder-transparent"
              placeholder="Your Name"
              id="contact-name"
            />
            <label
              htmlFor="contact-name"
              className="absolute left-1 top-3 text-gray-500 text-base pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-primary"
            >
              Your Name
            </label>
          </div>
          <div className="relative">
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              disabled={loading}
              className="peer w-full border-b-2 border-gray-200 py-3 px-2 text-base bg-transparent outline-none focus:border-primary transition placeholder-transparent"
              placeholder="Your Email"
              id="contact-email"
            />
            <label
              htmlFor="contact-email"
              className="absolute left-1 top-3 text-gray-500 text-base pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-primary"
            >
              Your Email
            </label>
          </div>
          <div className="relative">
            <textarea
              required
              name="message"
              value={form.message}
              onChange={update}
              disabled={loading}
              rows={4}
              className="peer w-full border-b-2 border-gray-200 py-3 px-2 text-base bg-transparent outline-none resize-none focus:border-primary transition placeholder-transparent"
              placeholder="Your Message"
              id="contact-message"
              maxLength={450}
            />
            <label
              htmlFor="contact-message"
              className="absolute left-1 top-3 text-gray-500 text-base pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-primary"
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full rounded-full font-bold py-3 shadow mt-4 flex items-center justify-center gap-2 text-lg transition hover:scale-105 hover:bg-primary/90 disabled:opacity-60"
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                <MdSend className="inline-block text-lg mb-1 mr-1" /> Send Message
              </>
            )}
          </button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
