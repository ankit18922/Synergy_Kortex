import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
  FaChartBar,
  FaCloud,
  FaShieldAlt,
  FaLightbulb,
  FaRobot,
  FaUserTie,
  FaHospital,
  FaUniversity,
  FaShoppingBag,
  FaFlask,
  FaBook,
  FaCogs,
  FaClipboardCheck,
  FaTasks,
  FaHeadset
} from "react-icons/fa";

const services = [
  { title: "Web Development", category: "DEVELOPMENT", description: "Custom websites and web applications to deliver exceptional user experiences.", icon: <FaLaptopCode /> },
  { title: "UI/UX Design", category: "DESIGN", description: "User-centric design solutions that enhance usability and appeal.", icon: <FaPaintBrush /> },
  { title: "App Development", category: "MOBILE", description: "Feature-rich mobile applications for iOS and Android users.", icon: <FaMobileAlt /> },
  { title: "Data Analytics", category: "DATA", description: "Transform your data into insights for informed decision-making.", icon: <FaChartBar /> },
  { title: "Cloud Services", category: "INFRASTRUCTURE", description: "Scalable cloud solutions to optimize your business operations.", icon: <FaCloud /> },
  { title: "Cybersecurity", category: "SECURITY", description: "Comprehensive security solutions to protect your digital assets.", icon: <FaShieldAlt /> },
  { title: "IT Consulting", category: "IT CONSULTING", description: "Strategic technology consulting to help businesses achieve goals.", icon: <FaLightbulb /> },
  { title: "AI Solutions", category: "INNOVATION", description: "Cutting-edge AI and machine learning implementations.", icon: <FaRobot /> },
];

const steps = [
  { step: "STEP 1", title: "Discovery", description: "We analyze requirements and business needs.", icon: <FaCogs /> },
  { step: "STEP 2", title: "Planning", description: "We create a structured roadmap with strategies and resource allocation.", icon: <FaClipboardCheck /> },
  { step: "STEP 3", title: "Execution", description: "Our team delivers high-quality solutions on time.", icon: <FaTasks /> },
  { step: "STEP 4", title: "Customer Satisfaction", description: "Ongoing maintenance and performance monitoring.", icon: <FaHeadset /> },
];

const industries = [
  { name: "Healthcare", icon: <FaHospital /> },
  { name: "Public Sector", icon: <FaUniversity /> },
  { name: "Retail", icon: <FaShoppingBag /> },
  { name: "Life Sciences", icon: <FaFlask /> },
  { name: "Education", icon: <FaBook /> },
];

export default function OurServices() {
  return (
    <div className="bg-gray-100 text-gray-900 overflow-x-hidden">

      {/* Our Services Section */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p>Comprehensive solutions tailored to your business needs</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 mt-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-5xl text-blue-500 mb-4">{service.icon}</div>
              <h4 className="text-sm font-semibold text-gray-500">{service.category}</h4>
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-sm mt-2">{service.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Learn More</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How We Work Section */}
      <section className="text-center py-10 bg-blue-50">
        <h2 className="text-3xl font-bold">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 mt-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-5xl text-green-500 mb-4">{step.icon}</div>
              <h4 className="text-sm font-semibold text-gray-500">{step.step}</h4>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-sm mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industry Knowledge Section */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold">Our Industry Knowledge</h2>
        <p>Our industry knowledge runs deep. Explore Connected Workplace for:</p>
        <div className="mt-6 space-y-4">
          {industries.map((industry, index) => (
            <div key={index} className="flex items-center justify-center space-x-2 text-xl transition-transform transform hover:scale-110">
              <div className="text-2xl">{industry.icon}</div>
              <span className="text-lg font-semibold">{industry.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}