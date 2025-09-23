import { AnimatedTestimonials } from "../ui/animate-testimonial";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Every detail was meticulously executed, from the architectural flow to the finishing touches. The result is a home that truly reflects our lifestyle and vision.",
      name: "Mr. S.K. Gupta",
      designation: "Private Client, Emirates Hills, Dubai",
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      quote:
        "The transformation of our penthouse was extraordinary. Their team balanced luxury with comfort, creating an environment that is both iconic and personal.",
      name: "VVIP Client",
      designation: "Fairmont Residences, Palm Jumeirah",
      src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200&auto=format&fit=crop",
    },
    {
      quote:
        "Their project management expertise ensured flawless execution on a complex luxury hospitality project. Guests consistently remark on the elegance and refinement of the spaces.",
      name: "Management Team",
      designation: "Blue Diamond Al Salam Palace Hotel, Fujairah",
      src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      quote:
        "From design concept to completion, the journey was seamless. Karrar Design Projects brought international-grade luxury into our family home.",
      name: "Gupta Family",
      designation: "Luxury Mansion, Lucknow, India",
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&auto=format&fit=crop",
    },
    {
      quote:
        "Their ability to merge design creativity with operational precision is unmatched. Our outlets not only look spectacular but function flawlessly.",
      name: "Operations Director",
      designation: "Entrecôte Café de Paris, Dubai & Yas Mall",
      src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop",
    },
  ];
  return (
    <div className=" h-screen  flex flex-col justify-center items-center">
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default Testimonial;
