import { useMemo, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import DottedMap from "dotted-map";

// Simple inline SVG <img> replacement for Vite/React (no next/image)
function SvgImage({ svg, className, alt }) {
  const src = useMemo(
    () => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`,
    [svg]
  );
  return <img src={src} className={className} alt={alt} draggable={false} />;
}

/**
 * WorldMap component
 * Props:
 * - dots: Array<{ start: { lat, lng, label? }, end: { lat, lng, label? } }>
 * - lineColor: string (brand color for arcs and points)
 * - className: string (extra classes for container)
 */
export function WorldMap({
  dots = [],
  lineColor = "#fff",
  className = "",
  useAspect = true,
  showRoutes = true,
  showPulses = true,
  fadeEdges = true,
  decorative = true,
}) {
  const svgRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Generate dotted background map once
  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: "#fff",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, []);

  // equirectangular-ish projection matching the original registry sample
  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const maskClass = fadeEdges
    ? "[mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]"
    : "";
  const containerClasses = `w-full ${useAspect ? "aspect-[2/1]" : "h-full"} relative font-sans ${className}`;

  return (
    <div className={containerClasses}>
      <SvgImage
        svg={svgMap}
        alt=""
        className={`h-full w-full ${maskClass} pointer-events-none select-none opacity-70`}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
        aria-hidden={decorative}
      >
        {showRoutes &&
          dots.map((dot, i) => {
            const startPoint = projectPoint(dot.start.lat, dot.start.lng);
            const endPoint = projectPoint(dot.end.lat, dot.end.lng);
            const initial = prefersReducedMotion
              ? { pathLength: 1 }
              : { pathLength: 0 };
            const animate = prefersReducedMotion
              ? { pathLength: 1 }
              : { pathLength: 1 };
            const transition = prefersReducedMotion
              ? { duration: 0 }
              : { duration: 1, delay: 0.3 * i, ease: "easeOut" };
            return (
              <g key={`path-group-${i}`}>
                <motion.path
                  d={createCurvedPath(startPoint, endPoint)}
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  initial={initial}
                  animate={animate}
                  transition={transition}
                />
              </g>
            );
          })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
              />
              {showPulses && !prefersReducedMotion && (
                <circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
              />
              {showPulses && !prefersReducedMotion && (
                <circle
                  cx={projectPoint(dot.end.lat, dot.end.lng).x}
                  cy={projectPoint(dot.end.lat, dot.end.lng).y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default WorldMap;
