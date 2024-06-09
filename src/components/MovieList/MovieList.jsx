// Для отображения списка фильмов создайте компонент MovieList . Используйте его на страницах HomePage и MoviesPage .

import css from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies, searchMovies }) => {
  const location = useLocation();

  return (
    <div>
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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  searchMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
