import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { footer } from "../../services/footer";

const Footer = () => {
  return (
    <div className="bg-black/90">
      <div className="container mx-auto px-5 lg:px-5">
        <div className="lg:flex justify-between pt-14 lg:pb-0 pb-5">
          <div className="lg:flex items-center">
            <div className="lg:block grid grid-cols-2 lg:gap-x-20 lg:space-x-20 gap-x-5 gap-y-3">
              {footer.map((nav) => (
                <Link
                  to={nav.path}
                  className="lg:mb-0 mb-3 text-gray-300 lg:text-sm hover:text-white hover:text-[15px] transition-colors"
                >
                  {nav.name}
                </Link>
              ))}
              <div className="lg:flex hidden space-x-20 mt-5 ">
                <Link
                  to={"/"}
                  className="text-gray-300 lg:text-sm hover:text-white hover:text-[15px] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to={"/"}
                  className="text-gray-300 lg:text-sm hover:text-white hover:text-[15px] transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center lg:mt-0 my-8">
            <div>
              <div className="flex gap-x-3">
                <img src={logo} alt="Logo" className="w-16 h-16" />
                <p className="flex items-center text-2xl font-extrabold logo-font uppercase text-white">
                  SHORESH GROUP
                </p>
              </div>
              <p className="lg:block hidden text-xs text-btn mt-6">
                &copy;2025 SHORESH GROUP. All right reserved.
              </p>
            </div>
          </div>

          <div className="lg:hidden flex gap-x-10">
            <Link
              to={"/"}
              className="text-gray-300 lg:text-sm hover:text-white hover:text-[15px] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/"}
              className="text-gray-300 lg:text-sm hover:text-white hover:text-[15px] transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          <p className="lg:hidden block text-xs text-btn mt-10">
            &copy;2025 SHORESH GROUP. All right reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
