import React, {useContext} from 'react'
import MovieCard from './MovieCard'
import {MovieContext} from './MovieContext'
import {Row, Col} from 'react-bootstrap'

function MovieGrid(props) {
  const [movies] = useContext(MovieContext)
  return (
    <div className='my-5'>
      <Row className='justify-content-center'>
        {movies.map(movie => (
          <MovieCard movie={movie} setCurMovie={props.setCurMovie} />
        ))}
      </Row>
    </div>
  )
}

export default MovieGrid
