import React from "react";

const products = [
  {
    title: "Smart Washing Machine",
    description: "Wash clothes efficiently with IoT‑enabled washing cycles.",
    price: "$499",
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Microwave Oven",
    description: "Quick and even cooking with smart presets.",
    price: "$249",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Air Purifier",
    description: "Keep your indoor air fresh and clean with HEPA filters.",
    price: "$299",
    image: "https://images.unsplash.com/photo-1732229033839-c76b4071c449?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Smart TV",
    description: "Ultra HD display with built-in streaming apps.",
    price: "$799",
    image: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Robot Vacuum",
    description: "Automated cleaning with smart navigation.",
    price: "$399",
    image: "https://images.unsplash.com/photo-1722710070534-e31f0290d8de?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Smart Speaker",
    description: "Voice‑controlled assistant for your home.",
    price: "$199",
    image: "https://images.unsplash.com/photo-1640826808046-6d4d4faa30c8?w=600&auto=format&fit=crop&q=60",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
          Our Products
        </h2>

        {/* Grid updated to 3 columns on medium screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-left flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm flex-1">{product.description}</p>
                <p className="text-lg font-bold text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
