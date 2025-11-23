import { motion } from "framer-motion";
export const ScrollIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
    className="absolute bottom-8 right-8 flex items-center gap-2 text-white"
  >
    <span className="text-xs uppercase tracking-wider">Scroll</span>
    <motion.div
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      ↓
    </motion.div>
  </motion.div>
);
