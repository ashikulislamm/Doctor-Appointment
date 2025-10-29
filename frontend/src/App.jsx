import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Doctors from "./pages/Doctors.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import MyProfile from "./pages/MyProfile.jsx";

import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6 flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
