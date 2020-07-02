import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';
import { Form, FormControl, Button, Spinner } from 'react-bootstrap';

function SearchBox() {
  const [, setMovies] = useContext(MovieContext);
  const [query, setQuery] = useState('');
  const [spinner, setSpinner] = useState('d-none');
  const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

  function handleSubmit(e) {
    e.preventDefault();
    const constructUrl = (path, query) => {
      return `${TMDB_BASE_URL}/${path}?api_key=${atob(
        'ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU='
      )}&query=${query}`;
    };

    fetch(constructUrl('search/movie', query))
      .then(response => response.json())
      .then(data => {
        setSpinner('d-block');

        setMovies(data.results);
        setTimeout(() => {
          setSpinner('d-none');
        }, 400);
      });
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <Form inline onSubmit={handleSubmit}>
        <FormControl type='text' onChange={handleChange} placeholder='Search' className='mr-sm-2' />
        <Button type='submit' variant='outline-info'>
          {spinner === 'd-block' ? (
            <Spinner animation='border' variant='info' className={spinner} />
          ) : (
            'Search'
          )}
        </Button>
      </Form>
    </div>
  );
}

export default SearchBox;
