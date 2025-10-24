import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import { useRef, forwardRef } from "react";

export const Card = ({
  i,
  title,
  description,
  url,
  color,
  features,
  progress,
  range,
  targetScale,
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
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[600px] w-[90%] max-w-6xl rounded-3xl p-8 origin-top bg-white/95 backdrop-blur-sm shadow-2xl border border-white/20"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-1 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
            0{i + 1}
          </span>
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-tan-pearl text-zinc-800 mb-8 leading-tight">
          {title}
        </h2>
        
        <div className="flex h-full gap-8">
          <div className="w-[45%] flex flex-col justify-between">
            <div>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                {description}
              </p>
              
              {features && (
                <div className="space-y-3">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 group">
                      <div 
                        className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-125" 
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-zinc-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <button className="flex items-center gap-3 text-zinc-800 font-medium hover:gap-4 transition-all duration-300 group mt-6">
              <span>Explore Service</span>
              <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-800 transition-colors duration-300">
                <svg className="w-4 h-4 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
          </div>

          <div className="relative w-[55%] h-full rounded-2xl overflow-hidden group">
            <motion.div
              className="w-full h-full"
              style={{ scale: imageScale }}
            >
              <img
                src={url}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const StackCards = forwardRef(({ projects }, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main ref={container}>
        {/* Top grid pattern */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <section className="text-white w-full">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                features={project.features}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
});

StackCards.displayName = "StackCards";

export default StackCards;
