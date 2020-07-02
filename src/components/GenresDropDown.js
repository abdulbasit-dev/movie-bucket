import React, {useState, useEffect, useContext} from 'react'
import {MovieContext} from './MovieContext'
import {Form} from 'react-bootstrap'

const trending =
  'https://api.themoviedb.org/3/trending/all/day?api_key=754ad3989128c7d8cfcc82e6591e7f2e'
const popular =
  'https://api.themoviedb.org/3/movie/popular?api_key=754ad3989128c7d8cfcc82e6591e7f2e&language=en-US'

const GENRE_URL =
  'https://api.themoviedb.org/3/genre/movie/list?api_key=754ad3989128c7d8cfcc82e6591e7f2e&language=en-US'

function GenresDropDown() {
  const [, setMovies] = useContext(MovieContext)
  const [genres, setGenres] = useState([])
  const [popuelerMovies, setPopuelerMovies] = useState([])

  useEffect(() => {
    fetch(GENRE_URL)
      .then(response => response.json())
      .then(data => setGenres(data.genres))

    fetch(popular)
      .then(response => response.json())
      .then(data => setPopuelerMovies(data.results))
  }, [])

  function handleChange(e) {
    //get genra id for the select item

    console.log('value from change', e.target.value)
    console.log('array of genra', genres)

    const selectGenre = genres.find(ele => ele.name === e.target.value)
    e.target[0].disabled = true
    console.log('obje that come from find', selectGenre)

    setMovies(
      popuelerMovies.filter(movie => {
        return movie.genre_ids.includes(selectGenre.id)
      })
    )
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
  )
}

export default GenresDropDown
