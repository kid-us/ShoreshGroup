import {
  capital,
  deployment,
  properties,
  generate,
  reward,
} from "../../assets";
import Container from "../Container/Container";
import { howItWork } from "../../assets";
import { motion } from "motion/react";

interface HowItWork {
  id: number;
  title: string;
  info: string;
  icon: string;
}

const HowItWorks = () => {
  const steps: HowItWork[] = [
    {
      id: 1,
      title: "Commit Capital",
      icon: capital,
      info: "Investors join the fund by committing their capital to Shoresh Group.",
    },
    {
      id: 2,
      title: "Strategic Deployment",
      icon: deployment,
      info: "The fund allocates capital to our real estate company, financing carefully selected value-add projects.",
    },
    {
      id: 3,
      title: "Transform Properties",
      icon: properties,
      info: "Shoresh-Group acquires, renovates, and enhances properties to unlock their full potential.",
    },
    {
      id: 4,
      title: "Generate Returns",
      icon: generate,
      info: "Once the properties are sold, the fund receives repayment with interest and fees, creating profits.",
    },
    {
      id: 5,
      title: "Investor Rewards",
      icon: reward,
      info: "Investors receive their distributions or can reinvest into future opportunities for continued growth..",
    },
  ];

  return (
    <Container>
      <div className="lg:hidden block">
        <h1 className="lg:text-3xl text-2xl lg:mb-5 mb-3">How it works</h1>
      </div>
      <div className="grid lg:grid-cols-7 md:grid-cols-1 gap-x-12 h-full mt-40">
        <div className="lg:col-span-3 flex items-center h-full lg:mt-14">
          <img
            src={howItWork}
            alt="How it work"
            className="lg:h-[80dvh] h-80 w-full object-cover object-right rounded-tr-[180px] rounded-xl"
          />
        </div>

        <div className="lg:col-span-4 lg:mt-0">
          <div className="lg:block hidden">
            <h1 className="lg:text-3xl text-2xl lg:mb-5 mb-3">How it works</h1>
          </div>
          <div className="mt-16">
            {steps.map((s) => (
              <div key={s.id} className="grid grid-cols-1 mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="col-span-7"
                >
                  <img src={s.icon} alt={s.title} className="w-8 mb-4" />
                  <p className="font-bold text-xl text-secondary">{s.title}</p>

                  <p className="text-sm mt-2">{s.info}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;
