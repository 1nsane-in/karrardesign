import { Link, useLocation, useNavigate } from "react-router";
import { ArrowSVG, KarrarLogoSVG1, KarrarLogoSVG2 } from "../../assets/svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import TransitionOverlay from "./TransitionOverlay";
import { KarrarLogo } from "../../assets";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomePage = pathname === "/";

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll during overlay
  useEffect(() => {
    document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleNavigation = (path) => (e) => {
    e.preventDefault();
    navigate(path);
  };

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "STUDIO", path: "/studio" },
    { name: "KARRAR", path: "/karrar" },
    { name: "SERVICES", path: "/services" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="size-[60px] fixed top-6 left-[10%] -translate-x-1/2 z-50"
          >
            <KarrarLogoSVG2 />
          </motion.div>
        )}
      </AnimatePresence>
      {/* AnimatePresence handles smooth in/out */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            key="topNav"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-20 fixed top-3 left-0 w-full z-50 bg-transparent"
          >
            <div
              className={`flex items-center uppercase text-sm justify-center gap-30 h-full font-roboto  ${isHomePage ? "text-[#3c3c38]" : "text-black"}`}
            >
              <Link
                to="/studio"
                className=" hidden lg:block hover:text-primary hover:cursor-pointer transition-all duration-300 ease-in-out"
              >
                Studio
              </Link>
              <Link
                to="/services"
                className=" hidden lg:block hover:text-primary hover:cursor-pointer transition-all duration-300 ease-in-out"
              >
                Services
              </Link>
              <Link to="/" className=" flex flex-col items-center ">
                <h1 className="font-cinzel lg:text-3xl  text-xl leading-[30px]">
                  Karrar Design
                </h1>
                <p className="lg:text-[16px] text-[12px] font-medium tracking-widest">
                  Projects
                </p>
              </Link>
              {/* <div className=" flex flex-col items-center ">
                <motion.div
                    key="logo"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="size-[60px] fixed top-6 left-[10%] -translate-x-1/2 z-50"
                >
                  <KarrarLogoSVG2 />
                </motion.div>
                <h1 className="font-cinzel lg:text-3xl  text-xl leading-[30px]">
                  Karrar Design
                </h1>
                <p className="lg:text-[16px] text-[12px] font-medium tracking-widest">
                  Projects
                </p>
              </div> */}
              <Link
                to="/karrar"
                className=" hidden lg:block hover:text-primary hover:cursor-pointer transition-all duration-300 ease-in-out "
              >
                Karrar
              </Link>
              <Link
                to="/contact"
                className="hidden lg:block hover:text-primary hover:cursor-pointer transition-all duration-300 ease-in-out bg-transparent backdrop-blur-md border border-transparent hover:border-white/20 px-6 py-3 rounded-full"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}

        {scrolled && (
          <motion.div
            key="cornerNav"
            initial={{ opacity: 0, scale: 0.8, x: 100, y: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 100, y: 50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed z-50 bottom-10 right-16 w-[80px] hidden lg:block"
          >
            <ul className="text-xs 2xl:text-lg font-bold flex flex-col gap-1 text-zinc-700/70">
              {navItems.map((item) => (
                <Link
                  to={item.path}
                  key={item.name}
                  onClick={handleNavigation(item.path)}
                >
                  <li
                    className={`flex items-center ${
                      pathname === item.path ? "text-primary" : ""
                    }`}
                  >
                    {pathname === item.path && (
                      <motion.span
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <ArrowSVG className="w-3 h-3 mr-1 mt-[2px]" />
                      </motion.span>
                    )}
                    <motion.span
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      {item.name}
                    </motion.span>
                  </li>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-max py-2 z-50 flex items-center justify-center"
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-white/90 backdrop-blur-md border border-gray-200 px-6 py-3 rounded-full 
    shadow-lg hover:shadow-xl transition-all duration-300 
    flex items-center gap-2 group"
        >
          <Menu className="w-5 h-5 text-zinc-700 group-hover:text-primary transition-colors" />
          <span className="text-sm font-medium text-zinc-700 group-hover:text-primary transition-colors">
            Menu
          </span>
        </button>
      </motion.div>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setIsMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                mass: 0.5,
              }}
              className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl"
            >
              <div className="relative p-6">
                {/* Close Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute right-6 top-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-zinc-700" />
                </button>

                {/* Menu Items */}
                <div className="mt-4 space-y-6">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={(e) => {
                        handleNavigation(item.path)(e);
                        setIsMenuOpen(false);
                      }}
                      className="block"
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeOut",
                          delay: 0.1 + index * 0.05,
                        }}
                        className={`text-2xl font-cinzel ${
                          pathname === item.path
                            ? "text-primary"
                            : "text-zinc-700"
                        }`}
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
