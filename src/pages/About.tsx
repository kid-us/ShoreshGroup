import { useEffect, useState } from "react";
import CoreValues from "../components/About/CoreValues";
import Mission from "../components/About/Mission";
import WhoWeAre from "../components/About/WhoWeAre";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import useDocumentTitle from "../hooks/useDocumentTitle";
import LinkButton from "../components/Button/LinkButton";

const About = () => {
  const [title] = useState<string>("About Shoresh Group");
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

      <div className="container mx-auto px-5 mt-10">
        <div className="border-2 border-btn rounded-xl p-8 mb-10 text-center">
          <p className="lg:text-lg mb-5 lg:font-semibold">
            Want to be a part of something bigger? Get in touch today and
            discover how you can join our growing legacy.
          </p>
          <LinkButton name="Join Our Journey" path="/contact" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
