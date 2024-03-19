import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const getOneMovie = async (movieTitle) => {
  const res = await axios.get("https://api.themoviedb.org/3/search/movie", {
    params: { query: movieTitle, include_adult: true },
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  return res.data;
};

export const getMovieDirector = async (movieId) => {
  const res = await axios.get(
    `
    https://api.themoviedb.org/3/movie/${movieId}/credits`,
    { headers: { Authorization: `Bearer ${apiKey}` } }
  );
  return res.data
};
