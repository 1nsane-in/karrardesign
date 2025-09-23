import { Link, useLocation, useNavigate } from "react-router";
import { ArrowSVG, KarrarLogoSVG1, KarrarLogoSVG2 } from "../../assets/svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import TransitionOverlay from "./TransitionOverlay";
import { KarrarLogo } from "../../assets";

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [showOverlay, setShowOverlay] = useState(false);
  const [nextPath, setNextPath] = useState(null);
  const [scrolled, setScrolled] = useState(false);

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
    if (showOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showOverlay]);

  const handleNavigation = (path) => (e) => {
    e.preventDefault();
    if (path === pathname) return;
    setNextPath(path);
    setShowOverlay(true);
  };

  const onOverlayAnimationEnd = () => {
    if (nextPath) {
      navigate(nextPath);
      setTimeout(() => {
        setShowOverlay(false);
        setNextPath(null);
      }, 1);
    }
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
      <TransitionOverlay
        show={showOverlay}
        onAnimationEnd={onOverlayAnimationEnd}
      />

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
              className={`flex items-center uppercase text-sm justify-center  gap-30 h-full  font-roboto ${isHomePage ? "text-white" : "text-black"}`}
            >
              <div className="text-shadow-lg">Studio</div>
              <div className="text-shadow-lg">Services</div>
              <div className=" flex flex-col items-center ">
                <h1 className="font-cinzel text-3xl leading-[30px]">
                  Karrar Design
                </h1>
                <p className="text-[16px] font-medium tracking-widest">
                  Projects
                </p>
              </div>
              <div className="text-shadow-lg">About</div>
              <div className="text-shadow-md">Contact</div>
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
    </>
  );
};

export default Navigation;
