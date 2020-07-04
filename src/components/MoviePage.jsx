import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Row, Col, ResponsiveEmbed, Button} from 'react-bootstrap'
import {useParams} from 'react-router-dom'

export default function MoviePage() {
  const {id} = useParams()
  const history = useHistory()

  const [movie, setMovie] = useState(null)
  const [video, setVideo] = useState('')
  const [casts, setCasts] = useState(null)
  // setSearchShow('d-none')
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
        // console.log(data.results[0])
        setVideo(data.results[0])
      })
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=754ad3989128c7d8cfcc82e6591e7f2e&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data)
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
      {/* <div className='my-4'>{casts && casts.map(cast => <h1>{cast.name}</h1>)}</div> */}
    </div>
  )
}
