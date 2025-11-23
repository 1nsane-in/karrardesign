import { KarrarLogoSVG2 } from "../../assets/svg";

const KarrarSplashScreen = () => {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen bg-background-black">
      <div className="flex items-center gap-1">
        <div className="w-12 h-12">
          <KarrarLogoSVG2 />
        </div>
        <div className={` border-l-2 pl-2  transition-colors `}>
          <h1 className={`font-cinzel  md:text-xl text-white `}>
            Karrar Design Projects
          </h1>
        </div>
      </div>
      <div className="h-[1px] w-[25%] my-2 bg-gradient-to-l from-transparent  via-zinc-400 to-transparent"></div>
      <div className="w-12 h-12 border-3 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default KarrarSplashScreen;
