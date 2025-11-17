import React from "react";

// Example testimonials data
const testimonials = [
  {
    name: "Jane Doe",
    position: "Homeowner",
    message:
      "The smart appliances from this company have completely transformed my daily life. Efficient, stylish, and easy to use!",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=150&q=80",
  },
  
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Text */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
            What Our Customers Say
          </h2>

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="mb-10 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-600 text-lg mb-4 italic">"{testimonial.message}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-gray-800 font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Illustration/Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581091215366-1686a4de5b5a?auto=format&fit=crop&w=600&q=80"
            alt="Happy Customers"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
