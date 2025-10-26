// Single Responsibility: Handle contact links with consistent styling
const ContactLink = ({ href, children, className = "" }) => (
  <a
    href={href}
    className={`hover:text-[#ffb400] focus-visible:text-[#ffb400] transition-colors duration-200 outline-none ${className}`}
  >
    {children}
  </a>
);

export default ContactLink;