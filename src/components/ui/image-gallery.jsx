import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imageList = [
  "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/al-mandalo/7.jpg",
  "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/dubai-mall/4.jpg",
  "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/dubai-mall/15.jpg",
  "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/al-mandalo/6.jpg",
  "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/dubai-mall/10.jpg",
];

export default function Example() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const timeoutRef = useRef(null);

  const totalSlides = imageList.length;

  // Autoplay every 6 seconds
  useEffect(() => {
    if (!isAutoPlay) return;
    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isAutoPlay, totalSlides]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlay(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlay(false);
  };

  return (
    <>
      <section className="w-full lg:flex flex-col items-center justify-start py-12 mt-40 hidden">
        <div className="max-w-3xl text-center px-4">
          <h1 className="text-3xl font-semibold font-tan-pearl">
            Where Vision Becomes Reality
          </h1>
          <p className="text-md text-zinc-600 mt-2 font-cinzel">
            Every project tells a story of precision, creativity, and unmatched
            craftsmanship.
          </p>
        </div>

        <div className="flex items-center gap-2 lg:h-[400px] w-full container 2xl:px-30 mt-10 px-4">
          {[
            "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/al-mandalo/7.jpg",
            "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/dubai-mall/4.jpg",
            "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/dubai-mall/15.jpg",
            "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/al-mandalo/6.jpg",
            "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/dubai-mall/10.jpg",
          ].map((src, idx) => (
            <div
              key={idx}
              className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
            >
              <img
                className="h-full w-full object-cover object-center"
                src={src}
                alt={`image-${idx}`}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="w-full flex flex-col items-center justify-start py-12 mt-40 lg:hidden">
        {/* Header */}
        <div className="max-w-3xl text-center px-4">
          <h1 className="text-3xl font-semibold font-tan-pearl">
            Where Vision Becomes Reality
          </h1>
          <p className="text-md text-zinc-600 mt-2 font-cinzel">
            Every project tells a story of precision, creativity, and unmatched
            craftsmanship.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative flex items-center justify-center w-full max-w-6xl mt-10 px-4"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Image Slide */}
          <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={imageList[currentIndex]}
                src={imageList[currentIndex]}
                alt={`carousel-${currentIndex}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover object-center absolute top-0 left-0"
              />
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#ffb400] transition"
          >
            <svg
              className="w-5 h-5 text-zinc-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#ffb400] transition"
          >
            <svg
              className="w-5 h-5 text-zinc-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {imageList.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlay(false);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-[#ffb400] w-8"
                  : "bg-zinc-300 w-2 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
