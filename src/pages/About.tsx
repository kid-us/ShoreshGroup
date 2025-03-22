import { useEffect, useState } from "react";
import Mission from "../components/About/Mission";
import Footer from "../components/Footer/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";
import LinkButton from "../components/Button/LinkButton";
import { about_us, join } from "../assets";
import Nav from "../components/Navbar/Nav";
import Team from "../components/Home/Team";

const About = () => {
  const [title] = useState<string>("About Shoresh-group");
  useDocumentTitle(title);

  const [showMore, setShowMore] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "auto";
  }, []);

  const short = [
    "Shoresh-group was founded by individuals who believed in creating a legacy for future generations. Initially established as Shoresh, the company began with a simple vision: to invest in real estate and build lasting value for the family. Living a modest life, they focused on investing their hard-earned resources into something that would provide for the next generation, ensuring they had the tools to succeed in an ever-changing world.",
  ];

  const long = [
    "Shoresh-group was founded by individuals who believed in creating a legacy for future generations. Initially established as Shoresh, the company began with a simple vision: to invest in real estate and build lasting value for the family. Living a modest life, they focused on investing their hard-earned resources into something that would provide for the next generation, ensuring they had the tools to succeed in an ever-changing world.",

    "Through strategic real estate investments, Shoresh grew the family’s financial stability, allowing them to reach new heights of success. As the company evolved and the next generation took the reins, the name changed to Shoresh-group to reflect its broader ambitions and growth. The values and mission established in the early years were embraced by those who continued to lead the company, using their skills and knowledge to propel Shoresh-group to new levels of success.",

    "As Shoresh-group continues to expand, it seeks to share this powerful model with others. By opening its doors to investors and families who share the same values, Shoresh-group is building a community of like-minded individuals committed to growth, success, and long-term prosperity.",
  ];

  return (
    <>
      <Nav bg />
      <div className={`hero lg:pt-44 pt-40 lg:pb-16 pb-10`}>
        <div className="container mx-auto">
          <p className="text-sm uppercase text-gray-500 mb-6">About US</p>
          <div className="grid lg:grid-cols-2 lg:gap-1 gap-10">
            <div className="lg:order-0 order-2">
              <img src={about_us} alt="About us" />
            </div>
            <div className="">
              <h1 className="lg:text-3xl text-2xl text-">Our Story</h1>

              <div className="mt-5">
                {showMore
                  ? long.map((l) => <p className="text-lg text-">{l}</p>)
                  : short.map((s) => <p className="text-lg text-">{s}</p>)}
              </div>

              <button
                onClick={() => setShowMore(!showMore)}
                className={`${"bg text-white hover:text-gray-200"} mt-4 font-semibold px-12 py-3 text-xs rounded uppercase group`}
              >
                {showMore ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Team />

      <Mission />

      <div className="container mx-auto px-5 my-10 lg:w-[70%]">
        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-5">
          <div className="flex flex-col justify-center">
            <p className="lg:text-xl mb-10 lg:font-semibold text-gray-700">
              Want to be a part of something bigger? Get in touch today and
              discover how you can join our growing legacy.
            </p>
            <LinkButton name="Join Our Journey" path="/contact" />
          </div>
          <div>
            <img
              src={join}
              alt="Join Our Journey"
              className="w-full lg:h-96 lg:object-cover lg:object-right rounded-lg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
