import { useState, useEffect, memo, useRef } from "react";
import SimpleWorldMap from "../ui/simple-world-map.jsx";

const ContactWorldmap = memo(() => {
  const [showMap, setShowMap] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden">
      {showMap ? (
        <SimpleWorldMap lineColor="#fff" className="opacity-60 h-full" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#ffb400]/5 to-transparent" />
      )}
    </div>
  );
});

ContactWorldmap.displayName = 'ContactWorldmap';

export default ContactWorldmap;
