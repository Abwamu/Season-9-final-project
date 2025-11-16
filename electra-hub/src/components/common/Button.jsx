import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-full font-semibold shadow-lg-soft hover:scale-105 transform transition-all duration-200"
    >
      {label}
    </button>
  );
};

export default Button;