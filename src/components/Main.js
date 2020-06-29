import React from 'react';
import MovieGrid from './MovieGrid';
import { Container } from 'react-bootstrap';

function Main(props) {
  return (
    <div>
      <Container>
        <MovieGrid movies={props.movies} />
      </Container>
    </div>
  );
}

export default Main;
