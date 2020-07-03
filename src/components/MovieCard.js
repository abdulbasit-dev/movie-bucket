import React from 'react'
import {Card, Button, Overlay, OverlayTrigger, Tooltip} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function MovieCard(props) {
  console.log(props)

  return (
    <div>
      {
        <Link to={`/movie/${props.movie.id}`}>
          <div class='card movie_card'>
            <img
              src={'https://image.tmdb.org/t/p/w300' + props.movie.poster_path}
              class='card-img-top'
              alt='...'
            />
            <div class='card-body'>
              <i
                className='fas fa-play play_button'
                data-toggle='tooltip'
                data-placement='bottom'
                title='Play Trailer'
              ></i>

              <h5 class='card-title'>{props.movie.original_title}</h5>
              <span class='movie_info'>{props.movie.release_date}</span>
              <span class='movie_info float-right'>
                <i class='fas fa-star'></i> {props.movie.vote_average} / 10
              </span>
            </div>
          </div>
        </Link>
      }
    </div>
  )
}

export default MovieCard
