import React from 'react'
import SearchBox from './SearchBox'
import GenresDropDown from './GenresDropDown'
import logo from '../logo.svg'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Na(props) {
  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Link to='/'>
            <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          </Link>
          <img src={logo} className='App-logo' alt='logo' />
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>

              <GenresDropDown />
            </Nav>
            <SearchBox setMovies={props.setMovies} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Na
