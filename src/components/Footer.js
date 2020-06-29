import React from 'react';
import SearchBox from './SearchBox';

function Footer() {
  return (
    <div className='bg-dark text-center p-4 fixed-bottom'>
      <SearchBox />
    </div>
  );
}

export default Footer;
