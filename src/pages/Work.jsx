import { Link } from "react-router";
import { ConnectSVG, ProjectSVG } from "../assets/svg";
import Footer from "../components/common/Footer";
import { Feature } from "../components/ui/feature-with-images";
const Work = () => {
  const services = [
    {
      title: "Interior Fit-Out Works",
      tagline:
        "Tailored interiors that embody sophistication and functionality.",
      description:
        "We specialize in creating bespoke interior spaces for villas, hotels, restaurants, and corporate offices. From exquisite finishes to timeless layouts, our interiors merge artistry with practicality. Every fit-out is executed with meticulous attention to detail, ensuring spaces not only inspire but also enhance daily living and operations.",
      icon: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=800&auto=format&fit=crop", // replace with custom icon or project photo
    },
    {
      title: "Project Management",
      tagline: "Seamless oversight from vision to reality.",
      description:
        "Our team manages projects as an extension of the client’s organization, overseeing cost, time, quality, and safety. We coordinate architects, engineers, and contractors to ensure every element is aligned, transparent, and flawlessly executed. With over two decades of experience, we guarantee control and clarity at every stage of your project.",
      icon: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Construction Management",
      tagline: "Efficiency and savings without compromise.",
      description:
        "By dividing projects into specialized trade packages, we eliminate the need for a main contractor’s margin while providing greater flexibility and savings. This approach allows faster execution, tighter control over costs, and superior quality—all while ensuring luxury standards are upheld.",
      icon: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Design Management",
      tagline: "Harmonizing creativity and execution.",
      description:
        "We guide our clients in selecting the right architects and specialty contractors, then manage the entire design journey—from concept to final drawings. Our focus is on coordination, efficiency, and construction compatibility, ensuring that designs translate seamlessly into luxurious finished spaces.",
      icon: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Tender Management",
      tagline: "Selecting the right partners with confidence.",
      description:
        "Leveraging our extensive database of trusted contractors and vendors, we manage the tender process with precision. From preparing and distributing documents to evaluating bids both technically and commercially, we ensure the selection of partners who share our commitment to quality and excellence.",
      icon: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Client Representation",
      tagline: "Your trusted partner in every decision.",
      description:
        "We act as the single point of contact between owners and stakeholders, ensuring that communication is efficient and decisions are informed. Our role is to safeguard client interests, monitor progress, and provide expert advice so that every choice reflects long-term value and elegance.",
      icon: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Consultancy Services",
      tagline: "Insight and expertise, tailored to your needs.",
      description:
        "Our consultancy offerings extend to owners, designers, and contractors. From value engineering and design review to cost analysis, procurement strategies, and claims management, we provide solutions that optimize efficiency and elevate outcomes.",
      icon: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Value Engineering & Cost Analysis",
      tagline: "Optimizing luxury without compromise.",
      description:
        "We analyze every aspect of design and material selection to ensure the perfect balance between beauty, performance, and cost. Whether at budgetary level or with completed designs, our evaluations guarantee optimum value while preserving the essence of luxury.",
      icon: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Procurement",
      tagline: "Securing the finest, at the right value.",
      description:
        "Our team surveys the market, identifies trusted vendors, and negotiates on behalf of clients to source the highest quality materials and services. From issuing RFQs to preparing purchase orders, we manage the entire procurement cycle with transparency and efficiency.",
      icon: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Claims Management & Troubleshooting",
      tagline: "Protecting your interests, resolving challenges.",
      description:
        "We evaluate claims with a contractually strategic approach, ensuring our clients remain in the strongest possible position. Our troubleshooting services address project bottlenecks, resolving issues swiftly to keep timelines and quality on track.",
      icon: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div>
      <div className=" flex flex-col items-center justify-center lg:h-screen py-[100px]">
        <h1 className="lg:text-[60px] text-3xl leading-[120px] uppercase mt-10 font-tan-pearl">
          Our Expertise
        </h1>
        <p className="text-center max-w-3xl mt-1 lg:text-3xl text-xl font-cinzel px-5 lg:px-0">
          Comprehensive design and project management services, seamlessly
          delivered with precision, elegance, and uncompromising quality.
        </p>
      </div>
      <div className="px-5 lg:px-0">
        {services.map((service, index) => (
          <Feature
            key={index}
            title={service.title}
            tagline={service.tagline}
            description={service.description}
            icon={service.icon}
            orientation={index % 2 === 0 ? "right" : "left"} // Alternate orientation
          />
        ))}
      </div>
    </div>
  );
};

export default Work;

/*

 <p className="text-center max-w-3xl mt-5 px-5 lg:px-0">
          At Karrar Design Projects, we deliver more than interiors — we craft
          experiences. Our services span design, management, and execution,
          ensuring every project embodies precision, elegance, and timeless
          luxury.
        </p> 
        {/* <h1 className="text-[110px] leading-[120px] uppercase font-tan-pearl">
          turnkey
        </h1>
        <h1 className="text-[110px] leading-[120px] uppercase font-tan-pearl">
          Design
        </h1> 
      <div className="-mt-6">
          <ProjectSVG />
        </div> 


<div className="max-w-5xl mx-auto mt-10">
        <div className="overflow-hidden w-[60%] mx-auto">
          <img
            src="https://aebeleinteriors.com/wp-content/uploads/2024/10/finca-01.2.jpg"
            alt=""
            className="w-full h-auto cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
      <div className="overflow-hidden w-[50%] mt-52">
        <img
          src="https://aebeleinteriors.com/wp-content/uploads/2024/10/finca-01.2.jpg"
          alt=""
          className="w-full h-auto cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="max-w-5xl mx-auto mt-44 flex justify-start">
        <div className="overflow-hidden w-[70%] h-auto">
          <img
            src="https://aebeleinteriors.com/wp-content/uploads/2024/10/finca-01.2.jpg"
            alt=""
            className="w-full h-auto cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-44 flex justify-end">
        <div className="overflow-hidden w-[60%] h-auto">
          <img
            src="https://aebeleinteriors.com/wp-content/uploads/2024/10/finca-01.2.jpg"
            alt=""
            className="w-full h-auto cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-52">
        <div className="overflow-hidden w-[60%] aspect-video mx-auto">
          <img
            src="https://aebeleinteriors.com/wp-content/uploads/2024/10/finca-01.2.jpg"
            alt=""
            className="w-full h-auto cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
      <div className="overflow-hidden w-[50%] mt-52">
        <img
          src="https://aebeleinteriors.com/wp-content/uploads/2024/10/finca-01.2.jpg"
          alt=""
          className="w-full h-auto cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
        />
      </div>
      <Link
        to="/contact"
        className="pt-40 pb-10 flex flex-col items-center justify-center"
      >
        <p className="text-xs">WORK WITH US</p>
        <h1 className="text-[110px] leading-[150px] font-tan-pearl">CONTACT</h1>
        <div className="w-sm -mt-12">
          <ConnectSVG />
        </div>
      </Link>

*/
