import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "General Nephrology",
    description: "Comprehensive kidney care including diagnosis, treatment, and preventive strategies.",
    features: ["Kidney Function Tests", "Hypertension Management", "Dialysis Planning", "Lifestyle Counseling"],
    icon: "🩺",
  },
  {
    title: "Kidney Transplant",
    description: "Advanced kidney transplant services with expert surgeons and post-transplant care.",
    features: ["Pre-Transplant Evaluation", "Donor Matching", "Post-Operative Care", "Immunosuppressive Therapy"],
    icon: "🏥",
  },
  {
    title: "Dialysis Services",
    description: "State-of-the-art dialysis treatments including hemodialysis and peritoneal dialysis.",
    features: ["Hemodialysis", "Peritoneal Dialysis", "Home Dialysis Training", "Nutritional Support"],
    icon: "💉",
  },
  {
    title: "Pediatric Nephrology",
    description: "Specialized kidney care for children with congenital or acquired kidney diseases.",
    features: ["Chronic Kidney Disease", "Congenital Anomalies", "Pediatric Dialysis", "Growth Monitoring"],
    icon: "👶",
  },
];

export default function KidneyCenterServices() {
  return (
    <section className="w-full py-10 px-5 md:px-20 bg-gray-100">
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Comprehensive <motion.span 
            className="text-blue-600"
            animate={{ 
              scale: [1, 1.05, 1],
              color: ['#3B82F6', '#2563EB', '#3B82F6']
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >Kidney Care</motion.span>
        </motion.h2>
        <motion.p 
          className="text-gray-600 mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Expert nephrology services tailored to your needs
        </motion.p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg cursor-pointer transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#E0F2FE",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
            onClick={() => window.location.href = "/services"}
          >
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className="text-3xl"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                {service.icon}
              </motion.span>
              <motion.h3 
                className="text-xl font-semibold text-gray-900"
                whileHover={{ color: "#3B82F6" }}
              >
                {service.title}
              </motion.h3>
            </motion.div>
            <motion.p 
              className="text-gray-600 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {service.description}
            </motion.p>
            <motion.div 
              className="mt-4 grid grid-cols-2 gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {service.features.map((feature, i) => (
                <motion.span 
                  key={i} 
                  className="block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#BFDBFE",
                    color: "#1E40AF"
                  }}
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.a 
          href="/services" 
          className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-800"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          View All Services →
        </motion.a>
      </motion.div>
    </section>
  );
}
