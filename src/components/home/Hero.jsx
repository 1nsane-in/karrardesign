import { motion } from "framer-motion";
import { HeroBG } from "../../assets";
import { TextLoop } from "../ui/text-loop";

const Hero = () => {
  return (
    <>
      <div className=" h-screen  w-full absolute top-0">
        <div className="absolute top-0 left-0 w-[45%] h-full bg-gradient-to-r from-black/50 to-transparent"></div>
        <img
          src={HeroBG}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute top-[53%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white px-5 flex-col flex items-center justify-center">
          <h1 className="text-[70px] font-cinzel leading-[75px] text-center mt-3">
            Where Vision Meets Perfection
          </h1>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white px-5 flex-col flex items-center justify-center">
          <motion.p
            key="hero-line-1"
            className="text-center text-xl max-w-2xl text-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            From luxury fit-outs to complete project management, we design,
            build, and deliver spaces that inspire and endure.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Hero;
