import { notFound } from "../assets";
import LinkButton from "../components/Button/LinkButton";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const PageNotFound = () => {
  return (
    <>
      <Navbar bg />

      <div className="lg:h-[90dvh] h-[100dvh] flex justify-center items-center">
        <div className="lg:mt-0 mt-32">
          <img
            src={notFound}
            alt="Not Found"
            className="w-96 h-60 object-cover"
          />
          <p className="text-center font-semibold text-2xl">Page Not Found</p>
          <p className="text-center mt-5 text-gray-600">
            The page you were looking for was either removed or doesn't exist.
          </p>
          <div className="text-center mt-10">
            <LinkButton name="Back Home" path="/" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PageNotFound;
