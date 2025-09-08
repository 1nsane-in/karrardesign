import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import gsap from "gsap";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9,0,0.1,1");

export function useRevealer({ delay = 1, onStart, onComplete } = {}) {
  useGSAP(() => {
    const el = document.querySelector(".revealer");
    if (!el) return;

    gsap.to(el, {
      scaleY: 0,
      duration: 1.05,
      delay,
      ease: "hop",
      onStart: () => {
        el.style.willChange = "transform";
        onStart?.();
      },
      onComplete: () => {
        el.style.willChange = "auto";
        onComplete?.();
      },
    });
  }, [delay, onStart, onComplete]);
}
