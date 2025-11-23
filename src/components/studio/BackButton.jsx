import { Link } from "react-router";

export const BackButton = () => (
  <Link
    to="/studio"
    className="hidden md:flex fixed top-24 lg:top-8 left-8 z-50 group items-center gap-2 text-zinc-600 hover:text-primary transition-colors"
  >
    <svg
      className="w-5 h-5"
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
    <span className="text-sm uppercase tracking-wider">Back</span>
  </Link>
);
