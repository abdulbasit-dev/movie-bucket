import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Row, Col, ResponsiveEmbed, Button} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import Carousel, {Dots} from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

export default function MoviePage() {
  const {id} = useParams()
  const history = useHistory()

  const [movie, setMovie] = useState(null)
  const [video, setVideo] = useState('')
  const [casts, setCasts] = useState(null)
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=754ad3989128c7d8cfcc82e6591e7f2e&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        setMovie(data)
      })

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=754ad3989128c7d8cfcc82e6591e7f2e&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        setVideo(data.results[0])
      })
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=754ad3989128c7d8cfcc82e6591e7f2e&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        setCasts(data.cast)
      })
  }, [])

  function handleBack() {
    history.goBack()
  }

  return (
    <div className=''>
      <Button onClick={handleBack}>Go Back</Button>
      {movie && (
        <Row className='my-5'>
          <Col md='4' className='border border-danger'>
            <img
              className='img-fluid border-10'
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            />
          </Col>
          <Col md='8' className='border border-warning text-left'>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </Col>
        </Row>
      )}
      {movie && JSON.stringify(movie.genres)}

      <div className='my-4'>
        <ResponsiveEmbed aspectRatio='21by9'>
          <iframe
            width='560'
            height='315'
            src={`https://www.youtube.com/embed/${video.key}`}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          ></iframe>
        </ResponsiveEmbed>
      </div>
      <div className='my-4'></div>

      <Carousel
        slidesPerPage={5}
        arrows
        breakpoints={{
          640: {
            slidesPerPage: 1,
            arrows: false,
          },
          900: {
            slidesPerPage: 2,
            arrows: false,
          },
        }}
      >
        {casts &&
          casts.map(cast => (
            <img
              className='img-fluid p-3'
              key={cast.credit_id}
              src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
            />
          ))}
      </Carousel>
    </div>
  )
}

{
  /* <Link to={`movie/cast`} key={cast.credit_id}>
<img
  className='img-fluid p-3'
  src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
/>
<p>{cast.character}</p>
</Link> */
}
