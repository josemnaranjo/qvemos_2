import axios from "axios";

export const getOneMovie = async (movieTitle) => {
  const res = await axios.get("https://api.themoviedb.org/3/search/movie", {
    params: { query: movieTitle, include_adult: true },
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjA1MmE4NTAwMmY1MTE2YjBlMmQxMDJlYWEwNWMzNCIsInN1YiI6IjY1YjdhMGFjMTA4OWJhMDE3ZGY4MDlkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.trrVd6pCrEfBP7wTorV9iLb-p4NRw223EFrZu_ETw_8`,
    },
  });
  return res.data;
};
