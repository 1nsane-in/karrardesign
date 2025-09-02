import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import gsap from "gsap";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "M0,0 C0.5,0 0.5,1 1,1");
// CustomEase.create("hop", "0.9,0,0.1,1");

export function useRevealer() {
  useGSAP(() => {
    gsap.to(".revealer", {
      scaleY: 0,
      duration: 1.25,
      delay: 1,
      ease: "hop",
    });
  }, {});
}
