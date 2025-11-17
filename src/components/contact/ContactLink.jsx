import { memo } from "react";

const ContactLink = memo(({ href, children, className = "" }) => (
  <a
    href={href}
    className={`hover:text-primary focus-visible:text-primary transition-colors duration-200 outline-none ${className}`}
  >
    {children}
  </a>
));

ContactLink.displayName = 'ContactLink';

export default ContactLink;
