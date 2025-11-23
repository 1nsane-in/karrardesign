import { Link } from "react-router";
import { KarrarLogoSVG2 } from "../../assets/svg";
import { FOOTER_CONFIG } from "../../data/footer/FooterData";
import FooterSection from "./FooterSection";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start flex-col md:flex-row justify-between mb-8">
          {/* Company Info */}
          <div className="w-[300px]">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 opacity-80">
                <KarrarLogoSVG2 />
              </div>
              <h3 className="font-cinzel text-xl text-white">
                {FOOTER_CONFIG.company.name}
              </h3>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {FOOTER_CONFIG.company.description}
            </p>
          </div>

          {/* Navigation */}
          <FooterSection title="Quick Links" className="md:ml-10 ml-0">
            <ul className="space-y-2 text-sm text-zinc-400">
              {FOOTER_CONFIG.navigation.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Contact */}
          <FooterSection title="Contact">
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>{FOOTER_CONFIG.contact.location}</li>
              <li>{FOOTER_CONFIG.contact.email}</li>
              <li>{FOOTER_CONFIG.contact.phone}</li>
            </ul>
          </FooterSection>

          {/* Social Media */}
          <FooterSection title="Socials" className="w-[100px]">
            <div className="grid grid-cols-4 md:gap-0 gap-10 md:grid-cols-2 w-[100px] space-y-[10px]">
              {FOOTER_CONFIG.social.map((social, index) => (
                <SocialIcon key={index} {...social} />
              ))}
            </div>
          </FooterSection>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-center items-center text-xs text-zinc-500">
          <p>
            © {currentYear} {FOOTER_CONFIG.company.copyright}
          </p>
        </div>

        {/* Credits */}
        <div className="text-center mt-4 text-xs text-zinc-500 mb-10 md:mb-0">
          <p>
            {FOOTER_CONFIG.credits.text}{" "}
            <a
              href={FOOTER_CONFIG.credits.link.href}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              {FOOTER_CONFIG.credits.link.text}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
