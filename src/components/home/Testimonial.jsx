import { memo } from "react";
import { AnimatedTestimonials } from "../ui/animate-testimonial";

const Testimonial = memo(() => {
  const testimonials = [
    {
      quote:
        "Every detail was meticulously executed, from the architectural flow to the finishing touches. The result is a home that truly reflects our lifestyle and vision.",
      name: "Mr. S.K. Gupta",
      designation: "Private Client, Emirates Hills, Dubai",
    },
    {
      quote:
        "The transformation of our penthouse was extraordinary. Their team balanced luxury with comfort, creating an environment that is both iconic and personal.",
      name: "VVIP Client",
      designation: "Fairmont Residences, Palm Jumeirah",
    },
    {
      quote:
        "Their project management expertise ensured flawless execution on a complex luxury hospitality project. Guests consistently remark on the elegance and refinement of the spaces.",
      name: "Management Team",
      designation: "Blue Diamond Al Salam Palace Hotel, Fujairah",
    },
    {
      quote:
        "From design concept to completion, the journey was seamless. Karrar Design Projects brought international-grade luxury into our family home.",
      name: "Gupta Family",
      designation: "Luxury Mansion, Lucknow, India",
    },
    {
      quote:
        "Their ability to merge design creativity with operational precision is unmatched. Our outlets not only look spectacular but function flawlessly.",
      name: "Operations Director",
      designation: "Entrecôte Café de Paris, Dubai & Yas Mall",
    },
  ];
  return (
    <div className="md:py-12 flex flex-col justify-center items-center">
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
});

Testimonial.displayName = "Testimonial";

export default Testimonial;
