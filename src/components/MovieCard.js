import React from 'react'
import {Link} from 'react-router-dom'

function MovieCard(props) {
  return (
    <div>
      {
        <Link to={`/movie/${props.movie.id}`}>
          <div className='card movie_card'>
            <img
              src={'https://image.tmdb.org/t/p/w300' + props.movie.poster_path}
              className='card-img-top'
              alt='...'
            />
            <div className='card-body'>
              <i
                className='fas fa-play play_button'
                data-toggle='tooltip'
                data-placement='bottom'
                title='Play Trailer'
              ></i>

              <h5 className='card-title'>{props.movie.original_title}</h5>
              <span className='movie_info'>{props.movie.release_date}</span>
              <span className='movie_info float-right'>
                <i className='fas fa-star'></i> {props.movie.vote_average} / 10
              </span>
            </div>
          </div>
        </Link>
      }
    </div>
  )
}

export default MovieCard
