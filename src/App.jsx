import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
// import MovieCast from './components/MovieCast/MovieCast';
// import MovieReviews from './components/MovieReviews/MovieReviews';
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('./components/MovieReviews/MovieReviews')
);


import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
