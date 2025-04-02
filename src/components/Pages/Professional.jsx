import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Professional() {
  const navigate = useNavigate();
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <header className="bg-blue-900 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-2">Professional Services for a Modern Workforce</h1>
        <p className="text-gray-300 mb-8">Transforming your business with smart, scalable solutions</p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded hover:bg-gray-100 transition duration-300" onClick={() => navigate("/services")}>
          Discover Our Services
        </button>
      </header>

      {/* Why Choose Us Section */}
      <motion.section 
        className="py-16 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Left - Text Section */}
          <motion.div 
            className="md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.5, 
              type: "spring", 
              bounce: 0.3,
              delay: 0.2 
            }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-6 uppercase"
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              Why Choose Us
            </motion.h2>
            <motion.p 
              className="text-gray-700 leading-relaxed text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2, 
                delay: 0.8,
                type: "spring",
                bounce: 0.2
              }}
            >
              At Synergy Kortex, we believe in the power of collaboration. Our team of
              experts is dedicated to providing solutions that help your business  
              improve efficiency, reduce costs, and adapt to the ever-changing
              technological landscape. Whether it's financial management,
              performance optimization, talent acquisition, or operational strategies,
              we have the expertise to deliver impactful results. By working closely
              with you, we create tailored solutions that drive sustainable growth,
              enhance productivity, and ensure long-term success in a competitive
              market.
            </motion.p>
          </motion.div>

          {/* Right - Image Section */}
          <motion.div 
            className="md:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.5, 
              type: "spring", 
              bounce: 0.3,
              delay: 0.4 
            }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Business professionals collaborating" 
              className="w-3/4 rounded-lg shadow-lg mx-auto md:ml-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Our Premium Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Consulting & Strategy",
                description: "We provide strategic consulting to help businesses achieve their full potential with tailored solutions, driving growth and innovation.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                title: "Business Optimization",
                description: "Optimize your operations with our data-driven insights and industry-leading technologies, ensuring efficiency, profitability, and growth.",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                title: "Talent Acquisition",
                description: "Attract and retain top talent with our specialized recruitment and HR solutions, fostering innovation and organizational success.",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.2,
                  delay: index * 0.3,
                  type: "spring",
                  bounce: 0.2
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.3 }}
                />
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center uppercase">Client Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="border border-gray-200 rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <p className="text-gray-600 italic mb-6">
              "The entire team is very customer-focused, resourceful, and extremely proficient at explaining
              how the application works. Thank you to the team for this successful implementation."
            </p>
            <div className="text-center">
              <p className="font-semibold">Large Hospital</p>
              <p className="text-gray-500 text-sm">Facilities Director</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="border border-gray-200 rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <p className="text-gray-600 italic mb-6">
              "This was a complex project, and we appreciate your dedication, professionalism, and attention to
              detail. Your efforts made the process smoother, and we're grateful for the support."
            </p>
            <div className="text-center">
              <p className="font-semibold">Manufacturing</p>
              <p className="text-gray-500 text-sm">Facilities Manager</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="border border-gray-200 rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <p className="text-gray-600 italic mb-6">
              "I want to thank your team for their willingness to listen to the customer, providing valuable
              solutions, and sharing constraints/limitations to reach mutually acceptable solutions."
            </p>
            <div className="text-center">
              <p className="font-semibold">Higher Education</p>
              <p className="text-gray-500 text-sm">University Administrator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-8 text-black">
            We'd love to discuss how we can assist you in achieving your business goals. Contact us to schedule a consultation.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded transition duration-300" onClick={() => navigate("/ContactPage")}>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}