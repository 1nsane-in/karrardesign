import { Link } from "react-router";
import { KarrarLogoSVG2 } from "../../assets/svg";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 opacity-80">
                <KarrarLogoSVG2 />
              </div>
              <h3 className="font-cinzel text-xl text-white">Karrar Design & Projects</h3>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Premium interior fit-out and project management services across UAE, Canada, and India.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#ffb400]">Quick Links</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link to="/studio" className="hover:text-[#ffb400] transition-colors">Studio</Link></li>
              <li><Link to="/services" className="hover:text-[#ffb400] transition-colors">Services</Link></li>
              <li><Link to="/work" className="hover:text-[#ffb400] transition-colors">Work</Link></li>
              <li><Link to="/contact" className="hover:text-[#ffb400] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#ffb400]">Services</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>Interior Fit-Out</li>
              <li>Project Management</li>
              <li>Design Management</li>
              <li>Consultancy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#ffb400]">Contact</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>Dubai, UAE</li>
              <li>info@karrardesign.com</li>
              <li>+971 XX XXX XXXX</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
          <p>© 2025 Karrar Design Projects L.L.C. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-[#ffb400] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#ffb400] cursor-pointer transition-colors">Terms & Conditions</span>
          </div>
        </div>
        <div className="text-center mt-4 text-xs text-zinc-500">
          <p>
            Crafted by{" "}
            <a href="https://www.1nsane.in/" target="_blank" rel="noreferrer" className="text-[#ffb400] hover:underline">
              1nsane.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
