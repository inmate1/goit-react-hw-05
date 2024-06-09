import axios from 'axios';

const KEY_URL = import.meta.env.VITE_APP_API_KEY;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: KEY_URL,
  },
};

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSearch = async params => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${params}&include_adult=false&language=en-US&page=1`;

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieById = async movie_id => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;

  try {
    const movieData = await axios.get(url, options);
    return movieData;
  } catch (error) {
    console.error(error);
  }
};

export const getListCast = async movie_id => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`;
  try {
    const response = await axios.get(url, options);
    return response;
  } catch (error) {
    console.error();
  }
};

export const getMovieReview = async movie_id => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=1`;
  try {
    const response = await axios.get(url, options);

    return response;
  } catch (error) {
    console.error();
  }
};
