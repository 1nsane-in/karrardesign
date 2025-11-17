import { memo } from "react";

// Ultra-lightweight world map - just dots and lines, no heavy computations
const SimpleWorldMap = memo(({ lineColor = "#fff", className = "" }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Minimal dot pattern background */}
        <defs>
          <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="0.8" fill={lineColor} opacity="0.15" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />

        {/* Location dots */}
        <g fill={lineColor}>
          {/* Dubai */}
          <circle cx="480" cy="180" r="3" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.6;0.9" dur="3s" repeatCount="indefinite" />
          </circle>
          {/* Bangalore */}
          <circle cx="520" cy="200" r="3" opacity="0.9">
            <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          {/* Toronto */}
          <circle cx="200" cy="100" r="3" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.6;0.9" dur="3s" begin="1s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Connection lines */}
        <g stroke={lineColor} strokeWidth="1" fill="none" opacity="0.3">
          {/* Dubai to Bangalore */}
          <path d="M480 180 Q500 170 520 200" strokeDasharray="3,3">
            <animate attributeName="stroke-dashoffset" values="0;6" dur="2s" repeatCount="indefinite" />
          </path>
          {/* Dubai to Toronto */}
          <path d="M480 180 Q340 120 200 100" strokeDasharray="3,3">
            <animate attributeName="stroke-dashoffset" values="0;6" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </path>
        </g>
      </svg>
    </div>
  );
});

SimpleWorldMap.displayName = 'SimpleWorldMap';

export default SimpleWorldMap;