import { motion } from "motion/react";
import Container from "../Container/Container";
import { useState } from "react";

interface Advantage {
  id: number;
  title: string;
  desc: string;
}

const Advantage = () => {
  const [hoveredItem, setHoveredItem] = useState<number>(0);

  const advantages: Advantage[] = [
    {
      id: 1,
      title: "Family Heritage",
      desc: "With a strong entrepreneurial mindset and a commitment to long-term alignment, we focus on creating lasting value. Our family-driven approach ensures flexibility and an unwavering dedication to maximizing opportunities for our partners.",
    },
    {
      id: 2,
      title: "Expertise",
      desc: " Our experienced investment team brings specialized knowledge across multifamily, commercial, and residential real estate. Supported by robust market research and a strategic investment infrastructure, we consistently identify high-potential opportunities.",
    },
    {
      id: 3,
      title: "Global Network",
      desc: "Leveraging an extensive network of entrepreneurs, industry executives, and capital market leaders, we access unique opportunities and strengthen our partners’ investment positions.",
    },
    {
      id: 4,
      title: "Partnership",
      desc: "At Shoresh Group, reputation and integrity are paramount. We focus on building lasting relationships with founders, family-owned businesses, management teams, and co-investors, ensuring long-term success for all involved.",
    },
  ];
  return (
    <Container>
      <div className="lg:mt-20 mb-40 my-20">
        <h1 className="text-2xl  mb-5 text-center">
          Shoresh Group Partners Advantage
        </h1>

        <div className="lg:flex lg:justify-center grid md:grid-cols-2 lg:gap-5">
          {advantages.map((a, index) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: index * 0.01, duration: 0.5 },
              }}
              className="relative p-5 cursor-pointer hover:text-gray-500"
              onMouseEnter={() => setHoveredItem(a.id)}
              onMouseLeave={() => setHoveredItem(0)}
            >
              <div
                className={`transition-all duration-300 ease-in-out ${
                  hoveredItem === a.id ? "-translate-y-10" : "translate-y-0"
                }`}
              >
                <p className="font-medium text-gray-400">0{a.id}</p>
                <p className="font-medium text-4xl text-center">{a.title}</p>
              </div>

              {hoveredItem === a.id && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="absolute top-12 lg:w-96 bg z-20 p-7 rounded-lg border text-white text-sm"
                >
                  {a.desc}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Advantage;
