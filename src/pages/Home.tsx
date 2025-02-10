import Footer from "../components/Footer/Footer";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Interested from "../components/Home/Interested";
import Stat from "../components/Home/Stat";
import Testimony from "../components/Home/Testimony";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stat />
      {/* <Assets /> */}
      <Testimony />
      <HowItWorks />
      <Interested />
      <Footer />
    </main>
  );
};

export default Home;
