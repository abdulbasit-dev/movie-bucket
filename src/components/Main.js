import React, {useState} from 'react'
// import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import {Route, Switch} from 'react-router-dom'
import MovieGrid from './MovieGrid'
import MoviePage from './MoviePage'

function Main() {
  const [curMovie, setCurMovie] = useState({})
  return (
    <div>
      <Container>
        <Switch>
          <Route
            path='/'
            exact
            render={() => {
              return <MovieGrid setCurMovie={setCurMovie} />
            }}
          />
          <Route
            path={`/movie/${curMovie.title}`}
            render={() => {
              return <MoviePage curMovie={curMovie} />
            }}
          />
        </Switch>
      </Container>
    </div>
  )
}

export default Main
