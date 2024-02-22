import { Formik, Form, Field } from "formik";

const VoteForm = () => {
  const data = {
    movies: [
      { id: 1, title: "The Shining" },
      { id: 2, title: "The Thing" },
      { id: 3, title: "The Mist" },
      { id: 4, title: "X" },
      { id: 5, title: "The Others" },
      { id: 6, title: "Doctor Sleep" },
      { id: 7, title: "Terrifier" },
      { id: 8, title: "The Witch" },
    ],
  };

  const handleSubmit = (values) => {
    console.log(values);
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
          {data.movies.map((m, index) => (
            <div
              key={m.id}
              className="mt-[16px] w-[342px] h-[120px] bg-secondary rounded-xl flex flex-col justify-center items-center"
            >
              <h1 className="font-grotesk text-lg font-medium text-primary">
                {m.title}
              </h1>
              <Field
                as="select"
                name={`votation[${index}].nota`}
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
