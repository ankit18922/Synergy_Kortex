import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useInView } from 'react-intersection-observer';

const Healthcare = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const cards = [
    {
      image: "https://github.com/ankit18922/Synergy_Kortex/blob/new-branch/src/assets/H2.gif?raw=true",
      title: "Break Down Silos",
      description: "Enable your teams to make better decisions based on real-time data across support teams"
    },
    {
      image: "https://github.com/ankit18922/Synergy_Kortex/blob/new-branch/src/assets/H3.gif?raw=true",
      title: "Optimize Operations",
      description: "Connect equipment and asset data, automate work orders, and manage priorities and expenses"
    },
    {
      image: "https://github.com/ankit18922/Synergy_Kortex/blob/new-branch/src/assets/H4.gif?raw=true",
      title: "Be Regulatory Ready",
      description: "Maintain accurate documentation and ensure processes are followed with built-in compliance controls"
    }
  ];

  return (
    <>
           <section className="bg-white py-12 overflow-hidden border-l-8 border-[#fffff]">
  <div className="container mx-auto px-4 sm:px-15 sm:pl-16">
    <div className="flex flex-col lg:flex-row items-center justify-between">
      {/* Image Section - First on mobile, right on desktop */}
      <motion.div 
        className="order-first lg:order-last w-full lg:w-1/2 relative mb-8 lg:mb-0"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative w-full flex justify-center px-4 sm:px-0">
          
          <img
            src="https://github.com/ankit18922/Synergy_Kortex/blob/new-branch/src/assets/h1.png?raw=true"
            alt="Life Sciences"
            className="w-full sm:w-[350px] md:w-[450px] lg:w-full h-auto rounded-2xl max-w-[500px]"
            style={{
              objectFit: 'cover',
              width: '100%',
              
            }}
          />
          
          
         
          {/* Decorative elements with responsive positioning */}
          <div className="absolute -top-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 bg-[#E6F7FF] rounded-full -z-10"></div>
          <div className="absolute -bottom-4 -left-4 w-20 sm:w-24 h-20 sm:h-24 bg-[#FFF4E6] rounded-full -z-10"></div>
          <div className="absolute top-1/2 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-[#E6FFE6] rounded-full -z-10"></div>
        </div>
      </motion.div>

      {/* Content Section - Second on mobile, left on desktop */}
      <motion.div 
        className="order-last lg:order-first lg:w-1/2 mb-8 lg:mb-0 pr-0 lg:pr-10 px-4 sm:px-0"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span 
          className="text-[#0D6EFD] text-sm md:text-base font-semibold tracking-wider mb-3 block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Connected Workplace for Healthcare
        </motion.span>

        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Unite Support<br />
          Teams
        </motion.h1>

        <motion.p 
          className="text-gray-600 text-base md:text-lg mb-8 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
         Collaboration across support teams means focusing on what matters – patient care. Connect every aspect of your hospital including:
        </motion.p>

        <motion.ul 
          className="space-y-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <li className="flex items-start">
            <span className="text-[#0D6EFD] text-2xl mr-2">•</span>
            <span className="text-gray-700">Clinical equipment and facilities management</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#0D6EFD] text-2xl mr-2">•</span>
            <span className="text-gray-700">Real estate and space planning</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#0D6EFD] text-2xl mr-2">•</span>
            <span className="text-gray-700">Capital planning and projects</span>
          </li>
        </motion.ul>

        <motion.button
          className="bg-[#0D6EFD] text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-[#0b5ed7] transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/schedule")}
        >
          SCHEDULE A DEMO
        </motion.button>
      </motion.div>
    </div>
  </div>
