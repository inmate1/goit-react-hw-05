import { useState, useEffect } from 'react';
import { getMovieReview } from '../../Api/apiMovie';
import { useParams } from 'react-router-dom';

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await getMovieReview(movieId);
        setMovieReviews(response.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  console.log(movieReviews);
  return (
    <>
      {loading && <p>Loading please wait ...</p>}
      {error && <p>Oops! There was an error, please reload!</p>}
      {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map(movieReview => (
            <li key={movieReview.id}>
              <p>{movieReview.author}</p>
              <p>{movieReview.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        !loading && !error && <p>No reviews available</p>
      )}
    </>
  );
};

export default MovieReviews;
