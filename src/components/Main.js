import React from 'react';
import MovieGrid from './MovieGrid';
import { Container } from 'react-bootstrap';

function Main() {
  return (
    <div>
      <Container>
        <MovieGrid />
      </Container>
    </div>
  );
}

export default Main;
