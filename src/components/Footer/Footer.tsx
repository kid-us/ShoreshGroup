import { Link } from "react-router-dom";
import { logo } from "../../assets";
import Container from "../Container/Container";
import { footer } from "../../services/footer";

const Footer = () => {
  return (
    <Container>
      <div className="border-t border-b border-gray-200">
        <div className="lg:flex justify-between lg:mt-10 lg:mb-5 mt-10 mb-6">
          <div className="lg:flex items-center">
            <div className="lg:block grid grid-cols-2 lg:space-x-20 gap-y-3">
              {footer.map((nav) => (
                <Link
                  to={nav.path}
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  {nav.name}
                </Link>
              ))}
              <div className="lg:flex hidden space-x-20 mt-5 ">
                <Link
                  to={"/"}
                  className="text-gray-700 text-sm hover:text-black transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to={"/"}
                  className="text-gray-700 text-sm hover:text-black transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
              <p className="lg:block hidden text-xs text-gray-500 mt-6">
                &copy;2025 SHORESH GROUP. All right reserved.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-3 lg:mt-0 my-8">
            <img src={logo} alt="Logo" className="w-16 h-16" />
            <p className="flex items-center text-2xl font-extrabold logo-font uppercase">
              SHORESH GROUP
            </p>
          </div>

          <div className="lg:hidden flex gap-x-10">
            <Link
              to={"/"}
              className="text-gray-700 text-sm hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/"}
              className="text-gray-700 text-sm hover:text-black transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          <p className="lg:hidden block text-xs text-amber-600 mt-5">
            &copy;2025 SHORESH GROUP. All right reserved.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
