import { Link, useLocation, useNavigate } from "react-router";
import { ArrowSVG } from "../../assets/svg";
import { motion } from "framer-motion";
import { useState } from "react";
import TransitionOverlay from "./TransitionOverlay";
import { useEffect } from "react";

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [showOverlay, setShowOverlay] = useState(false);
  const [nextPath, setNextPath] = useState(null);

  // Prevent body scroll when overlay active
  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden"; // Disable scroll during transition
    } else {
      document.body.style.overflow = ""; // Restore scroll
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
    { name: "WORK", path: "/work" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <TransitionOverlay
        show={showOverlay}
        onAnimationEnd={onOverlayAnimationEnd}
      />

      <div className="fixed z-50 top-10 right-16 w-[80px] hidden lg:block">
        <ul className="text-xs 2xl:text-lg font-bold flex flex-col gap-1">
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
                <>
                  {pathname === item.path && (
                    <motion.span
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -10, opacity: 0 }}
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
                </>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
