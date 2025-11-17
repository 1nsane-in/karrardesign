import { memo } from "react";
import SimpleWorldMap from "../ui/simple-world-map.jsx";

const ContactWorldmap = memo(() => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <SimpleWorldMap lineColor="#fff" className="opacity-60 h-full" />
    </div>
  );
});

ContactWorldmap.displayName = 'ContactWorldmap';

export default ContactWorldmap;
