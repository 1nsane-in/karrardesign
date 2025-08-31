import { useRef, useEffect } from "react";
import { ReactLenis } from "lenis/react";

const SmoothScrollLenis = ({ children }) => {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time);
    }

    const rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smooth: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollLenis;
