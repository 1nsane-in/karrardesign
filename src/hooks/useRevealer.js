import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import gsap from "gsap";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9,0,0.1,1");

export function useRevealer(delay = 1) {
  useGSAP(() => {
    gsap.to(".revealer", {
      scaleY: 0,
      duration: 1.05,
      delay: delay,
      ease: "hop",
      onStart: () => {
        document.querySelector(".revealer").style.willChange = "transform";
      },
      onComplete: () => {
        document.querySelector(".revealer").style.willChange = "auto";
      },
    });
  }, [delay]);
}
