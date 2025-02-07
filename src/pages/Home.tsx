import Footer from "../components/Footer/Footer";
import Assets from "../components/Home/Assets";
import CoreValues from "../components/Home/CoreValues";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Interested from "../components/Home/Interested";
import Mission from "../components/Home/Mission";
import Stat from "../components/Home/Stat";
import Testimony from "../components/Home/Testimony";
import WhoWeAre from "../components/Home/WhoWeAre";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stat />
      <WhoWeAre />
      <HowItWorks />
      <Mission />
      <CoreValues />
      <Assets />
      <Testimony />
      <Interested />
      <Footer />
    </main>
  );
};

export default Home;
