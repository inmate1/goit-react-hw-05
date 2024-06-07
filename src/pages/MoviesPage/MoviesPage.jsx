import {  useSearchParams } from 'react-router-dom';
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
    console.log(value);
    setSearchParams({ query: value });
  };

  console.log(searchParams.get('query'));
  useEffect(() => {
    const fetchSearch = async () => {
      try {
        setLoading(true);

        const queryParams = searchParams.get('query');
        if (queryParams === null) {
          return;
        }
        const response = await getSearch(queryParams);
        setSearchMovies(response.results);
        console.log(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchSearch();
  }, [searchParams]);

  return (
    <main>
      <SearchForm onSearch={handleSubmitForm} />

      {error && <p>Oops! There was an error, please reload!</p>}
      {loading && <p>Loading, please wait...</p>}
      {searchMovies && (
        //  <Suspense fallback={<div>Loading...</div>}>
        <MovieList searchMovies={searchMovies} />
        //  </Suspense>
      )}
    </main>
  );
};
export default MoviesPage;
