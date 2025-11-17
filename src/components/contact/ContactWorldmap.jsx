import { Suspense, startTransition, lazy, useState, useEffect } from "react";
const WorldMap = lazy(() => import("../ui/world-map.jsx"));

const ContactWorldmap = () => {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setShowMap(true);
    });
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {showMap ? (
        <Suspense
          fallback={
            <div className="w-full h-full bg-gradient-to-br from-[#ffb400]/5 to-transparent" />
          }
        >
          <WorldMap
            lineColor="#fff"
            className="opacity-60 h-full"
            useAspect={false}
            showPulses={false}
            dots={[
              {
                start: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
                end: { lat: 12.9716, lng: 77.5946, label: "Bangalore" },
              },
              {
                start: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
                end: { lat: 43.6532, lng: -79.3832, label: "Toronto" },
              },
            ]}
          />
        </Suspense>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#ffb400]/5 to-transparent" />
      )}
    </div>
  );
};

export default ContactWorldmap;
