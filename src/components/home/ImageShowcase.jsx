const ImageShowcase = () => {
  const Img1 =
    "https://aebeleinteriors.com/wp-content/uploads/2020/08/old-town-boutique-hotel-005-1920x1281.jpg";
  const Img2 =
    "https://aebeleinteriors.com/wp-content/uploads/2020/08/old-town-boutique-hotel-020.jpg";

  return (
    <div className="max-w-5xl mx-auto relative pb-[400px] mt-[200px]">
      <img src={Img1} alt="Showcase" className="w-[80%] h-auto" />
      <img
        src={Img2}
        alt="Showcase"
        className="w-[35%] h-auto absolute -mt-[200px] right-0"
      />
    </div>
  );
};

export default ImageShowcase;
