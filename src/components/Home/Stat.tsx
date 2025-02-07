import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { asset, managed, net, transaction } from "../../assets";

type AnimatedStatProps = {
  target: number;
};

const AnimatedStat = ({ target }: AnimatedStatProps) => {
  const count = useMotionValue(0);

  const springValue = useSpring(count, { stiffness: 100, damping: 10 });
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayCount(Math.round(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <motion.span
      onViewportEnter={() => count.set(target)}
      viewport={{ once: true }}
      className="text-3xl font-semibold mb-1"
    >
      {displayCount.toLocaleString()}
    </motion.span>
  );
};

const Stat = () => {
  const stats = [
    { icon: managed, title: "Total managed assets", target: 242 },
    { icon: transaction, title: "Total Transactions", target: 867198 },
    { icon: asset, title: "Total number of assets", target: 128 },
    { icon: net, title: "Yearly net growth", target: 20985 },
  ];

  return (
    <div className="flex flex-col items-center justify-center my-28">
      <div className="grid grid-cols-4 gap-x-16">
        {stats.map((stat, index) => (
          <div className="text-center" key={index}>
            <div className="flex justify-center mb-3">
              <img src={stat.icon} alt={stat.title} className="w-14" />
            </div>
            <AnimatedStat target={stat.target} />
            <p className="font-medium uppercase text-gray-700">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stat;
