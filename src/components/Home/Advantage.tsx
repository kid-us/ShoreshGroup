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
      title: "Family Heritage",
      desc: "Entrepreneurial mindset, investment flexibility, and focus on long-term alignment to maximize value creation",
    },
    {
      id: 2,
      title: "Expertise",
      desc: "Experienced investment team with sub-sector expertise supported by an institutional investment management infrastructure",
    },
    {
      id: 3,
      title: "Access",
      desc: "Global network of entrepreneurs executive relationships and senior capital markets participants.",
    },
    {
      id: 4,
      title: "Partnership",
      desc: "Prioritize reputation and integrity and build lasting relationships with founders, family owners, management teams, and co-investors ",
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
              <p className="text-gray-600 mt-5 text-sm">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Advantage;
