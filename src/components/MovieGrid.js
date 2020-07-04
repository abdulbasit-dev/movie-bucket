import React, {useContext, useEffect} from 'react'
import MovieCard from './MovieCard'
import {MovieContext} from './MovieContext'
import {Row} from 'react-bootstrap'

function MovieGrid(props) {
  const [movies, setMovies] = useContext(MovieContext)
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=754ad3989128c7d8cfcc82e6591e7f2e&language=en-US'
    )
      .then(res => res.json())
      .then(data => setMovies(data.results))
  })
  return (
    <div className='my-5'>
      <Row className='justify-content-center'>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Row>
    </div>
  )
}

export default MovieGrid
