import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto text-center space-y-6">
        <p className="text-3xl font-semibold text-gray-200">
          Movie Mentor
        </p>
        <a
          href="/contact"
          className="text-red-500 hover:text-red-400 text-lg font-medium transition-colors duration-300"
        >
          Contact Us
        </a>
        <p className="text-sm text-gray-400">
          Made with ❤️ by <span className="font-semibold text-white">Mithlesh</span>
        </p>
      </div>
      <div className="mt-8 border-t-2 border-gray-700 pt-4">
        <p className="text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Movie Mentor. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
