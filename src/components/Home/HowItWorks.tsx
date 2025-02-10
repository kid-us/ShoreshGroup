import { buy, sale, invest } from "../../assets";
import Container from "../Container/Container";
import { howItWork } from "../../assets";

interface HowItWork {
  id: number;
  title: string;
  info: string;
  icon: string;
}

const HowItWorks = () => {
  const steps: HowItWork[] = [
    {
      id: 1,
      title: "We buy the properties",
      icon: buy,
      info: "Our team ensures a smooth transaction with no hidden fees or lengthy processes. Whether you're selling for financial reasons or a fresh start, we provide a seamless experience. as simple at that.",
    },
    {
      id: 2,
      title: "You Invest and Earn",
      icon: invest,
      info: "We offer investment opportunities with passive income through regular distributions. Our strategic approach ensures steady returns with minimal risk. Partner with us for a secure and profitable experience.",
    },
    {
      id: 3,
      title: "We sell and share Profit",
      icon: sale,
      info: "We sell properties and share the profit from the sale with our investors. Our transparent process ensures fair returns and a seamless experience. Partner with us for a rewarding investment opportunity.",
    },
  ];

  return (
    <Container>
      <div className="lg:hidden block">
        <h1 className="lg:text-3xl text-2xl poppins-bold lg:mb-5 mb-3">
          How it works
        </h1>
        <p className="text-gray-500 lg:mb-10 mb-10">
          Seamless Property Transactions with Transparent Profit Sharing
        </p>
      </div>
      <div className="grid lg:grid-cols-7 gap-x-12 h-full">
        <div className="lg:col-span-3 flex items-center h-full">
          <img
            src={howItWork}
            alt="How it work"
            className="lg:h-[80dvh] h-80 w-full object-cover object-right rounded-tr-[180px] rounded-xl"
          />
        </div>

        <div className="lg:col-span-4 lg:mt-0 mt-10">
          <div className="lg:block hidden">
            <h1 className="lg:text-3xl text-2xl poppins-bold lg:mb-5 mb-3">
              How it works
            </h1>
            <p className="text-gray-500 lg:mb-10 mb-10">
              Seamless Property Transactions with Transparent Profit Sharing
            </p>
          </div>

          {steps.map((s) => (
            <div key={s.id} className="grid grid-cols-1 mb-6">
              <div className="col-span-7">
                <img src={s.icon} alt={s.title} className="w-11 mb-5" />
                <p className="font-bold text-xl text-secondary">{s.title}</p>

                <p className="text-sm mt-4">{s.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;
