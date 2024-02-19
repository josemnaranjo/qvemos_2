import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

const CrearSala = () => {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    const uuid = self.crypto.randomUUID();
    const shortUuid = uuid.slice(2, 5);
    const newValues = { ...values, nombreSala: values.nombreSala + shortUuid };
    console.log(newValues);
  };
  return (
    <main className="flex flex-col items-center">
      <h1 className="w-[342px] h-[72px] mt-[10px] font-grotesk font-bold text-lg text-tertiary text-center flex flex-col">
        ¡BIENVENIDO/A <span>ANFITRION 👑!</span>
      </h1>
      <p className=" mt-[21px] w-[342px] font-grotesk font-light text-tertiary text-body text-center flex flex-col gap-y-2">
        <span>
          Selecciona el género para que tus invitados recomienden una película
          🍿
        </span>
        <span>Luego, nombra la sala para que comience la votación 🗳</span>
      </p>
      <Formik
        initialValues={{ genre: "", nombreSala: "" }}
        onSubmit={(values) => {
          handleSubmit(values);
          navigate("/anfitrion-entrega-codigo-de-sala");
        }}
      >
        <Form>
          <article className="mt-[30px] w-[342px] h-[160px] bg-secondary rounded-xl border-4 border-tertiary flex flex-col items-center justify-around">
            <label
              htmlFor="genre"
              className="font-grotesk font-bold text-lg text-primary"
            >
              GÉNERO
            </label>
            <Field
              name="genre"
              as="select"
              className=" w-[183px] h-[26px] rounded-xl px-2 font-grotesk font-bold text-label "
            >
              <option value="action">Accion </option>
              <option value="adventure">Aventura</option>
              <option value="animation">Animación</option>
              <option value="comedy">Comedia</option>
              <option value="crime">Crimen</option>
              <option value="drama">Drama</option>
              <option value="fantasy">Fantasia</option>
              <option value="history">Historia</option>
              <option value="horror">Horror</option>
              <option value="mistery">Misterio</option>
              <option value="romance">Romance</option>
              <option value="sience fiction">Ciencia Ficción</option>
              <option value="thriller">Thriller</option>
              <option value="war">Guerra</option>
              <option value="western">Western</option>
            </Field>
          </article>

          <article className="mt-[10px] w-[342px] h-[200px] bg-secondary rounded-xl border-4 border-tertiary flex flex-col items-center justify-around">
            <label
              htmlFor="nombreSala"
              className="font-grotesk font-bold text-lg text-primary"
            >
              NOMBRE DE LA SALA
            </label>
            <Field
              name="nombreSala"
              placeholder="algo simple..."
              className="w-[183px] h-[26px] rounded-xl px-3 font-grotesk font-bold text-label"
            />
            <button
              type="submit"
              className=" w-[105px] h-[28px] bg-primary font-grotesk font-bold text-label text-secondary rounded-xl"
            >
              CREAR SALA
            </button>
          </article>
        </Form>
      </Formik>
    </main>
  );
};

export default CrearSala;
