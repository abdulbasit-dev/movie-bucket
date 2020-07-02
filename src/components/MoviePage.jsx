import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Carousel, Item} from 'react-elastic-carousel'

export default function MoviePage({curMovie}) {
  const [movie, setMovie] = useState(null)
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${curMovie.id}?api_key=754ad3989128c7d8cfcc82e6591e7f2e&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        setMovie(data)
      })
  }, [])

  if (movie) {
    console.log(movie.genres)
  }

  return (
    <div>
      <Carousel itemsToShow={1}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
      </Carousel>
      {movie ? <h1>{movie.title}</h1> : <h1>error</h1>}
    </div>
  )
}
