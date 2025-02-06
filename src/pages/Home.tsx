import Footer from "../components/Footer/Footer";
import CoreValues from "../components/Home/CoreValues";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Interested from "../components/Home/Interested";
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
      <HowItWorks />
      <Mission />
      <CoreValues />
      <Testimony />
      <Interested />
      <Footer />
    </main>
  );
};

export default Home;
