import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import HowItWorks from "../components/Investor/HowItWorks";
import Invest from "../components/Investor/Invest";
import Navbar from "../components/Navbar/Navbar";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { why } from "../assets";
import Container from "../components/Container/Container";

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
          <p className="text-sm uppercase text-gray-200">Invest With US</p>

          <p className="lg:text-4xl text-lg mt-10 lg:w-[80%] text-white font-medium">
            Unlock Exclusive Real Estate Opportunities Join Shoresh Group’s
            investor network and gain access to exclusive real estate investment
            opportunities. Whether you're looking for short-term fix-and-flip
            projects or long-term, cash-flowing properties, our private equity
            fund allows you to invest alongside an experienced team with a
            proven track record.
          </p>
        </div>
      </div>

      <Container>
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
          <div className="lg:mt-3 mt-5 flex justify-center items-center">
            <img src={why} alt="Why Choose us" className="rounded-2xl" />
          </div>
        </div>
      </Container>

      <HowItWorks />

      <Invest />

      <Footer />
    </>
  );
};

export default Investor;
