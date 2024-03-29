import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate, useParams, Link } from "react-router-dom";
import { obtenerSesion } from "../api/sesion.services";
import { crearRecomendaciones } from "../api/peliculas.services";

const Recomendaciones = () => {
  const [sesionInfoGenre, setSesionInfoGenre] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const peliculasArray = Object.values(values);
    const recomendaciones = peliculasArray.map((p) => ({ titulo: p }));
    const recoObj = { recomendaciones };
    crearRecomendaciones(id, recoObj);
  };

  const getSesionInfo = async () => {
    const response = await obtenerSesion(id);
    const sesionGenre = response.data.genero.toUpperCase();
    setSesionInfoGenre(sesionGenre);
  };

  useEffect(() => {
    getSesionInfo();
  }, []);
  return (
    <main className="flex flex-col items-center">
      <article>
        <div
          className="mt-[46px] w-[342px] h-[234px] rounded-xl flex justify-center items-center"
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/id/1051146310/photo/screaming-ghost-faces.jpg?s=612x612&w=0&k=20&c=TseAMASw0PVvyijC4t2zjdWyu06Fsr1cn73lcCN8vPg=)",
          }}
        >
          <h1 className="font-limelight font-normal text-xxl text-primary">
            {/* que el genero sea en español */}
            {sesionInfoGenre}
          </h1>
        </div>
      </article>
      <Formik
        initialValues={{
          recomendacionUno: "",
          recomendacionDos: "",
          recomendacionTres: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
          navigate(`/sala/${id}/votacion`);
        }}
      >
        <Form>
          <article className="mt-[8px] w-[342px] h-[388px] bg-secondary rounded-xl border-4 border-tertiary flex flex-col items-center justify-around">
            <h1 className="w-[290px] h-[72px] font-grotesk font-bold text-lg text-primary text-center">
              Ingresa tus recomendaciones
            </h1>
            <Field
              type="text"
              name="recomendacionUno"
              placeholder="recomendacion uno"
              className="w-[183px] h-[26px] rounded-xl px-2 font-grotesk font-bold text-label"
            />
            <Field
              type="text"
              name="recomendacionDos"
              placeholder="recomendacion dos"
              className="w-[183px] h-[26px] rounded-xl px-2 font-grotesk font-bold text-label"
            />
            <Field
              type="text"
              name="recomendacionTres"
              placeholder="recomendacion tres"
              className="w-[183px] h-[26px] rounded-xl px-2 font-grotesk font-bold text-label"
            />
            <button
              type="submit"
              className="w-[76px] h-[28px] bg-primary font-grotesk font-bold text-label text-secondary rounded-xl"
            >
              ENVIAR
            </button>
          </article>
        </Form>
      </Formik>
      <p className="mt-[8px] w-[432px] font-grotesk font-normal text-body text-center text-secondary ">
        ¿No recuerdas el nombre de la película?
      </p>
      <Link to={`/buscador/${id}`}>
        <p className="font-grotesk font-bold text-body text-secondary hover:underline">
          usa el buscador 🔍
        </p>
      </Link>
    </main>
  );
};

export default Recomendaciones;
