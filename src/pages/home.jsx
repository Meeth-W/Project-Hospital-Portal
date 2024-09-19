import React from 'react';

const Home = () => {
  return (
    <div className="bg-white">
      <div className="w-full h-96 bg-lightBlue flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-darkBlue">Welcome to Our Hospital</h1>
          <p className="mt-4 text-lg text-accentBlue">Compassionate Care, Trusted Expertise</p>
          <div className="mt-6">
            <a href="/contact" className="bg-accentBlue text-white font-medium py-2 px-6 rounded-lg hover:bg-darkBlue">Make an Appointment</a>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Emergency Care */}
          <div className="relative group p-8 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="src/assets/heart.jpg"
              alt="Emergency Care"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-darkBlue group-hover:text-accentBlue transition-colors duration-300">Emergency Care</h2>
              <p className="mt-2 text-gray-600">
                We provide 24/7 emergency care with state-of-the-art facilities.
              </p>
            </div>
          </div>

          {/* Outpatient Services */}
          <div className="relative group p-8 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="src/assets/heart.jpg"
              alt="Outpatient Services"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-darkBlue group-hover:text-accentBlue transition-colors duration-300">Outpatient Services</h2>
              <p className="mt-2 text-gray-600">
                Comprehensive outpatient services available for a variety of specialties.
              </p>
            </div>
          </div>

          {/* Diagnostic Services */}
          <div className="relative group p-8 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="src/assets/heart.jpg"
              alt="Diagnostic Services"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-darkBlue group-hover:text-accentBlue transition-colors duration-300">Diagnostic Services</h2>
              <p className="mt-2 text-gray-600">
                Advanced diagnostic tools and expert consultations for accurate results.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
