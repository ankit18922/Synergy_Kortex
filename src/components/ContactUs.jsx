import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="font-sans">
      
      {/* Contact Section */}
      <motion.section 
        className="text-center p-10 bg-gray-100"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div className="bg-white p-6 rounded-lg shadow-md" whileHover={{ scale: 1.05 }}>
            <h3 className="text-blue-600 font-semibold">Address</h3>
            <p>Noida, Uttar Pradesh, India</p>
          </motion.div>
          <motion.div className="bg-white p-6 rounded-lg shadow-md" whileHover={{ scale: 1.05 }}>
            <h3 className="text-blue-600 font-semibold">Call Us</h3>
            <p>6307915525</p>
          </motion.div>
          <motion.div className="bg-white p-6 rounded-lg shadow-md" whileHover={{ scale: 1.05 }}>
            <h3 className="text-blue-600 font-semibold">Email Us</h3>
            <p>synergykortex@gmail.com</p>
          </motion.div>
        </motion.div>
      </motion.section>
      
      {/* Map and Contact Form Section */}
      <motion.section 
        className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
               

      {/* </motion.section>
      <motion.section> */}

      {/* <iframe
          className="w-full h-96 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.695847769837!2d72.99867267507777!3d19.07292765299164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c128a88c8c6d%3A0xa15b17e7b4eeb3df!2sMillennium%20Business%20Park!5e0!3m2!1sen!2sin!4v1711900000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe> */}
        
                      
        <motion.div 
          className="bg-gray-100 p-6 rounded-lg shadow-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl text-center font-semibold">Get in Touch</h3>
          <motion.form 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="p-2 border rounded" />
              <input type="email" placeholder="Your Email" className="p-2 border rounded" />
            </div>
            <input type="text" placeholder="Subject" className="w-full p-2 mt-4 border rounded" />
            <textarea placeholder="Message" className="w-full p-2 mt-4 border rounded h-32"></textarea>
            <motion.button 
              className="w-full mt-4 bg-blue-600 text-white py-2 rounded"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ContactPage;