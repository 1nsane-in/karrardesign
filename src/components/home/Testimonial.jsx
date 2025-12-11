import { memo } from "react";
import { AnimatedTestimonials } from "../ui/animate-testimonial";
import { useTestimonials } from "../../hooks/useTestimonial";

const Testimonial = memo(() => {
  const { testimonials, loading } = useTestimonials();

  return (
    <div className="md:py-12 flex flex-col justify-center items-center">
      <AnimatedTestimonials testimonials={testimonials} loading={loading} />
    </div>
  );
});

Testimonial.displayName = "Testimonial";

export default Testimonial;
