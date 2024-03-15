

const TitleMovieSearch = ({ movieTitles }) => {
  return (
    <main className="mt-[30px] flex flex-col items-center gap-y-5">
      {movieTitles?.map((m, index) => {
        return (
          <article
            key={index}
            className="h-[90px] w-[300px] bg-primary rounded-xl flex justify-center items-center"
          >
            <h1 className="font-grotesk font-bold text-md text-secondary truncate px-4">
              {m.title}
            </h1>
          </article>
        );
      })}
    </main>
  );
};

export default TitleMovieSearch;
