import { Link, useLocation, useNavigate } from "react-router";
import { KarrarLogoSVG2 } from "../../assets/svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1">
              <div className="w-12 h-12">
                <KarrarLogoSVG2 />
              </div>
              <div
                className={` border-l-2 pl-2  transition-colors ${
                  scrolled
                    ? "border-zinc-300"
                    : isHomePage
                      ? "border-white/30"
                      : "border-zinc-300"
                }`}
              >
                <h1
                  className={`font-cinzel  md:text-xl ${
                    scrolled
                      ? "text-zinc-900"
                      : isHomePage
                        ? "text-white"
                        : "text-zinc-900"
                  }`}
                >
                  Karrar Design & Projects
                </h1>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm uppercase tracking-wider transition-colors ${
                    pathname === item.path
                      ? "text-[#ffb400]"
                      : scrolled
                        ? "text-zinc-700 hover:text-[#ffb400]"
                        : isHomePage
                          ? "text-white hover:text-[#ffb400]"
                          : "text-zinc-700 hover:text-[#ffb400]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            {/* <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`hidden p-2 rounded-lg ${
                scrolled
                  ? "text-zinc-900"
                  : isHomePage
                    ? "text-white"
                    : "text-zinc-900"
              }`}
            >
              <Menu className="w-6 h-6" />
            </button> */}
          </div>
        </div>
      </motion.nav>
      {/* mobile menu button */}
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

      {/* Mobile Menu */}
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
