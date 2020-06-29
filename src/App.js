import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Na from './components/Na';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className='App'>
      <Na setMovies={setMovies} />
      <Main movies={movies} />
      <Footer setMovies={setMovies} />
    </div>
  );
}

export default App;
