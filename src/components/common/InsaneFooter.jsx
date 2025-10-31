import { Link } from "react-router";
import { KarrarLogo } from "../../assets";

const InsaneFooter = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <img src={KarrarLogo} alt="Logo" className="w-20 h-20 mb-6 opacity-80" />
          <h3 className="font-tan-pearl text-4xl mb-4">Karrar Design & Projects</h3>
          <p className="text-zinc-400 max-w-md">Crafting timeless luxury spaces across Dubai, Canada, and India</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm">
          <Link to="/" className="text-zinc-400 hover:text-[#ffb400] transition-colors uppercase tracking-wider">Home</Link>
          <Link to="/studio" className="text-zinc-400 hover:text-[#ffb400] transition-colors uppercase tracking-wider">Studio</Link>
          <Link to="/services" className="text-zinc-400 hover:text-[#ffb400] transition-colors uppercase tracking-wider">Services</Link>
          <Link to="/karrar" className="text-zinc-400 hover:text-[#ffb400] transition-colors uppercase tracking-wider">Karrar</Link>
          <Link to="/contact" className="text-zinc-400 hover:text-[#ffb400] transition-colors uppercase tracking-wider">Contact</Link>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 gap-4">
          <p>&copy; 2024 Karrar Design & Projects</p>
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

export default InsaneFooter;
