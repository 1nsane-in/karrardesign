import { memo } from "react";
import PropTypes from "prop-types";

const ContactInfo = memo(({ title, children, className = "" }) => (
  <div className={className}>
    <h1 className="font-bold font-gloock text-lg text-center lg:text-left text-zinc-400">
      {title}
    </h1>
    {children}
  </div>
));

ContactInfo.displayName = 'ContactInfo';

ContactInfo.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ContactInfo;
