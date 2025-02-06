import { motion } from "motion/react";
import { buy, sale, invest } from "../../assets";
import Container from "../Container/Container";

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
      title: "We buy the properties",
      icon: buy,
      info: "Our team ensures a smooth transaction with no hidden fees or lengthy processes. Whether you're selling for financial reasons or a fresh start, we provide a seamless experience. as simple at that.",
    },
    {
      id: 2,
      title: "You Invest and Earn",
      icon: invest,
      info: "We offer investment opportunities with passive income through regular distributions. Our strategic approach ensures steady returns with minimal risk. Partner with us for a secure and profitable experience.",
    },
    {
      id: 3,
      title: "We sell and share Profit",
      icon: sale,
      info: "We sell properties and share the profit from the sale with our investors. Our transparent process ensures fair returns and a seamless experience. Partner with us for a rewarding investment opportunity.",
    },
  ];

  return (
    <Container>
      <div className="lg:mt-32">
        <h1 className="lg:text-3xl text-2xl poppins-bold text-center lg:mb-5 mb-3">
          How it works
        </h1>
        <p className="text-center text-gray-500 lg:mb-20 mb-10">
          Seamless Property Transactions with Transparent Profit Sharing
        </p>

        <div className="grid lg:grid-cols-3 lg:gap-x-10 gap-y-5 lg:mx-20">
          {steps.map((s) => (
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 20 }}
              whileHover={{
                scale: 1.03,
                transition: { delay: 0.1, duration: 1 },
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
              key={s.id}
              className="shadow p-8 rounded-2xl border border-amber-400"
            >
              <p>
                <span className="text-xs bg-gray-500 rounded text-white px-5 py-1">
                  Step {s.id}
                </span>
              </p>
              <div className="flex justify-end">
                <img src={s.icon} alt={s.title} className="w-16" />
              </div>
              <p className="font-bold text-xl w-32">{s.title}</p>

              <p className="text-sm pt-8 border-t-2 border-gray-400 mt-4">
                {s.info}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;
