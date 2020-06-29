import React, { useContext } from 'react';
import MovieCard from './MovieCard';
import { MovieContext } from './MovieContext';
import { Row, Col } from 'react-bootstrap';

function MovieGrid() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className='my-5'>
      <Row className='justify-content-between'>
        {movies.map(movie => (
          <Col md='4' className='my-3' lg='3' key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MovieGrid;
