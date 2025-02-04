import Container from "../Container/Container";

const WhoWeAre = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 my-10">
        <div>
          <h1 className="text-2xl poppins-bold">Who We Are</h1>
          <p className="mt-5">
            <span className="bi-quote"></span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam est
            provident voluptatum aut sequi harum assumenda. In fugit et neque
            quam itaque? Nobis corrupti magni eius doloribus ducimus facilis
            nulla veniam impedit hic. Illum dolore itaque architecto quaerat
            aperiam aliquid repellat dicta sint. Magnam delectus nisi similique
            eos ea sit voluptatibus, asperiores saepe suscipit sapiente
            excepturi molestiae, inventore quibusdam natus laborum minima ipsum
            quos voluptatem expedita distinctio consectetur? Quis quaerat
            nesciunt, optio laboriosam illo at commodi deleniti quo est
            incidunt. Aperiam sapiente qui, reiciendis minus praesentium
            consequatur optio delectus exercitationem? Iste doloribus minima
            vero alias ullam rem ipsum, ab maxime.
            <span className="bi-quote"></span>
          </p>
        </div>

        <div className="">{/* <img src={} alt="" /> */}</div>
      </div>
    </Container>
  );
};

export default WhoWeAre;
