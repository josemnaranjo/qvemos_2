import { Formik, Form, Field } from "formik";
const Evaluacion = () => {
  const imgSrc =
    "https://www.movieposters.com/cdn/shop/files/THING_5d1279a2-2e38-4ca0-8cb5-91f9b30b6ebb_480x.progressive.jpg?v=1693491676";
  return (
    <main className="flex flex-col items-center">
      <article
        className="mt-[46px] w-[342px] h-[98px] rounded-xl flex items-center justify-center"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <h1 className="font-grotesk font-bold text-xxl text-primary">TITULO</h1>
      </article>
      <article className="mt-[10px] w-[342px] h-[566px] rounded-xl bg-secondary border-4 border-tertiary">
        <Formik
          initialValues={{
            evaluacion: {
              comentario: "",
              puntuacion: 0,
            },
          }}
          onSubmit={(values) => console.log(values)}
        >
          <Form className="flex flex-col items-center">
            <div className="mt-[80px] flex flex-col gap-y-3">
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
                estrellitas
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
