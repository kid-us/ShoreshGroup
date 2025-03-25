import { motion } from "motion/react";
import LinkButton from "../Button/LinkButton";
import Container from "../Container/Container";

const Invest = () => {
  return (
    <Container>
      <div className="bg rounded-2xl lg:p-10 px-4 py-8 ">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="font-semibold lg:text-3xl text-2xl mb-8 text-white"
        >
          Invest with Shoresh Group
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-2 tex text-sm text-zinc-200"
        >
          Build your portfolio with a trusted partner in real estate.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-2 tex text-sm text-zinc-200"
        >
          We’re committed to providing opportunities that align with your goals,
          offering transparency, expertise, and a proven track record. Whether
          you're exploring options or ready to make your next move, we’re here
          to guide you every step of the way.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-2 tex text-sm text-zinc-200"
        >
          Shoresh-group offers a unique opportunity to invest as a Co-GP
          alongside our team, unlocking the benefits of multifamily real estate
          ownership while keeping your investment passive.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-5 uppercase text-white font-semibold"
        >
          Interested? Get in touch to invest in our fund.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-sm mt-2 text-zinc-200"
        >
          Start with some basic information and a no-obligations discovery call.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-10"
        >
          <LinkButton
            name="Contact Us"
            path="/contact"
            style="bg-[white] hover:text-gray-700"
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default Invest;
