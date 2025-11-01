
const NoiseOverlay = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 opacity-15"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        mixBlendMode: "multiply",
      }}
    ></div>
  );
};

export default NoiseOverlay;
