import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import HowItWorks from "../components/Investor/HowItWorks";
import Invest from "../components/Investor/Invest";
import Navbar from "../components/Navbar/Navbar";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Investor = () => {
  const [title] = useState<string>("Investor Portal");
  useDocumentTitle(title);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  return (
    <>
      <Navbar bg />

      <div className="pt-48 pb-16 bg">
        <div className="container mx-auto">
          <p className="text-sm uppercase text-gray-200">Why Invest With us</p>
          <div className="mt-10">
            {choose.map((c) => (
              <div className="lg:mt-5 mt-3">
                <div key={c.id}>
                  <h1 className="text-white font-bold mb-2 text-xl uppercase">
                    {c.title}
                  </h1>
                  <p className="text-gray-200 lg:text-xl text-lg">{c.desc}</p>
                </div>
              </div>
            ))}
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
