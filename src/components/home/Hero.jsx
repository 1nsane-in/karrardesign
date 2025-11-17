import { useRef, memo, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BgHero1 } from "../../assets";
import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";

const Hero = memo(() => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const handleViewProjects = useCallback(() => {
    navigate("/studio");
  }, [navigate]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        {/* <div
          className="w-full h-full "
          style={{
            backgroundImage: `url(https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/dubai-mall/1.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        /> */}
        <div
          className="w-full h-full "
          style={{
            backgroundImage: `url(${BgHero1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 h-full flex items-center justify-center mt-3  px-8 max-w-7xl mx-auto"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className=" flex items-center justify-center flex-col"
          >
            <p className="text-[#ffb400] text-sm uppercase tracking-[0.3em] mb-6 text-center">
              Luxury Interior Design
            </p>
            <h1 className="text-5xl lg:text-6xl font-semibold font-cinzel text-white mb-6 leading-[65px] text-center flex items-center justify-center flex-wrap">
              <div>
                <span>Design</span>
                <span className="w-[10px] h-[10px] rounded-full bg-primary inline-block mt-8 mr-2"></span>
              </div>

              <div className="flex">
                <span>Distinction</span>
                <span className="w-[10px] h-[10px] rounded-full bg-primary inline-block  mt-10  mr-2"></span>
              </div>
              <div>
                <span>Detail</span>
                <span className="w-[10px] h-[10px] rounded-full bg-primary inline-block  mt-8 ml-1"></span>
              </div>
            </h1>

            <p className="text-white/90 text-lg mb-8 max-w-lg text-center">
              Crafting with award-winning precision and quiet luxury.
            </p>
            <button
              onClick={handleViewProjects}
              className="group flex cursor-pointer items-center  gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full hover:bg-[#ffb400] hover:border-[#ffb400] transition-all duration-300"
            >
              <span className="text-white text-sm uppercase tracking-wider">
                View Projects
              </span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </motion.div>
      {/* <motion.div
        style={{ y: textY }}
        className="relative z-20 h-full flex items-center px-8 max-w-7xl mx-auto"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-[#ffb400] text-sm uppercase tracking-[0.3em] mb-6">
              Luxury Interior Design
            </p>
            <h1 className="text-5xl lg:text-7xl font-oswald text-white mb-6 leading-[65px]">
              <span className="capitalize">Crafting </span> dreams
              <br />
              with elegance
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              Transform your space into a masterpiece with award-winning design
              excellence
            </p>
            <button
              onClick={() => navigate("/studio")}
              className="group flex cursor-pointer items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full hover:bg-[#ffb400] hover:border-[#ffb400] transition-all duration-300"
            >
              <span className="text-white text-sm uppercase tracking-wider">
                View Projects
              </span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </motion.div> */}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 right-8 z-30"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#ffb400] rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#ffb400] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
