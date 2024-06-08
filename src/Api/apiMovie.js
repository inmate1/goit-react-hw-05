import axios from 'axios';
const KEY_URL =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzM4NDY2ZTUwZmM1NmYyZmVkMDMyYmQyYzg1OWQ2NyIsInN1YiI6IjY2NWYzYjhiODg3Yjk0YmY1YjY1ODJhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lRgrA0803wFENkS2zupIa3b_N0YMpfkCOdzzNjftKi8';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: KEY_URL,
  },
}
    
export const getTrendingMovies = async () => {
  // const url =
  //   'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSearch = async params => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${params}&include_adult=false&language=en-US&page=1`;
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: KEY_URL,
  //   },
  // };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieById = async movie_id => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: KEY_URL,
  //   },
  // };

  const movieData = await axios.get(url, options);
  return movieData;
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
  console.log(movie_id);
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=1`;
  try {
    const response = await axios.get(url, options);

    return response
  } catch (error) {
    console.error();
  }
};