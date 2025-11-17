import React from "react";

const Story = () => {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1722859178634-ccc8ea5680d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlZnJpZ2VyYXRvcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Our Story"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Story
          </h2>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            It all started with a vision: to make homes smarter, more efficient, and beautifully modern. 
            From humble beginnings, our team has grown with a shared passion for innovation and quality.
          </p>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Over the years, we’ve expanded our reach across multiple countries, sold thousands of appliances, 
            and continue to focus on bringing the latest technology to your doorstep. Our commitment remains the same — 
            to improve everyday life with practical, stylish, and reliable solutions.
          </p>

          <button className="btn-primary w-max">
            Read More
          </button>
        </div>

      </div>
    </section>
  );
};

export default Story;
