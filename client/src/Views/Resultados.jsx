import { Link, useParams } from "react-router-dom";
import { resultadosVotacion } from "../api/peliculas.services";
import { useState, useEffect } from "react";

const Resultados = () => {
  const { id } = useParams();
  const [ganador, setGanador] = useState();

  const handleGetResult = async () => {
    const response = await resultadosVotacion(id);
    setGanador(response.data);
  };

  useEffect(() => {
    handleGetResult();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="mt-[54px] w-[300px] h-[80px] font-grotesk font-light text-lg text-center text-secondary">
        La película ganadora es
      </h1>
      <article className="mt-[22px] flex flex-col justify-center items-center">
        <div className="w-[342px] h-[396px] bg-secondary border-4 border-tertiary rounded-xl">
          <div className="flex flex-col items-center">
            <h1 className=" mt-[18px] font-grotesk font-bold text-xxl text-primary text-center">
              {ganador?.titulo}
            </h1>
            <img
              src="https://www.movieposters.com/cdn/shop/files/THING_5d1279a2-2e38-4ca0-8cb5-91f9b30b6ebb_480x.progressive.jpg?v=1693491676"
              alt="poster image"
              className="mt-[22px] w-[167px] h-[253px]"
            />
          </div>
        </div>
        <div className="mt-[32px] w-[342px] h-[62px] flex flex-col justify-center bg-secondary border-4 border-tertiary rounded-xl">
          <p className="font-grotesk font-medium text-body text-primary text-center">
            puedes verla en: Amazon
          </p>
        </div>
      </article>
      <article className="mt-[36px] w-[342px] flex justify-around">
        <Link to={"/"} className="flex flex-col justify-center">
          <p className="w-[111px] font-grotesk font-normal text-label text-secondary">
            regresar al inicio
          </p>
        </Link>
        <Link to={`/sala/${id}/evaluacion`}>
          <p className=" w-[121px] font-grotesk font-normal text-label text-secondary text-center">
            evaluar la recomendacion
          </p>
        </Link>
      </article>
    </main>
  );
};

export default Resultados;
