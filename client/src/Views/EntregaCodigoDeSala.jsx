import { useParams, useNavigate } from "react-router-dom";

const EntregaCodigoDeSala = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <main className="flex flex-col items-center">
      <article className=" mt-[18px] w-[342px] h-[216px] bg-secondary rounded-xl border-4 border-tertiary flex flex-col items-center justify-around">
        <h1 className="w-[231px] h-[90px] font-grotesk font-bold text-xl text-center text-primary">
          El código de la sala es:
        </h1>
        <p className="font-grotesk font-medium text-body text-primary">{id}</p>
      </article>
      <article className=" mt-[18px] w-[342px] text-center">
        <h1 className="font-grotesk font-light text-lg text-tertiary">
          ¿Qué hago ahora?
        </h1>
        <p className="font-grotesk font-normal text-body text-secondary">
          Espera a que los invitados hagan sus recomendaciones
        </p>
        <img
          src="https://www.movieposters.com/cdn/shop/files/killers-of-the-flower-moon_ade3kdop_480x.progressive.jpg?v=1700081261"
          alt="movie poster"
          className="mt-[8px] w-[342px] h-[180px] rounded-xl object-none object-top"
        />
      </article>
      <article className=" mt-[40px] w-[342px] h-[170px] bg-secondary rounded-xl border-4 border-tertiary flex flex-col items-center justify-around">
        <h1 className="w-[184px] h-[54px] font-grotesk font-normal text-body text-center text-primary">
          Cuando estén listos, haz click en iniciar votación
        </h1>
        <button
          className="w-[184px] h-[36px] rounded-xl bg-primary font-grotesk font-bold text-label text-secondary"
          onClick={navigate(`/sala/${id}/votacion`)}
        >
          INICIAR VOTACION
        </button>
      </article>
    </main>
  );
};

export default EntregaCodigoDeSala;
