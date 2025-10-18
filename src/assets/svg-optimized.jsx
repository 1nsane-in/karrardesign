// Optimized SVG components to replace the large svg.jsx file

export const ConnectSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 100"
      className="w-full h-full"
      fill="none"
    >
      <path
        d="M20 50 Q100 20 180 50"
        stroke="#ffb400"
        strokeWidth="2"
        fill="none"
        className="animate-pulse"
      />
      <circle cx="20" cy="50" r="3" fill="#ffb400" />
      <circle cx="180" cy="50" r="3" fill="#ffb400" />
      <text
        x="100"
        y="45"
        textAnchor="middle"
        className="text-xs fill-zinc-600"
        fontFamily="system-ui"
      >
        Connect
      </text>
    </svg>
  );
};

export const ProjectSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 150"
      className="w-full h-full"
      fill="none"
    >
      <path
        d="M50 100 Q150 50 250 100"
        stroke="#ffb400"
        strokeWidth="3"
        fill="none"
        strokeDasharray="5,5"
        className="animate-pulse"
      />
      <rect
        x="40"
        y="90"
        width="20"
        height="20"
        fill="#ffb400"
        opacity="0.7"
      />
      <rect
        x="240"
        y="90"
        width="20"
        height="20"
        fill="#ffb400"
        opacity="0.7"
      />
      <text
        x="150"
        y="85"
        textAnchor="middle"
        className="text-sm fill-zinc-700"
        fontFamily="system-ui"
        fontWeight="500"
      >
        Projects
      </text>
    </svg>
  );
};

export const DesignSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 295 150"
      className="w-full h-full"
      fill="none"
    >
      <path
        d="M50 75 C100 25, 200 25, 250 75 C200 125, 100 125, 50 75"
        stroke="#ffb400"
        strokeWidth="2"
        fill="rgba(255, 180, 0, 0.1)"
        className="animate-pulse"
      />
      <circle cx="150" cy="75" r="5" fill="#ffb400" />
      <text
        x="150"
        y="80"
        textAnchor="middle"
        className="text-xs fill-zinc-600"
        fontFamily="system-ui"
      >
        Design
      </text>
    </svg>
  );
};