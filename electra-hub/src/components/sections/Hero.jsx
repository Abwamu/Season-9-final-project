import React from "react";
import Header from "../layout/Header.jsx";
import heroImg from "../../assets/images/newherobg.jpeg";

const stats = [
  { value: "7", label: "Years of Excellence" },
  { value: "2", label: "Countries Reached" },
  { value: "10k+", label: "Appliances Sold" },
  { value: "260+", label: "Product Variants" },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Header */}
      <Header transparent />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6 pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white">
          Smart Living Starts With Modern Appliances
        </h1>

        <p className="text-base md:text-lg text-gray-100 mb-10 max-w-2xl leading-relaxed">
          Transform your home with energy-efficient and stylish electrical appliances — 
          designed to simplify life and bring innovation to every corner.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">
            Shop Now
          </button>
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 w-11/12 md:w-4/5 bg-[#89CFF0] text-slate-900 rounded-2xl shadow-lg grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white z-30 overflow-hidden">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center py-6 px-4 md:px-6 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold">{stat.value}</h3>
            <p className="text-sm md:text-base mt-2 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
