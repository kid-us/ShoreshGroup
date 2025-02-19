import { useEffect, useState } from "react";
import CoreValues from "../components/About/CoreValues";
import Mission from "../components/About/Mission";
// import WhoWeAre from "../components/About/WhoWeAre";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import useDocumentTitle from "../hooks/useDocumentTitle";
import LinkButton from "../components/Button/LinkButton";

const About = () => {
  const [title] = useState<string>("About Shoresh Group");
  useDocumentTitle(title);

  const [showMore, setShowMore] = useState<boolean>(false);

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  const short = [
    "Shoresh Group was founded with the belief that true success isn’t just about financial gains—it’s about creating lasting impact for future generations. The company began with a modest vision of building generational wealth through real estate investments that would empower families, strengthen communities, and leave a legacy for years to come. Over time, the vision expanded as the company grew, with a new generation dedicated to taking the legacy forward. They saw the opportunity to not only provide for their family but to share this model of success with others, opening the door for other investors and families to join in the journey of growth.",
  ];

  const long = [
    "Shoresh Group was founded by individuals who believed in creating a legacy for future generations. Initially established as Shoresh, the company began with a simple vision: to invest in real estate and build lasting value for the family. Living a modest life, they focused on investing their hard-earned resources into something that would provide for the next generation, ensuring they had the tools to succeed in an ever-changing world.",

    "Through strategic real estate investments, Shoresh grew the family’s financial stability, allowing them to reach new heights of success. As the company evolved and the next generation took the reins, the name changed to Shoresh Group to reflect its broader ambitions and growth. The values and mission established in the early years were embraced by those who continued to lead the company, using their skills and knowledge to propel Shoresh Group to new levels of success.",

    "As Shoresh Group continues to expand, it seeks to share this powerful model with others. By opening its doors to investors and families who share the same values, Shoresh Group is building a community of like-minded individuals committed to growth, success, and long-term prosperity.",
  ];

  return (
    <>
      <Navbar bg />
      <div className="hero pt-48 pb-16 bg">
        <div className="container mx-auto">
          <p className="text-sm uppercase text-gray-200">About US</p>

          <p className="lg:text-4xl text-lg mt-10 lg:w-[80%] text-white font-medium font-logo">
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

      {/* <WhoWeAre /> */}

      {/* <div className="bg-[#502b11]"> */}
      <div className="container mx-auto py-20">
        <h1 className="lg:text-3xl text-2xl lg:text-left text-center">
          Our Story
        </h1>

        <div className="mt-5">
          {showMore
            ? long.map((l) => <p className="text-lg">{l}</p>)
            : short.map((s) => <p className="text-lg">{s}</p>)}
        </div>

        <button
          onClick={() => setShowMore(!showMore)}
          className={`${"bg text-white hover:text-gray-200"} mt-4 font-semibold px-12 py-3 text-xs rounded uppercase group`}
        >
          {showMore ? "Read Less" : "Read More"}
        </button>

        {/* <button
          onClick={() => setShowMore(!showMore)}
          className={`${"bg2 block text-white hover:text-gray-200"} mt-4 font-semibold px-12 py-3 text-xs rounded uppercase group`}
        >
          {showMore ? "Read Less" : "Read More"}
        </button>

        <button
          onClick={() => setShowMore(!showMore)}
          className={`${"bg3 block text-white hover:text-gray-200"} mt-4 font-semibold px-12 py-3 text-xs rounded uppercase group`}
        >
          {showMore ? "Read Less" : "Read More"}
        </button> */}
      </div>
      {/* </div> */}

      <Mission />
      <CoreValues />

      <div className="container mx-auto px-5 mt-10">
        <div className="p-5 mb-10 text-center">
          <p className="lg:text-lg mb-5 lg:font-semibold text-gray-700">
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
