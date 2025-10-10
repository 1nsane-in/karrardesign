import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const component = useRef();
  const slider = useRef();
  const headerRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Header animation
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: "top top",
        endTrigger: slider.current,
        end: "bottom top",
        onEnter: () => {
          gsap.to(headerRef.current, {
            scale: 0.6,
            duration: 0.3,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(headerRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        },
      });

      // Your existing horizontal scroll animation
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          //   markers: true,
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className="mt-40 sticky top-0 flex items-center justify-center flex-col  transition-transform origin-center py-4"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[70px] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[70px] font-tan-pearl text-zinc-700 mb-4 sm:mb-6 px-6 sm:px-0">
          Services
        </h1>
      </div>
      <div className="App" ref={component}>
        <div ref={slider} className="container-services">
          <div className="panel flex items-center justify-center flex-col relative w">
            {/* <div className="absolute top-[35%] left-[60%] -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="h-[300px] w-[450px] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
                <img
                  src="https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/al-mandalo/1.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute top-[60%] left-[40%] -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="h-[300px] w-[450px] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
                <img
                  src="https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/al-mandalo/10.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}
            <h1 className="text-2xl absolute z-20 sm:text-3xl md:text-4xl lg:text-[50px] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[70px] font-tan-pearl text-zinc-700  mb-4 sm:mb-6 px-6 sm:px-0">
              Interior Fit-Out Works, <br />
              Project Management
            </h1>
          </div>
          <div className="panel flex items-center justify-center flex-col">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[70px] font-tan-pearl text-zinc-700 mb-4 sm:mb-6 px-6 sm:px-0">
              Construction Management, <br />
              Design Management
            </h1>
          </div>
          <div className="panel flex items-center justify-center flex-col">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-[70px] font-tan-pearl text-zinc-700 mb-4 sm:mb-6 px-6 sm:px-0">
              Tender Management, <br />
              Client Representation
            </h1>
          </div>
          <div className="panel flex items-center justify-center flex-col">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center lg:text-[50px] leading-tight sm:leading-tight md:leading-tight lg:leading-[70px] font-tan-pearl text-zinc-700 mb-4 sm:mb-6 px-6 sm:px-0">
              Consultancy Services, <br />
              Value Engineering & Cost Analysis
            </h1>
          </div>
          <div className="panel flex items-center justify-center flex-col">
            <h1 className="text-2xl sm:text-3xl text-center md:text-4xl lg:text-[50px] leading-tight sm:leading-tight md:leading-tight lg:leading-[70px] font-tan-pearl text-zinc-700 mb-4 sm:mb-6 px-6 sm:px-0">
              Procurement, <br />
              Claims Management & Troubleshooting
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