</section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-block mb-2"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-blue-50 text-blue-600 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                Workplace Solutions
              </div>
            </motion.div>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-[42px] font-bold mb-5 text-[#1A1A1A] relative"
            >
              One View Into Your Operations
              <motion.div 
                className="absolute -z-10 w-full h-1.5 sm:h-2 bg-blue-100/50 bottom-1 sm:bottom-2 left-0"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-[800px] mx-auto leading-relaxed"
            >
              Eliminate old technology and manual processes. Share information, and work together from one solution that has the capabilities each team needs.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12" ref={ref}>
            {cards.map((card, i) => (
              <motion.div 
                key={i}
                className="text-center p-8 rounded-2xl bg-gradient-to-b from-white to-blue-50/30 hover:shadow-2xl transition-all duration-500 relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div 
                  className="flex justify-center mb-8 relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.img 
                    src={card.image}
                    alt={card.title}
                    className="w-28 h-28 relative z-10"
                    initial={{ rotate: -180, scale: 0.8 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.4 + i * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold mb-4 text-[#1A1A1A] relative inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.2 }}
                  whileHover={{ 
                    color: "#0D6EFD",
                    transition: { duration: 0.2 }
                  }}
                >
                  {card.title}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.h3>
                <motion.p 
                  className="text-gray-600 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.2 }}
                >
                  {card.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#003366] to-[#006699] py-24 overflow-hidden relative">
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{ backgroundPosition: '100% 100%' }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,...)'
          }}
        />

        <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-16 relative z-10">
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 50,
              damping: 25,
              mass: 1,
              duration: 1.2
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="relative rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src="https://github.com/ankit18922/Synergy_Kortex/blob/new-branch/src/assets/H5.jpg?raw=true"
                alt="GMP Facilities"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
                style={{ maxWidth: '550px' }}
                whileHover={{ filter: 'brightness(1.1)' }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-blue-400/40 rounded-full -z-10 backdrop-blur-sm"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-yellow-200/40 to-orange-300/40 rounded-full -z-10 backdrop-blur-sm"
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
      
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              className="text-4xl md:text-[42px] font-bold text-white mb-6 leading-tight relative"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            >
              Why Indian Health Service Chose Synergy Kortex

              <motion.div 
                className="absolute -z-10 w-full h-2 bg-white/10 bottom-0 left-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </motion.h2>
            
            <motion.p 
              className="text-white/90 text-lg mb-8 leading-relaxed"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              "Everybody is calling a device the same thing. Everybody is referring to the same make and models and are starting to refer to locations, buildings, and rooms using the same nomenclature, so that any reports we get are meaningful."

            </motion.p>
      
            <motion.button
              className="group bg-white text-[#003366] px-8 py-3 rounded-lg font-semibold 
                       relative overflow-hidden transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span className="relative z-10 group-hover:text-white transition-colors duration-500">
                READ THE CASE STUDY
              </motion.span>
              <motion.div 
                className="absolute inset-0 bg-[#003366] transform origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-[42px] font-bold mb-5 text-[#1A1A1A]"
            >
              Explore the Benefits of Connected Workplace for Healthcare
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-[800px] mx-auto leading-relaxed"
            >
              Whether you’re a large university or a mid-sized institution, we can help you connect all your people, processes, and spaces across your campus.
            </motion.p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-start gap-16">
            <motion.div
              className="lg:w-[45%]"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h3
                className="text-[32px] font-bold mb-4 text-[#1A1A1A]"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Improve Patient Care
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-8 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Support patient care by completing work faster and more efficiently. 
              </motion.p>
              <motion.ul className="space-y-6">
                {[
                  "Identify the correct support team and notify them immediately when an issue occurs.",
                  "Collaborate on multi-departmental projects for better outcomes.",
                  "Identify and remediate medical device cybersecurity threats quickly."
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className="text-[#0D6EFD] mt-1.5">
                      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                        <circle cx="8" cy="8" r="8"/>
                      </svg>
                    </span>
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
  className="lg:w-[55%] relative"
  initial={{ x: 50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <div className="relative w-full flex justify-center">
   
    <img
      src="https://github.com/ankit18922/Synergy_Kortex/blob/new-branch/src/assets/H6.jpg?raw=true"
      alt="Life Sciences"
      className="w-full sm:w-auto h-auto rounded-2xl sm:max-w-[200px] md:max-w-[200px] lg:max-w-[600px] object-cover"
    />
  </div>
</motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-[42px] font-bold mb-5 text-[#1A1A1A]"
            >
              Streamline Safety & Regulatory Compliance
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-[800px] mx-auto leading-relaxed"
            >
              Ensure compliance with automation and data when you need it. 
            </motion.p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-start gap-16">
            <motion.div
              className="lg:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.img
                  src="https://github.com/ankit18922/Synergy_Kortex/blob/new-branch/src/assets/H7.jpg?raw=true"
                  alt="Calibration Equipment"
                  className="w-full rounded-lg shadow-lg max-w-[550px]"
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                />
                <motion.img
                  src="https://github.com/ankit18922/Synergy_Kortex/blob/new-branch/src/assets/life9.gif?raw=true"
                  alt="Statistics Chart"
                  className="absolute -top-16 -left-8 w-36 h-36 z-10"
                  initial={{ y: 20, opacity: 0, rotate: -10 }}
                  whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                />
                <motion.img
                  src="https://github.com/ankit18922/Synergy_Kortex/blob/new-branch/src/assets/life11.gif?raw=true"
                  alt="Performance Chart"
                  className="absolute -bottom-8 right-10 w-36 h-36 z-10"
                  initial={{ y: 20, opacity: 0, rotate: 10 }}
                  whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                />
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.ul className="space-y-6">
  {[
    " Planned maintenance makes scheduling and monitoring compliance easy",
    "Easily identify equipment for an alternative equipment maintenance (AEM) program and monitor its performance",
    "Gain visibility into your team’s compliance with dashboards and reports"
  ].map((item, index) => (
    <motion.li
      key={index}
      className="flex items-start gap-3"
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
      whileHover={{ x: 10, transition: { duration: 0.2 } }}
    >
      <span className="text-[#0D6EFD] mt-1.5">
        <motion.svg 
          className="w-4 h-4" 
          viewBox="0 0 16 16" 
          fill="currentColor"
          whileHover={{ scale: 1.2 }}
        >
          <circle cx="8" cy="8" r="8"/>
        </motion.svg>
      </span>
      <span className="text-gray-600 text-lg leading-relaxed">{item}</span>
    </motion.li>
  ))}
</motion.ul>
            </motion.div>
          </div>
        </div>
      </section>
            </>
  );
};

export default Healthcare;
