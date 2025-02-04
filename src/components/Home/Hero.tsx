import { motion } from "motion/react";
import { heroVid } from "../../assets";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero lg:h-screen h-[90vh] relative">
      <video src={heroVid} autoPlay muted loop></video>
      <Container>
        <div className="flex items-center h-screen">
          <div>
            <motion.h1
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-white lg:text-7xl text-4xl w-80 font-bold"
            >
              Revitalizing
              <span className="text-btn"> Assets</span>, Empowering
              <span className="text-btn"> Communities.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-gray-200 mt-5 poppins-semibold lg:text-md text-sm"
            >
              Invest passively like an LP, but earn like a GP with our Co-GP
              real estate fund and deals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex text-white mt-10 gap-x-6"
            >
              <Link to="/" className="bi-facebook"></Link>
              <Link to="/" className="bi-instagram"></Link>
              <Link to="/" className="bi-linkedin"></Link>
              <Link to="/" className="bi-twitter-x"></Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
