import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div
      className={cn(
        "max-w-sm md:max-w-7xl z-20 2xl:container 2xl:px-30 mx-auto px-4 md:px-8 md:py-20 mt-14",
        className
      )}
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-[#ffb400]" />
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">
            Testimonials
          </span>
          <div className="w-12 h-px bg-[#ffb400]" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-gloock text-white leading-tight"
        >
          Stories of <span className="text-[#ffb400] ml-2"> Satisfaction</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base text-zinc-400 mt-4 max-w-2xl mx-auto"
        >
          Our reputation is built on trust, detail, and the voices of our
          clients.
        </motion.p>
      </div>

      {/* Content Section */}
      <div className="relative max-w-5xl mx-auto">
        {/* Text Content */}
        <div className="text-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="space-y-6"
            >
              <div className="relative">
                <svg
                  className="w-12 h-12 text-[#ffb400] mx-auto mb-4 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <motion.p className="text-md lg:text-xl text-white font-gloock leading-relaxed italic max-w-3xl mx-auto">
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-gloock text-zinc-400 mb-1">
                  {testimonials[active].name}
                </h3>
                <p className="text-xs text-zinc-500 capitalize tracking-wider">
                  {testimonials[active].designation}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex gap-2 mt-10 justify-center">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === index ? "bg-[#ffb400] w-8" : "bg-zinc-300 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
