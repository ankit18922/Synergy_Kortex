import React from "react";
import { motion } from "framer-motion";
import "./Customer.css";

const supportFeatures = [
  {
    id: 1,
    icon: "📊",
    title: "All Day, Every Day",
    description: "Industry-leading technical support when you need it.",
  },
  {
    id: 2,
    icon: "❤️",
    title: "Easy-to-Use Portal",
    description: "Quickly request enhancements or report issues.",
  },
  {
    id: 3,
    icon: "💼",
    title: "Customer Obsessed",
    description: "Direct access to a dedicated CSM who knows your projects and objectives.",
  },
];

const Customer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="customer-container"
    >
      <div id="cus" className="content-section">
        <div className="content">
          <h2 className="text-black">Who We Are</h2>
          <p><strong>Innovating the Future of Workplace Management</strong></p>
          <p>
            At Synergy Kortex, we specialize in delivering intelligent, scalable, and secure workplace management solutions.
            Our mission is to streamline operations, enhance efficiency, and drive digital transformation across industries.
          </p>
          <ul>
            <li><strong>Seamless Integration</strong> – Unified platforms for optimized workflows.</li>
            <li><strong>Data-Driven Insights</strong> – Smart analytics for informed decision-making.</li>
            <li><strong>Advanced Technology</strong> – AI-powered solutions for modern enterprises.</li>
          </ul>
          <a href="#" className="read-more bg-primary text-light">Read More</a>
        </div>

        <div className="grid-images">
          <div className="parent">
            <div className="div1">
              <motion.img 
                src="https://img.freepik.com/free-photo/workers-it-company-working-computer_1303-19432.jpg?t=st=1742836870~exp=1742840470~hmac=c5a880e86601bb8d86c8630f9ccc539554cb4485921ef1a85802c2ef7011abb0&w=740" 
                alt="Team collaboration" 
                whileHover={{ scale: 1.1 }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="div2">
              <motion.img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Business meeting" 
                whileHover={{ scale: 1.1 }} 
              />
            </div>
            <div className="div3">
              <motion.img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Data analytics" 
                whileHover={{ scale: 1.1 }} 
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-4 border-white mt-5" />

      <section className="bg-gray-100 py-12 px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Support For Your Connected Workplace
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportFeatures.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-blue-600">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-4 border-white mt-5" />  

      {/* <div className="partners-section">
        <h3 id="cuh3">Our Trusted Partners</h3>
        <motion.div
          className="partners-logos"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          <motion.img 
            src="https://media.istockphoto.com/id/1687997725/vector/initial-letter-ai-modern-logo-design-artificial-intelligence-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=gu15-BVIN8egl0PKSVPHEOIZnM1YCeQkyyDuiCQDM1w=" 
            alt="Partner 1" 
            whileHover={{ scale: 1.1 }} 
          />
          <motion.img 
            src="https://static.vecteezy.com/system/resources/thumbnails/011/883/287/small/modern-letter-c-colorful-logo-with-watter-drop-good-for-technology-logo-company-logo-dummy-logo-bussiness-logo-free-vector.jpg" 
            alt="Partner 2" 
            whileHover={{ scale: 1.1 }} 
          />
          <motion.img 
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/95965191-fd9b-43bd-b32a-1a00e55b0e02/d2pgs6a-8006bf26-2f11-4158-b9a1-d024688b8433.jpg" 
            alt="Partner 3" 
            whileHover={{ scale: 1.1 }} 
          />
          <motion.img 
            src="https://img.freepik.com/free-vector/pink-gradient-social-media-logo_23-2148291522.jpg?semt=ais_hybrid" 
            alt="Partner 4" 
            whileHover={{ scale: 1.1 }} 
          />
          <motion.img 
            src="https://img.freepik.com/free-vector/logo-tie-design-template_474888-1906.jpg" 
            alt="Partner 5" 
            whileHover={{ scale: 1.1 }} 
          />
          <motion.img 
            src="https://q8i4i8g7.delivery.rocketcdn.me/wp-content/uploads/2020/10/99gen_towers.png" 
            alt="Partner 6" 
            whileHover={{ scale: 1.1 }} 
          />
        </motion.div>
      </div> */}
    </motion.div>
  );
};

export default Customer;