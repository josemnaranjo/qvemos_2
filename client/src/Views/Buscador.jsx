import { Link, useParams } from "react-router-dom";
import { GoChevronLeft, GoSearch } from "react-icons/go";
import { Formik, Form, Field } from "formik";
import TitleMovieSearch from "../Components/TitleMovieSearch";

const Buscador = () => {
  const titleMovies = [
    {
      id: 1,
      title: "Peli 1",
      sinopsis:
        "Lorem ipsum dolor sit amet consectetur. Ornare proin consequat quis phasellus. Quis orci in malesuada feugiat nisi tempus senectus at dictumst. Praesent non eget nisl eu vitae nibh tristique",
    },
    {
      id: 2,
      title: "La soledad de los numeros primos",
      sinopsis:
        "Lorem ipsum dolor sit amet consectetur. Ornare proin consequat quis phasellus. Quis orci in malesuada feugiat nisi tempus senectus at dictumst. Praesent non eget nisl eu vitae nibh tristique",
    },
    {
      id: 3,
      title: "Titanic",
      sinopsis:
        "Lorem ipsum dolor sit amet consectetur. Ornare proin consequat quis phasellus. Quis orci in malesuada feugiat nisi tempus senectus at dictumst. Praesent non eget nisl eu vitae nibh tristique",
    },
    {
      id: 4,
      title: "Volver al futuro 2",
      sinopsis:
        "Lorem ipsum dolor sit amet consectetur. Ornare proin consequat quis phasellus. Quis orci in malesuada feugiat nisi tempus senectus at dictumst. Praesent non eget nisl eu vitae nibh tristique",
    },
    {
      id: 4,
      title: "Peli 5",
      sinopsis:
        "Lorem ipsum dolor sit amet consectetur. Ornare proin consequat quis phasellus. Quis orci in malesuada feugiat nisi tempus senectus at dictumst. Praesent non eget nisl eu vitae nibh tristique",
    },
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
      {titleMovies?.map((movie) => {
        return (
          <article key={movie.id}>
            <Link to="informacion" state={{ movie }}>
              <TitleMovieSearch movieTitle={movie.title} />
            </Link>
          </article>
        );
      })}
    </main>
  );
};

export default Buscador;
