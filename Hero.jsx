import React from "react";
import Header from "../layout/Header";
import heroImg from "../../assets/images/3hero.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Header */}
      <Header transparent />

      {/* Hero Content */}
      <div className="relative max-h-screen bottom-0 z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6 pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white">
          Smart Living Starts With Modern Appliances
        </h1>

        <p className="text-base md:text-lg text-gray-100 mb-10 max-w-2xl leading-relaxed">
          Transform your home with energy-efficient and stylish electrical appliances — designed to simplify life and bring innovation to every corner.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">
            Shop Now
          </button>
        </div>
      </div>

      {/* Stats Row at Bottom */}
      <div className="relative bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#89CFF0] text-slate-900 w-11/12 md:w-4/5 rounded-2xl shadow-lg grid grid-cols-4 text-center divide-x divide-white">
        <div className="flex flex-col items-center justify-center py-8">
          <h3 className="text-3xl font-bold">7</h3>
          <p className="text-sm mt-2 font-medium">Years of Excellence</p>
        </div>

        <div className="flex flex-col items-center justify-center py-8">
          <h3 className="text-3xl font-bold">2</h3>
          <p className="text-sm mt-2 font-medium">Countries Reached</p>
        </div>

        <div className="flex flex-col items-center justify-center py-8">
          <h3 className="text-3xl font-bold">10k+</h3>
          <p className="text-sm mt-2 font-medium">Appliances Sold</p>
        </div>

        <div className="flex flex-col items-center justify-center py-8">
          <h3 className="text-3xl font-bold">260+</h3>
          <p className="text-sm mt-2 font-medium">Product Variants</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;