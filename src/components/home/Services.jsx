import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Services = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    const services = [
        {
            number: "01",
            title: "Interior Design",
            description: "Luxury residential and commercial interior design solutions that blend sophistication with functionality.",
            features: ["Space Planning", "3D Visualization", "Custom Furniture", "Material Selection"]
        },
        {
            number: "02",
            title: "Project Management",
            description: "End-to-end project coordination ensuring timely delivery, quality control, and budget management.",
            features: ["Timeline Management", "Quality Assurance", "Vendor Coordination", "Budget Control"]
        },
        {
            number: "03",
            title: "Luxury Fit-Out",
            description: "Premium fit-out services for villas, hotels, restaurants, offices, and retail spaces across multiple markets.",
            features: ["Construction Management", "Premium Materials", "Skilled Craftsmen", "On-time Delivery"]
        },
        {
            number: "04",
            title: "Design Management",
            description: "Comprehensive design oversight from concept to completion, ensuring vision alignment throughout the project.",
            features: ["Design Development", "Technical Documentation", "Design Coordination", "Quality Standards"]
        }
    ];

    return (
        <section ref={containerRef} className="relative py-20 bg-zinc-50 overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-white to-zinc-50"
            />

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-4 mb-6"
                    >
                        <div className="w-12 h-px bg-[#ffb400]" />
                        <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">Our Services</span>
                        <div className="w-12 h-px bg-[#ffb400]" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-tan-pearl text-zinc-800 leading-tight"
                    >
                        Excellence in Every
                        <br />
                        <span className="text-[#ffb400]">Detail</span>
                    </motion.h2>
                </div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-500 border border-zinc-200"
                        >
                            {/* Service Number */}
                            <div className="flex items-center gap-6 mb-6">
                                <span className="text-5xl font-tan-pearl text-[#ffb400]/30 group-hover:text-[#ffb400]/50 transition-colors">
                                    {service.number}
                                </span>
                                <div>
                                    <h3 className="text-2xl font-tan-pearl text-zinc-800 group-hover:text-[#ffb400] transition-colors">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-zinc-600 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            {/* Features */}
                            <div className="grid grid-cols-2 gap-3">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-[#ffb400] rounded-full" />
                                        <span className="text-sm text-zinc-600">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Hover Effect Line */}
                            <div className="w-0 h-px bg-[#ffb400] group-hover:w-full transition-all duration-500 mt-6" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="group cursor-pointer inline-flex items-center gap-4">
                        <span className="text-sm uppercase tracking-wider text-zinc-500 group-hover:text-[#ffb400] transition-colors duration-300">
                            Explore Our Portfolio
                        </span>
                        <div className="w-12 h-px bg-zinc-300 group-hover:bg-[#ffb400] transition-colors duration-300" />
                        <div className="w-2 h-2 border border-zinc-300 group-hover:border-[#ffb400] group-hover:bg-[#ffb400] transition-all duration-300" />
                    </div>
                </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-20 w-px h-32 bg-gradient-to-b from-transparent via-[#ffb400]/30 to-transparent hidden lg:block" />
            <div className="absolute bottom-20 left-20 w-px h-24 bg-gradient-to-t from-transparent via-zinc-400/30 to-transparent hidden lg:block" />
        </section>
    );
};

export default Services;