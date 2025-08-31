import { Link, useLocation } from "react-router";
import { ArrowSVG } from "../../assets/svg";
import { motion } from "framer-motion";

const Navigation = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "STUDIO", path: "/studio" },
    { name: "KARRAR", path: "/karrar" },
    { name: "WORK", path: "/work" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="fixed z-50 bottom-10 right-16 w-[80px]">
      <ul className="text-xs font-bold flex flex-col gap-1">
        {navItems.map((item) => (
          <Link to={item.path} key={item.name}>
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
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
  );
};

export default Navigation;
