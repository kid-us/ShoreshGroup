import Advantage from "../components/Home/Advantage";
import Hero from "../components/Home/Hero";
import Portfolio from "../components/Home/Portfolio";
import Stat from "../components/Home/Stat";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navbar/Nav";

const Home = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <Stat />
      <Advantage />
      <Portfolio />
      <Footer />
    </main>
  );
};

export default Home;
