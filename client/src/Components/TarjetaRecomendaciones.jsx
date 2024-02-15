const TarjetaRecomendaciones = ({ title, rating, imgSrc, genre }) => {
  return (
    <>
      <div
        className="w-[302px] h-[108px] flex flex-col items-center justify-center rounded-xl"
        style={{ backgroundImage: `url(${imgSrc})`}}
      >
        <span className="font-grotesk font-bold text-xl text-primary font-outline-2">
          {title}
        </span>
        <span className="text-primary">{rating}</span>
        <span className="font-grotesk font-bold text-body text-primary font-outline-1">
          {genre}
        </span>
      </div>
    </>
  );
};

export default TarjetaRecomendaciones;
