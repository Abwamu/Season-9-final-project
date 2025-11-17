import React from "react"; 
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import Story from "./components/sections/Story";
import Products from "./components/sections/Products";
import Testimonials from "./components/sections/Testimonials";
import Newsletter from "./components/sections/Newsletter";
import Footer from "./components/layout/Footer";
  
 
const App = () => {
  return (
    <div className="App">
        
      <main>
        <Header />
        <Hero />
        <About />
        <Features />
        <Story />
        <Products />
        <Testimonials />
        <Newsletter />
        <Footer />
      </main>
      
    </div>
  );
};

export default App;