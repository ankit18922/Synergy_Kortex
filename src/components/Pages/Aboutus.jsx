import React from "react";

// Counter Component
const Counter = () => {
  return (
    <div className="flex justify-around w-full bg-gray-800 py-8">
      {[
        { number: "400+", label: "Projects Completed" },
        { number: "150+", label: "Happy Clients" },
        { number: "5+", label: "Years of Experience" },
      ].map((item, index) => (
        <div key={index} className="text-center">
          <span className="text-4xl font-bold text-white">{item.number}</span>
          <p className="text-lg text-gray-300">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="font-sans">
      {/* Who We Are Section */}
      <div className="relative w-full bg-cover bg-center py-16">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 md:px-12 bg-white bg-opacity-90 rounded-lg shadow-md">
          {/* Left - Text Content */}
          <div className="max-w-lg text-left mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl font-bold mb-6 uppercase">Who We Are</h1>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-6 text-justify">
              We're a company built on a clear set of values. Our goal is to empower you to do your best work
              in the most efficient way possible. That shines through in everything we do, from innovation
              to delivery, we strive to deliver a solution that makes you proud of the work that you do.
            </p>
          </div>

          {/* Right - 3 Images Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Image on Left */}
            <div className="md:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="About Company"
                className="w-full h-80 rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* 2 Smaller Images on Right */}
            <div className="flex flex-col space-y-6">
              <img
                src="https://img.freepik.com/free-photo/people-social-distancing-work_23-2148961706.jpg?t=st=1742837040~exp=1742840640~hmac=f6363d7ae40f76e210620057dc2de8c3c0d85d538ccd04272405ba3a72dc8e29&w=1380"
                alt="Team Collaboration"
                className="w-full h-36 rounded-lg shadow-lg object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Office Environment"
                className="w-full h-36 rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Counter Section */}
      <Counter />

      {/* Our Worldwide Offices Section */}
      <div className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase">
          Our Worldwide Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            { 
              name: "United States", 
              image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            },
            { 
              name: "United Kingdom", 
              image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            },
            { 
              name: "India", 
              image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            },
            { 
              name: "Canada", 
              image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            },
            { 
              name: "Australia", 
              image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            },
            { 
              name: "Germany", 
              image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            },
          ].map((office, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={office.image}
                alt={`${office.name} Office`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  Synergy Kortex
                </h3>
                <p className="text-gray-600">{office.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Investors Section */}
      {/* <div className="bg-white py-16">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase">
          Our Investors
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { 
              name: "Insight Partners", 
              image: "https://logo.clearbit.com/insightpartners.com" 
            },
            { 
              name: "Kaiser Permanente", 
              image: "https://logo.clearbit.com/kaiserpermanente.org" 
            },
            { 
              name: "NEA", 
              image: "https://logo.clearbit.com/nea.com" 
            },
            { 
              name: "Revelation Partners", 
              image: "https://logo.clearbit.com/revolution.com" 
            },
            { 
              name: "ServiceNow", 
              image: "https://logo.clearbit.com/servicenow.com" 
            },
          ].map((investor, index) => (
            <img
              key={index}
              src={investor.image}
              alt={investor.name}
              className="w-40 h-auto grayscale hover:grayscale-0 transition-transform transform hover:scale-110"
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;