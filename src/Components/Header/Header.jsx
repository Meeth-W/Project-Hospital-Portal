import React, { useState } from 'react';

function Header() {
  const [activeLink, setActiveLink] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <div>
      {/* Main header */}
      <header className="bg-white w-full py-4 shadow-md border-b-2 border-darkBlue">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-8">
          
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="src/assets/logo.png"
              alt="Hospital Logo"
              className="h-10 w-10 cursor-pointer transition-transform transform hover:scale-110"
              onClick={() => handleLinkClick('Home')}
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className={`text-lg font-medium transition-colors duration-300 ${
                activeLink === 'Home' ? 'text-darkBlue' : 'text-gray-600 hover:text-darkBlue'
              }`}
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </a>
            <a
              href="/about"
              className={`text-lg font-medium transition-colors duration-300 ${
                activeLink === 'About us' ? 'text-darkBlue' : 'text-gray-600 hover:text-darkBlue'
              }`}
              onClick={() => handleLinkClick('About us')}
            >
              About Us
            </a>
            <a
              href="/contact"
              className={`text-lg font-medium transition-colors duration-300 ${
                activeLink === 'Contact' ? 'text-darkBlue' : 'text-gray-600 hover:text-darkBlue'
              }`}
              onClick={() => handleLinkClick('Contact')}
            >
              Contact
            </a>
          </nav>

          {/* Login & Contact Buttons for Desktop */}
          <div className="hidden md:flex space-x-4 items-center justify-end">
            <a
              href="#"
              className="text-darkBlue font-medium hover:text-accentBlue transition-colors duration-300"
            >
              Log in
            </a>
            <a
              href="#"
              className="bg-accentBlue text-white font-medium py-2 px-4 rounded-xl hover:bg-darkBlue transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-darkBlue focus:outline-none">
              <svg className="h-6 w-6 transition-transform transform hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg transition-opacity duration-500 ease-in-out">
            <nav className="flex flex-col space-y-4 py-4 px-8">
              <a
                href="/"
                className={`text-lg font-medium transition-colors duration-300 ${
                  activeLink === 'Home' ? 'text-darkBlue' : 'text-gray-600 hover:text-darkBlue'
                }`}
                onClick={() => handleLinkClick('Home')}
              >
                Home
              </a>
              <a
                href="/about"
                className={`text-lg font-medium transition-colors duration-300 ${
                  activeLink === 'About us' ? 'text-darkBlue' : 'text-gray-600 hover:text-darkBlue'
                }`}
                onClick={() => handleLinkClick('About us')}
              >
                About Us
              </a>
              <a
                href="/contact"
                className={`text-lg font-medium transition-colors duration-300 ${
                  activeLink === 'Contact' ? 'text-darkBlue' : 'text-gray-600 hover:text-darkBlue'
                }`}
                onClick={() => handleLinkClick('Contact')}
              >
                Contact
              </a>
              <a
                href="#"
                className="text-darkBlue font-medium hover:text-gray-600 transition-colors duration-300"
              >
                Log in
              </a>
              <a
                href="#"
                className="bg-accentBlue text-white font-medium py-2 px-4 rounded-xl hover:bg-darkBlue transition-colors duration-300"
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
