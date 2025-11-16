import React from "react";
import Navigation from "./Navigation.jsx";

const Header = ({ transparent = false }) => {
  const headerClasses = transparent
    ? "absolute top-0 left-0 w-full z-30 py-4 px-6 text-white backdrop-blur-sm bg-black/20"
    : "bg-white text-gray-900 py-4 px-6 shadow-md fixed top-0 left-0 w-full z-50";

  const buttonClasses = transparent
    ? "bg-white/30 text-white px-6 py-2 rounded-full hover:bg-white/40 transition"
    : "bg-gradient-to-r from-[#89CFF0] to-[#5BA3C7] text-white px-6 py-2 rounded-full hover:shadow-lg transition";

  const logoClasses = transparent
    ? "text-2xl font-bold text-white"
    : "text-2xl font-bold text-[#89CFF0]";

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">

        {/* Logo */}
        <h1 className={logoClasses}>ElectraHome</h1>

        {/* Navigation (ALWAYS visible now) */}
        <Navigation transparent={transparent} />

        {/* CTA Button */}
        <button className={buttonClasses}>
          Shop Now
        </button>

      </div>
    </header>
  );
};

export default Header;
