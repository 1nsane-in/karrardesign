import { useEffect, useState } from "react";

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(
        `https://gist.githubusercontent.com/TusharSahu02/6cf3a9f4c0b75370ab1f03d27747476a/raw/karrar-testimonials.json?t=${Date.now()}`
      );
      const data = await response.json();
      setTestimonials(data || []);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return {
    testimonials,
    loading,
  };
};
