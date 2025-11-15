import React from "react";
import "./index.css";
import "./App.css";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Section Components
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Features from "./components/sections/Features";
import Products from "./components/sections/Products";
import Testimonials from "./components/sections/Testimonials";

const App = () => {
  return (
    <div className="App">
      {/* Main Page Content */}
      <main>
        <Hero />
        <Features />
        <Products />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
