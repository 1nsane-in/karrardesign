import { Link } from "react-router";
import { ConnectSVG, ProjectSVG } from "../assets/svg";
import { useRevealer } from "../hooks/useRevealer";
import { GALLERY_IMAGES } from "../assets/gallery";

const Studio = () => {
  // useRevealer(0.4);

  return (
    <div>
      {/* <div className="revealer fixed top-0 left-0 w-full h-full bg-primary origin-top z-50"></div> */}
      <div className=" flex flex-col items-center justify-center pt-[180px]">
        <p className="text-xs uppercase">STUDIO</p>
        <h1 className="text-[110px] leading-[120px] uppercase mt-10 font-tan-pearl">
          Where
        </h1>
        <h1 className="text-[110px] leading-[120px] uppercase font-tan-pearl">
          Vision Become
        </h1>
        <h1 className="text-[110px] leading-[120px] uppercase font-tan-pearl"></h1>
        <h1 className="text-[110px] leading-[120px] uppercase font-tan-pearl">
          Reality
        </h1>
        <div className="-mt-6">
          <ProjectSVG />
        </div>
        <div className="container max-w-5xl mx-auto px-4 py-16 space-y-4">
          <ImageGrid />
          <ImageGrid folder={"dubai-mall"} />
          <ImageGrid folder={"hafiz-mustafa"} />
        </div>
      </div>
    </div>
  );
};

export default Studio;

export function ImageGrid({ folder = "al-mandalo" }) {
  const images = GALLERY_IMAGES[folder];

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map(({ main, fallback }, index) => (
        <img
          key={index}
          src={main}
          alt={`${folder} image ${index + 1}`}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallback;
          }}
        />
      ))}
    </div>
  );
}
