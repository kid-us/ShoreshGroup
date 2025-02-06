import { motion } from "motion/react";
import { we1 } from "../../assets";
// import Container from "../Container/Container";
import "./slider.css";

interface Testimony {
  id: number;
  comment: string;
  img: string;
  name: string;
  title: string;
}

const Testimony = () => {
  const testimonies: Testimony[] = [
    {
      id: 1,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus obcaecati quas alias ipsa placeat consequatur ratione non voluptatibus! Quisquam! Lorem ipsum dolor sit amet.",
      img: we1,
      name: "Marta",
      title: "CEO",
    },
    {
      id: 2,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus obcaecati quas alias ipsa placeat consequatur ratione non voluptatibus! Quisquam! Lorem ipsum dolor sit amet.",
      img: we1,
      name: "Marta",
      title: "CEO",
    },
    {
      id: 3,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus obcaecati quas alias ipsa placeat consequatur ratione non voluptatibus! Quisquam! Lorem ipsum dolor sit amet.",
      img: we1,
      name: "Marta",
      title: "CEO",
    },
    {
      id: 4,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus obcaecati quas alias ipsa placeat consequatur ratione non voluptatibus! Quisquam! Lorem ipsum dolor sit amet.",
      img: we1,
      name: "Marta",
      title: "CEO",
    },
    {
      id: 5,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus obcaecati quas alias ipsa placeat consequatur ratione non voluptatibus! Quisquam! Lorem ipsum dolor sit amet.",
      img: we1,
      name: "Marta",
      title: "CEO",
    },
    {
      id: 6,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus obcaecati quas alias ipsa placeat consequatur ratione non voluptatibus! Quisquam! Lorem ipsum dolor sit amet.",
      img: we1,
      name: "Marta",
      title: "CEO",
    },
  ];

  return (
    <div className="lg:my-40 mt-20 mb-20">
      <h1 className="lg:text-3xl text-2xl poppins-bold mb-4 text-center">
        Hear What Our Clients Are Saying
      </h1>
      <p className="text-center mb-20 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>

      <div
        className="slider"
        style={
          {
            "--quantity": testimonies.length,
          } as React.CSSProperties
        }
      >
        <div className="slide-track-right">
          {[...testimonies, ...testimonies].map((t, index) => (
            <motion.div
              key={index}
              layout
              className="slide border border-amber-400 hover:border-2 rounded-xl p-5 h-60"
              style={{ "--position": index } as React.CSSProperties}
              whileHover={{
                scale: 0.97,
                rotate: 0.5,
                transition: { duration: 0.5 },
              }}
            >
              <div className="flex gap-x-3">
                <img
                  src={t.img}
                  alt="person"
                  className="h-16 rounded-full object-cover object-center"
                  style={{ width: 66 }}
                />
                <div className="flex items-center leading-0 mt-4">
                  <div>
                    <p className="font-semibold mb-2 block">{t.name}</p>
                    <p className="text-sm mb-2 text-gray-600 pt-1">{t.title}</p>
                  </div>
                </div>
              </div>
              <p className="text-sm mt-5 italic">{t.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="slider"
        style={
          {
            "--quantity": testimonies.length,
          } as React.CSSProperties
        }
      >
        <div className="slide-track-left">
          {[...testimonies, ...testimonies].map((t, index) => (
            <motion.div
              key={index}
              layout
              className="slide border border-amber-400 hover:border-2 rounded-xl p-5 h-60"
              style={{ "--position": index } as React.CSSProperties}
              whileHover={{
                scale: 0.97,
                rotate: 0.5,
                transition: { duration: 0.5 },
              }}
            >
              <div className="flex gap-x-3">
                <img
                  src={t.img}
                  alt="person"
                  className="h-16 rounded-full object-cover object-center"
                  style={{ width: 66 }}
                />
                <div className="flex items-center leading-0 mt-4">
                  <div>
                    <p className="font-semibold mb-2 block">{t.name}</p>
                    <p className="text-sm mb-2 text-gray-600 pt-1">{t.title}</p>
                  </div>
                </div>
              </div>
              <p className="text-sm mt-5 italic">{t.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimony;
