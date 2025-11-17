import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email!");
    // Here you can connect to your backend or newsletter service
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <section id="newsletter" className="py-20 bg-[#89CFF0]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-slate-900 text-lg mb-8 max-w-2xl mx-auto">
          Stay updated with our latest products, offers, and smart living tips. Join our community now!
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
            required
          />
          <button
            type="submit"
            className="btn-primary px-6 py-3 rounded-xl w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
