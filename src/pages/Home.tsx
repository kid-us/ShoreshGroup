import Footer from "../components/Footer/Footer";
import Advantage from "../components/Home/Advantage";
import Hero from "../components/Home/Hero";
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
      <Advantage />
      <Portfolio />
      <Team />
      <Testimony />
      <Footer />
    </main>
  );
};

export default Home;
