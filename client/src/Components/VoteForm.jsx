import { Formik, Form, Field } from "formik";
import { votacionDeSesion } from "../api/peliculas.services";
import { useNavigate, useParams } from "react-router-dom";

const VoteForm = ({ recomendaciones }) => {
    const navigate = useNavigate()
    const {id} = useParams();

  const handleSubmit = async (values) => {
    const idArray = recomendaciones.map((m) => ({ id: m.id }));
    const votacionArray = values.votation.map((v, index) => ({
      id: idArray[index].id,
      votacion: v.votacion,
    }));
    const objFinal = { votacionArray };
    await votacionDeSesion(objFinal);
    navigate(`/sala/${id}/espera-votacion`)
  };

  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className=" mt-[10px] w-[342px] h-[62px] font-grotesk font-bold text-lg text-tertiary text-center">
        ¡Que comiencen los juegos!
      </h1>
      <p className="mt-[28px] w-[342px] font-grotesk font-light text-body text-center text-secondary">
        Evalúa las recomendaciones
      </p>
      <Formik initialValues={{}} onSubmit={handleSubmit}>
        <Form className="overflow-scroll">
          {recomendaciones?.map((m, index) => (
            <div
              key={m.id}
              className="mt-[16px] w-[342px] h-[120px] bg-secondary rounded-xl flex flex-col justify-center items-center"
            >
              <h1 className="font-grotesk text-lg font-medium text-primary">
                {m.titulo}
              </h1>
              <Field
                as="select"
                name={`votation[${index}].votacion`}
                className="mt-[8px] px-4 py-1 rounded-xl"
                defaultValue={"placeholder"}
              >
                {/* revisar texto de los niveles */}
                <option value={"placeholder"}>Elige una opción</option>
                <option value={1}>paso!</option>
                <option value={2}>mmm...no sé</option>
                <option value={3}>puede ser</option>
                <option value={4}>me interesa</option>
                <option value={5}>quiero verla ahora!</option>
              </Field>
            </div>
          ))}
          <button
            type="submit"
            className="mt-[16px] w-[342px] h-[45px] bg-primary font-grotesk font-bold text-label text-secondary rounded-xl"
          >
            ENVIAR
          </button>
        </Form>
      </Formik>
    </main>
  );
};

export default VoteForm;
