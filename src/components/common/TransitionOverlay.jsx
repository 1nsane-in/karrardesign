import { useRef, useEffect } from "react";
import gsap from "gsap";
export default function TransitionOverlay({ show, onAnimationEnd }) {
  const overlayRef = useRef();

  useEffect(() => {
    if (show && overlayRef.current) {
      const tl = gsap.timeline({
        onComplete: onAnimationEnd,
      });

      tl.fromTo(
        overlayRef.current,
        { clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)" },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          duration: 2,
          ease: "power3.inOut",
          // Add will-change for smoother GPU acceleration
          onStart: () => {
            overlayRef.current.style.willChange = "clip-path";
          },
          onComplete: () => {
            overlayRef.current.style.willChange = "auto";
            onAnimationEnd();
          },
        }
      );
    }
  }, [show, onAnimationEnd]);

  if (!show) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        pointerEvents: "none",
        position: "fixed",
        inset: 0,
        backgroundColor: "var(--color-primary)",
        zIndex: 9999,
        clipPath: show
          ? "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)"
          : "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        willChange: "clip-path",
      }}
    />
  );
}
