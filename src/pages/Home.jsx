import Description from "../components/home/Description";
import Hero from "../components/home/Hero";
import ImageShowcase from "../components/home/ImageShowcase";
import TopHeader from "../components/home/TopHeader";

const Home = () => {
  return (
    <div className="bg-secondary min-h-screen ">
      <TopHeader />
      <Hero />
      <Description />
      <ImageShowcase />
    </div>
  );
};

export default Home;
