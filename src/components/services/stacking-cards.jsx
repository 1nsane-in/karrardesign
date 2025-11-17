import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "motion/react";
import { useRef, forwardRef, memo, useCallback } from "react";
import { Link } from "react-router";
import TopGridPattern from "../common/TopGridPattern";

export const Card = memo(({
  i,
  title,
  description,
  url,
  color,
  features,
  progress,
  range,
  targetScale,
  serviceId,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${Math.min(i * 15, 150)}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[500px] sm:h-[550px] lg:h-[600px] w-[95%] sm:w-[90%] max-w-6xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 origin-top bg-zinc-900 backdrop-blur-sm shadow-2xl border border-zinc-700"
      >
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="w-8 sm:w-12 h-1 rounded-full bg-primary" />
          <span className="text-lg sm:text-xl lg:text-2xl font-medium text-primary uppercase tracking-wider">
            0{i + 1}
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-gloock text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
          {title}
        </h2>

        <div className="flex flex-col lg:flex-row h-full gap-4 sm:gap-6 lg:gap-8">
          <div className="w-full lg:w-[45%] flex flex-col justify-between">
            <div>
              <p className="text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 line-clamp-3 lg:line-clamp-none">
                {description}
              </p>

              {features && (
                <div className="space-y-2 sm:space-y-3">
                  {features
                    .slice(0, window.innerWidth < 1024 ? 2 : 4)
                    .map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 sm:gap-3 group"
                      >
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 group-hover:scale-125 bg-primary flex-shrink-0" />
                        <span className="text-zinc-400 font-medium text-sm sm:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  {features.length > (window.innerWidth < 1024 ? 2 : 4) && (
                    <div className="text-xs sm:text-sm text-primary font-medium lg:hidden">
                      +{features.length - 2} more
                    </div>
                  )}
                </div>
              )}
            </div>

            <Link
              to={`/services/${serviceId}`}
              className="flex items-center gap-2 sm:gap-3 text-zinc-400 font-medium hover:gap-3 sm:hover:gap-4 transition-all duration-300 group mt-4 sm:mt-6 lg:mt-0"
            >
              <span className="text-sm sm:text-base">Explore Service</span>
              <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <svg
                  className="w-3 sm:w-4 h-3 sm:h-4 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <div className="relative w-full lg:w-[55%] h-48 sm:h-64 lg:h-full rounded-xl sm:rounded-2xl overflow-hidden group">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img
                src={url}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

Card.displayName = 'Card';

const StackCards = memo(forwardRef(({ projects }, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main ref={container}>
        {/* Top grid pattern */}
        <TopGridPattern />

        <section className="text-white w-full">
          {projects.map((project, i) => {
            const targetScale = 1 - Math.min((projects.length - i) * 0.02, 0.2);
            const rangeStart = i / projects.length;
            const rangeEnd = Math.min(rangeStart + 0.3, 1);
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.icon}
                title={project.title}
                color={project.color}
                description={project.description}
                features={project.features}
                progress={scrollYProgress}
                range={[rangeStart, rangeEnd]}
                targetScale={targetScale}
                serviceId={project.id}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}));

StackCards.displayName = "StackCards";

export default StackCards;
