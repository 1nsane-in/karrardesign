const Footer = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center py-20 text-primary leading-5 uppercase text-center text-[14px] pt-10 ">
      <p>Worldwide Turnkey Interior Projects</p>
      <p>
        Æbele Interiors Is A Premium Re-seller Of Eric Kuster Metropolitan
        Luxury
      </p>
      <div className="lg:flex mt-3 gap-1 grid grid-cols-2">
        <span>Terms & Conditions</span>
        <p className="hidden">•</p>
        <span>Terms & Conditions B2B</span> <p className="hidden">•</p>
        <p className="hidden">•</p>
        <span>Privacy Policy</span> <p className="hidden">•</p>
        <span>Site by Exo Ape</span>
      </div>
    </div>
  );
};

export default Footer;
