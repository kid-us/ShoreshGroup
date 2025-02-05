import CoreValues from "../components/Home/CoreValues";
import Hero from "../components/Home/Hero";
import Mission from "../components/Home/Mission";
import Testimony from "../components/Home/Testimony";
import WhoWeAre from "../components/Home/WhoWeAre";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Mission />
      <CoreValues />
      <Testimony />
    </main>
  );
};

export default Home;
