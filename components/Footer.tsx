// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p className="mb-2 md:mb-0">Music Room. &copy; 2025</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-800">
              About us
            </a>
            <a href="#" className="hover:text-gray-800">
              FAQ
            </a>
            <a href="#" className="hover:text-gray-800">
              T&C
            </a>
            <a href="#" className="hover:text-gray-800">
              Imprint and data
            </a>
            <a href="#" className="hover:text-gray-800">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
