import { motion, AnimatePresence } from "framer-motion";

const toastVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const SuccessToast = ({ message }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className="toast-popup"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={toastVariants}
          transition={{ duration: 0.4 }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessToast;
