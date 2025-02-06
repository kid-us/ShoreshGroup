import { motion } from "motion/react";
import { hero2, hero5, hero6, hero7, hero4 } from "../../assets";
import Container from "../Container/Container";

const Assets = () => {
  const top = [
    { id: 1, img: hero2, desc: "Lorem ipsum", span: 5 },
    { id: 2, img: hero6, desc: "Lorem ipsum", span: 4 },
    { id: 3, img: hero4, desc: "Lorem ipsum", span: 3 },
  ];

  return (
    <Container>
      <motion.div
        initial={false}
        animate={{ x: 10 }}
        className="grid grid-cols-12 gap-x-4  mb-4"
      >
        {top.map((t) => (
          <div className={`col-span-${t.span} rounded-xl overflow-hidden`}>
            <img
              src={hero2}
              alt="Asset"
              className="object-cover h-64 w-full rounded-xl"
            />
          </div>
        ))}
        {/* <div className="col-span-5 rounded-xl overflow-hidden">
          <img
            src={hero2}
            alt="Asset"
            className="object-cover h-64 w-full rounded-xl"
          />
        </div>

        <div className="col-span-4 rounded-xl overflow-hidden">
          <img
            src={hero4}
            alt="Asset"
            className="object-cover h-64 w-full rounded-xl"
          />
        </div>

        <div className="col-span-3 rounded-xl overflow-hidden">
          <img
            src={hero4}
            alt="Asset"
            className="object-cover h-64 w-full rounded-xl"
          />
        </div> */}
      </motion.div>

      {/*  */}
      <motion.div
        initial={false}
        animate={{ x: 10 }}
        className="grid grid-cols-12 gap-x-4 w-full mb-4"
      >
        <div className="col-span-3 rounded-xl overflow-hidden">
          <img
            src={hero5}
            alt="Asset"
            className="object-cover h-64 w-full rounded-xl"
          />
        </div>

        <div className="col-span-5 rounded-xl overflow-hidden">
          <img
            src={hero6}
            alt="Asset"
            className="object-cover h-64 w-full rounded-xl"
          />
        </div>

        <div className="col-span-4 rounded-xl overflow-hidden">
          <img
            src={hero7}
            alt="Asset"
            className="object-cover h-64 w-full rounded-xl"
          />
        </div>
      </motion.div>

      {/*  */}
      <motion.div
        initial={false}
        animate={{ x: 10 }}
        className="grid grid-cols-12 gap-x-4 w-full mb-4"
      >
        <div className="col-span-5 rounded-xl overflow-hidden">
          <img
            src={hero2}
            alt="Asset"
            className="object-cover h-64 w-full rounded-xl"
          />
        </div>

        <div className="col-span-4 rounded-xl overflow-hidden">
          <img
            src={hero4}
            alt="Asset"
            className="object-cover h-64 w-full rounded-xl"
          />
        </div>

        <div className="col-span-3 rounded-xl overflow-hidden">
          <img
            src={hero4}
            alt="Asset"
            className="object-cover h-64 w-full rounded-xl"
          />
        </div>
      </motion.div>
    </Container>
  );
};

export default Assets;
