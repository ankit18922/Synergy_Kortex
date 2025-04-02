import React from "react";
import { motion } from "framer-motion"; // Add this import
import "animate.css";

const services = [
  {
    title: "Web Development",
    description:
      "We provide professional web development services, creating responsive, user-friendly, and high-performance websites tailored to your needs.",
    img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg?t=st=1742794969~exp=1742798569~hmac=14273bc05d1400c3eb588fe7ee015222a17326f4ce7db0194aa824a5a8186e09&w=826",
  },
  {
    title: "App Development",
    description:
      "We develop high-performance, user-friendly mobile and web applications tailored to your needs.",
    img: "https://img.freepik.com/free-vector/programming-languages-learning-software-coding-courses-website-development-class-script-writing-it-programmers-cartoon-characters_335657-789.jpg?t=st=1742795273~exp=1742798873~hmac=5c3c7fefd9ab07b617bf370fd4bcc7d30a4e242e5c944082aabcd20bd824c8ce&w=826",
  },
  {
    title: "Java Development",
    description:
      "We offer robust Java development services, building secure, scalable, and high-performance applications.",
    img: "https://img.freepik.com/free-vector/online-training-concept-illustration_114360-22426.jpg?t=st=1742795190~exp=1742798790~hmac=c477d8af09c321981b56eb614ee6af131daf1635b9a42a36e895a84d13134a3f&w=826",
  },
  {
    title: "Python Development",
    description:
      "We provide expert Python development services, crafting scalable, secure, and high-performance applications.",
    img: "https://img.freepik.com/free-vector/programming-languages-learning-software-coding-courses-website-development-class-script-writing-it-programmers-cartoon-characters_335657-3454.jpg?t=st=1742795142~exp=1742798742~hmac=917e98334593847a865a76d90ec09fd540210d8f9bb9ac81fd932c33b4d75e99&w=826",
  },
];

function Public() {
  return (
    <>
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-center bg-white-50 p-6 md:p-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Image Section */}
        <motion.div 
          className="md:w-1/2 w-full flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="https://imageio.forbes.com/specials-images/imageserve/5daa08776763cb0006091765/Group-of-businesspeople-high-fiving-while-sitting-in-a-meeting-/960x0.jpg?format=jpg&width=960"
            alt="Sales Analytics"
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="md:w-1/2 w-full text-center md:text-left mt-6 md:mt-0 md:pl-10"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-gray-900"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect Your Teams
          </motion.h2>
          <p className="text-gray-700 mt-4 animate__animated animate__fadeIn animate__delay-1s text-left">
            Consolidate systems across various departments for operational efficiency. <br />
            Drive digital transformation throughout your organization by consolidating separate systems across:
          </p>
          <div className="mt-6 space-y-3">
            {["Maintenance & Asset Management", "Physical Space Allocation", "Construction Projects", "Real Estate Planning", "Infrastructure Development"].map(
              (item, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-gray-800 transform transition duration-300 hover:translate-x-2 animate__animated animate__fadeInLeft"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold transition duration-300 hover:bg-blue-600 animate__animated animate__bounceIn"
                    style={{ animationDelay: `${idx * 0.3}s` }}>
                    ✔
                  </span>
                  <span className="ml-3 font-semibold">{item}</span>
                </div>
              )
            )}
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="flex flex-col md:flex-row items-center justify-center bg-white-50 p-6 md:p-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Content Section */}
        <motion.div 
          className="md:w-1/2 w-full text-center md:text-left mt-6 md:mt-0 md:pr-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-gray-900 transition duration-300 hover:text-blue-600"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Optimize sales with data-driven insights and analytics.
          </motion.h2>
          <motion.p 
            className="text-gray-700 mt-4 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our intelligent sales reporting and analytics platform provides a complete view of your sales data, empowering you to make data-driven decisions, increase efficiency, and drive revenue growth.
          </motion.p>
          <motion.div 
            className="mt-6 space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {["Streamlined sales analysis", "Enhanced sales performance tracking", "Improved decision making", "Budgeting & Cost Control", "Risk & Compliance Management"].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center text-gray-800"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                whileHover={{ x: 10 }}
              >
                <motion.span 
                  className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold"
                  whileHover={{ scale: 1.2, backgroundColor: "#4338ca" }}
                  transition={{ duration: 0.2 }}
                >
                  {idx + 1}
                </motion.span>
                <span className="ml-3 font-semibold">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww"
            alt="Sales Analytics"
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center bg-white-50 p-6 md:p-12 animate__animated animate__fadeIn">
        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0 transform transition duration-500 hover:scale-105">
          <img
            src="https://wallpapers.com/images/hd/futuristic-project-management-inbiirodqxwccs7h.jpg"
            alt="Project Management Analytics"
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-full"
          />
        </div>

        {/* Content Section */}
        <motion.div 
          className="md:w-1/2 w-full text-center md:text-left mt-6 md:mt-0 md:pl-10"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-blue-600"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Achieve Operational Efficiency
          </motion.h2>
          <motion.p 
            className="text-gray-700 mt-4 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Bring together all aspects of enterprise service management into one platform. <br />
            All aspects of your organization's enterprise service management, together on one platform, built on ServiceNow™.
          </motion.p>
          {/* <motion.div 
            className="mt-6 space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              "Ensure Complete Connectivity",
              "Enable Agencies & Mission Partners",
              "Access Data Anytime",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center text-gray-800"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                whileHover={{ x: 10 }}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </motion.div> */}
          <motion.div 
            className="mt-6 space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {["Ensure Complete Connectivity", "Enable Agencies & Mission Partners", "Access Data Anytime", "Space Optimization", "Energy & Sustainability Management"].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center text-gray-800"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                whileHover={{ x: 10 }}
              >
                <motion.span 
                  className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold"
                  whileHover={{ scale: 1.2, backgroundColor: "#4338ca" }}
                  transition={{ duration: 0.2 }}
                >
                  {idx + 1}
                </motion.span>
                <span className="ml-3 font-semibold">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <section className="py-12 bg-white text-center animate__animated animate__fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 transition duration-300 hover:text-indigo-600">
          Our <span className="text-gray-900">Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:shadow-2xl hover:-translate-y-2 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 object-contain mb-4 transition duration-300 hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-gray-800 transition duration-300 hover:text-indigo-600">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Public;