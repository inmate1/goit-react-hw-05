import { useSearchParams } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import css from './MoviesPage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import { getSearch } from '../../Api/apiMovie';

const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmitForm = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    const fetchSearch = async () => {
      setLoading(true);
      setError(false);
      try {
        const queryParams = searchParams.get('query');
        if (queryParams === null) {
          return;
        }
        const response = await getSearch(queryParams);
        setSearchMovies(response.results);
      } catch (error) {
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchSearch();
  }, [searchParams]);

  return (
    <>
      <SearchForm onSearch={handleSubmitForm} />

      {error && <p>Oops! There was an error, please reload!</p>}
      {loading && <p>Loading, please wait...</p>}
      {searchMovies && <MovieList searchMovies={searchMovies} />}
    </>
  );
};
export default MoviesPage;
