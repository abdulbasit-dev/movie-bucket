import React from 'react'
import SearchBox from './SearchBox'
import {useLocation} from 'react-router'

function Footer() {
  const location = useLocation()
  return (
    <div className='bg-dark text-center p-4'>{location.pathname === '/' ? <SearchBox /> : ''}</div>
  )
}

export default Footer
