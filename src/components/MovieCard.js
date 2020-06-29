import React from 'react';
import { Card, Button } from 'react-bootstrap';

function MovieCard(props) {
  return (
    <div>
      <Card>
        <Card.Img variant='top' src={'https://image.tmdb.org/t/p/w300' + props.movie.poster_path} />
        <Card.Body>
          <Card.Title>{props.movie.original_title}</Card.Title>
          <Card.Text>{props.movie.release_date}</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
