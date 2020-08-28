import React, {useState} from 'react'
// import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import {Route, Switch} from 'react-router-dom'
import MovieGrid from './MovieGrid'
import MoviePage from './MoviePage'
import Search from './Search'

function Main() {
  return (
    <div>
      <Container>
        <Switch>
          <Route
            path='/'
            exact
            render={() => {
              return <MovieGrid />
            }}
          />
          <Route path={'/movie/:id'} component={() => <MoviePage />} />
          <Route path={'/search'} component={() => <Search />} />
        </Switch>
      </Container>
    </div>
  )
}

export default Main
