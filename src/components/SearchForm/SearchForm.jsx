import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = evt => {
    evt.preventDefault();
    if (query === '') {
      return;
    }
    onSearch(query);
    setQuery('');
  };
  const handleInput = evt => {
    setQuery(evt.target.value.trim());
  };
  return (
    <form className={css.formSearch} onSubmit={handleSubmit}>
      <input
        className={css.inputSearch}
        type='text'
        name='inputSearch'
        value={query}
        onChange={handleInput}
      />
      <button className={css.buttonSearch} type='submit'>
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;

