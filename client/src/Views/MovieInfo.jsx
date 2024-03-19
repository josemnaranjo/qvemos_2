import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMovieDirector } from "../api/tmdb.services";

const MovieInfo = () => {
  const location = useLocation();
  const { movie } = location.state;
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
    <main className="flex flex-col items-center">
      <article className="mt-[40px] w-[340px]  bg-secondary rounded-xl text-primary flex flex-col items-center">
        <h1 className="mt-[40px] font-grotesk font-bold text-xl text-center">
          {movie.title}
        </h1>
        <div className="mt-[20px] flex flex-col gap-y-2 px-10">
          <h2 className="font-grotesk font-bold text-body">
            Director :{" "}
            <span className="font-grotesk font-light text-body">
              {directorName}
            </span>
          </h2>
          <h2 className="font-grotesk font-bold text-body">Sinopsis :</h2>
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
