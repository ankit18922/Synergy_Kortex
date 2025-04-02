import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import points from "../assets/points.png";
import student from "../assets/student.png";
import setting from "../assets/setting.png";
import team from "../assets/team.png";
import track from "../assets/track.png";
import storage from "../assets/Storage.png";
import operator from "../assets/operator.png";
import bgImage1 from "../assets/bgImage1.jpg";
import bgImage2 from "../assets/bgImage2.jpg";
import client from "../assets/client.png";
import product from "../assets/product.png";
import client2 from "../assets/client2.png";


// Hero Section Component
const HeroSection = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="relative py-12 px-6 md:px-12 lg:px-20 mx-4 md:mx-10 flex flex-col md:flex-row items-center justify-between overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-100/10 via-transparent to-teal-100/10 opacity-30"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="md:w-1/2 w-full space-y-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-indigo-500 text-sm font-semibold tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          CONNECTED WORKPLACE FOR RETAIL
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 120 }}
        >
          Keep Your <br /> Customers{" "}
          <span className="text-indigo-600">Coming Back</span>
        </motion.h1>
        <p className="text-gray-700 text-base md:text-lg font-medium max-w-md">
          Deliver exceptional customer experiences with streamlined store operations. Empower your teams with a solution that manages the full lifecycle of your retail locations:
        </p>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-3 text-gray-600 text-sm md:text-base"
        >
          {[
            "Facilities maintenance and vendor management",
            "Real estate and space planning",
            "Capital projects and more",
          ].map((item, index) => (
            <motion.li key={index} variants={itemVariants} className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0"
              >
                <img 
                  src={points} 
                  alt="Point" 
                  className="h-5 w-5 mr-3 filter brightness-100"
                  style={{ backgroundColor: 'transparent' }}
                />
              </motion.div>
              <span className="font-semibold">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
        <motion.button
          className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/schedule")}
        >
          Schedule a Demo
        </motion.button>
      </motion.div>
      <motion.div
        className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <img
          src={student}
          alt="Retail Visual"
          className="rounded-lg shadow-lg max-w-full h-auto md:max-h-[500px] md:max-w-[500px] object-contain"
        />
      </motion.div>
    </section>
  );
};

// Facilities Section Component
const FacilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section ref={ref} className="py-16 px-6 md:px-12 bg-gray-50">
      <motion.h3
        className="text-3xl font-bold text-gray-800 text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Great Retail Starts Here
      </motion.h3>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
        <motion.div
          className="md:w-1/2 w-full bg-white p-6 rounded-lg shadow-md space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h4 className="text-2xl font-semibold text-indigo-600">Facilities Made Simple</h4>
          <p className="text-gray-600 text-base">Effortless maintenance for happy customers.</p>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-3 text-gray-700"
          >
            {[
              "Manage teams and vendors with ease.",
              "Resolve issues quickly.",
              "Schedule upkeep seamlessly.",
            ].map((item, index) => (
              <motion.li key={index} variants={itemVariants} className="flex items-center">
                <span className="h-5 w-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">
                  ✔
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          className="md:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={operator}
            alt="Operator"
            className="w-full max-w-md rounded-lg shadow-md object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

// Lease Section Component
const LeaseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div ref={ref} className="bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center border-t-4 border-indigo-500">
      <motion.div
        className="md:w-3/5 w-full p-6 md:p-8 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-3xl font-bold text-gray-800">Master Your Leases</h3>
        <p className="text-gray-600 text-base">Simplify lease tracking and compliance.</p>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-3 text-gray-700"
        >
          {[
            "Automate alerts and workflows.",
            "Centralize all lease data.",
            "Comply with global standards.",
          ].map((item, index) => (
            <motion.li key={index} variants={itemVariants} className="flex items-center">
              <span className="h-5 w-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">
                ✔
              </span>
              {item}
            </motion.li>
          ))}
        </motion.ul>
        <motion.button
          className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          Learn More
        </motion.button>
      </motion.div>
      <motion.div
        className="md:w-2/5 w-full flex justify-center md:-ml-16"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          delay: 0.4,
        }}
      >
        <img
          src={product}
          alt="Product"
          className="w-full max-w-xs rounded-lg shadow-md object-contain transform md:-mt-12"
        />
      </motion.div>
    </div>
  );
};

