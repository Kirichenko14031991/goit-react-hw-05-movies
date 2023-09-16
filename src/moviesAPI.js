import axios from 'axios';

const API_KEY = 'ecd1ef739d214e488f3f5be2896ac87b';
const BASE_URL = 'https://api.themoviedb.org/3';

const TopMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
  return data;
};

const SearchMovies = async searchQuery => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
  return data;
};

const MovieDetails = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return data;
};

const MovieCredits = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data;
};

const MovieReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data;
};

export { TopMovies, SearchMovies, MovieDetails, MovieCredits, MovieReviews };
