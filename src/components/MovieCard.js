import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function MovieCard(props) {
  return (
    <div>
      <Link to={`/movie/${props.movie.title}`}>
        <Card
          onClick={() => {
            props.setCurMovie(props.movie)
          }}
        >
          <Card.Img
            variant='top'
            src={'https://image.tmdb.org/t/p/w300' + props.movie.poster_path}
          />
          <Card.Body>
            <Card.Title>{props.movie.original_title}</Card.Title>
            <Card.Text>{props.movie.release_date}</Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </Link>
    </div>
  )
}

export default MovieCard
