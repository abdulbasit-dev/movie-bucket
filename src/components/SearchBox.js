import React, {useState, useContext} from 'react'
import {Form, FormControl, Button, Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function SearchBox(props) {
  const [query, setQuery] = useState('')
  const [spinner, setSpinner] = useState('d-none')
  const [searchText, setSearchText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // setSearchText(query)
    // console.log(searchText)
  }

  function handleChange(e) {
    setQuery(e.target.value)
  }

  return (
    <div className={props.searchShow}>
      <Form inline onSubmit={handleSubmit}>
        <FormControl type='text' onChange={handleChange} placeholder='Search' className='mr-sm-2' />
        <Link to={`/search?query=${query}`}>
          <Button type='submit' variant='outline-info'>
            {spinner === 'd-block' ? (
              <Spinner animation='border' variant='info' className={'d-block'} />
            ) : (
              'Search'
            )}
          </Button>
        </Link>
      </Form>
    </div>
  )
}

export default SearchBox
