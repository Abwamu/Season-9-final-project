import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = ({ transparent = false }) => {
  const [open, setOpen] = useState(false);

  const linkClasses = transparent
    ? "text-white hover:text-blue-300 transition cursor-pointer"
    : "text-gray-700 hover:text-[#5BA3C7] transition cursor-pointer";

  const mobileBg = transparent ? "bg-black/40 backdrop-blur-md" : "bg-white";

  return (
    <nav className="relative">
      {/* Desktop Links */}
      <ul className="hidden md:flex gap-10 text-base font-semibold">
        <li className={linkClasses}>Home</li>
        <li className={linkClasses}>About</li>
        <li className={linkClasses}>Features</li>
        <li className={linkClasses}>Contact</li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden ml-4" onClick={() => setOpen(!open)}>
        {open ? (
          <X size={28} className={transparent ? "text-white" : "text-gray-800"} />
        ) : (
          <Menu size={28} className={transparent ? "text-white" : "text-gray-800"} />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${mobileBg} absolute top-full right-0 w-full transition-all duration-300 overflow-hidden ${
          open ? "max-h-60 py-4" : "max-h-0"
        } z-40`}
      >
        <ul className="flex flex-col gap-4 px-6 py-2 font-semibold">
          <li className={linkClasses}>Home</li>
          <li className={linkClasses}>About</li>
          <li className={linkClasses}>Features</li>
          <li className={linkClasses}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
