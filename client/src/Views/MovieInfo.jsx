import { useLocation } from "react-router-dom";

const MovieInfo = () => {
  const location = useLocation();
  const { movie } = location.state;
  console.log(movie);
  return (
    <main className="flex flex-col items-center">
      <article className="mt-[40px] w-[340px] h-[680px] bg-secondary rounded-xl text-primary flex flex-col items-center">
        <h1 className="mt-[40px] font-grotesk font-bold text-xl text-center">
          {movie.title}
        </h1>
        <div className="mt-[20px] flex flex-col gap-y-2 px-10">
          <h2 className="font-grotesk font-bold text-body">
            Director :{" "}
            <span className="font-grotesk font-light text-body">
              Pedro Almodovar
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
