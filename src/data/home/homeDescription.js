// Heading data
export const headings = [
  { text: "Luxury", delay: 0, lineHeight: "lg:leading-[60px]" },
  {
    text: "Fit-Outs",
    suffix: " &",
    delay: 0.2,
    lineHeight: "lg:leading-[80px]",
    highlight: true,
  },
  {
    text: "Project",
    delay: 0.4,
    lineHeight: "lg:leading-[70px]",
    highlight: true,
  },
  { text: "Management", delay: 0.6, lineHeight: "lg:leading-[80px]" },
];

// Animation variants
export const variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
  button: { opacity: 0, y: 40 },
};

// Common animation props
export const animationProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.8 },
};

// Navigation buttons data
export const navButtons = [
  { to: "/studio", text: "STUDIO" },
  { to: "/karrar", text: "KARRAR" },
  { to: "/work", text: "WORK" },
];
