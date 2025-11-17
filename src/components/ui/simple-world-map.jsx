import { memo } from "react";

// Ultra-lightweight world map - high visibility for black backgrounds
const SimpleWorldMap = memo(({ lineColor = "#ffb400", className = "" }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Bright dot pattern background */}
        <defs>
          <pattern id="dots" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="1.5" fill="#ffffff" opacity="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />

        {/* Bright location dots */}
        <g>
          {/* Dubai */}
          <circle cx="480" cy="180" r="6" fill={lineColor} opacity="1">
            <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="485" y="175" fill="#ffffff" fontSize="10" opacity="0.8">Dubai</text>
          
          {/* Bangalore */}
          <circle cx="520" cy="200" r="6" fill={lineColor} opacity="1">
            <animate attributeName="r" values="6;8;6" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <text x="525" y="195" fill="#ffffff" fontSize="10" opacity="0.8">Bangalore</text>
          
          {/* Toronto */}
          <circle cx="200" cy="100" r="6" fill={lineColor} opacity="1">
            <animate attributeName="r" values="6;8;6" dur="2s" begin="1s" repeatCount="indefinite" />
          </circle>
          <text x="205" y="95" fill="#ffffff" fontSize="10" opacity="0.8">Toronto</text>
        </g>

        {/* Bright connection lines */}
        <g stroke={lineColor} strokeWidth="2" fill="none" opacity="0.8">
          {/* Dubai to Bangalore */}
          <path d="M480 180 Q500 170 520 200" strokeDasharray="6,6">
            <animate attributeName="stroke-dashoffset" values="0;12" dur="3s" repeatCount="indefinite" />
          </path>
          {/* Dubai to Toronto */}
          <path d="M480 180 Q340 120 200 100" strokeDasharray="6,6">
            <animate attributeName="stroke-dashoffset" values="0;12" dur="3s" begin="1s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Visible continent outlines */}
        <g stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.3">
          {/* North America */}
          <path d="M120 80 L180 70 L220 90 L200 140 L160 160 L120 140 Z" />
          {/* Europe/Asia */}
          <path d="M380 80 L550 70 L600 120 L580 160 L400 150 L380 110 Z" />
          {/* Africa */}
          <path d="M380 160 L420 150 L440 220 L430 300 L400 310 L380 240 Z" />
          {/* South America */}
          <path d="M180 200 L220 190 L240 280 L220 320 L180 310 L170 250 Z" />
        </g>
      </svg>
    </div>
  );
});

SimpleWorldMap.displayName = 'SimpleWorldMap';

export default SimpleWorldMap;