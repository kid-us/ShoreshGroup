import { Link } from "react-router-dom";
import { logo } from "../../assets";
import Container from "../Container/Container";
import { footer } from "../../services/footer";

const Footer = () => {
  return (
    <Container>
      <div className="border-t border-b border-gray-200">
        <div className="lg:flex justify-between lg:my-10 mt-10 mb-6">
          <div className="lg:flex items-center">
            <div className="grid grid-cols-2 lg:space-x-20 gap-y-3">
              {footer.map((nav) => (
                <Link
                  to={nav.path}
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  {nav.name}
                </Link>
              ))}
              <p className="lg:block hidden text-xs text-gray-500 mt-3">
                &copy;2025 SHORESH GROUP. All right reserved.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-3 lg:mt-0 mt-10">
            <img src={logo} alt="Logo" className="w-16 h-16" />
            <p className="flex items-center text-2xl font-extrabold">
              SHORESH GROUP
            </p>
          </div>
          <p className="lg:hidden block text-xs text-gray-500 mt-9">
            &copy;2025 SHORESH GROUP. All right reserved.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
