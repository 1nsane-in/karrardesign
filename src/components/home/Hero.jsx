import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { HeroBG } from "../../assets";
import { KarrarLogo } from "../../assets";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.1, 0.9]);

  const experiences = [
    {
      number: "01",
      category: "Design Excellence",
      title: "Crafting Spaces That Define Luxury",
      description: "Where every detail speaks of sophistication"
    },
    {
      number: "02",
      category: "Award Recognition",
      title: "Best Interior Fit-Out Business 2024",
      description: "Excellence recognized across the industry"
    },
    {
      number: "03",
      category: "Complete Solutions",
      title: "From Vision to Masterpiece",
      description: "End-to-end luxury interior solutions"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % experiences.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-white">
      {/* Dynamic Background with Mouse Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          scale: imageScale,
          y: imageY
        }}
      >
        <motion.div
          className="w-full h-full"
          animate={{
            backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          style={{
            backgroundImage: `url(${HeroBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            filter: 'brightness(1.1) ',
            opacity: 1
          }}
        />

        {/* Light Luxury Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-zinc-50/5 to-amber-50/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/8 via-white/3 to-white/10" />

        {/* Dynamic Light Overlay */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: overlayOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Luxury Noise Texture */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'multiply'
        }}
      />

      {/* Geometric Elements */}
      <div className="absolute top-1/4 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-zinc-400/40 to-transparent transform rotate-45 hidden lg:block" />
      <div className="absolute bottom-1/3 left-1/5 w-px h-24 bg-gradient-to-t from-transparent via-[#ffb400]/50 to-transparent transform -rotate-12 hidden lg:block" />

      {/* Main Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 h-full flex items-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-center items-center">
            {/* Centered Dynamic Content */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="space-y-8 max-w-2xl"
              >
                {/* Experience Counter */}
                <div className="flex items-center justify-center gap-8 mb-12">
                  {experiences.map((_, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full transition-all duration-500 ${index === currentIndex ? 'bg-[#ffb400] scale-125' : 'bg-zinc-300'
                        }`} />
                      {index < experiences.length - 1 && (
                        <div className="w-8 h-px bg-zinc-200" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Dynamic Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <div className="text-sm uppercase tracking-wider text-[#ffb400] mb-1">
                        {experiences[currentIndex].category}
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-tan-pearl text-zinc-800 leading-tight">
                        {experiences[currentIndex].title}
                      </h2>
                    </div>

                    <p className="text-lg text-zinc-600 font-light leading-relaxed max-w-md mx-auto text-center">
                      {experiences[currentIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Elegant CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="pt-8 flex justify-center"
                >
                  <div className="group cursor-pointer inline-flex items-center gap-4">
                    <span className="text-sm uppercase tracking-wider text-zinc-500 group-hover:text-[#ffb400] transition-colors duration-300">
                      Explore Our Work
                    </span>
                    <div className="w-12 h-px bg-zinc-300 group-hover:bg-[#ffb400] transition-colors duration-300" />
                    <div className="w-2 h-2 border border-zinc-300 group-hover:border-[#ffb400] group-hover:bg-[#ffb400] transition-all duration-300" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-px h-8 bg-zinc-300"></div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 bg-[#ffb400] rounded-full"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 rotate-90 origin-center">
            Scroll
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
