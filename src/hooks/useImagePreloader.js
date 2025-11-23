import { useEffect } from "react";

export const useImagePreloader = (images) => {
  useEffect(() => {
    for (const src of images) {
      const img = new Image();
      img.src = src;
    }
  }, [images]);
};
