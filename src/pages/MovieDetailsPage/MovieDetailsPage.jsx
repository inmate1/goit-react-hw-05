// Компоненты MovieCastне MovieReviewsявляются отдельными страницами, они являются лишь частями страницы MovieDetailsPage, поэтому файлы этих компонентов храним в src/components.
import { useState, useEffect, useRef, Suspense } from 'react';
import {
  Link,
  NavLink,
  useParams,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import css from './MovieDetailsPage.module.css';
import { getMovieById } from '../../Api/apiMovie';
import picture from '../../img/nopicture.jpg';

const MovieDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state ?? '/movies');

  const buildLinkClass = isActive =>
    `${css.link} ${isActive ? css.active : ''}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await getMovieById(movieId);
        setMovie(response.data);
      } catch (error) {
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {loading && <p>Is loading, please wait...</p>}
      {error && <p>Oops! There was an error, please reload!</p>}
      <div className={css.backWrapper}>
        <Link className={css.backLink} to={backLink.current}>
          Go back
        </Link>
      </div>
      {movie && (
        <>
          <div className={css.movieWrapper}>
            <img
              className={css.movieImage}
              height='300'
              width='500'
              src={
                movie.backdrop_path !== null
                  ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                  : picture
              }
              alt={movie.title}
            />
            <div className={css.partMovieWrapper}>
              <h2>{movie.title}</h2>
              <p className={css.movieTitle}>Overview:</p>
              <p className={css.movieDesc}>{movie.overview} </p>
              <p className={css.movieTitle}>Genres:</p>
              <p className={css.movieDesc}>
                {movie.genres.map(genre => genre.name).join(', ')}
              </p>
              <p className={css.movieTitle}>Views:</p>
              <p className={css.movieDesc}>{movie.popularity}</p>
            </div>
          </div>
          <h3 className={css.desc}>Additional information</h3>
          <ul className={css.additionalList}>
            <li className={css.listItem}>
              <NavLink className={buildLinkClass} to='cast'>
                Cast
              </NavLink>
            </li>
            <li className={css.listItem}>
              <NavLink className={buildLinkClass} to='reviews'>
                Reviews
              </NavLink>
            </li>
          </ul>
          <main>
            <Suspense
              fallback={
                <ClipLoader color={'#123abc'} loading={true} size={100} />
              }>
              <Outlet />
            </Suspense>
          </main>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
