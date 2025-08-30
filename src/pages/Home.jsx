import Description from "../components/home/Description";
import Hero from "../components/home/Hero";
import TopHeader from "../components/home/TopHeader";

const Home = () => {
  return (
    <div className="bg-secondary min-h-screen ">
      <TopHeader />
      <Hero />
      <Description />
    </div>
  );
};

export default Home;
