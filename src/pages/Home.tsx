import Footer from "../components/Footer/Footer";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
// import Interested from "../components/Home/Interested";
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
      <HowItWorks />
      <Testimony />
      <Team />
      <Portfolio />
      {/* <Interested /> */}
      <Footer />
    </main>
  );
};

export default Home;
