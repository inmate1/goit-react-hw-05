// Для отображения списка фильмов создайте компонент MovieList . Используйте его на страницах HomePage и MoviesPage .

// import { useState, useEffect } from 'react';
import css from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';
// import { getTrendingMovies } from '../../Api/apiMovie';

const MovieList = ({ movies, searchMovies }) => {
  // const [source, setSource] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const location = useLocation();

  // useEffect(() => {
  //   async function imageSource() {
  //     try {
  //       setLoading(true);
  //       const data = await getTrendingMovies();
  //       setSource(data.results);
  //     } catch {
  //       setError(true);
  //       setLoading(false);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   imageSource();
  // }, []);

  // const baseUrl = source && source.secure_base_url;
  // const baseSize = source && source.poster_sizes[6];

  return (
    <div>
      {/* {loading && <p>Is loading, please wait...</p>}
      {error && <p>Oops! There was an error, please reload!</p>} */}
      {movies && (
        <ul className={css.listMovies}>
          {movies.map(movie => (
            <li key={movie.id} className={css.listItem}>
              <Link
                className={css.linkSearchMovie}
                to={`/movies/${movie.id}`}
                state={location}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {searchMovies && (
        <>
          <h1 className={css.titleSearch}>Searched movies:</h1>
          <ul className={css.searchMoviesList}>
            {searchMovies.map(movie => (
              <li className={css.searchMoviesListItem} key={movie.id}>
                <Link
                  className={css.linkSearchMovie}
                  to={`/movies/${movie.id}`}
                  state={location}>
                  {movie.title}
                </Link>
                <h5>{`/movies/${movie.id}`}</h5>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MovieList;
