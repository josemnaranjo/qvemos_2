const Reglas = () => {
  return (
    <main className="flex flex-col items-center">
      <h1 className="w-[342px] h-[72px] mt-[10px] font-grotesk font-bold text-lg text-tertiary text-center flex flex-col">
        ¡BIENVENIDO/A A <span>Q-VEMOS!</span>
      </h1>
      <p className="w-[342px] mt-[16px] font-grotesk font-light text-tertiary text-body">
        Te ayudamos en el agotador proceso de elegir que ver 😪 🎬
      </p>
      <p className="w-[342px] mt-[4px] flex flex-col gap-y-1 font-grotesk font-light text-tertiary text-body">
        El juego consta de los siguientes pasos:
        <span>1️⃣ El anfitrión elige un género</span>
        <span>2️⃣ Los invitados dan recomendaciones</span>
        <span>3️⃣ Todos votan y gana la película que tenga más votos</span>
      </p>
      <article className="mt-[10px] w-[342px] h-[240px] bg-secondary rounded-xl border-4 border-tertiary flex flex-col items-center">
        <h1 className="mt-[20px] w-[302px] h-[80px] font-grotesk font-bold text-md text-primary">
          Si eres <span className="underline">anfitrión</span>, tus
          responsabilidades son
        </h1>
        <p className="mt-[10px] w-[302px] font-grotesk font-normal text-body text-primary flex flex-col">
          <span>✅ Elegir el género de las recomendaciones</span>
          <span>✅ Nombrar la sala de juego</span>
          <span>✅ Votar por las recomendaciones</span>
        </p>
      </article>
      <article className=" mt-[10px] w-[342px] h-[206px] bg-secondary rounded-xl border-4 border-tertiary flex flex-col items-center">
        <h1 className="mt-[20px] w-[302px] h-[80px] font-grotesk font-bold text-md text-primary">
          Si eres <span className="underline">invitado</span>, tus
          responsabilidades son
        </h1>
        <p className="mt-[10px] w-[302px] font-grotesk font-normal text-body text-primary flex flex-col">
          <span>
            ✅ Dar recomendaciones según el género elegido por el anfitrión
          </span>
          <span>✅ Votar por las recomendaciones</span>
        </p>
      </article>
    </main>
  );
};

export default Reglas;
