import { useState, useEffect } from "react";
import { PhoneCall, Clock, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "/assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className=" top-0 left-0 w-full bg-blue-100   shadow-md py-3 px-10 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-0">
          <img src={logo} alt="Kidney Hospital Logo" className="w-18 mb-0" />
          <span className="text-2xl font-bold">
            DIASS<span className="text-blue-500">ENCE</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6 text-gray-700 font-semibold  pr-4">
            {["Home", "About", "Services", "Gallery", "Contact"].map((item, index) => (
              <NavLink
                key={index}
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className={({ isActive }) =>
                  `hover:text-blue-500 transition ${isActive ? "text-blue-500 underline" : ""}`
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex flex-col items-center text-sm">
              <div className="flex items-center space-x-1">
                <PhoneCall className="text-blue-500" size={18} />
                <span>+91 7017815684 </span>
              </div>
              <span className="text-gray-500 ">24/7 Emergency</span>
            </div>

            <div className="flex flex-col items-center text-sm">
              <div className="flex items-center space-x-1">
                <Clock className="text-blue-500" size={18} />
                <span>Monday-Sunday</span>
              </div>
              <span className="text-gray-500 ">24 hrs Open</span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800 dark:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMenuOpen(false)}></div>

          {/* Mobile Navigation Menu */}
          <nav className="md:hidden fixed inset-0 flex flex-col justify-center items-center bg-white  space-y-6 p-6 z-50 h-screen">
            {["Home", "About", "Services", "Gallery", "Contact"].map((item, index) => (
              <NavLink
                key={index}
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className={({ isActive }) =>
                  `hover:text-blue-500 transition ${isActive ? "text-blue-500 underline" : ""}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </NavLink>
            ))}

            {/* Contact Info */}
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center space-x-1">
                <PhoneCall className="text-blue-500" size={18} />
                <span>+91 7017815684</span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">24/7 Emergency</span>

              <div className="flex items-center space-x-1">
                <Clock className="text-blue-500" size={18} />
                <span>Monday - Sunday</span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">24 hrs Open</span>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
