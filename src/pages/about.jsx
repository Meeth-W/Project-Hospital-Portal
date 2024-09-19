import React from 'react';

function About() {
  return (
    <section className="bg-gray-100 py-16" id="about">
      <div className="max-w-screen-xl mx-auto px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBlue">About Us</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are committed to providing excellent healthcare services and advancing the health and well-being of our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="relative">
            <img
              src="src/assets/hospital.jpg"
              alt="About Our Organization"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-darkBlue">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              Our mission is to provide compassionate, patient-centered care of the highest quality, while striving to innovate and improve medical care through research and education.
            </p>

            <h3 className="text-2xl font-semibold text-darkBlue mt-8">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              We envision a world where quality healthcare is accessible to everyone. We are dedicated to creating a healthier future by delivering innovative and evidence-based medical care.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-3xl font-semibold text-darkBlue">Our Expertise</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Expertise Card 1 */}
            <div className="relative group p-8 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out">
              <h4 className="text-xl font-semibold text-darkBlue">Cardiology</h4>
              <div className="mt-4 overflow-hidden transition-all duration-500 ease-in-out max-h-24 group-hover:max-h-[400px]">
                <p className="text-gray-600">
                  Our cardiology department provides comprehensive care, offering the latest in diagnostics and treatment for heart-related conditions. Our specialized team ensures that each patient receives personalized care tailored to their individual needs.
                </p>
              </div>
            </div>

            {/* Expertise Card 2 */}
            <div className="relative group p-8 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out">
              <h4 className="text-xl font-semibold text-darkBlue">Neurology</h4>
              <div className="mt-4 overflow-hidden transition-all duration-500 ease-in-out max-h-24 group-hover:max-h-[400px]">
                <p className="text-gray-600">
                  We specialize in diagnosing and treating disorders of the brain and nervous system with cutting-edge techniques. Our neurologists work closely with other specialists to provide integrated care for all neurological conditions.
                </p>
              </div>
            </div>

            {/* Expertise Card 3 */}
            <div className="relative group p-8 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out">
              <h4 className="text-xl font-semibold text-darkBlue">Pediatrics</h4>
              <div className="mt-4 overflow-hidden transition-all duration-500 ease-in-out max-h-24 group-hover:max-h-[400px]">
                <p className="text-gray-600">
                  Our pediatric department offers specialized healthcare services for infants, children, and adolescents. From routine check-ups to advanced treatments, we provide age-appropriate care with a focus on long-term well-being.
                </p>
              </div>
            </div>

            {/* Expertise Card 4 */}
            <div className="relative group p-8 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out">
              <h4 className="text-xl font-semibold text-darkBlue">Orthopedics</h4>
              <div className="mt-4 overflow-hidden transition-all duration-500 ease-in-out max-h-24 group-hover:max-h-[400px]">
                <p className="text-gray-600">
                  We provide advanced care for musculoskeletal disorders, offering surgical and non-surgical treatments. Our orthopedic specialists are experts in treating a variety of conditions, ensuring mobility and reducing pain for patients.
                </p>
              </div>
            </div>

            {/* Expertise Card 5 */}
            <div className="relative group p-8 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out">
              <h4 className="text-xl font-semibold text-darkBlue">Oncology</h4>
              <div className="mt-4 overflow-hidden transition-all duration-500 ease-in-out max-h-24 group-hover:max-h-[400px]">
                <p className="text-gray-600">
                  Our oncology department is equipped with the latest technology and expertise to treat various types of cancers. We focus on providing personalized care plans that ensure patients receive the most appropriate treatments for their condition.
                </p>
              </div>
            </div>

            {/* Expertise Card 6 */}
            <div className="relative group p-8 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out">
              <h4 className="text-xl font-semibold text-darkBlue">Emergency Care</h4>
              <div className="mt-4 overflow-hidden transition-all duration-500 ease-in-out max-h-24 group-hover:max-h-[400px]">
                <p className="text-gray-600">
                  We offer 24/7 emergency services with a highly skilled team ready to provide urgent medical care. Our emergency department is equipped to handle a wide range of critical situations, ensuring quick and efficient care.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
