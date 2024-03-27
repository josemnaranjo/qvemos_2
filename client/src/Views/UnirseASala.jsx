import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { getOneMovieById } from "../api/tmdb.services";

const UnirseASala = () => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState();
  const handleSubmit = (salaId) => {
    navigate(`/sala/${salaId}/recomendaciones`);
  };
  const handleGetMovieSrc = async () => {
    const randomId = Math.random(300) * 100;
    const randomIdCiel = Math.ceil(randomId);
    try {
      const movieData = await getOneMovieById(randomIdCiel);
      setImgSrc(movieData.poster_path);
    } catch (error) {
      setImgSrc("/wt2TRBmFmBn5M5MBcPTwovlREaB.jpg");
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetMovieSrc();
  }, []);
  return (
    <main className="flex flex-col items-center">
      <h1 className="w-[342px] h-[72px] mt-[10px] font-grotesk font-bold text-lg text-tertiary text-center flex flex-col">
        ¡BIENVENIDO/A <span>INVITADO 🍿!</span>
      </h1>
      <p className="w-[342px] h-[44px] mt-[18px] font-grotesk font-normal text-body text-center text-secondary">
        El anfitrión te entregará un código para que ingreses a la sala
      </p>
      <Formik
        initialValues={{ salaId: "" }}
        onSubmit={(values) => {
          handleSubmit(values.salaId);
        }}
      >
        <Form>
          <article className="mt-[30px] w-[342px] h-[352px] bg-secondary rounded-xl border-4 border-tertiary flex flex-col items-center justify-around">
            <label
              htmlFor="salaId"
              className="w-[260px] h-[80px] font-grotesk font-bold text-lg text-primary text-center"
            >
              INGRESA CÓDIGO DE LA SALA 🔑
            </label>
            <Field
              name="salaId"
              className=" w-[183px] h-[26px] rounded-xl px-2 font-grotesk font-bold text-label "
            />
            <button
              type="submit"
              className=" w-[150px] h-[28px] bg-primary font-grotesk font-bold text-label text-secondary rounded-xl"
            >
              INGRESAR A LA SALA
            </button>
          </article>
        </Form>
      </Formik>
      <img
        src={`https://image.tmdb.org/t/p/w400/${imgSrc}`}
        alt="movie poster"
        className="mt-[8px] w-[342px] h-[180px] rounded-xl object-none object-top"
      />
    </main>
  );
};

export default UnirseASala;
