import Hero from "../components/Home/Hero";
import Mission from "../components/Home/Mission";
import WhoWeAre from "../components/Home/WhoWeAre";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Mission />
    </main>
  );
};

export default Home;
