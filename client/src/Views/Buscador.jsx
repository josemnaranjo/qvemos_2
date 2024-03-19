import { Link, useParams } from "react-router-dom";
import { GoChevronLeft, GoSearch } from "react-icons/go";
import { Formik, Form, Field } from "formik";
import TitleMovieSearch from "../Components/TitleMovieSearch";
import { getOneMovie } from "../api/tmdb.services";
import { useState } from "react";

const Buscador = () => {
  const [moviesData, setMoviesData] = useState([]);
  const { id } = useParams();
  const handleGetMovies = async (query) => {
    const { pelicula } = query;
    const moviesData = await getOneMovie(pelicula);
    setMoviesData(moviesData.results);
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
                className="px-2 rounded-xl"
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
      {moviesData.length === 0 ? (
        <div>
          <h1>Aquí mostraremos los resultados de tu búsqueda</h1>
        </div>
      ) : (
        moviesData.map((movie) => {
          return (
            <article key={movie.id}>
              <Link to="informacion" state={{ movie }}>
                <TitleMovieSearch movieTitle={movie.title} />
              </Link>
            </article>
          );
        })
      )}
    </main>
  );
};

export default Buscador;
