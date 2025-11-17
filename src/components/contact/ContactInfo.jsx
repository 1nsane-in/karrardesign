import PropTypes from "prop-types";

const ContactInfo = ({ title, children, className = "" }) => (
  <div className={className}>
    <h1 className="font-bold uppercase text-sm text-center lg:text-left text-zinc-500">
      {title}
    </h1>
    {children}
  </div>
);

export default ContactInfo;

ContactInfo.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
