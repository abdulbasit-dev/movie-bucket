import React from 'react';
import SearchBox from './SearchBox';
import GenresDropDown from './GenresDropDown';
import logo from '../logo.svg';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Na(props) {
  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
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
  );
}

export default Na;
