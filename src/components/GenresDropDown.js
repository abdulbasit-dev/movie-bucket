import React, { useState, useEffect, PureComponent } from 'react';
import { Form } from 'react-bootstrap';

const trending =
  'https://api.themoviedb.org/3/trending/all/day?api_key=754ad3989128c7d8cfcc82e6591e7f2e';
const popular =
  'https://api.themoviedb.org/3/movie/popular?api_key=754ad3989128c7d8cfcc82e6591e7f2e&language=en-US';

function GenresDropDown({ setMovies }) {
  const [genres, setGenres] = useState([]);
  const [popuelerMovies, setPopuelerMovies] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=754ad3989128c7d8cfcc82e6591e7f2e&language=en-US'
    )
      .then(response => response.json())
      .then(data => setGenres(data.genres));

    fetch(trending)
      .then(response => response.json())
      .then(data => setPopuelerMovies(data.results));
  }, []);

  function handleChange(e) {
    //get genra id for the select item
    const selectGenre = genres.find(ele => ele.name === e.target.value);
    e.target[0].disabled = true;

    setMovies(
      popuelerMovies.filter(movie => {
        return movie.genre_ids.includes(selectGenre.id);
      })
    );
  }

  return (
    <div>
      <Form>
        <Form.Control as='select' onChange={handleChange}>
          <option disabled={false} value='hola'>
            Choose Genre
          </option>
          {genres.map(genre => (
            <option key={genre.id} id={genre.id}>
              {genre.name}
            </option>
          ))}
        </Form.Control>
      </Form>
    </div>
  );
}

export default GenresDropDown;
