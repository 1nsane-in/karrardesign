import PropTypes from "prop-types";

const SocialIcon = ({ icon: Icon, size, href }) => (
  <a
    href={href}
    className="size-[35px] flex items-center justify-start cursor-pointer"
    aria-label={`Social media link`}
  >
    <Icon
      className="text-zinc-400 hover:text-primary transition-all ease-in-out duration-300"
      fontSize={size}
    />
  </a>
);

export default SocialIcon;

SocialIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  size: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
};
