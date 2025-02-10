import { assets } from "../../services/assets";
import LinkButton from "../Button/LinkButton";
import Container from "../Container/Container";

const Portfolio = () => {
  return (
    <Container>
      <h1 className="lg:text-3xl text-2xl poppins-bold ">Portfolio</h1>
      <p className="mt-3 text-gray-600 text-sm">
        Discover our premium real estate assets, carefully selected for
        long-term growth, stability, and exceptional returns.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 lg:gap-y-7 gap-y-5 mb-6 mt-8">
        {assets.slice(0, 3).map((asset) => (
          <div
            key={asset.id}
            className="rounded-2xl p-2 border border-btn overflow-hidden hover:scale-[0.99] transition-all duration-300 shadow cursor-pointer"
          >
            <img
              src={asset.img}
              alt={"asset" + asset.id}
              className="lg:h-72 md:h-72 h-60 w-full rounded-xl object-cover object-bottom"
            />
            <div className="px-4 py-5">
              <p className="font-semibold text-xl mb-2">{asset.name}</p>
              <div className="flex justify-between">
                <p className="text-gray-500 text-sm font-semibold">
                  <span className="bi-geo-alt-fill text-secondary me-2"></span>
                  {asset.location}
                </p>
                <p className="text-gray-500 text-sm font-semibold">
                  <span className="bi-calendar-check-fill me-2 text-secondary"></span>
                  Purchased {asset.purchased}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-10">
        <LinkButton name="Discover Properties" path="/assets" />
      </div>
    </Container>
  );
};

export default Portfolio;
