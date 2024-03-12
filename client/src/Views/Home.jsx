import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TarjetaRecomendaciones from "../Components/TarjetaRecomendaciones";
import { obtenerLasTresMejoresRecomendaciones } from "../api/peliculas.services";

const Home = () => {
  const [recomendaciones, setRecomendaciones] = useState();

  const fetchTopRecomendaciones = async () => {
    const recomendaciones = await obtenerLasTresMejoresRecomendaciones();
    console.log(recomendaciones.data);
    setRecomendaciones(recomendaciones.data);
  };

  useEffect(() => {
    fetchTopRecomendaciones();
  }, []);

  return (
    <>
      <main>
        <article className="flex flex-col items-center">
          <div className="flex gap-x-5 mt-[28px] justify-center">
            <Link to={"crear-sala"}>
              <button className="font-grotesk font-medium text-lg bg-primary text-secondary w-[167px] h-[90px] rounded-xl shadow-2xl">
                CREAR SALA
              </button>
            </Link>
            <Link to={"unirse-a-sala"}>
              <button className="font-grotesk font-medium text-lg bg-secondary text-primary w-[167px] h-[90px] rounded-xl shadow-2xl">
                UNIRSE
              </button>
            </Link>
          </div>

          <Link to={"reglamento"}>
            <button className="font-grotesk font-light text-lg bg-tertiary text-primary mt-[20px] w-[356px] h-[46px] rounded-xl">
              Reglamento
            </button>
          </Link>
        </article>
        <article className="flex flex-col items-center">
          <h1 className="font-grotesk font-medium text-lg text-secondary mt-[18px]">
            Top recomendaciones
          </h1>
          <div className="mt-[6px] w-[342px] h-[486px] rounded-xl bg-secondary border-4 border-tertiary flex flex-col justify-around items-center ">
            {recomendaciones?.map((r) => {
              return (
                <TarjetaRecomendaciones
                  key={r.id}
                  title={r.titulo}
                  rating={r.rating}
                  imgSrc={r.imgSrc}
                  genre={r.genre}
                />
              );
            })}
            <Link>
              <span className="font-grotesk font-medium text-body text-primary">
                Ver todas las recomendaciones
              </span>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
};

export default Home;
