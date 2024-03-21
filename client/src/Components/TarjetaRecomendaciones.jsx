import { useState, useEffect } from "react";
import { getOneMovie } from "../api/tmdb.services";

const TarjetaRecomendaciones = ({ title, rating, genre }) => {
  const [imgSrc, setImgSrc] = useState();
  const handleGetImgSrc = async (title) => {
    const movieInfo = await getOneMovie(title);
    setImgSrc(movieInfo.results[0].poster_path);
  };

  const transformNumberToStars = (number) => {
    if (number === 1) return "⭐";
    if (number === 2) return "⭐⭐";
    if (number === 3) return "⭐⭐⭐";
    if (number === 4) return "⭐⭐⭐⭐";
    if (number === 5) return "⭐⭐⭐⭐⭐";
  };

  useEffect(() => {
    handleGetImgSrc(title);
  }, []);
  return (
    <>
      <div
        className="w-[302px] h-[108px] flex flex-col items-center justify-center rounded-xl"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300/${imgSrc})`,
        }}
      >
        <span className="font-grotesk font-bold text-xl text-primary font-outline-2">
          {title?.toUpperCase()}
        </span>
        <span className="text-primary">{transformNumberToStars(rating)}</span>
        <span className="font-grotesk font-bold text-body text-primary font-outline-1">
          {genre}
        </span>
      </div>
    </>
  );
};

export default TarjetaRecomendaciones;
