const TarjetaRecomendaciones = ({ title, rating, imgSrc, genre }) => {
    
  return (
    <div className={`bg-[url('${imgSrc}')] w-[302px] h-[108px] flex flex-col items-center justify-center rounded-xl`}>
      <span className="font-grotesk font-bold text-xl text-primary">{title}</span>
      <span className="text-primary">{rating}</span>
      <span className="font-grotesk font-medium text-body text-primary">{genre}</span>
    </div>
  );
};

export default TarjetaRecomendaciones;
