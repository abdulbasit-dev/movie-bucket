import React from 'react';
import SearchBox from './SearchBox';

function Footer(props) {
  return (
    <div className='bg-dark text-center p-4 fixed-bottom'>
      <SearchBox setMovies={props.setMovies} />
    </div>
  );
}

export default Footer;
