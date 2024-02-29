import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const Registrarse = () => {
  const validationSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, "Muy corto")
      .max(10, "Muy largo")
      .required("Debes ingresar un nombre"),
    password: Yup.string()
      .min(3, "Muy corto")
      .max(7, "Muy largo")
      .required("Debes ingresar una contraseña"),
  });
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <main className="flex flex-col items-center">
      <article className="mt-[16px] w-[342px] bg-secondary rounded-lg">
        <h1 className="font-grotesk font-bold text-lg text-primary text-center">
          Registro
        </h1>
        <Formik
          initialValues={{ nombre: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col items-center">
              <div className="flex flex-col">
                <label
                  htmlFor="nombre"
                  className="font-grotesk font-normal text-label text-primary"
                >
                  nombre de usuario
                </label>
                <Field
                  type="text"
                  name="nombre"
                  className="mt-[8px] w-[126px] px-[4px] rounded-xl"
                />
                {errors.nombre && touched.nombre ? (
                  <p className="mt-[4px] font-grotesk font-bold text-label text-primary">
                    {errors.nombre}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="nombre"
                  className="mt-[8px] font-grotesk font-normal text-label text-primary"
                >
                  contraseña
                </label>
                <Field
                  type="password"
                  name="password"
                  className="mt-[8px] w-[126px] px-[4px] rounded-xl"
                />
                {errors.password && touched.password ? (
                  <p className=" mt-[4px] font-grotesk font-bold text-label text-primary">
                    {errors.password}
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                className="mt-[16px] mb-[16px] bg-primary rounded-lg px-2 font-grotesk font-normal text-label text-secondary"
              >
                crear usuario
              </button>
            </Form>
          )}
        </Formik>
      </article>
    </main>
  );
};

export default Registrarse;
