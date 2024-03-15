import { Link, useParams } from "react-router-dom";
import { GoChevronLeft, GoSearch } from "react-icons/go";
import { Formik, Form, Field } from "formik";
import TitleMovieSearch from "../Components/TitleMovieSearch";

const Buscador = () => {
  const titleMovies = [
    { title: "Peli 1" },
    { title: "La soledad de los numeros primos" },
    { title: "Titanic" },
    { title: "Volver al futuro 2" },
    { title: "Peli 5" },
  ];
  const { id } = useParams();
  const handleGetMovies = (query) => {
    console.log(query);
  };
  return (
    <main className="flex flex-col items-center">
      <article className=" mt-[40px] bg-secondary h-[82px] w-[341px] flex items-center rounded-xl">
        <div className="flex gap-x-1">
          <Link to={`/sala/${id}/recomendaciones`}>
            <GoChevronLeft size={30} color="white" className="ml-4" />
          </Link>
          <Formik
            initialValues={{ pelicula: "" }}
            onSubmit={(values, { resetForm }) => {
              handleGetMovies(values), resetForm();
            }}
          >
            <Form className="flex ml-8">
              <Field
                type="text"
                name="pelicula"
                placeholder="vovler al futuro..."
                className="px-1 rounded-xl"
              />
              <button type="submit">
                <GoSearch
                  size={30}
                  color="white"
                  className="ml-[5px] bg-primary rounded-2xl p-1"
                />
              </button>
            </Form>
          </Formik>
        </div>
      </article>
      <article className="mt-[20px] bg-secondary w-[341px] h-[600px] rounded-xl">
        <TitleMovieSearch movieTitles={titleMovies} />
      </article>
    </main>
  );
};

export default Buscador;
