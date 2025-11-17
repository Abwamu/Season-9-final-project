import React from "react";

const products = [
  {
    name: "Blenders",
    image:
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Modern Washing Machine",
    image:
      "https://images.unsplash.com/photo-1597418048367-7dd01e4404ee?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Smart Microwave Oven",
    image:
     "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Dishwasher Pro",
   image: "https://images.unsplash.com/photo-1662135426688-bf91aaea6ea9?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Air Purifier",
    image:
      "https://images.unsplash.com/photo-1732229033839-c76b4071c449?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Smart Speaker",
    image:
      "https://images.unsplash.com/photo-1640826808046-6d4d4faa30c8?w=600&auto=format&fit=crop&q=60",
  },
];

const NewInStore = () => {
  return (
    <section id="new" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
          New In Store
        </h2>

        {/* 3 top + 3 bottom grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>

                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewInStore;
