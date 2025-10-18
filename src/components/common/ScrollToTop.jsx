import { useEffect } from "react";
import { useLocation } from "react-router";
import { useLenis } from "@studio-freight/react-lenis";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      // Use raf to wait for DOM updates before scrolling
      requestAnimationFrame(() => {
        lenis.scrollTo(0, {
          duration: 0, // No animation for route changes
          easing: (t) => t,
          immediate: true, // Force jump
        });
      });
    }
  }, [pathname, lenis]);

  return null;
}
