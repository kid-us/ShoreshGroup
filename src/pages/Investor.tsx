import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import HowItWorks from "../components/Investor/HowItWorks";
import Invest from "../components/Investor/Invest";
import Navbar from "../components/Navbar/Navbar";

const Investor = () => {
  return (
    <>
      <Navbar bg />

      <div className="pt-32">
        <Container>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            doloribus saepe porro perspiciatis neque, corporis possimus in
            obcaecati consectetur sapiente fugiat recusandae ipsam nulla qui
            unde! Excepturi quae doloribus inventore.
          </p>
          <HowItWorks />

          <Invest />
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default Investor;
