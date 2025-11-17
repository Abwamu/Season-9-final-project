import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">SmartHome</h3>
          <p className="text-gray-400 text-sm">
            Bringing modern, energy-efficient appliances to your home.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#products" className="hover:text-white transition">Products</a></li>
            <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <p className="text-gray-400 text-sm mb-2">Email: support@smarthome.com</p>
          <p className="text-gray-400 text-sm mb-2">Phone: +1 234 567 890</p>
          <p className="text-gray-400 text-sm">Address: 123 Smart St, Tech City</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png"
                alt="Facebook"
              />
            </a>
            <a href="#" className="hover:text-white transition">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png"
                alt="Twitter"
              />
            </a>
            <a href="#" className="hover:text-white transition">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png"
                alt="Instagram"
              />
            </a>
            <a href="#" className="hover:text-white transition">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SmartHome. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
