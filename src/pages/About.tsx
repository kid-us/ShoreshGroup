import CoreValues from "../components/About/CoreValues";
import Mission from "../components/About/Mission";
import WhoWeAre from "../components/About/WhoWeAre";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar bg />
      <div className="hero h-[100dvh] pt-48 bg-secondary">
        <div className="container mx-auto">
          <p className="text-sm uppercase text-gray-200">About US</p>

          <p className="text-4xl mt-10 w-[80%] text-white font-medium">
            Shoresh Group began as a family venture focused on creating
            generational wealth through real estate. As we experienced growth
            and success, we saw the opportunity to share our journey and open
            doors for other like-minded families and investors to join us.
            Today, we unlock value through a range of real estate projects, from
            distressed homes and multifamily real estate to large-scale
            developments, creating opportunities for all involved.
          </p>
        </div>
      </div>
      <WhoWeAre />
      <Mission />
      <CoreValues />
      <Footer />
    </>
  );
};

export default About;
