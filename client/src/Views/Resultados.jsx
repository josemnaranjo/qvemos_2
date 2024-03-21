import { Link, useParams } from "react-router-dom";
import { resultadosVotacion } from "../api/peliculas.services";
import { useState, useEffect } from "react";
import { getOneMovie, getMovieProviders } from "../api/tmdb.services";

const Resultados = () => {
  const { id } = useParams();
  const [ganador, setGanador] = useState();
  const [buyMovie, setBuyMovie] = useState();
  const [rentMovie, setRentMovie] = useState();
  const [streamMovie, setStreamMovie] = useState();
  const [posterUrl, setPosterUrl] = useState();

  const handleGetResult = async () => {
    const response = await resultadosVotacion(id);
    setGanador(response.data);
    const movieInfo = await getOneMovie(response.data.titulo);
    const posterData = movieInfo.results[0].poster_path;
    setPosterUrl(posterData);
    const movieId = movieInfo.results[0].id;
    const movieProvidersData = await getMovieProviders(movieId);
    const movieProviders = movieProvidersData.results;
    const chileanProviders = movieProviders.CL;
    setBuyMovie(chileanProviders.buy[0]);
    setRentMovie(chileanProviders.rent[0]);
    setStreamMovie(chileanProviders.flatrate[0]);
  };

  useEffect(() => {
    handleGetResult();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="mt-[25px] w-[342px]  font-grotesk font-light text-lg text-center text-secondary animate-bounce">
        La película ganadora es
      </h1>
      <article className="mt-[10px] flex flex-col justify-center items-center">
        <div className="w-[342px] h-[396px] bg-secondary border-4 border-tertiary rounded-xl">
          <div className="flex flex-col items-center">
            <h1 className=" mt-[10px] font-grotesk font-bold text-xl text-primary text-center">
              {ganador?.titulo}
            </h1>
            <img
              src={`https://image.tmdb.org/t/p/w300/${posterUrl}`}
              alt="poster image"
              className="mt-[10px] w-[167px] h-[253px] rounded-xl"
            />
          </div>
        </div>
        <h1 className="mt-[15px] font-grotesk font-light text-lg text-center text-secondary">
          ¿Dónde verla? 🍿
        </h1>
        <div className="w-[342px] h-[120px] flex flex-col justify-center bg-secondary border-4 border-tertiary rounded-xl">
          <p className="font-grotesk font-normal text-body text-primary text-center">
            {streamMovie?.provider_name} (Streaming)
          </p>
          <p className="font-grotesk font-normal text-body text-primary text-center">
            {buyMovie?.provider_name} (Comprar)
          </p>
          <p className="font-grotesk font-normal text-body text-primary text-center">
            {rentMovie?.provider_name} (Arrendar)
          </p>
        </div>
      </article>
      <article className="mt-[36px] w-[342px] flex justify-around">
        <Link to={"/"} className="flex flex-col justify-center">
          <p className="w-[111px] font-grotesk font-normal text-label text-center text-secondary">
            regresar al inicio 🏠
          </p>
        </Link>
        <Link to={`/sala/${id}/evaluacion`}>
          <p className=" w-[121px] font-grotesk font-normal text-label text-secondary text-center">
            evaluar la recomendacion 📕
          </p>
        </Link>
      </article>
    </main>
  );
};

export default Resultados;
