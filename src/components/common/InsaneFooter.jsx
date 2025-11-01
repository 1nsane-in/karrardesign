import { Link } from "react-router";
import { KarrarLogoSVG2 } from "../../assets/svg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start flex-col md:flex-row justify-between mb-8">
          <Link to="/" className=" w-[300px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 opacity-80">
                <KarrarLogoSVG2 />
              </div>
              <h3 className="font-cinzel text-xl text-white">
                Karrar Design & Projects
              </h3>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Premium interior fit-out and project management services across
              UAE, Canada, and India.
            </p>
          </Link>
          <div className="md:ml-10 ml-0 mt-6 md:mt-0">
            <h3 className="text-sm font-semibold mb-4 text-[#ffb400]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link
                  to="/studio"
                  className="hover:text-[#ffb400] transition-colors"
                >
                  Studio
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#ffb400] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="hover:text-[#ffb400] transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#ffb400] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-6 md:mt-0">
            <h3 className="text-sm font-semibold mb-4 text-[#ffb400]">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>Dubai, UAE</li>
              <li>info@karrardesign.com</li>
              <li>+971 XX XXX XXXX</li>
            </ul>
          </div>
          <div className="w-[100px] mt-6 md:mt-0">
            <h3 className="text-sm font-semibold mb-4 text-[#ffb400]">
              Socials
            </h3>
            <div className="grid grid-cols-4  gap-10 md:grid-cols-2 w-[100px] space-y-[10px]">
              <div className=" size-[35px]  border-zinc-400 rounded-xl flex items-center justify-start cursor-pointer ">
                <FaFacebookF
                  className=" text-zinc-400 hover:text-primary transition-all ease-in-out duration-300"
                  fontSize={20}
                />
              </div>
              <div className=" size-[35px]  border-zinc-400 rounded-xl flex items-center justify-start cursor-pointer ">
                <FaInstagram
                  className=" text-zinc-400 hover:text-primary transition-all ease-in-out duration-300"
                  fontSize={24}
                />
              </div>
              <div className=" size-[35px]  border-zinc-400 rounded-xl flex items-center justify-start cursor-pointer">
                <TiSocialLinkedin
                  className=" text-zinc-400 hover:text-primary transition-all ease-in-out duration-300"
                  fontSize={30}
                />
              </div>
              <div className=" size-[35px]  border-zinc-400 rounded-xl flex items-center justify-start cursor-pointer">
                <FaXTwitter
                  className=" text-zinc-400 hover:text-primary transition-all ease-in-out duration-300"
                  fontSize={20}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Karrar Design Projects L.L.C. All
            rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-[#ffb400] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-[#ffb400] cursor-pointer transition-colors">
              Terms & Conditions
            </span>
          </div>
        </div>
        <div className="text-center mt-4 text-xs text-zinc-500 mb-10 md:mb-0">
          <p>
            Crafted by{" "}
            <a
              href="https://www.1nsane.in/"
              target="_blank"
              rel="noreferrer"
              className="text-[#ffb400] hover:underline"
            >
              {" "}
              1nsane.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