// Main RetailPage Component
const RetailPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20 text-gray-900 overflow-hidden">
      {/* Creative Hero Section */}
      <HeroSection />

      {/* Store Visibility Section (2nd) - Unchanged */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achieve Complete Store Visibility
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-base md:text-lg font-medium max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay ahead with a complete view of your retail operations. Reduce costs, improve efficiency, and ensure smooth store management.
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { img: setting, title: "Optimize Store Operations", desc: "Track work orders, automate workflows, and manage vendors effortlessly." },
            { img: team, title: "Break Down Silos", desc: "Connect teams across Facilities and real estate for streamlined execution." },
            { img: track, title: "Improve Vendor Performance", desc: "Keep vendors on track with service-level agreements and reliable equipment." },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.img 
                src={card.img} 
                alt={card.title} 
                className="h-16 w-16 mb-4 object-contain"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (0.2 * index) }}
                whileHover={{ rotate: 360 }}
              />
              <motion.h3 
                className="text-xl font-semibold text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (0.2 * index) }}
              >
                {card.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-sm mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + (0.2 * index) }}
              >
                {card.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Case Study Section (3rd) - Unchanged */}
      <section className="relative py-16 px-6 md:px-12 bg-gradient-to-br from-indigo-600 to-teal-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-opacity-10 bg-black pointer-events-none" />
        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 w-full">
            <img
              src={storage}
              alt="Warehouse Operations"
              className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full h-auto max-h-[400px] object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full text-center md:text-left space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              A Retail Success Story
            </h2>
            <p className="text-lg md:text-xl italic font-light max-w-md mx-auto md:mx-0">
              "Partnering with Synergy Kortex transformed our store operations, giving us unprecedented visibility and efficiency."
            </p>
            <button className="mt-6 bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-100 transition-all duration-300 shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Facilities Made Simple */}
      <FacilitiesSection />

      {/* Dispatch & Lease Sections (5th) */}
      <section className="py-16 px-6 md:px-12 space-y-16">
        <div className="relative bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center transition-all duration-300 hover:shadow-2xl">
          <div className="md:w-1/2 w-full p-6 md:p-8 space-y-4 bg-gradient-to-br from-gray-50 to-white">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 animate-fade-in-up">
              Streamline Your Dispatch Process
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Ensure technicians arrive on time, reducing downtime and boosting first-time fix rates for maximum efficiency.
            </p>
            <ul className="list-none pl-0 space-y-2 text-gray-700">
              {[
                "Automate scheduling to optimize resource allocation.",
                "Monitor vendor performance and predict maintenance needs.",
                "Enhance customer satisfaction with reliable service delivery.",
              ].map((item, index) => (
                <li key={index} className="flex items-start animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <span className="flex-shrink-0 h-5 w-5 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-2 text-sm">
                    ✓
                  </span>
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Explore Dispatch Tools
            </button>
          </div>
          <div className="md:w-1/2 w-full h-56 md:h-80 relative group">
            <img
              src={bgImage1}
              alt="Background"
              className="w-full h-full object-cover opacity-20 absolute inset-0 transition-opacity duration-300 group-hover:opacity-30"
            />
            <img
              src={client}
              alt="Client"
              className="relative z-10 w-full h-full object-contain p-4 md:p-6 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        <LeaseSection />
      </section>

      {/* Call to Action Section (6th) - Unchanged */}
      <section className="relative py-16 px-6 md:px-12 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1/2 border-t-2 border-blue-400 border-opacity-50 wave-top" />
          <div className="absolute bottom-0 right-0 w-full h-1/2 border-b-2 border-yellow-400 border-opacity-50 wave-bottom" />
        </div>
        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0">
            <img
              src={client2}
              alt="Client Left"
              className="w-full h-full rounded-full shadow-lg border-2 border-white transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-xl text-center space-y-4 max-w-md w-full transform transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 animate-fade-in-up">
              See It In Action
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Sign up for a personalized demo to reimagine your retail operations.
            </p>
            <button className="bg-cyan-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-500 transition-all duration-300 shadow-md hover:shadow-lg" 
                    onClick={() => navigate("/schedule")}>
              Schedule a Demo
            </button>
          </div>
          <div className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0">
            <img
              src={client}
              alt="Client Right"
              className="w-full h-full rounded-full shadow-lg border-2 border-white transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetailPage;
