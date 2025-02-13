import { useEffect, useState } from "react";
import CoreValues from "../components/About/CoreValues";
import Mission from "../components/About/Mission";
import WhoWeAre from "../components/About/WhoWeAre";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import useDocumentTitle from "../hooks/useDocumentTitle";

const About = () => {
  const [title] = useState<string>("About US");
  useDocumentTitle(title);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar bg />
      <div className="hero pt-48 pb-16 bg">
        <div className="container mx-auto">
          <p className="text-sm uppercase text-gray-200">About US</p>

          <p className="lg:text-4xl text-lg mt-10 lg:w-[80%] text-white font-medium">
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
