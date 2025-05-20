
// Content from the saved Portfolio component

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = ["home", "about", "projects", "experience", "certificates", "contact"];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <nav className="flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">DINESH MALEM</h1>
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  className={`capitalize hover:text-blue-500 transition-all duration-300 ${
                    activeSection === item ? "text-blue-500" : ""
                  }`}
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      ...
    </div>
  );
}
