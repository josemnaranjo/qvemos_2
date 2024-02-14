import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <article className="flex flex-col items-center">
          <div className="flex gap-x-5 mt-[28px] justify-center">
            <Link to={"crear-sala"}>
              <button className="font-grotesk font-medium text-lg bg-primary text-secondary w-[167px] h-[90px] rounded-lg shadow-2xl">
                CREAR SALA
              </button>
            </Link>
            <Link to={"unirse-a-sala"}>
              <button className="font-grotesk font-medium text-lg bg-secondary text-primary w-[167px] h-[90px] rounded-lg shadow-2xl">
                UNIRSE
              </button>
            </Link>
          </div>

          <Link to={"reglamento"}>
            <button className="font-grotesk font-light text-lg bg-tertiary text-primary mt-[20px] w-[356px] h-[46px] rounded-lg">
              Reglamento
            </button>
          </Link>
        </article>
      </main>
    </>
  );
};

export default Home;
