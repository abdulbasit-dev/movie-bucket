import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, ResponsiveEmbed} from 'react-bootstrap'

export default function MoviePage({match}) {
  // console.log(match.params.title.replace(/-/g, ' '))
  // console.log(match.params.id)
  const [movie, setMovie] = useState(null)
  const [video, setVideo] = useState('')
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=754ad3989128c7d8cfcc82e6591e7f2e&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        setMovie(data)
      })

    fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}/videos?api_key=754ad3989128c7d8cfcc82e6591e7f2e&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data.results[0])
        setVideo(data.results[0])
      })
  }, [])

  return (
    <div className=''>
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
    </div>
  )
}
