const EsperaVotacion = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="mt-[36px] w-[342px] h-[108px] font-grotesk font-bold text-xxl text-secondary text-center">
        Espera a que todos voten
      </h1>
      <div className="mt-[20px] w-[342px] h-[340px] rounded-xl bg-tertiary">
        <p className="mt-[150px] text-center text-primary">animacion</p>
      </div>

      <article className="mt-[126px] flex flex-col justify-center items-center gap-y-5">
        <p className="font-grotesk font-normal text-body text-center text-secondary">
          Solo cuando estén todos listos, puedes clickear el botón de abajo
        </p>
        <button className="w-[342px] h-[44px] rounded-lg bg-primary font-grotesk font-bold text-label text-secondary">
          VER PELICULA GANADORA
        </button>
      </article>
    </main>
  );
};

export default EsperaVotacion;
