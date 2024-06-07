import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getListCast } from '../../Api/apiMovie';
const MovieCast = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchData(params) {
      try {
        setLoading(true);
        const response = await getListCast(movieId);
        console.log(response);
        setCasts(response.data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);
  console.log(casts);

  return (
    <div>
      MovieCast
      {loading && <p>Is loading, please wait...</p>}
      {error && <p>Oops! There was an error, please reload!</p>}
      {casts && (
        <ul>
          {casts.map(cast => (
            <li key={cast.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                      alt={cast.name}
                      width={100}
              />
              <h6>{cast.name}</h6>
              <p>{cast.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
