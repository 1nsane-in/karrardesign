import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router";

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const services = [
    {
      number: "01",
      title: "Interior Design",
      description:
        "Luxury residential and commercial interior design solutions that blend sophistication with functionality.",
      features: [
        "Space Planning",
        "3D Visualization",
        "Custom Furniture",
        "Material Selection",
      ],
      icon: "🏠",
    },
    {
      number: "02",
      title: "Project Management",
      description:
        "End-to-end project coordination ensuring timely delivery, quality control, and budget management.",
      features: [
        "Timeline Management",
        "Quality Assurance",
        "Vendor Coordination",
        "Budget Control",
      ],
      icon: "📋",
    },
    {
      number: "03",
      title: "Luxury Fit-Out",
      description:
        "Premium fit-out services for villas, hotels, restaurants, offices, and retail spaces across multiple markets.",
      features: [
        "Construction Management",
        "Premium Materials",
        "Skilled Craftsmen",
        "On-time Delivery",
      ],
      icon: "✨",
    },
    {
      number: "04",
      title: "Design Management",
      description:
        "Comprehensive design oversight from concept to completion, ensuring vision alignment throughout the project.",
      features: [
        "Design Development",
        "Technical Documentation",
        "Design Coordination",
        "Quality Standards",
      ],
      icon: "🎨",
    },
    {
      number: "05",
      title: "Construction Supervision",
      description:
        "Professional oversight of construction activities ensuring adherence to design specifications and quality standards.",
      features: [
        "Quality Control",
        "Safety Management",
        "Progress Monitoring",
        "Issue Resolution",
      ],
      icon: "🏗️",
    },
    {
      number: "06",
      title: "Value Engineering",
      description:
        "Cost optimization strategies that maintain design integrity while maximizing value and efficiency.",
      features: [
        "Cost Analysis",
        "Alternative Solutions",
        "Efficiency Optimization",
        "Budget Management",
      ],
      icon: "💎",
    },
    {
      number: "07",
      title: "Procurement Services",
      description:
        "Strategic sourcing and procurement of premium materials, furniture, and fixtures for luxury projects.",
      features: [
        "Vendor Selection",
        "Material Sourcing",
        "Cost Negotiation",
        "Quality Assurance",
      ],
      icon: "🛍️",
    },
    {
      number: "08",
      title: "MEP Coordination",
      description:
        "Mechanical, Electrical, and Plumbing systems integration for seamless infrastructure implementation.",
      features: [
        "System Integration",
        "Technical Coordination",
        "Compliance Management",
        "Performance Optimization",
      ],
      icon: "⚡",
    },
    {
      number: "09",
      title: "Sustainability Consulting",
      description:
        "Green building practices and sustainable design solutions for environmentally conscious developments.",
      features: [
        "LEED Certification",
        "Energy Efficiency",
        "Sustainable Materials",
        "Environmental Impact",
      ],
      icon: "🌱",
    },
    {
      number: "10",
      title: "Client Representation",
      description:
        "Professional advocacy and representation services protecting client interests throughout the project lifecycle.",
      features: [
        "Contract Management",
        "Quality Advocacy",
        "Timeline Monitoring",
        "Cost Control",
      ],
      icon: "🤝",
    },
    {
      number: "11",
      title: "Post-Completion Support",
      description:
        "Comprehensive maintenance and support services ensuring long-term satisfaction and property value.",
      features: [
        "Warranty Management",
        "Maintenance Planning",
        "Issue Resolution",
        "Upgrade Consultation",
      ],
      icon: "🔧",
    },
    {
      number: "12",
      title: "Design Consultation",
      description:
        "Expert advisory services for design decisions, material selection, and aesthetic coordination.",
      features: [
        "Design Advisory",
        "Material Consultation",
        "Color Coordination",
        "Style Guidance",
      ],
      icon: "💡",
    },
  ];

  const [servicesPerSlide, setServicesPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setServicesPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setServicesPerSlide(2);
      } else {
        setServicesPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(services.length / servicesPerSlide);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const getCurrentServices = () => {
    const start = currentSlide * servicesPerSlide;
    const end = start + servicesPerSlide;
    return services.slice(start, end);
  };

  // Build deterministic slides array so we don't rely on array indexes for keys
  const slides = [];
  for (let i = 0; i < totalSlides; i++) {
    const start = i * servicesPerSlide;
    const end = Math.min(start + servicesPerSlide, services.length);
    const startKey = services[start] ? services[start].number : `s${start}`;
    const endKey = services[end - 1] ? services[end - 1].number : `s${end - 1}`;
    slides.push({
      id: `${startKey}-${endKey}`,
      items: services.slice(start, end),
    });
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlay(false);
  };

  return (
    <section
      ref={containerRef}
      className="relative py-12  overflow-hidden"
      // className="relative py-12 bg-zinc-50 overflow-hidden"
    >
      {/* Parallax Background */}
      {/* <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-white to-zinc-50"
      /> */}

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-primary-dark" />
            <span className="text-xs uppercase tracking-[0.3em] text-subheading">
              Our Services
            </span>
            <div className="w-12 h-px bg-primary-dark" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-tan-pearl text-white leading-tight"
          >
            <span className="text-primary-dark">Excellence</span> in{" "}
            <br className=" md:hidden" /> Every
            <br className="hidden md:block" /> Detail
          </motion.h2>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl pb-10">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:grid lg:grid-cols-3 flex flex-row gap-6"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              {getCurrentServices().map((service, index) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-zinc-900 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-700 hover:border-primary-dark"
                >
                  {/* Service Icon & Number */}
                  <div className="flex items-center justify-end mb-4">
                    {/* <div className="text-3xl">{service.icon}</div> */}
                    <span className="text-2xl font-tan-pearl text-primary-dark group-hover:text-primary transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-tan-pearl text-white group-hover:text-primary transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <div
                        key={`${service.number}-${idx}`}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1 h-1 bg-[#ffb400] rounded-full flex-shrink-0" />
                        <span className="text-xs text-gray-500">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 2 && (
                      <div className="text-xs text-[#ffb400] font-medium">
                        +{service.features.length - 2} more
                      </div>
                    )}
                  </div>

                  {/* Hover Effect */}
                  <div className="w-0 h-px bg-gradient-to-r from-[#ffb400] to-yellow-500 group-hover:w-full transition-all duration-700 mt-4" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-zinc-900 rounded-full shadow-lg border border-zinc-700 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 group text-white"
            disabled={currentSlide === 0}
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-zinc-900 rounded-full shadow-lg border border-zinc-700 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 group text-white"
            disabled={currentSlide === totalSlides - 1}
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="items-center justify-center gap-3 mt-8 hidden md:flex">
          {slides.map((slide) => (
            <button
              key={slide.id}
              onClick={() => {
                setCurrentSlide(slides.indexOf(slide));
                setIsAutoPlay(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === slides.indexOf(slide)
                  ? "bg-[#ffb400] w-8"
                  : "bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        {/* <div className="text-center mt-4">
                    <span className="text-sm text-zinc-500">
                        {currentSlide + 1} of {totalSlides}
                    </span>
                </div> */}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/studio"
            className="group cursor-pointer inline-flex items-center gap-4"
          >
            <span className="text-sm uppercase tracking-wider text-zinc-500 group-hover:text-[#ffb400] transition-colors duration-300">
              Explore Our Portfolio
            </span>
            <div className="w-12 h-px bg-zinc-300 group-hover:bg-[#ffb400] transition-colors duration-300" />
            <div className="w-2 h-2 border border-zinc-300 group-hover:border-[#ffb400] group-hover:bg-[#ffb400] transition-all duration-300" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-px h-32 bg-gradient-to-b from-transparent via-[#ffb400]/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-px h-24 bg-gradient-to-t from-transparent via-zinc-400/30 to-transparent hidden lg:block" />
    </section>
  );
};

export default Services;
