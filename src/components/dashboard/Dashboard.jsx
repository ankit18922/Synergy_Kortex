import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
];

const Quotes = [
  {
    text: "‼️We don’t just develop software; we create solutions that drive businesses forward. With innovation at our core, we turn ideas into reality through cutting-edge technology.‼️",
    icon: "https://img.icons8.com/ios/50/000000/code.png",
  },
  {
    text: "‼️Our platform fosters seamless collaboration, empowering teams to work smarter and faster across industries.‼️",
    icon: "https://img.icons8.com/ios/50/000000/collaboration.png",
  },
  {
    text: "‼️From healthcare to retail, our solutions adapt to your needs, delivering measurable results every time.‼️",
    icon: "https://img.icons8.com/ios/50/000000/hospital.png",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const Dashboard = () => {
  const scrollRef = useRef(null);
  const imageScrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.9;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollImages = (direction) => {
    if (imageScrollRef.current) {
      const { scrollLeft, clientWidth } = imageScrollRef.current;
      const scrollAmount = clientWidth * 0.9;
      imageScrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Header Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
        className="bg-white text-center py-8 md:py-16 flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-[18vw] overflow-hidden"
      >
        <div className="mb-6 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Synergy <br /> Kortex
          </h1>
        </div>
        <div className="text-center md:text-right">
          <p className="text-black text-lg font-bold">
            The promise of a fully connected workplace
          </p>
          <p className="text-gray-500 text-sm md:text-base">Workplace management, Built on NOW™</p>
          <div className="mt-4 flex flex-row justify-center md:justify-end gap-2">
            <Link
              to="/schedule"
              className="bg-blue-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md hover:bg-blue-700 transition text-xs md:text-base font-semibold shadow-sm"
            >
              Schedule Demo
            </Link>
            <button
              className="bg-blue-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md hover:bg-blue-700 transition text-xs md:text-base font-semibold shadow-sm"
            >
              Webmail
            </button>
          </div>
        </div>
      </motion.section>

      <div className="bg-[#0C439A] h-[10vh] sm:h-[15vh] w-full"></div>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="px-4 sm:px-6 md:px-20 flex flex-col md:flex-row justify-center gap-6 relative -mt-[5vh] overflow-hidden"
      >
        {[
          { icon: "https://img.icons8.com/ios/50/000000/monitor.png", title: "Innovation at Its Core", text: "We leverage cutting-edge technology to create smart, scalable, and future-ready solutions." },
          { icon: "https://img.icons8.com/ios/50/000000/teamwork.png", title: "Seamless Collaboration", text: "Bringing teams together with efficient workflows, real-time data sharing, and smooth communication." },
          { icon: "https://img.icons8.com/ios/50/000000/pie-chart.png", title: "Results-Driven Solutions", text: "From development to deployment, we craft solutions that drive success and transform businesses." },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg text-center w-full sm:w-80 mx-auto"
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <img src={feature.icon} alt={feature.title} className="mx-auto w-12 h-12" />
            <h3 className="text-lg md:text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{feature.text}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Case Study Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={slideInLeft}
        className="px-4 sm:px-6 md:px-20 py-8 flex flex-col md:flex-row justify-between items-center gap-6 overflow-hidden"
      >
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg">Verdantix Case Study:</h3>
          <p className="font-semibold text-gray-900 text-sm md:text-base">
            Circle K Leverages Synergy Kortex To Gain a Consolidated View of Facility Operations
          </p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Work together on a single platform, share data seamlessly across teams, enhance communication, and solve problems faster.
          </p>
          <button className="bg-yellow-500 text-black px-4 py-2 mt-3 rounded-md hover:bg-yellow-600 transition text-sm md:text-base">
            Learn More
          </button>
        </div>
      </motion.section>

      {/* Who We Are Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={slideInRight}
        className="relative flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-20 py-5 bg-gray-100 overflow-hidden"
      >
        <div className="w-full md:w-1/2 h-64 md:h-80 flex items-center justify-center mb-6 md:mb-0 clip-double-triangle overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Team Collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-12">
          <h2 className="text-gray-600 text-lg md:text-xl font-semibold">WHO WE ARE</h2>
          <p className="text-gray-700 mt-4 leading-relaxed text-sm md:text-base">
            We're a company built on a clear set of values. Our goal is to empower you to do your best work in the most efficient way possible.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-gray-700 text-sm md:text-base">
            <p>✔ Connected Workplace</p>
            <p>✔ Health Care</p>
            <p>✔ Retail Industry</p>
            <p>✔ Public Sector</p>
            <p>✔ Education Sector</p>
            <p>✔ Life Sciences</p>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="bg-[#0C439A] text-white py-2 px-4 sm:px-6 md:px-20 flex flex-wrap justify-center gap-6 text-center overflow-hidden"
      >
        {[
          { value: "35+", label: "Business" },
          { value: "1650+", label: "Happy Clients" },
          { value: "150+", label: "Projects Done" },
          { value: "15+", label: "OT Assets Managed" },
          { value: "30k+", label: "Work Orders per Month" },
        ].map((stat, index) => (
          <div key={index} className="w-1/2 sm:w-1/3 md:w-auto p-4">
            <h3 className="text-xl md:text-2xl font-bold">{stat.value}</h3>
            <p className="text-xs md:text-sm">{stat.label}</p>
          </div>
        ))}
      </motion.section>

      {/* IWMS Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="relative w-full flex flex-col items-center py-12 bg-gray-100 px-4 sm:px-6 md:px-8 overflow-hidden"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Your Next Generation IWMS</h2>
          <p className="text-gray-600 max-w-2xl mt-3 text-sm md:text-base leading-relaxed">
            One solution to handle your facilities maintenance, space planning, corporate real estate, capital projects, field service management, and sustainability needs.
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          <button
            onClick={() => scrollImages("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 z-10 transition-colors duration-300"
            aria-label="Scroll Left"
          >
            <FaArrowLeft size={18} className="text-gray-700" />
          </button>

          <div
            ref={imageScrollRef}
            className="w-full flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide py-4"
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="min-w-[200px] sm:min-w-[250px] md:min-w-[300px] lg:min-w-[350px] flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden snap-center"
              >
                <img
                  src={src}
                  alt={`IWMS Feature ${index + 1}`}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollImages("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 z-10 transition-colors duration-300"
            aria-label="Scroll Right"
          >
            <FaArrowRight size={18} className="text-gray-700" />
          </button>
        </div>

        
      </motion.div>

      {/* Updated Industries Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={slideInLeft}
        className="bg-gray-200 flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 py-10 gap-6"
      >
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-lg md:text-xl font-bold">Across all Industries</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-2 text-sm md:text-base">
            Connected Workplace isn't industry specific. Whether you're a major healthcare system, convenience store franchise, innovative tech company, or in any other market...we have a solution.
          </p>
          <div className="relative w-full flex justify-center mt-6 px-4 sm:psx-[5vw]">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 sm:left-5 top-1/2 transform -translate-y-1/2"
            >
              <FaArrowLeft size={16} />
            </button>
            <div ref={scrollRef} className="w-full sm:w-[80%] flex gap-4 md:gap-6 overflow-x-scroll scrollbar-hide scroll-smooth">
              {Quotes.map((quote, index) => (
                <div
                  key={index}
                  className="min-w-[250px] sm:min-w-[300px] md:min-w-[400px] lg:min-w-[450px] bg-white p-4 rounded-lg shadow-md flex items-center"
                >
                  <img src={quote.icon} alt="Quote Icon" className="w-10 h-10 mr-4" />
                  <p className="text-gray-700 text-sm md:text-lg italic">{quote.text}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 sm:right-5 top-1/2 transform -translate-y-1/2"
            >
              <FaArrowRight size={16} />
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-80 flex items-center justify-center clip-double-triangle2">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Industries Overview"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="bg-blue-900 text-white pt-16 pb-20 overflow-hidden"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center">What Our Customers Are Saying</h2>
        <p className="text-center text-gray-300 mt-2 text-sm md:text-base">
          Hear from our satisfied clients about how our solutions have helped them achieve success.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8 px-4">
          {[
            {
              title: "Healthcare System",
              text: "This platform has streamlined our project management, making collaboration across teams seamless and efficient.",
              icon: "https://img.icons8.com/ios/50/000000/hospital-2.png",
            },
            {
              title: "Leading Enterprise Software Company",
              text: "Real-time data sharing has significantly improved our decision-making process, reducing delays and boosting productivity.",
              icon: "https://img.icons8.com/ios/50/000000/laptop.png",
            },
            {
              title: "Large SuperMarket Chain",
              text: "With this solution, our development and operations teams work together efficiently, solving issues faster than ever before.",
              icon: "https://img.icons8.com/ios/50/000000/shopping-cart.png",
            },
            {
              title: "Dental Care",
              text: "This platform has enhanced our workflow, allowing us to deliver precise treatments with greater accuracy.",
              icon: "https://img.icons8.com/ios/50/000000/tooth.png",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white text-black p-6 rounded-lg shadow-lg w-[250px] md:w-[280px] text-center">
              <img src={item.icon} alt={`${item.title} Icon`} className="mx-auto w-12 h-12 mb-4" />
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-700 text-sm mt-2">{item.text}</p>
              <a href="#" className="text-blue-600 font-semibold block mt-4 text-sm">READ MORE →</a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 pb-10">
          <h3 className="text-lg md:text-xl font-semibold">Want to Know More?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mt-2 text-sm md:text-base">
            From quick snippets to detailed demonstrations, we have a full video library that will help you get to know us.
          </p>
          <Link
            to="/schedule"
            className="mt-6 inline-block bg-yellow-400 text-black px-4 md:px-6 py-2 md:py-3 rounded-md font-bold hover:bg-yellow-500 text-sm md:text-base"
          >
            Schedule a Demo
          </Link>
        </div>
      </motion.div>

      {/* Blog Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="bg-gray-100 py-16 px-4 clip-triangle overflow-hidden"
      >
        <div className="text-center">
          <h3 className="italic text-xl md:text-2xl text-gray-700">Our Blog</h3>
          <h2 className="text-2xl md:text-3xl text-black font-bold mt-2">Recent Articles and News</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            {
              title: "The Future of AI in Software Development",
              text: "Explore how artificial intelligence is transforming coding, automation, and decision-making in IT.",
              image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
            },
            {
              title: "Why Cybersecurity Should Be Your Top Priority",
              text: "Learn about the latest threats and best practices to keep your business data secure.",
              image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
            },
            {
              title: "Revolutionizing Business Operations",
              text: "Discover how cloud technology enhances scalability, efficiency, and collaboration for modern enterprises.",
              image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
            },
          ].map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden w-[300px] md:w-[350px]">
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
              <div className="p-4 text-center">
                <h4 className="font-bold text-lg">{blog.title}</h4>
                <p className="text-gray-600 text-sm mt-2">{blog.text}</p>
                <a href="#" className="text-blue-600 font-semibold block mt-4 text-sm">READ MORE →</a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;