import { Link } from "react-router";
import { ConnectSVG, ProjectSVG } from "../assets/svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Lenis from "lenis";
import { KarrarLogo } from "../assets";
import { useRef } from "react";
import StackCards from "../components/work/stacking-cards";

const servicesData = [
  {
    title: "Interior Fit-Out Works",
    tagline: "Tailored interiors that embody sophistication and functionality.",
    description:
      "We specialize in creating bespoke interior spaces for villas, hotels, restaurants, and corporate offices. From exquisite finishes to timeless layouts, our interiors merge artistry with practicality. Every fit-out is executed with meticulous attention to detail, ensuring spaces not only inspire but also enhance daily living and operations.",
    icon: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=800&auto=format&fit=crop",
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
    icon: "https://images.unsplash.com/photo-1603791452906-bb9f68c159d6?q=80&w=800&auto=format&fit=crop",
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
    icon: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800&auto=format&fit=crop",
  },
];

const projects = [
  {
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    link: "https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop",
    color: "#5196fd",
  },
  {
    title: "Clément Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément.",
    link: "https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60",
    color: "#8f89ff",
  },
  {
    title: "Zissou",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal.",
    link: "https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop",
    color: "#13006c",
  },
  {
    title: "Mathias Svold and Ulrik Hasemann",
    description:
      "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    link: "https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60",
    color: "#ed649e",
  },
  {
    title: "Mark Rammers",
    description:
      "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.",
    link: "https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop",
    color: "#fd521a",
  },
];

const Work = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* top section */}
      <div className="h-[170vh]">
        <div className=" w-full h-[80%] flex">
          <div className=" h-full w-[30%]  pt-40 px-10">(process)</div>
          <div className=" h-full w-[70%]  pt-40 pl-10">
            <p className=" text-5xl font-black max-w-3xl">
              Great architecture isn’t just about talent and experience, but
              collaborations and relationships.
            </p>
            <img
              className="mt-10 h-[75%] w-full"
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
              alt=""
            />
          </div>
        </div>
        <div className=" w-full h-[20%] flex">
          <div className=" h-full w-[30%] px-10 pt-5">(Our approach)</div>
          <div className=" h-full w-[70%] pt-5">
            <p className="text-xl leading-[25px]  pl-10">
              You can expect our team to expertly guide <br /> your project{" "}
              <br /> and work closely with you at every stage <br /> from
              delivering <br /> the initial design concepts to achieving a final{" "}
              <br /> build that <br /> goes beyond your aspirations
            </p>
          </div>
        </div>
      </div>

      {/* perspective section */}
      <main ref={container} className="relative h-[200vh]">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </main>

      <div>
        <StackCards projects={projects} />
      </div>
    </>
  );
};

export default Work;

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div
      style={{
        scale,
        rotate,
        backgroundImage:
          'url("https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="sticky top-0 h-screen text-[3.5vw]  text-white pb-[10vh] "
    >
      <div className="relative w-full h-screen">
        <div className="absolute top-0 h-full w-full bg-black/40"></div>
        <div className=" absolute top-0 left-0">
          <h1 className="text-[130px] leading-[110px] font-bold text-white">
            OVERVIEW OF
          </h1>
          <h1 className="text-[130px] leading-[110px] font-bold text-white">
            OUR 6-STAGE
          </h1>
          <h1 className="text-[130px] leading-[110px] font-bold text-white">
            PROCESS
          </h1>
        </div>
      </div>
      <div className=" absolute bottom-10 right-10 text-[110px] ">(↓)</div>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen ">
      <img
        src={
          "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        }
        alt="img"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
};
const Section3 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 0]); // opposite rotation

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-screen overflow-hidden"
    >
      <img
        src={
          "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        }
        alt="img-section-3"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </motion.div>
  );
};
const Section4 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen ">
      <img
        src={
          "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        }
        alt="img"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
};
const Section5 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 0]); // opposite rotation

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-screen overflow-hidden"
    >
      <img
        src={
          "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        }
        alt="img-section-3"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </motion.div>
  );
};

const Section6 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen ">
      <img
        src={
          "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        }
        alt="img"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
};
const Section7 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 0]); // opposite rotation

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-screen overflow-hidden"
    >
      <img
        src={
          "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        }
        alt="img-section-3"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </motion.div>
  );
};

const Section8 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen ">
      <img
        src={
          "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        }
        alt="img"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
};
const Section9 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 0]); // opposite rotation

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-screen overflow-hidden"
    >
      <img
        src={
          "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        }
        alt="img-section-3"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </motion.div>
  );
};

const Section10 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen ">
      <img
        src={
          "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        }
        alt="img"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
};
