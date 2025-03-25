import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import HowItWorks from "../components/Investor/HowItWorks";
import Invest from "../components/Investor/Invest";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { why } from "../assets";
import Nav from "../components/Navbar/Nav";

const Investor = () => {
  const [title] = useState<string>("Investor Portal");
  useDocumentTitle(title);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "auto";
  }, []);

  const choose = [
    {
      id: 1,
      title: "Transparency & Trust",
      desc: "We keep you informed every step of the way, building confidence through clear communication.",
    },
    {
      id: 2,
      title: "Proven Track Record",
      desc: "Completely new our history of profitable investments reflects our expertise and commitment to success.",
    },
    {
      id: 3,
      title: "Diverse Investment Opportunities - ",
      desc: "Gain access to a balanced portfolio spanning residential and commercial properties.",
    },
    {
      id: 4,
      title: " Hassle-Free Passive Income",
      desc: "Invest confidently while we handle the complexities of property management.",
    },
  ];

  return (
    <>
      <Nav bg />

      <div className={`pt-52 pb-16 bg`}>
        <div className="container mx-auto">
          <p className="text-sm uppercase text-gray-200">Invest With US</p>

          <p className="lg:text-3xl text-xl mt-6 lg:w-[80%] text-white font-medium">
            Join Shoresh-Group’s investor network and discover the power of
            strategic real estate investments. Whether you're focused on
            consistent passive income or capitalizing on value-add
            opportunities, our debt fund provides a pathway to invest with
            confidence alongside an experienced team dedicated to delivering
            exceptional returns.
          </p>
        </div>
      </div>

      <div className="container mx-auto my-14">
        <p className="text-sm uppercase text-gray-600">Why choose us</p>
        <div className="grid lg:grid-cols-2 mt-10 gap-x-10">
          <div className="">
            {choose.map((c) => (
              <div className="mt-3 border p-5 rounded-xl border-btn hover:bg-secondary hover:text-white group transition-all duration-300">
                <div key={c.id}>
                  <h1 className="font-bold mb-2 text-xl uppercase">
                    {c.title}
                  </h1>
                  <p className="text-gray-700 group-hover:text-gray-200 text-sm">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative lg:mt-3 mt-5 flex justify-center items-center">
            <img
              src={why}
              alt="Why Choose us"
              className="lg:absolute -top-52 rounded-2xl w-[80%] object-cover"
            />
          </div>
        </div>
      </div>

      <HowItWorks />

      <Invest />

      <Footer />
    </>
  );
};

export default Investor;
