import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X, User, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OfferModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Automatically open the modal when the page loads
    setIsOpen(true);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog 
          open={isOpen} 
          onClose={() => setIsOpen(false)} 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-96 transform-gpu"
            style={{ perspective: "1000px" }}
          >
            <motion.div 
              className="flex justify-between items-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-bold text-blue-500">Exclusive Offer!</h2>
              <motion.button 
                onClick={() => setIsOpen(false)} 
                className="text-gray-500 hover:text-gray-700"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </motion.div>

            <motion.p 
              className="text-sm text-gray-600 dark:text-gray-400 mt-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Fill out this form now and enjoy a <b>20% discount</b> on your first visit. Limited time offer!
            </motion.p>

            <motion.form 
              className="mt-4 space-y-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label className="text-sm font-medium">Full Name</label>
                <div className="flex items-center border rounded-md px-3 py-2">
                  <User className="text-gray-400" size={18} />
                  <input type="text" placeholder="Your Name" className="w-full outline-none ml-2 bg-transparent" />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label className="text-sm font-medium">Phone Number</label>
                <div className="flex items-center border rounded-md px-3 py-2">
                  <Phone className="text-gray-400" size={18} />
                  <input type="tel" placeholder="Your Phone" className="w-full outline-none ml-2 bg-transparent" />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label className="text-sm font-medium">Nearest diasence Location</label>
                <select className="w-full border rounded-md px-3 py-2 bg-transparent">
                  <option>Select location</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Chicago</option>
                </select>
              </motion.div>

              <motion.button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Submit
              </motion.button>
            </motion.form>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
