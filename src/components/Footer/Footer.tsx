import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { footer } from "../../services/footer";

const Footer = () => {
  return (
    <div className="bg-black/90">
      <div className="container mx-auto px-5 lg:px-5">
        <div className="lg:flex justify-between pt-14 pb-5">
          <div className="flex items-center">
            <div>
              <div className="flex gap-x-3">
                <img src={logo} alt="Logo" className="w-16 h-16" />
                <p className="flex items-center text-2xl font-extrabold logo-font uppercase text-white underline underline-offset-4  decoration-amber-400 decoration-1">
                  SHORESH GROUP
                </p>
              </div>
              <p className="lg:text-xs text-sm mt-4 text-zinc-300 lg:w-96">
                A family-founded real estate venture focused on generational
                wealth. Investing in distressed homes, multifamily properties,
                and large-scale developments.
              </p>
              <p className="lg:block hidden text-xs text-btn mt-6">
                &copy;2025 SHORESH GROUP. All right reserved.
              </p>
            </div>
          </div>

          {/* Footer links */}
          <div className="lg:block grid grid-cols-2 lg:gap-x-10 lg:space-x-16 gap-x-2 gap-y-3 mt-10">
            {footer.map((nav) => (
              <Link
                key={nav.id}
                to={nav.path}
                className="lg:mb-0 mb-3 text-gray-300 lg:text-sm hover:text-white transition-colors uppercase group"
              >
                {nav.name}
                <span className="bi-arrow-up-right ms-1 text-xs group-hover:rotate-45"></span>
              </Link>
            ))}
            {/* Terms and Service Large device */}
            <div className="lg:flex hidden space-x-20 mt-9 ">
              <Link
                to={"/"}
                className="text-gray-300 lg:text-sm hover:text-white transition-colors uppercase group"
              >
                Privacy Policy
                <span className="bi-arrow-up-right ms-2 text-xs group-hover:rotate-45"></span>
              </Link>
              <Link
                to={"/"}
                className="text-gray-300 lg:text-sm hover:text-white transition-colors uppercase group"
              >
                Terms of Service
                <span className="bi-arrow-up-right ms-2 text-xs group-hover:rotate-45"></span>
              </Link>
            </div>
            {/* Large Device Social Media */}
            <div className="lg:flex hidden lg:mt-10 mt-14 gap-x-14">
              <Link
                to="/"
                className="text-3xl h-10 text-gray-500 hover:text-btn transition-colors duration-150 bi-facebook"
              ></Link>
              <Link
                to="/"
                className="text-3xl h-10 text-gray-500 hover:text-btn transition-colors duration-150 bi-instagram"
              ></Link>
              <Link
                to="/"
                className="text-3xl h-10 text-gray-500 hover:text-btn transition-colors duration-150 bi-linkedin"
              ></Link>
              <Link
                to="/"
                className="text-3xl h-10 text-gray-500 hover:text-btn transition-colors duration-150 bi-twitter-x"
              ></Link>
            </div>
          </div>

          {/* Privacy Policy and service Small device */}
          <div className="lg:hidden flex gap-x-7 mt-3">
            <Link
              to={"/"}
              className="text-gray-300 lg:text-sm hover:text-white transition-colors uppercase group"
            >
              Privacy Policy
              <span className="bi-arrow-up-right ms-2 text-xs group-hover:rotate-45"></span>
            </Link>
            <Link
              to={"/"}
              className="text-gray-300 lg:text-sm hover:text-white transition-colors uppercase group"
            >
              Terms of Service
              <span className="bi-arrow-up-right ms-2 text-xs group-hover:rotate-45"></span>
            </Link>
          </div>

          {/* Small device Social Media */}
          <div className="lg:hidden flex mt-10 gap-x-12">
            <Link
              to="/"
              className="text-3xl h-10 text-gray-500 hover:text-btn transition-colors duration-150 bi-facebook"
            ></Link>
            <Link
              to="/"
              className="text-3xl h-10 text-gray-500 hover:text-btn transition-colors duration-150 bi-instagram"
            ></Link>
            <Link
              to="/"
              className="text-3xl h-10 text-gray-500 hover:text-btn transition-colors duration-150 bi-linkedin"
            ></Link>
            <Link
              to="/"
              className="text-3xl h-10 text-gray-500 hover:text-btn transition-colors duration-150 bi-twitter-x"
            ></Link>
          </div>

          <p className="lg:hidden block text-xs text-btn mt-8">
            &copy;2025 SHORESH GROUP. All right reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
