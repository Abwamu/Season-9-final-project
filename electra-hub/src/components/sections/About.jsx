import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1597418048367-7dd01e4404ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZSUyMGFwcGxpYW5jZXN8ZW58MHx8MHx8fDA%3D"
            alt="About Us"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Our Company
          </h2>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            We specialize in modern, energy-efficient appliances designed to make your home smarter and life simpler. 
            With years of experience and a commitment to quality, we deliver innovative solutions that bring comfort, 
            convenience, and style to every home.
          </p>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Our mission is to provide high-quality, sustainable appliances that improve the everyday lives of our customers, 
            while maintaining exceptional customer service and reliability.
          </p>

          <button className="btn-primary w-max">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
