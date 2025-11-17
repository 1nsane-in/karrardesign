import React from "react";
import { KarrarLogo } from "../../assets";
import LogoDivider from "../common/LogoDivider";

const StudioPhilosophy = () => {
  return (
    <section className="philosophy-section mt-20 sm:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Philosophy Content */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[80px] font-gloock text-white mb-6">
            Project Philosophy
          </h2>
          <p className="text-xl sm:text-2xl  text-zinc-400 mb-10 font-light">
            Every Detail Matters
          </p>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl  leading-relaxed text-zinc-400 font-light">
              We don't just design spaces, we{" "}
              <strong className="font-semibold hover:text-primary transition-colors  duration-300 cursor-pointer">
                curate experiences
              </strong>
              . From consultation to completion, our process ensures that each
              project embodies{" "}
              <strong className="font-semibold hover:text-primary transition-colors text-zinc-300 ease-in-out duration-300 cursor-pointer">
                function, form, and timeless elegance
              </strong>
              . Whether a private residence, a five-star hotel, or a high-end
              retail environment, we approach each project as a unique story
              waiting to be told.
            </p>
          </div>
        </div>

        {/* Elegant Divider with Logos */}
        <LogoDivider />
      </div>
    </section>
  );
};

export default StudioPhilosophy;
