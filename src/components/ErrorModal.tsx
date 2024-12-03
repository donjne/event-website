"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

interface ErrorModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  const ErrorModal = ({ isOpen, onClose }: ErrorModalProps) => {
    return (
<AnimatePresence>
  {isOpen && (
    <>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <div className="fixed inset-0 overflow-y-auto z-50 px-4 py-4 flex items-center justify-center">
        <motion.div
          className="w-full max-w-[90%] md:max-w-lg"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-5 md:p-8 border border-red-500/20">
            <motion.button
              className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-400 hover:text-white p-2"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiX size={20} />
            </motion.button>
            
            <div className="text-center space-y-3 md:space-y-4">
              <div className="text-3xl md:text-5xl mb-3 md:mb-6">❌</div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">
                Registration Failed
              </h3>
              <p className="text-base md:text-xl text-gray-300">
                We encountered an error while processing your registration.
                Please try again later or contact support if the problem persists.
              </p>
              <motion.button
                className="mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-sm md:text-base"
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )}
</AnimatePresence>
    );
  };

  export default ErrorModal;