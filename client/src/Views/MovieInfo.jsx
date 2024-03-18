import { useLocation } from "react-router-dom";

const MovieInfo = () => {
  const location = useLocation();
  const { movie } = location.state;
  return (
    <main className="flex flex-col items-center">
      <article className="mt-[40px] w-[340px] h-[540px] bg-secondary rounded-xl text-primary flex flex-col items-center justify-around">
        <h1 className="font-grotesk font-bold text-xxl">{movie.title}</h1>
        <div className="flex flex-col gap-y-2">
          <p className="font-grotesk font-bold text-body">Sinopsis</p>
          <p className="w-[250px] font-grotesk font-light text-body">
            {movie.sinopsis}
          </p>
        </div>
        <div className="w-[250px]">
          <p className="font-grotesk font-bold text-body">Casting</p>
          <p className="font-grotesk font-light text-body">Actor 1</p>
          <p className="font-grotesk font-light text-body">Actor 2</p>
        </div>
      </article>
    </main>
  );
};

export default MovieInfo;
