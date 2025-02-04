interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto lg:px-0 px-5">{children}</div>;
};

export default Container;
