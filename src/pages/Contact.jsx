import { ConnectSVG } from "../assets/svg.jsx";

const Contact = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto mt-44">
        <p className="text-xs uppercase">Contact</p>
        <div className="mt-10 uppercase">
          <h1 className="text-[110px] leading-[100px]">Let's work</h1>
          <h1 className="text-[110px] leading-[100px] ml-[200px]">Together</h1>
          <div className="w-md -mt-10 ml-[400px]">
            <ConnectSVG />
          </div>
        </div>
      </div>
      <div className="flex gap-12 max-w-5xl mx-auto text-sm mt-10">
        <div>
          <h1 className=" font-semibold uppercase text-xs">Antwerp</h1>
          <p className="max-w-[180px] mt-4 leading-[20px] text-gray-600">
            Mechelsesteenweg 30-32 2018 Antwerp
          </p>
          <p className="text-gray-600">Belgium</p>
        </div>
        <div>
          <h1 className=" font-bold uppercase text-xs">Dubai</h1>
          <p className="max-w-[180px] mt-4 leading-[20px] text-gray-600">
            Old Town Island, <br /> Souk Al Bahar Burj  Khalifa Blvd – District – Dubai,
          </p>
          <p className="text-gray-600">United Arab Emirates</p>
        </div>
        <div>
          <h1 className=" font-bold uppercase text-xs">Palma</h1>
          <p className="max-w-[180px] mt-4 leading-[20px] text-gray-600">
            Calle Bonaire 13 <br /> 07012 Palma de Mallorca
          </p>
          <p className="text-gray-600">Spain</p>
        </div>
      </div>
      <div className="flex gap-4 max-w-5xl mx-auto text-sm mt-10">
        <div>
          <h1 className=" font-bold uppercase text-xs">General</h1>
          <p className="max-w-[150px] mt-4 leading-[16px] text-gray-600">
            info@aebeleinteriors.com
          </p>
          <p className="text-gray-600">+32 3 257 33 57</p>
        </div>
        <div>
          <h1 className=" font-bold uppercase text-xs">Careers</h1>
          <p className="max-w-[150px] mt-4 leading-[16px] text-gray-600">
            careers@aebeleinteriors.com
          </p>
          <p className="text-gray-600">+32 3 257 33 57</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col items-center py-20 text-primary leading-5 uppercase text-[14px] pt-10 ">
        <p>Worldwide Turnkey Interior Projects</p>
        <p>
          Æbele Interiors Is A Premium Re-seller Of Eric Kuster Metropolitan
          Luxury
        </p>
        <div className="flex gap-1">
          <span>Terms & Conditions</span>•<span>Terms & Conditions B2B</span>•
          <span>Privacy Policy</span>•<span>Site by Exo Ape</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
