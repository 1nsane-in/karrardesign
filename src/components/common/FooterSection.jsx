import PropTypes from "prop-types";

const FooterSection = ({ title, children, className = "" }) => (
  <div className={`mt-6 md:mt-0 ${className}`}>
    <h3 className="text-sm font-semibold mb-4 text-primary">{title}</h3>
    {children}
  </div>
);

export default FooterSection;

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
