import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import HowItWorks from "../components/Investor/HowItWorks";
import Invest from "../components/Investor/Invest";
import Navbar from "../components/Navbar/Navbar";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { why } from "../assets";
import useToggleStore from "../store/store";
// import Container from "../components/Container/Container";

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
      title: "Proven Success",
      desc: "A track record of profitable real estate investments.",
    },
    {
      id: 2,
      title: "Diversified Portfolio",
      desc: "Gain exposure to a mix of single-family, multifamily, and large-scale projects.",
    },
    {
      id: 3,
      title: "Transparency & Trust",
      desc: "We prioritize clear communication and investor confidence.",
    },
    {
      id: 4,
      title: "Passive Income Potential",
      desc: "Invest in projects without the hassle of day-to-day management.",
    },
  ];

  const { isToggled } = useToggleStore();

  return (
    <>
      <Navbar bg />

      <div className={`${isToggled ? "pt-28" : "pt-52"} pb-16 bg`}>
        <div className="container mx-auto">
          <p className="text-sm uppercase text-gray-200">Invest With US</p>

          <p className="lg:text-3xl text-xl mt-6 lg:w-[80%] text-white font-medium">
            Unlock Exclusive Real Estate Opportunities Join Shoresh-group’s
            investor network and gain access to exclusive real estate investment
            opportunities. Whether you're looking for short-term fix-and-flip
            projects or long-term, cash-flowing properties, our private equity
            fund allows you to invest alongside an experienced team with a
            proven track record.
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
