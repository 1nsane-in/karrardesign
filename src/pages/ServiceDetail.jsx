import { motion } from "framer-motion";
import { useParams, Link } from "react-router";
import { KarrarLogo } from "../assets";
import { ConnectSVG } from "../assets/svg.jsx";
import NoiseOverlay from "../components/common/NoiseOverlay.jsx";
import SocialConnect from "../components/common/SocialConnect.jsx";

const services = [
  {
    id: "interior-fitout",
    title: "Interior Fit-Out Works",
    description:
      "Bespoke interior solutions for villas, hotels, offices, and restaurants, combining refined aesthetics with practical functionality.",
    features: [
      "Custom Interior Solutions",
      "Luxury Finishes",
      "Functional Space Design",
      "Turnkey Fit-Out Execution",
    ],
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "project-management",
    title: "Project Management",
    description:
      "Comprehensive project oversight ensuring time, cost, and quality objectives are met with precision and transparency.",
    features: [
      "Cost & Schedule Control",
      "Quality Management",
      "Risk Mitigation",
      "Stakeholder Coordination",
    ],
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "construction-management",
    title: "Construction Management",
    description:
      "Expert supervision of all construction trades delivering efficiency, cost savings, and superior quality across every phase.",
    features: [
      "Trade Package Management",
      "Cost Optimization",
      "Quality Control",
      "On-Site Coordination",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "design-management",
    title: "Design Management",
    description:
      "Managing the complete design lifecycle to ensure creative concepts are efficiently realized into flawless built spaces.",
    features: [
      "Architect Coordination",
      "Design Review & Validation",
      "Construction Compatibility",
      "Technical Documentation",
    ],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tender-management",
    title: "Tender Management",
    description:
      "Structured procurement and tender evaluation ensuring the selection of trusted, high-quality partners.",
    features: [
      "Tender Preparation",
      "Bid Evaluation",
      "Vendor Shortlisting",
      "Negotiation Support",
    ],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "client-representation",
    title: "Client Representation",
    description:
      "Dedicated partnership guiding clients through every decision, ensuring transparency and long-term value.",
    features: [
      "Progress Monitoring",
      "Decision Support",
      "Stakeholder Communication",
      "Quality Oversight",
    ],
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "consultancy",
    title: "Consultancy Services",
    description:
      "Specialized consultancy covering design, cost, and project performance to maximize outcomes and efficiency.",
    features: [
      "Design Optimization",
      "Value Engineering",
      "Cost Analysis",
      "Procurement Strategy",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "value-engineering",
    title: "Value Engineering & Cost Analysis",
    description:
      "Smart design and material assessment ensuring the perfect balance of luxury, function, and cost efficiency.",
    features: [
      "Material Evaluation",
      "Alternative Solutions",
      "Budget Optimization",
      "Design Refinement",
    ],
    image:
      "https://images.unsplash.com/photo-1603791452906-bb9f68c159d6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "procurement",
    title: "Procurement",
    description:
      "End-to-end material sourcing and vendor negotiation delivering premium quality and value for investment.",
    features: [
      "Vendor Identification",
      "RFQ & PO Management",
      "Contract Negotiation",
      "Supply Chain Coordination",
    ],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "claims-management",
    title: "Claims Management & Troubleshooting",
    description:
      "Protecting client interests through strategic claim assessment and swift resolution of project challenges.",
    features: [
      "Claims Evaluation",
      "Contract Advisory",
      "Issue Resolution",
      "Risk Management",
    ],
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1200&auto=format&fit=crop",
  },
];

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-zinc-600">Service not found</p>
      </div>
    );
  }

  return (
    <>
      <NoiseOverlay />

      <div className="max-w-6xl mx-auto mt-36 sm:mt-24 md:mt-32 lg:mt-44 px-4 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <img
              src={KarrarLogo}
              alt="Karrar Logo"
              className="w-4 h-4 opacity-60"
            />
            <Link
              to="/services"
              className="text-xs uppercase text-zinc-600 hover:text-[#ffb400] transition-colors"
            >
              Services
            </Link>
            <span className="text-zinc-400">/</span>
            <p className="text-xs uppercase text-zinc-600">{service.title}</p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[70px] leading-tight lg:leading-[75px] font-tan-pearl text-zinc-700 mb-6">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-700 max-w-3xl mb-12">
            {service.description}
          </p>

          <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden mb-12">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-tan-pearl text-zinc-700 mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#ffb400] mt-1">✦</span>
                    <span className="text-zinc-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-tan-pearl text-zinc-700 mb-6">
                Why Choose Us
              </h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                Our team brings decades of combined experience in delivering
                exceptional results across diverse projects.
              </p>
              <p className="text-zinc-700 leading-relaxed">
                We combine technical expertise with creative vision to ensure
                every project exceeds expectations.
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-16">
            <div className="lg:w-xs w-32">
              <ConnectSVG />
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-tan-pearl text-zinc-700 mb-6">
              Ready to Get Started?
            </h3>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-[#ffb400] text-white rounded-full hover:bg-[#e5a200] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      <SocialConnect />
    </>
  );
};

export default ServiceDetail;
