import { ANIMATIONS } from "../../data/studio/animation";
import { motion } from "framer-motion";
export const GalleryImage = ({ src, alt, index, onClick, delay }) => (
  <motion.div
    initial={ANIMATIONS.fadeIn}
    whileInView={ANIMATIONS.fadeInVisible}
    viewport={{ once: true }}
    transition={{ delay }}
    className="aspect-[4/3] overflow-hidden group cursor-pointer"
    onClick={onClick}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  </motion.div>
);
