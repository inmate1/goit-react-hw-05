import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getListCast } from '../../Api/apiMovie';
import styles from "./MovieCast.module.css"
import noimage from "../../img/nopicture.jpg"
const MovieCast = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await getListCast(movieId);
        console.log(response);
        setCasts(response.data.cast);
      } catch (error) {
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);
  console.log(casts);

  return (
    <div>
      MovieCast:
      {loading && <p>Is loading, please wait...</p>}
      {error && <p>Oops! There was an error, please reload!</p>}
      {casts.length !== 0 ? (
        <ul className={styles.movieCastList}>
          {casts.map(cast => (
            <li key={cast.cast_id}>
              <img
                src={cast.profile_path !== null ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}` : noimage}
                alt={cast.name}
                width={150}
              />
              <div>
                <h6>Character: {cast.character}</h6>
                <p>{cast.name}</p>
                <p>Popularity: {cast.popularity}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        !loading && !error && <p>No casts available</p>
      )}
    </div>
  );
};

export default MovieCast;
