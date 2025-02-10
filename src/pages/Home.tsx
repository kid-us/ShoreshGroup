import Footer from "../components/Footer/Footer";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Invest from "../components/Home/Invest";
import Portfolio from "../components/Home/Portfolio";
import Stat from "../components/Home/Stat";
import Team from "../components/Home/Team";
import Testimony from "../components/Home/Testimony";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stat />
      <Invest />
      <HowItWorks />
      <Testimony />
      <Team />
      <Portfolio />
      <Footer />
    </main>
  );
};

export default Home;
