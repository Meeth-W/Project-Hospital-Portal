import React from 'react';

function Footer() {
  return (
    <footer className="bg-lightBlue w-full py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-8">
        <div className="flex flex-col items-start mb-4 md:mb-0">
          <div className="flex py-3">
            <img src="src/assets/logo.png" alt="Hospital Logo" className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-xl font-bold text-darkBlue">Hospital Name</h1>
            </div>
          </div>
          <div className="flex">
            <p className="text-md mt-1 text-darkBlue">
              123 Medical Street, Health City <br />
              City, State 12345 <br />
              <a href="mailto:info@hospital.com" className="text-gray-600 underline">info@hospital.com</a>
            </p>
          </div>
        </div>

        <div className="flex space-x-4 object-right-bottom">
          <a href="mailto:info@hospital.com" className='w-14'>
            <img src="src/assets/mailIcon.png" alt="Email Icon" />
          </a>
          <a href="https://linkedin.com" className='w-14'>
            <img src="src/assets/linkedinIcon.png" alt="LinkedIn Icon" />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center w-full px-8 flex flex-col">
        <hr className="border-darkBlue mb-4" />
        <p className="text-gray-600">© 2024 Hospital Name</p>
      </div>
    </footer>
  );
}

export default Footer;
