import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { resultadosVotacion, evaluarPelicula } from "../api/peliculas.services";
import { getOneMovie } from "../api/tmdb.services";

const Evaluacion = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [peliculaGanadora, setPeliculaGanadora] = useState();
  const [imgSrc, setImgSrc] = useState();

  const handleGetPeliculaGanadora = async () => {
    const response = await resultadosVotacion(id);
    setPeliculaGanadora(response.data);
    const movieTitle = response.data.titulo;
    const movieInfo = await getOneMovie(movieTitle);
    setImgSrc(movieInfo.results[0].poster_path);
  };

  const handleSubmit = async (values) => {
    const titulo = peliculaGanadora.titulo;
    const evaluacion = { titulo: titulo, ...values.evaluacion };
    await evaluarPelicula(evaluacion);
    navigate("/");
  };
  useEffect(() => {
    handleGetPeliculaGanadora();
  }, []);
  return (
    <main className="flex flex-col items-center">
      <article
        className="mt-[46px] w-[342px] h-[200px] rounded-xl flex items-center justify-center px-2"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w400/${imgSrc})`,
        }}
      >
        <h1 className="font-grotesk font-bold text-xl text-primary font-outline-2 text-center">
          {peliculaGanadora?.titulo}
        </h1>
      </article>
      <article className="mt-[20px] w-[342px] rounded-xl bg-secondary border-4 border-tertiary">
        <Formik
          initialValues={{
            evaluacion: {
              comentario: "",
              puntuacion: 0,
            },
          }}
          onSubmit={(values) => handleSubmit(values)}
        >
          <Form className="flex flex-col items-center py-10">
            <div className="flex flex-col gap-y-3">
              <label
                htmlFor="evaluacion.comentario"
                className="font-grotesk font-normal text-body text-primary"
              >
                ingresa tu comentario
              </label>
              <Field
                as="textarea"
                name={"evaluacion.comentario"}
                className="rounded-xl w-[282px] px-2"
              />
            </div>
            <div className="mt-[60px] flex flex-col items-center gap-y-3">
              <label
                htmlFor="evaluacion.puntuacion"
                className="font-grotesk font-normal text-body text-primary"
              >
                ¿Cuántas estrellitas?
              </label>
              <Field
                as="select"
                name={"evaluacion.puntuacion"}
                className="rounded-xl px-3 py-1 text-center"
              >
                <option value={1}>⭐</option>
                <option value={2}>⭐⭐</option>
                <option value={3}>⭐⭐⭐</option>
                <option value={4}>⭐⭐⭐⭐</option>
                <option value={5}>⭐⭐⭐⭐⭐</option>
              </Field>
            </div>
            <button
              type="submit"
              className="mt-[80px] w-[184px] h-[36px] bg-primary rounded-xl font-grotesk font-bold text-label text-secondary"
            >
              EVALUAR
            </button>
          </Form>
        </Formik>
      </article>
    </main>
  );
};

export default Evaluacion;
