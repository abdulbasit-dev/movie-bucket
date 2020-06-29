import React from 'react';
import MovieCard from './MovieCard';
import { Row, Col, Container } from 'react-bootstrap';

function MovieGrid(props) {
  return (
    <div className='my-5'>
      <Row className='justify-content-between'>
        {props.movies.map(movie => (
          <Col md='4' className='my-3' lg='3' key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MovieGrid;
