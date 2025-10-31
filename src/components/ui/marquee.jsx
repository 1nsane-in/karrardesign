import { ComponentPropsWithoutRef } from "react";

import { cn } from "../../lib/utils";

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  direction = "left",
  speed = 60,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden sm:mt-24 mt-10 z-10 relative",
        className
      )}
      {...props}
    >
      {/* Added responsive padding and max-width */}
      <div className="relative flex w-full max-w-full overflow-hidden py-8">
        {/* First instance of content */}
        <div
          className={cn(
            "flex shrink-0 animate-marquee gap-16",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "animate-marquee-reverse"
          )}
          style={{ "--duration": `${speed}s` }}
        >
          {children}
        </div>
        {/* Duplicate for seamless loop */}
        <div
          className={cn(
            "flex shrink-0 animate-marquee gap-16",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "animate-marquee-reverse"
          )}
          style={{ "--duration": `${speed}s` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
