import { motion } from "framer-motion";

export default function FeaturePage() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Section 1 - Hero */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full bg-blue-400 text-white p-16 flex flex-col md:flex-row items-center justify-between shadow-xl"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          className="md:w-1/2"
        >
          <h2 className="text-5xl font-extrabold leading-tight">
            Elevate Your Business with <span className="text-yellow-400">Smart Solutions</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            Transform your workplace with next-gen automation, security, and cloud infrastructure.
          </p>
          <ul className="mt-8 space-y-3 text-lg font-semibold">
            <li>✔️ AI-Powered Insights</li>
            <li>✔️ Smart Workflow Automation</li>
            <li>✔️ Real-Time Data Processing</li>
            <li>✔️ Secure Cloud Integration</li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }} 
          className="md:w-1/2 flex justify-center"
        >
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6R7Dsfapn66o3Fj7s6SahldDW_Hptzjk7iGUApvHUPnrNndgQ2Ft3gGFRFegP2F1KN_o&usqp=CAU" 
            alt="AI Solutions" 
            className="rounded-xl shadow-2xl w-3/4 max-w-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </motion.section>

      {/* Section 2 - Key Features */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="p-16 grid md:grid-cols-2 gap-16 mt-16"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <h3 className="text-4xl font-extrabold text-gray-800 border-l-4 border-blue-700 pl-6">
            Key Features
          </h3>
          <div className="mt-8 space-y-6">
            {[
              { title: "Cloud-Based Access", description: "Manage your business from anywhere with secure, scalable cloud solutions." },
              { title: "Multi-Device Compatibility", description: "Seamless access across desktops, tablets, and mobile devices." },
              { title: "Predictive Analytics", description: "AI-driven insights to optimize workflows and reduce costs." },
              { title: "Customizable Workflows", description: "Tailor solutions to meet the unique needs of your business." },
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }} 
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition"
              >
                <h4 className="font-semibold text-xl text-gray-900">{feature.title}</h4>
                <p className="text-gray-700 text-base mt-2">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          className="flex justify-center"
        >
          <img 
            src="https://img.freepik.com/free-vector/new-functions-concept-illustration_114360-5986.jpg"
            alt="Enterprise Solutions" 
            className="rounded-xl shadow-2xl w-3/4 max-w-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </motion.section>
    </div>
  );
}
