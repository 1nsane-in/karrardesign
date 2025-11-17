import { Suspense, startTransition, lazy, useState, useEffect, memo, useCallback } from "react";

// Lazy load with a delay to prevent blocking
const WorldMap = lazy(() => 
  new Promise(resolve => {
    setTimeout(() => {
      resolve(import("../ui/world-map.jsx"));
    }, 100); // Small delay to allow page to render first
  })
);

const ContactWorldmap = memo(() => {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    // Use intersection observer to only load when needed
    const timer = setTimeout(() => {
      startTransition(() => {
        setShowMap(true);
      });
    }, 500); // Delay map loading to allow page to settle

    return () => clearTimeout(timer);
  }, []);

  const mapProps = useCallback(() => ({
    lineColor: "#fff",
    className: "opacity-60 h-full",
    useAspect: false,
    showPulses: false,
    dots: [
      {
        start: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
        end: { lat: 12.9716, lng: 77.5946, label: "Bangalore" },
      },
      {
        start: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
        end: { lat: 43.6532, lng: -79.3832, label: "Toronto" },
      },
    ],
  }), []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {showMap ? (
        <Suspense
          fallback={
            <div className="w-full h-full bg-gradient-to-br from-[#ffb400]/5 to-transparent animate-pulse" />
          }
        >
          <WorldMap {...mapProps()} />
        </Suspense>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#ffb400]/5 to-transparent" />
      )}
    </div>
  );
});

ContactWorldmap.displayName = 'ContactWorldmap';

export default ContactWorldmap;
