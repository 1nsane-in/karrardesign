import { useState, useCallback, useEffect } from "react";

export const SLIDESHOW_INTERVAL = 4000;

export const useImageSlideshow = (images) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, SLIDESHOW_INTERVAL);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToImage = useCallback((index) => {
    setCurrentImageIndex(index);
  }, []);

  return { currentImageIndex, goToImage };
};
