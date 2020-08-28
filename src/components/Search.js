import React, {useEffect, useState, useContext} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {MovieContext} from './MovieContext'
import MovieGrid from './MovieGrid'

function Search() {
  const location = useLocation()
  const [movies, setMovies] = useContext(MovieContext)
  const params = new URLSearchParams(location.search)
  const query = params.get('query')
  const TMDB_BASE_URL = 'https://api.themoviedb.org/3'

  const constructUrl = (path, query) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      'ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU='
    )}&query=${query}`
  }

  useEffect(() => {
    fetch(constructUrl('search/movie', query))
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
        // console.log(data.results)
        console.log(movies)
      })
  }, [])

  return (
    <div>
      <MovieGrid />
    </div>
  )
}

export default Search
