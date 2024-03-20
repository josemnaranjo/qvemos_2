import { useEffect, useState } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { getMovieDirector } from "../api/tmdb.services";
import { GoChevronLeft } from "react-icons/go";

const MovieInfo = () => {
  const location = useLocation();
  const { movie } = location.state;
  const { id } = useParams();

  const [directorName, setDirectorName] = useState("");
  const handleGetDirector = async (movieId) => {
    const data = await getMovieDirector(movieId);
    const directorInfo = data.crew.filter(
      (crew) => crew.known_for_department === "Directing"
    );
    setDirectorName(directorInfo[0].name);
  };

  useEffect(() => {
    handleGetDirector(movie.id);
  }, []);
  return (
    <main className="flex flex-col items-center ">
      <article className="mt-[40px] w-[365px] py-10  bg-secondary rounded-xl text-primary flex flex-col items-center relative">
        <Link to={`/buscador/${id}`}>
          <GoChevronLeft
            size={30}
            color="white"
            className="mt-[20px] absolute top-2 left-6 bg-primary rounded-2xl "
          />
        </Link>
        <h1 className="mt-[45px] font-grotesk font-bold text-lg text-center">
          {movie.title}
        </h1>
        <div className="mt-[20px] flex flex-col gap-y-2 px-6">
          <h2 className="font-grotesk font-medium text-body">
            Director :{" "}
            <span className="font-grotesk font-light text-body">
              {directorName}
            </span>
          </h2>
          <h2 className="font-grotesk font-medium text-body">Sinopsis :</h2>
          <p className="font-grotesk font-light text-body">{movie.overview}</p>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={`${movie.title} photo`}
          className="mt-[20px] rounded-xl"
        />
      </article>
    </main>
  );
};

export default MovieInfo;
