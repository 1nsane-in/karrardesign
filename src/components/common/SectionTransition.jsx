import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SectionTransition = ({
    fromColor = "bg-white",
    toColor = "bg-zinc-50",
    height = "h-32",
    pattern = "dots" // "dots", "lines", "waves"
}) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

    const renderPattern = () => {
        switch (pattern) {
            case "lines":
                return (
                    <>
                        <div className="absolute top-1/2 left-1/4 w-16 h-px bg-[#ffb400]/30" />
                        <div className="absolute top-1/3 right-1/4 w-12 h-px bg-zinc-400/30" />
                        <div className="absolute bottom-1/3 left-1/3 w-8 h-px bg-[#ffb400]/20" />
                    </>
                );
            case "waves":
                return (
                    <div className="absolute inset-0 overflow-hidden">
                        <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path
                                d="M0,10 Q25,5 50,10 T100,10 L100,20 L0,20 Z"
                                fill="rgba(255, 180, 0, 0.1)"
                            />
                        </svg>
                    </div>
                );
            default: // dots
                return (
                    <>
                        <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-[#ffb400]/40 rounded-full" />
                        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-zinc-400/30 rounded-full" />
                        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-[#ffb400]/20 rounded-full" />
                        <div className="absolute top-2/3 left-1/4 w-0.5 h-0.5 bg-zinc-500/40 rounded-full" />
                    </>
                );
        }
    };

    return (
        <section ref={containerRef} className={`relative ${height} overflow-hidden`}>
            {/* Base gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-b ${fromColor.replace('bg-', 'from-')} ${toColor.replace('bg-', 'to-')}`} />

            {/* Parallax moving elements */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0"
            >
                {renderPattern()}
            </motion.div>

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </section>
    );
};

export default SectionTransition;