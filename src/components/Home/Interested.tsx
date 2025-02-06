import Container from "../Container/Container";
import { Link } from "react-router-dom";

const Interested = () => {
  return (
    <Container>
      <div className="lg:flex justify-between mb-16">
        <div className="mt-10">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 className="lg:text-2xl text-xl poppins-bold mb-10">
              DO YOU LIKE OUR WORKS?
            </h1>
            <label htmlFor="email" className="block text-gray-500">
              Subscribe to our newsletter.
            </label>
            <div className="lg:flex gap-x-8 mt-3">
              <input
                type="email"
                className="focus:outline-hidden border border-gray-400 h-11 rounded-lg lg:w-80 w-full px-5"
                placeholder="Email address"
              />
              <button className="bg-btn flex items-center font-semibold uppercase text-white transition-all duration-200 shadow-[3px_3px_0px_black] hover:shadow-none h-11 lg:px-14 px-32 active:shadow-none lg:w-auto w-full lg:mt-0 mt-4 rounded">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="flex lg:mt-10 mt-14 gap-x-14">
          <Link
            to="/"
            className="text-3xl h-10 text-gray-500 hover:text-amber-500 transition-colors duration-150 bi-facebook"
          ></Link>
          <Link
            to="/"
            className="text-3xl h-10 text-gray-500 hover:text-amber-500 transition-colors duration-150 bi-instagram"
          ></Link>
          <Link
            to="/"
            className="text-3xl h-10 text-gray-500 hover:text-amber-500 transition-colors duration-150 bi-linkedin"
          ></Link>
          <Link
            to="/"
            className="text-3xl h-10 text-gray-500 hover:text-amber-500 transition-colors duration-150 bi-twitter-x"
          ></Link>
        </div>
      </div>
    </Container>
  );
};

export default Interested;
