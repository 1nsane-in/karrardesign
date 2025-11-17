import StackCards from "../components/services/stacking-cards.jsx";
import NoiseOverlay from "../components/common/NoiseOverlay.jsx";
import ServicesHero from "../components/services/ServicesHero.jsx";
import LogoDivider from "../components/common/LogoDivider.jsx";
import ServicesProcess from "../components/services/ServicesProcess.jsx";
import ServicesContact from "../components/services/ServicesContact.jsx";

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
    link: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=500&auto=format&fit=crop",
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
    link: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=500&auto=format&fit=crop",
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
    link: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=500&auto=format&fit=crop",
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
    link: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop",
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
    link: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=500&auto=format&fit=crop",
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
    link: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop",
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
    link: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=500&auto=format&fit=crop",
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
    link: "https://images.unsplash.com/photo-1632571401005-458e9d244591?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
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
    link: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=500&auto=format&fit=crop",
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
    link: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=500&auto=format&fit=crop",
  },
];

const Services = () => {
  return (
    <div className="bg-background-black">
      {/* Noise Grain Overlay */}
      <NoiseOverlay />
      {/* Hero Section */}
      <ServicesHero />
      {/* Stack Cards */}
      <StackCards projects={services} />
      {/* Divider with Logos */}
      <LogoDivider />
      {/* Process Section */}
      <ServicesProcess />
      {/* Contact Section */}
      <ServicesContact />
    </div>
  );
};

export default Services;
