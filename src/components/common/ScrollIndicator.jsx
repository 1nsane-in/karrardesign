import React, { useEffect, useRef, useState } from "react";

/**
 * Ultra-light scroll indicator
 * - Single passive scroll listener
 * - rAF-batched updates
 * - GPU-friendly transform (no layout thrash)
 * - Only 1 React state change (visibility), progress updated via ref style
 */
const ScrollIndicator = () => {
  const barRef = useRef(null);
  const ticking = useRef(false);
  const lastVisible = useRef(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Disable transitions if user prefers reduced motion
    if (prefersReducedMotion && barRef.current) {
      barRef.current.style.transition = "none";
    }

    const update = () => {
      ticking.current = false;

      const doc = document.documentElement;
      const total =
        Math.max(doc.scrollHeight, document.body.scrollHeight) -
        window.innerHeight;

      // Avoid division by zero on very short pages
      const raw = total > 0 ? window.scrollY / total : 0;
      const clamped = Math.max(0, Math.min(1, raw));

      // Update progress with transform (no layout)
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${clamped})`;
      }

      // Show only after 500px to match original behavior
      const nowVisible = window.scrollY > 500;
      if (nowVisible !== lastVisible.current) {
        lastVisible.current = nowVisible;
        setVisible(nowVisible);
      }
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    // Initial paint
    requestAnimationFrame(update);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Keep the bar mounted to avoid layout shifts; fade/slide with opacity/translate
  return (
    <div
      aria-hidden={!visible}
      className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none"
      style={{
        height: visible ? 4 : 0, // avoid CLS when hidden
        transition: "height 120ms ease",
        background: "transparent",
      }}
    >
      <div className="h-1 bg-transparent">
        <div
          ref={barRef}
          className="h-full"
          style={{
            background: "#ffb400",
            transformOrigin: "left center",
            transform: "scaleX(0)",
            transition: "transform 120ms linear",
            willChange: "transform",
          }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
