import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";

export const FOOTER_CONFIG = {
  company: {
    name: "Karrar Design Projects",
    description:
      "Karrar Design Projects is an award-winning fitout and interior execution studio known for precise detailing and refined craftsmanship",
    copyright: "Karrar Design Projects LLC. All rights reserved.",
  },

  navigation: [
    { label: "Studio", path: "/studio" },
    { label: "Services", path: "/services" },
    { label: "Karrar", path: "/karrar" },
    { label: "Contact", path: "/contact" },
  ],

  contact: {
    location: "Dubai, UAE",
    email: "info@karrardesign.com",
    phone: "+971 50 459 1031",
  },

  social: [
    {
      icon: FaFacebookF,
      size: 20,
      href: "https://www.facebook.com/Karrardesignprojects",
    },
    {
      icon: FaInstagram,
      size: 24,
      href: "https://www.instagram.com/karrardesignprojects",
    },
    {
      icon: TiSocialLinkedin,
      size: 30,
      href: "https://www.linkedin.com/company/karrardesignprojectsllc/",
    },
    { icon: FaXTwitter, size: 20, href: "#" },
  ],

  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],

  credits: {
    text: "Crafted by",
    link: { text: "1nsane.in", href: "https://www.1nsane.in/" },
  },
};
