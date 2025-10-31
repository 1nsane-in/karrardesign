// Single Responsibility: Handle contact information display
const ContactInfo = ({ title, children, className = "" }) => (
  <div className={className}>
    <h1 className="font-bold uppercase text-sm text-center lg:text-left">
      {title}
    </h1>
    {children}
  </div>
);

export default ContactInfo;