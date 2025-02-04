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
            <h1 className="text-white lg:text-7xl text-4xl w-80 font-bold">
              {/* Transforming Properties, Enriching Lives. */}
              Revitalizing
              <span className="text-btn"> Assets</span>, Empowering
              <span className="text-btn"> Communities.</span>
            </h1>
            <p className="text-gray-200 mt-5 poppins-semibold lg:text-md text-sm">
              Invest passively like an LP, but earn like a GP with our Co-GP
              real estate fund and deals.
            </p>

            <div className="flex text-white mt-10 gap-x-6">
              <Link to="/" className="bi-facebook"></Link>
              <Link to="/" className="bi-instagram"></Link>
              <Link to="/" className="bi-linkedin"></Link>
              <Link to="/" className="bi-twitter-x"></Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
