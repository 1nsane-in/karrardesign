import React from "react";
import { KarrarLogo } from "../../assets";

const StudioPhilosophy = () => {
  return (
    <section className="philosophy-section mt-20 sm:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Philosophy Content */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-tan-pearl text-zinc-700 mb-6">
            Project Philosophy
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl italic text-zinc-600 mb-10 font-light">
            Every Detail Matters
          </p>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-zinc-700 font-light">
              We don't just design spaces, we{" "}
              <strong className="font-semibold hover:text-[#ffb400] transition-colors duration-300 cursor-pointer">
                curate experiences
              </strong>
              . From consultation to completion, our process ensures that each
              project embodies{" "}
              <strong className="font-semibold hover:text-[#ffb400] transition-colors duration-300 cursor-pointer">
                function, form, and timeless elegance
              </strong>
              . Whether a private residence, a five-star hotel, or a high-end
              retail environment, we approach each project as a unique story
              waiting to be told.
            </p>
          </div>
        </div>

        {/* Elegant Divider with Logos */}
        <div className="flex items-center justify-center mb-16 lg:mb-20">
          <div className="h-px bg-zinc-300 flex-1 max-w-24"></div>
          <div className="flex items-center gap-4 mx-8">
            <img
              src={KarrarLogo}
              alt="Karrar Logo"
              className="w-4 h-4 opacity-60"
            />
            <img
              src={KarrarLogo}
              alt="Karrar Logo"
              className="w-4 h-4 opacity-60"
            />
            <img
              src={KarrarLogo}
              alt="Karrar Logo"
              className="w-4 h-4 opacity-60"
            />
          </div>
          <div className="h-px bg-zinc-300 flex-1 max-w-24"></div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-tan-pearl text-zinc-700 leading-tight">
            Let's Create Your Next
            <br />
            Landmark Project
          </h3>
        </div>
      </div>
    </section>
  );
};

export default StudioPhilosophy;
