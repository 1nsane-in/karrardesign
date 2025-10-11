import { useEffect } from "react";
import { useLocation } from "react-router";
import { useLenis } from "@studio-freight/react-lenis";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      // Scroll to top with Lenis smooth scrolling
      lenis.scrollTo(0, {
        duration: 0, // Instant scroll for route changes
        easing: (t) => t, // Linear easing
        immediate: true, // Skip animation
      });
    }
  }, [pathname, lenis]);

  return null;
}
