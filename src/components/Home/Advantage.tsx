import { motion } from "motion/react";
import Container from "../Container/Container";

interface Advantage {
  id: number;
  title: string;
  desc: string;
}

const Advantage = () => {
  const advantages: Advantage[] = [
    {
      id: 1,
      title: "Family Heritage:",
      desc: "With a strong entrepreneurial mindset and a commitment to long-term alignment, we focus on creating lasting value. Our family-driven approach ensures flexibility and an unwavering dedication to maximizing opportunities for our partners.",
    },
    {
      id: 2,
      title: "Expertise:",
      desc: " Our experienced investment team brings specialized knowledge across multifamily, commercial, and residential real estate. Supported by robust market research and a strategic investment infrastructure, we consistently identify high-potential opportunities.",
    },
    {
      id: 3,
      title: "Global Network :",
      desc: "Leveraging an extensive network of entrepreneurs, industry executives, and capital market leaders, we access unique opportunities and strengthen our partners’ investment positions.",
    },
    {
      id: 4,
      title: "Partnership:",
      desc: "At Shoresh Group, reputation and integrity are paramount. We focus on building lasting relationships with founders, family-owned businesses, management teams, and co-investors, ensuring long-term success for all involved.",
    },
  ];
  return (
    <Container>
      <div>
        <h1 className="font-semibold lg:text-3xl text-2xl lg:mt-16 my-6 lg:mb-10">
          Shoresh Group Partners Advantage
        </h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
          {advantages.map((a, index) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: index * 0.01, duration: 0.5 },
              }}
              className="border rounded-xl border-btn shadow p-5"
            >
              <p className="font-medium text-xl">0{a.id}</p>
              <p className="font-medium text-xl">{a.title}</p>
              <p className="text-gray-700 mt-5 text-sm">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Advantage;
